"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Check, Rocket, Search, Workflow } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the problem",
    desc: "We start by understanding the problem, audience, business goals, and technical constraints before choosing the right path forward.",
    icon: Search,
    Visual: DiscoverVisual,
  },
  {
    number: "02",
    title: "Plan & build",
    subtitle: "Turn ideas into reality",
    desc: "We turn the idea into a clear product direction, interface flow, architecture, and implementation grounded in real-world use.",
    icon: Workflow,
    Visual: BuildVisual,
  },
  {
    number: "03",
    title: "Launch & improve",
    subtitle: "Deliver and evolve",
    desc: "We ship what matters, refine based on feedback, and keep improving the product as needs grow and evolve.",
    icon: Rocket,
    Visual: LaunchVisual,
  },
];

export default function ProcessSection() {
  const pinRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(steps.length - 1, Math.floor(value * steps.length)));
  });

  const ActiveVisual = steps[active].Visual;

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Desktop: pinned, driven by scroll */}
      <div ref={pinRef} className="hidden h-[280vh] lg:block">
        <div className="sticky top-16 grid h-[calc(100vh-4rem)] grid-cols-2 items-center gap-16">
          <div>
            <ProcessHeading />

            <ol className="relative mt-8">
              <span className="absolute bottom-6 left-[1.1875rem] top-6 w-px bg-border" />
              <motion.span
                style={{ scaleY: scrollYProgress, originY: 0 }}
                className="absolute bottom-6 left-[1.1875rem] top-6 w-px bg-primary"
              />
              {steps.map((step, index) => (
                <StepRow
                  key={step.number}
                  step={step}
                  isActive={index === active}
                  isDone={index < active}
                />
              ))}
            </ol>
          </div>

          <VisualFrame number={steps[active].number}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <ActiveVisual />
              </motion.div>
            </AnimatePresence>
          </VisualFrame>
        </div>
      </div>

      {/* Mobile: normal flow, each step plays as it enters */}
      <div className="py-24 lg:hidden">
        <ProcessHeading />
        <ol className="mt-10 flex flex-col gap-10">
          {steps.map((step) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <ol>
                <StepRow step={step} isActive isDone={false} />
              </ol>
              <VisualFrame number={step.number} className="mt-4 h-72">
                <div className="absolute inset-0">
                  <step.Visual />
                </div>
              </VisualFrame>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessHeading() {
  return (
    <>
      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary/70" />
        <span className="text-xs font-medium text-secondary">How we work</span>
      </div>

      <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        From the first idea
        <br />
        <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
          to real-world impact.
        </span>
      </h2>

      <p className="mt-4 max-w-xl text-base text-secondary">
        A practical, collaborative process that takes your idea from
        understanding the problem to building, launching, and improving
        software that makes a difference.
      </p>
    </>
  );
}

function StepRow({ step, isActive, isDone }) {
  const Icon = step.icon;

  return (
    <li className="relative flex gap-4 py-2.5">
      <span
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-background transition-colors duration-300 ${
          isActive || isDone
            ? "border-primary text-primary"
            : "border-border text-muted-foreground"
        }`}
      >
        {isDone ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium text-primary">{step.subtitle}</p>
        <h3
          className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${
            isActive ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {step.title}
        </h3>
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ${
            isActive
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden text-sm text-secondary">{step.desc}</p>
        </div>
      </div>
    </li>
  );
}

function VisualFrame({ number, className = "h-[26rem]", children }) {
  return (
    <div
      aria-hidden="true"
      className={`nx-frame relative overflow-hidden rounded-3xl border border-border bg-card ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <span className="absolute right-5 top-4 z-10 font-mono text-sm text-muted-foreground">
        {number}
      </span>
      {children}
    </div>
  );
}

const stagger = (delay) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.35 },
});

function DiscoverVisual() {
  const questions = [
    { label: "Who is it for?", answer: "Audience" },
    { label: "What should change?", answer: "Business goals" },
    { label: "What limits the build?", answer: "Technical constraints" },
  ];

  return (
    <div className="flex h-full flex-col justify-center gap-3 p-6 sm:p-10">
      {questions.map((question, index) => (
        <motion.div
          key={question.label}
          {...stagger(0.1 + index * 0.2)}
          className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-4"
        >
          <span>
            <span className="block text-sm font-medium text-foreground">
              {question.label}
            </span>
            <span className="block text-xs text-muted-foreground">
              {question.answer}
            </span>
          </span>
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.45 + index * 0.2,
              type: "spring",
              stiffness: 320,
              damping: 16,
            }}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Check size={13} />
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

function BuildVisual() {
  const code = [
    "w-1/3 bg-primary/70",
    "w-3/4 bg-muted-foreground/30",
    "w-2/3 bg-muted-foreground/30",
    "w-1/2 bg-primary/40",
    "w-5/6 bg-muted-foreground/30",
    "w-2/5 bg-muted-foreground/30",
    "w-3/5 bg-primary/40",
  ];

  return (
    <div className="grid h-full grid-cols-2 gap-4 p-6 sm:p-10">
      <motion.div
        {...stagger(0.1)}
        className="flex flex-col gap-2 rounded-xl border border-border bg-background p-3"
      >
        <span className="h-4 rounded bg-primary/30" />
        <div className="grid flex-1 grid-cols-[1fr_2fr] gap-2">
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{ originY: 0 }}
            className="rounded bg-muted-foreground/15"
          />
          <div className="grid gap-2">
            {[0, 1, 2].map((item) => (
              <motion.span
                key={item}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + item * 0.12, duration: 0.35 }}
                style={{ originX: 0 }}
                className="rounded bg-muted-foreground/15"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col justify-center gap-3 rounded-xl border border-border bg-background p-4">
        {code.map((line, index) => (
          <motion.span
            key={line}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + index * 0.1, duration: 0.25 }}
            style={{ originX: 0 }}
            className={`h-2 rounded ${line}`}
          />
        ))}
      </div>
    </div>
  );
}

function LaunchVisual() {
  const releases = [
    { name: "First release", width: "w-2/5" },
    { name: "After feedback", width: "w-3/5" },
    { name: "As needs grow", width: "w-full" },
  ];

  return (
    <div className="flex h-full flex-col justify-center gap-5 p-6 sm:p-10">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 160, damping: 14 }}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
      >
        <Rocket className="h-6 w-6" />
      </motion.div>

      {releases.map((release, index) => (
        <div key={release.name}>
          <p className="mb-1.5 text-xs font-medium text-secondary">
            {release.name}
          </p>
          <div className="h-2.5 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25 + index * 0.25,
                duration: 0.5,
                ease: "easeOut",
              }}
              style={{ originX: 0 }}
              className={`h-full rounded-full bg-primary ${release.width}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
