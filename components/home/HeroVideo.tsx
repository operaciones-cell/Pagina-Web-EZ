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
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
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

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <p className="mb-4 text-xs uppercase tracking-widest" style={{ color: "#c7a84b", fontFamily: "'Manrope', sans-serif" }}>
          Zipaquirá, Colombia · Desde 2010
        </p>
        <h1
          className="text-6xl tracking-tight text-white md:text-8xl lg:text-9xl"
          style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, letterSpacing: "-0.02em" }}
        >
          Un antojo para <em className="italic" style={{ color: "#c7a84b" }}>todos</em>.
        </h1>

        <div className="mt-10 w-full max-w-xl">
          <div className="liquid-glass flex items-center gap-3 rounded-full py-2 pl-6 pr-2">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            />
            <button className="rounded-full p-3 text-black" style={{ backgroundColor: "#c7a84b" }}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <p className="mt-6 max-w-md px-4 text-sm leading-relaxed text-white/70" style={{ fontFamily: "'Manrope', sans-serif" }}>
          Mantente al día con nuestras novedades y creaciones. Suscríbete y nunca te pierdas lo que hay de nuevo.
        </p>

        <button className="liquid-glass mt-6 rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5" style={{ fontFamily: "'Manrope', sans-serif" }}>
          Descubre más
        </button>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button className="liquid-glass rounded-full p-4 transition-all hover:bg-white/5" style={{ color: "#c7a84b" }}>
          <Instagram size={20} />
        </button>
        <button className="liquid-glass rounded-full p-4 transition-all hover:bg-white/5" style={{ color: "#c7a84b" }}>
          <Twitter size={20} />
        </button>
        <button className="liquid-glass rounded-full p-4 transition-all hover:bg-white/5" style={{ color: "#c7a84b" }}>
          <Globe size={20} />
        </button>
      </div>
    </section>
  );
}
