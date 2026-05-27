"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const SERVICES = [
  {
    tag: "Distribución",
    title: "Portafolio listo para góndola",
    body: "Más de 12 referencias disponibles para tu cadena, con:",
    bullets: [
      "Registro INVIMA vigente",
      "Código de barras e información nutricional",
      "Capacidad de producción escalable",
      "Desde el Tiramisú hasta el Arroz con Leche",
    ],
  },
  {
    tag: "Producción a medida",
    title: "Tu idea, nuestra planta",
    body: "Desarrollamos cualquier postre a la medida de tu marca. Desde la formulación hasta el empaque y el logo — todo bajo un mismo proceso.",
    bullets: null,
  },
  {
    tag: "Marca blanca",
    title: "Mismo sabor, tu etiqueta",
    body: "Tomamos una receta probada de nuestro portafolio y la entregamos bajo tu marca. Mínimo tiempo de desarrollo, mismo estándar de siempre.",
    bullets: null,
  },
];

const STEPS = [
  { n: "01", title: "Contacto", body: "Cuéntanos sobre tu marca y tu proyecto." },
  { n: "02", title: "Muestra", body: "Enviamos muestras del portafolio o de la propuesta personalizada." },
  { n: "03", title: "Propuesta", body: "Te enviamos una propuesta con precios, tiempos y detalles según tu proyecto." },
  { n: "04", title: "Producción", body: "Fabricamos y entregamos en los tiempos acordados, con el estándar que nos trajo hasta aquí." },
];

const STATS = [
  { number: "8", label: "cadenas nacionales" },
  { number: "6.500+", label: "puntos de venta" },
  { number: "31/32", label: "departamentos" },
  { number: "26", label: "años de trayectoria" },
];

const TABS = [
  {
    id: "distribucion",
    label: "Distribución",
    title: "Portafolio listo para góndola",
    body: "Más de 12 referencias disponibles para tu cadena, con:",
    bullets: ["Registro INVIMA vigente", "Código de barras e información nutricional", "Capacidad de producción escalable", "Desde el Tiramisú hasta el Arroz con Leche"],
    image: "/images/empresas/distribucion.jpg",
    imageAlt: "Portafolio listo para góndola — Eliana Zaia",
  },
  {
    id: "produccion",
    label: "Producción a medida",
    title: "Tu idea, nuestra planta",
    body: "Desarrollamos cualquier postre a la medida de tu marca. Desde la formulación hasta el empaque y el logo — todo bajo un mismo proceso.",
    bullets: null,
    image: "/images/empresas/produccion.png",
    imageAlt: "Producción a medida — Eliana Zaia",
  },
  {
    id: "marca-blanca",
    label: "Marca blanca",
    title: "Mismo sabor, tu etiqueta",
    body: "Tomamos una receta probada de nuestro portafolio y la entregamos bajo tu marca. Mínimo tiempo de desarrollo, mismo estándar de siempre.",
    bullets: null,
    image: "/images/empresas/marca-blanca.png",
    imageAlt: "Marca blanca — Eliana Zaia",
  },
];

function ServiciosTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#fbf9f4" }}>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
            Lo que ofrecemos
          </p>
          <h2 className="text-3xl leading-[1.2] sm:text-4xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "-0.02em", color: "#00101f" }}>
            Tres formas de trabajar juntos.
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-1 border-b" style={{ borderColor: "rgba(199,168,75,0.2)" }}>
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className="relative px-4 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors"
              style={{ color: active === i ? "#c7a84b" : "#4a5560" }}
            >
              {t.label}
              {active === i && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: "#c7a84b" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Contenido con animación */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center"
          >
            {/* Imagen */}
            <div className="group relative aspect-[4/3] overflow-hidden rounded-sm order-2 md:order-1" style={{ backgroundColor: "#f5f3ee" }}>
              <Image
                src={tab.image}
                alt={tab.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
            </div>

            {/* Texto */}
            <div className="order-1 md:order-2">
              <p className="mb-3 text-xs uppercase tracking-[0.22em]" style={{ color: "#c7a84b" }}>
                {tab.label}
              </p>
              <h3 className="mb-4 text-2xl md:text-3xl"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#00101f" }}>
                {tab.title}
              </h3>
              <p className="text-sm leading-relaxed md:text-base" style={{ color: "#4a5560" }}>
                {tab.body}
              </p>
              {tab.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {tab.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#4a5560" }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: "#c7a84b" }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default function ParaEmpresasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero — fondo horno oscuro con texto abajo izquierda */}
      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundColor: "#00101f",
          backgroundImage: "linear-gradient(to top, rgba(0,16,31,0.95) 0%, rgba(0,16,31,0.4) 50%, rgba(0,16,31,0.1) 100%), url('/images/empresas/horno.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="absolute bottom-0 left-0 z-10 w-full max-w-3xl px-6 pb-16 md:px-12 md:pb-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            className="mb-5 flex items-center gap-3"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } }}
          >
            <span className="h-px w-6" style={{ backgroundColor: "#c7a84b" }} />
            <p className="text-sm font-medium uppercase tracking-[0.32em]" style={{ color: "#c7a84b" }}>
              Para empresas
            </p>
            <span className="h-px w-6" style={{ backgroundColor: "#c7a84b" }} />
          </motion.div>

          <motion.h1
            className="text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "-0.02em", color: "#fbf9f4" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } }}
          >
            Proveedor de postres{" "}
            <em className="italic" style={{ color: "#c7a84b" }}>artesanales</em>
          </motion.h1>

          <motion.p
            className="mt-4 text-2xl leading-[1.25] sm:text-3xl md:text-4xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "-0.01em", color: "rgba(251,249,244,0.78)" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } }}
          >
            para supermercados, cadenas y distribuidores en Colombia.
          </motion.p>

          <motion.div
            className="mt-6 flex max-w-xl items-center gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } }}
          >
            <span className="h-6 w-px flex-shrink-0" style={{ backgroundColor: "#c7a84b" }} />
            <p className="text-base italic leading-relaxed md:text-lg" style={{ color: "rgba(251,249,244,0.95)" }}>
              Tú lo imaginas, nosotros lo creamos.
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } }}
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="group inline-flex items-center gap-3 rounded-sm px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, rgba(199,168,75,0.15), rgba(199,168,75,0.08))",
                border: "1px solid rgba(199,168,75,0.5)",
                backdropFilter: "blur(12px)",
                boxShadow: "inset 0 1px 0 rgba(199,168,75,0.2), 0 0 24px rgba(199,168,75,0.15)",
                color: "#fbf9f4",
              }}
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#c7a84b" }} />
              Pedir propuesta comercial
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "#c7a84b" }} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats — still midnight */}
      <section
        className="px-6 pb-20 pt-16"
        style={{ backgroundColor: "#00101f" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div
                  className="rounded-sm p-6 text-center"
                  style={{
                    backgroundColor: "rgba(251,249,244,0.04)",
                    border: "1px solid rgba(199,168,75,0.12)",
                  }}
                >
                  <p
                    className="text-2xl md:text-3xl"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      color: "#c7a84b",
                    }}
                  >
                    {s.number}
                  </p>
                  <p
                    className="mt-1 text-xs leading-snug"
                    style={{ color: "rgba(251,249,244,0.65)" }}
                  >
                    {s.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios — tabs interactivos */}
      <ServiciosTabs />

      {/* Proceso — midnight */}

      <section
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#00101f" }}
      >
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p
              className="mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#c7a84b" }}
            >
              Cómo trabajamos
            </p>
            <h2
              className="mb-12 text-3xl leading-[1.2] sm:text-4xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#fbf9f4",
              }}
            >
              Desde el primer contacto<br />hasta la góndola.
            </h2>
          </FadeIn>
          <div className="grid gap-0">
            {STEPS.map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.08}>
                <div
                  className="flex gap-8 border-t py-8"
                  style={{ borderColor: "rgba(199,168,75,0.12)" }}
                >
                  <span
                    className="w-8 flex-shrink-0 text-sm font-medium"
                    style={{ color: "rgba(199,168,75,0.5)" }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3
                      className="mb-1 text-lg"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 400,
                        color: "#fbf9f4",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(251,249,244,0.55)" }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid rgba(199,168,75,0.12)" }} />
          </div>
        </div>
      </section>

      {/* CTA contacto — cream */}
      <section
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#fbf9f4" }}
      >
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p
                  className="mb-4 text-xs uppercase tracking-[0.28em]"
                  style={{ color: "#c7a84b" }}
                >
                  Siguiente paso
                </p>
                <h2
                  className="text-3xl leading-[1.2] sm:text-4xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#00101f",
                  }}
                >
                  ¿Producimos<br /><em className="italic" style={{ color: "#c7a84b" }}>juntos?</em>
                </h2>
                <p
                  className="mt-4 max-w-sm text-sm leading-relaxed"
                  style={{ color: "#4a5560" }}
                >
                  Cuéntanos sobre tu proyecto. Respondemos en menos de 24 horas.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={CONTACT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-sm px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all hover:scale-[1.02] hover:brightness-105"
                  style={{
                    backgroundColor: "#c7a84b",
                    border: "1px solid #c7a84b",
                    boxShadow: "0 6px 24px rgba(199,168,75,0.3)",
                    color: "#00101f",
                  }}
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#00101f" }} />
                  WhatsApp
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "#00101f" }} />
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-3 rounded-sm px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all hover:scale-[1.02]"
                  style={{
                    background: "rgba(0,16,31,0.04)",
                    border: "1px solid rgba(0,16,31,0.15)",
                    color: "#4a5560",
                  }}
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#4a5560" }} />
                  Email
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
