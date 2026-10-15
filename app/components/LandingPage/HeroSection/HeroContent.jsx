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
import { Badge } from "@neuctra/ui";

export default function HeroContent() {
  const words = [
    "build useful software",
    "design digital systems clearly",
    "turn ideas into products",
    "grow with practical technology",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    const timeout = setTimeout(
      () => {
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
      },
      isDeleting ? 45 : 90,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge
          text="Software products + custom technology solutions"
          variant="solid"
          size="md"
          rounded={true}
          className="mb-6"
        />
      </motion.div>

      <motion.h1
        className="max-w-5xl text-4xl capitalize font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Neuctra builds
        <span className="mt-3 block text-primary">
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="ml-1 inline-block text-white"
          >
            |
          </motion.span>
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-3xl text-base text-gray-100 sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We build software products for developers, teams, and everyday users
        while helping businesses turn ideas into custom web apps, SaaS
        platforms, internal systems, and digital experiences that solve real
        problems.
      </motion.p>

      <motion.div
        className="mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <Link
          href="/#products"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90 sm:w-auto"
        >
          <span>Explore products</span>
          <ArrowUpRight size={18} />
        </Link>

        <Link
          href="/contact"
          className="group flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary sm:w-auto"
        >
          <span>Discuss your project</span>
          <Mail
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </motion.div>

      <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-4 px-0 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: <ShieldCheck className="h-6 w-6 text-primary" />,
            title: "Secure infrastructure",
          },
          {
            icon: <Layers className="h-6 w-6 text-primary" />,
            title: "Product ecosystem",
          },
          {
            icon: <Cloud className="h-6 w-6 text-primary" />,
            title: "Cloud-native systems",
          },
          {
            icon: <Code className="h-6 w-6 text-primary" />,
            title: "Custom development",
          },
          {
            icon: <Rocket className="h-6 w-6 text-primary" />,
            title: "Product innovation",
          },
          {
            icon: <TrendingUp className="h-6 w-6 text-primary" />,
            title: "Growth strategy",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl border border-border bg-zinc-950 p-5 text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <div className="mb-3 flex justify-center">{feature.icon}</div>
            <p className="text-sm text-gray-100">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
