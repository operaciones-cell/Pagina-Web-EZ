"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * LampContainer — efecto lámpara dorada sobre midnight.
 * Adaptado a la paleta Eliana Zaia:
 *   midnight #00101f · gold #c7a84b · gold claro #e0c470 · cream #fbf9f4
 */
export const LampContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const MIDNIGHT = "#00101f";
  const GOLD = "#c7a84b";
  const GOLD_LIGHT = "#e0c470";

  return (
    <div
      className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden z-0 ${className}`}
      style={{ backgroundColor: MIDNIGHT }}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left conic light */}
        <motion.div
          initial={{ opacity: 0.15, width: "15rem" }}
          whileInView={{ opacity: 0.3, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, ${GOLD}, transparent, transparent)`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] text-white"
        >
          <div
            className="absolute w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{ backgroundColor: MIDNIGHT }}
          />
          <div
            className="absolute w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"
            style={{ backgroundColor: MIDNIGHT }}
          />
        </motion.div>

        {/* Right conic light */}
        <motion.div
          initial={{ opacity: 0.15, width: "15rem" }}
          whileInView={{ opacity: 0.3, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, ${GOLD})`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] text-white"
        >
          <div
            className="absolute w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"
            style={{ backgroundColor: MIDNIGHT }}
          />
          <div
            className="absolute w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{ backgroundColor: MIDNIGHT }}
          />
        </motion.div>

        {/* Soft blur floor */}
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"
          style={{ backgroundColor: MIDNIGHT }}
        />

        {/* Glass diffuser */}
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Central gold glow */}
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-8 blur-3xl"
          style={{ backgroundColor: GOLD }}
        />

        {/* Lamp halo */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full opacity-25 blur-2xl"
          style={{ backgroundColor: GOLD_LIGHT }}
        />

        {/* Lamp line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] opacity-35"
          style={{ backgroundColor: GOLD_LIGHT }}
        />

        {/* Top mask */}
        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]"
          style={{ backgroundColor: MIDNIGHT }}
        />
      </div>

      {/* Content */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
