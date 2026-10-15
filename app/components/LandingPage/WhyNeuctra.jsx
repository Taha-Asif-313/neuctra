"use client";
import { motion } from "framer-motion";
import { Code, Cloud, Shield, Layers } from "lucide-react";

export default function WhyNeuctra() {
  const points = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Custom product development",
      desc: "We design and build web products, SaaS platforms, internal systems, and digital tools around the real problems businesses and founders need to solve.",
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "A connected product ecosystem",
      desc: "Neuctra brings together identity infrastructure, interface systems, productivity tools, and practical software so products and workflows feel more cohesive.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security-minded implementation",
      desc: "Our work balances real product needs with secure architecture, smarter planning, and thoughtful delivery choices that support trust and reliability.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Built for modern delivery",
      desc: "We design for maintainability, performance, and clarity so digital products can scale without becoming harder to manage or understand.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Why Neuctra
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          A company built around useful software and practical execution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-base text-secondary sm:text-lg"
        >
          We combine product strategy, engineering, and design to help people and businesses build software that feels clear, useful, and ready for real-world use.
        </motion.p>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {points.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm leading-7 text-secondary">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
