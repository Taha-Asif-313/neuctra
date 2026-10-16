"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

const companyLinks = [
  { label: "About Neuctra", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Neuctra Lab", href: "/neuctra-lab" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/neuctra",
    icon: Github,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/neuctra",
    icon: Linkedin,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background text-secondary">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main footer */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:py-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <Link href="/" className="group mb-5 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card transition-colors group-hover:border-primary/40">
                <img
                  src="/logo.png"
                  alt="Neuctra"
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xl font-semibold tracking-tight text-foreground">
                Neuctra
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-secondary">
              Software products, custom technology solutions, and practical
              education to help people build better things and solve real
              problems.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-accent"
            >
              Let's work together
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </Link>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col items-center gap-4 text-sm lg:items-start"
          >
            <h3 className="mb-1 text-sm font-semibold text-foreground">
              Explore
            </h3>

            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex flex-col items-center gap-4 text-sm lg:items-start"
          >
            <h3 className="mb-1 text-sm font-semibold text-foreground">
              Legal
            </h3>

            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Stay connected
            </h3>

            <p className="max-w-xs text-sm leading-6 text-secondary">
              Follow our work, explore our products, and see what we're building.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-secondary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-muted-foreground">
            © {year} Neuctra. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground">
            Software for building, working, and living.
          </p>
        </div>
      </div>
    </footer>
  );
}