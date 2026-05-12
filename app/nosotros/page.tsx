"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Section({
  children,
  bg = "cream",
  className = "",
}: {
  children: React.ReactNode;
  bg?: "cream" | "midnight";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      ref={ref}
      className={`px-6 py-20 md:py-28 ${className}`}
      style={{ backgroundColor: bg === "cream" ? "#fbf9f4" : "#00101f" }}
      data-inview={inView}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}

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

const TIMELINE = [
  {
    year: "1950s",
    heading: "Las raíces",
    body: "El padre de Eliana llega de Italia a Colombia. Trae consigo una técnica, un rigor, y una forma de entender el dulce que no se aprende — se hereda.",
  },
  {
    year: "1998",
    heading: "El comienzo",
    body: "Eliana abre un horno informal en Zipaquirá. Sin etiquetas, sin distribución masiva. Solo recetas perfeccionadas y la paciencia que el oficio exige.",
  },
  {
    year: "2010",
    heading: "La marca",
    body: "Eliana Zaia se formaliza. Los postres salen de la cocina y llegan a los primeros aliados comerciales de la región.",
  },
  {
    year: "2016",
    heading: "Las cadenas",
    body: "Ingreso a las principales cadenas nacionales. La técnica artesanal sobrevive la escala — ese es el diferencial.",
  },
  {
    year: "2024",
    heading: "Grupo Radici",
    body: "Nace el Grupo Radici. Eliana Zaia, El Tinto, EZ Treats, Moldeza y Radici Wealth Management. Una familia de empresas con raíces comunes.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero — cream */}
      <section
        className="relative flex min-h-[60vh] flex-col justify-end px-6 pb-16 pt-36 md:pt-44 md:pb-20"
        style={{ backgroundColor: "#fbf9f4" }}
      >
        <div className="mx-auto max-w-4xl w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs uppercase tracking-[0.28em]"
            style={{ color: "#c7a84b" }}
          >
            Nuestra historia
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
              color: "#00101f",
            }}
          >
            Desde 1998,{" "}
            <em className="italic" style={{ color: "#c7a84b" }}>
              cada postre
            </em>
            <br />
            cuenta una historia.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed md:text-lg"
            style={{ color: "#4a5560" }}
          >
            Una herencia italiana, un horno en Zipaquirá, y 26 años
            perfeccionando el equilibrio entre técnica y sabor.
          </motion.p>
        </div>
      </section>

      {/* Origen — midnight */}
      <section
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#00101f" }}
      >
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p
              className="mb-6 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#c7a84b" }}
            >
              El origen
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mb-8 text-3xl leading-[1.2] sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#fbf9f4",
              }}
            >
              Un padre italiano.
              <br />
              Una hija con el oficio en las manos.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-2xl space-y-5">
              <p
                className="text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(251,249,244,0.7)" }}
              >
                El padre de Eliana llegó de Italia después de la guerra. Traía
                una forma de entender la repostería que no se improvisa: rigor,
                paciencia, ingredientes de primera. Esa técnica pasó de mano en
                mano sin que nadie lo planeara.
              </p>
              <p
                className="text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(251,249,244,0.7)" }}
              >
                En 1998, Eliana encendió un horno en Zipaquirá. No había
                distribución, ni etiqueta, ni plan de negocios. Había recetas —
                y la certeza de que un buen postre no necesita explicaciones.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline — cream */}
      <section
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#fbf9f4" }}
      >
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p
              className="mb-12 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#c7a84b" }}
            >
              El recorrido
            </p>
          </FadeIn>
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.08}>
                <div
                  className="flex gap-8 border-t py-8 md:py-10"
                  style={{ borderColor: "rgba(199,168,75,0.2)" }}
                >
                  <div className="w-16 flex-shrink-0 md:w-20">
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#c7a84b" }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="mb-2 text-lg md:text-xl"
                      style={{
                        fontFamily: "'Noto Serif', serif",
                        fontWeight: 400,
                        color: "#00101f",
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      className="text-sm leading-relaxed md:text-base"
                      style={{ color: "#4a5560" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid rgba(199,168,75,0.2)" }} />
          </div>
        </div>
      </section>

      {/* El oficio — midnight */}
      <section
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#00101f" }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
            <FadeIn>
              <p
                className="mb-6 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#c7a84b" }}
              >
                El oficio
              </p>
              <h2
                className="mb-6 text-3xl leading-[1.2] sm:text-4xl"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#fbf9f4",
                }}
              >
                Artesanal a escala nacional.
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(251,249,244,0.7)" }}
              >
                La mayoría de las marcas eligen entre calidad artesanal y
                distribución masiva. Eliana Zaia eligió los dos — y pasó 26
                años demostrando que no son opuestos.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "31/32", label: "departamentos" },
                { number: "6.500+", label: "puntos de venta" },
                { number: "26", label: "años de oficio" },
                { number: "8", label: "cadenas nacionales" },
              ].map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.08}>
                  <div
                    className="rounded-2xl p-5"
                    style={{
                      backgroundColor: "rgba(251,249,244,0.05)",
                      border: "1px solid rgba(199,168,75,0.15)",
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
                      {stat.number}
                    </p>
                    <p
                      className="mt-1 text-xs"
                      style={{ color: "rgba(251,249,244,0.5)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — cream */}
      <section
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#fbf9f4" }}
      >
        <div className="mx-auto max-w-4xl">
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
                  ¿Producimos juntos?
                </h2>
                <p
                  className="mt-4 max-w-sm text-sm leading-relaxed md:text-base"
                  style={{ color: "#4a5560" }}
                >
                  Para cadenas, distribuidores y marcas blancas — con la misma
                  técnica que nos trajo hasta aquí.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/para-empresas"
                  className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
                  style={{
                    backgroundColor: "#c7a84b",
                    color: "#00101f",
                    boxShadow: "0 6px 24px rgba(199,168,75,0.3)",
                  }}
                >
                  Para empresas
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  href="/grupo-radici"
                  className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
                  style={{ borderColor: "#c7a84b", color: "#00101f" }}
                >
                  Grupo Radici
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
