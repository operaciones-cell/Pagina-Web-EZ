"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href={`/productos/${product.id}`}
        className="group block overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="relative aspect-square overflow-hidden"
          style={{ backgroundColor: "#f5f3ee" }}
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover animate-ken-burns"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <span
                className="text-center text-sm leading-snug"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontStyle: "italic",
                  color: "#4a5560",
                }}
              >
                {product.name}
              </span>
            </div>
          )}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,16,31,0) 50%, rgba(0,16,31,0.18) 100%)",
            }}
          />
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3
                className="truncate text-base md:text-lg"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 400,
                  color: "#00101f",
                }}
              >
                {product.name}
              </h3>
              <p className="mt-0.5 text-xs" style={{ color: "#c7a84b" }}>
                {product.weight}
              </p>
            </div>
            <span
              className="mt-0.5 flex-shrink-0 rounded-full p-1 transition-all duration-300 group-hover:scale-110"
              style={{
                backgroundColor: "rgba(199,168,75,0.12)",
                color: "#c7a84b",
              }}
            >
              <ArrowUpRight size={13} />
            </span>
          </div>
          <p
            className="mt-2 line-clamp-2 text-xs leading-relaxed md:text-sm"
            style={{ color: "#4a5560" }}
          >
            {product.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
