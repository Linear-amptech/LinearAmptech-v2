"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/components/landing/data";

type ProductImageCardProps = {
  product: Product;
  index: number;
};

export function ProductImageCard({ product, index }: ProductImageCardProps) {
  return (
    <motion.article
      className={`product-card product-image-card geo-${index % 4}`}
    >
      <div className="product-visual">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1024px) 28vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="relative z-10 p-6 sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="product-icon">
            <product.icon className="size-7" aria-hidden="true" />
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="learn-button product-learn"
          >
            Learn More
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
        <p className="mt-3 text-base leading-7 text-slate-300">
          {product.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <span key={feature} className="feature-pill">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
