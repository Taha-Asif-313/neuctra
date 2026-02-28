"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Layout, Brain, Cloud, Lock, Zap } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: <ShieldCheck className="text-primary w-10 h-10" />,
      title: "Authentication & Identity Management",
      desc: "Secure authentication systems with role-based access control, API security, session management, and enterprise-grade identity protection powered by Neuctra Authix.",
      link: "https://authix.neuctra.com",
    },
    {
      icon: <Layout className="text-primary w-10 h-10" />,
      title: "Modern UI & Design Systems",
      desc: "Scalable UI frameworks and reusable component libraries built for SaaS platforms, admin dashboards, and responsive web applications using modern design standards.",
      link: "https://ui.neuctra.com",
    },
    {
      icon: <Brain className="text-primary w-10 h-10" />,
      title: "Productivity & Collaboration Tools",
      desc: "Cloud-based productivity platforms with intelligent automation, workflow optimization, and real-time collaboration for modern digital teams.",
      link: "https://notlix.neuctra.com",
    },
    {
      icon: <Cloud className="text-primary w-10 h-10" />,
      title: "Cloud-Native Architecture",
      desc: "Scalable cloud infrastructure engineered for AWS, Firebase, Supabase, and custom enterprise environments to ensure performance, flexibility, and reliability.",
      link: "#",
    },
    {
      icon: <Lock className="text-primary w-10 h-10" />,
      title: "Secure SaaS Development",
      desc: "Zero-trust architecture, secure backend systems, and protected APIs designed to safeguard data and maintain compliance across digital platforms.",
      link: "#",
    },
    {
      icon: <Zap className="text-primary w-10 h-10" />,
      title: "High-Performance Systems",
      desc: "Optimized SaaS architecture and web applications built for speed, scalability, and seamless user experience across devices and global markets.",
      link: "#",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative py-24 px-6 md:px-12 text-white overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-3">
          Discover <span className="text-primary">Neuctra</span> Solutions
        </h2>
        <p className="text-gray-200 max-w-3xl mx-auto">
          Neuctra delivers scalable SaaS products and custom web development 
          solutions powered by secure cloud-native architecture, modern UI systems, 
          and high-performance infrastructure designed for growing businesses.
        </p>
      </motion.div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className="group bg-[#111]/60 border border-[#1f1f1f] rounded-2xl p-8 hover:border-primary hover:shadow-[0_0_30px_#00d912]/40 transition-all duration-300 flex flex-col items-start space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.7 }}
          >
            <div className="p-3 bg-primary/10 rounded-xl">{solution.icon}</div>
            <h3 className="text-xl font-semibold">{solution.title}</h3>
            <p className="text-gray-400 text-sm grow leading-relaxed">
              {solution.desc}
            </p>
            <motion.a
              href={solution.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Learn More →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}