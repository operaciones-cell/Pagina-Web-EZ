"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PHILOSOPHY_VIDEO = ""; // ← Pega aquí el URL del video

export default function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-24 md:py-36"
      style={{ backgroundColor: "#00101f" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center md:mb-20"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.32em]" style={{ color: "#c7a84b" }}>
            Filosofía
          </p>
          <h2
            className="text-4xl tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#fbf9f4",
            }}
          >
            Tradición{" "}
            <em className="italic" style={{ color: "#c7a84b" }}>×</em>{" "}
            Innovación
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="ambient-shadow aspect-[4/3] overflow-hidden rounded-3xl"
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
            className="flex flex-col justify-center gap-8"
          >
            <div className="border-l pl-6" style={{ borderColor: "rgba(199, 168, 75, 0.4)" }}>
              <h3
                className="mb-3 text-xl md:text-2xl"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 500,
                  color: "#fbf9f4",
                }}
              >
                Recetas heredadas
              </h3>
              <p className="text-sm leading-relaxed md:text-base" style={{ color: "rgba(251, 249, 244, 0.7)" }}>
                Sabores que viajan por generaciones, perfeccionados con paciencia y respeto.
              </p>
            </div>

            <div className="border-l pl-6" style={{ borderColor: "rgba(199, 168, 75, 0.4)" }}>
              <h3
                className="mb-3 text-xl md:text-2xl"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 500,
                  color: "#fbf9f4",
                }}
              >
                Técnica italiana
              </h3>
              <p className="text-sm leading-relaxed md:text-base" style={{ color: "rgba(251, 249, 244, 0.7)" }}>
                Procesos refinados con la precisión de la repostería europea contemporánea.
              </p>
            </div>

            <div className="border-l pl-6" style={{ borderColor: "rgba(199, 168, 75, 0.4)" }}>
              <h3
                className="mb-3 text-xl md:text-2xl"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 500,
                  color: "#fbf9f4",
                }}
              >
                Innovación sin atajos
              </h3>
              <p className="text-sm leading-relaxed md:text-base" style={{ color: "rgba(251, 249, 244, 0.7)" }}>
                Nuevos formatos como GeliCloud nacen del estudio paciente del oficio.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
