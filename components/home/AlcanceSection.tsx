"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  {
    number: "31/32",
    label: "Departamentos de Colombia",
  },
  {
    number: "6.500+",
    label: "Puntos de venta",
  },
  {
    number: "Cada 3″",
    label: "Se vende un postre EZ",
  },
];

export default function AlcanceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-28 md:pb-20"
      style={{ backgroundColor: "#00101f" }}
    >
      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs uppercase tracking-[0.32em]"
          style={{ color: "#c7a84b" }}
        >
          El alcance
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 text-3xl leading-[1.15] tracking-tight sm:text-4xl md:mb-16 md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "#fbf9f4",
          }}
        >
          Llevamos nuestros postres a cada{" "}
          <em className="italic" style={{ color: "#c7a84b" }}>
            rincón
          </em>{" "}
          del país
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.15 }}
              className="border-l pl-5"
              style={{ borderColor: "rgba(199, 168, 75, 0.5)" }}
            >
              <p
                className="mb-2 text-4xl tracking-tight md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#fbf9f4",
                }}
              >
                {stat.number}
              </p>
              <p
                className="text-sm leading-relaxed md:text-base"
                style={{ color: "rgba(251, 249, 244, 0.7)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-3 max-w-2xl text-base leading-relaxed italic md:text-lg"
          style={{ color: "#c7a84b" }}
        >
          — Próximamente en Lima, Perú
        </motion.p>
      </div>
    </section>
  );
}
