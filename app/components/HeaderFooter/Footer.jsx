"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-gray-400 border-t border-white/10 px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-3"
        >
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Neuctra Logo" className="w-10" />
            <h3 className="text-white font-bold text-xl">Neuctra</h3>
          </div>
          <p className="text-sm text-gray-500 text-center md:text-left">
            Empowering businesses with AI-driven, secure, and scalable SaaS solutions.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-3 text-sm"
        >
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <Link href="/#products" className="hover:text-white transition">
            Products
          </Link>
          <Link href="/#solutions" className="hover:text-white transition">
            Solutions
          </Link>
          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="/#contact" className="hover:text-white transition">
            Contact
          </Link>
        </motion.div>

        {/* Legal Links (Important for Paddle) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3 text-sm"
        >
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <Link href="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/refund-policy" className="hover:text-white transition">
            Refund Policy
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <h4 className="text-white font-semibold mb-2">Connect</h4>
          <div className="flex gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500"
      >
        © {year} Neuctra. All rights reserved.
      </motion.div>
    </footer>
  );
}
