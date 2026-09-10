import Image from "next/image";
import CartButton from "./components/CartButton";

const sizes = [
  { name: "Individual", price: "$4,499" },
  { name: "Matrimonial", price: "$4,699" },
  { name: "Queen", price: "$5,199" },
  { name: "King", price: "$5,999" },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">Envío gratis en la Zona Metropolitana de Guadalajara · Compra segura</div>
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Paaki, inicio"><Image src="/logo-header.png" alt="Paaki" width={208} height={88} priority /></a>
        <nav aria-label="Navegación principal"><a href="#inicio">Inicio</a><a href="#beneficios">Beneficios</a><a href="#precios">Tamaños y precios</a><a href="#contacto">Contacto</a></nav>
        <CartButton />
      </header>

      <section className="smart-home-hero" id="inicio">
        <div className="smart-home-copy">
          <p className="eyebrow">Base eléctrica ajustable</p>
          <h1>Descansa mejor.<br /><span>A tu manera.</span></h1>
          <p className="smart-home-lead">Conoce Smart Start, la base que eleva tu cabecera para leer, ver televisión o encontrar una posición más cómoda al descansar.</p>
          <div className="hero-actions"><a className="primary-button" href="/productos/base-smart-start">Ver tamaños y comprar</a></div>
          <div className="smart-home-proof"><span><b>Desde $4,499</b> MXN</span><span><b>Envío gratis</b> en ZMG</span><span><b>Máximo 5 días hábiles</b> para recibirla</span></div>
        </div>
        <div className="smart-home-visual">
          <div className="hero-photo-frame"><Image src="/smart-start-home-cover.png" alt="Base eléctrica Smart Start en una habitación" width={1630} height={965} priority /></div>
        </div>
      </section>

      <section className="smart-intro" id="beneficios">
        <div><p className="eyebrow">Una base que se adapta a ti</p><h2>Más comodidad con solo presionar un botón.</h2></div>
        <p>Smart Start combina una estructura resistente con movimiento eléctrico sencillo. Se entrega plegada, incluye sus accesorios y es fácil de instalar en casa.</p>
        <div className="benefit-strip">
          <article><span>01</span><h3>Eleva la cabecera</h3><p>Encuentra una posición cómoda para leer, descansar o ver televisión.</p></article>
          <article><span>02</span><h3>Control de 2 botones</h3><p>Sube y baja la base de forma directa, sin configuraciones complicadas.</p></article>
          <article><span>03</span><h3>Diseño plegable</h3><p>Facilita el transporte y permite una instalación práctica.</p></article>
          <article><span>04</span><h3>Estructura de acero</h3><p>Una construcción firme y estable para el uso diario.</p></article>
        </div>
      </section>

      <section className="smart-price-section" id="precios">
        <div className="price-intro"><p className="eyebrow">Elige la medida para tu colchón</p><h2>Una Smart Start para cada espacio.</h2><p>Todos los tamaños incluyen control cableado, patas y accesorios. Envío gratis en la Zona Metropolitana de Guadalajara.</p><a className="primary-button" href="/productos/base-smart-start">Elegir medida y comprar</a></div>
        <div className="home-size-list">{sizes.map((size) => <a href="/productos/base-smart-start" key={size.name}><span>{size.name}</span><strong>{size.price} <small>MXN</small></strong><b>→</b></a>)}</div>
      </section>

      <section className="smart-contact-section" id="contacto">
        <div><p className="eyebrow">Compra con atención personal</p><h2>¿Tienes una duda antes de elegir?</h2><p>Estamos para ayudarte con medidas, entrega y disponibilidad en Guadalajara.</p></div>
        <a className="primary-button light-button" href="mailto:direccion@paaki.com.mx">Escribir a Paaki</a>
      </section>

      <footer><Image className="footer-brand" src="/logo-header.png" alt="Paaki" width={208} height={88} /><p>Base Smart Start · Envío gratis en la ZMG<br /><a className="contact-email" href="mailto:direccion@paaki.com.mx">direccion@paaki.com.mx</a></p><p>© 2026 Paaki</p></footer>
    </main>
  );
}
