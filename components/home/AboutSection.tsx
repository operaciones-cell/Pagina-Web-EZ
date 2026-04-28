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
      style={{ backgroundColor: "#f5f3ee" }}
    >
      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-[0.32em]"
          style={{ color: "#c7a84b" }}
        >
          El origen
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
          De una cocina{" "}
          <em className="italic" style={{ color: "#c7a84b" }}>en familia</em>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg"
          style={{ color: "#4a5560" }}
        >
          Después de la Segunda Guerra, su padre cruzó el océano desde Italia con
          una sola filosofía: pocos ingredientes, mucho oficio. Décadas más tarde,
          en 1998, Eliana convirtió esa herencia en postres — primero los fines de
          semana, desde su cocina, para los restaurantes de la sabana. En 2010, lo
          que empezó como un encargo familiar se volvió empresa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl text-base leading-relaxed italic md:text-lg"
          style={{ color: "#c7a84b" }}
        >
          — y hoy es la misma receta, en miles de cucharadas.
        </motion.p>
      </div>
    </section>
  );
}
