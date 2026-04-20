import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postres artesanales colombianos | Catalogo completo",
  description: "Catalogo completo de postres artesanales de Eliana Zaia. Creme Brulee, Cheesecake, Tres Leches y mas. Disponibles en PriceSmart, Exito, D1 y principales cadenas.",
};

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
