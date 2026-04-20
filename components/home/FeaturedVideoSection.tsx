"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FEATURED_VIDEO = ""; // ← Pega aquí el URL del video

export default function FeaturedVideoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-divider overflow-hidden bg-black px-6 pt-6 pb-20 md:pt-10 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-end md:p-10">
            <div className="liquid-glass max-w-md rounded-2xl p-6 md:p-8">
              <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "#c7a84b", fontFamily: "'Manrope', sans-serif" }}>
                Nuestro proceso
              </p>
              <p className="text-sm leading-relaxed text-white md:text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Creemos en el poder de la exploración guiada por la curiosidad. Cada creación comienza
                con una pregunta, y cada respuesta abre una nueva puerta a la innovación.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Explorar más
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
