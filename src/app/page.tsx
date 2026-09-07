"use client";

import Image from "next/image";
import { useState } from "react";

const sizes = [
  { name: "Individual", price: 4999, stock: 231, dimensions: "96.5 × 200 cm" },
  { name: "Matrimonial", price: 5999, stock: 56, dimensions: "135 × 186 cm" },
  { name: "Queen", price: 6999, stock: 71, dimensions: "150 × 200.4 cm" },
  { name: "King", price: 7999, stock: 37, dimensions: "193 × 210 cm" },
];

const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

export default function Home() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <main>
      <div className="announcement">Envíos desde Guadalajara · Compra segura</div>
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Paaki, inicio">
          <Image src="/logo.png" alt="Paaki" width={180} height={72} priority />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#producto">Smart Start</a><a href="#confianza">Por qué Paaki</a>
        </nav>
        <button className="cart" type="button" aria-label={`Carrito con ${cartCount} productos`}>Carrito <b>{cartCount}</b></button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Hola, soy Hoja</p>
          <h1>Acceso inteligente<br />a una vida mejor.</h1>
          <p className="hero-description">Productos útiles, bien elegidos y pensados para acompañarte todos los días.</p>
          <a className="primary-button" href="#producto">Conoce nuestro primer producto</a>
          <div className="hero-notes"><span>✓ Selección con criterio</span><span>✓ Atención en México</span></div>
        </div>
        <div className="mascot-stage">
          <div className="mascot-halo" />
          <Image src="/hoja-mascot.png" alt="Hoja, la mascota de Paaki, saludando" width={720} height={850} priority className="mascot" />
          <div className="speech">Yo te ayudo a encontrar<br /><strong>lo que sí vale la pena.</strong></div>
        </div>
      </section>

      <section className="product-section" id="producto">
        <div className="product-visual">
          <span className="product-badge">Precio de lanzamiento</span>
          <div className="inventory-gallery">
            <Image src="/inventario-smart-start-01.jpeg" alt="Inventario disponible de bases Smart Start en Guadalajara" width={900} height={1600} className="inventory-image inventory-image-main" />
            <Image src="/inventario-smart-start-02.jpeg" alt="Cajas de bases Smart Start listas para entrega" width={900} height={1600} className="inventory-image" />
            <div className="inventory-caption">
              <span>Inventario real</span>
              <strong>Disponibles en Guadalajara</strong>
              <small>395 piezas · Entrega sujeta a cobertura</small>
            </div>
          </div>
          <p>Fotografías reales de nuestro inventario. Las imágenes detalladas del producto se agregarán próximamente.</p>
        </div>
        <div className="product-info">
          <p className="eyebrow">Descanso inteligente</p>
          <h2>Base eléctrica ajustable Smart Start</h2>
          <p className="product-lead">Eleva la cabecera con solo presionar un botón. Ideal para leer, ver televisión o encontrar una posición más cómoda para descansar.</p>
          <ul className="feature-list"><li>Elevación eléctrica de cabecera</li><li>Control cableado de 2 botones</li><li>Estructura plegable de acero</li><li>Instalación sencilla</li></ul>
          <fieldset>
            <legend>Elige tu tamaño</legend>
            <div className="size-grid">
              {sizes.map((size) => (
                <button type="button" key={size.name} className={selectedSize.name === size.name ? "size active" : "size"} onClick={() => setSelectedSize(size)} aria-pressed={selectedSize.name === size.name}>
                  <strong>{size.name}</strong><span>{size.dimensions}</span>
                </button>
              ))}
            </div>
          </fieldset>
          <div className="buy-row">
            <div><span className="price">{money.format(selectedSize.price)}</span><small>MXN · {selectedSize.stock} disponibles</small></div>
            <button className="buy-button" type="button" onClick={() => setCartCount((count) => count + 1)}>Agregar al carrito</button>
          </div>
          <p className="shipping-note">Envío calculado según destino. Inventario en Guadalajara.</p>
        </div>
      </section>

      <section className="trust-section" id="confianza">
        <div><p className="eyebrow">Elegido por Paaki</p><h2>No vendemos por vender.</h2></div>
        <p>Buscamos productos útiles, duraderos y con un precio que tenga sentido. Hoja está aquí para hacer la compra más clara, cercana y sencilla.</p>
      </section>

      <footer><a className="brand footer-brand" href="#inicio"><Image src="/logo.png" alt="Paaki" width={190} height={76} /></a><p>Acceso inteligente a una vida mejor.</p><p>© 2026 Paaki · Guadalajara, México</p></footer>
    </main>
  );
}
