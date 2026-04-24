"use client";

import Link from "next/link";
import Image from "next/image";
import { ALLIES } from "@/lib/constants";

export default function AlliesMarquee() {
  return (
    <section
      className="py-32 md:py-44"
      style={{ backgroundColor: "#f5f3ee" }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p
            className="mb-4 text-sm uppercase tracking-[0.3em]"
            style={{ color: "var(--color-gold)" }}
          >
            Nuestros aliados
          </p>
          <h2
            className="text-4xl md:text-5xl tracking-tight"
            style={{
              fontFamily: "'Noto Serif', serif",
              color: "var(--color-ink)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Nos encuentras donde importa
          </h2>
        </div>
        <Link
          href="/donde-comprar"
          className="text-sm uppercase tracking-[0.22em] transition-colors"
          style={{ color: "var(--color-gold)" }}
        >
          Ver puntos de venta &rarr;
        </Link>
      </div>

      <div className="overflow-hidden group">
        <div
          className="flex w-max gap-16 items-center"
          style={{
            animation: "marquee 30s linear infinite",
            animationPlayState: "running",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
          {[...ALLIES, ...ALLIES].map((ally, i) => (
            <div
              key={`${ally.name}-${i}`}
              className="flex flex-col items-center justify-center gap-5 min-w-[220px] grayscale hover:grayscale-0 transition-all duration-500 opacity-65 hover:opacity-100"
            >
              <div className="relative w-44 h-28 flex items-center justify-center">
                <Image
                  src={ally.logo}
                  alt={ally.name}
                  width={176}
                  height={112}
                  className="object-contain"
                />
              </div>
              <span
                className="text-sm uppercase tracking-wider whitespace-nowrap"
                style={{ color: "var(--color-text-subtle)" }}
              >
                {ally.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
