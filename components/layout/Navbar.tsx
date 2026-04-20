"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onDark = !scrolled;
  const primaryText = onDark ? "var(--color-text-light)" : "var(--color-ink)";
  const mutedText = onDark
    ? "var(--color-text-light-muted)"
    : "var(--color-text-muted)";
  const hoverText = onDark ? "var(--color-text-light)" : "var(--color-gold)";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:px-6 md:py-6">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled ? "liquid-glass-dark" : ""
        }`}
        style={{
          backgroundColor: scrolled
            ? "rgba(251, 249, 244, 0.85)"
            : "transparent",
        }}
      >
        <Link
          href="/"
          className="text-lg tracking-tight transition-colors"
          style={{
            fontFamily: "'Noto Serif', serif",
            color: primaryText,
            fontWeight: 500,
          }}
          onClick={() => setIsOpen(false)}
        >
          Eliana{" "}
          <em
            className="italic"
            style={{
              color: onDark
                ? "var(--color-gold-on-dark)"
                : "var(--color-gold)",
            }}
          >
            Zaia
          </em>
        </Link>

        <ul className="ml-8 hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: mutedText }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = hoverText)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = mutedText)
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: primaryText }}
          >
            WhatsApp
          </a>
          <Link
            href="/contacto"
            className="rounded-full px-6 py-2 text-sm font-medium transition-all"
            style={{
              backgroundColor: onDark
                ? "var(--color-surface)"
                : "var(--color-surface-dark)",
              color: onDark
                ? "var(--color-surface-dark)"
                : "var(--color-surface)",
            }}
          >
            Contacto
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
            style={{
              backgroundColor: isOpen ? "var(--color-surface)" : primaryText,
            }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: primaryText }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
            style={{
              backgroundColor: isOpen ? "var(--color-surface)" : primaryText,
            }}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 flex items-center justify-center lg:hidden"
              style={{
                backgroundColor: "rgba(0, 16, 31, 0.97)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <ul className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-3xl transition-colors"
                      style={{
                        fontFamily: "'Noto Serif', serif",
                        color: "var(--color-text-light)",
                        fontWeight: 400,
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                >
                  <a
                    href={CONTACT.whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-full px-8 py-3 text-sm font-medium"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      color: "var(--color-surface-dark)",
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    WhatsApp
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
