"use client";

import { motion } from "framer-motion";

type MetricProps = {
  value: string;
  label: string;
  delay: number;
};

export function Metric({ value, label, delay }: MetricProps) {
  return (
    <motion.div
      className="metric-tile"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <motion.strong
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: delay + 0.15 }}
      >
        {value}
      </motion.strong>
      <span>{label}</span>
    </motion.div>
  );
}
