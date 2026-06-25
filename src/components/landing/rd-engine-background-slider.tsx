"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const rdEngineSlides = [
  "/assets/rd-engine/1.png",
  "/assets/rd-engine/2.png",
] as const;

export function RdEngineBackgroundSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % rdEngineSlides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
      {rdEngineSlides.map((imagePath, index) => (
        <motion.div
          key={imagePath}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ backgroundImage: `url(${imagePath})` }}
          initial={false}
          animate={{
            opacity: activeSlide === index ? 1 : 0,
            scale: activeSlide === index ? 1.08 : 1,
          }}
          transition={{
            opacity: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 5.2, ease: "linear" },
          }}
        />
      ))}
    </div>
  );
}
