"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductosPage() {
  const [category, setCategory] = useState("all");

  const filtered = category === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === category);

  return (
    <div className="bg-bg-warm min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumbs items={[{ name: "Productos", href: "/productos" }]} />

        <ScrollReveal>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary">
            Postres artesanales colombianos
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-2xl">
            Desde 2010 elaboramos postres que fusionan la tradicion latina con la tecnica italiana.
            Cada producto es una obra de arte comestible, disponible en las principales cadenas de Colombia.
          </p>
        </ScrollReveal>

        <div className="mt-8">
          <ProductFilter activeCategory={category} onCategoryChange={setCategory} />
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-16">
          {filtered.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.05}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
