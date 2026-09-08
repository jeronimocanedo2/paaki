"use client";

import Image from "next/image";
import CartButton from "./components/CartButton";

export default function Home() {
  return (
    <main>
      <div className="announcement">Envíos desde Guadalajara · Compra segura</div>
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Paaki, inicio">
          <Image src="/logo-header.png" alt="Paaki" width={208} height={88} priority />
        </a>
        <nav aria-label="Navegación principal">
          <a href="/">Inicio</a><a href="/productos/base-smart-start">Smart Start</a><a href="/productos/cama-comprimida">Cama 3 en 1</a><a href="/productos/sofas">Sofás</a><a href="/#confianza">Por qué Paaki</a>
        </nav>
        <CartButton />
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Hola, soy Paaki</p>
          <h1>Acceso inteligente<br />a una vida mejor.</h1>
          <p className="hero-description">Productos útiles, bien elegidos y pensados para acompañarte todos los días.</p>
          <a className="primary-button" href="#confianza">Conoce Paaki</a>
          <div className="hero-notes"><span>✓ Selección con criterio</span><span>✓ Atención en México</span></div>
        </div>
        <div className="mascot-stage">
          <div className="mascot-halo" />
          <Image src="/hoja-mascot.png" alt="Paaki, la mascota de la tienda, saludando" width={720} height={850} priority className="mascot" />
          <div className="speech">Yo te ayudo a encontrar<br /><strong>lo que sí vale la pena.</strong></div>
        </div>
      </section>

      <section className="trust-section" id="confianza">
        <div><p className="eyebrow">Elegido por Paaki</p><h2>Elegimos lo que sí vale la pena.</h2></div>
        <p>Buscamos productos útiles, duraderos y con un precio que tenga sentido. Paaki está aquí para hacer la compra más clara, cercana y sencilla.</p>
      </section>

      <footer><a className="brand footer-brand" href="#inicio"><Image src="/logo-header.png" alt="Paaki" width={208} height={88} /></a><p>Acceso inteligente a una vida mejor.</p><p>© 2026 Paaki · Guadalajara, México</p></footer>
    </main>
  );
}
