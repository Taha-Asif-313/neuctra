"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Brain, Layers, Cloud, Code, Rocket, TrendingUp } from "lucide-react";

export default function HeroContent() {
  const words = [
    "AI-Driven SaaS Solutions",
    "Enterprise-Grade Security",
    "Smart Business Automation",
    "Next-Level Digital Innovation",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = words[index % words.length];
    let speed = isDeleting ? 50 : 90;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="relative py-6 z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4 text-center">
      
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/logo.png"
          alt="Neuctra Logo"
          width={260}
          height={260}
          className="object-contain mb-0"
          priority
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl flex flex-col sm:text-6xl px-5 font-black leading-tight text-white mb-3"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Transforming Businesses with{" "}
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

      {/* Subtext */}
      <motion.p
        className="max-w-4xl text-gray-200 text-base sm:text-lg mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Neuctra delivers scalable, secure, and AI-powered SaaS platforms 
        designed to streamline operations, enhance productivity, 
        and accelerate digital growth.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.a
          href="#products"
          className="px-7 py-3 bg-primary font-semibold rounded-xl hover:shadow-[0_0_20px_#00d912]/60 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>

        <motion.a
          href="#contact"
          className="px-7 py-3 border border-primary text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Demo
        </motion.a>
      </motion.div>
{/* Feature Highlights */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 w-full max-w-5xl px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {[
    {
      icon: <ShieldCheck className="text-primary w-8 h-8" />,
      title: "Secure Digital Infrastructure",
      desc: "Enterprise-grade authentication, encrypted systems, and scalable backend architecture built for modern businesses.",
    },
    {
      icon: <Layers className="text-primary w-8 h-8" />,
      title: "SaaS Ecosystem",
      desc: "A connected suite of powerful products including Authix, UI systems, productivity tools, and commerce platforms.",
    },
    {
      icon: <Cloud className="text-primary w-8 h-8" />,
      title: "Cloud-Native Architecture",
      desc: "High-performance, globally scalable cloud systems designed for reliability, speed, and long-term growth.",
    },
    {
      icon: <Code className="text-primary w-8 h-8" />,
      title: "Custom Web Solutions",
      desc: "Modern web development services delivering secure dashboards, e-commerce platforms, and full-stack applications.",
    },
    {
      icon: <Rocket className="text-primary w-8 h-8" />,
      title: "Product Innovation",
      desc: "We transform internal tools into scalable SaaS products that empower startups, developers, and enterprises.",
    },
    {
      icon: <TrendingUp className="text-primary w-8 h-8" />,
      title: "Growth-Focused Strategy",
      desc: "Hybrid business model combining client services and subscription SaaS to drive sustainable expansion.",
    },
  ].map((feature, idx) => (
    <motion.div
      key={idx}
      className="bg-[#0f0f0f]/70 border border-[#1f1f1f] hover:border-primary rounded-2xl p-6 text-center hover:shadow-[0_0_30px_#00ff88]/20 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.15, duration: 0.6 }}
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