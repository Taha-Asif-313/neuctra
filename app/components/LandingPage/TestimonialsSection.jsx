"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "Neuctra understands the difference between building something flashy and building something genuinely useful for real people and businesses.",
      author: "Product founder",
      role: "Startup builder",
    },
    {
      quote:
        "The ecosystem feels cohesive. It gives a business the tools and product thinking needed to turn an idea into a clear digital system without unnecessary friction.",
      author: "Startup operator",
      role: "Early-stage team",
    },
    {
      quote:
        "From identity and interfaces to productivity and utilities, the work always looks grounded in solving actual problems instead of just adding features.",
      author: "Design-led team",
      role: "Product studio",
    },
  ];

  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Perspective</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built around usefulness, clarity, and momentum
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-border bg-background p-6"
            >
              <Quote className="mb-5 h-8 w-8 text-primary" />
              <p className="mb-6 text-base leading-7 text-secondary">“{review.quote}”</p>
              <div>
                <p className="font-semibold text-foreground">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
