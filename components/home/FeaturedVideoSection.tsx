"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ⚠️ REEMPLAZAR con el URL real del video destacado
const FEATURED_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_115420_image-to-video.mp4";

export default function FeaturedVideoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-28 md:py-40"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p
            className="mb-4 text-xs uppercase tracking-[0.32em]"
            style={{ color: "var(--color-gold-on-dark)" }}
          >
            Nuestro proceso
          </p>
          <h2
            className="text-3xl tracking-tight md:text-5xl"
            style={{
              fontFamily: "'Noto Serif', serif",
              color: "var(--color-text-light)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Cada postre, una pieza única
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ aspectRatio: "16/9" }}
        >
          <video
            src={FEATURED_VIDEO}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl p-6 backdrop-blur-md md:inset-x-10 md:bottom-10 md:p-8"
            style={{
              backgroundColor: "rgba(251, 249, 244, 0.95)",
              boxShadow: "0 10px 40px rgba(0,16,31,0.25)",
            }}
          >
            <p
              className="mb-2 text-xs uppercase tracking-[0.28em]"
              style={{ color: "var(--color-gold)" }}
            >
              Crème Brûlée &mdash; Receta firma
            </p>
            <p
              className="text-lg leading-snug md:text-xl"
              style={{
                fontFamily: "'Noto Serif', serif",
                color: "var(--color-ink)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              La textura sedosa que define nuestra mesa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
