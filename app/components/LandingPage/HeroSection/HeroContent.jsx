"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Brain } from "lucide-react";

export default function HeroContent() {
  const words = [
    "Intelligent SaaS",
    "Next-Gen Security",
    "AI Innovation",
    "Automation Power",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = words[index % words.length];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="relative py-16 z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4 text-center">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/logo.png"
          alt="Neuctra Logo"
          width={260}
          height={260}
          className="object-contain mb-8"
          style={{ filter: "drop-shadow(0 0 40px #05FF1A)" }}
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl flex flex-col sm:text-5xl md:text-6xl lg:text-6xl px-5 font-extrabold text-white leading-tight mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Empowering your Business with{" "}
        <span className="text-primary">
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block"
          >
            |
          </motion.span>
        </span>
      </motion.h1>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.a
          href="#products"
          className="px-6 py-3 bg-primary font-semibold rounded-lg shadow-[0_0_20px_#00d912]/50 hover:shadow-[0_0_30px_#00ff88]/70 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Products
        </motion.a>

        <motion.a
          href="#solutions"
          className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Solutions
        </motion.a>
      </motion.div>

      {/* Feature Highlights */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 w-full max-w-5xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            icon: <ShieldCheck className="text-primary w-8 h-8" />,
            title: "Enterprise Security",
            desc: "End-to-end encrypted systems ensuring data integrity and trust.",
          },
          {
            icon: <Brain className="text-primary w-8 h-8" />,
            title: "AI-Powered Tools",
            desc: "Harnessing intelligence for smarter workflows and automation.",
          },
          {
            icon: <Zap className="text-primary w-8 h-8" />,
            title: "Lightning Performance",
            desc: "Optimized for speed and reliability, trusted by global teams.",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-[#0f0f0f]/70 border border-[#1f1f1f] hover:border-primary rounded-2xl p-6 text-center hover:shadow-[0_0_30px_#00ff88]/20 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="flex justify-center mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
