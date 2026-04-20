"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const VIDEO_URL = "/videos/hero-dessert.mp4";

function fadeElement(
  el: HTMLElement,
  from: number,
  to: number,
  duration: number,
) {
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
    <section
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        autoPlay
        playsInline
        preload="auto"
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0 }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,16,31,0.15) 0%, rgba(0,16,31,0) 15%, rgba(0,16,31,0) 85%, rgba(0,16,31,0.40) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center -translate-y-[6%]">
        <h1 className="sr-only">
          Postres artesanales premium para supermercados y distribuidores en
          Colombia
        </h1>

        <p
          className="animate-fade-rise mb-6 text-xs uppercase tracking-[0.32em]"
          style={{ color: "var(--color-text-light-subtle)" }}
        >
          Zipaquirá, Colombia &middot; Desde 2010
        </p>

        <p
          className="animate-fade-rise-delay tracking-tight whitespace-nowrap"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "var(--color-text-light)",
            fontWeight: 500,
            textShadow:
              "0 2px 18px rgba(0,16,31,0.35), 0 1px 2px rgba(0,16,31,0.25)",
          }}
        >
          Eliana{" "}
          <em
            className="italic"
            style={{ color: "var(--color-gold-on-dark)", fontWeight: 500 }}
          >
            Zaia
          </em>
        </p>

        <p
          className="animate-fade-rise-delay-2 mt-8 max-w-xl text-sm leading-relaxed sm:text-base md:text-lg px-4"
          style={{
            color: "var(--color-text-light-muted)",
            textShadow: "0 1px 6px rgba(0,16,31,0.3)",
          }}
        >
          Fusión de tradición latina y técnica italiana. Postres artesanales
          premium que conquistan los paladares más exigentes de Colombia y
          Latinoamérica.
        </p>

        <div className="animate-fade-rise-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/productos"
            className="group flex items-center gap-3 rounded-full px-8 py-3.5 text-sm font-medium transition-colors"
            style={{
              backgroundColor: "var(--color-surface)",
              color: "var(--color-surface-dark)",
            }}
          >
            Conoce nuestros productos
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5"
              style={{
                backgroundColor: "var(--color-surface-dark)",
                color: "var(--color-surface)",
              }}
            >
              <ArrowRight size={16} />
            </span>
          </Link>
          <Link
            href="/para-empresas"
            className="rounded-full px-8 py-3.5 text-sm font-medium transition-colors"
            style={{
              color: "var(--color-text-light)",
              backgroundColor: "rgba(251, 249, 244, 0.08)",
            }}
          >
            Para empresas
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-10">
        <a
          href="https://wa.me/573214601590"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-4 transition-all hover:scale-105"
          style={{
            backgroundColor: "rgba(251, 249, 244, 0.06)",
            color: "var(--color-text-light-muted)",
          }}
          aria-label="WhatsApp"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/elianazaia/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-4 transition-all hover:scale-105"
          style={{
            backgroundColor: "rgba(251, 249, 244, 0.06)",
            color: "var(--color-text-light-muted)",
          }}
          aria-label="Instagram"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </section>
  );
}
