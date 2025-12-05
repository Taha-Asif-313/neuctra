"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import client-only components to avoid hydration issues
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
    // Only run on client
    if (typeof window === "undefined") return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen mx-auto bg-black overflow-hidden">
      <BackgroundCircuit />
      <MouseGlow x={mousePosition.x} y={mousePosition.y} />
      <HeroContent />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
