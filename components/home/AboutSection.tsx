"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 pt-28 pb-16 md:pt-40 md:pb-20"
      style={{ backgroundColor: "#fbf9f4" }}
    >
      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-[0.32em]"
          style={{ color: "#c7a84b" }}
        >
          Nuestra esencia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "#00101f",
          }}
        >
          Fusionamos la{" "}
          <em className="italic" style={{ color: "#c7a84b" }}>tradición latina</em>{" "}
          con la técnica{" "}
          <em className="italic" style={{ color: "#c7a84b" }}>italiana</em>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg"
          style={{ color: "#4a5560" }}
        >
          Desde 2010, en Zipaquirá, elaboramos postres artesanales premium con
          recetas que honran nuestras raíces y métodos refinados por generaciones.
          Cada creación es una conversación entre dos mundos.
        </motion.p>
      </div>
    </section>
  );
}
