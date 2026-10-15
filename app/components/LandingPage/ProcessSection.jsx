"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      desc: "We start by understanding the problem, audience, business goals, and technical constraints before choosing the right path forward.",
    },
    {
      number: "02",
      title: "Plan & build",
      desc: "We turn the idea into a clear product direction, interface flow, architecture, and implementation grounded in real-world use.",
    },
    {
      number: "03",
      title: "Launch & improve",
      desc: "We ship what matters, refine based on feedback, and keep improving the product as needs grow and evolve.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">How we work</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          A simple path from idea to useful software
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300"
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{step.number}</span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="mb-4 h-2 w-12 rounded-full bg-primary/80" />
            <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="text-sm leading-7 text-secondary">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
