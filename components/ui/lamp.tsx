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
      className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden z-0 ${className}`}
      style={{ backgroundColor: MIDNIGHT }}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        {/* Lamp line */}
        <motion.div
          initial={{ width: "15rem", opacity: 0 }}
          whileInView={{ width: "30rem", opacity: 0.55 }}
          transition={{ delay: 0.2, duration: 1.0, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]"
          style={{ backgroundColor: GOLD_LIGHT }}
        />
      </div>

      {/* Content */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
