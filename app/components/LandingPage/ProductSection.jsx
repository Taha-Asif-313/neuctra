"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      name: "Neuctra Authix",
      image: "/logos/authix.png",
      desc: "Enterprise-grade authentication & authorization infrastructure built for modern applications.",
      features: ["OAuth2", "2FA", "SSO", "Biometrics"],
      links: {
        learn: "https://authix.neuctra.com",
        start: "https://authix.neuctra.com/signup",
      },
      featured: true,
    },
    // ✅ New Product Added
    {
      name: "Neuctra Bynity",
      image: "/logos/bynity.png",
      desc: "Enterprise-ready marketplace infrastructure for seamless selling and order management.",
      features: [
        "Shop Creation",
        "Product Management",
        "Order Management",
        "Order Tracking",
        "Multi-Vendor Support",
      ],
      links: {
        learn: "https://bynity.neuctra.com",
        start: "https://bynity.neuctra.com/signup",
      },
      featured: true,
    },
    {
      name: "Neuctra UI",
      image: "/logos/ui.png",
      desc: "A premium component system powered by Tailwind & Motion for building stunning interfaces.",
      features: ["100+ Components", "Framer Motion", "Tailwind v4"],
      links: {
        learn: "https://ui.neuctra.com",
        start: "https://ui.neuctra.com/docs",
      },
      featured: true,
    },
    {
      name: "Neuctra Codinel",
      image: "/logos/codinel.png",
      desc: "Intelligent productivity platform blending AI planning with mindful performance tracking.",
      features: ["Smart Planning", "Time Intelligence", "Progress Insights"],
      links: {
        learn: "https://codinel.neuctra.com",
        start: "https://codinel.neuctra.com/signup",
      },
      featured: true,
    },
    {
      name: "Neuctra Notlix",
      image: "/logos/notlix.png",
      desc: "AI-powered collaborative workspace for smarter documentation and team productivity.",
      features: ["AI Summaries", "Sync", "Real-time Collaboration"],
      links: {
        learn: "https://notlix.neuctra.com",
        start: "https://notlix.neuctra.com/signup",
      },
    },
    {
      name: "Neuctra LyfeSync",
      image: "/logos/lyfesync.png",
      desc: "Intelligent productivity platform blending AI planning with mindful performance tracking.",
      features: ["Smart Planning", "Time Intelligence", "Progress Insights"],
      links: {
        learn: "https://lyfesync.neuctra.com",
        start: "https://lyfesync.neuctra.com/signup",
      },
    },
  ];

  return (
    <section id="products" className="relative py-28 px-6 md:px-12">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
          The <span className="text-primary">Neuctra</span> Product Suite
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed">
          A unified ecosystem of security, design systems, and AI productivity
          tools engineered for builders and enterprises.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className={`group relative rounded-2xl overflow-hidden border border-white/10 
            bg-zinc-950 backdrop-blur-xl transition-all duration-500
            hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Product Image Preview */}
            <div className="relative h-56 bg-zinc-900/50 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-40 object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {product.featured && (
                <div className="absolute top-5 right-5 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">
                {product.name}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {product.desc}
              </p>

              {/* CTA */}
              <div className="flex gap-4 items-center">
                <motion.a
                  href={product.links.learn}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-sm font-medium text-gray-300 hover:text-white transition"
                >
                  Learn More <ArrowRight className="inline w-4 h-4 ml-1" />
                </motion.a>

                <motion.a
                  href={product.links.start}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="ml-auto bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg 
                  shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
                >
                  Get Started
                  <ArrowRight className="inline w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
