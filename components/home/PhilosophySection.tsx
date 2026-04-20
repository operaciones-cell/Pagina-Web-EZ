"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ⚠️ REEMPLAZAR con el URL real del video de filosofía
const PHILOSOPHY_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_141530_philosophy.mp4";

export default function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative px-6 py-28 md:py-40"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p
            className="mb-4 text-xs uppercase tracking-[0.32em]"
            style={{ color: "var(--color-gold)" }}
          >
            Filosofía
          </p>
          <h2
            className="text-4xl tracking-tight md:text-6xl"
            style={{
              fontFamily: "'Noto Serif', serif",
              color: "var(--color-ink)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Tradición{" "}
            <em
              className="italic"
              style={{ color: "var(--color-gold)", fontWeight: 500 }}
            >
              ×
            </em>{" "}
            Innovación
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="overflow-hidden rounded-3xl"
            style={{ aspectRatio: "4/5" }}
          >
            <video
              src={PHILOSOPHY_VIDEO}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="space-y-10"
          >
            <div className="border-l pl-6" style={{ borderColor: "rgba(0,16,31,0.12)" }}>
              <h3
                className="mb-3 text-xl tracking-tight md:text-2xl"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  color: "var(--color-ink)",
                  fontWeight: 500,
                }}
              >
                Recetas heredadas
              </h3>
              <p
                className="text-sm leading-relaxed md:text-base"
                style={{ color: "var(--color-text-muted)" }}
              >
                Sabores que viajan por generaciones, perfeccionados con paciencia y respeto.
              </p>
            </div>

            <div className="border-l pl-6" style={{ borderColor: "rgba(0,16,31,0.12)" }}>
              <h3
                className="mb-3 text-xl tracking-tight md:text-2xl"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  color: "var(--color-ink)",
                  fontWeight: 500,
                }}
              >
                Técnica italiana
              </h3>
              <p
                className="text-sm leading-relaxed md:text-base"
                style={{ color: "var(--color-text-muted)" }}
              >
                Procesos refinados con la precisión de la repostería europea contemporánea.
              </p>
            </div>

            <div className="border-l pl-6" style={{ borderColor: "rgba(0,16,31,0.12)" }}>
              <h3
                className="mb-3 text-xl tracking-tight md:text-2xl"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  color: "var(--color-ink)",
                  fontWeight: 500,
                }}
              >
                Innovación sin atajos
              </h3>
              <p
                className="text-sm leading-relaxed md:text-base"
                style={{ color: "var(--color-text-muted)" }}
              >
                Nuevos formatos como GeliCloud nacen del estudio paciente del oficio.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
