"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STATEMENT =
  "We build useful software, solve real-world problems, and share the knowledge that helps people turn technology into something meaningful.";
const HIGHLIGHTED = new Set(["useful", "software,", "real-world", "problems,"]);

export default function ScrollStatement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const words = STATEMENT.split(" ");

  return (
    <section ref={ref} className="relative h-[220vh]">
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <p className="relative mx-auto max-w-5xl text-center text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {words.map((word, index) => (
            <Word
              key={`${word}-${index}`}
              progress={scrollYProgress}
              range={[index / words.length, (index + 1.5) / words.length]}
              highlighted={HIGHLIGHTED.has(word)}
            >
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}

function Word({ progress, range, highlighted, children }) {
  const opacity = useTransform(progress, range, [0.14, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={highlighted ? "text-primary" : "text-foreground"}
    >
      {children}{" "}
    </motion.span>
  );
}
