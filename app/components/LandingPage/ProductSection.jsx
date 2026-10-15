"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      name: "Neuctra Authix",
      image: "/logos/authix.png",
      category: "Identity infrastructure",
      desc: "A practical foundation for authentication, user identity, and application data so teams can build products without repeating the same backend setup.",
      links: {
        learn: "https://authix.neuctra.com",
        start: "https://authix.neuctra.com/signup",
      },
      featured: true,
    },
    {
      name: "Neuctra UI",
      image: "/logos/ui.png",
      category: "Design system",
      desc: "Reusable interface components and design patterns for dashboards, forms, product screens, and modern web applications.",
      links: {
        learn: "https://ui.neuctra.com",
        start: "https://ui.neuctra.com/docs",
      },
      featured: true,
    },
    {
      name: "Neuctra Notlix",
      image: "/logos/notlix.png",
      category: "Productivity & life OS",
      desc: "A personal productivity and digital-life platform for planning, notes, memory, and organization without relying on disconnected tools.",
      links: {
        learn: "https://notlix.neuctra.com",
        start: "https://notlix.neuctra.com/signup",
      },
    },
    {
      name: "Neuctra Tools",
      image: null,
      category: "Useful utilities",
      desc: "Fast, accessible browser-based tools for tasks like formatting, conversion, and lightweight digital work that need to feel simple and quick.",
      links: {
        learn: "https://tools.neuctra.com",
        start: "https://tools.neuctra.com",
      },
    },
  ];

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <motion.div
        className="mx-auto mb-12 max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Product ecosystem</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          The <span className="text-primary">Neuctra</span> product ecosystem
        </h2>
        <p className="mt-4 text-base text-secondary sm:text-lg">
          Neuctra builds useful software across developer infrastructure, product interfaces, personal productivity, and everyday utilities.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
          >
            <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-border bg-background/70">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 max-h-32 object-contain transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card text-2xl font-bold text-primary">
                  N
                </div>
              )}

              {product.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                  Featured
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="mb-3 inline-flex w-fit rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {product.category}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{product.name}</h3>
              <p className="mb-6 text-sm text-secondary">{product.desc}</p>

              <div className="mt-auto flex items-center justify-between gap-4">
                <motion.a
                  href={product.links?.learn || "#"}
                  target="_blank"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-1 text-sm font-medium text-secondary transition-colors hover:text-foreground"
                >
                  Learn more
                  <ArrowRight size={16} />
                </motion.a>

                <motion.a
                  href={product.links?.start || "#"}
                  target="_blank"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  Get started
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
