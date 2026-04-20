// app/quiero-ser-proveedor/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ProveedorForm from "@/components/forms/ProveedorForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Sea proveedor de insumos para Eliana Zaia",
  description: "¿Quiere ser proveedor de insumos para Eliana Zaia? Envie su informacion y evaluaremos su propuesta comercial.",
};

export default function ProveedorPage() {
  return (
    <div className="min-h-screen bg-bg-warm pt-24">
      <div className="mx-auto max-w-3xl px-6 pb-16">
        <Breadcrumbs items={[{ name: "Quiero ser Proveedor", href: "/quiero-ser-proveedor" }]} />
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-text-primary mt-4">
            Sea proveedor de insumos para Eliana Zaia
          </h1>
          <p className="mt-4 text-text-muted">
            Estamos siempre en busca de proveedores de calidad para nuestros insumos. Si su empresa ofrece materias primas, empaques u otros insumos para la industria de alimentos, nos encantaria conocer su propuesta.
          </p>
        </ScrollReveal>
        <div className="mt-8">
          <ProveedorForm />
        </div>
      </div>
    </div>
  );
}
