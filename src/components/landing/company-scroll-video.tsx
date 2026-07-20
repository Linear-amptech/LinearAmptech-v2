"use client";

import { useCallback, useEffect, useRef, type RefObject } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// The scroll-scrubbed clip lives on disk as frame-001.webp … frame-193.webp.
// FIRST_FRAME is the number of the first file; FRAME_COUNT is how many there are.
const FIRST_FRAME = 1;
const FRAME_COUNT = 193;
// ─────────────────────────────────────────────────────────────────────────────

const BASE = "/assets/company/scrub";
const POSTER = `${BASE}/poster.webp`;

const clamp = (n: number, lo: number, hi: number): number =>
  Math.min(hi, Math.max(lo, n));

const frameUrl = (i: number): string =>
  `${BASE}/frame-${String(i + FIRST_FRAME).padStart(3, "0")}.webp`;

type CompanyScrollVideoProps = {
  scrollTargetRef: RefObject<HTMLElement | null>;
};

export function CompanyScrollVideo({
  scrollTargetRef,
}: CompanyScrollVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetIndexRef = useRef(0);
  const currentIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  // Holds the latest loop step so the rAF callback can re-schedule itself
  // without a self-referencing useCallback (which the lint rules reject).
  const tickRef = useRef<() => void>(() => {});

  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start start", "end end"],
  });

  const frameReady = (i: number): boolean => {
    const img = imagesRef.current[i];
    return !!img && img.complete && img.naturalWidth > 0;
  };

  // Nearest already-decoded frame to `index`, searching outward. Returns -1 when
  // nothing has decoded yet (the poster stays visible underneath the canvas).
  const nearestLoaded = useCallback((index: number): number => {
    if (frameReady(index)) return index;
    for (let r = 1; r < FRAME_COUNT; r += 1) {
      const lo = index - r;
      const hi = index + r;
      if (lo >= 0 && frameReady(lo)) return lo;
      if (hi < FRAME_COUNT && frameReady(hi)) return hi;
    }
    return -1;
  }, []);

  // Draw the nearest loaded frame with COVER-FIT crop math. Reads only refs, so
  // it stays referentially stable across renders.
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const target = clamp(
      Math.round(currentIndexRef.current),
      0,
      FRAME_COUNT - 1,
    );
    const index = nearestLoaded(target);
    if (index < 0) return; // nothing decoded yet — poster shows through
    const img = imagesRef.current[index];

    const canvasW = canvas.width;
    const canvasH = canvas.height;
    if (canvasW === 0 || canvasH === 0) return;

    // Setting canvas.width/height resets the context, so (re)apply smoothing
    // every draw rather than once on mount.
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const scale = Math.max(
      canvasW / img.naturalWidth,
      canvasH / img.naturalHeight,
    );
    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const dx = (canvasW - drawW) / 2;
    const dy = (canvasH - drawH) / 2;

    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.drawImage(img, dx, dy, drawW, drawH);
  }, [nearestLoaded]);

  // Single coalesced rAF loop: lerp current → target by 0.2, draw, and stop
  // (snap + final draw) once we're within half a frame.
  const step = useCallback(() => {
    const current = currentIndexRef.current;
    const target = targetIndexRef.current;
    const diff = target - current;

    if (Math.abs(diff) < 0.5) {
      currentIndexRef.current = target;
      draw();
      rafRef.current = null;
      return;
    }

    currentIndexRef.current = current + diff * 0.35;
    draw();
    rafRef.current = requestAnimationFrame(tickRef.current);
  }, [draw]);

  useEffect(() => {
    tickRef.current = step;
  }, [step]);

  // Guard against double-scheduling: only kick the loop when it's idle.
  const requestTick = useCallback(() => {
    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(tickRef.current);
    }
  }, []);

  // Size the backing store to CSS pixels × dpr and redraw.
  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if (cssW === 0 || cssH === 0) return;

    const w = Math.round(cssW * dpr);
    const h = Math.round(cssH * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    draw();
  }, [draw]);

  // PRELOAD — non-blocking, no loader UI. Decode frame 0 first and paint it the
  // moment it's ready (the poster covers the gap before then); stream the rest
  // in the background, repainting cheaply as better frames arrive.
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    imagesRef.current = images;

    const makeImage = (i: number): HTMLImageElement => {
      const img = new Image();
      img.decoding = "async";
      img.src = frameUrl(i);
      images[i] = img;
      return img;
    };

    const first = makeImage(0);
    const onFirst = () => {
      if (cancelled) return;
      targetIndexRef.current = clamp(
        Math.round(scrollYProgress.get() * (FRAME_COUNT - 1)),
        0,
        FRAME_COUNT - 1,
      );
      resize();
      requestTick();
    };
    if (typeof first.decode === "function") {
      first.decode().then(onFirst, onFirst);
    } else {
      first.onload = onFirst;
      first.onerror = onFirst;
    }

    for (let i = 1; i < FRAME_COUNT; i += 1) {
      const img = makeImage(i);
      const onArrive = () => {
        if (!cancelled) requestTick();
      };
      if (typeof img.decode === "function") {
        img.decode().then(onArrive, () => {});
      } else {
        img.onload = onArrive;
      }
    }

    return () => {
      cancelled = true;
    };
  }, [resize, requestTick, scrollYProgress]);

  // Observe the parent for size changes; clean up the rAF loop on unmount.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;

    resize();
    const observer = new ResizeObserver(() => resize());
    if (parent) observer.observe(parent);

    return () => {
      observer.disconnect();
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [resize]);

  // Map scroll progress → target frame, never setState per frame.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    targetIndexRef.current = clamp(
      Math.round(v * (FRAME_COUNT - 1)),
      0,
      FRAME_COUNT - 1,
    );
    requestTick();
  });

  return (
    <>
      {/* Instant first frame: shows immediately, sits behind the canvas, and is
          covered the moment a real frame is drawn. No blocking loader. */}
      {/* Blend/mask live on the parent wrapper: blending these two children
          individually would multiply the canvas against the poster and ghost
          the closed chip over the exploded frames. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={POSTER}
        alt="Linear-AmpTech RF semiconductor module"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />
    </>
  );
}
