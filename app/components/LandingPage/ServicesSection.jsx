"use client";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, LayoutDashboard } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
      title: "Custom Business Websites",
      desc: "We design and develop high-performance, SEO-optimized business websites with modern UI/UX, responsive architecture, and scalable backend systems tailored to your brand.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
      title: "E-Commerce Development",
      desc: "Secure and scalable e-commerce platforms with integrated payments, product management systems, admin dashboards, and cloud-based infrastructure for growing online businesses.",
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
      title: "Custom SaaS & Web Applications",
      desc: "End-to-end SaaS development — from product strategy and system architecture to deployment — built with cloud-native technologies and enterprise-grade security.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-black/40 text-white">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Web <span className="text-primary">Development</span> Services
          </h2>

          <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Neuctra delivers scalable web development solutions and cloud-native 
            SaaS platforms for startups, businesses, and digital brands — combining 
            clean UI/UX design, secure architecture, and high-performance infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-[#111]/60 border border-[#1f1f1f] 
                         p-6 sm:p-8 rounded-2xl 
                         hover:border-primary 
                         hover:bg-[#141414] 
                         transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}