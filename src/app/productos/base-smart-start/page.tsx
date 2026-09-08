"use client";

import Image from "next/image";
import { useState } from "react";
import CartButton from "../../components/CartButton";
import { useCart } from "../../components/CartProvider";

const sizes = [
  { name: "Individual", price: 4999, stock: 231, dimensions: "96.5 × 200 cm" },
  { name: "Matrimonial", price: 5999, stock: 56, dimensions: "135 × 186 cm" },
  { name: "Queen", price: 6999, stock: 71, dimensions: "150 × 200.4 cm" },
  { name: "King", price: 7999, stock: 37, dimensions: "193 × 210 cm" },
];

const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

export default function SmartStartPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addItem } = useCart();

  return (
    <main>
      <div className="announcement">Envíos desde Guadalajara · Compra segura</div>
      <header className="navbar">
        <a className="brand" href="/" aria-label="Paaki, inicio"><Image src="/logo-header.png" alt="Paaki" width={208} height={88} priority /></a>
        <nav aria-label="Navegación principal"><a href="/">Inicio</a><a href="/productos/base-smart-start">Smart Start</a><a href="/productos/cama-comprimida">Cama 3 en 1</a><a href="/productos/sofas">Sofás</a><a href="/#confianza">Por qué Paaki</a></nav>
        <CartButton />
      </header>

      <div className="breadcrumb"><a href="/">Inicio</a><span>/</span><span>Base Smart Start</span></div>

      <section className="product-section product-page-section">
        <div className="product-visual">
          <span className="product-badge">Precio de lanzamiento</span>
          <div className="inventory-gallery">
            <Image src="/inventario-smart-start-01.jpeg" alt="Inventario disponible de bases Smart Start en Guadalajara" width={900} height={1600} className="inventory-image inventory-image-main" priority />
            <Image src="/inventario-smart-start-02.jpeg" alt="Cajas de bases Smart Start listas para entrega" width={900} height={1600} className="inventory-image" />
            <div className="inventory-caption"><span>Inventario real</span><strong>Disponibles en Guadalajara</strong><small>395 piezas · Entrega sujeta a cobertura</small></div>
          </div>
          <p>Fotografías reales de nuestro inventario. Las imágenes detalladas del producto se agregarán próximamente.</p>
        </div>
        <div className="product-info">
          <p className="eyebrow">Descanso inteligente</p>
          <h1 className="product-title">Base eléctrica ajustable Smart Start</h1>
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
            <button className="buy-button" type="button" onClick={() => addItem({ id: `smart-start-${selectedSize.name}`, name: "Base eléctrica Smart Start", variant: selectedSize.name, price: selectedSize.price, image: "/inventario-smart-start-01.jpeg" })}>Agregar al carrito</button>
          </div>
          <p className="shipping-note">Envío calculado según destino. Inventario en Guadalajara.</p>
          <a className="back-link" href="/">← Volver a Paaki</a>
        </div>
      </section>
    </main>
  );
}
