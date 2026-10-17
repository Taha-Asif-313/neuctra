"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  LineChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function BrandMetricsSection() {
  const highlights = [
    {
      value: "4+",
      label: "Product lines in the ecosystem",
      icon: LineChart,
      detail: "A growing portfolio",
    },
    {
      value: "100%",
      label: "Product-first thinking",
      icon: Code2,
      detail: "Built around real needs",
    },
    {
      value: "24/7",
      label: "Modern execution mindset",
      icon: ShieldCheck,
      detail: "Designed for modern workflows",
    },
  ];

  const brands = [
    "Neuctra Authix",
    "Neuctra UI",
    "Neuctra Notlix",
    "Neuctra Tools",
    "SaaS Solutions",
    "Custom Products",
  ];

  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary/70" />
            <span className="text-xs font-medium capitalize text-secondary">
              Built with purpose
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            More than products.
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
              An ecosystem of solutions.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
            From developer infrastructure to everyday utilities, Neuctra brings
            together practical software products and technology solutions
            designed to solve meaningful problems.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/30 via-border to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col rounded-3xl border border-border bg-background p-7 sm:p-8">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-sm text-muted-foreground/50">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mb-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    {item.value}
                  </div>

                  <p className="text-sm leading-6 text-secondary">
                    {item.label}
                  </p>

                  <div className="mt-8 border-t border-border pt-5">
                    <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ecosystem showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-background"
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative flex flex-col gap-5 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-xs font-medium capitalize tracking-[0.18em] text-primary">
                The ecosystem
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                Different products. One vision.
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                Independent solutions connected by a shared purpose.
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          <div className="relative flex flex-wrap gap-3 p-6 sm:p-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="h-2 w-2 rounded-full bg-primary/60 transition-colors group-hover:bg-primary" />
                <span className="text-sm font-medium text-secondary transition-colors group-hover:text-foreground">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
