"use client";

import { motion } from "framer-motion";

export default function MouseGlow({ x, y }) {
  return (
    <motion.div
      className="absolute w-96 h-96 rounded-full opacity-20"
      style={{
        background:
          "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)",
        left: x - 192,
        top: y - 192,
        pointerEvents: "none",
      }}
      animate={{
        x: [0, 10, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
