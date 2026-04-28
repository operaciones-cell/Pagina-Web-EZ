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

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    if (v.duration - v.currentTime <= 0.55 && Number(v.style.opacity) > 0.1) {
      fadeElement(v, Number(v.style.opacity), 0, 500);
    }
  }, []);

  const handleEnded = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.style.opacity = "0";
    setTimeout(() => {
      v.currentTime = 0;
      v.play().catch(() => {});
      fadeElement(v, 0, 1, 500);
    }, 100);
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
        playsInline
        preload="auto"
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "#00101f",
            textShadow: "0 2px 18px rgba(251,249,244,0.6)",
          }}
        >
          Repostería
          <br />
          con dos{" "}
          <em className="italic" style={{ color: "#c7a84b" }}>
            raíces
          </em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="/productos"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition-all hover:scale-[1.03]"
            style={{ backgroundColor: "#c7a84b", color: "#00101f" }}
          >
            Ver la carta
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/para-empresas"
            className="inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-sm font-medium transition-all hover:scale-[1.03]"
            style={{ borderColor: "rgba(199, 168, 75, 0.5)", color: "#00101f" }}
          >
            Para tu empresa
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
