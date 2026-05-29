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
      className="relative overflow-hidden px-6 pt-24 pb-12 md:pt-28 md:pb-16"
      style={{ backgroundColor: "#f5f3ee" }}
    >
      <div className="relative mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl italic md:text-4xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
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
            fontFamily: "'Cormorant Garamond', serif",
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
          className="mt-8 text-base leading-relaxed md:text-lg"
          style={{ color: "#4a5560" }}
        >
          Desde 1998, Eliana Zaia perfecciona el equilibrio entre la técnica italiana y el sabor latino a través de sus piezas artesanales — hechas para ser compartidas
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-base leading-relaxed italic md:text-lg"
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
            className="inline-flex items-center rounded-sm px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, rgba(199,168,75,0.08), rgba(199,168,75,0.04))",
              border: "1px solid rgba(199,168,75,0.7)",
              backdropFilter: "blur(8px)",
              boxShadow: "inset 0 1px 0 rgba(199,168,75,0.2), 0 0 16px rgba(199,168,75,0.1)",
              color: "#00101f",
            }}
          >
            Conocer la historia
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
