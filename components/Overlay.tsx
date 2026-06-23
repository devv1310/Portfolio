"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1 — 0% scroll — center
  const s1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.16], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.16], [0, -60]);

  // Section 2 — 30% scroll — left aligned
  const s2Opacity = useTransform(
    scrollYProgress,
    [0.22, 0.3, 0.4, 0.46],
    [0, 1, 1, 0]
  );
  const s2X = useTransform(scrollYProgress, [0.22, 0.46], [-40, 20]);

  // Section 3 — 60% scroll — right aligned
  const s3Opacity = useTransform(
    scrollYProgress,
    [0.52, 0.6, 0.72, 0.8]
  , [0, 1, 1, 0]);
  const s3X = useTransform(scrollYProgress, [0.52, 0.8], [40, -20]);

  // Final scroll cue fade out
  const cueOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Bhopal, India
        </p>
        <h1 className="text-glow text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl">
          Devanshu
          <br />
          Vishwakarma
        </h1>
        <p className="mt-6 text-base font-light tracking-wide text-white/60 sm:text-lg">
          Full Stack Developer · Data Analyst · Python Developer
        </p>
      </motion.div>

      {/* Section 2 — left aligned */}
      <motion.div
        style={{ opacity: s2Opacity, x: s2X }}
        className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-16"
      >
        <span className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          01 · Craft
        </span>
        <h2 className="max-w-xl text-3xl font-medium leading-tight text-white sm:text-5xl md:text-6xl">
          I build digital
          <br />
          experiences.
        </h2>
        <p className="mt-5 max-w-sm text-sm font-light text-white/50 sm:text-base">
          React, TypeScript, Python and Django — turning ideas into fast,
          reliable products end to end.
        </p>
      </motion.div>

      {/* Section 3 — right aligned */}
      <motion.div
        style={{ opacity: s3Opacity, x: s3X }}
        className="absolute inset-0 flex flex-col items-end justify-center px-6 text-right sm:px-16"
      >
        <span className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          02 · Approach
        </span>
        <h2 className="max-w-xl text-3xl font-medium leading-tight text-white sm:text-5xl md:text-6xl">
          Bridging design
          <br />
          and engineering.
        </h2>
        <p className="mt-5 max-w-sm text-sm font-light text-white/50 sm:text-base">
          Data-driven thinking meets clean architecture — from dashboards to
          full-stack platforms.
        </p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: cueOpacity }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <div className="h-10 w-px animate-pulse bg-white/30" />
      </motion.div>
    </div>
  );
}
