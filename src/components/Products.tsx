interface Product {
  brand: string;
  name: string;
  price: string;
  category: string;
  badge?: { label: string; style: string };
  bgColor: string;
  iconColor: string;
  icon: React.ReactNode;
}

const products: Product[] = [
  {
    brand: "Xiaomi",
    name: "Mi Air Purifier 4 Compact — HEPA H13",
    price: "$2,499",
    category: "Purificadores de aire",
    badge: { label: "Nuevo", style: "bg-[#e2f4eb] text-[#14602e]" },
    bgColor: "bg-[#eef6f0]",
    iconColor: "text-[#1e8040]",
    icon: <AirIcon />,
  },
  {
    brand: "EcoFlow",
    name: "Panel Solar Portátil 160W — USB-C 60W",
    price: "$5,199",
    category: "Paneles solares portátiles",
    badge: { label: "Destacado", style: "bg-[#fff3e0] text-[#854f00]" },
    bgColor: "bg-[#eef1fc]",
    iconColor: "text-[#2a55d4]",
    icon: <SolarIcon />,
  },
  {
    brand: "Berkey",
    name: "Travel Berkey — Filtro por gravedad 5.7L",
    price: "$3,890",
    category: "Filtros de agua",
    bgColor: "bg-[#fdf6ee]",
    iconColor: "text-[#b87000]",
    icon: <DropletIcon />,
  },
  {
    brand: "Segway-Ninebot",
    name: "E2 Plus — Scooter eléctrico 25 km/h",
    price: "$8,450",
    category: "Scooters eléctricos",
    badge: { label: "paaki Pro", style: "bg-[#ede8fc] text-[#5018a0]" },
    bgColor: "bg-[#f2eeff]",
    iconColor: "text-[#6e28c2]",
    icon: <BikeIcon />,
  },
];

export default function Products() {
  return (
    <section id="productos" className="px-4 sm:px-6 lg:px-8 pb-10 lg:pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="text-[10px] font-semibold text-[#1e8040] tracking-[0.12em] uppercase mb-1.5">
            Selección paaki
          </p>
          <h2 className="text-[18px] sm:text-[20px] font-semibold tracking-tight text-[#080808]">
            Lo que vale la pena.
          </h2>
          <p className="text-[12.5px] text-gray-400 mt-1">
            No vendemos todo. Solo lo que importa.
          </p>
        </div>
        <a
          href="#"
          className="hidden sm:flex items-center gap-1 text-[12px] text-[#1e8040] font-medium hover:underline underline-offset-2 flex-shrink-0"
        >
          Ver catálogo completo
          <ArrowRightIcon />
        </a>
      </div>

      {/* Grid — 1 col mobile, 2 sm, 4 lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {products.map((product) => (
          <article
            key={product.name}
            className="border border-[#e8e8e8] rounded-xl overflow-hidden bg-white hover:border-[#c8e8d5] hover:shadow-sm transition-all duration-150 cursor-pointer group"
          >
            {/* Image area */}
            <div className={`relative ${product.bgColor} h-[148px] flex flex-col items-center justify-center gap-1.5`}>
              <span className={product.iconColor}>{product.icon}</span>
              <span className="text-[9.5px] font-medium opacity-40 text-current" style={{ color: product.iconColor.replace("text-[", "").replace("]", "") }}>
                {product.category}
              </span>
              {product.badge && (
                <span className={`absolute top-2.5 left-2.5 text-[9px] font-semibold px-2 py-0.5 rounded-full ${product.badge.style}`}>
                  {product.badge.label}
                </span>
              )}
            </div>

            {/* Body */}
            <div className="p-3.5">
              <p className="text-[9.5px] text-gray-300 uppercase tracking-[0.06em] mb-0.5">
                {product.brand}
              </p>
              <p className="text-[12.5px] font-medium text-[#0a0a0a] leading-snug mb-2.5">
                {product.name}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[15px] font-semibold text-[#0a0a0a]">
                    {product.price}
                  </span>
                  <span className="text-[10px] text-gray-400 ml-0.5 font-normal">MXN</span>
                </div>
                <button
                  aria-label={`Agregar ${product.name} al carrito`}
                  className="w-7 h-7 rounded-lg bg-[#1e8040] flex items-center justify-center hover:bg-[#186535] transition-colors"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile see all */}
      <div className="sm:hidden text-center mt-6">
        <a href="#" className="text-[13px] text-[#1e8040] font-medium underline underline-offset-2">
          Ver catálogo completo
        </a>
      </div>
    </section>
  );
}

function AirIcon() {
  return <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M6.6 8.6A4 4 0 1 1 18 12h-2"/></svg>;
}
function SolarIcon() {
  return <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6.01 14 6 8a6 6 0 0 1 12 0l-.01 6"/><line x1="12" y1="2" x2="12" y2="4"/></svg>;
}
function DropletIcon() {
  return <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>;
}
function BikeIcon() {
  return <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 0 0-1-1h-1"/><path d="m9 15 3-6 2 4 1.5-3 1.5 3"/></svg>;
}
function ArrowRightIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}
function PlusIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
}
