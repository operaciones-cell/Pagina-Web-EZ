"use client";

import Link from "next/link";
import Image from "next/image";
import { ALLIES } from "@/lib/constants";

export default function AlliesMarquee() {
  return (
    <section
      className="py-24"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-14 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p
            className="mb-3 text-xs uppercase tracking-[0.28em]"
            style={{ color: "var(--color-gold)" }}
          >
            Nuestros aliados
          </p>
          <h2
            className="text-3xl md:text-4xl tracking-tight"
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
              className="flex flex-col items-center justify-center gap-3 min-w-[140px] grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100"
            >
              <div className="relative w-24 h-16 flex items-center justify-center">
                <Image
                  src={ally.logo}
                  alt={ally.name}
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span
                className="text-xs uppercase tracking-wider whitespace-nowrap"
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
