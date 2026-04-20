// app/trabaja-con-nosotros/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import EmpleoForm from "@/components/forms/EmpleoForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Trabaja con nosotros | Eliana Zaia",
  description: "Unete al equipo de Eliana Zaia. Buscamos personas apasionadas por la excelencia en produccion, ventas, administracion y logistica.",
};

export default function TrabajaConNosotrosPage() {
  return (
    <div className="min-h-screen bg-bg-warm pt-24">
      <div className="mx-auto max-w-3xl px-6 pb-16">
        <Breadcrumbs items={[{ name: "Trabaja con Nosotros", href: "/trabaja-con-nosotros" }]} />
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-text-primary mt-4">
            Trabaja con nosotros
          </h1>
          <p className="mt-4 text-text-muted">
            En Eliana Zaia buscamos personas apasionadas por la excelencia. Si quieres ser parte de un equipo que crea los mejores postres artesanales de Colombia, dejanos tus datos.
          </p>
        </ScrollReveal>
        <div className="mt-8">
          <EmpleoForm />
        </div>
      </div>
    </div>
  );
}
