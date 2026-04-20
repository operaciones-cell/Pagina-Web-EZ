// components/home/DeepDive.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCTS } from "@/lib/constants";

const featuredProducts = PRODUCTS.filter((p) => p.featured);

export default function DeepDive() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // Desktop: pin image while text scrolls for each product
      mm.add("(min-width: 768px)", () => {
        featuredProducts.forEach((_, i) => {
          const container = containerRefs.current[i];
          const image = imageRefs.current[i];
          const text = textRefs.current[i];

          if (!container || !image || !text) return;

          // Pin the image column while the text scrolls
          ScrollTrigger.create({
            trigger: container,
            start: "top 10%",
            end: "bottom 80%",
            pin: image,
            pinSpacing: false,
          });

          // Fade in text content
          gsap.fromTo(
            text,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: text,
                start: "top 75%",
                end: "top 40%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      // Mobile: simple fade-in, no pinning
      mm.add("(max-width: 767px)", () => {
        featuredProducts.forEach((_, i) => {
          const image = imageRefs.current[i];
          const text = textRefs.current[i];

          if (image) {
            gsap.fromTo(
              image,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: image,
                  start: "top 80%",
                  toggleActions: "play none none none",
                },
              }
            );
          }

          if (text) {
            gsap.fromTo(
              text,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: text,
                  start: "top 80%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {featuredProducts.map((product, i) => (
          <div
            key={product.id}
            ref={(el) => {
              containerRefs.current[i] = el;
            }}
            className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
              i > 0 ? "mt-32 md:mt-48" : ""
            }`}
          >
            {/* Image column */}
            <div
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
              className="w-full md:w-1/2 flex-shrink-0"
            >
              <div className="aspect-[4/3] rounded-xl bg-[#1A1210] flex items-center justify-center overflow-hidden">
                <span className="text-text-muted text-sm">{product.name}</span>
              </div>
            </div>

            {/* Text column */}
            <div
              ref={(el) => {
                textRefs.current[i] = el;
              }}
              className="w-full md:w-1/2 space-y-6 md:py-24"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light">
                {product.name}
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                {product.longDescription}
              </p>
              <Link
                href={`/productos/${product.id}`}
                className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-caramel transition-colors text-lg"
              >
                Conoce mas
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
