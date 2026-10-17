"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Shield, Layers, ArrowUpRight } from "lucide-react";

export default function WhyNeuctra() {
  const points = [
    {
      icon: Code,
      title: "Custom product development",
      desc: "We design and build web products, SaaS platforms, internal systems, and digital tools around the real problems businesses and founders need to solve.",
    },
    {
      icon: Layers,
      title: "A connected product ecosystem",
      desc: "Neuctra brings together identity infrastructure, interface systems, productivity tools, and practical software so products and workflows feel more cohesive.",
    },
    {
      icon: Shield,
      title: "Security-minded implementation",
      desc: "Our work balances real product needs with secure architecture, smarter planning, and thoughtful delivery choices that support trust and reliability.",
    },
    {
      icon: Cloud,
      title: "Built for modern delivery",
      desc: "We design for maintainability, performance, and clarity so digital products can scale without becoming harder to manage or understand.",
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
          <span className="text-xs font-medium capitalize text-secondary">
            Why Neuctra
          </span>
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Thoughtful engineering.
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            Practical outcomes.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base text-secondary">
          We combine product thinking, engineering, and design to turn
          complex challenges into software that is useful, maintainable,
          and ready for real world work.
        </p>
      </motion.div>

      {/* Feature cards */}
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {points.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Gradient border */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-border to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-7 sm:p-8">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/10" />

                <div className="relative mb-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="font-mono text-sm text-muted-foreground/50">
                    0{i + 1}
                  </span>
                </div>

                <div className="relative">
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="text-sm text-secondary sm:text-base">
                    {item.desc}
                  </p>
                </div>

                <div className="relative mt-8 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />

                <div className="relative mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                    The Neuctra approach
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}