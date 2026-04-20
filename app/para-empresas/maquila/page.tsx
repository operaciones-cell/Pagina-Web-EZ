// app/para-empresas/maquila/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import B2BForm from "@/components/forms/B2BForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Maquila de postres y produccion bajo marca blanca en Colombia",
  description: "Servicio de maquila de postres y produccion bajo marca blanca. Eliana Zaia fabrica sus postres con la calidad de mas de 15 anos de experiencia.",
};

export default function MaquilaPage() {
  return (
    <div className="min-h-screen bg-bg-warm pt-24">
      <div className="mx-auto max-w-3xl px-6 pb-16">
        <Breadcrumbs items={[
          { name: "Para Empresas", href: "/para-empresas" },
          { name: "Maquila", href: "/para-empresas/maquila" },
        ]} />
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-text-primary mt-4">
            Maquila de postres y produccion bajo marca blanca en Colombia
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Fabricamos postres bajo su marca con la calidad y experiencia de Eliana Zaia. Mas de 15 anos produciendo para las principales cadenas de Colombia nos respaldan.
          </p>
          <p className="mt-4 text-text-muted">
            Nuestra planta en Zipaquira cuenta con la capacidad, los registros sanitarios y el equipo humano para producir su linea de postres a la medida. Desde el desarrollo de la receta hasta el empaque final, nos encargamos de todo.
          </p>
        </ScrollReveal>
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-6">Solicitar informacion</h2>
          <B2BForm type="maquila" />
        </div>
      </div>
    </div>
  );
}
