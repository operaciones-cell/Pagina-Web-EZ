"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const HERO_VIDEO = "/videos/hero.mp4";

function fadeElement(el: HTMLElement, from: number, to: number, duration: number) {
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    el.style.opacity = String(from + (to - from) * t);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const handleCanPlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
    fadeElement(v, 0, 1, 500);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.style.opacity = "0";
  }, []);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      className="relative flex h-[100svh] w-full items-end overflow-hidden"
      style={{ backgroundColor: "#00101f" }}
    >
      {/* Foto hero con parallax + oscurecido */}
      <div
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0) scale(1.05)` }}
      >
        <img
          src="/images/hero.jpg"
          alt="Eliana Zaia"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ filter: "brightness(0.55)" }}
        />
      </div>

      {/* Gradiente oscuro de abajo hacia arriba */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,16,31,0.95) 0%, rgba(0,16,31,0.5) 40%, rgba(0,16,31,0.15) 70%, rgba(0,16,31,0) 100%)",
        }}
      />

      {/* Fade-out midnight al scrollear */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundColor: "#00101f",
          opacity: Math.min(1, scrollY / 600),
        }}
      />

      {/* Texto — centrado con max-w, anclado al fondo */}
      <div className="relative z-10 w-full max-w-2xl px-6 pb-16 md:px-12 md:pb-24">
        <div className="space-y-5">
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex max-w-sm items-center gap-3 rounded-sm px-4 py-2.5"
            style={{
              background: "linear-gradient(135deg, rgba(251,249,244,0.06), rgba(199,168,75,0.08), rgba(251,249,244,0.04))",
              border: "1px solid rgba(251,249,244,0.15)",
              backdropFilter: "blur(12px)",
              boxShadow: "inset 0 1px 0 rgba(251,249,244,0.15), 0 0 40px rgba(199,168,75,0.12)",
            }}
          >
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{
                backgroundColor: "#c7a84b",
                boxShadow: "0 0 6px #c7a84b, 0 0 12px rgba(199,168,75,0.5)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span className="text-xs uppercase tracking-[0.2em] whitespace-nowrap" style={{ color: "rgba(251,249,244,0.8)" }}>
              Disponible en 6.500 puntos — Colombia
            </span>
            <span className="ml-auto text-xs uppercase tracking-[0.2em] whitespace-nowrap" style={{ color: "rgba(199,168,75,0.6)" }}>
              Activo
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl italic md:text-5xl"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              color: "#c7a84b",
              letterSpacing: "-0.01em",
            }}
          >
            Desde 1998
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#fbf9f4",
            }}
          >
            El{" "}
            <em className="italic" style={{ color: "#c7a84b" }}>
              arte
            </em>{" "}
            de lo dulce,
            <br />
            en cada detalle
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4"
          >
            <Link
              href="/productos"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all hover:scale-[1.03] md:text-base"
              style={{
                backgroundColor: "#c7a84b",
                color: "#00101f",
                boxShadow: "0 6px 24px rgba(199,168,75,0.35)",
              }}
            >
              Ver nuestros postres
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/para-empresas"
              className="inline-flex items-center rounded-full border-2 px-8 py-3.5 text-sm font-semibold transition-all hover:scale-[1.03] md:text-base"
              style={{ borderColor: "#c7a84b", color: "#fbf9f4" }}
            >
              Trabajemos juntos
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
