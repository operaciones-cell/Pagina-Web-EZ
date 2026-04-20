"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={`/productos/${product.id}`}
        className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-xl"
      >
        <div className="relative aspect-square bg-bg-cream overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <span className="text-text-muted text-sm transition-transform duration-700 ease-out group-hover:scale-110">
              {product.name}
            </span>
          </div>
          <div className="absolute inset-0 bg-accent-gold/0 transition-colors duration-300 group-hover:bg-accent-gold/5" />
        </div>
        <div className="p-4">
          <h3 className="font-heading text-lg font-semibold text-text-primary transition-colors duration-300 group-hover:text-accent-gold">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-text-muted">{product.weight}</p>
          <p className="mt-2 text-sm text-text-muted line-clamp-2">
            {product.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-gold transition-all duration-300 group-hover:gap-2">
            Ver mas
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
