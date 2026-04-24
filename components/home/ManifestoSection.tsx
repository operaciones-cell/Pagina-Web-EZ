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
  { text: "contemporáneo.", highlight: true },
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
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = highlight ? "#c7a84b" : "#fbf9f4";
  return (
    <motion.span style={{ opacity, color }} className={highlight ? "italic" : ""}>
      {text}
      {!isLast && " "}
    </motion.span>
  );
}

export default function ManifestoSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.3"],
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-32 md:py-48"
      style={{ backgroundColor: "#00101f" }}
    >
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
          className="text-3xl leading-[1.25] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          {MANIFESTO_WORDS.map((word, i) => {
            const total = MANIFESTO_WORDS.length;
            const start = (i / total) * 0.85;
            const end = ((i + 1) / total) * 0.95;
            return (
              <Word
                key={i}
                text={word.text}
                highlight={word.highlight}
                progress={scrollYProgress}
                range={[start, end]}
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
          className="mx-auto mt-16 h-px w-24 origin-center"
          style={{ backgroundColor: "rgba(199, 168, 75, 0.5)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto mt-8 max-w-xl text-sm leading-relaxed md:text-base"
          style={{ color: "rgba(251, 249, 244, 0.65)" }}
        >
          Desde 2010, en Zipaquirá, cultivamos el oficio de los postres
          artesanales premium.
        </motion.p>
      </div>
    </section>
  );
}
