"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative px-6 py-28 md:py-40"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs uppercase tracking-[0.32em]"
          style={{ color: "var(--color-gold)" }}
        >
          Nuestra esencia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            color: "var(--color-ink)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          Fusionamos la{" "}
          <em
            className="italic"
            style={{ color: "var(--color-gold)", fontWeight: 500 }}
          >
            tradición latina
          </em>{" "}
          con la técnica{" "}
          <em
            className="italic"
            style={{ color: "var(--color-gold)", fontWeight: 500 }}
          >
            italiana
          </em>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-10 max-w-2xl text-base leading-relaxed md:text-lg"
          style={{ color: "var(--color-text-muted)" }}
        >
          Desde 2010, en Zipaquirá, elaboramos postres artesanales premium con
          recetas que honran nuestras raíces y métodos refinados por generaciones.
          Cada creación es una conversación entre dos mundos.
        </motion.p>
      </div>
    </section>
  );
}
