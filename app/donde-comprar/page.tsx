// app/donde-comprar/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ALLIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Donde comprar postres Eliana Zaia en Colombia",
  description: "Encuentra postres artesanales Eliana Zaia en PriceSmart, Exito, D1, Ara, Jumbo, Metro y mas cadenas de Colombia.",
};

export default function DondeComprarPage() {
  return (
    <div className="min-h-screen bg-bg-warm pt-24">
      <div className="mx-auto max-w-4xl px-6 pb-16">
        <Breadcrumbs items={[{ name: "Donde Comprar", href: "/donde-comprar" }]} />

        <ScrollReveal>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-4">
            ¿Donde comprar postres Eliana Zaia en Colombia?
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Encuentra nuestros postres artesanales en las principales cadenas de Colombia.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {ALLIES.map((ally, i) => (
            <ScrollReveal key={ally.name} delay={i * 0.05}>
              <div className="flex h-24 items-center justify-center rounded-xl bg-white shadow-sm px-4">
                <span className="font-semibold text-text-primary text-center">{ally.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-text-muted">¿No encuentras nuestros productos en tu zona?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto" className="rounded-full bg-accent-gold px-8 py-3 font-semibold text-bg-dark transition-colors hover:bg-accent-caramel">
              Contactanos
            </Link>
            <Link href="/para-empresas" className="text-accent-gold hover:text-accent-caramel transition-colors">
              ¿Eres empresa? &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
