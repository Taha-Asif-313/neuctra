"use client";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  BrainCircuit,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Business websites & digital presence",
      desc: "Modern business websites, landing pages, and digital experiences designed to clarify your message and turn interest into trust and action.",
    },
    {
      icon: ShoppingCart,
      title: "Custom SaaS & web apps",
      desc: "From MVPs to full product experiences, we design and build software that supports real workflows, user journeys, and business operations.",
    },
    {
      icon: LayoutDashboard,
      title: "Frontend systems & product UX",
      desc: "Reusable interfaces, design patterns, and product experiences built to feel clear, scalable, and easy for users to understand.",
    },
    {
      icon: BrainCircuit,
      title: "AI, automation & workflow tooling",
      desc: "Practical AI and automation solutions that reduce repetitive work and help teams move faster without unnecessary complexity.",
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
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />

      {/* Heading */}
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
            What we do
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Technology built around
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            your real-world needs.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base text-secondary"
        >
          From the first idea to a production-ready product, we help founders,
          teams, and businesses turn complex challenges into practical digital
          solutions.
        </motion.p>
      </motion.div>

      {/* Services grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-5 md:grid-cols-2"
      >
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title ?? i}
              variants={cardVariant}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group relative"
            >
              {/* Gradient border */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-border to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-7 sm:p-8">
                {/* Subtle hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/10" />

                <div className="relative mb-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="font-mono text-sm text-muted-foreground/50">
                    0{i + 1}
                  </span>
                </div>

                <div className="relative">
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="text-sm text-secondary">{service.desc}</p>
                </div>

                <div className="relative mt-8 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />

                <div className="relative mt-5 flex items-center gap-3 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  Built around your needs
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
