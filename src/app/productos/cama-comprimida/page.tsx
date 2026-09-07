"use client";

import Image from "next/image";
import { useState } from "react";

const sizes = [
  { name: "Individual", price: 8000 },
  { name: "Matrimonial", price: 9499 },
  { name: "Queen", price: 11000 },
  { name: "King", price: 13199 },
];

const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

export default function CompressedBedPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <main>
      <div className="announcement">Envíos desde Guadalajara · Compra segura</div>
      <header className="navbar">
        <a className="brand" href="/" aria-label="Paaki, inicio"><Image src="/logo.png" alt="Paaki" width={180} height={72} priority /></a>
        <nav aria-label="Navegación principal"><a href="/">Inicio</a><a href="/#producto">Smart Start</a></nav>
        <button className="cart" type="button" aria-label={`Carrito con ${cartCount} productos`}>Carrito <b>{cartCount}</b></button>
      </header>

      <div className="breadcrumb"><a href="/">Inicio</a><span>/</span><span>Cama comprimida 3 en 1</span></div>

      <section className="product-section product-page-section">
        <div className="compressed-visual">
          <span className="product-badge">3 piezas incluidas</span>
          <Image src="/cama-comprimida-3-en-1.jpeg" alt="Cama comprimida con cabecera, colchón y base en color Oxford marino" width={1008} height={1300} priority className="compressed-image" />
        </div>
        <div className="product-info">
          <p className="eyebrow">Todo en una caja</p>
          <h1 className="product-title">Cama comprimida 3 en 1</h1>
          <p className="product-lead">Una solución completa para renovar tu habitación: cabecera, colchón de espuma y base tapizada en color Oxford marino.</p>
          <ul className="feature-list"><li>Cabecera tapizada</li><li>Colchón de espuma</li><li>Base coordinada</li><li>Empaque compacto</li></ul>
          <fieldset>
            <legend>Elige tu tamaño</legend>
            <div className="size-grid">
              {sizes.map((size) => (
                <button type="button" key={size.name} className={selectedSize.name === size.name ? "size active" : "size"} onClick={() => setSelectedSize(size)} aria-pressed={selectedSize.name === size.name}>
                  <strong>{size.name}</strong><span>{money.format(size.price)} MXN</span>
                </button>
              ))}
            </div>
          </fieldset>
          <div className="buy-row">
            <div><span className="price">{money.format(selectedSize.price)}</span><small>MXN · Disponibilidad por confirmar</small></div>
            <button className="buy-button" type="button" onClick={() => setCartCount((count) => count + 1)}>Agregar al carrito</button>
          </div>
          <p className="shipping-note">El colchón puede tardar hasta 72 horas en expandirse por completo después de abrir el empaque.</p>
          <a className="back-link" href="/">← Volver a Paaki</a>
        </div>
      </section>
    </main>
  );
}
