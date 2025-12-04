"use client";

import { motion } from "framer-motion";

export default function CircuitLine({ delay = 0, duration = 3, path }) {
  return (
    <motion.path
      d={path}
      stroke="#05FF1A"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.6 }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    />
  );
}
