"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      name: "Neuctra Authix",
      image: "/logos/authix.png",
      desc: "Secure, scalable authentication and authorization infrastructure for modern applications and SaaS platforms.",
      links: {
        learn: "https://authix.neuctra.com",
        start: "https://authix.neuctra.com/signup",
      },
      featured: true,
    },
    {
      name: "Neuctra Bynity",
      image: "/logos/bynity.png",
      desc: "Powerful multi-vendor marketplace platform designed for seamless selling, management, and growth.",
      links: {
        learn: "https://bynity.neuctra.com",
        start: "https://bynity.neuctra.com/signup",
      },
      featured: true,
    },
    {
      name: "Neuctra UI",
      image: "/logos/ui.png",
      desc: "A modern UI system with production-ready components and animations.",
      links: {
        learn: "https://ui.neuctra.com",
        start: "https://ui.neuctra.com/docs",
      },
      featured: true,
    },
    {
      name: "Neuctra Codinel",
      image: "/logos/codinel.png",
      desc: "AI-powered productivity engine for planning and optimizing workflows.",
      links: {
        learn: "https://codinel.neuctra.com",
        start: "https://codinel.neuctra.com/signup",
      },
      featured: true,
    },
    {
      name: "Neuctra Notlix",
      image: "/logos/notlix.png",
      desc: "Collaborative workspace with AI-assisted documentation and real-time sync.",
      links: {
        learn: "https://notlix.neuctra.com",
        start: "https://notlix.neuctra.com/signup",
      },
    },
    {
      name: "Neuctra LyfeSync",
      image: "/logos/lyfesync.png",
      desc: "Smart life management system for habits, goals, and productivity.",
      links: {
        learn: "https://lyfesync.neuctra.com",
        start: "https://lyfesync.neuctra.com/signup",
      },
    },
  ];

  return (
    <section id="products" className="relative max-w-7xl mx-auto py-28 px-6">
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-3">
          The <span className="text-primary">Neuctra</span> Product Suite
        </h2>
        <p className="text-gray-300 text-lg">
          A unified ecosystem of security, design systems, and AI tools.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 
            bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 backdrop-blur-xl
            transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >


            {/* Image */}
            <div className="relative h-52 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60" />

              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 max-h-36 object-contain transition duration-500 group-hover:scale-110"
              />

              {product.featured && (
                <div className="absolute top-4 right-4 bg-primary   text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition">
                {product.name}
              </h3>

              <p className="text-gray-400 text-sm mb-6">{product.desc}</p>

              {/* CTA */}
              <div className="flex items-center gap-4 mt-auto">
                <motion.a
                  href={product.links?.learn || "#"}
                  target="_blank"
                  whileHover={{ x: 4 }}
                  className="text-sm text-gray-300 hover:text-white flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.a>

                <motion.a
                  href={product.links?.start || "#"}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto bg-primary text-sm font-semibold px-5 py-2 rounded-full 
                  "
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
