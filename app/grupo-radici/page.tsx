"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { GRUPO_RADICI, CONTACT } from "@/lib/constants";
import { useState, useEffect } from "react";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const EMPRESA_DETAILS: Record<
  string,
  { tag: string; description: string; location: string; href?: string; image?: string }
> = {
  "Eliana Zaia": {
    tag: "Repostería",
    description:
      "La marca principal del grupo. Postres artesanales de técnica italiana distribuidos en 31 de 32 departamentos de Colombia.",
    location: "Zipaquirá, Colombia",
    href: "/",
    image: "/images/grupo/eliana-zaia.jpeg",
  },
  "El Tinto": {
    tag: "Cafetería",
    description:
      "Espacios donde los postres Eliana Zaia cobran vida. Experiencia de marca directa al consumidor.",
    location: "Colombia",
    image: "/images/grupo/el-tinto.jpeg",
  },
  "EZ Treats": {
    tag: "Producción",
    description:
      "La fábrica de postres del grupo en expansión hacia el mercado latinoamericano.",
    location: "Lima, Perú",
  },
  Moldeza: {
    tag: "Insumos",
    description:
      "Producción y distribución de moldes e insumos para la industria de repostería.",
    location: "Colombia",
    image: "/images/grupo/moldeza.jpg",
  },
  "Radici Wealth Management": {
    tag: "Finanzas",
    description:
      "Gestión patrimonial y financiera del grupo empresarial Radici.",
    location: "Colombia",
    image: "/images/grupo/radici.jpg",
  },
};

/* ─── Panel derecho: imagen o placeholder animado ─── */
function ImagePanel({ empresa }: { empresa: { name: string } }) {
  const detail = EMPRESA_DETAILS[empresa.name];

  return (
    <AnimatePresence mode="wait">
      {detail?.image ? (
        <motion.div
          key={empresa.name}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={detail.image}
            alt={empresa.name}
            fill
            sizes="320px"
            className="object-cover object-center"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,16,31,0.72) 0%, transparent 55%)",
            }}
          />
          {/* Label bottom */}
          <div className="absolute bottom-6 left-6 right-6">
            <p
              className="mb-1 text-xs uppercase tracking-[0.22em]"
              style={{ color: "rgba(199,168,75,0.8)" }}
            >
              {detail?.tag}
            </p>
            <p
              className="text-xl leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                color: "#fbf9f4",
              }}
            >
              {empresa.name}
            </p>
          </div>
          {/* Link a página si hay href */}
          {detail?.href && (
            <Link href={detail.href}>
              <span
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: "rgba(199,168,75,0.18)",
                  backdropFilter: "blur(8px)",
                  color: "#c7a84b",
                }}
              >
                <ArrowUpRight size={15} />
              </span>
            </Link>
          )}
        </motion.div>
      ) : (
        /* Placeholder animado para EZ Treats */
        <motion.div
          key={empresa.name + "-placeholder"}
          className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#00101f" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Círculos pulsantes */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border"
              style={{
                borderColor: `rgba(199,168,75,${0.15 - i * 0.03})`,
                width: 80 + i * 60,
                height: 80 + i * 60,
              }}
              animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0.15, 0.6] }}
              transition={{
                duration: 3.5,
                delay: i * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          {/* Texto central */}
          <p
            className="relative mb-3 text-xs uppercase tracking-[0.32em]"
            style={{ color: "#c7a84b" }}
          >
            Próximamente
          </p>
          <p
            className="relative text-center text-2xl leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              color: "#fbf9f4",
            }}
          >
            {empresa.name}
          </p>
          <div
            className="relative mt-3 flex items-center gap-1.5"
          >
            <MapPin size={11} style={{ color: "rgba(199,168,75,0.5)" }} />
            <p
              className="text-xs"
              style={{ color: "rgba(251,249,244,0.35)" }}
            >
              {EMPRESA_DETAILS[empresa.name]?.location}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Sección empresas — desktop: lista + panel sticky ─── */
