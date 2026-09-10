"use client";

import Image from "next/image";
import { useState } from "react";
import CartButton from "../../components/CartButton";
import { useCart } from "../../components/CartProvider";

const sizes = [
  { name: "Individual", price: 4499, stock: 231, dimensions: "96.5 × 200 cm" },
  { name: "Matrimonial", price: 4699, stock: 56, dimensions: "135 × 186 cm" },
  { name: "Queen", price: 5199, stock: 71, dimensions: "150 × 200.4 cm" },
  { name: "King", price: 5999, stock: 37, dimensions: "193 × 210 cm" },
];

const photos = [
  { src: "/smart-start-5245.jpg", alt: "Base Smart Start armada con la cabecera elevada", label: "Posición elevada", note: "Eleva la cabecera con solo presionar un botón" },
  { src: "/smart-start-5250.jpg", alt: "Base Smart Start completamente armada en posición plana", label: "Vista completa", note: "Perfil firme y estable para colocar tu colchón" },
  { src: "/smart-start-5246.jpg", alt: "Mecanismo lateral de elevación de la Base Smart Start", label: "Mecanismo", note: "Sistema eléctrico integrado bajo la estructura" },
  { src: "/smart-start-5253.jpg", alt: "Control de la Base Smart Start en uso con la luz azul encendida", label: "Control en funcionamiento", note: "Indicador azul al activar el movimiento" },
  { src: "/smart-start-5220.jpg", alt: "Base Smart Start plegada antes de instalarse", label: "Diseño plegable", note: "Facilita su transporte y su instalación" },
  { src: "/smart-start-5229.jpg", alt: "Patas, control y accesorios incluidos con la Base Smart Start", label: "Accesorios", note: "Accesorios incluidos con tu base" },
  { src: "/smart-start-5231.jpg", alt: "Estructura inferior de acero de la Base Smart Start", label: "Estructura", note: "Acero resistente diseñado para brindar estabilidad" },
  { src: "/smart-start-5213.jpg", alt: "Empaque compacto de la Base Smart Start", label: "Empaque", note: "Empaque compacto y protegido para su traslado" },
];

const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

export default function SmartStartPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);
  const { addItem } = useCart();

  return (
    <main>
      <div className="announcement">Envío gratis en la Zona Metropolitana de Guadalajara · Compra segura</div>
      <header className="navbar">
        <a className="brand" href="/" aria-label="Paaki, inicio"><Image src="/logo-header.png" alt="Paaki" width={208} height={88} priority /></a>
        <nav aria-label="Navegación principal"><a href="/productos/base-smart-start">Smart Start</a><a href="#galeria">Galería</a><a href="#beneficios">Beneficios</a><a href="mailto:direccion@paaki.com.mx">Contacto</a></nav>
        <CartButton />
      </header>

      <section className="product-section product-page-section" id="galeria">
        <div className="product-visual">
          <span className="product-badge">Precio de lanzamiento</span>
          <div className="smart-gallery">
            <div className="smart-gallery-main">
              <Image src={selectedPhoto.src} alt={selectedPhoto.alt} width={1350} height={1800} className="smart-main-image" priority />
              <div className="inventory-caption"><span>Fotografía real</span><strong>{selectedPhoto.label}</strong><small>{selectedPhoto.note}</small></div>
            </div>
            <div className="smart-thumbnails" aria-label="Galería de fotografías de Smart Start">
              {photos.map((photo) => (
                <button type="button" key={photo.src} className={selectedPhoto.src === photo.src ? "smart-thumb active" : "smart-thumb"} onClick={() => setSelectedPhoto(photo)} aria-label={`Ver ${photo.label}`}>
                  <Image src={photo.src} alt="" width={180} height={180} />
                </button>
              ))}
            </div>
          </div>
          <p>Fotografías reales del producto, sus accesorios y nuestro inventario.</p>
        </div>
        <div className="product-info" id="beneficios">
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
            <button className="buy-button" type="button" onClick={() => addItem({ id: `smart-start-${selectedSize.name}`, name: "Base eléctrica Smart Start", variant: selectedSize.name, price: selectedSize.price, image: "/smart-start-cart-clean.png" })}>Agregar al carrito</button>
          </div>
          <p className="shipping-note">Envío gratis en la Zona Metropolitana de Guadalajara. Inventario en Guadalajara.</p>
        </div>
      </section>
    </main>
  );
}
