"use client";

import Threads from "@/components/Threads";

/**
 * Animated saffron thread waves behind interior hero bands (React Bits
 * Threads, OGL). Fades out toward the headline; pointer events disabled.
 */
export function HeroThreads() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block [mask-image:linear-gradient(90deg,transparent_0%,black_45%)]"
    >
      <Threads
        color={[0.9098039215686274, 0.4627450980392157, 0.1568627450980392]}
        amplitude={1.7}
        distance={0.2}
        enableMouseInteraction={false}
      />
    </div>
  );
}
