"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GRUPO_RADICI, CONTACT } from "@/lib/constants";

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

const EMPRESA_DETAILS: Record<
  string,
  { tag: string; description: string; location: string; href?: string }
> = {
  "Eliana Zaia": {
    tag: "Repostería",
    description:
      "La marca principal del grupo. Postres artesanales de técnica italiana distribuidos en 31 de 32 departamentos de Colombia.",
    location: "Zipaquirá, Colombia",
    href: "/",
  },
  "El Tinto": {
    tag: "Cafetería",
    description:
      "Espacios donde los postres Eliana Zaia cobran vida. Experiencia de marca directa al consumidor.",
    location: "Colombia",
  },
  "EZ Treats": {
    tag: "Producción",
    description:
      "La fábrica de postres del grupo en expansión hacia el mercado latinoamericano.",
    location: "Lima, Perú",
  },
  Moldeza: {
    tag: "Insumos",
    description:
      "Producción y distribución de moldes e insumos para la industria de repostería.",
    location: "Colombia",
  },
  "Radici Wealth Management": {
    tag: "Finanzas",
    description:
      "Gestión patrimonial y financiera del grupo empresarial Radici.",
    location: "Colombia",
  },
};

export default function GrupoRadiciPage() {
  return (
    <div className="min-h-screen">
      {/* Hero — cream */}
      <section
        className="px-6 pb-16 pt-36 md:pb-20 md:pt-44"
        style={{ backgroundColor: "#fbf9f4" }}
      >
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs uppercase tracking-[0.28em]"
            style={{ color: "#c7a84b" }}
          >
            El grupo
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
            Grupo{" "}
            <em className="italic" style={{ color: "#c7a84b" }}>
              Radici
            </em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-sm leading-relaxed md:text-base"
            style={{ color: "#4a5560" }}
          >
            <em>Radici</em> — raíces en italiano. Un conjunto de empresas que
            comparten origen, valores y la misma forma de entender el oficio.
          </motion.p>
        </div>
      </section>

      {/* Empresas — cream continues */}
      <section
        className="px-6 pb-20 md:pb-28"
        style={{ backgroundColor: "#fbf9f4" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-0">
            {GRUPO_RADICI.map((empresa, i) => {
              const detail = EMPRESA_DETAILS[empresa.name];
              return (
                <FadeIn key={empresa.name} delay={i * 0.08}>
                  <div
                    className="flex flex-col gap-4 border-t py-8 md:flex-row md:items-start md:gap-12 md:py-10"
                    style={{ borderColor: "rgba(199,168,75,0.18)" }}
                  >
                    {/* Index */}
                    <span
                      className="w-8 flex-shrink-0 text-xs font-medium"
                      style={{ color: "rgba(199,168,75,0.5)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        {detail?.tag && (
                          <span
                            className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em]"
                            style={{
                              backgroundColor: "rgba(199,168,75,0.1)",
                              color: "#c7a84b",
                            }}
                          >
                            {detail.tag}
                          </span>
                        )}
                        {detail?.location && (
                          <span
                            className="text-xs"
                            style={{ color: "#4a5560" }}
                          >
                            {detail.location}
                          </span>
                        )}
                      </div>
                      <h2
                        className="mb-2 text-2xl md:text-3xl"
                        style={{
                          fontFamily: "'Noto Serif', serif",
                          fontWeight: 400,
                          color: "#00101f",
                        }}
                      >
                        {empresa.name}
                      </h2>
                      {detail?.description && (
                        <p
                          className="max-w-md text-sm leading-relaxed"
                          style={{ color: "#4a5560" }}
                        >
                          {detail.description}
                        </p>
                      )}
                    </div>

                    {/* Link */}
                    {detail?.href && (
                      <Link
                        href={detail.href}
                        className="group flex-shrink-0 self-start"
                      >
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: "rgba(199,168,75,0.12)",
                            color: "#c7a84b",
                          }}
                        >
                          <ArrowUpRight size={16} />
                        </span>
                      </Link>
                    )}
                  </div>
                </FadeIn>
              );
            })}
            <div style={{ borderTop: "1px solid rgba(199,168,75,0.18)" }} />
          </div>
        </div>
      </section>

      {/* Narrative — midnight */}
      <section
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#00101f" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <FadeIn>
              <p
                className="mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#c7a84b" }}
              >
                La raíz
              </p>
              <h2
                className="text-3xl leading-[1.2] sm:text-4xl"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#fbf9f4",
                }}
              >
                Empresas distintas,
                <br />
                el mismo origen.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p
                className="mt-2 text-sm leading-relaxed md:text-base"
                style={{ color: "rgba(251,249,244,0.65)" }}
              >
                El Grupo Radici nació cuando Eliana Zaia alcanzó la escala
                suficiente para pensar en estructura. Cada empresa del grupo
                resuelve una parte del ecosistema — producción, distribución,
                experiencia directa, insumos y patrimonio.
              </p>
              <p
                className="mt-4 text-sm leading-relaxed md:text-base"
                style={{ color: "rgba(251,249,244,0.65)" }}
              >
                La expansión a Lima con EZ Treats es el primer paso
                internacional. La raíz italiana de la fundadora encuentra hoy
                un nuevo suelo latinoamericano.
              </p>
              <div className="mt-8">
                <a
                  href={CONTACT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:scale-[1.03]"
                  style={{
                    backgroundColor: "#c7a84b",
                    color: "#00101f",
                    boxShadow: "0 4px 20px rgba(199,168,75,0.25)",
                  }}
                >
                  Contactar al grupo
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
