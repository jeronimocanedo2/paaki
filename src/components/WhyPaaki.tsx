const pillars = [
  {
    num: "Por qué paaki",
    title: "Productos verificados, no cualquier cosa",
    desc:
      "Cada producto que vendemos pasó por nuestra selección. Sin genéricos, sin calidades dudosas, sin sorpresas al abrir la caja.",
  },
  {
    num: "Cómo funciona",
    title: "Seleccionamos. Tú decides. Nosotros entregamos.",
    desc:
      "No tienes que buscar entre miles de opciones. Ya lo hicimos. Llegas, exploras y compras con confianza.",
  },
  {
    num: "Nuestro compromiso",
    title: "Soporte real si algo falla",
    desc:
      "Personas reales que responden. Garantía en cada compra. Devolución sin complicaciones. Sin letras chiquitas.",
  },
];

export default function WhyPaaki() {
  return (
    <div className="border-t border-b border-gray-100 bg-[#f8f9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {pillars.map(({ num, title, desc }) => (
            <div key={num} className="py-6 sm:py-0 sm:px-8 first:pl-0 last:pr-0">
              <p className="text-[10px] font-semibold text-[#1e8040] uppercase tracking-[0.1em] mb-2">
                {num}
              </p>
              <p className="text-[13.5px] font-500 text-[#0a0a0a] leading-snug mb-2">
                {title}
              </p>
              <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
