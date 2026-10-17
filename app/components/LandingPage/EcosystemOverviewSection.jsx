"use client";

import { motion } from "framer-motion";
import { BookOpenText, Boxes, BriefcaseBusiness, Code2 } from "lucide-react";

const pillars = [
  {
    icon: BriefcaseBusiness,
    title: "Neuctra",
    subtitle: "The parent company",
    description:
      "A software products and technology solutions company building digital products and helping businesses turn ideas into practical software solutions.",
  },
  {
    icon: BookOpenText,
    title: "Neuctra Lab",
    subtitle: "Learning & education",
    description:
      "An educational platform that teaches technology, practical software development, and business problem-solving through tutorials and real-world examples.",
  },
  {
    icon: Boxes,
    title: "Neuctra Products",
    subtitle: "Software built for real use",
    description:
      "A growing ecosystem of digital products, including Authix, UI, Notlix, Tools, Bynity, and Space, designed for developers, businesses, and everyday users.",
  },
  {
    icon: Code2,
    title: "Neuctra Services",
    subtitle: "Custom technology solutions",
    description:
      "We help startups, founders, and businesses plan, design, develop, and launch websites, SaaS platforms, web applications, dashboards, and custom digital systems.",
  },
];

export default function EcosystemOverviewSection() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary/70" />
          <span className="text-xs font-medium capitalize text-secondary">
            The Neuctra ecosystem
          </span>
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Technology that
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            builds and empowers.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base text-secondary sm:text-lg">
          We build useful software, solve real-world problems, and share the
          knowledge that helps people turn technology into something meaningful.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/30 via-border to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 sm:p-8">
                <div className="mb-10 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="font-mono text-sm text-secondary">
                    0{index + 1}
                  </span>
                </div>

                <p className="mb-1 text-xs font-semibold capitalize text-primary">
                  {pillar.subtitle}
                </p>

                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {pillar.title}
                </h3>

                <p className="text-sm text-secondary">{pillar.description}</p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-secondary transition-colors group-hover:text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  Part of the Neuctra ecosystem
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
