"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ALLIES } from "@/lib/constants";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function DondeComprarPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fbf9f4" }}>

      {/* Hero */}
      <section className="px-6 pb-16 pt-36 md:pb-20 md:pt-44" style={{ backgroundColor: "#fbf9f4" }}>
        <div className="mx-auto max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-4 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
            Dónde comprar
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, letterSpacing: "-0.02em", color: "#00101f" }}>
            Nos encuentras donde{" "}
            <em className="italic" style={{ color: "#c7a84b" }}>importa.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 max-w-lg text-sm leading-relaxed md:text-base" style={{ color: "#4a5560" }}>
            Más de 6.500 puntos de venta en 31 de 32 departamentos de Colombia.
          </motion.p>
        </div>
      </section>

      {/* El Tinto — mapa */}
      <section className="px-6 pb-20 md:pb-28" style={{ backgroundColor: "#fbf9f4" }}>
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-3 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
              Tiendas propias
            </p>
            <h2 className="mb-8 text-2xl sm:text-3xl"
              style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, letterSpacing: "-0.02em", color: "#00101f" }}>
              Visítanos en <em className="italic" style={{ color: "#c7a84b" }}>El Tinto</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-2xl" style={{ boxShadow: "0 4px 24px rgba(0,16,31,0.1)" }}>
              <iframe
                src="https://maps.google.com/maps?q=4.918361,-74.022833&output=embed&z=18&hl=es"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm" style={{ color: "#4a5560" }}>
                Zipaquirá, Colombia — Donde los postres cobran vida.
              </p>
              <a
                href="https://maps.app.goo.gl/BwcGGyEdEr7hXhYH6"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "#c7a84b" }}
              >
                Ver en Maps
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Aliados — cream */}
      <section className="px-6 pb-20 md:pb-28" style={{ backgroundColor: "#fbf9f4" }}>
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-8 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
              Nuestros aliados
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {ALLIES.map((ally, i) => (
              <FadeIn key={ally.name} delay={i * 0.06}>
                <div
                  className="flex h-20 items-center justify-center rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,16,31,0.07)" }}
                >
                  <img
                    src={ally.logo}
                    alt={ally.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — midnight */}
      <section className="px-6 py-16 md:py-20" style={{ backgroundColor: "#00101f" }}>
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
                  ¿No nos encuentras?
                </p>
                <h2 className="text-3xl leading-[1.2] sm:text-4xl"
                  style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, letterSpacing: "-0.02em", color: "#fbf9f4" }}>
                  Escribenos y te ayudamos.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(251,249,244,0.55)" }}>
                  Si no encontrás nuestros productos en tu zona, cuéntanos — o si eres empresa y querés distribuirlos.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
                  style={{ backgroundColor: "#c7a84b", color: "#00101f", boxShadow: "0 6px 24px rgba(199,168,75,0.3)" }}
                >
                  Contactarnos
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/para-empresas"
                  className="inline-flex items-center rounded-full border-2 px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
                  style={{ borderColor: "#c7a84b", color: "#fbf9f4" }}
                >
                  Para empresas
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
