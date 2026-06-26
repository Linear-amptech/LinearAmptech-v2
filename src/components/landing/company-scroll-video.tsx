"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Number of frames in the scroll-scrubbed clip. The real count is patched in
// once frame generation finishes — keep this a single, one-line edit.
const FRAME_COUNT = 173;
// ─────────────────────────────────────────────────────────────────────────────

const BASE = "/assets/company-scrub";

const clamp = (n: number, lo: number, hi: number): number =>
  Math.min(hi, Math.max(lo, n));

const frameUrl = (i: number): string =>
  `${BASE}/frame-${String(i + 1).padStart(3, "0")}.webp`;

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
  const readyRef = useRef(false);
  // Holds the latest loop step so the rAF callback can re-schedule itself
  // without a self-referencing useCallback (which the lint rules reject).
  const tickRef = useRef<() => void>(() => {});

  const [loadedCount, setLoadedCount] = useState(0);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start start", "end end"],
  });

  // Draw the current (rounded) frame with COVER-FIT crop math. Reads only refs,
  // so it stays referentially stable across renders.
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const index = clamp(
      Math.round(currentIndexRef.current),
      0,
      FRAME_COUNT - 1,
    );
    const img = imagesRef.current[index];
    // Never draw an unloaded or failed frame.
    if (!img || !img.complete || img.naturalWidth === 0) return;

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
  }, []);

  // Single coalesced rAF loop: lerp current → target by 0.2, draw, and stop
  // (snap + final draw) once we're within half a frame. Re-schedules via the
  // ref so it never references its own binding.
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

    currentIndexRef.current = current + diff * 0.2;
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

  // Size the backing store to CSS pixels × dpr and redraw. Observing the parent;
  // measuring the canvas's own rendered box (it fills the parent via CSS).
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

  // PRELOAD + GATE: build an Image for every frame, decode where supported,
  // gate `ready` on settled (not just fulfilled) count so a missing frame
  // can't wedge the loader behind the overlay forever.
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    imagesRef.current = images;
    let settled = 0;

    const finish = () => {
      if (cancelled) return;
      settled += 1;
      setLoadedCount(settled);
    };

    const load = (i: number): Promise<void> => {
      const img = new Image();
      images[i] = img;
      img.src = frameUrl(i);

      if (typeof img.decode === "function") {
        // decode() rejects on a broken image — count it as settled either way.
        return img.decode().then(finish, finish);
      }
      return new Promise<void>((resolve) => {
        const onDone = () => {
          finish();
          resolve();
        };
        img.onload = onDone;
        img.onerror = onDone;
      });
    };

    const tasks = Array.from({ length: FRAME_COUNT }, (_, i) => load(i));
    Promise.allSettled(tasks).then(() => {
      if (cancelled) return;
      readyRef.current = true;
      setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // ARM: once every frame has settled, size the canvas, paint frame 0 so there's
  // a first frame before any scroll, then animate toward the current scroll
  // position. Run the size routine explicitly (don't rely on RO having fired).
  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;

    resize();
    currentIndexRef.current = 0;
    draw(); // frame 0

    targetIndexRef.current = clamp(
      Math.round(scrollYProgress.get() * (FRAME_COUNT - 1)),
      0,
      FRAME_COUNT - 1,
    );
    requestTick();

    const observer = new ResizeObserver(() => resize());
    if (parent) observer.observe(parent);

    return () => {
      observer.disconnect();
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [ready, resize, draw, requestTick, scrollYProgress]);

  // Map scroll progress → target frame, never setState per frame.
  // (useMotionValueEvent auto-unsubscribes on unmount.)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!readyRef.current) return;
    targetIndexRef.current = clamp(
      Math.round(v * (FRAME_COUNT - 1)),
      0,
      FRAME_COUNT - 1,
    );
    requestTick();
  });

  const progress = clamp(Math.round((loadedCount / FRAME_COUNT) * 100), 0, 100);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />
      {!ready ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--color-surface-soft)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 animate-pulse bg-[linear-gradient(110deg,transparent_35%,rgb(255_255_255_/_0.06)_50%,transparent_65%)]"
          />
          <div className="relative flex flex-col items-center gap-3">
            <div className="h-1 w-40 overflow-hidden rounded-full bg-[color:var(--color-border)]">
              <div
                className="h-full rounded-full bg-[color:var(--color-primary)] transition-[width] duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs font-medium tracking-wide text-[color:var(--color-text-muted)]">
              Loading {progress}%
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