function EmpresasSection() {
  const empresas = GRUPO_RADICI;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="px-6 pb-24 md:pb-32"
      style={{ backgroundColor: "#fbf9f4" }}
    >
      <div className="mx-auto max-w-5xl">

        {/* ── Desktop ── */}
        <div className="hidden md:flex items-start gap-16 xl:gap-20">

          {/* Lista izquierda */}
          <div className="flex-1 min-w-0">
            {empresas.map((empresa, i) => {
              const detail = EMPRESA_DETAILS[empresa.name];
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={empresa.name}
                  className="group relative border-t py-7 cursor-default"
                  style={{ borderColor: "rgba(199,168,75,0.18)" }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  tabIndex={0}
                >
                  {/* Línea dorada activa */}
                  <motion.div
                    className="absolute left-0 top-0 h-px origin-left"
                    style={{ backgroundColor: "#c7a84b" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />

                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0 flex-1">
                      {/* Número + tag */}
                      <div className="mb-1.5 flex items-center gap-3">
                        <span
                          className="text-xs tabular-nums"
                          style={{ color: "rgba(199,168,75,0.45)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {detail?.tag && (
                          <motion.span
                            className="rounded-full px-2.5 py-0.5 text-xs uppercase tracking-[0.16em]"
                            animate={{
                              backgroundColor: isActive
                                ? "rgba(199,168,75,0.15)"
                                : "transparent",
                              color: "#c7a84b",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {detail.tag}
                          </motion.span>
                        )}
                      </div>

                      {/* Nombre */}
                      <motion.h2
                        className="text-3xl xl:text-4xl leading-none"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 400,
                        }}
                        animate={{ color: isActive ? "#c7a84b" : "#00101f" }}
                        transition={{ duration: 0.35 }}
                      >
                        {empresa.name}
                      </motion.h2>

                      {/* Descripción — expande al activarse */}
                      <AnimatePresence initial={false}>
                        {isActive && detail?.description && (
                          <motion.p
                            key="desc"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="max-w-sm text-sm leading-relaxed overflow-hidden"
                            style={{ color: "#4a5560" }}
                          >
                            {detail.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Ubicación + flecha */}
                    <div className="flex shrink-0 flex-col items-end gap-3 pt-0.5">
                      <motion.div
                        className="flex items-center gap-1.5"
                        animate={{ opacity: isActive ? 1 : 0.35 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MapPin size={12} style={{ color: "#4a5560" }} />
                        <span className="text-xs whitespace-nowrap" style={{ color: "#4a5560" }}>
                          {detail?.location}
                        </span>
                      </motion.div>

                      {detail?.href && (
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.25 }}
                            >
                              <Link href={detail.href}>
                                <span
                                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                                  style={{
                                    backgroundColor: "rgba(199,168,75,0.12)",
                                    color: "#c7a84b",
                                  }}
                                >
                                  <ArrowUpRight size={15} />
                                </span>
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
            <div style={{ borderTop: "1px solid rgba(199,168,75,0.18)" }} />
          </div>

          {/* Panel imagen derecha — sticky */}
          <div className="w-72 xl:w-80 shrink-0 sticky top-32 self-start">
            <div
              className="relative overflow-hidden rounded-sm"
              style={{
                height: "min(80vh, 620px)",
                borderTop: "1px solid rgba(199,168,75,0.18)",
              }}
            >
              <ImagePanel empresa={empresas[activeIndex]} />
            </div>

            {/* Indicadores debajo del panel */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {empresas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeIndex ? 20 : 6,
                    height: 3,
                    borderRadius: 2,
                    backgroundColor:
                      i === activeIndex
                        ? "#c7a84b"
                        : "rgba(199,168,75,0.25)",
                  }}
                  aria-label={`Ver ${GRUPO_RADICI[i].name}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: tarjetas ── */}
        <div className="md:hidden grid gap-5">
          {empresas.map((empresa, i) => {
            const detail = EMPRESA_DETAILS[empresa.name];
            return (
              <FadeIn key={empresa.name} delay={i * 0.07}>
                <div
                  className="overflow-hidden rounded-sm border"
                  style={{ borderColor: "rgba(199,168,75,0.2)" }}
                >
                  {/* Imagen o placeholder */}
                  <div className="relative w-full" style={{ height: 200 }}>
                    {detail?.image ? (
                      <>
                        <Image
                          src={detail.image}
                          alt={empresa.name}
                          fill
                          className="object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(0,16,31,0.5) 0%, transparent 60%)",
                          }}
                        />
                      </>
                    ) : (
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                        style={{ backgroundColor: "#00101f" }}
                      >
                        {[0, 1].map((k) => (
                          <motion.div
                            key={k}
                            className="absolute rounded-full border"
                            style={{
                              borderColor: "rgba(199,168,75,0.15)",
                              width: 60 + k * 50,
                              height: 60 + k * 50,
                            }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
                            transition={{ duration: 3, delay: k * 1, repeat: Infinity }}
                          />
                        ))}
                        <p
                          className="relative text-xs uppercase tracking-[0.28em]"
                          style={{ color: "#c7a84b" }}
                        >
                          Próximamente
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-5" style={{ backgroundColor: "#fbf9f4" }}>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs uppercase tracking-[0.16em]"
                        style={{
                          backgroundColor: "rgba(199,168,75,0.1)",
                          color: "#c7a84b",
                        }}
                      >
                        {detail?.tag}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#4a5560" }}>
                        <MapPin size={10} />
                        {detail?.location}
                      </span>
                    </div>
                    <h2
                      className="mb-2 text-2xl"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 400,
                        color: "#00101f",
                      }}
                    >
                      {empresa.name}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a5560" }}>
                      {detail?.description}
                    </p>
                    {detail?.href && (
                      <Link
                        href={detail.href}
                        className="group mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em]"
                        style={{ color: "#c7a84b" }}
                      >
                        Ver sitio
                        <ArrowUpRight
                          size={13}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Diagrama de árbol ─── */
const TRUNK_PATH = "M 500,28 C 499,82 500,150 500,198";
const TRUNK_BASE = { cx: 500, cy: 198 };

// Ramas decorativas superiores con hojas
const TOP_BRANCHES = [
  { path: "M 500,65 C 487,50 460,34 444,22",  ex: 444, ey: 22,  delay: 0.85 },
  { path: "M 487,78 C 471,60 442,44 425,35",  ex: 425, ey: 35,  delay: 0.95 },
  { path: "M 476,92 C 457,75 424,59 406,51",  ex: 406, ey: 51,  delay: 1.05 },
  { path: "M 500,65 C 513,50 540,34 556,22",  ex: 556, ey: 22,  delay: 0.85 },
  { path: "M 513,78 C 529,60 558,44 575,35",  ex: 575, ey: 35,  delay: 0.95 },
  { path: "M 524,92 C 543,75 576,59 594,51",  ex: 594, ey: 51,  delay: 1.05 },
  { path: "M 500,28 L 500,14",                ex: 500, ey: 14,  delay: 0.78 },
];

// Raíces principales — cada empresa al extremo
const ROOTS = [
  { path: "M 500,198 C 478,278 116,370 50,428",  cx: 50,  cy: 428, name: "Eliana Zaia", detailKey: "Eliana Zaia",              tag: "REPOSTERÍA", delay: 0,   xAlign: "left"   },
  { path: "M 500,198 C 492,250 265,360 218,438", cx: 218, cy: 438, name: "El Tinto",    detailKey: "El Tinto",                 tag: "CAFETERÍA",  delay: 0.2, xAlign: "center" },
  { path: "M 500,198 C 500,298 500,408 500,458", cx: 500, cy: 458, name: "EZ Treats",   detailKey: "EZ Treats",                tag: "PRODUCCIÓN", delay: 0.4, xAlign: "center" },
  { path: "M 500,198 C 508,250 735,360 782,438", cx: 782, cy: 438, name: "Moldeza",     detailKey: "Moldeza",                  tag: "INSUMOS",    delay: 0.6, xAlign: "center" },
  { path: "M 500,198 C 522,278 884,370 950,428", cx: 950, cy: 428, name: "Radici WM",   detailKey: "Radici Wealth Management", tag: "FINANZAS",   delay: 0.8, xAlign: "right"  },
];

// Sub-raíces decorativas que bifurcan desde las raíces externas
const SUB_ROOTS = [
  { path: "M 293,322 C 212,356 74,424 12,465",  delay: 1.80 },
  { path: "M 293,322 C 232,348 128,412 68,452", delay: 1.95 },
  { path: "M 372,309 C 292,346 152,424 86,465", delay: 2.00 },
  { path: "M 628,309 C 708,346 848,424 914,465", delay: 2.15 },
  { path: "M 707,322 C 788,356 926,424 988,465", delay: 2.05 },
  { path: "M 707,322 C 768,348 872,412 932,452", delay: 2.20 },
];

function RootDiagram({ onHoverChange }: { onHoverChange: (i: number | null) => void }) {
  const [started, setStarted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  const handleHover = (i: number | null) => {
    setHovered(i);
    onHoverChange(i);
  };

  return (
    <div className="relative hidden w-full max-w-5xl md:block">
      <svg viewBox="0 0 1000 525" className="w-full overflow-visible" aria-hidden="true" style={{ position: "relative", zIndex: 1 }}>

        {/* Tronco */}
        <motion.path
          d={TRUNK_PATH} fill="none" stroke="#c7a84b" strokeWidth={2} strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={started ? { pathLength: 1, opacity: 0.75 } : { pathLength: 0, opacity: 0 }}
          transition={{ pathLength: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }, opacity: { duration: 0.3 } }}
        />

        {/* Ramas y hojas superiores */}
        {TOP_BRANCHES.map((b, i) => (
          <g key={i}>
            <motion.path
              d={b.path} fill="none" stroke="#c7a84b" strokeWidth={0.9} strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={started ? { pathLength: 1, opacity: 0.55 } : { pathLength: 0, opacity: 0 }}
              transition={{ pathLength: { duration: 0.45, delay: b.delay, ease: "easeOut" }, opacity: { duration: 0.3, delay: b.delay } }}
            />
            <circle cx={b.ex} cy={b.ey} r={i === 6 ? 2 : 3} fill="#c7a84b"
              style={{ opacity: started ? 0.65 : 0, transition: `opacity 0.3s ease ${b.delay + 0.45}s` }} />
          </g>
        ))}

        {/* Nudo base (tierra) */}
        <circle cx={TRUNK_BASE.cx} cy={TRUNK_BASE.cy} r={5} fill="#c7a84b"
          style={{ opacity: started ? 0.85 : 0, transition: "opacity 0.4s ease 0.78s" }} />

        {/* Sub-raíces decorativas */}
        {SUB_ROOTS.map((sub, i) => (
          <motion.path
            key={i}
            d={sub.path} fill="none" stroke="#c7a84b" strokeWidth={0.7} strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={started ? { pathLength: 1, opacity: 0.22 } : { pathLength: 0, opacity: 0 }}
            transition={{ pathLength: { duration: 0.75, delay: sub.delay, ease: "easeOut" }, opacity: { duration: 0.3, delay: sub.delay } }}
          />
        ))}

        {/* Raíces principales */}
        {ROOTS.map((root, i) => (
          <g key={root.name}>
            <motion.path
              d={root.path} fill="none" stroke="#c7a84b" strokeLinecap="round"
              strokeWidth={hovered === i ? 2 : 1.2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={started
                ? { pathLength: 1, opacity: hovered === i ? 0.9 : 0.45 }
                : { pathLength: 0, opacity: 0 }}
              transition={{
                pathLength: { duration: 1.1, delay: 0.75 + root.delay, ease: [0.25, 0.46, 0.45, 0.94] },
                opacity:    { duration: 0.4, delay: 0.75 },
                strokeWidth:{ duration: 0.3 },
              }}
            />
            <circle cx={root.cx} cy={root.cy} r={hovered === i ? 6 : 4} fill="#c7a84b"
              style={{
                opacity: started ? (hovered === i ? 1 : 0.65) : 0,
                transition: `opacity 0.3s ease ${started ? 0 : 0.75 + root.delay + 1.1}s`,
              }} />
            <text x={root.cx} y={root.cy + 24} textAnchor="middle"
              fill={hovered === i ? "#c7a84b" : "#fbf9f4"} fontSize={17}
              fontFamily="'Cormorant Garamond', serif"
              style={{
                opacity: started ? 1 : 0,
                transition: `opacity 0.5s ease ${started ? 0 : 0.75 + root.delay + 1.2}s, fill 0.3s ease`,
              }}>
              {root.name}
            </text>
            <text x={root.cx} y={root.cy + 40} textAnchor="middle"
              fill="#c7a84b" fontSize={11} fontFamily="system-ui, sans-serif" letterSpacing={2}
              style={{
                opacity: started ? 0.55 : 0,
                transition: `opacity 0.5s ease ${started ? 0 : 0.75 + root.delay + 1.35}s`,
              }}>
              {root.tag}
            </text>
          </g>
        ))}
      </svg>

      {/* Zonas de hover invisibles sobre cada empresa */}
      {ROOTS.map((root, i) => (
        <div
          key={root.name}
          className="absolute cursor-default"
          style={{ left: `${(root.cx / 1000) * 100}%`, top: "83%", transform: "translateX(-50%)", width: 130, height: 65, zIndex: 2 }}
          onMouseEnter={() => handleHover(i)}
          onMouseLeave={() => handleHover(null)}
        />
      ))}
    </div>
  );
}

/* ─── Page ─── */
export default function GrupoRadiciPage() {
  const [hoveredRoot, setHoveredRoot] = useState<number | null>(null);

  return (
    <div className="min-h-screen">

      {/* Hero — dark, centrado, diagrama de raíces animado */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-12 pt-32"
        style={{ backgroundColor: "#00101f" }}
      >
        {/* Imagen de fondo — aparece al hover de cada empresa */}
        <AnimatePresence mode="sync">
          {hoveredRoot !== null && (() => {
            const detail = EMPRESA_DETAILS[ROOTS[hoveredRoot].detailKey];
            return detail?.image ? (
              /* Con imagen */
              <motion.div
                key={`img-${hoveredRoot}`}
                className="pointer-events-none absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.38 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <Image
                  src={detail.image}
                  alt={ROOTS[hoveredRoot].name}
                  fill
                  sizes="100vw"
                  className="object-cover object-center scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(0,16,31,0.2) 0%, rgba(0,16,31,0.92) 100%)",
                  }}
                />
              </motion.div>
            ) : (
              /* Sin imagen — EZ Treats */
              <motion.div
                key={`nimg-${hoveredRoot}`}
                className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Círculos pulsantes dorados */}
                {[0, 1, 2, 3].map((k) => (
                  <motion.div
                    key={k}
                    className="absolute rounded-full border"
                    style={{
                      borderColor: `rgba(199,168,75,${0.12 - k * 0.02})`,
                      width: 120 + k * 110,
                      height: 120 + k * 110,
                    }}
                    animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.1, 0.6] }}
                    transition={{ duration: 4, delay: k * 0.9, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
                {/* Texto central */}
                <motion.p
                  className="relative text-xs uppercase tracking-[0.38em]"
                  style={{ color: "rgba(199,168,75,0.55)" }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Próximamente
                </motion.p>
                <motion.p
                  className="relative text-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(251,249,244,0.35)" }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  Lima · Perú
                </motion.p>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* Halo de luz detrás del título */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 600,
            height: 400,
            background: "radial-gradient(ellipse, rgba(199,168,75,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Texto */}
        <div className="relative mb-12 text-center md:mb-16">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="text-5xl leading-[1.05] sm:text-6xl md:text-8xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#fbf9f4",
            }}
          >
            Grupo{" "}
            <em className="italic" style={{ color: "#c7a84b" }}>
              Radici
            </em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mx-auto mt-5 max-w-xs text-sm leading-relaxed sm:max-w-sm"
            style={{ color: "rgba(251,249,244,0.45)" }}
          >
            Cinco empresas. Un mismo origen.
          </motion.p>
        </div>

        {/* Diagrama de raíces */}
        <RootDiagram onHoverChange={setHoveredRoot} />

        {/* Mobile — lista simple */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:hidden">
          {GRUPO_RADICI.map((e, i) => (
            <motion.span
              key={e.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.18em]"
              style={{ borderColor: "rgba(199,168,75,0.25)", color: "rgba(251,249,244,0.6)" }}
            >
              {e.name}
            </motion.span>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px origin-top"
            style={{ backgroundColor: "rgba(199,168,75,0.35)" }}
          />
        </motion.div>
      </section>

      {/* Narrative — crema */}
      <section
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#fbf9f4" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <FadeIn>
              <p
                className="mb-4 text-xs uppercase tracking-[0.28em]"
                style={{ color: "#c7a84b" }}
              >
                La raíz
              </p>
              <h2
                className="text-3xl leading-[1.2] sm:text-4xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#00101f",
                }}
              >
                Empresas distintas,
                <br />
                el mismo origen.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p
                className="mt-2 text-sm leading-relaxed md:text-base"
                style={{ color: "#4a5560" }}
              >
                El Grupo Radici nació cuando Eliana Zaia alcanzó la escala
                suficiente para pensar en estructura. Cada empresa del grupo
                resuelve una parte del ecosistema — producción, distribución,
                experiencia directa, insumos y patrimonio.
              </p>
              <p
                className="mt-4 text-sm leading-relaxed md:text-base"
                style={{ color: "#4a5560" }}
              >
                La expansión a Lima con EZ Treats es el primer paso
                internacional. La raíz italiana de la fundadora encuentra hoy
                un nuevo suelo latinoamericano.
              </p>
              <div className="mt-8">
                <a
                  href={CONTACT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden border px-7 py-3.5 text-sm tracking-[0.08em] uppercase transition-colors duration-300"
                  style={{
                    borderColor: "rgba(0,16,31,0.25)",
                    color: "#00101f",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#00101f";
                    (e.currentTarget as HTMLElement).style.color = "#fbf9f4";
                    (e.currentTarget as HTMLElement).style.borderColor = "#00101f";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "#00101f";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,16,31,0.25)";
                  }}
                >
                  Contactar al grupo
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
