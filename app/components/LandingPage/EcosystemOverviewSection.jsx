"use client";

import { motion } from "framer-motion";
import { BookOpenText, Boxes, BriefcaseBusiness } from "lucide-react";

const pillars = [
  {
    icon: BriefcaseBusiness,
    title: "Neuctra",
    subtitle: "The parent company",
    description:
      "Neuctra builds software products and delivers custom technology solutions for founders, teams, and businesses that want practical digital systems.",
  },
  {
    icon: BookOpenText,
    title: "Neuctra Lab",
    subtitle: "The educational platform",
    description:
      "Neuctra Lab teaches technology, practical software development, and business problem-solving through accessible tutorials, explanations, and real-world examples.",
  },
  {
    icon: Boxes,
    title: "Neuctra Products & Services",
    subtitle: "Built for real use",
    description:
      "The ecosystem includes Authix, UI, Notlix, Tools, and future products alongside custom SaaS, web apps, and tailored technology services.",
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
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2">
      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary/70" />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
        The Neuctra ecosystem
      </span>
    </div>

    <h2 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
      Technology that
      <br />
      <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
        builds and empowers.
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
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

          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-7 transition-all duration-300 sm:p-8">
            <div className="mb-10 flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300">
                <Icon className="h-6 w-6" />
              </div>

              <span className="font-mono text-sm text-muted-foreground/60">
                0{index + 1}
              </span>
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {pillar.subtitle}
            </p>

            <h3 className="mb-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {pillar.title}
            </h3>

            <p className="text-sm leading-7 text-secondary sm:text-base">
              {pillar.description}
            </p>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />

            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
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
