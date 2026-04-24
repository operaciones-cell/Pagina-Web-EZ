"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

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

function Word({
  text,
  highlight,
  progress,
  range,
  isLast,
}: {
  text: string;
  highlight: boolean;
  progress: MotionValue<number>;
  range: [number, number];
  isLast: boolean;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = highlight ? "#c7a84b" : "#fbf9f4";
  return (
    <motion.span style={{ opacity, color }} className={highlight ? "italic" : ""}>
      {text}
      {!isLast && " "}
    </motion.span>
  );
}

export default function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      className="relative"
      style={{ backgroundColor: "#00101f" }}
    >
      {/* Tall scroll container: 200vh = 1 pantalla extra para que la frase respire mientras se revela */}
      <div ref={ref} className="relative h-[200vh]">
        {/* Sticky: el texto queda fijo en pantalla mientras el scroll avanza */}
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
          {/* Decorative ambient gradient */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(199, 168, 75, 0.08) 0%, rgba(0, 16, 31, 0) 60%)",
            }}
          />

          <div className="relative mx-auto max-w-5xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-xs uppercase tracking-[0.32em]"
              style={{ color: "#c7a84b" }}
            >
              Manifiesto
            </motion.p>

            <h2
              className="text-3xl leading-[1.3] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              {MANIFESTO_WORDS.map((word, i) => {
                const total = MANIFESTO_WORDS.length;
                // Ventana 0.05 → 0.42: el texto está pinned hasta ~0.5, así
                // todas las palabras se revelan ANTES de que el sticky se despegue.
                const windowStart = 0.05;
                const windowEnd = 0.42;
                const span = windowEnd - windowStart;
                const start = windowStart + (i / total) * span;
                const end = start + (span / total) * 2.2; // overlap suave
                return (
                  <Word
                    key={i}
                    text={word.text}
                    highlight={word.highlight}
                    progress={scrollYProgress}
                    range={[start, Math.min(end, 0.48)]}
                    isLast={i === total - 1}
                  />
                );
              })}
            </h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="mx-auto mt-12 h-px w-24 origin-center"
              style={{ backgroundColor: "rgba(199, 168, 75, 0.5)" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mx-auto mt-6 max-w-xl text-sm leading-relaxed md:text-base"
              style={{ color: "rgba(251, 249, 244, 0.65)" }}
            >
              Desde 2010, en Zipaquirá, cultivamos el oficio de los postres
              artesanales premium.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
