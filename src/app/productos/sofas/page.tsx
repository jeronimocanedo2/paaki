"use client";

import Image from "next/image";
import CartButton from "../../components/CartButton";
import { useCart } from "../../components/CartProvider";

const sofas = [
  {
    name: "Sofá cama Turquía",
    price: 7010,
    image: "/sofa-turquia.jpeg",
    description: "Sofá cama comprimido de dos plazas, práctico para recibir visitas y aprovechar mejor el espacio.",
    dimensions: "1.95 m ancho × 0.95 m fondo × 0.60 m alto",
    colors: "Chocolate o hueso",
  },
  {
    name: "Sala Europa",
    price: 11008,
    image: "/sala-europa.jpeg",
    description: "Sala seccional comprimida con chaise longue y espacio cómodo para compartir en familia.",
    dimensions: "2.70 m ancho × 0.90 m fondo × 0.60 m alto",
    colors: "Cocoa, arena o azul marino",
  },
  {
    name: "Sofá Trébol",
    price: 3250,
    image: "/sofa-trebol.jpeg",
    description: "Sillón individual comprimido, suave y compacto para crear un rincón cómodo en cualquier espacio.",
    dimensions: "0.90 m ancho × 0.80 m fondo × 0.70 m alto",
    colors: "Forest o negro",
  },
];

const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

export default function SofasPage() {
  const { addItem } = useCart();

  return (
    <main>
      <div className="announcement">Envíos desde Guadalajara · Compra segura</div>
      <header className="navbar">
        <a className="brand" href="/" aria-label="Paaki, inicio"><Image src="/logo-header.png" alt="Paaki" width={208} height={88} priority /></a>
        <nav aria-label="Navegación principal"><a href="/">Inicio</a><a href="/productos/base-smart-start">Smart Start</a><a href="/productos/cama-comprimida">Cama 3 en 1</a><a href="/productos/sofas">Sofás</a><a href="/#confianza">Por qué Paaki</a></nav>
        <CartButton />
      </header>

      <div className="breadcrumb"><a href="/">Inicio</a><span>/</span><span>Sofás</span></div>

      <section className="sofas-page">
        <div className="sofas-heading">
          <p className="eyebrow">Comodidad que llega en caja</p>
          <h1>Sofás para disfrutar tu espacio.</h1>
          <p>Elige entre tres opciones comprimidas, prácticas y fáciles de llevar a casa.</p>
        </div>

        <div className="sofa-grid">
          {sofas.map((sofa) => (
            <article className="sofa-card" key={sofa.name}>
              <div className="sofa-image-wrap">
                <span className="product-badge">Precio especial</span>
                <Image src={sofa.image} alt={sofa.name} width={920} height={850} className="sofa-image" />
              </div>
              <div className="sofa-card-content">
                <h2>{sofa.name}</h2>
                <p>{sofa.description}</p>
                <dl>
                  <div><dt>Medidas</dt><dd>{sofa.dimensions}</dd></div>
                  <div><dt>Colores</dt><dd>{sofa.colors}</dd></div>
                  <div><dt>Material</dt><dd>Espuma de alta calidad</dd></div>
                </dl>
                <div className="sofa-buy-row">
                  <div><span className="price">{money.format(sofa.price)}</span><small>MXN · Disponibilidad por confirmar</small></div>
                  <button className="buy-button" type="button" onClick={() => addItem({ id: sofa.name.toLowerCase().replaceAll(" ", "-"), name: sofa.name, price: sofa.price, image: sofa.image })}>Agregar</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="expansion-note">Los productos comprimidos pueden tardar hasta 72 horas en recuperar completamente su forma después de abrirse.</p>
        <a className="back-link" href="/">← Volver a Paaki</a>
      </section>
    </main>
  );
}
