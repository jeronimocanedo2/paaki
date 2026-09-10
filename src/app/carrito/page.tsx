"use client";

import Image from "next/image";
import CartButton from "../components/CartButton";
import { useCart } from "../components/CartProvider";

const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

export default function CartPage() {
  const { items, subtotal, changeQuantity, removeItem } = useCart();

  return (
    <main>
      <div className="announcement">Envío gratis en la Zona Metropolitana de Guadalajara · Compra segura</div>
      <header className="navbar">
        <a className="brand" href="/" aria-label="Paaki, inicio"><Image src="/logo-header.png" alt="Paaki" width={208} height={88} priority /></a>
        <nav aria-label="Navegación principal"><a href="/productos/base-smart-start">Smart Start</a><a href="/productos/base-smart-start#galeria">Galería</a><a href="/productos/base-smart-start#beneficios">Beneficios</a><a href="mailto:direccion@paaki.com.mx">Contacto</a></nav>
        <CartButton />
      </header>

      <div className="breadcrumb"><a href="/">Inicio</a><span>/</span><span>Carrito</span></div>
      <section className="cart-page">
        <div className="cart-heading"><p className="eyebrow">Tu selección</p><h1>Carrito de compra</h1></div>
        {items.length === 0 ? (
          <div className="empty-cart">
            <Image src="/paaki-carrito.png" alt="Paaki caminando con un carrito de compras" width={420} height={525} priority />
            <div><h2>Tu carrito está vacío</h2><p>Explora nuestros productos y agrega tus favoritos.</p><a className="primary-button" href="/productos/base-smart-start">Ver productos</a></div>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <Image src={item.image} alt={item.name} width={180} height={180} />
                  <div className="cart-item-info"><h2>{item.name}</h2>{item.variant && <p>{item.variant}</p>}<strong>{money.format(item.price)} MXN</strong><button type="button" className="remove-button" onClick={() => removeItem(item.id)}>Eliminar</button></div>
                  <div className="quantity-control" aria-label={`Cantidad de ${item.name}`}><button type="button" onClick={() => changeQuantity(item.id, item.quantity - 1)}>−</button><span>{item.quantity}</span><button type="button" onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button></div>
                  <strong className="line-total">{money.format(item.price * item.quantity)}</strong>
                </article>
              ))}
            </div>
            <aside className="cart-summary">
              <h2>Resumen</h2><div><span>Subtotal</span><strong>{money.format(subtotal)}</strong></div><div><span>Envío en ZMG</span><strong>Gratis</strong></div><p>Entrega disponible únicamente en la Zona Metropolitana de Guadalajara.</p>
              <button className="buy-button checkout-button" type="button" disabled>Finalizar compra próximamente</button>
              <small>¿Necesitas ayuda? Escríbenos a <a className="contact-email" href="mailto:direccion@paaki.com.mx">direccion@paaki.com.mx</a>.</small>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
