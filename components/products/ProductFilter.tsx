"use client";

import { PRODUCT_CATEGORIES } from "@/lib/constants";

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilter({
  activeCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {PRODUCT_CATEGORIES.map((cat) => {
        const active = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className="rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:scale-[1.02]"
            style={
              active
                ? {
                    backgroundColor: "#c7a84b",
                    color: "#00101f",
                  }
                : {
                    backgroundColor: "rgba(199,168,75,0.08)",
                    color: "#4a5560",
                    border: "1px solid rgba(199,168,75,0.2)",
                  }
            }
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
