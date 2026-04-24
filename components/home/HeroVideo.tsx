"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowRight, Instagram, Twitter, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { PulsingBorder } from "@paper-design/shaders-react";

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
      {/* SVG Filters */}
      <svg className="absolute inset-0 h-0 w-0">
        <defs>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbf9f4" />
            <stop offset="30%" stopColor="#e0c470" />
            <stop offset="70%" stopColor="#c7a84b" />
            <stop offset="100%" stopColor="#fbf9f4" />
          </linearGradient>
        </defs>
      </svg>

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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-xs uppercase tracking-[0.32em]"
          style={{ color: "#c7a84b" }}
        >
          Zipaquirá, Colombia · Desde 2010
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl tracking-tight sm:text-6xl md:text-8xl lg:text-9xl"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "#fbf9f4",
            textShadow: "0 2px 18px rgba(0,16,31,0.5)",
          }}
        >
          Un antojo para{" "}
          <motion.em
            className="italic"
            style={{
              background: "linear-gradient(135deg, #fbf9f4 0%, #e0c470 30%, #c7a84b 70%, #fbf9f4 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "url(#text-glow)",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            todos
          </motion.em>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 max-w-xl px-4 text-sm leading-relaxed sm:text-base md:text-lg"
          style={{ color: "rgba(251, 249, 244, 0.75)" }}
        >
          Fusión de tradición latina y técnica italiana. Postres artesanales premium que conquistan los paladares más exigentes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 w-full max-w-xl"
        >
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
              aria-label="Suscribir"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="liquid-glass mt-6 rounded-full px-8 py-3 text-sm font-medium transition-all hover:scale-[1.02]"
          style={{ color: "#fbf9f4" }}
        >
          Descubre más
        </motion.button>
      </div>

      {/* Social icons */}
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

      {/* Pulsing Border decorativo */}
      <div className="absolute bottom-8 right-4 z-20 hidden md:block">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <PulsingBorder
            colors={["#c7a84b", "#e0c470", "#9a7f14", "#fbf9f4"]}
            speed={1.2}
            thickness={0.12}
            softness={0.25}
            intensity={4}
            pulse={0.1}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          />

          <motion.svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-[7px] font-medium" style={{ fill: "rgba(199, 168, 75, 0.8)", letterSpacing: "0.1em" }}>
              <textPath href="#circle" startOffset="0%">
                ELIANA ZAIA · POSTRES ARTESANALES · DESDE 2010 ·
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
