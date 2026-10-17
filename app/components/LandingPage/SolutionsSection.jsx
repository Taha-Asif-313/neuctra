"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Layout, Brain, Cloud, Lock, Zap, ArrowRight } from "lucide-react";

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
    <section
      id="solutions"
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />

      {/* Section heading */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 max-w-3xl"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary/70" />
          <span className="text-xs font-medium capitalize text-secondary">
            Where we create value
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Real challenges.
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            Thoughtful solutions.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base text-secondary"
        >
          From product strategy to custom software and developer tools, we help
          businesses and founders solve meaningful problems with practical,
          secure, and scalable technology.
        </motion.p>
      </motion.div>

      {/* Solutions grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {solutions.map((solution, index) => {
          const Icon = solution.icon;

          return (
            <motion.div
              key={solution.title ?? index}
              variants={cardVariant}
              transition={{ duration: 0.25 }}
              className="group relative"
            >
              {/* Gradient border */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-border to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-7 sm:p-8">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/10" />

                <div className="relative mb-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="font-mono text-sm text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative grow">
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                    {solution.title}
                  </h3>

                  <p className="text-sm text-secondary">{solution.desc}</p>
                </div>

                <div className="relative mt-8 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />

                <div className="relative mt-5">
                  <motion.a
                    href={solution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Explore solution
                    <ArrowRight
                      aria-hidden="true"
                      size={16}
                      className="text-primary transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
