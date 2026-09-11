"use client";

import { useEffect } from "react";
import { useCart } from "../../components/CartProvider";

export default function PaymentSuccessPage() {
  const { clearCart } = useCart();
  useEffect(() => { clearCart(); }, [clearCart]);
  return <main className="payment-result"><div className="payment-result-card"><span className="payment-result-icon">✓</span><p className="eyebrow">Gracias por tu compra</p><h1>Recibimos tu pago.</h1><p>Estamos confirmando los datos de tu pedido. Nos comunicaremos contigo para coordinar la entrega en un plazo máximo de 5 días hábiles.</p><a className="primary-button" href="/">Volver al inicio</a></div></main>;
}
