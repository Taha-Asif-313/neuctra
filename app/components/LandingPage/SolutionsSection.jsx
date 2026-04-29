"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Layout, Brain, Cloud, Lock, Zap } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: ShieldCheck,
      title: "Authentication & Identity Management",
      desc: "Secure authentication systems with role-based access control, API security, session management, and enterprise-grade identity protection powered by Neuctra Authix.",
      link: "https://authix.neuctra.com",
    },
    {
      icon: Layout,
      title: "Modern UI & Design Systems",
      desc: "Scalable UI frameworks and reusable component libraries built for SaaS platforms, admin dashboards, and responsive web applications using modern design standards.",
      link: "https://ui.neuctra.com",
    },
    {
      icon: Brain,
      title: "Productivity & Collaboration Tools",
      desc: "Cloud-based productivity platforms with intelligent automation, workflow optimization, and real-time collaboration for modern digital teams.",
      link: "https://notlix.neuctra.com",
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      desc: "Scalable cloud infrastructure engineered for AWS, Firebase, Supabase, and custom enterprise environments to ensure performance and reliability.",
      link: "#",
    },
    {
      icon: Lock,
      title: "Secure SaaS Development",
      desc: "Zero-trust architecture, secure backend systems, and protected APIs designed to safeguard data and maintain compliance across digital platforms.",
      link: "#",
    },
    {
      icon: Zap,
      title: "High-Performance Systems",
      desc: "Optimized SaaS architecture and web applications built for speed, scalability, and seamless user experience across devices.",
      link: "#",
    },
  ];

  // 🔥 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
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
    hidden: { opacity: 0, y: 60, scale: 0.95 },
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
    <section
      id="solutions"
      className="relative py-24 px-6 max-w-7xl mx-auto text-white overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }} // 🔹 Repeat animation on scroll
        className="text-center mb-16"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold mb-3"
        >
          Discover <span className="text-primary">Neuctra</span> Solutions
        </motion.h2>

        <motion.p variants={fadeUp} className="text-gray-200 max-w-3xl mx-auto">
          Neuctra delivers scalable SaaS products and custom web development
          solutions powered by secure cloud-native architecture and
          high-performance infrastructure.
        </motion.p>
      </motion.div>

      {/* Solutions Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }} // 🔹 Repeat animation on scroll
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {solutions.map((solution, index) => {
          const Icon = solution.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                y: -10,
                boxShadow: "0px 0px 45px rgba(0,255,136,0.15)",
              }}
              transition={{ duration: 0.3 }}
              className="group bg-[#111]/60 border border-[#1f1f1f] 
                         rounded-2xl p-8 
                         hover:border-primary 
                         hover:bg-[#151515]
                         transition-all duration-300 
                         flex flex-col items-start space-y-4"
            >
              {/* Icon Animation */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 bg-primary/10 rounded-xl text-primary"
              >
                <Icon className="w-10 h-10" />
              </motion.div>

              <h3 className="text-xl font-semibold">{solution.title}</h3>

              <p className="text-gray-400 text-sm grow leading-relaxed">
                {solution.desc}
              </p>

              <motion.a
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-primary font-medium flex items-center gap-2"
              >
                Learn More →
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
