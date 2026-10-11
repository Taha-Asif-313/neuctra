"use client";
import { motion } from "framer-motion";
import { Code, Cloud, Shield, Layers } from "lucide-react";

export default function WhyNeuctra() {
  const points = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Custom product development",
      desc: "We design and build web products, SaaS platforms, business systems, and dashboards that solve real operational problems for modern teams.",
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Connected software ecosystem",
      desc: "From identity systems to UI libraries and productivity tools, Neuctra brings together product thinking and practical engineering across the stack.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security-minded implementation",
      desc: "Our work is shaped around realistic product needs, secure patterns, and thoughtful architecture that supports reliability and trust.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Built for modern delivery",
      desc: "We design systems for scalability, maintainability, and a smooth user experience across web apps, internal tools, and digital workflows.",
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
          Built for product clarity and execution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-base text-secondary sm:text-lg"
        >
          We combine product strategy, clean engineering, and practical design to help businesses and founders solve real problems with software.
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
