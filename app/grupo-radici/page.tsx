// app/grupo-radici/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { GRUPO_RADICI } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grupo Radici | Nuestras empresas",
  description: "Grupo Radici: conglomerado empresarial con presencia en Colombia y Peru. Eliana Zaia, El Tinto, EZ Treats, Moldeza y Radici Wealth Management.",
};

export default function GrupoRadiciPage() {
  return (
    <div className="min-h-screen bg-bg-warm pt-24">
      <div className="mx-auto max-w-4xl px-6 pb-16">
        <Breadcrumbs items={[{ name: "Grupo Radici", href: "/grupo-radici" }]} />

        <ScrollReveal>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-4">
            Grupo Radici
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Nuestras empresas
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GRUPO_RADICI.map((empresa, i) => (
            <ScrollReveal key={empresa.name} delay={i * 0.1}>
              <div className="rounded-xl bg-white p-8 shadow-sm text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-bg-cream">
                  <span className="font-heading text-2xl font-bold text-accent-gold">
                    {empresa.name.charAt(0)}
                  </span>
                </div>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  {empresa.name}
                </h2>
                {empresa.description && (
                  <p className="mt-2 text-sm text-text-muted">{empresa.description}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contacto" className="text-accent-gold hover:text-accent-caramel transition-colors">
            Contactanos &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
