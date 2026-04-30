"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 pt-28 pb-10 md:pt-32 md:pb-12"
      style={{ backgroundColor: "#f5f3ee" }}
    >
      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl italic md:text-4xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            color: "#c7a84b",
            letterSpacing: "-0.01em",
          }}
        >
          Eliana Zaia
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
          El arte de la pastelería{" "}
          <em className="italic" style={{ color: "#c7a84b" }}>heredada</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg"
          style={{ color: "#4a5560" }}
        >
          Desde 1998, Eliana Zaia perfecciona el equilibrio entre la técnica italiana y el sabor latino a través de sus piezas artesanales — hechas para ser compartidas
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 max-w-2xl text-base leading-relaxed italic md:text-lg"
          style={{ color: "#c7a84b" }}
        >
          Hoy con la misma perfección, en miles de cucharadas
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10"
        >
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all hover:scale-[1.03] md:text-base"
            style={{ borderColor: "#c7a84b", color: "#00101f" }}
          >
            Conocer la historia <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
