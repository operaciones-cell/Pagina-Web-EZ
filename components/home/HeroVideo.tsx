"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowRight, Instagram, Twitter, Globe } from "lucide-react";

const HERO_VIDEO = ""; // ← Pega aquí el URL del video hero

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
    <section className="relative flex min-h-screen flex-col overflow-hidden" style={{ backgroundColor: "#00101f" }}>
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
            "radial-gradient(ellipse at center, rgba(0,16,31,0.3) 0%, rgba(0,16,31,0.7) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center md:-translate-y-[10%]">
        <p className="mb-4 text-xs uppercase tracking-[0.32em]" style={{ color: "#c7a84b" }}>
          Zipaquirá, Colombia · Desde 2010
        </p>
        <h1
          className="text-5xl tracking-tight sm:text-6xl md:text-8xl lg:text-9xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "#fbf9f4",
            textShadow: "0 2px 18px rgba(0,16,31,0.5)",
          }}
        >
          Un antojo para <em className="italic" style={{ color: "#c7a84b" }}>todos</em>.
        </h1>

        <p
          className="mt-8 max-w-xl px-4 text-sm leading-relaxed sm:text-base md:text-lg"
          style={{ color: "rgba(251, 249, 244, 0.75)" }}
        >
          Fusión de tradición latina y técnica italiana. Postres artesanales premium que conquistan los paladares más exigentes.
        </p>

        <div className="mt-10 w-full max-w-xl">
          <div className="liquid-glass flex items-center gap-3 rounded-full py-2 pl-6 pr-2">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: "#fbf9f4" }}
            />
            <button
              className="rounded-full p-3 transition-transform hover:scale-105"
              style={{ backgroundColor: "#c7a84b", color: "#00101f" }}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <button
          className="liquid-glass mt-6 rounded-full px-8 py-3 text-sm font-medium transition-all hover:scale-[1.02]"
          style={{ color: "#fbf9f4" }}
        >
          Descubre más
        </button>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button className="liquid-glass rounded-full p-4 transition-all hover:scale-105" style={{ color: "#c7a84b" }} aria-label="Instagram">
          <Instagram size={20} />
        </button>
        <button className="liquid-glass rounded-full p-4 transition-all hover:scale-105" style={{ color: "#c7a84b" }} aria-label="Twitter">
          <Twitter size={20} />
        </button>
        <button className="liquid-glass rounded-full p-4 transition-all hover:scale-105" style={{ color: "#c7a84b" }} aria-label="Website">
          <Globe size={20} />
        </button>
      </div>
    </section>
  );
}
