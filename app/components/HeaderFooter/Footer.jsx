"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-secondary">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 md:items-start"
        >
          <Link href="/" className="group flex items-center gap-2">
            <img src="/logo.png" alt="Neuctra Logo" className="h-6 w-6 object-contain" />
            <span className="text-lg font-semibold text-foreground">Neuctra</span>
          </Link>
          <p className="text-center text-sm text-secondary md:text-left">
            Software products, custom solutions, and educational technology experiences that help people solve real problems through technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex flex-col gap-3 text-sm"
        >
          <h4 className="mb-2 text-base font-semibold text-foreground">Company</h4>
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/neuctra-lab" className="transition-colors hover:text-foreground">
            Neuctra Lab
          </Link>
          <Link href="/products" className="transition-colors hover:text-foreground">
            Products
          </Link>
          <Link href="/services" className="transition-colors hover:text-foreground">
            Services
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-3 text-sm"
        >
          <h4 className="mb-2 text-base font-semibold text-foreground">Legal</h4>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/refund-policy" className="transition-colors hover:text-foreground">
            Refund Policy
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-col gap-4"
        >
          <h4 className="mb-2 text-base font-semibold text-foreground">Connect</h4>
          <div className="flex gap-5">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-secondary transition-colors hover:text-primary">
              <Github size={20} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-secondary transition-colors hover:text-primary">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/company/neuctra" target="_blank" rel="noreferrer" className="text-secondary transition-colors hover:text-primary">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground"
      >
        © {year} Neuctra. All rights reserved.
      </motion.div>
    </footer>
  );
}
