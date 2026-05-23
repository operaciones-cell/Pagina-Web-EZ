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
            className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:scale-[1.02]"
            style={
              active
                ? {
                    background: "linear-gradient(135deg, rgba(199,168,75,0.2), rgba(199,168,75,0.1))",
                    border: "1px solid rgba(199,168,75,0.85)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "inset 0 1px 0 rgba(199,168,75,0.3), 0 0 16px rgba(199,168,75,0.15)",
                    color: "#00101f",
                  }
                : {
                    background: "rgba(0,16,31,0.03)",
                    border: "1px solid rgba(0,16,31,0.15)",
                    backdropFilter: "blur(8px)",
                    color: "#4a5560",
                  }
            }
          >
            {active && <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#c7a84b" }} />}
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
