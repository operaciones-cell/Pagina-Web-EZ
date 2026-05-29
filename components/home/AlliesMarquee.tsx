"use client";

import Link from "next/link";
import { ALLIES } from "@/lib/constants";

export default function AlliesMarquee() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: "#f5f3ee" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <p
            className="mb-3 text-xs uppercase tracking-[0.3em]"
            style={{ color: "#c7a84b" }}
          >
            Nuestros aliados
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#00101f",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            De grandes aliados a tu cuchara.
          </h2>
        </div>
        <Link
          href="/donde-comprar"
          className="text-xs uppercase tracking-[0.22em] transition-opacity hover:opacity-60 whitespace-nowrap"
          style={{ color: "#c7a84b" }}
        >
          Donde encontrarnos →
        </Link>
      </div>

      {/* Línea superior */}
      <div style={{ borderTop: "1px solid rgba(0,16,31,0.1)" }} />

      {/* Marquee */}
      <div className="overflow-hidden py-12">
        <div
          className="flex w-max items-center"
          style={{
            animation: "marquee 40s linear infinite",
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
              className="flex items-center"
            >
              {/* Logo */}
              <div
                className="flex items-center justify-center transition-all duration-300 opacity-55 hover:opacity-100"
                style={{ padding: "0 4rem", height: "100px" }}
              >
                <img
                  src={ally.logo}
                  alt={ally.name}
                  style={{
                    height: "100px",
                    width: "auto",
                    maxWidth: "240px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              {/* Separador dorado */}
              <span style={{ color: "#c7a84b", opacity: 0.4, fontSize: "0.45rem", flexShrink: 0 }}>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Línea inferior */}
      <div style={{ borderBottom: "1px solid rgba(0,16,31,0.1)" }} />

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
