// app/para-empresas/distribucion/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import B2BForm from "@/components/forms/B2BForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Sea distribuidor de postres Eliana Zaia en su region",
  description: "Conviertase en distribuidor de postres Eliana Zaia. Lleve los mejores postres artesanales de Colombia a su region con el respaldo de una marca reconocida.",
};

export default function DistribucionPage() {
  return (
    <div className="min-h-screen bg-bg-warm pt-24">
      <div className="mx-auto max-w-3xl px-6 pb-16">
        <Breadcrumbs items={[
          { name: "Para Empresas", href: "/para-empresas" },
          { name: "Distribucion", href: "/para-empresas/distribucion" },
        ]} />
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-text-primary mt-4">
            Sea distribuidor de postres Eliana Zaia en su region
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Lleve los postres artesanales mas reconocidos de Colombia a su region. Como distribuidor de Eliana Zaia, contara con el respaldo de una marca con mas de 15 anos de trayectoria y presencia en las principales cadenas del pais.
          </p>
        </ScrollReveal>
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-6">Solicitar informacion</h2>
          <B2BForm type="distribucion" />
        </div>
      </div>
    </div>
  );
}
