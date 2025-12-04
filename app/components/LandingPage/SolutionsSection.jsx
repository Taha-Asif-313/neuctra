"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Layout, Brain, Cloud, Lock, Zap } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: <ShieldCheck className="text-primary w-10 h-10" />,
      title: "Enterprise Security",
      desc: "Protect your infrastructure with AI-enhanced authentication, 2FA, and end-to-end encryption powered by Neuctra Authix.",
      link: "https://authix.neuctra.com",
    },
    {
      icon: <Layout className="text-primary w-10 h-10" />,
      title: "Design Systems",
      desc: "Build stunning interfaces faster with Neuctra UI — 100+ Tailwind and Framer Motion powered components.",
      link: "https://ui.neuctra.com",
    },
    {
      icon: <Brain className="text-primary w-10 h-10" />,
      title: "AI Collaboration",
      desc: "Empower your team with smart note-taking, AI summaries, and real-time sync through Neuctra Notlix.",
      link: "https://notlix.neuctra.com",
    },
    {
      icon: <Cloud className="text-primary w-10 h-10" />,
      title: "Cloud Integration",
      desc: "Seamlessly connect Neuctra APIs with your existing cloud stack — AWS, Firebase, Supabase, or custom setups.",
      link: "#",
    },
    {
      icon: <Lock className="text-primary w-10 h-10" />,
      title: "Zero-Trust Access",
      desc: "Enforce strict identity and session control to eliminate breaches before they happen.",
      link: "#",
    },
    {
      icon: <Zap className="text-primary w-10 h-10" />,
      title: "Performance Optimization",
      desc: "Experience lightning-fast, scalable SaaS architecture optimized for high performance and low latency.",
      link: "#",
    },
  ];

  return (
    <section
      id="solutions"
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
          Discover <span className="text-primary">Neuctra Solutions</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A suite of intelligent, secure, and high-performance SaaS solutions — designed to scale with your vision.
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
            <p className="text-gray-400 text-sm grow">{solution.desc}</p>
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
