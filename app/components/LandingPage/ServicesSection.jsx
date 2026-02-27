"use client";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, LayoutDashboard } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Custom Business Websites",
      desc: "We design and develop high-performance, SEO-optimized business websites with modern UI/UX, responsive architecture, and scalable backend systems tailored to your brand.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
      title: "E-Commerce Development",
      desc: "Secure and scalable e-commerce platforms with integrated payments, product management systems, admin dashboards, and cloud-based infrastructure for growing online businesses.",
    },
    {
      icon: <LayoutDashboard className="w-10 h-10 text-primary" />,
      title: "Custom SaaS & Web Applications",
      desc: "End-to-end SaaS development — from product strategy and system architecture to deployment — built with cloud-native technologies and enterprise-grade security.",
    },
  ];

  return (
    <section className="py-24 px-6 text-white bg-black/40">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Custom Web Development <span className="text-primary">Services</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          Neuctra delivers scalable web development solutions and cloud-native 
          SaaS platforms for startups, businesses, and digital brands — combining 
          clean UI/UX design, secure architecture, and high-performance infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-[#111]/70 border border-[#1f1f1f] p-8 rounded-2xl hover:border-primary transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}