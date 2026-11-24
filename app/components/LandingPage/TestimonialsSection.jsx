"use client";

import { motion } from "framer-motion";
import { BookOpen, Boxes, Lightbulb } from "lucide-react";

const principles = [
  {
    icon: Lightbulb,
    title: "Start with the problem",
    description: "Understand the people, workflow, and constraints before deciding what software to build.",
  },
  {
    icon: Boxes,
    title: "Choose an appropriate solution",
    description: "Use an existing product, a focused custom build, an integration, or a process change according to the need.",
  },
  {
    icon: BookOpen,
    title: "Share practical knowledge",
    description: "Neuctra Lab explains technology and product-building through accessible, real-world learning.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30">
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">How Neuctra works</p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Technology should solve a real problem.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-secondary">Good software starts with a clear understanding of what people need to do. That principle guides Neuctra&apos;s products, client work, and educational content.</p>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, description }, index) => <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.45 }} className="rounded-3xl border border-border bg-background p-7 sm:p-8">
            <Icon className="mb-6 h-7 w-7 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-secondary">{description}</p>
          </motion.article>)}
        </div>
      </div>
    </section>
  );
}
