// app/para-empresas/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proveedor de postres para supermercados y distribuidores | Eliana Zaia",
  description: "Eliana Zaia: proveedor de postres artesanales para supermercados, cadenas y distribuidores en Colombia. Mas de 15 anos, 98% cumplimiento. Maquila y marca blanca.",
};

export default function ParaEmpresasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
