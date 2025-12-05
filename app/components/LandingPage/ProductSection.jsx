"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

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
    {
      name: "LyfeSync",
      image: "/lyfesync.png",
      desc: "Design your day. Design your life — productivity powered by AI and mindfulness.",
      features: [
        "Smart Task Planning · Time Intelligence · Mindful Productivity · Progress Insights · Life Notes",
      ],
      links: {
        learn: "https://lyfesync.com",
        start: "https://lyfesync.com/signup",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="group relative bg-zinc-950 rounded-xl
      overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300
      flex flex-col h-full" // ← Ensures equal height
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
          >
            {/* Popular Badge */}
            {product.popular && (
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full shadow">
                  Popular
                </span>
              </div>
            )}

            {/* Image/Icon Section */}
            <div className="p-6 pb-0">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-transparent mb-4">
                {product.icon ? (
                  <product.icon className="w-8 h-8 text-primary" />
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-contain"
                  />
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 pt-0 flex flex-col grow">
              {" "}
              {/* ← Fix alignment */}
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h3>
              {/* Tagline */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {product.tagline}
              </p>
              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-5 text-sm leading-relaxed">
                {product.desc}
              </p>
              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Key Features
                    </span>
                  </div>
                  <div className="space-y-2">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Pricing */}
              {product.price && (
                <div className="mb-5 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  {product.savings && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Save {product.savings}% with annual billing
                    </p>
                  )}
                </div>
              )}
              {/* Action Buttons */}
              <div className="mt-auto flex gap-3">
                {" "}
                {/* ← Forces buttons to bottom */}
                <motion.a
                  href={product.links.learn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 
            text-gray-700 dark:text-gray-300 font-medium rounded-lg px-4 py-2.5 
            hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </motion.a>
                <motion.a
                  href={product.links.start}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary/90 text-white font-medium 
            rounded-lg px-4 py-2.5 hover:bg-blue-700 transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <ArrowRight className="w-3 h-3" />
                </motion.a>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl pointer-events-none transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
