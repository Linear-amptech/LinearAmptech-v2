"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export function ParallaxImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-28, 28]);

  return (
    <motion.div ref={ref} className={`image-panel ${className}`} style={{ y }}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      <span aria-hidden="true" className="image-scanline" />
    </motion.div>
  );
}
