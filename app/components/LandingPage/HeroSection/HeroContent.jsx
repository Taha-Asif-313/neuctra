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
  ArrowUp01,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function HeroContent() {
  const words = [
    "AI Driven SaaS Solutions",
    "Enterprise Grade Security",
    "Smart Business Automation",
    "Next Level Digital Innovation",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ✅ FIXED typing logic
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
      isDeleting ? 50 : 90,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="relative z-10 max-w-7xl flex flex-col items-center justify-center min-h-screen px-6 mx-auto text-center pt-24 pb-16">
      {/* 🔥 Headline */}
      <motion.h1
        className="text-4xl sm:text-6xl font-black leading-tight text-white max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Transforming Businesses with{" "}
        <span className="text-primary block mt-2">
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </span>
      </motion.h1>

      {/* 🔥 Subtext */}
      <motion.p
        className="max-w-2xl text-gray-300 text-base sm:text-lg mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Neuctra builds scalable, secure, and AI-powered SaaS platforms that
        streamline operations, boost productivity, and accelerate growth.
      </motion.p>

      {/* 🔥 CTA */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Space CTA */}
        <Link
          href="/space"
          className="flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full font-semibold bg-primary hover:bg-primary/90 transition-colors duration-300 px-6 sm:px-10 py-2.5 text-sm text-white"
        >
          <span>Go to Neuctra Space</span>
          <ArrowUpRight size={18} />
        </Link>

        {/* Contact CTA */}
        <Link
          href="/contact"
          className="group flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full border border-white bg-transparent px-6 sm:px-8 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary hover:border-primary"
        >
          <span>Get in touch</span>

          <Mail
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </motion.div>

      {/* 🔥 Features (moved lower + lighter feel) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24 w-full max-w-5xl px-4">
        {[
          {
            icon: <ShieldCheck className="text-primary w-7 h-7" />,
            title: "Secure Infrastructure",
          },
          {
            icon: <Layers className="text-primary w-7 h-7" />,
            title: "SaaS Ecosystem",
          },
          {
            icon: <Cloud className="text-primary w-7 h-7" />,
            title: "Cloud-Native",
          },
          {
            icon: <Code className="text-primary w-7 h-7" />,
            title: "Custom Development",
          },
          {
            icon: <Rocket className="text-primary w-7 h-7" />,
            title: "Product Innovation",
          },
          {
            icon: <TrendingUp className="text-primary w-7 h-7" />,
            title: "Growth Strategy",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-[#0f0f0f]/60 border border-[#1f1f1f] hover:border-primary rounded-xl p-5 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex justify-center mb-2">{feature.icon}</div>
            <p className="text-sm text-gray-300">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
