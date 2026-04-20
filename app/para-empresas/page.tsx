// app/para-empresas/page.tsx
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import B2BForm from "@/components/forms/B2BForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PRODUCTS, ALLIES, CONTACT } from "@/lib/constants";

export default function ParaEmpresasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero B2B */}
      <section className="bg-bg-dark pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs items={[{ name: "Para Empresas", href: "/para-empresas" }]} />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-light mt-4">
            Proveedor de postres para supermercados, cadenas y distribuidores en Colombia
          </h1>
          <p className="mt-4 text-xl text-text-muted max-w-3xl">{CONTACT.sloganB2B}</p>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="bg-bg-dark pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { number: "+15", label: "Anos de experiencia" },
              { number: "8", label: "Cadenas nacionales" },
              { number: "98%", label: "Cumplimiento en entregas" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-white/10 p-8 text-center">
                  <p className="font-heading text-5xl font-bold text-accent-gold">{item.number}</p>
                  <p className="mt-2 text-text-muted">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-bg-warm py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-8">Nuestro Portafolio</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="rounded-lg bg-white p-4 text-center">
                <div className="aspect-square bg-bg-cream rounded mb-3 flex items-center justify-center">
                  <span className="text-xs text-text-muted">{p.name}</span>
                </div>
                <p className="font-semibold text-text-primary text-sm">{p.name}</p>
                <p className="text-xs text-text-muted">{p.weight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-bg-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-text-light mb-8">Ventajas competitivas</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Capacidad productiva", desc: "Planta en Zipaquira con capacidad de produccion escalable para toda Colombia y Latinoamerica." },
              { title: "Personalizacion", desc: "Desarrollo de productos a la medida, maquila y marca blanca. Tu lo imaginas, nosotros lo creamos." },
              { title: "Empaque retail-ready", desc: "Empaques disenados para gondola con codigo de barras, informacion nutricional y registro INVIMA." },
              { title: "Registro INVIMA", desc: "Todos nuestros productos cuentan con registro sanitario vigente y cumplimiento de normatividad colombiana." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-white/10 p-6">
                  <h3 className="font-heading text-xl font-semibold text-text-light mb-2">{item.title}</h3>
                  <p className="text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg-warm py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-8">Proceso de trabajo</h2>
          </ScrollReveal>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { step: "01", title: "Contacto", desc: "Cuentanos sobre tu negocio y necesidades." },
              { step: "02", title: "Muestra", desc: "Enviamos muestras de productos para evaluacion." },
              { step: "03", title: "Negociacion", desc: "Definimos volumenes, precios y condiciones." },
              { step: "04", title: "Entrega", desc: "Produccion y entrega con 98% de cumplimiento." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-xl bg-white p-6 text-center">
                  <p className="font-heading text-3xl font-bold text-accent-gold">{item.step}</p>
                  <h3 className="mt-2 font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Allies */}
      <section className="bg-bg-cream py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-8">Nuestros aliados</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {ALLIES.map((a) => (
              <div key={a.name} className="flex h-14 w-28 items-center justify-center rounded bg-white px-3">
                <span className="text-xs text-text-muted">{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-bg-warm py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-2 text-center">Contactenos</h2>
          <p className="text-text-muted text-center mb-8">Complete el formulario y nuestro equipo comercial se pondra en contacto.</p>
          <B2BForm type="b2b" />
          <p className="mt-6 text-center text-sm text-text-muted">
            O escribanos directamente por{" "}
            <a href={CONTACT.whatsappMessage} target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:underline">WhatsApp</a>
          </p>
        </div>
      </section>

      {/* Sub-links */}
      <section className="bg-bg-dark py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href="/para-empresas/maquila" className="text-accent-gold hover:text-accent-caramel transition-colors">
            Servicio de maquila &rarr;
          </Link>
          <Link href="/para-empresas/distribucion" className="text-accent-gold hover:text-accent-caramel transition-colors">
            Para distribuidores &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
