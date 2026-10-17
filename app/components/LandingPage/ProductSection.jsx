"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LayoutGrid, Sparkles } from "lucide-react";

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
      desc: "Fast, accessible browser-based tools for formatting, conversion, and everyday digital tasks that need to feel simple and quick.",
      links: {
        learn: "https://tools.neuctra.com",
        start: "https://tools.neuctra.com",
      },
    },
  ];

  return (
    <section
      id="products"
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[130px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2">
          <LayoutGrid className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-medium capitalize text-secondary">
            The Neuctra ecosystem
          </span>
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Software for building,
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            working, and living.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base text-secondary sm:text-lg">
          Explore a growing collection of software products designed to simplify
          development, improve productivity, and make everyday digital work more
          useful.
        </p>
      </motion.div>

      {/* Products grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            {/* Gradient border */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-border to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background">
              {/* Product visual */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-border bg-card/50 sm:h-64">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Decorative grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                <span className="absolute left-6 top-6 font-mono text-xs text-muted-foreground/50">
                  PRODUCT / {String(index + 1).padStart(2, "0")}
                </span>

                {product.featured && (
                  <span className="absolute right-5 top-5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold capitalize text-primary">
                    Featured
                  </span>
                )}

                {product.image ? (
                  <img
                    src={product.image}
                    alt={`${product.name} logo`}
                    loading="lazy"
                    className="relative z-10 max-h-28 max-w-[65%] object-contain transition-transform duration-500 group-hover:scale-110 sm:max-h-32"
                  />
                ) : (
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 text-4xl font-semibold text-primary shadow-[0_0_60px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-110">
                    N
                  </div>
                )}

                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </div>

              {/* Product details */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-border bg-card px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {product.category}
                  </span>

                  <span className="font-mono text-xs text-muted-foreground/40">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  {product.name}
                </h3>

                <p className="mb-8 text-sm text-secondary">{product.desc}</p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                  <motion.a
                    href={product.links.learn}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-label={`Learn more about ${product.name}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
                  >
                    Explore product
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </motion.a>

                  <motion.a
                    href={product.links.start}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(0,0,0,0.12)]"
                  >
                    {product.name === "Neuctra UI"
                      ? "View docs"
                      : "Get started"}
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
