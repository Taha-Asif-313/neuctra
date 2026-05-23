import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, animate } from "framer-motion";

const random = (min, max) => Math.random() * (max - min) + min;

function generateMeteor(id) {
  const startX = random(-10, 110); // % across screen
  const startY = random(-20, 60);
  const length = random(80, 220);
  const angle = 35 + random(-5, 10); // degrees, ~35° like the image
  const duration = random(1.2, 2.8);
  const delay = random(0, 8);
  const opacity = random(0.55, 1);
  const thickness = random(1, 2.5);
  const glow = random(3, 10);

  return {
    id,
    startX,
    startY,
    length,
    angle,
    duration,
    delay,
    opacity,
    thickness,
    glow,
  };
}

function Meteor({
  startX,
  startY,
  length,
  angle,
  duration,
  delay,
  opacity,
  thickness,
  glow,
}) {
  const rad = (angle * Math.PI) / 180;
  const dx = Math.cos(rad) * length;
  const dy = Math.sin(rad) * length;

  // Travel distance across screen
  const travelX = Math.cos(rad) * (length + 900);
  const travelY = Math.sin(rad) * (length + 900);

  return (
    <motion.g
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{
        opacity: [0, opacity, opacity * 0.8, 0],
        x: [0, travelX * 0.15, travelX * 0.4],
        y: [0, travelY * 0.15, travelY * 0.4],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: random(4, 14),
        ease: "easeIn",
      }}
    >
      {/* Core streak */}
      <line
        x1={`${startX}%`}
        y1={`${startY}%`}
        x2={`calc(${startX}% + ${dx}px)`}
        y2={`calc(${startY}% + ${dy}px)`}
        stroke="url(#meteorGrad)"
        strokeWidth={thickness}
        strokeLinecap="round"
        opacity={opacity}
      />
      {/* Bright head */}
      <circle
        cx={`calc(${startX}% + ${dx}px)`}
        cy={`calc(${startY}% + ${dy}px)`}
        r={thickness * 1.8}
fill="#00c214"
        opacity={opacity * 0.9}
        filter="url(#meteorGlow)"
      />
    </motion.g>
  );
}

function StarField({ count = 200 }) {
  const stars = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: random(0, 100),
      y: random(0, 100),
      r: random(0.4, 1.6),
      opacity: random(0.2, 0.85),
      twinkleDuration: random(2, 6),
      twinkleDelay: random(0, 5),
    })),
  ).current;

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {stars.map((s) => (
        <motion.circle
          key={s.id}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="#d6ffe6"
          initial={{ opacity: s.opacity }}
          animate={{ opacity: [s.opacity, s.opacity * 0.25, s.opacity] }}
          transition={{
            duration: s.twinkleDuration,
            repeat: Infinity,
            delay: s.twinkleDelay,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

export default function MeteorBackground({ children }) {
  const meteors = useRef(
    Array.from({ length: 22 }, (_, i) => generateMeteor(i)),
  ).current;

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: "#000300", minHeight: "100vh" }}
    >
      {/* Subtle green grid on bottom-left (like the image) */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: 0,
          bottom: 0,
          width: "28%",
          height: "55%",
          backgroundImage:
            "linear-gradient(rgba(0,194,20,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,20,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 20% 80%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 20% 80%, black 30%, transparent 75%)",
        }}
      />

      {/* Stars */}
      <StarField count={220} />

      {/* Meteors SVG layer */}
      {/* <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="meteorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d6ffe6" stopOpacity="0.0" />
            <stop offset="60%" stopColor="#d6ffe6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#b9ffd1" stopOpacity="1" />
          </linearGradient>

          <filter id="meteorGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {meteors.map((m) => (
          <Meteor key={m.id} {...m} />
        ))}
      </svg> */}

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Content slot */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
