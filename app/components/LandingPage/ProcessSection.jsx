"use client";

import { motion } from "framer-motion";
import { Search, Workflow, Rocket, ArrowRight } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Understand the problem",
      desc: "We start by understanding the problem, audience, business goals, and technical constraints before choosing the right path forward.",
      icon: Search,
    },
    {
      number: "02",
      title: "Plan & build",
      subtitle: "Turn ideas into reality",
      desc: "We turn the idea into a clear product direction, interface flow, architecture, and implementation grounded in real-world use.",
      icon: Workflow,
    },
    {
      number: "03",
      title: "Launch & improve",
      subtitle: "Deliver and evolve",
      desc: "We ship what matters, refine based on feedback, and keep improving the product as needs grow and evolve.",
      icon: Rocket,
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[130px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary/70" />
          <span className="text-xs font-medium text-secondary">
            How we work
          </span>
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          From the first idea
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            to real-world impact.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base text-secondary">
          A practical, collaborative process that takes your idea from
          understanding the problem to building, launching, and improving
          software that makes a difference.
        </p>
      </motion.div>

      {/* Process steps */}
      <div className="relative">
        {/* Desktop connecting line */}
        <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[3.5rem] hidden h-px bg-gradient-to-r from-primary/40 via-border to-primary/40 md:block" />

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="group relative"
              >
                {/* Gradient border */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-border to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-7 sm:p-8">
                  {/* Decorative glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/10" />

                  <div className="relative mb-10 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="font-mono text-3xl font-medium tracking-tight text-muted-foreground/30 transition-colors duration-300 group-hover:text-primary/60">
                      {step.number}
                    </span>
                  </div>

                  <div className="relative mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <p className="text-xs font-medium capitalize tracking-[0.16em] text-primary">
                      {step.subtitle}
                    </p>
                  </div>

                  <h3 className="relative mb-4 text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {step.title}
                  </h3>

                  <p className="relative grow text-sm text-secondary sm:text-base">
                    {step.desc}
                  </p>

                  <div className="relative mt-8 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />

                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">
                      Step {step.number}
                    </span>

                    {index < steps.length - 1 ? (
                      <ArrowRight className="h-4 w-4 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    ) : (
                      <Rocket className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
