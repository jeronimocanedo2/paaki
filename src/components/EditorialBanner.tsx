const stats = [
  { value: "334", label: "productos disponibles" },
  { value: "100%", label: "verificados por paaki" },
  { value: "5", label: "categorías activas" },
  { value: "MX", label: "desde México para LatAm" },
];

export default function EditorialBanner() {
  return (
    <section className="bg-[#07200f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-[10px] font-medium text-[#5aaa72] tracking-[0.12em] uppercase mb-3">
              Nuestra historia
            </p>
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-tight leading-[1.2] mb-4">
              Construido para<br />cómo vivimos aquí.
            </h2>
            <p className="text-[13px] text-white/45 leading-[1.75] mb-6 max-w-[380px]">
              No somos una plataforma global que llegó a México. Nacimos pensando
              en el consumidor latinoamericano — sus ciudades, sus necesidades, su
              forma de vivir. Y crecemos con él.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-[#07200f] text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-150"
            >
              Conoce paaki
            </a>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
              >
                <p className="text-[22px] font-semibold text-white tracking-tight">
                  {value}
                </p>
                <p className="text-[10.5px] text-white/35 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
