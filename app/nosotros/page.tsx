"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

const TIMELINE = [
  {
    year: "2010",
    heading: "La marca",
    body: "Eliana Zaia se formaliza y llega a los primeros aliados comerciales de la región.",
  },
  {
    year: "2016",
    heading: "Las cadenas",
    body: "Ingreso a las principales cadenas nacionales. La técnica artesanal sobrevive la escala.",
  },
  {
    year: "2024",
    heading: "Grupo Radici",
    body: "Nace el Grupo Radici — la familia de empresas que hoy da estructura al legado de Eliana Zaia.",
  },
  {
    year: "2026",
    heading: "Lima",
    body: "Lo que comenzó en un horno en Zipaquirá hoy cruza fronteras.",
  },
];

const VALORES = [
  { valor: "Oficio", desc: "Cada postre se elabora respetando su tiempo, su técnica y cada detalle del proceso." },
  { valor: "Herencia", desc: "Una tradición inspirada en la técnica italiana y desarrollada con identidad propia en Colombia." },
  { valor: "Autenticidad", desc: "Ingredientes seleccionados y procesos artesanales que ponen el sabor y la calidad por encima de todo." },
  { valor: "Escala con carácter", desc: "Crecemos y llegamos a todo el país manteniendo la esencia que nos distingue." },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">

      {/* Hero — cream */}
      <section
        className="relative flex min-h-[70vh] flex-col justify-end px-6 pb-16 pt-36 md:pt-44 md:pb-24"
        style={{ backgroundColor: "#fbf9f4" }}
      >
        <div className="mx-auto max-w-5xl w-full">
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
            className="text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
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
      <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#00101f" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
            {/* Texto */}
            <div>
              <FadeIn>
                <p className="mb-6 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
                  El origen
                </p>
                <h2
                  className="mb-8 text-3xl leading-[1.2] sm:text-4xl md:text-5xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "-0.02em", color: "#fbf9f4" }}
                >
                  Un padre italiano.
                  <br />
                  Una hija que convirtió
                  <br />
                  el oficio en legado.
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="space-y-5">
                  <p className="text-base leading-relaxed md:text-lg" style={{ color: "rgba(251,249,244,0.7)" }}>
                    Eliana creció aprendiendo la técnica de su padre. En 1998,
                    comenzó a darle su propia identidad.
                  </p>
                  <p className="text-base leading-relaxed md:text-lg" style={{ color: "rgba(251,249,244,0.7)" }}>
                    No había etiquetas ni canales de distribución; solo recetas,
                    técnica y la convicción de que un buen postre habla por sí solo.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Foto Eliana */}
            <FadeIn delay={0.1}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/nosotros/eliana.jpg"
                  alt="Eliana Zaia"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline — cream con años grandes */}
      <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#fbf9f4" }}>
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-16 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
              El recorrido
            </p>
          </FadeIn>
          <div>
            {TIMELINE.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.08}>
                <div
                  className="grid border-t py-8 md:grid-cols-[200px_1fr] md:py-10 md:gap-12"
                  style={{ borderColor: "rgba(199,168,75,0.2)" }}
                >
                  <div>
                    <span
                      className="text-5xl md:text-7xl"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 400,
                        color: "rgba(199,168,75,0.25)",
                        lineHeight: 1,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="mt-3 md:mt-0 md:pt-2">
                    <h3
                      className="mb-2 text-lg md:text-xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#00101f" }}
                    >
                      {item.heading}
                    </h3>
                    <p className="text-sm leading-relaxed md:text-base" style={{ color: "#4a5560" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid rgba(199,168,75,0.2)" }} />
          </div>

          {/* Foto de proceso */}
          <FadeIn className="mt-12">
            <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
              <Image
                src="/images/nosotros/proceso.jpg"
                alt="Proceso artesanal Eliana Zaia"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(251,249,244,0.3) 0%, rgba(251,249,244,0) 50%)" }} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lo que creemos — midnight */}
      <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#00101f" }}>
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-10 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
              Nuestra razón de ser
            </p>
          </FadeIn>

          {/* Frases grandes */}
          <div className="mb-16 space-y-4">
            {[
              "Creemos que un postre bien hecho no necesita explicaciones.",
              "Que artesanal y nacional no son opuestos.",
              "Que la técnica italiana tiene mucho que decirle al sabor latino.",
            ].map((frase, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p
                  className="text-2xl leading-snug md:text-3xl lg:text-4xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    color: "#fbf9f4",
                    opacity: 1 - i * 0.2,
                  }}
                >
                  {frase}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Valores */}
          <div className="grid gap-px sm:grid-cols-2" style={{ backgroundColor: "rgba(199,168,75,0.12)" }}>
            {VALORES.map((v, i) => (
              <FadeIn key={v.valor} delay={i * 0.08}>
                <div className="p-6 md:p-8" style={{ backgroundColor: "#00101f" }}>
                  <p className="mb-3 text-xs uppercase tracking-[0.22em]" style={{ color: "#c7a84b" }}>
                    {v.valor}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(251,249,244,0.6)" }}>
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — cream */}
      <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#fbf9f4" }}>
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
                  Conoce más
                </p>
                <h2
                  className="text-3xl leading-[1.2] sm:text-4xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "-0.02em", color: "#00101f" }}
                >
                  ¿Quieres conocer el grupo?
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/grupo-radici"
                  className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
                  style={{ backgroundColor: "#c7a84b", color: "#00101f", boxShadow: "0 6px 24px rgba(199,168,75,0.3)" }}
                >
                  Grupo Radici
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/productos"
                  className="inline-flex items-center rounded-full border-2 px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
                  style={{ borderColor: "#c7a84b", color: "#00101f" }}
                >
                  Nuestros productos
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
