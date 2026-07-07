import PaakiLogo from "./PaakiLogo";

const footerLinks = {
  Explorar: [
    { label: "Hogar eficiente", href: "#" },
    { label: "Energía y solar", href: "#" },
    { label: "Movilidad", href: "#" },
    { label: "Tecnología", href: "#" },
    { label: "Agua y filtración", href: "#" },
    { label: "Novedades", href: "#" },
  ],
  Empresa: [
    { label: "Nuestra historia", href: "#" },
    { label: "Para proveedores", href: "#" },
    { label: "Trabaja con nosotros", href: "#" },
    { label: "Prensa", href: "#" },
  ],
  Soporte: [
    { label: "Centro de ayuda", href: "#" },
    { label: "Envíos y entregas", href: "#" },
    { label: "Devoluciones", href: "#" },
    { label: "Garantías", href: "#" },
    { label: "Contacto", href: "#" },
  ],
};

const socialLinks = [
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "TikTok", href: "#", icon: <TikTokIcon /> },
  { label: "X / Twitter", href: "#", icon: <XIcon /> },
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] pt-10 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] gap-8 pb-8 border-b border-white/[0.07]">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <PaakiLogo className="h-[22px] w-auto" color="#3a8f58" />
            <p className="text-[11.5px] text-white/30 leading-[1.7] mt-3 max-w-[200px]">
              Distribución inteligente de productos eficientes y accesibles para
              el consumidor latinoamericano.
            </p>
            <div className="flex gap-4 mt-5">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/25 hover:text-white/60 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.08em] mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[11.5px] text-white/30 hover:text-white/60 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[10.5px] text-white/18">
            © 2025 paaki · paaki.com.mx · Todos los derechos reservados
          </p>
          <div className="flex gap-5">
            {["Términos", "Privacidad", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10.5px] text-white/18 hover:text-white/40 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
}
function TikTokIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>;
}
function XIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}
function LinkedInIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
}
