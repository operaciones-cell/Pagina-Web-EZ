"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/constants";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fbf9f4" }}>

      {/* Hero — cream */}
      <section className="px-6 pb-16 pt-36 md:pb-20 md:pt-44" style={{ backgroundColor: "#fbf9f4" }}>
        <div className="mx-auto max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-4 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
            Contacto
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "-0.02em", color: "#00101f" }}>
            Hablemos de{" "}
            <em className="italic" style={{ color: "#c7a84b" }}>tu proyecto.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 max-w-lg text-sm leading-relaxed md:text-base" style={{ color: "#4a5560" }}>
            Para pedidos, alianzas comerciales o cualquier consulta — respondemos en menos de 24 horas.
          </motion.p>
        </div>
      </section>

      {/* Contenido — midnight */}
      <section className="px-6 py-16 md:py-20" style={{ backgroundColor: "#00101f" }}>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">

            {/* Contacto directo */}
            <FadeIn>
              <p className="mb-8 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
                Contacto directo
              </p>
              <div className="space-y-6">
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.18em]" style={{ color: "rgba(251,249,244,0.4)" }}>
                    WhatsApp
                  </p>
                  <a
                    href={CONTACT.whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-lg transition-colors hover:text-[#c7a84b]"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fbf9f4" }}
                  >
                    {CONTACT.phone}
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "#c7a84b" }} />
                  </a>
                </div>
                <div style={{ borderTop: "1px solid rgba(199,168,75,0.12)", paddingTop: "1.5rem" }}>
                  <p className="mb-1 text-xs uppercase tracking-[0.18em]" style={{ color: "rgba(251,249,244,0.4)" }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-lg transition-colors hover:text-[#c7a84b]"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fbf9f4" }}
                  >
                    {CONTACT.email}
                  </a>
                </div>
                <div style={{ borderTop: "1px solid rgba(199,168,75,0.12)", paddingTop: "1.5rem" }}>
                  <p className="mb-1 text-xs uppercase tracking-[0.18em]" style={{ color: "rgba(251,249,244,0.4)" }}>
                    Ubicación
                  </p>
                  <p className="text-base" style={{ color: "#fbf9f4" }}>
                    {CONTACT.location}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Formulario */}
            <FadeIn delay={0.15}>
              <p className="mb-8 text-xs uppercase tracking-[0.28em]" style={{ color: "#c7a84b" }}>
                Escríbenos
              </p>
              <ContactForm />
            </FadeIn>

          </div>
        </div>
      </section>

    </div>
  );
}
