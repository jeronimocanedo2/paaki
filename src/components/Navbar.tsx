"use client";

import { useState } from "react";
import PaakiLogo from "./PaakiLogo";

const navLinks = [
  { label: "Hogar", href: "#categorias" },
  { label: "Energía", href: "#categorias" },
  { label: "Movilidad", href: "#categorias" },
  { label: "Tecnología", href: "#categorias" },
  { label: "Agua", href: "#categorias" },
  { label: "Novedades", href: "#productos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <a href="/" aria-label="paaki inicio" className="flex-shrink-0">
            <PaakiLogo className="h-6 sm:h-7 w-auto" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12.5px] text-gray-500 hover:text-[#1e8040] transition-colors duration-150 font-normal"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop icons */}
          <div className="hidden lg:flex items-center gap-5">
            <button aria-label="Buscar" className="text-gray-500 hover:text-[#1e8040] transition-colors">
              <SearchIcon />
            </button>
            <button aria-label="Mi cuenta" className="text-gray-500 hover:text-[#1e8040] transition-colors">
              <UserIcon />
            </button>
            <button aria-label="Carrito" className="text-gray-500 hover:text-[#1e8040] transition-colors relative">
              <BagIcon />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1e8040] text-white text-[9px] font-semibold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile: cart + hamburger */}
          <div className="flex lg:hidden items-center gap-4">
            <button aria-label="Carrito" className="text-gray-500 relative">
              <BagIcon />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1e8040] text-white text-[9px] font-semibold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="text-gray-500 p-1"
            >
              {open ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 text-[14px] text-gray-600 hover:text-[#1e8040] border-b border-gray-50 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-5 pt-3 px-2">
              <button aria-label="Buscar" className="text-gray-500 hover:text-[#1e8040] transition-colors">
                <SearchIcon />
              </button>
              <button aria-label="Mi cuenta" className="text-gray-500 hover:text-[#1e8040] transition-colors">
                <UserIcon />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
