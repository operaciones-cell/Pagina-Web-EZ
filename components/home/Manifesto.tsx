"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LINES = [
  "Desde 2010",
  "fusionamos la tradicion latina",
  "con la tecnica italiana.",
  "Cada textura es una decision.",
  "Cada sabor, una firma.",
  "No hacemos postres.",
  "Creamos momentos.",
];

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      linesRef.current.forEach((line, i) => {
        if (!line) return;

        gsap.fromTo(
          line,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
            delay: i * 0.2,
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--color-bg-dark)] py-32 md:py-48 px-6"
    >
      <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
        {LINES.map((line, i) => {
          const isLast = i === LINES.length - 1;
          return (
            <p
              key={i}
              ref={(el) => {
                linesRef.current[i] = el;
              }}
              className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight ${
                isLast
                  ? "text-[var(--color-accent-gold)]"
                  : "text-[var(--color-text-light)]"
              }`}
            >
              {line}
            </p>
          );
        })}
      </div>
    </section>
  );
}
