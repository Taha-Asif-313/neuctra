"use client";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, LayoutDashboard } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Custom Business Websites",
      desc: "We design and develop high-performance, SEO-optimized business websites with modern UI/UX, responsive architecture, and scalable backend systems tailored to your brand.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      desc: "Secure and scalable e-commerce platforms with integrated payments, product management systems, admin dashboards, and cloud-based infrastructure for growing online businesses.",
    },
    {
      icon: LayoutDashboard,
      title: "Custom SaaS & Web Applications",
      desc: "End-to-end SaaS development — from product strategy and system architecture to deployment — built with cloud-native technologies and enterprise-grade security.",
    },
  ];

  // 🔥 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-black/40 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Web <span className="text-primary">Development</span> Services
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"
          >
            Neuctra delivers scalable web development solutions and cloud-native
            SaaS platforms for startups, businesses, and digital brands —
            combining clean UI/UX design, secure architecture, and
            high-performance infrastructure.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 0px 40px rgba(0,255,136,0.15)",
                }}
                transition={{ duration: 0.3 }}
                className="group bg-[#111]/60 border border-[#1f1f1f]
                           p-6 sm:p-8 rounded-2xl
                           hover:border-primary
                           hover:bg-[#141414]
                           transition-all duration-300"
              >
                {/* Icon Animation */}
                <motion.div className="mb-4 text-primary">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
