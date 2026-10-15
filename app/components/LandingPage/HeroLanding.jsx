"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NeuctraCircuitBg from "./HeroSection/NeuctraCircuitBg";

const BackgroundCircuit = dynamic(() => import("./HeroSection/BackgroundCircuit"), {
  ssr: false,
});

const MouseGlow = dynamic(() => import("./HeroSection/MouseGlow"), {
  ssr: false,
});

const HeroContent = dynamic(() => import("./HeroSection/HeroContent"), {
  ssr: false,
});

export default function HeroLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
       <NeuctraCircuitBg className="absolute inset-0 z-0" />
      <MouseGlow x={mousePosition.x} y={mousePosition.y} />
      <HeroContent />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-background" />
    </div>
  );
}
