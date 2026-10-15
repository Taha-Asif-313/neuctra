"use client";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, LayoutDashboard, BrainCircuit } from "lucide-react";

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
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <motion.p variants={fadeUp} className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Services
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Custom software solutions for real business problems
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-base text-secondary sm:text-lg">
          We help founders, teams, and businesses turn ideas into software, experiences, and digital systems that are useful, scalable, and aligned with the work they actually do.
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-7 text-secondary">{service.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
