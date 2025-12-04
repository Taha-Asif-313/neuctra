"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-gray-400 border-t border-white/10 px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo & Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center max-sm:justify-center gap-1"
        >
          <img src="/logo.png" alt="Neuctra Logo" className="w-12" />
          <h3 className="text-white font-bold text-xl">Neuctra</h3>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-8 text-sm"
        >
          <Link href="/#products" className="hover:text-white transition">
            Products
          </Link>
          <Link href="/#solutions" className="hover:text-white transition">
            Solutions
          </Link>
          <Link href="/#contact" className="hover:text-white transition">
            Contact
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center md:justify-end gap-6"
        >
          <a href="#" className="hover:text-primary transition">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-primary transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-primary transition">
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center text-xs text-gray-500"
      >
        © {year} Neuctra. All rights reserved.
      </motion.div>
    </footer>
  );
}
