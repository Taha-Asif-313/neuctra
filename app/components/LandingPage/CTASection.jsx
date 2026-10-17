"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Code2, Lightbulb } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-[2rem]"
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/60 via-primary/10 to-border" />

          {/* Background */}
          <div className="absolute inset-px rounded-[calc(2rem-1px)] bg-background" />

          {/* Ambient glows */}
          <div className="pointer-events-none absolute -left-20 -top-32 h-80 w-80 rounded-full bg-primary/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />

          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">
            <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Have an idea?
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
                Let's make it real.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-secondary">
              From custom software and SaaS platforms to business websites and
              smarter digital workflows, Neuctra helps turn real challenges into
              practical technology solutions.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.a
                href="/contact"
                className="group/button inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground sm:w-auto"
              >
                Discuss your project
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="/#products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors sm:w-auto"
              >
                Explore our products
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
