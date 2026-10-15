"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Layout, Brain, Cloud, Lock, Zap } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: ShieldCheck,
      title: "Authentication & identity",
      desc: "Build secure identity flows and user data systems that support modern products, startups, and SaaS experiences from day one.",
      link: "https://authix.neuctra.com",
    },
    {
      icon: Layout,
      title: "Modern UI systems",
      desc: "Create consistent dashboards, product interfaces, and digital experiences with reusable patterns and clean frontend architecture.",
      link: "https://ui.neuctra.com",
    },
    {
      icon: Brain,
      title: "Productivity & digital life",
      desc: "Help individuals and teams organize work, information, and decisions with practical tools designed for clarity and routine.",
      link: "https://notlix.neuctra.com",
    },
    {
      icon: Cloud,
      title: "Cloud-native delivery",
      desc: "Design systems for modern deployment, performance, and reliability without overcomplicating the technical foundation.",
      link: "#",
    },
    {
      icon: Lock,
      title: "Secure software delivery",
      desc: "Approach product development with realistic security, thoughtful architecture, and dependable implementation choices.",
      link: "#",
    },
    {
      icon: Zap,
      title: "Product acceleration",
      desc: "Turn rough ideas into clearer products, business systems, and workflows that are easier to use and easier to scale.",
      link: "#",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <section id="solutions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <motion.p variants={fadeUp} className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Where Neuctra creates value
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Solutions designed for meaningful software work
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-base text-secondary sm:text-lg">
          Neuctra connects product strategy, custom development, and useful digital tools so businesses and founders can solve real problems with software that is practical, secure, and easy to grow.
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {solutions.map((solution, index) => {
          const Icon = solution.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">{solution.title}</h3>
              <p className="mb-5 grow text-sm leading-7 text-secondary">{solution.desc}</p>

              <motion.a
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
