"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * LampContainer — fondo midnight con una línea dorada animada que se
 * extiende horizontalmente. Versión minimalista (sin conos de luz).
 */
export const LampContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const MIDNIGHT = "#00101f";
  const GOLD_LIGHT = "#e0c470";

  return (
    <div
      className={`relative flex min-h-[50vh] w-full flex-col items-center justify-center gap-8 overflow-hidden pt-12 pb-20 z-0 ${className}`}
      style={{ backgroundColor: MIDNIGHT }}
    >
      {/* Lamp line */}
      <motion.div
        initial={{ width: "15rem", opacity: 0 }}
        whileInView={{ width: "30rem", opacity: 0.55 }}
        transition={{ delay: 0.2, duration: 1.0, ease: "easeInOut" }}
        className="z-50 h-0.5 max-w-[80vw] w-[30rem]"
        style={{ backgroundColor: GOLD_LIGHT }}
      />

      {/* Content */}
      <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
