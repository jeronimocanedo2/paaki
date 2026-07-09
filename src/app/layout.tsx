import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "paaki — Distribución inteligente para Latinoamérica",
  description: "Productos verificados para tu hogar, movilidad y vida diaria. Seleccionados con criterio, entregados con confianza.",
  keywords: "paaki, tecnología verde, distribución, Latinoamérica, México, energía solar, movilidad eléctrica, hogar eficiente",
  metadataBase: new URL("https://paaki.com.mx"),
  openGraph: {
    title: "paaki — Distribución inteligente para Latinoamérica",
    description: "Productos verificados para tu hogar, movilidad y vida diaria.",
    url: "https://paaki.com.mx",
    siteName: "paaki",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "paaki — Distribución inteligente para Latinoamérica",
    description: "Productos verificados para tu hogar, movilidad y vida diaria.",
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
