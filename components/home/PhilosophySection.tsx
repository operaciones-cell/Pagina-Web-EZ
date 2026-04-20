"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PHILOSOPHY_VIDEO = ""; // ← Pega aquí el URL del video

export default function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-5xl tracking-tight text-white md:mb-24 md:text-7xl lg:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Tradición{" "}
          <em className="italic text-white/40">×</em>{" "}
          Innovación
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="aspect-[4/3] overflow-hidden rounded-3xl"
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
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">Raíces heredadas</p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Cada logro significativo comienza en la intersección de la estrategia disciplinada y la visión
                creativa. Operamos en ese cruce, convirtiendo ideas audaces en resultados tangibles que mueven personas.
              </p>
            </div>
            <div className="h-px w-full bg-white/10" />
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">Técnica italiana</p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Creemos que el mejor trabajo surge cuando la curiosidad se encuentra con la convicción. Nuestro proceso
                está diseñado para descubrir oportunidades y traducirlas en experiencias que perduran.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
