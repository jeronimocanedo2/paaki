const heroPhotos = [
  {
    label: "Hogar eficiente",
    bg: "from-[#b8d4b0] to-[#8fba85]",
    icon: HomeIcon,
  },
  {
    label: "Energía solar",
    bg: "from-[#c5ddc0] to-[#a0c899]",
    icon: SolarIcon,
  },
  {
    label: "Movilidad",
    bg: "from-[#a8cc9e] to-[#7db072]",
    icon: BikeIcon,
  },
  {
    label: "Agua pura",
    bg: "from-[#d4e8ce] to-[#b0d4a8]",
    icon: DropletIcon,
  },
];

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[420px] lg:min-h-[480px]">
      {/* Left: copy */}
      <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-10 py-12 lg:py-16 bg-white order-2 lg:order-1">
        <div className="max-w-sm lg:max-w-md">
          {/* Pill */}
          <span className="inline-flex items-center gap-2 text-[10.5px] font-medium text-[#1e8040] bg-[#e6f4ec] px-3 py-1.5 rounded-full mb-5">
            <PinIcon />
            Distribución inteligente · México
          </span>

          {/* Headline */}
          <h1 className="text-[28px] sm:text-[34px] lg:text-[36px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#080808] mb-4">
            Lo que necesitas,{" "}
            <em className="not-italic text-[#1e8040]">sin buscarlo</em>
            <br className="hidden sm:block" /> todo el día.
          </h1>

          {/* Sub */}
          <p className="text-[13.5px] sm:text-[14px] text-gray-500 leading-[1.68] mb-7 max-w-[340px]">
            Productos verificados para tu hogar, tu movilidad y tu vida diaria.
            Seleccionados con criterio, entregados con confianza.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#productos"
              className="inline-block bg-[#1e8040] text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-[#186535] transition-colors duration-150"
            >
              Explorar productos
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1e8040] border border-[#c8e8d5] px-4 py-2.5 rounded-lg hover:bg-[#e6f4ec] transition-colors duration-150"
            >
              Ver categorías
              <ArrowRightIcon />
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-6 border-t border-gray-100">
            {[
              { icon: <ShieldIcon />, label: "Productos verificados" },
              { icon: <TruckIcon />, label: "Entrega en México" },
              { icon: <HeadsetIcon />, label: "Soporte real" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className="text-[#1e8040]">{icon}</span>
                <span className="text-[11px] text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: photo grid */}
      <div className="relative overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-auto order-1 lg:order-2 bg-[#f0f7f2]">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[3px]">
          {heroPhotos.map(({ label, bg, icon: Icon }) => (
            <div
              key={label}
              className={`relative flex items-center justify-center bg-gradient-to-br ${bg}`}
            >
              <div className="flex flex-col items-center gap-1.5 opacity-50">
                <Icon />
                <span className="text-[9.5px] font-medium text-[#2a6040]">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,25,15,0.55)] via-transparent to-transparent pointer-events-none" />

        {/* Floating product card */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/80 shadow-sm">
          <p className="text-[9.5px] text-gray-400 uppercase tracking-[0.08em] mb-0.5">
            Producto destacado
          </p>
          <p className="text-[12.5px] font-medium text-[#080808]">
            Xiaomi Mi Air Purifier 4 Compact
          </p>
          <p className="text-[13px] font-semibold text-[#1e8040] mt-0.5">
            $2,499 MXN · Envío gratis
          </p>
        </div>
      </div>
    </section>
  );
}

// Icons
function PinIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function ArrowRightIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}
function ShieldIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
}
function TruckIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect width="7" height="7" x="14" y="10" rx="1"/><path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/></svg>;
}
function HeadsetIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11V9a9 9 0 0 1 18 0v2"/><path d="M20 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3z"/></svg>;
}
function HomeIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2a6040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
function SolarIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2a6040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6.01 14 6 8a6 6 0 0 1 12 0l-.01 6"/><line x1="12" y1="2" x2="12" y2="4"/></svg>;
}
function BikeIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2a6040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 0 0-1-1h-1"/><path d="m9 15 3-6 2 4 1.5-3 1.5 3"/></svg>;
}
function DropletIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2a6040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>;
}
