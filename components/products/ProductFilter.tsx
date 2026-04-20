"use client";

import { PRODUCT_CATEGORIES } from "@/lib/constants";

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilter({ activeCategory, onCategoryChange }: ProductFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {PRODUCT_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            activeCategory === cat.id
              ? "bg-accent-gold text-bg-dark"
              : "bg-white text-text-muted hover:bg-accent-gold/10 hover:text-accent-gold"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
