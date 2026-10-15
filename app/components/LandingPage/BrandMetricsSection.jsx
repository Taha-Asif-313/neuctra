"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ShieldCheck, Sparkles } from "lucide-react";

export default function BrandMetricsSection() {
  const highlights = [
    { value: "4+", label: "Product lines in the ecosystem", icon: Sparkles },
    { value: "100%", label: "Product-first thinking", icon: Code2 },
    { value: "24/7", label: "Modern execution mindset", icon: ShieldCheck },
  ];

  const brands = ["Authix", "Neuctra UI", "Notlix", "Tools", "SaaS", "Custom products"];

  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Built for real software work</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            A product ecosystem designed for real problems, not just surface-level features
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-border bg-background p-6 transition-all duration-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mb-2 text-3xl font-bold tracking-tight text-foreground">{item.value}</div>
                <p className="text-sm leading-6 text-secondary">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 rounded-3xl border border-border bg-background p-5"
        >
          <div className="mb-4 flex items-center justify-between gap-4 text-sm text-secondary">
            <span>Core ecosystem</span>
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </div>

          <div className="flex flex-wrap gap-3">
            {brands.map((brand, index) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-secondary"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
