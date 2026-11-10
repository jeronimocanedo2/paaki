import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prueba privada de compra | Paaki",
  robots: { index: false, follow: false },
};

export default function PrivateTestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
