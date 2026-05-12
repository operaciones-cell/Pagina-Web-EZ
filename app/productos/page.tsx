"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";

const CATEGORY_LABELS: Record<string, string> = {
  all: "Todos nuestros postres",
  premium: "Categoría premium",
  clasico: "Clásicos de siempre",
  gelatinas: "Gelatinas artesanales",
  snack: "Snacks",
};

export default function ProductosPage() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === category);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fbf9f4" }}>
      {/* Header */}
      <div className="px-6 pb-10 pt-32 md:pb-12 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs uppercase tracking-[0.28em]"
            style={{ color: "#c7a84b" }}
          >
            Portafolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#00101f",
            }}
          >
            Postres{" "}
            <em className="italic" style={{ color: "#c7a84b" }}>
              artesanales
            </em>
            ,<br />
            hechos para compartir.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 max-w-lg text-sm leading-relaxed md:text-base"
            style={{ color: "#4a5560" }}
          >
            Técnica italiana, sabor latino. Disponibles en más de 6.500 puntos
            de venta en Colombia.
          </motion.p>
        </div>
      </div>

      {/* Filter + grid */}
      <div className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 flex flex-wrap items-center justify-between gap-4"
          >
            <ProductFilter
              activeCategory={category}
              onCategoryChange={setCategory}
            />
            <p className="text-xs" style={{ color: "#4a5560" }}>
              {filtered.length}{" "}
              {filtered.length === 1 ? "producto" : "productos"}
            </p>
          </motion.div>

          {/* Category label */}
          <p
            className="mb-6 text-xs uppercase tracking-[0.22em]"
            style={{ color: "rgba(199,168,75,0.7)" }}
          >
            {CATEGORY_LABELS[category] ?? ""}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p
              className="py-16 text-center text-sm"
              style={{ color: "#4a5560" }}
            >
              No hay productos en esta categoría.
            </p>
          )}
        </div>
      </div>

      {/* B2B banner */}
      <div
        className="px-6 py-16 md:py-20"
        style={{ backgroundColor: "#00101f" }}
      >
        <div className="mx-auto max-w-6xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              className="mb-3 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#c7a84b" }}
            >
              Para empresas
            </p>
            <h2
              className="text-2xl md:text-3xl"
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "#fbf9f4",
              }}
            >
              ¿Tu cadena quiere estos postres?
            </h2>
            <p
              className="mt-2 max-w-md text-sm leading-relaxed"
              style={{ color: "rgba(251,249,244,0.6)" }}
            >
              Producimos con tu marca o con la nuestra. Capacidad para cadenas,
              distribuidores y maquila.
            </p>
          </div>
          <a
            href="/para-empresas"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
            style={{
              backgroundColor: "#c7a84b",
              color: "#00101f",
              boxShadow: "0 6px 24px rgba(199,168,75,0.25)",
            }}
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </div>
  );
}
