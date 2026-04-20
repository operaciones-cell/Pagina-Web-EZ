"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const VIDEO_1 = ""; // ← Pega aquí el URL del video 1
const VIDEO_2 = ""; // ← Pega aquí el URL del video 2

const CARDS = [
  {
    video: VIDEO_1,
    tag: "Catálogo",
    title: "Productos Premium",
    description:
      "12 creaciones artesanales que van desde nuestro icónico Crème Brûlée hasta las innovadoras GeliCloud. Cada uno elaborado con ingredientes seleccionados.",
    href: "/productos",
  },
  {
    video: VIDEO_2,
    tag: "B2B",
    title: "Soluciones Empresariales",
    description:
      "Maquila bajo marca blanca, distribución exclusiva y desarrollo de productos a medida. 98% de cumplimiento en entregas a las principales cadenas del país.",
    href: "/para-empresas",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-divider overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="relative mx-auto max-w-6xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(199,168,75,0.03)_0%,_transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-end justify-between md:mb-16"
        >
          <h2
            className="text-3xl tracking-tight text-white md:text-5xl"
            style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, letterSpacing: "-0.02em" }}
          >
            Lo que hacemos
          </h2>
          <p className="hidden text-sm md:block" style={{ color: "#c7a84b", fontFamily: "'Manrope', sans-serif" }}>
            Nuestros servicios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <Link href={card.href} className="group block">
                <div className="liquid-glass overflow-hidden rounded-3xl">
                  <div className="relative aspect-video overflow-hidden">
                    <video
                      src={card.video}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xs uppercase tracking-widest" style={{ color: "#c7a84b", fontFamily: "'Manrope', sans-serif" }}>
                        {card.tag}
                      </p>
                      <span className="liquid-glass rounded-full p-2" style={{ color: "#c7a84b" }}>
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <h3
                      className="mb-3 text-xl tracking-tight text-white md:text-2xl"
                      style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400 }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
