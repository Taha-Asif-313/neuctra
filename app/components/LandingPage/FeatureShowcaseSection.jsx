"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Sparkles, LayoutTemplate, Workflow } from "lucide-react";

export default function FeatureShowcaseSection() {
  const features = [
    {
      icon: Shield,
      title: "Identity infrastructure",
      text: "Authentication, access patterns, and user data systems built to help products launch faster without starting from scratch.",
    },
    {
      icon: LayoutTemplate,
      title: "Modern interfaces",
      text: "Reusable UI blocks and product patterns that keep design systems consistent across dashboards, forms, and web apps.",
    },
    {
      icon: Workflow,
      title: "Operational clarity",
      text: "Tools and workflows that help teams manage tasks, data, notes, and product operations in one place.",
    },
    {
      icon: Sparkles,
      title: "Useful daily utilities",
      text: "Quick, practical online tools that help people work smarter without adding friction or unnecessary complexity.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Platform approach</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            One ecosystem. Multiple tools for real work.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-secondary sm:text-lg">
            Neuctra brings product infrastructure, user experience patterns, and practical digital tools together under one vision so products and teams can move faster with less friction.
          </p>

          <motion.a
            href="/#products"
            whileHover={{ x: 4 }}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Explore the ecosystem
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-6 text-secondary">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
