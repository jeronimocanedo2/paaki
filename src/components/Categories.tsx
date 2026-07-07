interface Category {
  name: string;
  count: number;
  bg: string;
  iconColor: string;
  icon: React.ReactNode;
  href: string;
}

const categories: Category[] = [
  {
    name: "Hogar eficiente",
    count: 142,
    bg: "bg-[#f0f7f3]",
    iconColor: "text-[#1e8040]",
    icon: <HomeIcon />,
    href: "#",
  },
  {
    name: "Energía y solar",
    count: 38,
    bg: "bg-[#fdf6ef]",
    iconColor: "text-[#b87000]",
    icon: <BoltIcon />,
    href: "#",
  },
  {
    name: "Movilidad",
    count: 27,
    bg: "bg-[#eef1fc]",
    iconColor: "text-[#2a55d4]",
    icon: <BikeIcon />,
    href: "#",
  },
  {
    name: "Tecnología",
    count: 96,
    bg: "bg-[#f4f0fc]",
    iconColor: "text-[#6e28c2]",
    icon: <LaptopIcon />,
    href: "#",
  },
  {
    name: "Agua y filtración",
    count: 31,
    bg: "bg-[#eef6fb]",
    iconColor: "text-[#0a80b0]",
    icon: <DropletIcon />,
    href: "#",
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="px-4 sm:px-6 lg:px-8 py-10 lg:py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="text-[10px] font-semibold text-[#1e8040] tracking-[0.12em] uppercase mb-1.5">
            Explorar
          </p>
          <h2 className="text-[18px] sm:text-[20px] font-semibold tracking-tight text-[#080808]">
            ¿Qué estás buscando hoy?
          </h2>
          <p className="text-[12.5px] text-gray-400 mt-1">
            Categorías pensadas para el hogar latinoamericano
          </p>
        </div>
        <a
          href="#"
          className="hidden sm:flex items-center gap-1 text-[12px] text-[#1e8040] font-medium hover:underline underline-offset-2 flex-shrink-0"
        >
          Ver todo
          <ArrowRightIcon />
        </a>
      </div>

      {/* Grid — 2 cols on mobile, 3 on sm, 5 on lg */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href={cat.href}
            className={`group relative ${cat.bg} border border-[#e8e8e8] rounded-xl px-3.5 py-4 flex flex-col transition-all duration-150 hover:border-[#c8e8d5] hover:shadow-sm`}
          >
            <span className={`${cat.iconColor} mb-2.5`}>{cat.icon}</span>
            <span className="text-[12px] font-semibold text-gray-800 leading-snug">
              {cat.name}
            </span>
            <span className="text-[10px] text-gray-400 mt-1">
              {cat.count} productos
            </span>
            <span className="absolute top-2.5 right-2.5 text-gray-300 group-hover:text-[#1e8040] transition-colors">
              <ArrowUpRightIcon />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function HomeIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
function BoltIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
}
function BikeIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 0 0-1-1h-1"/><path d="m9 15 3-6 2 4 1.5-3 1.5 3"/></svg>;
}
function LaptopIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9"/><path d="M2 16h20"/></svg>;
}
function DropletIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>;
}
function ArrowRightIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}
function ArrowUpRightIcon() {
  return <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>;
}
