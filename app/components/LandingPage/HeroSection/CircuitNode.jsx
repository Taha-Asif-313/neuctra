"use client";

import { motion } from "framer-motion";

export default function CircuitNode({ x, y, delay = 0 }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r="4"
      fill="#05FF1A"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    />
  );
}
