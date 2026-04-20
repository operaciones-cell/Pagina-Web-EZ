import Link from "next/link";
import { GRUPO_RADICI } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HeroVideo from "@/components/home/HeroVideo";
import AboutSection from "@/components/home/AboutSection";
import FeaturedVideoSection from "@/components/home/FeaturedVideoSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import ServicesSection from "@/components/home/ServicesSection";
import AlliesMarquee from "@/components/home/AlliesMarquee";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <AlliesMarquee />

      <section
        className="py-24 md:py-28"
        style={{ backgroundColor: "var(--color-surface-dark)" }}
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <p
              className="mb-3 text-xs uppercase tracking-[0.28em]"
              style={{ color: "var(--color-gold-on-dark)" }}
            >
              Grupo empresarial
            </p>
            <h2
              className="mb-14 text-4xl tracking-tight md:text-5xl"
              style={{
                fontFamily: "'Noto Serif', serif",
                color: "var(--color-text-light)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              Radici
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {GRUPO_RADICI.map((empresa) => (
              <ScrollReveal key={empresa.name}>
                <div className="text-center">
                  <div
                    className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "var(--color-surface-dark-elevated)",
                    }}
                  >
                    <span
                      className="text-xl italic"
                      style={{
                        fontFamily: "'Noto Serif', serif",
                        color: "var(--color-gold-on-dark)",
                        fontWeight: 500,
                      }}
                    >
                      {empresa.name.charAt(0)}
                    </span>
                  </div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    {empresa.name}
                  </p>
                  {empresa.description && (
                    <p
                      className="mt-1 text-xs"
                      style={{ color: "var(--color-text-light-subtle)" }}
                    >
                      {empresa.description}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/grupo-radici"
              className="text-sm uppercase tracking-[0.22em] transition-colors"
              style={{ color: "var(--color-gold-on-dark)" }}
            >
              Conoce nuestro grupo &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
