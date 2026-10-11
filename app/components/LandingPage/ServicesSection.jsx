"use client";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, LayoutDashboard } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Business websites",
      desc: "High-performance websites and brand experiences designed for clarity, trust, and conversion across devices and audience segments.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce builds",
      desc: "Scalable storefronts and digital commerce systems with the structure needed for products, customer journeys, and growth operations.",
    },
    {
      icon: LayoutDashboard,
      title: "Custom SaaS and web apps",
      desc: "End-to-end product work from product thinking to deployment, built around real workflows, maintainability, and product usability.",
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
          Product and web development built for real business goals
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-base text-secondary sm:text-lg">
          We help businesses turn ideas into clear digital experiences and reliable software systems with a modern, user-first approach.
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 lg:grid-cols-3"
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
