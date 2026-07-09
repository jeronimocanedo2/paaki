"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   UNSPLASH IMAGE URLS
   High-quality editorial photography as placeholders.
   Replace with /public/... assets when real photos are ready.
───────────────────────────────────────────────────────────── */
const PHOTOS = {
  hero:       "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=85&auto=format&fit=crop",
  banner:     "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&q=80&auto=format&fit=crop",
  hogar:      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop",
  energia:    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&auto=format&fit=crop",
  movilidad:  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80&auto=format&fit=crop",
  tecnologia: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80&auto=format&fit=crop",
  agua:       "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80&auto=format&fit=crop",
  prod1:      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=85&auto=format&fit=crop",
  prod2:      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600&q=85&auto=format&fit=crop",
  prod3:      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=85&auto=format&fit=crop",
  prod4:      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&auto=format&fit=crop",
};

/* ─────────────────────────────────────────────────────────────
   INTERSECTION OBSERVER HOOK — fade-up on scroll
───────────────────────────────────────────────────────────── */
function useFadeUp(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    },
  };
}

/* ─────────────────────────────────────────────────────────────
   ICONS — Lucide-style, stroke 1.75px
───────────────────────────────────────────────────────────── */
function IconSearch()  { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>; }
function IconUser()    { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>; }
function IconBag()     { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>; }
function IconMenu()    { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>; }
function IconClose()   { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>; }
function IconArrow({ size = 13 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>; }
function IconDiag()    { return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>; }
function IconPlus()    { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>; }
function IconShield()  { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>; }
function IconTruck()   { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect width="7" height="7" x="14" y="10" rx="1"/><circle cx="17" cy="21" r="1"/><circle cx="7" cy="21" r="1"/><path d="M5 17v-1a4 4 0 0 1 4-4h2"/></svg>; }
function IconStar()    { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>; }
function IconReturn()  { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>; }
function IconPin()     { return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>; }
function IconIG()      { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
function IconTK()      { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>; }
function IconLI()      { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>; }

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Hogar",      href: "#categorias" },
  { label: "Energía",    href: "#categorias" },
  { label: "Movilidad",  href: "#categorias" },
  { label: "Tecnología", href: "#categorias" },
  { label: "Agua",       href: "#categorias" },
  { label: "Novedades",  href: "#productos"  },
];

const CATEGORIES = [
  { name: "Hogar eficiente", count: 142, photo: PHOTOS.hogar      },
  { name: "Energía y solar", count: 38,  photo: PHOTOS.energia    },
  { name: "Movilidad",       count: 27,  photo: PHOTOS.movilidad  },
  { name: "Tecnología",      count: 96,  photo: PHOTOS.tecnologia },
  { name: "Agua",            count: 31,  photo: PHOTOS.agua       },
];

const PRODUCTS = [
  {
    brand:   "Xiaomi",
    name:    "Mi Air Purifier 4 Compact",
    detail:  "Filtro HEPA H13 · Cubre 48m²",
    price:   "2,499",
    badge:   { label: "Nuevo", cls: "bg-[#EAF4EE] text-[#166332]" },
    photo:   PHOTOS.prod1,
    photoBg: "#EAF4EE",
  },
  {
    brand:   "EcoFlow",
    name:    "Panel Solar Portátil 160W",
    detail:  "USB-C 60W · Plegable · IP68",
    price:   "5,199",
    badge:   { label: "Destacado", cls: "bg-[#FFF3E0] text-[#854F00]" },
    photo:   PHOTOS.prod2,
    photoBg: "#EFF4FF",
  },
  {
    brand:   "Berkey",
    name:    "Travel Berkey 5.7L",
    detail:  "Filtro por gravedad · Sin electricidad",
    price:   "3,890",
    badge:   null,
    photo:   PHOTOS.prod3,
    photoBg: "#FDF6EF",
  },
  {
    brand:   "Segway-Ninebot",
    name:    "Scooter E2 Plus",
    detail:  "25 km/h · Autonomía 25 km · Plegable",
    price:   "8,450",
    badge:   { label: "paaki Pro", cls: "bg-[#EDE8FC] text-[#5018A0]" },
    photo:   PHOTOS.prod4,
    photoBg: "#F3EFFC",
  },
];

const WHY_ITEMS = [
  {
    eyebrow: "Por qué paaki",
    title:   "No listamos cualquier cosa",
    body:    "Cada producto pasó por nuestra revisión antes de estar disponible. Sin genéricos. Sin marcas dudosas. Sin sorpresas al abrir la caja.",
  },
  {
    eyebrow: "Cómo funciona",
    title:   "Seleccionamos. Tú decides.",
    body:    "No tienes que comparar entre miles de opciones. Ya lo hicimos. Llegas, exploras y compras con confianza.",
  },
  {
    eyebrow: "Nuestro compromiso",
    title:   "Soporte real, personas reales",
    body:    "Sin bots, sin flujos interminables. Garantía en cada compra. Devolución sin complicaciones. Sin letras chiquitas.",
  },
];

const FOOTER_COLS = {
  Explorar: ["Hogar eficiente", "Energía y solar", "Movilidad", "Tecnología", "Agua", "Novedades"],
  Empresa:  ["Nuestra historia", "Para proveedores", "Trabaja con nosotros", "Prensa"],
  Soporte:  ["Centro de ayuda", "Envíos y entregas", "Devoluciones", "Garantías", "Contacto"],
};

/* ─────────────────────────────────────────────────────────────
   NAVBAR
   Sticky · blur · sombra al scroll · mobile hamburger
───────────────────────────────────────────────────────────── */
function Navbar() {
  const [open,       setOpen]       = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_12px_rgba(0,0,0,0.05)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">

        {/* Logo — usa /public/logo.png */}
        <a href="/" aria-label="paaki" className="shrink-0 flex items-center">
          <Image
            src="/logo.png"
            alt="paaki"
            width={110}
            height={28}
            className="h-[22px] w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[12.5px] font-normal text-neutral-500 hover:text-neutral-900 transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button aria-label="Buscar"    className="hidden sm:flex text-neutral-400 hover:text-neutral-800 transition-colors duration-150"><IconSearch /></button>
          <button aria-label="Mi cuenta" className="hidden sm:flex text-neutral-400 hover:text-neutral-800 transition-colors duration-150"><IconUser /></button>
          <button aria-label="Carrito de compras" className="relative text-neutral-400 hover:text-neutral-800 transition-colors duration-150">
            <IconBag />
            <span className="absolute -top-1 -right-1.5 w-[15px] h-[15px] bg-[#1B7A3E] text-white text-[8.5px] font-bold rounded-full flex items-center justify-center leading-none">0</span>
          </button>
          <button
            className="md:hidden ml-1 text-neutral-400 hover:text-neutral-800 transition-colors duration-150"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          open ? "max-h-96 border-t border-neutral-100" : "max-h-0"
        }`}
      >
        <nav className="bg-white px-5 pb-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3.5 text-[13.5px] text-neutral-700 hover:text-[#1B7A3E] border-b border-neutral-50 last:border-0 transition-colors duration-150"
            >
              {l.label}
              <IconArrow size={11} />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO
   Split 55/45 · foto editorial Unsplash · tarjeta flotante
───────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[460px] lg:min-h-[540px]">

      {/* Copy column */}
      <div className="flex flex-col justify-center px-5 sm:px-8 lg:px-14 xl:px-16 py-14 lg:py-0 bg-white order-2 lg:order-1">

        {/* Context pill */}
        <div className="inline-flex items-center gap-2 bg-[#EAF4EE] text-[#1B7A3E] text-[10.5px] font-semibold uppercase tracking-[0.08em] rounded-full px-3.5 py-1.5 mb-7 w-fit animate-fade-in">
          <IconPin />
          México · Latinoamérica
        </div>

        {/* H1 */}
        <h1
          className="text-[32px] sm:text-[38px] lg:text-[42px] xl:text-[46px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0D0D0B] mb-5 animate-fade-up"
          style={{ animationFillMode: "backwards" }}
        >
          Lo que necesitas,
          <br />
          <span className="text-[#1B7A3E]">sin buscarlo</span>
          {" "}todo el día.
        </h1>

        {/* Subheadline */}
        <p
          className="text-[14.5px] text-neutral-500 leading-[1.72] mb-9 max-w-[400px] animate-fade-up-d"
          style={{ animationFillMode: "backwards" }}
        >
          Productos verificados para tu hogar, movilidad y vida diaria.
          Seleccionados con criterio, entregados con confianza.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-3 mb-10 animate-fade-up-d2"
          style={{ animationFillMode: "backwards" }}
        >
          <a
            href="#productos"
            className="bg-[#1B7A3E] hover:bg-[#0F4E27] text-white text-[13.5px] font-medium px-7 py-3 rounded-lg transition-colors duration-150"
          >
            Explorar productos
          </a>
          <a
            href="#categorias"
            className="inline-flex items-center gap-2 text-[#1B7A3E] border border-[#C4DECE] hover:border-[#1B7A3E] text-[13.5px] font-medium px-5 py-3 rounded-lg transition-colors duration-150"
          >
            Ver categorías
            <IconArrow />
          </a>
        </div>

        {/* Mini trust row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-6 border-t border-neutral-100">
          {[
            { icon: <IconShield />, label: "Productos verificados" },
            { icon: <IconTruck />,  label: "Entrega en México" },
            { icon: <IconReturn />, label: "Devoluciones fáciles" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-2 text-[11.5px] text-neutral-400">
              <span className="text-[#1B7A3E]">{t.icon}</span>
              {t.label}
            </div>
          ))}
        </div>
      </div>

      {/* Photo column */}
      <div className="relative order-1 lg:order-2 min-h-[280px] sm:min-h-[380px] lg:min-h-full overflow-hidden">
        <Image
          src={PHOTOS.hero}
          alt="Hogar latinoamericano moderno — paaki"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {/* Floating product card */}
        <div className="absolute bottom-5 left-5 right-5 lg:left-6 lg:right-6">
          <div className="bg-white/96 backdrop-blur-md rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/70">
            <p className="text-[9.5px] text-neutral-400 uppercase tracking-[0.1em] font-medium mb-1.5">
              Producto destacado
            </p>
            <p className="text-[14px] font-semibold text-neutral-900 leading-snug">
              Xiaomi Mi Air Purifier 4 Compact
            </p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[15px] font-bold text-[#1B7A3E]">$2,499</span>
                <span className="text-[11px] text-neutral-400 font-normal">MXN</span>
              </div>
              <span className="text-[11.5px] text-neutral-400">· Envío gratis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   TRUST BAR
   Línea discreta debajo del hero
───────────────────────────────────────────────────────────── */
function TrustBar() {
  const { ref, style } = useFadeUp(0);
  const items = [
    { icon: <IconShield />, text: "Productos verificados por paaki" },
    { icon: <IconTruck />,  text: "Entrega en todo México" },
    { icon: <IconStar />,   text: "Selección curada con criterio" },
    { icon: <IconReturn />, text: "Devoluciones sin complicaciones" },
  ];
  return (
    <div ref={ref} style={style} className="bg-[#F8F8F6] border-y border-neutral-100 overflow-x-auto scrollbar-none">
      <div className="flex items-center justify-start sm:justify-between max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3 min-w-max sm:min-w-0 gap-0">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <div className="flex items-center gap-2 px-4 sm:px-0 shrink-0">
              <span className="text-[#1B7A3E]">{item.icon}</span>
              <span className="text-[11px] text-neutral-500 whitespace-nowrap">{item.text}</span>
            </div>
            {i < items.length - 1 && (
              <div className="w-px h-3.5 bg-neutral-200 mx-4 sm:mx-6 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CATEGORIES
   Fotografías editoriales, overlay, sin íconos
───────────────────────────────────────────────────────────── */
function Categories() {
  const { ref, style } = useFadeUp(0);
  return (
    <section id="categorias" className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
      <div ref={ref} style={style}>
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] font-semibold text-[#1B7A3E] uppercase tracking-[0.1em] mb-2">
              Explorar
            </p>
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-[#0D0D0B] tracking-[-0.03em]">
              ¿Qué estás buscando hoy?
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 text-[12px] text-[#1B7A3E] hover:text-[#0F4E27] font-medium transition-colors duration-150 shrink-0"
          >
            Ver todo <IconArrow />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
          {CATEGORIES.map((cat, i) => (
            <a
              key={cat.name}
              href="#"
              className="group relative rounded-2xl overflow-hidden border border-transparent hover:border-neutral-200 transition-all duration-300 cursor-pointer block"
              style={{
                aspectRatio: "1 / 1",
                transitionDelay: `${i * 40}ms`,
              }}
            >
              <Image
                src={cat.photo}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[13px] font-semibold text-white leading-tight">{cat.name}</p>
                <p className="text-[10.5px] text-white/60 mt-0.5">{cat.count} productos</p>
              </div>

              {/* Arrow */}
              <div className="absolute top-3 right-3 text-white/50 group-hover:text-white/90 transition-colors duration-200">
                <IconDiag />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PRODUCTS
   Apple / Nothing inspired — clean, breathing cards
───────────────────────────────────────────────────────────── */
function Products() {
  const { ref, style } = useFadeUp(0);
  return (
    <section id="productos" className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-14 sm:pb-16">
      <div ref={ref} style={style}>
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] font-semibold text-[#1B7A3E] uppercase tracking-[0.1em] mb-2">
              Selección paaki
            </p>
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-[#0D0D0B] tracking-[-0.03em]">
              Lo que vale la pena.
            </h2>
            <p className="text-[13px] text-neutral-400 mt-1.5">No vendemos todo. Solo lo que importa.</p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 text-[12px] text-[#1B7A3E] hover:text-[#0F4E27] font-medium transition-colors duration-150 shrink-0"
          >
            Ver catálogo <IconArrow />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="group border border-neutral-100 rounded-2xl overflow-hidden bg-white hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:border-neutral-200 transition-all duration-200 cursor-pointer"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {/* Product photo */}
              <div
                className="relative overflow-hidden"
                style={{ height: "172px", background: p.photoBg }}
              >
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {p.badge && (
                  <span className={`absolute top-3 left-3 text-[9.5px] font-semibold px-2.5 py-[3px] rounded-full ${p.badge.cls}`}>
                    {p.badge.label}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5">
                <p className="text-[9.5px] text-neutral-300 uppercase tracking-[0.08em] mb-1 font-medium">
                  {p.brand}
                </p>
                <p className="text-[13.5px] font-semibold text-neutral-900 leading-snug mb-1">
                  {p.name}
                </p>
                <p className="text-[12px] text-neutral-400 mb-4">{p.detail}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[17px] font-bold text-neutral-900 tracking-tight">
                      ${p.price}
                    </span>
                    <span className="text-[11px] text-neutral-300 font-normal">MXN</span>
                  </div>
                  <button
                    aria-label={`Agregar ${p.name} al carrito`}
                    className="w-8 h-8 bg-[#1B7A3E] hover:bg-[#0F4E27] rounded-lg flex items-center justify-center transition-colors duration-150"
                  >
                    <IconPlus />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* See all */}
        <div className="text-center mt-9">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[13px] text-[#1B7A3E] hover:text-[#0F4E27] font-medium transition-colors duration-150"
          >
            Ver catálogo completo <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   WHY PAAKI
   3 columnas, limpio, sin cajas
───────────────────────────────────────────────────────────── */
function Why() {
  const { ref, style } = useFadeUp(0);
  return (
    <div className="border-y border-neutral-100 bg-[#F8F8F6]">
      <div
        ref={ref}
        style={style}
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {WHY_ITEMS.map((w, i) => (
            <div
              key={i}
              className="py-8 md:py-2 md:px-10 first:md:pl-0 last:md:pr-0"
            >
              <p className="text-[10px] font-semibold text-[#1B7A3E] uppercase tracking-[0.1em] mb-3">
                {w.eyebrow}
              </p>
              <h3 className="text-[14.5px] font-semibold text-neutral-900 mb-2.5 leading-snug">
                {w.title}
              </h3>
              <p className="text-[12.5px] text-neutral-500 leading-[1.68]">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   EDITORIAL BANNER
   Fondo oscuro · foto de fondo · stats · una acción
───────────────────────────────────────────────────────────── */
function Banner() {
  const { ref, style } = useFadeUp(0);
  const stats = [
    { n: "334",  l: "productos disponibles"  },
    { n: "100%", l: "verificados por paaki"  },
    { n: "5",    l: "categorías activas"     },
    { n: "MX",   l: "desde México para LatAm"},
  ];
  return (
    <section className="relative overflow-hidden bg-[#07200F]">
      {/* Background photo */}
      <Image
        src={PHOTOS.banner}
        alt="paaki — construido para Latinoamérica"
        fill
        className="object-cover opacity-25"
        sizes="100vw"
      />
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        ref={ref}
        style={style}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Copy */}
        <div>
          <p className="text-[10px] font-semibold text-[#5AAA72] uppercase tracking-[0.1em] mb-5">
            Nuestra historia
          </p>
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-white leading-[1.16] tracking-[-0.03em] mb-5">
            Construido para<br />cómo vivimos aquí.
          </h2>
          <p className="text-[14px] text-white/45 leading-[1.78] mb-8 max-w-[380px]">
            No somos una plataforma global adaptada a México. Nacimos pensando en el consumidor latinoamericano — sus ciudades, sus necesidades y su forma de vivir.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-[#07200F] text-[13.5px] font-semibold px-7 py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-150"
          >
            Conoce paaki
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.l}
              className="bg-white/[0.06] border border-white/[0.1] rounded-2xl p-5 sm:p-6"
            >
              <p className="text-[26px] sm:text-[30px] font-bold text-white tracking-tight leading-none">
                {s.n}
              </p>
              <p className="text-[11px] text-white/35 mt-2">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER
   Negro casi total · logo en blanco · links mínimos
───────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#0D0D0B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 pb-7">

        {/* Top grid */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] gap-8 sm:gap-10 pb-10 border-b border-white/[0.07]">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="paaki"
              width={100}
              height={22}
              className="h-[20px] w-auto brightness-0 invert opacity-70"
            />
            <p className="text-[12px] text-white/28 leading-[1.75] mt-4 max-w-[210px]">
              Distribución inteligente de tecnología verde para el consumidor latinoamericano.
            </p>
            <div className="flex items-center gap-4 mt-5">
              {[
                { icon: <IconIG />, label: "Instagram" },
                { icon: <IconTK />, label: "TikTok" },
                { icon: <IconLI />, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="text-white/25 hover:text-white/60 transition-colors duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(FOOTER_COLS) as [string, string[]][]).map(([col, links]) => (
            <div key={col}>
              <h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.1em] mb-4">
                {col}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[12px] text-white/28 hover:text-white/60 transition-colors duration-150"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-[10.5px] text-white/18">
            © 2025 paaki · paaki.com.mx · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-5">
            {["Términos", "Privacidad", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[10.5px] text-white/18 hover:text-white/50 transition-colors duration-150"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Categories />
      <Products />
      <Why />
      <Banner />
      <Footer />
    </main>
  );
}
