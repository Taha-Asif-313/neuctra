"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Sparkles, LayoutTemplate, Workflow } from "lucide-react";

export default function FeatureShowcaseSection() {
  const features = [
    {
      icon: Shield,
      title: "Identity foundations",
      text: "Authentication, user identity, and access patterns that help startups and product teams build secure digital experiences faster.",
    },
    {
      icon: LayoutTemplate,
      title: "Modern interfaces",
      text: "Reusable UI patterns and design systems that keep dashboards, forms, and web apps consistent without reinventing the wheel.",
    },
    {
      icon: Workflow,
      title: "Workflow clarity",
      text: "Practical product and business workflows that connect planning, operations, and information management in manageable systems.",
    },
    {
      icon: Sparkles,
      title: "Helpful digital tools",
      text: "Small but useful applications and utilities that solve everyday tasks with less friction, less clutter, and more speed.",
    },
  ];

  return (
<section className="relative overflow-hidden border-y border-border bg-card/20">
  {/* Ambient background */}
  <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-[130px]" />

  <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
    <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            One ecosystem, many solutions
          </span>
        </div>

        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Technology for
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            every layer of work.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-secondary sm:text-lg">
          From developer infrastructure and productivity tools to custom
          business software, Neuctra brings product thinking and practical
          engineering together to solve real-world problems.
        </p>

        <motion.a
          href="/#products"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Explore the ecosystem
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.a>

        <div className="mt-10 flex flex-wrap gap-2">
          {["Developer tools", "Digital products", "Business solutions"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs text-muted-foreground"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </motion.div>

      {/* Feature cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/30 via-border to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative h-full rounded-2xl border border-border bg-background p-6 transition-colors duration-300 group-hover:bg-card">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <span className="font-mono text-sm text-muted-foreground/40 transition-colors group-hover:text-primary/70">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-secondary">
                  {feature.text}
                </p>

                <div className="mt-6 h-px w-10 bg-primary/40 transition-all duration-300 group-hover:w-full" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>
  );
}
