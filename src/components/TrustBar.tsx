const items = [
  { icon: <ShieldCheckIcon />, label: "Productos verificados por paaki" },
  { icon: <TruckIcon />, label: "Entrega en todo México" },
  { icon: <AwardIcon />, label: "Selección curada con criterio" },
  { icon: <HeadsetIcon />, label: "Soporte humano, no bots" },
  { icon: <RefreshIcon />, label: "Devoluciones sin complicaciones" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#f7f7f5] border-b border-gray-100 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 sm:gap-8 py-3 min-w-max sm:min-w-0 sm:justify-between">
          {items.map(({ icon, label }, i) => (
            <div key={label} className="flex items-center gap-2 whitespace-nowrap">
              {i > 0 && (
                <span className="hidden sm:block w-px h-3.5 bg-gray-200 -ml-3 mr-3" aria-hidden="true" />
              )}
              <span className="text-[#1e8040]">{icon}</span>
              <span className="text-[11px] text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShieldCheckIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
}
function TruckIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect width="7" height="7" x="14" y="10" rx="1"/><path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/></svg>;
}
function AwardIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
}
function HeadsetIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11V9a9 9 0 0 1 18 0v2"/><path d="M20 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3z"/></svg>;
}
function RefreshIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>;
}
