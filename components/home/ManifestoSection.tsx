"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const MANIFESTO_WORDS = [
  { text: "Cada", highlight: false },
  { text: "postre", highlight: false },
  { text: "es", highlight: false },
  { text: "una", highlight: false },
  { text: "conversación", highlight: true },
  { text: "entre", highlight: false },
  { text: "la", highlight: false },
  { text: "paciencia", highlight: true },
  { text: "de", highlight: false },
  { text: "la", highlight: false },
  { text: "tradición", highlight: true },
  { text: "y", highlight: false },
  { text: "la", highlight: false },
  { text: "curiosidad", highlight: true },
  { text: "de", highlight: false },
  { text: "lo", highlight: false },
  { text: "contemporáneo", highlight: true },
];

export default function ManifestoSection() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: "#00101f" }}
    >
      <LampContainer>
        {/* Kicker dentro del contenedor: queda arriba del headline,
            justo debajo de la línea dorada — sin posicionamiento absoluto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-xs uppercase tracking-[0.32em]"
          style={{ color: "#c7a84b" }}
        >
          Manifiesto
        </motion.p>

        <motion.h2
          className="max-w-5xl text-center text-3xl leading-[1.3] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.7 }}
        >
          {MANIFESTO_WORDS.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                display: "inline-block",
                color: word.highlight ? "#c7a84b" : "#fbf9f4",
              }}
              className={word.highlight ? "italic" : ""}
            >
              {word.text}
              {i < MANIFESTO_WORDS.length - 1 && "\u00A0"}
            </motion.span>
          ))}
        </motion.h2>

      </LampContainer>
    </section>
  );
}
