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
      "12 creaciones artesanales que van desde nuestro icónico Crème Brûlée hasta las innovadoras GeliCloud.",
    href: "/productos",
  },
  {
    video: VIDEO_2,
    tag: "B2B",
    title: "Soluciones Empresariales",
    description:
      "Maquila bajo marca blanca, distribución exclusiva y desarrollo de productos a medida.",
    href: "/para-empresas",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-24 md:py-36"
      style={{ backgroundColor: "#f5f3ee" }}
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
              Nuestras líneas
            </p>
            <h2
              className="text-3xl tracking-tight sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#00101f",
              }}
            >
              Lo que hacemos
            </h2>
          </div>
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
                <div
                  className="ambient-shadow overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1"
                  style={{ backgroundColor: "#ffffff" }}
                >
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
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,16,31,0) 50%, rgba(0,16,31,0.4) 100%)",
                      }}
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
                        {card.tag}
                      </p>
                      <span
                        className="rounded-full p-2 transition-all group-hover:scale-110"
                        style={{ backgroundColor: "rgba(199, 168, 75, 0.15)", color: "#c7a84b" }}
                      >
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <h3
                      className="mb-3 text-xl md:text-2xl"
                      style={{
                        fontFamily: "'Noto Serif', serif",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        color: "#00101f",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a5560" }}>
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
