"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const VIDEO_1 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
const VIDEO_2 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4";

const CARDS = [
  {
    video: VIDEO_1,
    tag: "Catálogo",
    title: "Productos Premium",
    description:
      "12 creaciones artesanales que van desde nuestro icónico Crème Brûlée hasta las innovadoras GeliCloud. Cada uno elaborado con ingredientes seleccionados y la receta que ha conquistado a Colombia.",
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
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-28 md:py-40"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(199,168,75,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-end justify-between md:mb-16"
        >
          <div>
            <p
              className="mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ color: "var(--color-gold-on-dark)" }}
            >
              Nuestras líneas
            </p>
            <h2
              className="text-3xl tracking-tight md:text-5xl"
              style={{
                fontFamily: "'Noto Serif', serif",
                color: "var(--color-text-light)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
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
                  className="overflow-hidden rounded-3xl"
                  style={{
                    backgroundColor: "var(--color-surface-dark-elevated)",
                  }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
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
                          "linear-gradient(180deg, rgba(0,16,31,0) 60%, rgba(0,16,31,0.5) 100%)",
                      }}
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <p
                        className="text-xs uppercase tracking-[0.28em]"
                        style={{ color: "var(--color-gold-on-dark)" }}
                      >
                        {card.tag}
                      </p>
                      <span
                        className="rounded-full p-2 transition-all group-hover:scale-110"
                        style={{
                          backgroundColor: "rgba(251,249,244,0.08)",
                          color: "var(--color-text-light)",
                        }}
                      >
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <h3
                      className="mb-3 text-xl tracking-tight md:text-2xl"
                      style={{
                        fontFamily: "'Noto Serif', serif",
                        color: "var(--color-text-light)",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-light-muted)" }}
                    >
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
