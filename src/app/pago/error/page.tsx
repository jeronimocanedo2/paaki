export default function PaymentErrorPage() {
  return <main className="payment-result"><div className="payment-result-card"><span className="payment-result-icon error">!</span><p className="eyebrow">No se completó el pago</p><h1>Podemos intentarlo de nuevo.</h1><p>No se realizó ningún cobro. Regresa a tu carrito o escríbenos por WhatsApp si necesitas ayuda.</p><div className="payment-result-actions"><a className="primary-button" href="/carrito">Volver al carrito</a><a className="light-button" href="https://wa.me/523312309999">Ayuda por WhatsApp</a></div></div></main>;
}
