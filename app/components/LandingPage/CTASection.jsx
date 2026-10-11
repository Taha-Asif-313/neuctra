"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <motion.div
        className="rounded-3xl border border-border bg-card px-6 py-12 text-center sm:px-10 lg:px-16"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Ready to build</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Turn your idea into a product that feels clear, useful, and scalable.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-secondary sm:text-lg">
          Whether you need a custom SaaS experience, a modern website, or a smarter product workflow, Neuctra can help shape the right technical direction.
        </p>

        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Start your project
          </motion.a>

          <motion.a
            href="/#solutions"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground"
          >
            Explore solutions
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}