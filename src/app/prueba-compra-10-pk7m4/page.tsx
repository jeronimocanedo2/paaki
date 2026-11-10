"use client";

import Image from "next/image";
import CartButton from "../components/CartButton";
import { useCart } from "../components/CartProvider";

export default function PrivatePurchaseTestPage() {
  const { items, addItem } = useCart();
  const added = items.some((item) => item.id === "paaki-production-test-10");

  function addTestPurchase() {
    addItem({
      id: "paaki-production-test-10",
      name: "Prueba de compra Paaki",
      variant: "Prueba real temporal",
      price: 10,
      image: "/logo-header.png",
    });
  }

  return (
    <main>
      <div className="announcement">Página privada de verificación · El cargo de $10 MXN es real</div>
      <header className="navbar">
        <a className="brand" href="/" aria-label="Paaki, inicio"><Image src="/logo-header.png" alt="Paaki" width={208} height={88} priority /></a>
        <CartButton />
      </header>
      <section className="cart-page">
        <div className="cart-heading"><p className="eyebrow">Prueba privada</p><h1>Compra de verificación</h1></div>
        <div className="cart-summary private-test-card">
          <h2>Prueba de compra Paaki</h2>
          <p>Este producto temporal permite comprobar el cobro real de Mercado Pago, el correo del pedido y el vaciado del carrito.</p>
          <div><span>Total real</span><strong>$10 MXN</strong></div>
          <p>Realiza el pago desde una ventana de incógnito y, de preferencia, con una tarjeta o cuenta distinta a la cuenta vendedora.</p>
          {added ? <a className="buy-button checkout-button" href="/carrito">Continuar al carrito</a> : <button className="buy-button checkout-button" type="button" onClick={addTestPurchase}>Agregar prueba de $10</button>}
          <small>Después de verificar el resultado, este producto y su enlace serán retirados.</small>
        </div>
      </section>
    </main>
  );
}
