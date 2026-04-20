// components/ui/CustomCursor.tsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const hoveringRef = useRef(false);
  const [hovering, setHovering] = useState(false);

  const setHoveringState = useCallback((value: boolean) => {
    hoveringRef.current = value;
    setHovering(value);
  }, []);

  useEffect(() => {
    // Don't render on touch devices or if user prefers reduced motion
    const isFineMouse = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isFineMouse || prefersReducedMotion) return;

    setVisible(true);

    const mouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };
    let animationId: number;

    // Hide default cursor
    document.body.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Move dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x - 4}px, ${mouse.y - 4}px)`;
      }
    };

    const animate = () => {
      // Lerp the circle toward mouse position
      circle.x += (mouse.x - circle.x) * 0.15;
      circle.y += (mouse.y - circle.y) * 0.15;

      if (circleRef.current) {
        const scale = hoveringRef.current ? 1.5 : 1;
        circleRef.current.style.transform = `translate(${circle.x - 20}px, ${circle.y - 20}px) scale(${scale})`;
      }

      animationId = requestAnimationFrame(animate);
    };

    const interactiveSelector =
      "a, button, input, textarea, select, [role='button']";

    const onMouseEnterInteractive = () => setHoveringState(true);
    const onMouseLeaveInteractive = () => setHoveringState(false);

    const addInteractiveListeners = () => {
      const elements = document.querySelectorAll(interactiveSelector);
      elements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
        (el as HTMLElement).style.cursor = "none";
      });
    };

    const removeInteractiveListeners = () => {
      const elements = document.querySelectorAll(interactiveSelector);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        (el as HTMLElement).style.cursor = "";
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    addInteractiveListeners();
    animationId = requestAnimationFrame(animate);

    // Observe DOM changes to attach listeners to new interactive elements
    const observer = new MutationObserver(() => {
      removeInteractiveListeners();
      addInteractiveListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
      removeInteractiveListeners();
      observer.disconnect();
      document.body.style.cursor = "";
    };
  }, [setHoveringState]);

  if (!visible) return null;

  return (
    <>
      {/* Small dot - follows exactly */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          backgroundColor: "#C8A96E",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: hovering ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      />
      {/* Large circle - follows with delay */}
      <div
        ref={circleRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          border: "1px solid #C8A96E",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}
