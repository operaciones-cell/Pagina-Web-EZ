"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Check if the user prefers reduced motion. */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Heuristic: low-end device or small screen. */
function isLowEnd(): boolean {
  if (typeof window === "undefined") return false;
  if (window.innerWidth < 768) return true;
  if (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4) return true;
  return false;
}

// ---------------------------------------------------------------------------
// Letter point sampling
// ---------------------------------------------------------------------------

/**
 * Sample 2-D points that approximate the shape of the given text by rendering
 * it to an off-screen canvas and reading back occupied pixels.
 */
function sampleTextPoints(
  text: string,
  count: number,
  width: number,
  height: number,
): { x: number; y: number }[] {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  // Draw text centred on the canvas
  const fontSize = Math.min(width * 0.35, height * 0.6);
  ctx.fillStyle = "#fff";
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  // Read pixel data and collect occupied positions
  const imageData = ctx.getImageData(0, 0, width, height);
  const occupied: { x: number; y: number }[] = [];

  // Step through pixels with a stride to keep the list manageable
  const step = 2;
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const alpha = imageData.data[(y * width + x) * 4 + 3];
      if (alpha > 128) {
        occupied.push({ x, y });
      }
    }
  }

  // Randomly pick `count` points from the occupied list
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const p = occupied[Math.floor(Math.random() * occupied.length)];
    // Map to normalised coordinates centred at origin
    points.push({
      x: (p.x / width - 0.5) * 2,
      y: -(p.y / height - 0.5) * 2, // flip Y for Three.js
    });
  }

  return points;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PARTICLE_COUNT = 500;
const ACCENT_GOLD = 0xc8a96e;
const BG_COLOR = 0x0a0a0a;
const CONVERGE_DURATION = 1.6; // seconds for particles to converge
const HOLD_DURATION = 0.5; // seconds to hold after convergence
const FADE_DURATION = 0.5; // seconds for fade-out

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Loader() {
  const [done, setDone] = useState(false);
  const [useSimple, setUseSimple] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  // Determine rendering mode on mount
  useEffect(() => {
    if (prefersReducedMotion() || isLowEnd()) {
      setUseSimple(true);
    }
  }, []);

  // ------ Simple CSS loader path ------
  useEffect(() => {
    if (!useSimple) return;

    // After a short delay, mark as done
    const timer = setTimeout(() => setDone(true), 2000);
    return () => clearTimeout(timer);
  }, [useSimple]);

  // ------ Three.js loader path ------
  const initThree = useCallback(async () => {
    if (useSimple) return;
    if (!canvasRef.current) return;

    const THREE = await import("three");

    const canvas = canvasRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(BG_COLOR, 1);

    // Scene & camera
    const scene = new THREE.Scene();
    const aspect = width / height;
    const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 10);
    camera.position.z = 1;

    // Sample target positions for "EZ"
    const targets = sampleTextPoints("EZ", PARTICLE_COUNT, width, height);

    // Build particle geometry
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const targetPositions = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Random starting positions in a wide area
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = 0;

      // Target positions (normalised from sampleTextPoints)
      const t = targets[i];
      targetPositions[i * 3] = t.x * aspect;
      targetPositions[i * 3 + 1] = t.y;
      targetPositions[i * 3 + 2] = 0;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: ACCENT_GOLD,
      size: 3,
      sizeAttenuation: false,
      transparent: true,
      opacity: 1,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation state
    let startTime: number | null = null;
    let animationId: number;
    let disposed = false;

    const animate = (time: number) => {
      if (disposed) return;

      if (startTime === null) startTime = time;
      const elapsed = (time - startTime) / 1000; // seconds

      const posAttr = geometry.attributes.position as import("three").BufferAttribute;
      const arr = posAttr.array as Float32Array;

      if (elapsed < CONVERGE_DURATION) {
        // Lerp particles toward targets
        const progress = Math.min(elapsed / CONVERGE_DURATION, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const i3 = i * 3;
          arr[i3] += (targetPositions[i3] - arr[i3]) * eased * 0.08;
          arr[i3 + 1] += (targetPositions[i3 + 1] - arr[i3 + 1]) * eased * 0.08;
        }
        posAttr.needsUpdate = true;
      } else if (elapsed < CONVERGE_DURATION + HOLD_DURATION) {
        // Snap to final positions during hold
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const i3 = i * 3;
          arr[i3] = targetPositions[i3];
          arr[i3 + 1] = targetPositions[i3 + 1];
        }
        posAttr.needsUpdate = true;
      } else {
        // Fade-out phase
        const fadeProgress =
          (elapsed - CONVERGE_DURATION - HOLD_DURATION) / FADE_DURATION;

        if (fadeProgress >= 1) {
          setDone(true);
          return;
        }

        material.opacity = 1 - fadeProgress;

        // Also fade the container
        if (containerRef.current) {
          containerRef.current.style.opacity = String(1 - fadeProgress);
        }
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Cleanup function
    const cleanup = () => {
      disposed = true;
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };

    cleanupRef.current = cleanup;
  }, [useSimple]);

  useEffect(() => {
    if (!useSimple) {
      initThree();
    }

    return () => {
      cleanupRef.current?.();
    };
  }, [useSimple, initThree]);

  // Don't render anything once the loader is done
  if (done) return null;

  // ------ Simple / reduced-motion fallback ------
  if (useSimple) {
    return (
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          animation: "loaderFadeOut 0.6s ease-out 1.4s forwards",
        }}
      >
        <span
          style={{
            color: "#C8A96E",
            fontSize: "clamp(2rem, 8vw, 5rem)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            opacity: 0,
            animation: "loaderTextIn 0.8s ease-out 0.3s forwards",
          }}
        >
          EZ
        </span>

        {/* Inline keyframes for the simple loader */}
        <style>{`
          @keyframes loaderTextIn {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1); }
          }
          @keyframes loaderFadeOut {
            from { opacity: 1; }
            to   { opacity: 0; pointer-events: none; }
          }
        `}</style>
      </div>
    );
  }

  // ------ Three.js canvas path ------
  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0A0A0A",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
