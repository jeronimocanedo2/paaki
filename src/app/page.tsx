"use client";

import { useState } from "react";

// ─── LOGO ────────────────────────────────────────────────────────────────────

function PaakiLogo({
  height = 26,
  variant = "green",
}: {
  height?: number;
  variant?: "green" | "light";
}) {
  const fill = variant === "light" ? "#4db876" : "#1e8040";
  return (
    <svg
      viewBox="0 0 210 60"
      style={{ height, width: "auto" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="paaki"
    >
      {/* p */}
      <path
        d="M8 17C8 17 8 47 8 49L15.5 49L15.5 39.5C17.2 41 19.8 41.8 22.5 41.8C31.5 41.8 37.5 35.5 37.5 28.5C37.5 21.5 31.5 15.5 22.5 15.5C19.2 15.5 16.5 16.8 15.5 17.6L15.5 17ZM15.5 23.5C16.8 22.2 19.2 21 22.5 21C27.5 21 30 24.5 30 28.5C30 32.5 27.5 36.5 22.5 36.5C19.5 36.5 17 34.8 15.5 33.2Z"
        fill={fill}
      />
      {/* a1 */}
      <path
        d="M67 17L67 19.5C65.2 18 63 17 60 17C52.5 17 47 22.5 47 28.5C47 35 52.5 41 60 41C63 41 65.2 40 67 38.5L67 40.5L74.5 40.5L74.5 17ZM60 21.8C64.8 21.8 67 25.5 67 28.5C67 32 64.8 36 60 36C56.2 36 53.8 32.8 53.8 28.5C53.8 24.2 56.2 21.8 60 21.8Z"
        fill={fill}
      />
      {/* a2 */}
      <path
        d="M105 17L105 19.5C103.2 18 101 17 98 17C90.5 17 85 22.5 85 28.5C85 35 90.5 41 98 41C101 41 103.2 40 105 38.5L105 40.5L112.5 40.5L112.5 17ZM98 21.8C102.8 21.8 105 25.5 105 28.5C105 32 102.8 36 98 36C94.2 36 91.8 32.8 91.8 28.5C91.8 24.2 94.2 21.8 98 21.8Z"
        fill={fill}
      />
      {/* k */}
      <path
        d="M119 7L119 40.5L127 40.5L127 31L131.5 27L141 40.5L150 40.5L138 24.5L149 7L140.5 7L127 24L127 7Z"
        fill={fill}
      />
      {/* i stem */}
      <path d="M155 17L155 40.5L163 40.5L163 17Z" fill={fill} />
      {/* i — leaf dot (matches real logo) */}
      <path
        d="M159 3.5C159 3.5 153 5 153 10C153 10 158 10.5 161 7.8C163 6 159 3.5 159 3.5Z"
        fill={fill}
      />
    </svg>
  );
}

// ─── ICONS ───────────────────────────────────────────────────────────────────

const Icon = {
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  ),
  User: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Bag: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  Close: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Arrow: ({ size = 12 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  ),
  ArrowUpRight: () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  ),
  Plus: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  MapPin: () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Shield: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Truck: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
      <rect width="7" height="7" x="14" y="10" rx="1" />
      <circle cx="17" cy="21" r="1" /><circle cx="7" cy="21" r="1" />
      <path d="M5 17v-1a4 4 0 0 1 4-4h2" />
    </svg>
  ),
  Headset: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11v-1a9 9 0 0 1 18 0v1" />
      <rect width="4" height="7" x="1" y="11" rx="1" />
      <rect width="4" height="7" x="19" y="11" rx="1" />
      <path d="M23 18a9 9 0 0 1-9 4 9 9 0 0 1-9-4" />
    </svg>
  ),
  Award: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  Refresh: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  ),
  Home: ({ c = "#1a7a3e", s = 22 }: { c?: string; s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Bolt: ({ c = "#b87000", s = 22 }: { c?: string; s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Bike: ({ c = "#2a55d4", s = 22 }: { c?: string; s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6a1 1 0 0 0-1-1h-1" /><path d="M10 6H7l-2 4" />
      <path d="m5.5 14 2.5-4h5l2 4" /><path d="M10 10 8 6" />
    </svg>
  ),
  Laptop: ({ c = "#6e28c2", s = 22 }: { c?: string; s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  ),
  Droplet: ({ c = "#0a80b0", s = 22 }: { c?: string; s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  ),
  Air: ({ c = "#1a7a3e" }: { c?: string }) => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2" /><path d="M12.59 19.41A2 2 0 1 0 14 16H2" /><path d="M17.59 11.41A2 2 0 1 1 19 8h-7" />
    </svg>
  ),
  Solar: ({ c = "#2a55d4" }: { c?: string }) => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M7 12h.01M12 12h.01M17 12h.01" />
    </svg>
  ),
  DropletLg: ({ c = "#b87000" }: { c?: string }) => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  ),
  ScooterLg: ({ c = "#6e28c2" }: { c?: string }) => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6a1 1 0 0 0-1-1h-1" /><path d="M10 6H7l-2 4" />
      <path d="m5.5 14 2.5-4h5l2 4" /><path d="M10 10 8 6" />
    </svg>
  ),
  Instagram: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Twitter: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 16M4 20 20 4" />
    </svg>
  ),
  LinkedIn: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Hogar", href: "#categorias" },
  { label: "Energía", href: "#categorias" },
  { label: "Movilidad", href: "#categorias" },
  { label: "Tecnología", href: "#categorias" },
  { label: "Agua", href: "#categorias" },
  { label: "Novedades", href: "#productos" },
];

const TRUST_ITEMS = [
  { icon: <Icon.Shield />, label: "Productos verificados por paaki" },
  { icon: <Icon.Truck />, label: "Entrega en todo México" },
  { icon: <Icon.Award />, label: "Selección curada con criterio" },
  { icon: <Icon.Headset />, label: "Soporte humano, no bots" },
  { icon: <Icon.Refresh />, label: "Devoluciones sin complicaciones" },
];

const CATEGORIES = [
  { name: "Hogar eficiente", count: "142 productos", bg: "bg-[#f0f7f3]", icon: <Icon.Home /> },
  { name: "Energía y solar",  count: "38 productos",  bg: "bg-[#fdf6ef]", icon: <Icon.Bolt /> },
  { name: "Movilidad",        count: "27 productos",  bg: "bg-[#eef1fd]", icon: <Icon.Bike /> },
  { name: "Tecnología",       count: "96 productos",  bg: "bg-[#f4f0fc]", icon: <Icon.Laptop /> },
  { name: "Agua y filtración",count: "31 productos",  bg: "bg-[#eef6fb]", icon: <Icon.Droplet /> },
];

const PRODUCTS = [
  {
    brand: "Xiaomi",
    name: "Mi Air Purifier 4 Compact — HEPA H13",
    price: "$2,499",
    currency: "MXN",
    badge: { label: "Nuevo", cls: "bg-green-50 text-green-700" },
    bg: "bg-[#eef6f0]",
    category: "Hogar eficiente",
    icon: <Icon.Air />,
  },
  {
    brand: "EcoFlow",
    name: "Panel Solar Portátil 160W — USB-C 60W",
    price: "$5,199",
    currency: "MXN",
    badge: { label: "Destacado", cls: "bg-amber-50 text-amber-700" },
    bg: "bg-[#eef1fd]",
    category: "Energía y solar",
    icon: <Icon.Solar c="#2a55d4" />,
  },
  {
    brand: "Berkey",
    name: "Travel Berkey — Filtro por gravedad 5.7L",
    price: "$3,890",
    currency: "MXN",
    badge: null,
    bg: "bg-[#fdf6ef]",
    category: "Agua y filtración",
    icon: <Icon.DropletLg />,
  },
  {
    brand: "Segway-Ninebot",
    name: "E2 Plus — Scooter eléctrico 25 km/h",
    price: "$8,450",
    currency: "MXN",
    badge: { label: "paaki Pro", cls: "bg-violet-50 text-violet-700" },
    bg: "bg-[#f4f0fc]",
    category: "Movilidad",
    icon: <Icon.ScooterLg />,
  },
];

const WHY_PILLARS = [
  {
    eyebrow: "Por qué paaki",
    title: "Productos verificados, no cualquier cosa",
    desc: "Cada producto que vendemos pasó por nuestra selección. Sin genéricos, sin calidades dudosas, sin sorpresas al abrir la caja.",
  },
  {
    eyebrow: "Cómo funciona",
    title: "Seleccionamos. Tú decides. Nosotros entregamos.",
    desc: "No tienes que buscar entre miles de opciones. Ya lo hicimos. Tú llegas, exploras y compras con confianza.",
  },
  {
    eyebrow: "Nuestro compromiso",
    title: "Soporte real si algo falla",
    desc: "Personas reales que responden. Garantía en cada compra. Devolución sin complicaciones. Sin letras chiquitas.",
  },
];

const BANNER_STATS = [
  { n: "334",  l: "productos disponibles" },
  { n: "100%", l: "verificados por paaki" },
  { n: "5",    l: "categorías activas" },
  { n: "MX",   l: "desde México para LatAm" },
];

const FOOTER_LINKS = {
  Explorar: ["Hogar eficiente", "Energía y solar", "Movilidad", "Tecnología", "Agua y filtración", "Novedades"],
  Empresa:  ["Nuestra historia", "Para proveedores", "Trabaja con nosotros", "Prensa"],
  Soporte:  ["Centro de ayuda", "Envíos y entregas", "Devoluciones", "Garantías", "Contacto"],
};

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        <a href="/" aria-label="paaki — inicio" className="shrink-0">
          <PaakiLogo height={24} />
        </a>
        <ul className="hidden md:flex items-center gap-5 lg:gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-[12.5px] text-neutral-500 hover:text-neutral-900 transition-colors duration-150">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 sm:gap-4">
          <button aria-label="Buscar" className="text-neutral-400 hover:text-neutral-800 transition-colors"><Icon.Search /></button>
          <button aria-label="Mi cuenta" className="hidden sm:block text-neutral-400 hover:text-neutral-800 transition-colors"><Icon.User /></button>
          <button aria-label="Carrito" className="relative text-neutral-400 hover:text-neutral-800 transition-colors">
            <Icon.Bag />
            <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-[#1a7a3e] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">0</span>
          </button>
          <button className="md:hidden text-neutral-400 hover:text-neutral-800 transition-colors ml-1" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
            {open ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-neutral-100 bg-white">
          <ul className="px-4 py-2">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-[13.5px] text-neutral-600 hover:text-[#1a7a3e] font-medium border-b border-neutral-50 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const cells = [
    { bg: "bg-[#b8d4b0]", label: "Hogar eficiente",  icon: <Icon.Home c="#2a6040" s={28} /> },
    { bg: "bg-[#a0c8b8]", label: "Energía solar",    icon: <Icon.Bolt c="#2a6040" s={28} /> },
    { bg: "bg-[#8fba85]", label: "Movilidad",         icon: <Icon.Bike c="#2a6040" s={28} /> },
    { bg: "bg-[#b0d4c4]", label: "Agua pura",         icon: <Icon.Droplet c="#2a6040" s={28} /> },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[420px] lg:min-h-[480px]">
      {/* Copy */}
      <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16 bg-white order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 bg-green-50 text-[#1a7a3e] text-[10.5px] font-semibold tracking-widest uppercase rounded-full px-3 py-1.5 mb-5 w-fit">
          <Icon.MapPin />
          Distribución inteligente · México
        </div>
        <h1 className="text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-semibold leading-[1.12] tracking-tight text-[#080808] mb-4">
          Lo que necesitas,{" "}
          <em className="not-italic text-[#1a7a3e]">sin buscarlo</em>
          {" "}todo el día.
        </h1>
        <p className="text-[14px] sm:text-[15px] text-neutral-400 leading-[1.72] mb-7 max-w-[380px]">
          Productos verificados para tu hogar, tu movilidad y tu vida diaria.
          Seleccionados con criterio, entregados con confianza.
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <a href="#productos" className="bg-[#1a7a3e] hover:bg-[#155f30] text-white text-[13px] font-medium px-6 py-3 rounded-lg transition-colors duration-150">
            Explorar productos
          </a>
          <a href="#categorias" className="inline-flex items-center gap-1.5 text-[#1a7a3e] border border-[#c8e8d5] hover:border-[#1a7a3e] text-[13px] font-medium px-5 py-3 rounded-lg transition-colors duration-150">
            Ver categorías <Icon.Arrow size={13} />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 border-t border-neutral-100">
          {[
            { icon: <Icon.Shield />, label: "Productos verificados" },
            { icon: <Icon.Truck />,  label: "Entrega en México" },
            { icon: <Icon.Headset />,label: "Soporte real" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-1.5 text-[11px] text-neutral-400">
              <span className="text-[#1a7a3e]">{t.icon}</span>{t.label}
            </div>
          ))}
        </div>
      </div>

      {/* Visual grid */}
      <div className="relative overflow-hidden order-1 lg:order-2 min-h-[260px] sm:min-h-[320px]">
        <div className="grid grid-cols-2 grid-rows-2 h-full gap-0.5">
          {cells.map((c) => (
            <div key={c.label} className={`${c.bg} flex flex-col items-center justify-center gap-2`}>
              <div className="opacity-55 flex flex-col items-center gap-1.5">
                {c.icon}
                <span className="text-[9.5px] font-medium text-[#2a6040] tracking-wide">{c.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 bg-white/96 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/80 shadow-sm">
          <p className="text-[9.5px] text-neutral-400 uppercase tracking-widest mb-0.5">Producto destacado</p>
          <p className="text-[13px] font-medium text-neutral-900">Xiaomi Mi Air Purifier 4 Compact</p>
          <p className="text-[13px] font-semibold text-[#1a7a3e] mt-0.5">
            $2,499 MXN
            <span className="text-[11px] font-normal text-neutral-400 ml-2">· Envío gratis</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── TRUST BAR ────────────────────────────────────────────────────────────────

function TrustBar() {
  return (
    <div className="bg-neutral-50 border-y border-neutral-100 overflow-x-auto scrollbar-none">
      <div className="flex items-center gap-0 px-4 sm:px-6 lg:px-8 py-3 min-w-max sm:min-w-0 sm:justify-between max-w-7xl mx-auto">
        {TRUST_ITEMS.map((item, i) => (
          <div key={i} className="flex items-center gap-6">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[#1a7a3e]">{item.icon}</span>
              <span className="text-[11px] text-neutral-500 whitespace-nowrap">{item.label}</span>
            </div>
            {i < TRUST_ITEMS.length - 1 && (
              <div className="w-px h-3.5 bg-neutral-200 mx-2 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────

function Categories() {
  return (
    <section id="categorias" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="text-[10px] font-semibold text-[#1a7a3e] uppercase tracking-widest mb-1">Explorar</p>
          <h2 className="text-[19px] sm:text-[21px] font-semibold text-[#080808] tracking-tight">¿Qué estás buscando hoy?</h2>
          <p className="text-[12.5px] text-neutral-400 mt-1">Categorías pensadas para el hogar latinoamericano</p>
        </div>
        <a href="#" className="hidden sm:flex items-center gap-1 text-[12px] text-[#1a7a3e] hover:text-[#155f30] font-medium transition-colors shrink-0">
          Ver todo <Icon.Arrow />
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
        {CATEGORIES.map((cat) => (
          <a key={cat.name} href="#" className={`${cat.bg} rounded-xl p-4 sm:p-5 flex flex-col relative border border-transparent hover:border-neutral-200 hover:shadow-sm transition-all duration-150 group`}>
            <div className="mb-3">{cat.icon}</div>
            <p className="text-[12px] font-semibold text-neutral-900 leading-snug">{cat.name}</p>
            <p className="text-[10px] text-neutral-400 mt-1">{cat.count}</p>
            <span className="absolute top-3 right-3 text-neutral-300 group-hover:text-neutral-500 transition-colors"><Icon.ArrowUpRight /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

function Products() {
  return (
    <section id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="text-[10px] font-semibold text-[#1a7a3e] uppercase tracking-widest mb-1">Selección paaki</p>
          <h2 className="text-[19px] sm:text-[21px] font-semibold text-[#080808] tracking-tight">Lo que vale la pena.</h2>
          <p className="text-[12.5px] text-neutral-400 mt-1">No vendemos todo. Solo lo que importa.</p>
        </div>
        <a href="#" className="hidden sm:flex items-center gap-1 text-[12px] text-[#1a7a3e] hover:text-[#155f30] font-medium transition-colors shrink-0">
          Ver catálogo <Icon.Arrow />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {PRODUCTS.map((p) => (
          <article key={p.name} className="border border-neutral-100 rounded-xl overflow-hidden bg-white hover:shadow-md hover:border-neutral-200 transition-all duration-200 cursor-pointer group">
            <div className={`${p.bg} h-36 sm:h-40 relative flex flex-col items-center justify-center gap-1.5`}>
              {p.icon}
              <span className="text-[9.5px] font-medium opacity-35 tracking-wide text-neutral-700">{p.category}</span>
              {p.badge && (
                <span className={`absolute top-2.5 left-2.5 text-[9px] font-semibold px-2 py-0.5 rounded-full ${p.badge.cls}`}>
                  {p.badge.label}
                </span>
              )}
            </div>
            <div className="p-3.5">
              <p className="text-[9.5px] text-neutral-300 uppercase tracking-widest mb-1">{p.brand}</p>
              <p className="text-[12.5px] font-medium text-neutral-900 leading-snug mb-3">{p.name}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[15px] font-semibold text-neutral-900">{p.price}</span>
                  <span className="text-[10px] text-neutral-300 font-normal ml-1">{p.currency}</span>
                </div>
                <button aria-label={`Agregar ${p.name} al carrito`} className="w-7 h-7 bg-[#1a7a3e] hover:bg-[#155f30] rounded-lg flex items-center justify-center transition-colors">
                  <Icon.Plus />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-7">
        <a href="#" className="inline-flex items-center gap-1.5 text-[13px] text-[#1a7a3e] hover:text-[#155f30] font-medium transition-colors">
          Ver catálogo completo <Icon.Arrow size={13} />
        </a>
      </div>
    </section>
  );
}

// ─── WHY PAAKI ────────────────────────────────────────────────────────────────

function WhyPaaki() {
  return (
    <div className="border-y border-neutral-100 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 gap-0">
          {WHY_PILLARS.map((p, i) => (
            <div key={i} className="py-7 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
              <p className="text-[10px] font-semibold text-[#1a7a3e] uppercase tracking-widest mb-3">{p.eyebrow}</p>
              <h3 className="text-[13.5px] font-semibold text-neutral-900 mb-2.5 leading-snug">{p.title}</h3>
              <p className="text-[12px] text-neutral-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── BANNER ───────────────────────────────────────────────────────────────────

function Banner() {
  return (
    <section className="bg-[#07200f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="text-[10px] font-semibold text-[#5aaa72] uppercase tracking-widest mb-4">Nuestra historia</p>
          <h2 className="text-[26px] sm:text-[30px] font-semibold text-white tracking-tight leading-[1.22] mb-4">
            Construido para<br />cómo vivimos aquí.
          </h2>
          <p className="text-[13.5px] text-white/45 leading-[1.75] mb-7 max-w-[380px]">
            No somos una plataforma global que llegó a México. Nacimos pensando en el consumidor latinoamericano — sus ciudades, sus necesidades, su forma de vivir. Y crecemos con él.
          </p>
          <a href="#" className="inline-block bg-white text-[#07200f] text-[13px] font-medium px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors">
            Conoce paaki
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {BANNER_STATS.map((s) => (
            <div key={s.l} className="bg-white/[0.06] border border-white/10 rounded-xl p-4 sm:p-5">
              <p className="text-[22px] sm:text-[26px] font-semibold text-white tracking-tight">{s.n}</p>
              <p className="text-[10.5px] text-white/35 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-8 sm:gap-10 pb-10 border-b border-white/[0.07]">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <PaakiLogo height={22} variant="light" />
            <p className="text-[11.5px] text-white/30 leading-[1.7] mt-3 max-w-[200px]">
              Distribución inteligente de productos eficientes y accesibles para el consumidor latinoamericano.
            </p>
            <div className="flex items-center gap-4 mt-5">
              {[<Icon.Instagram key="ig" />, <Icon.Twitter key="tw" />, <Icon.LinkedIn key="li" />].map((ic, i) => (
                <a key={i} href="#" aria-label="Red social" className="text-white/25 hover:text-white/60 transition-colors">{ic}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(FOOTER_LINKS) as [string, string[]][]).map(([col, links]) => (
            <div key={col}>
              <h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-4">{col}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[10.5px] text-white/20">
            © 2025 paaki · paaki.com.mx · Todos los derechos reservados
          </p>
          <div className="flex gap-5">
            {["Términos", "Privacidad", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-[10.5px] text-white/20 hover:text-white/40 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Categories />
      <Products />
      <WhyPaaki />
      <Banner />
      <Footer />
    </main>
  );
}
