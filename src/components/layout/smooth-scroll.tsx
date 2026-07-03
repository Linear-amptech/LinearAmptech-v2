"use client";

import { useCallback, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";

const easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
// Anchored sections are full-viewport with vertically centered content, so
// they must land flush at their top edge — any offset shifts the content off
// center. The fixed header only overlays section padding, never content.
const anchorScrollOptions = {
  duration: 1.05,
  easing,
  offset: 0,
};

/**
 * Page-wide smooth (inertial) scrolling via Lenis.
 *
 * Lenis smooths the *native* window scroll, so framer-motion `useScroll`,
 * sticky/fixed positioning, and the Company scroll-scrubbed video all keep
 * tracking without extra wiring. Disabled when the user prefers reduced motion.
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const previousPathnameRef = useRef<string | null>(null);

  const scrollToHash = useCallback((hash: string, attempts = 14) => {
    if (!hash) {
      return;
    }

    const attemptScroll = (remainingAttempts: number) => {
      requestAnimationFrame(() => {
        const target = document.querySelector<HTMLElement>(hash);

        if (!target) {
          if (remainingAttempts > 0) {
            window.setTimeout(() => attemptScroll(remainingAttempts - 1), 50);
          }

          return;
        }

        const lenis = lenisRef.current;

        if (lenis) {
          // After a route change Lenis may still hold the previous page's
          // scroll limit and would clamp the target short — re-measure first.
          lenis.resize();
          lenis.scrollTo(target, anchorScrollOptions);
          return;
        }

        const top =
          target.getBoundingClientRect().top +
          window.scrollY +
          anchorScrollOptions.offset;

        window.scrollTo({ top, left: 0, behavior: "smooth" });
      });
    };

    attemptScroll(attempts);
  }, []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      // Exponential ease-out — settles quickly, feels premium, never floaty.
      easing,
      smoothWheel: true,
      anchors: anchorScrollOptions,
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const scrollToCurrentHash = () => {
      scrollToHash(window.location.hash);
    };

    window.addEventListener("hashchange", scrollToCurrentHash);
    scrollToCurrentHash();

    return () => window.removeEventListener("hashchange", scrollToCurrentHash);
  }, [scrollToHash]);

  useEffect(() => {
    if (previousPathnameRef.current === null) {
      previousPathnameRef.current = pathname;
      return;
    }

    if (previousPathnameRef.current === pathname) return;

    previousPathnameRef.current = pathname;

    if (window.location.hash) {
      scrollToHash(window.location.hash);
      return;
    }

    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, scrollToHash]);

  return null;
}
