"use client";

import { motion } from "framer-motion";

export default function MouseGlow({ x, y }) {
  return (
    <motion.div
      className="absolute h-72 w-72 rounded-full opacity-20"
      style={{
        backgroundColor: "rgba(0, 194, 20, 0.12)",
        left: x - 144,
        top: y - 144,
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
