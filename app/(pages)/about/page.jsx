"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const strengths = [
  {
    icon: Code,
    title: "Custom Development",
    desc: "We build modern websites, SaaS platforms, dashboards, and digital systems shaped around real business workflows.",
  },
  {
    icon: Layers,
    title: "Product Ecosystem",
    desc: "Neuctra is growing a connected suite of tools for authentication, commerce, UI systems, productivity, and automation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    desc: "Our work is grounded in reliable APIs, modern authentication, scalable infrastructure, and practical security decisions.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Delivery",
    desc: "We design for performance, maintainability, and growth using modern cloud platforms and deployment practices.",
  },
];

const stats = [
  { value: "2", label: "Core business tracks" },
  { value: "6+", label: "Product ideas in motion" },
  { value: "24/7", label: "Digital-first availability" },
];

const principles = [
  "Clean interfaces that make complex systems feel easy to use.",
  "Scalable foundations that can grow with teams and customers.",
  "Fast execution without losing sight of long-term maintainability.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-zinc-800 bg-black/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center md:text-left">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold uppercase tracking-[0.18em] mb-4"
          >
            About Neuctra
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 max-w-4xl"
          >
            Building secure SaaS products and custom digital platforms for
            modern businesses.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-zinc-400 max-w-3xl text-sm sm:text-base leading-relaxed mx-auto md:mx-0"
          >
            Neuctra combines product innovation, custom web development, and
            cloud-native engineering to help startups, businesses, and digital
            brands launch reliable software with a polished user experience.
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
              A technology company with a product-builder mindset.
            </h2>

            <div className="space-y-5 text-zinc-400 text-sm sm:text-base leading-relaxed">
              <p>
                Neuctra operates at the intersection of client services and
                proprietary SaaS products. That means every website, dashboard,
                marketplace, and software platform is approached with the same
                care we give our own products: clear architecture, thoughtful
                design, and room to scale.
              </p>

              <p>
                Our landing page focuses on AI-powered SaaS, secure
                infrastructure, cloud-native systems, and custom development.
                The same foundation guides the company itself: we build tools
                that are practical, reliable, and ready for real users.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-5 bg-[#111] border border-zinc-800 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                What We Focus On
              </h3>
            </div>

            <div className="space-y-4">
              {principles.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mt-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="bg-[#111]/70 border border-zinc-800 rounded-2xl p-5"
            >
              <p className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Why Businesses Choose <span className="text-primary">Neuctra</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            We bring together the speed of a focused development team and the
            discipline of a SaaS company building for long-term product quality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="bg-[#111]/60 border border-[#1f1f1f] rounded-2xl p-6 hover:border-primary transition-all"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-primary" />
                <p className="text-primary text-sm font-semibold uppercase tracking-[0.18em]">
                  Build With Us
                </p>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Have an idea, product, or platform to launch?
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
                From strategy and UI design to full-stack development and
                deployment, Neuctra helps turn digital plans into production
                software.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="/contact"
                className="w-full sm:w-auto text-center bg-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
              >
                Contact Neuctra
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
