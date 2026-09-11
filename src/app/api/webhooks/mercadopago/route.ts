import { NextRequest, NextResponse } from "next/server";
import { InvalidWebhookSignatureError, WebhookSignatureValidator } from "mercadopago";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type JsonRecord = Record<string, unknown>;

function record(value: unknown): JsonRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? value as JsonRecord : {};
}

function text(value: unknown, fallback = "No proporcionado") {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function escapeHtml(value: unknown) {
  return text(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[character] || character);
}

function money(value: unknown) {
  const amount = Number(value);
  return Number.isFinite(amount)
    ? new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(amount)
    : "No disponible";
}

export async function POST(request: NextRequest) {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  const webhookSecret = process.env.MERCADOPAGO_WEBHOOK_SECRET;
  const resendKey = process.env.RESEND_API_KEY;
  if (!accessToken || !webhookSecret || !resendKey) {
    console.error("Missing Mercado Pago webhook or Resend configuration");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
  }

  let body: JsonRecord;
  try {
    body = record(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const queryOrderId = request.nextUrl.searchParams.get("data.id") || "";
  const bodyOrderId = text(record(body.data).id, "");
  const orderId = queryOrderId || bodyOrderId;
  if (body.type !== "order" || !orderId.startsWith("ORD")) {
    return NextResponse.json({ received: true });
  }

  try {
    WebhookSignatureValidator.validate({
      xSignature: request.headers.get("x-signature") || "",
      xRequestId: request.headers.get("x-request-id") || "",
      dataId: orderId,
      secret: webhookSecret,
    });
  } catch (error) {
    if (error instanceof InvalidWebhookSignatureError) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
    throw error;
  }

  const orderResponse = await fetch(`https://api.mercadopago.com/v1/orders/${encodeURIComponent(orderId)}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });
  if (!orderResponse.ok) {
    console.error("Could not retrieve Mercado Pago order", orderResponse.status, orderId);
    return NextResponse.json({ error: "Could not retrieve order" }, { status: 502 });
  }

  const order = record(await orderResponse.json());
  const transactions = Array.isArray(order.transactions) ? order.transactions.map(record) : [];
  const payments = transactions.flatMap((transaction) => Array.isArray(transaction.payments) ? transaction.payments.map(record) : []);
  const approved = order.status === "processed" && (
    order.status_detail === "accredited" || payments.some((payment) => payment.status === "approved")
  );
  if (!approved) return NextResponse.json({ received: true, emailed: false });

  const payer = record(order.payer);
  const phone = record(payer.phone);
  const address = record(payer.address);
  const items = Array.isArray(order.items) ? order.items.map(record) : [];
  const itemRows = items.map((item) => `
    <tr>
      <td style="padding:10px;border-bottom:1px solid #e5e7eb">${escapeHtml(item.title)}</td>
      <td style="padding:10px;border-bottom:1px solid #e5e7eb;text-align:center">${escapeHtml(item.quantity)}</td>
      <td style="padding:10px;border-bottom:1px solid #e5e7eb;text-align:right">${escapeHtml(money(item.unit_price))}</td>
    </tr>`).join("");
  const customerName = `${text(payer.first_name, "")} ${text(payer.last_name, "")}`.trim() || "No proporcionado";
  const customerPhone = `${text(phone.area_code, "")} ${text(phone.number, "")}`.trim() || "No proporcionado";
  const street = [text(address.street_name, ""), text(address.street_number, "")].filter(Boolean).join(" ") || "No proporcionada";

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `paaki-order-${orderId}`,
    },
    body: JSON.stringify({
      from: "Paaki <direccion@paaki.com.mx>",
      to: ["jeronimocanedo2@gmail.com"],
      reply_to: text(payer.email, "direccion@paaki.com.mx"),
      subject: `Nueva compra aprobada · ${text(order.external_reference, orderId)}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#172117">
          <div style="background:#198a11;color:white;padding:22px 26px"><h1 style="margin:0;font-size:25px">Nueva compra aprobada</h1></div>
          <div style="padding:26px;border:1px solid #dfe8da;border-top:0">
            <p><strong>Pedido:</strong> ${escapeHtml(order.external_reference || orderId)}</p>
            <p><strong>Total pagado:</strong> ${escapeHtml(money(order.total_amount))}</p>
            <h2 style="margin-top:28px">Productos</h2>
            <table style="border-collapse:collapse;width:100%"><thead><tr><th style="padding:10px;text-align:left">Producto</th><th>Cantidad</th><th style="text-align:right">Precio</th></tr></thead><tbody>${itemRows}</tbody></table>
            <h2 style="margin-top:28px">Datos del cliente y entrega</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(customerName)}<br>
            <strong>Correo:</strong> ${escapeHtml(payer.email)}<br>
            <strong>Teléfono:</strong> ${escapeHtml(customerPhone)}<br>
            <strong>Dirección:</strong> ${escapeHtml(street)}, ${escapeHtml(address.neighborhood)}, ${escapeHtml(address.city)}, C.P. ${escapeHtml(address.zip_code)}<br>
            <strong>Referencias:</strong> ${escapeHtml(address.complement)}</p>
            <p style="margin-top:28px;color:#596559">Envío gratis en la Zona Metropolitana de Guadalajara. Contacta al cliente para coordinar la entrega en un máximo de 5 días hábiles.</p>
          </div>
        </div>`,
      tags: [{ name: "order_id", value: orderId }],
    }),
  });

  if (!emailResponse.ok) {
    console.error("Resend email error", emailResponse.status, await emailResponse.text());
    return NextResponse.json({ error: "Email could not be sent" }, { status: 502 });
  }

  return NextResponse.json({ received: true, emailed: true });
}
