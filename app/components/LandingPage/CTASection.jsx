"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-28 px-6 text-center text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-primary/10 blur-3xl opacity-40 pointer-events-none" />

      <motion.h2
        className="relative text-4xl md:text-6xl font-black mb-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Accelerate Your Growth with{" "}<br/>
        <span className="text-primary">AI-Powered SaaS</span>
      </motion.h2>

      <motion.p
        className="relative text-gray-200 max-w-3xl mx-auto mb-10 text-base md:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Neuctra delivers secure, scalable, and intelligent digital platforms 
        designed to automate operations, enhance performance, 
        and future-proof your business in a rapidly evolving world.
      </motion.p>

      <motion.div
        className="relative flex flex-col sm:flex-row items-center justify-center gap-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="/contact"
          className="px-8 py-4 bg-primary rounded-xl font-semibold hover:shadow-[0_0_25px_#00ff88]/60 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          Start Your Project
        </motion.a>

        <motion.a
          href="/solutions"
          className="px-8 py-4 border border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          Explore Solutions
        </motion.a>
      </motion.div>
    </section>
  );
}