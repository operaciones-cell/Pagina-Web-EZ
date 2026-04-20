// app/nosotros/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Reposteria EZ | Mas de 15 anos creando postres artesanales en Colombia",
  description: "Conoce la historia de Eliana Zaia. Desde 2010 fusionamos la tradicion latina con la tecnica italiana para crear postres artesanales premium en Zipaquira, Colombia.",
};

export default function NosotrosPage() {
  const timeline = [
    { year: "2010", event: "Nace Eliana Zaia en Zipaquira, Cundinamarca" },
    { year: "2013", event: "Primeros aliados comerciales en la region" },
    { year: "2016", event: "Ingreso a cadenas nacionales" },
    { year: "2019", event: "Expansion del portafolio a 12 productos" },
    { year: "2022", event: "Presencia en 8 cadenas nacionales" },
    { year: "2024", event: "Creacion del Grupo Radici y expansion internacional" },
  ];

  return (
    <div className="min-h-screen bg-bg-warm pt-24">
      <div className="mx-auto max-w-4xl px-6 pb-16">
        <Breadcrumbs items={[{ name: "Nosotros", href: "/nosotros" }]} />

        <ScrollReveal>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-4">
            Mas de 15 anos creando postres artesanales en Colombia
          </h1>
          <p className="mt-6 text-lg text-text-muted leading-relaxed">
            Desde 2010, Eliana Zaia ha fusionado la tradicion latina con la tecnica italiana para crear postres que trascienden lo ordinario. Lo que comenzo como un sueno en Zipaquira, hoy es una empresa que abastece a las principales cadenas de Colombia.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="mt-16 space-y-8">
          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="font-heading text-2xl font-bold text-accent-gold">{item.year}</span>
                </div>
                <div className="border-l-2 border-accent-gold/20 pl-6">
                  <p className="text-text-primary">{item.event}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Values */}
        <ScrollReveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: "Artesanal", desc: "Cada producto es elaborado con tecnicas artesanales y la atencion al detalle que solo el amor por el oficio puede dar." },
              { title: "Innovador", desc: "Fusionamos tradiciones culinarias con tendencias modernas para crear sabores unicos que sorprenden." },
              { title: "Confiable", desc: "98% de cumplimiento en entregas. Nuestros aliados confian en nosotros porque cumplimos lo que prometemos." },
            ].map((v, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">{v.title}</h3>
                <p className="text-text-muted text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12 text-center">
          <Link href="/para-empresas" className="rounded-full bg-accent-gold px-8 py-3 font-semibold text-bg-dark transition-colors hover:bg-accent-caramel">
            Trabajemos juntos
          </Link>
        </div>
      </div>
    </div>
  );
}
