"use client";

import { useEffect, useRef, useCallback } from "react";
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

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-24 md:pt-28" style={{ backgroundColor: "#fbf9f4" }}>
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        onCanPlay={handleCanPlay}
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        style={{ opacity: 0 }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251,249,244,0.55) 0%, rgba(251,249,244,0.85) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center md:-translate-y-[15%]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-5xl italic md:text-7xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            color: "#c7a84b",
            letterSpacing: "-0.01em",
            textShadow: "0 0 2px rgba(251,249,244,0.85), 0 0 5px rgba(251,249,244,0.4)",
          }}
        >
          Desde 1998
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "#00101f",
            textShadow: "0 0 2px rgba(251,249,244,0.95), 0 0 6px rgba(251,249,244,0.5)",
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="/productos"
            className="group inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-semibold transition-all hover:scale-[1.03] md:text-lg"
            style={{
              backgroundColor: "#c7a84b",
              color: "#00101f",
              boxShadow: "0 6px 24px rgba(199, 168, 75, 0.35)",
            }}
          >
            Ver nuestros postres
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/para-empresas"
            className="inline-flex items-center gap-2 rounded-full border-2 px-10 py-4 text-base font-semibold transition-all hover:scale-[1.03] md:text-lg"
            style={{ borderColor: "#c7a84b", color: "#00101f" }}
          >
            Trabajemos juntos
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
