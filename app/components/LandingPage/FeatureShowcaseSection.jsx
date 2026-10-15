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
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">One ecosystem, many solutions</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Neuctra powers products, systems, and workflows across the digital stack.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-secondary sm:text-lg">
            From developer infrastructure and reusable UI to personal productivity tools and custom business software, Neuctra combines product thinking with practical engineering to solve real problems in a clearer, more useful way.
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
