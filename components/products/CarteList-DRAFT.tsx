"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/constants";

export default function CarteList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const hoveredProduct = PRODUCTS.find(p => p.id === hoveredId);

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28" style={{ backgroundColor: "#00101f", minHeight: "60vh" }}>

      {/* Imagen de fondo — aparece al hover */}
      {PRODUCTS.map(product => (
        <div
          key={product.id}
          className="pointer-events-none absolute inset-0 transition-opacity duration-700"
          style={{ opacity: hoveredId === product.id ? 1 : 0 }}
        >
          <img
            src={product.image}
            alt=""
            className="absolute right-0 top-0 h-full object-cover"
            style={{ filter: "brightness(0.75)", width: "40%", objectPosition: "center center" }}
          />
          {/* Gradiente — transición empieza en el 50%, imagen visible al lado derecho */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(0,16,31,1) 40%, rgba(0,16,31,0.98) 50%, rgba(0,16,31,0.75) 60%, rgba(0,16,31,0.25) 72%, rgba(0,16,31,0) 85%)",
            }}
          />
        </div>
      ))}

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl" style={{ marginLeft: "12%" }}>

        {/* Header */}
        <div className="mb-12 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
            02 — La carta
          </span>
          <span className="h-px w-16" style={{ backgroundColor: "rgba(251,249,244,0.15)" }} />
        </div>

        {/* Lista */}
        <div>
          {PRODUCTS.map((product, i) => (
            <Link
              key={product.id}
              href={`/productos/${product.id}`}
              className="group block"
              style={{ marginTop: i % 2 !== 0 ? "24px" : "0px" }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="flex items-center gap-4 border-t py-6 transition-all duration-500 md:py-8"
                style={{
                  borderColor: "rgba(199,168,75,0.12)",
                  opacity: hoveredId && hoveredId !== product.id ? 0.3 : 1,
                }}
              >
                {/* Número */}
                <span
                  className="w-10 flex-shrink-0 text-xs font-medium"
                  style={{ color: "rgba(199,168,75,0.45)" }}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>

                {/* Nombre */}
                <h3
                  className="flex-1 text-xl transition-colors duration-300 md:text-2xl lg:text-3xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    color: hoveredId === product.id ? "#c7a84b" : "#fbf9f4",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {product.name}
                </h3>

                {/* Notas de sabor */}
                <p
                  className="hidden text-right text-xs uppercase tracking-[0.2em] transition-all duration-500 md:block"
                  style={{
                    color: hoveredId === product.id ? "rgba(251,249,244,0.7)" : "rgba(251,249,244,0.25)",
                    maxWidth: "200px",
                    marginLeft: "auto",
                    paddingLeft: "80px",
                    flexShrink: 0,
                    textAlign: "right",
                  }}
                >
                  {product.ingredients.slice(0, 2).join(" · ")}
                </p>

                {/* Flecha */}
                <span
                  className="flex-shrink-0 transition-all duration-300 text-sm"
                  style={{
                    color: "#c7a84b",
                    opacity: hoveredId === product.id ? 1 : 0,
                    transform: hoveredId === product.id ? "translateX(0)" : "translateX(-8px)",
                  }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
          <div style={{ borderTop: "1px solid rgba(199,168,75,0.12)" }} />
        </div>
      </div>
    </section>
  );
}
