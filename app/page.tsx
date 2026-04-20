import Link from "next/link";
import { PRODUCTS, GRUPO_RADICI, CONTACT } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductCard from "@/components/products/ProductCard";
import Manifesto from "@/components/home/Manifesto";
import AlliesMarquee from "@/components/home/AlliesMarquee";
import DeepDive from "@/components/home/DeepDive";
import Loader from "@/components/home/Loader";

export default function Home() {
  return (
    <>
      <Loader />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center bg-bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark to-[#1A1210]" />
        <div className="relative z-10 text-center px-6">
          <h1 className="sr-only">
            Postres artesanales premium para supermercados y distribuidores en Colombia
          </h1>
          <p className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-text-light">
            Eliana Zaia
          </p>
          <p className="mt-4 text-lg md:text-xl text-text-muted">
            {CONTACT.sloganB2C}
          </p>
          <div className="mt-12 animate-bounce">
            <svg className="mx-auto h-6 w-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Manifiesto — GSAP scroll-triggered */}
      <Manifesto />

      {/* Portafolio */}
      <section className="bg-bg-warm py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-12">
              Nuestras Creaciones
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {PRODUCTS.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.05}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive — Apple-style scroll */}
      <DeepDive />

      {/* Aliados — Marquee infinito */}
      <AlliesMarquee />

      {/* B2B Teaser */}
      <section className="bg-bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-center text-3xl md:text-5xl font-bold text-text-light mb-4">
              Trabajemos Juntos
            </h2>
            <p className="text-center text-text-muted mb-16 text-lg">
              {CONTACT.sloganB2B}
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Capacidad productiva escalable", desc: "Produccion industrial con calidad artesanal para toda Colombia y Latinoamerica." },
              { title: "98% cumplimiento", desc: "Mas de 15 anos entregando a tiempo a las principales cadenas del pais." },
              { title: "Personalizacion total", desc: "Maquila, marca blanca y desarrollo de productos a la medida de su negocio." },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-white/10 p-8 text-center transition-colors hover:border-accent-gold/30">
                  <h3 className="font-heading text-xl font-semibold text-text-light mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-muted">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/para-empresas"
              className="rounded-full bg-accent-gold px-8 py-3 font-semibold text-bg-dark transition-colors hover:bg-accent-caramel"
            >
              Conozca nuestra propuesta B2B
            </Link>
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent-gold px-8 py-3 font-semibold text-accent-gold transition-colors hover:bg-accent-gold hover:text-bg-dark"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Grupo Radici */}
      <section className="bg-bg-cream py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-widest text-text-muted mb-2">Grupo empresarial</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12">
              Radici
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {GRUPO_RADICI.map((empresa) => (
              <ScrollReveal key={empresa.name}>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                    <span className="text-xs font-medium text-text-muted">{empresa.name.charAt(0)}</span>
                  </div>
                  <p className="font-semibold text-text-primary">{empresa.name}</p>
                  {empresa.description && (
                    <p className="text-xs text-text-muted mt-1">{empresa.description}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/grupo-radici" className="text-accent-cocoa hover:text-accent-gold transition-colors">
              Conoce nuestro grupo &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
