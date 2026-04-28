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
            La forma de trabajar
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
            Pocos ingredientes,
            <br />
            mucho <em className="italic" style={{ color: "#c7a84b" }}>oficio</em>
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
                Pastelería premium en todo momento
              </h3>
              <p className="text-sm leading-relaxed md:text-base" style={{ color: "rgba(251, 249, 244, 0.7)" }}>
                La misma pieza para una boda, una cena, o el café del martes. La técnica que cruzó el océano vive en cada una.
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
                El gesto preciso
              </h3>
              <p className="text-sm leading-relaxed md:text-base" style={{ color: "rgba(251, 249, 244, 0.7)" }}>
                La técnica italiana se aprende mirando, no leyendo. Cada gesto tiene su porqué.
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
                Escala sin atajos
              </h3>
              <p className="text-sm leading-relaxed md:text-base" style={{ color: "rgba(251, 249, 244, 0.7)" }}>
                Crecer no es bajar la guardia. Lo que era artesanal en 1998 sigue siéndolo hoy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
