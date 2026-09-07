import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paaki — Acceso inteligente a una vida mejor",
  description: "Productos útiles, bien elegidos y pensados para acompañarte todos los días.",
  keywords: "paaki, hogar, tecnología, movilidad, bienestar, herramientas, diversión, productos útiles",
  metadataBase: new URL("https://paaki.com.mx"),
  openGraph: {
    title: "Paaki — Acceso inteligente a una vida mejor",
    description: "Productos útiles, bien elegidos y pensados para acompañarte todos los días.",
    url: "https://paaki.com.mx",
    siteName: "paaki",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paaki — Acceso inteligente a una vida mejor",
    description: "Productos útiles, bien elegidos y pensados para acompañarte todos los días.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
