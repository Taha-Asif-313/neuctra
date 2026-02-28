"use client";
import { motion } from "framer-motion";
import { Code, Cloud, Shield, Layers } from "lucide-react";

export default function WhyNeuctra() {
  const points = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Custom Web Development Solutions",
      desc: "We design and develop scalable websites, SaaS platforms, e-commerce systems, and admin dashboards tailored for startups, businesses, and growing digital brands.",
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Integrated SaaS Ecosystem",
      desc: "Neuctra builds secure, cloud-native SaaS products including authentication systems, UI frameworks, productivity tools, and developer utilities — all engineered for scalability.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Enterprise-Grade Security",
      desc: "Our platforms follow zero-trust architecture, modern authentication standards, and secure API systems to protect data and ensure reliable digital operations.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Cloud-Native Infrastructure",
      desc: "Optimized for AWS, Firebase, Supabase, and modern cloud environments, our high-performance infrastructure enables businesses to scale efficiently and securely.",
    },
  ];

  return (
    <section className="py-24 px-6 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl mb-3 font-bold">
          Why Choose <span className="text-primary">Neuctra</span>?
        </h2>
        <p className="text-gray-200 mt-4 max-w-3xl mx-auto">
          Neuctra is a modern technology company delivering scalable SaaS products 
          and custom web development services. We combine clean UI/UX design, 
          secure cloud-native architecture, and intelligent automation to help 
          businesses build, launch, and scale powerful digital platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {points.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#111]/60 border border-[#1f1f1f] rounded-xl p-6 hover:border-primary transition-all"
            whileHover={{ y: -6 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}