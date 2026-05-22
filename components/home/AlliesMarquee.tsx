"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ALLIES } from "@/lib/constants";

export default function AlliesMarquee() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#f5f3ee" }}>
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: "#c7a84b" }}>
              Nuestros aliados
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "'Noto Serif', serif", color: "#00101f", fontWeight: 400, letterSpacing: "-0.02em" }}
            >
              Nos encuentras donde importa
            </h2>
          </div>
          <Link
            href="/donde-comprar"
            className="text-xs uppercase tracking-[0.22em] transition-opacity hover:opacity-60 whitespace-nowrap"
            style={{ color: "#c7a84b" }}
          >
            Ver todos →
          </Link>
        </div>

        {/* Grid de logos */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-px" style={{ backgroundColor: "rgba(0,16,31,0.08)" }}>
          {ALLIES.map((ally, i) => (
            <motion.div
              key={ally.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center gap-3 py-8 px-4 group cursor-default transition-colors duration-300"
              style={{ backgroundColor: "#f5f3ee" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#ffffff")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f5f3ee")}
            >
              <div className="flex items-center justify-center" style={{ height: "64px" }}>
                <img
                  src={ally.logo}
                  alt={ally.name}
                  style={{
                    height: "52px",
                    width: "auto",
                    maxWidth: "110px",
                    objectFit: "contain",
                    display: "block",
                    opacity: 0.55,
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.opacity = "1")}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.opacity = "0.55")}
                />
              </div>
              <span
                className="text-[10px] uppercase tracking-[0.18em] text-center leading-tight"
                style={{ color: "rgba(0,16,31,0.4)" }}
              >
                {ally.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
