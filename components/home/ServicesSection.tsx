"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const CARDS = [
  {
    image: "/images/services/card-tiramisu.jpg",
    alt: "Tiramisú Eliana Zaia",
    objectPosition: "50% 60%",
    tag: "Para ti — Consumidor",
    title: "Cada creación",
    description: "Doce piezas artesanales que encuentras en El Tinto y en miles de puntos de venta.",
    cta: "Ver productos",
    href: "/productos",
    offset: false,
  },
  {
    image: "/images/services/card-golosito.jpg",
    alt: "Producción para empresas — Eliana Zaia",
    objectPosition: "50% 80%",
    tag: "Para tu marca — B2B",
    title: "Producir contigo",
    description: "Para tu cadena. Con tu marca. Desde tu idea. Mismo sabor.",
    cta: "Conversemos",
    href: "/para-empresas",
    offset: true,
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-24 md:py-36"
      style={{
        background: "linear-gradient(180deg, rgba(0,16,31,0.97) 0%, rgba(0,16,31,0.88) 50%, rgba(0,16,31,0.97) 100%)",
        backgroundColor: "#00101f",
      }}
    >
      {/* Glow ambiental */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(199,168,75,0.25), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
              02 — Nuestra propuesta
            </span>
            <span className="h-px w-16" style={{ backgroundColor: "rgba(251,249,244,0.15)" }} />
          </div>
          <h2
            className="max-w-2xl text-3xl sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, letterSpacing: "-0.02em", color: "#fbf9f4" }}
          >
            Técnica <em className="italic" style={{ color: "#c7a84b" }}>italiana</em>,
            dulzura <em className="italic" style={{ color: "#c7a84b" }}>latina</em>.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`group relative overflow-hidden rounded-sm transition-all duration-700 ${card.offset ? "md:mt-20" : ""}`}
              style={{
                border: "1px solid rgba(251,249,244,0.08)",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(199,168,75,0.4)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(251,249,244,0.08)")}
            >
              <Link href={card.href} className="block">
                {/* Imagen */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                    style={{ filter: "brightness(0.7)", objectPosition: card.objectPosition || "50% 50%" }}
                  />
                </div>

                {/* Contenido */}
                <div className="space-y-4 p-8 md:p-10">
                  <span className="text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
                    {card.tag}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, color: "#fbf9f4", letterSpacing: "-0.01em" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(251,249,244,0.55)" }}>
                    {card.description}
                  </p>
                  {/* CTA con línea que crece */}
                  <div className="flex items-center gap-3 pt-2">
                    <span
                      className="h-px transition-all duration-700 group-hover:w-14"
                      style={{ width: "2rem", backgroundColor: "rgba(251,249,244,0.35)" }}
                    />
                    <span className="text-xs uppercase tracking-[0.22em]" style={{ color: "rgba(251,249,244,0.7)" }}>
                      {card.cta}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
