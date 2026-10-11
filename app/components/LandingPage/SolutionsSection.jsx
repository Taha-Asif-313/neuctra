"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Layout, Brain, Cloud, Lock, Zap } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: ShieldCheck,
      title: "Authentication & identity",
      desc: "Secure identity, session management, and application data systems that support product teams and growing digital businesses.",
      link: "https://authix.neuctra.com",
    },
    {
      icon: Layout,
      title: "Modern UI systems",
      desc: "Reusable design patterns, dashboards, and frontend systems that keep interfaces consistent, fast, and familiar for users.",
      link: "https://ui.neuctra.com",
    },
    {
      icon: Brain,
      title: "Productivity & personal organization",
      desc: "Planning tools and digital workflows that help individuals and teams manage responsibilities, ideas, and information.",
      link: "https://notlix.neuctra.com",
    },
    {
      icon: Cloud,
      title: "Cloud-native architecture",
      desc: "Scalable systems designed for modern deployment patterns, performance, and reliable product operations across environments.",
      link: "#",
    },
    {
      icon: Lock,
      title: "Secure software delivery",
      desc: "Practical product security, API protections, and trusted implementation choices that reduce operational risk for real products.",
      link: "#",
    },
    {
      icon: Zap,
      title: "High-performance product work",
      desc: "Streamlined systems and performant interfaces built to support product growth, speed, and better user experience.",
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
          Solution areas
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Practical solutions for modern teams
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-base text-secondary sm:text-lg">
          Neuctra blends product thinking, secure engineering, and product-building expertise for businesses and founders who need software that feels useful from day one.
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
