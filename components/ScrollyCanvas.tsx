"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Overlay from "./Overlay";

// ---- CONFIG ----
const FRAME_COUNT = 90; // 0 to 89
const getFrameName = (index: number) =>
  `/sequence/frame_${index.toString().padStart(2, "0")}_delay-0.067s.webp`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Tracks scroll progress across the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to a frame index (0-89)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // ---- PRELOAD ALL FRAMES ----
  useEffect(() => {
    let isCancelled = false;
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameName(i);
      img.onload = () => {
        if (isCancelled) return;
        loadedCount += 1;
        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = loadedImages;
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        // Don't block the whole sequence on one missing frame
        loadedCount += 1;
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = loadedImages;
          setImagesLoaded(true);
        }
      };
      loadedImages[i] = img;
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  // ---- DRAW LOGIC (object-fit: cover) ----
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || !images.length) return;

    const img = images[Math.min(Math.max(index, 0), FRAME_COUNT - 1)];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX: number;
    let offsetY: number;

    // object-fit: cover math
    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // ---- RESIZE HANDLING ----
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const ctx = canvas.getContext("2d");
      ctx?.scale(dpr, dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      drawFrame(Math.round(frameIndex.get()));
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded]);

  // ---- SCRUB FRAMES ON SCROLL ----
  useEffect(() => {
    if (!imagesLoaded) return;
    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => drawFrame(Math.round(latest)));
    });
    return () => unsubscribe();
  }, [imagesLoaded, frameIndex]);

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-base">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas image sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />

        {/* Vignette for cinematic depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base via-transparent to-base/40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

        {/* Loading state */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-base">
            <div className="h-px w-40 overflow-hidden bg-white/10">
              <div
                className="h-full bg-accent transition-all duration-200 ease-out"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="font-mono text-xs tracking-widest text-white/40">
              LOADING {loadProgress}%
            </p>
          </div>
        )}

        {/* Text overlay synced to scroll */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
