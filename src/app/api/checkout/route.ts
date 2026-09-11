import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type CatalogItem = { title: string; price: number };
type CheckoutItem = { id?: unknown; quantity?: unknown };

const catalog: Record<string, CatalogItem> = {
  "smart-start-Individual": { title: "Base eléctrica Smart Start · Individual", price: 4499 },
  "smart-start-Matrimonial": { title: "Base eléctrica Smart Start · Matrimonial", price: 4699 },
  "smart-start-Queen": { title: "Base eléctrica Smart Start · Queen", price: 5199 },
  "smart-start-King": { title: "Base eléctrica Smart Start · King", price: 5999 },
  "cama-comprimida-Individual": { title: "Cama comprimida 3 en 1 · Individual", price: 8000 },
  "cama-comprimida-Matrimonial": { title: "Cama comprimida 3 en 1 · Matrimonial", price: 9499 },
  "cama-comprimida-Queen": { title: "Cama comprimida 3 en 1 · Queen", price: 11000 },
  "cama-comprimida-King": { title: "Cama comprimida 3 en 1 · King", price: 13199 },
  "sofá-cama-turquía": { title: "Sofá cama Turquía", price: 7010 },
  "sala-europa": { title: "Sala Europa", price: 11008 },
  "sofá-trébol": { title: "Sofá Trébol", price: 3250 },
};

const zmgMunicipalities = new Set([
  "Guadalajara", "Zapopan", "San Pedro Tlaquepaque", "Tonalá", "Tlajomulco de Zúñiga",
  "El Salto", "Juanacatlán", "Ixtlahuacán de los Membrillos", "Zapotlanejo",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function getPublicOrigin(request: NextRequest) {
  const requestOrigin = new URL(request.url).origin;
  if (!requestOrigin.includes("localhost") && !requestOrigin.includes("127.0.0.1")) return requestOrigin;
  return "https://www.paaki.com.mx";
}

export async function POST(request: NextRequest) {
  try {
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) return NextResponse.json({ error: "Mercado Pago todavía no está configurado en este ambiente." }, { status: 503 });

    const body = await request.json();
    const requestedItems: CheckoutItem[] = Array.isArray(body.items) ? body.items : [];
    const customer = body.customer && typeof body.customer === "object" ? body.customer : {};
    if (!requestedItems.length || requestedItems.length > 12) return NextResponse.json({ error: "El carrito no es válido." }, { status: 400 });

    const items = requestedItems.map((requested) => {
      const id = typeof requested.id === "string" ? requested.id : "";
      const quantity = Number(requested.quantity);
      const product = catalog[id];
      if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 10) throw new Error("INVALID_CART");
      return {
        external_code: id.replace(/[^a-zA-Z0-9_-]/g, "-").slice(0, 50),
        title: product.title,
        description: "Producto Paaki con envío gratis en la ZMG",
        quantity,
        unit_price: product.price.toFixed(2),
      };
    });

    const name = clean(customer.name, 100);
    const email = clean(customer.email, 120).toLowerCase();
    const phone = clean(customer.phone, 18).replace(/\D/g, "");
    const street = clean(customer.street, 140);
    const neighborhood = clean(customer.neighborhood, 80);
    const postalCode = clean(customer.postalCode, 5);
    const municipality = clean(customer.municipality, 80);
    const references = clean(customer.references, 200);
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || phone.length < 10 || !street || !neighborhood || !/^\d{5}$/.test(postalCode) || !zmgMunicipalities.has(municipality)) {
      return NextResponse.json({ error: "Revisa tus datos de entrega y vuelve a intentarlo." }, { status: 400 });
    }

    const [firstName, ...lastNameParts] = name.split(/\s+/);
    const total = requestedItems.reduce((sum, requested) => {
      const product = catalog[String(requested.id)];
      return sum + product.price * Number(requested.quantity);
    }, 0).toFixed(2);
    const reference = `PAAKI-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
    const origin = getPublicOrigin(request);
    const payerEmail = process.env.VERCEL_ENV === "preview" ? "comprador_paaki@testuser.com" : email;

    const mercadoPagoResponse = await fetch("https://api.mercadopago.com/v1/orders", {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json", "X-Idempotency-Key": crypto.randomUUID() },
      body: JSON.stringify({
        type: "online",
        processing_mode: "manual",
        capture_mode: "automatic_async",
        total_amount: total,
        external_reference: reference,
        description: "Compra en Paaki",
        payer: {
          email: payerEmail,
          first_name: firstName,
          last_name: lastNameParts.join(" ") || firstName,
          phone: { area_code: "33", number: phone.slice(-8) },
          address: {
            zip_code: postalCode,
            street_name: street,
            street_number: "S/N",
            neighborhood,
            city: municipality,
            ...(references ? { complement: references } : {}),
          },
        },
        config: {
          statement_descriptor: "PAAKI",
          online: { success_url: `${origin}/pago/exitoso`, failure_url: `${origin}/pago/error`, pending_url: `${origin}/pago/pendiente`, auto_return: "approved" },
        },
        items,
      }),
      cache: "no-store",
    });

    const mercadoPagoResult = await mercadoPagoResponse.json();
    if (!mercadoPagoResponse.ok || typeof mercadoPagoResult.checkout_url !== "string") {
      console.error("Mercado Pago order error", mercadoPagoResponse.status, JSON.stringify(mercadoPagoResult));
      return NextResponse.json({ error: "Mercado Pago no pudo iniciar el cobro. Inténtalo nuevamente." }, { status: 502 });
    }
    return NextResponse.json({ checkoutUrl: mercadoPagoResult.checkout_url, orderId: mercadoPagoResult.id });
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_CART") return NextResponse.json({ error: "Uno de los productos del carrito no es válido." }, { status: 400 });
    return NextResponse.json({ error: "No pudimos iniciar el pago. Inténtalo nuevamente." }, { status: 500 });
  }
}
