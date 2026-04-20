"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-divider overflow-hidden bg-black px-6 pt-32 pb-10 md:pt-44 md:pb-14">
      <div className="relative mx-auto max-w-4xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(199,168,75,0.04)_0%,_transparent_70%)]" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-widest"
          style={{ color: "#c7a84b", fontFamily: "'Manrope', sans-serif" }}
        >
          Nuestra esencia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, letterSpacing: "-0.02em" }}
        >
          Fusionando la{" "}
          <em className="italic" style={{ color: "#c7a84b" }}>tradición latina</em>{" "}
          para
          <br className="hidden md:block" />
          quienes{" "}
          <em className="italic" style={{ color: "#c7a84b" }}>crean, construyen e inspiran.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Desde 2010, en Zipaquirá, elaboramos postres artesanales premium con
          recetas que honran nuestras raíces y métodos refinados por generaciones.
        </motion.p>
      </div>
    </section>
  );
}
