"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
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
    body: "Más de 12 referencias con registro INVIMA, empaque retail-ready y código de barras. Desde Crème Brûlée hasta Arroz con Leche — todo disponible para tu cadena.",
  },
  {
    tag: "Maquila",
    title: "Tu idea, nuestra planta",
    body: "Desarrollamos productos a la medida de tu marca. Gelatinas, postres cremosos, snacks. Desde la formulación hasta el empaque con tu logo.",
  },
  {
    tag: "Marca blanca",
    title: "Mismo sabor, tu etiqueta",
    body: "Tomamos una receta probada de nuestro portafolio y la entregamos bajo tu marca. Mínimo tiempo de desarrollo, máxima confianza en el resultado.",
  },
];

const STEPS = [
  { n: "01", title: "Contacto", body: "Cuéntanos sobre tu negocio y volúmenes estimados." },
  { n: "02", title: "Muestra", body: "Enviamos muestras del portafolio o de la propuesta personalizada." },
  { n: "03", title: "Propuesta", body: "Precios, condiciones de entrega y términos de marca blanca." },
  { n: "04", title: "Producción", body: "Fabricamos y entregamos. 98% de cumplimiento en entregas." },
];

const STATS = [
  { number: "8", label: "cadenas nacionales" },
  { number: "6.500+", label: "puntos de venta" },
  { number: "31/32", label: "departamentos" },
  { number: "98%", label: "cumplimiento en entregas" },
];

export default function ParaEmpresasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero — midnight */}
      <section
        className="relative px-6 pb-20 pt-36 md:pb-28 md:pt-44"
        style={{ backgroundColor: "#00101f" }}
      >
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs uppercase tracking-[0.28em]"
            style={{ color: "#c7a84b" }}
          >
            Para empresas
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#fbf9f4",
            }}
          >
            Tu cadena. Tu marca.
            <br />
            <em className="italic" style={{ color: "#c7a84b" }}>
              Nuestro oficio.
            </em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-sm leading-relaxed md:text-base"
            style={{ color: "rgba(251,249,244,0.65)" }}
          >
            Proveemos postres artesanales a cadenas, distribuidores y marcas
            propias en Colombia y Latinoamérica — con la misma técnica que nos
            trajo hasta aquí.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
              style={{
                backgroundColor: "#c7a84b",
                color: "#00101f",
                boxShadow: "0 6px 24px rgba(199,168,75,0.3)",
              }}
            >
              Hablemos por WhatsApp
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
              style={{ borderColor: "rgba(199,168,75,0.4)", color: "#fbf9f4" }}
            >
              Escribirnos por email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats — still midnight */}
      <section
        className="px-6 pb-20"
        style={{ backgroundColor: "#00101f" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{
                    backgroundColor: "rgba(251,249,244,0.04)",
                    border: "1px solid rgba(199,168,75,0.12)",
                  }}
                >
                  <p
                    className="text-2xl md:text-3xl"
                    style={{
                      fontFamily: "'Noto Serif', serif",
                      fontWeight: 400,
                      color: "#c7a84b",
                    }}
                  >
                    {s.number}
                  </p>
                  <p
                    className="mt-1 text-xs leading-snug"
                    style={{ color: "rgba(251,249,244,0.45)" }}
                  >
                    {s.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios — cream */}
      <section
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#fbf9f4" }}
      >
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p
              className="mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#c7a84b" }}
            >
              Lo que ofrecemos
            </p>
            <h2
              className="mb-12 text-3xl leading-[1.2] sm:text-4xl"
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#00101f",
              }}
            >
              Tres formas de trabajar juntos.
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.tag} delay={i * 0.1}>
                <div
                  className="flex h-full flex-col rounded-2xl p-6 md:p-8"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 16px rgba(0,16,31,0.06)",
                  }}
                >
                  <p
                    className="mb-4 text-xs uppercase tracking-[0.22em]"
                    style={{ color: "#c7a84b" }}
                  >
                    {s.tag}
                  </p>
                  <h3
                    className="mb-3 text-xl md:text-2xl"
                    style={{
                      fontFamily: "'Noto Serif', serif",
                      fontWeight: 400,
                      color: "#00101f",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4a5560" }}
                  >
                    {s.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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
                fontFamily: "'Noto Serif', serif",
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
                        fontFamily: "'Noto Serif', serif",
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
                    fontFamily: "'Noto Serif', serif",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#00101f",
                  }}
                >
                  ¿Producimos<br />juntos?
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
                  className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
                  style={{
                    backgroundColor: "#c7a84b",
                    color: "#00101f",
                    boxShadow: "0 6px 24px rgba(199,168,75,0.3)",
                  }}
                >
                  WhatsApp
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center rounded-full border-2 px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
                  style={{ borderColor: "#c7a84b", color: "#00101f" }}
                >
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
