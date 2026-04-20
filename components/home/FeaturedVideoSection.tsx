"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FEATURED_VIDEO = ""; // ← Pega aquí el URL del video

export default function FeaturedVideoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-divider relative overflow-hidden px-6 py-20 md:py-32"
      style={{ backgroundColor: "#00101f" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.32em]" style={{ color: "#c7a84b" }}>
            Nuestro proceso
          </p>
          <h2
            className="text-3xl tracking-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#fbf9f4",
            }}
          >
            Cada postre, una{" "}
            <em className="italic" style={{ color: "#c7a84b" }}>pieza única</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative aspect-video overflow-hidden rounded-3xl"
        >
          <video
            src={FEATURED_VIDEO}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-end md:p-10">
            <div className="liquid-glass max-w-md rounded-2xl p-6 md:p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
                Crème Brûlée · Receta firma
              </p>
              <p className="text-sm leading-relaxed md:text-base" style={{ color: "#fbf9f4" }}>
                La textura sedosa que define nuestra mesa. Cada receta nace de la curiosidad
                y abre una nueva puerta a la innovación.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full px-8 py-3 text-sm font-medium transition-all"
              style={{ backgroundColor: "#c7a84b", color: "#00101f" }}
            >
              Explorar más
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
