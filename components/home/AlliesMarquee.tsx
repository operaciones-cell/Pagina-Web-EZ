"use client";

import Link from "next/link";
import Image from "next/image";
import { ALLIES } from "@/lib/constants";

export default function AlliesMarquee() {
  return (
    <section className="py-20 bg-[var(--color-bg-dark)]">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-text-light)]">
          Nos encuentras donde importa
        </h2>
        <Link
          href="/donde-comprar"
          className="text-[var(--color-accent-gold)] hover:underline underline-offset-4 transition-colors text-sm uppercase tracking-widest"
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
              className="flex flex-col items-center justify-center gap-3 min-w-[140px] grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
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
              <span className="text-xs text-[var(--color-text-light)]/50 uppercase tracking-wider whitespace-nowrap">
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
