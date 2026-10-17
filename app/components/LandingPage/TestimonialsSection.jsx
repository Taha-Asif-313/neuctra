"use client";

import { motion } from "framer-motion";
import { Book, Quote, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "Neuctra understands the difference between building something flashy and building something genuinely useful for real people and businesses.",
      author: "Product founder",
      role: "Startup builder",
      number: "01",
    },
    {
      quote:
        "The ecosystem feels cohesive. It gives a business the tools and product thinking needed to turn an idea into a clear digital system without unnecessary friction.",
      author: "Startup operator",
      role: "Early-stage team",
      number: "02",
    },
    {
      quote:
        "From identity and interfaces to productivity and utilities, the work stays grounded in solving actual problems instead of just adding features.",
      author: "Design-led team",
      role: "Product studio",
      number: "03",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2">
            <Book className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium capitalize text-secondary">
              Our philosophy
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Technology should
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
              solve real problems.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base text-secondary">
            Good software is more than features and interfaces. It is about
            making complex things simpler, helping people work better, and
            turning ideas into practical solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-border to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-7 sm:p-8">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/10" />

                <div className="relative mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>

                  <span className="font-mono text-2xl font-medium text-muted-foreground/30 transition-colors group-hover:text-primary/60">
                    {review.number}
                  </span>
                </div>

                <p className="relative mb-8 grow text-base leading-8 text-secondary">
                  “{review.quote}”
                </p>

                <div className="relative border-t border-border pt-5">
                  <p className="font-semibold text-foreground transition-colors group-hover:text-primary">
                    {review.author}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
