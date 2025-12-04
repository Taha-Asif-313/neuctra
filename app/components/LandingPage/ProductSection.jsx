"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      name: "Neuctra Authix",
      image: "/authix.png", // ✅ Add product image
      desc: "Authenticate. Authorize. Secure — all in one API-driven suite.",
      features: ["OAuth2, 2FA, SSO, and Biometrics"],
      links: {
        learn: "https://authix.neuctra.com",
        start: "https://authix.neuctra.com/signup",
      },
    },
    {
      name: "Neuctra UI",
      image: "/ui.png",
      desc: "A modern UI library for developers who love design.",
      features: ["100+ components · Framer Motion · Tailwind v4"],
      links: {
        learn: "https://ui.neuctra.com",
        start: "https://ui.neuctra.com/docs",
      },
    },
    {
      name: "Neuctra Notlix",
      image: "/notlix.png",
      desc: "AI notes. Smarter teams. One seamless workspace.",
      features: ["AI summaries · Sync · Collaboration"],
      links: {
        learn: "https://notlix.neuctra.com",
        start: "https://notlix.neuctra.com/signup",
      },
    },
  ];

  return (
    <section
      id="products"
      className="relative py-24 px-6 md:px-12 bg-[#0b0b0b] text-white overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Explore the <span className="text-primary">Neuctra Suite</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Innovative SaaS tools for security, design, and productivity — built
          for modern creators.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="group relative bg-[#111]/60 border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-primary hover:shadow-[0_0_30px_#00d912]/40 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            {/* Product Image */}
            <div className="h-48 w-full flex items-center justify-center overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.name}
                className="h-28 w-28 object-contain group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Card Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
              <p className="text-gray-400 mb-4">{product.desc}</p>
              <p className="text-sm text-gray-300 mb-8">{product.features}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href={product.links.learn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-primary text-primary font-semibold rounded-lg px-5 py-2 hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More <ArrowRight size={16} />
                </motion.a>

                <motion.a
                  href={product.links.start}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary font-semibold rounded-lg px-5 py-2 hover:shadow-[0_0_20px_#00d912]/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Get Started <ArrowRight size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
