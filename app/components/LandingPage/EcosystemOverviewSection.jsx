"use client";

import { motion } from "framer-motion";
import { BookOpenText, Boxes, BriefcaseBusiness, Code2 } from "lucide-react";
import HubDiagram from "@/app/components/patterns/HubDiagram";

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
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
      </motion.div>

      <HubDiagram
        items={pillars}
        intro="Four connected parts, one shared purpose. Pick one to see how it fits."
        center={
          <img
            src="/logo.png"
            alt=""
            className="relative h-full w-full rounded-full border border-primary/30 object-cover shadow-[0_0_60px_-10px] shadow-primary/50"
          />
        }
      />
    </section>
  );
}
