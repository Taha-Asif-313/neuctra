"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Layers,
  Cloud,
  Code,
  Rocket,
  TrendingUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function HeroContent() {
  const words = [
    "build software that matters",
    "design digital systems clearly",
    "turn ideas into product",
    "grow with modern tooling",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1),
      );

      if (!isDeleting && text === current) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6  inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-secondary"
      >
        Software products + custom solutions
      </motion.span>

      <motion.h1
        className="max-w-5xl capitalize text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Neuctra helps teams
        <span className="mt-3 block text-primary">{text}         <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="ml-1 inline-block text-foreground"
        >
          |
        </motion.span></span>

      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl text-base text-secondary sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We build reusable software products and tailor digital solutions for businesses, startups, developers, and individuals who need practical technology that works.
      </motion.p>

      <motion.div
        className="mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <Link
          href="/space"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90 sm:w-auto"
        >
          <span>Go to Neuctra Space</span>
          <ArrowUpRight size={18} />
        </Link>

        <Link
          href="/contact"
          className="group flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary sm:w-auto"
        >
          <span>Get in touch</span>
          <Mail size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

      <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-4 px-0 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: "Secure infrastructure" },
          { icon: <Layers className="h-6 w-6 text-primary" />, title: "SaaS ecosystem" },
          { icon: <Cloud className="h-6 w-6 text-primary" />, title: "Cloud-native" },
          { icon: <Code className="h-6 w-6 text-primary" />, title: "Custom development" },
          { icon: <Rocket className="h-6 w-6 text-primary" />, title: "Product innovation" },
          { icon: <TrendingUp className="h-6 w-6 text-primary" />, title: "Growth strategy" },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl border border-border bg-card p-5 text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <div className="mb-3 flex justify-center">{feature.icon}</div>
            <p className="text-sm text-secondary">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
