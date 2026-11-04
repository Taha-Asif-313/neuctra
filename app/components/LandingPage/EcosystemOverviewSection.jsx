"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpenText, Boxes, BriefcaseBusiness, Code2 } from "lucide-react";
import { useMotionStill } from "./motion/MotionPreference";

const CYCLE_MS = 4200;

const pillars = [
  {
    icon: BriefcaseBusiness,
    title: "Neuctra",
    subtitle: "The parent company",
    description:
      "A software products and technology solutions company building digital products and helping businesses turn ideas into practical software solutions.",
    position: { left: "16%", top: "16%" },
    path: "M240 240 C 240 150, 160 77, 77 77",
  },
  {
    icon: BookOpenText,
    title: "Neuctra Lab",
    subtitle: "Learning & education",
    description:
      "An educational platform that teaches technology, practical software development, and business problem-solving through tutorials and real-world examples.",
    position: { left: "84%", top: "16%" },
    path: "M240 240 C 330 240, 403 160, 403 77",
  },
  {
    icon: Boxes,
    title: "Neuctra Products",
    subtitle: "Software built for real use",
    description:
      "A growing ecosystem of digital products, including Authix, UI, Notlix, Tools, Bynity, and Space, designed for developers, businesses, and everyday users.",
    position: { left: "84%", top: "84%" },
    path: "M240 240 C 240 330, 320 403, 403 403",
  },
  {
    icon: Code2,
    title: "Neuctra Services",
    subtitle: "Custom technology solutions",
    description:
      "We help startups, founders, and businesses plan, design, develop, and launch websites, SaaS platforms, web applications, dashboards, and custom digital systems.",
    position: { left: "16%", top: "84%" },
    path: "M240 240 C 150 240, 77 320, 77 403",
  },
];

export default function EcosystemOverviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });
  const still = useMotionStill();
  const [active, setActive] = useState(0);
  const [userChose, setUserChose] = useState(false);

  useEffect(() => {
    if (still || !inView || userChose) return undefined;

    const timer = setTimeout(
      () => setActive((current) => (current + 1) % pillars.length),
      CYCLE_MS,
    );
    return () => clearTimeout(timer);
  }, [active, still, inView, userChose]);

  const choose = (index) => {
    setActive(index);
    setUserChose(true);
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary/70" />
          <span className="text-xs font-medium capitalize text-secondary">
            The Neuctra ecosystem
          </span>
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Technology that
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            builds and empowers.
          </span>
        </h2>
      </motion.div>

      <div
        ref={ref}
        className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16"
      >
        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
          <svg
            viewBox="0 0 480 480"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
          >
            <circle
              className="nx-orbit"
              cx="240"
              cy="240"
              r="222"
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="3 9"
            />
            <circle cx="240" cy="240" r="120" stroke="var(--border)" />
            {pillars.map((pillar, index) => (
              <g key={pillar.title}>
                <path
                  d={pillar.path}
                  stroke={index === active ? "var(--primary)" : "var(--border)"}
                  strokeOpacity={index === active ? 0.35 : 1}
                  strokeWidth="1.5"
                  className="transition-all duration-500"
                />
                {index === active && (
                  <path
                    key={active}
                    d={pillar.path}
                    pathLength={1}
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="nx-comet"
                  />
                )}
              </g>
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-28 sm:w-28">
            <span className="nx-pulse absolute inset-0 rounded-full border border-primary/50" />
            <img
              src="/logo.png"
              alt=""
              className="relative h-full w-full rounded-full border border-primary/30 object-cover shadow-[0_0_60px_-10px] shadow-primary/50"
            />
          </div>

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isActive = index === active;

            return (
              <button
                key={pillar.title}
                type="button"
                onClick={() => choose(index)}
                aria-label={`Show ${pillar.title}`}
                aria-pressed={isActive}
                style={pillar.position}
                className={`absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border bg-card transition-all duration-300 sm:h-16 sm:w-16 ${
                  isActive
                    ? "scale-110 border-primary text-primary shadow-[0_0_40px_-8px] shadow-primary/60"
                    : "border-border text-secondary hover:border-primary/50"
                }`}
              >
                <Icon className="h-6 w-6" />
              </button>
            );
          })}
        </div>

        <div>
          <p className="mb-6 text-base text-secondary sm:text-lg">
            Four connected parts, one shared purpose. Pick one to see how it
            fits.
          </p>
          <ul className="flex flex-col gap-2">
            {pillars.map((pillar, index) => {
              const isActive = index === active;

              return (
                <li key={pillar.title}>
                  <button
                    type="button"
                    onClick={() => choose(index)}
                    aria-expanded={isActive}
                    className={`w-full rounded-2xl border p-5 text-left transition-colors duration-300 ${
                      isActive
                        ? "border-primary/40 bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {pillar.title}
                      </span>
                      <span className="text-xs font-semibold text-primary">
                        {pillar.subtitle}
                      </span>
                    </span>
                    <span
                      className={`grid transition-[grid-template-rows,opacity] duration-400 ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-3 text-sm text-secondary">
                          {pillar.description}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
