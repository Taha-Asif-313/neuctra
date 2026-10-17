"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowUpRight, Moon, SunMedium } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Neuctra Lab", path: "/neuctra-lab" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/#contact" },
  ];


return (
  <>
    <motion.nav
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border/80 bg-background"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center px-4 py-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">

        {/* Column 1: Logo */}
        <Link
          href="/"
          className="group flex w-fit items-center gap-1"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Neuctra Logo"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
          />

          <span className="text-xl font-black capitalize text-foreground">
            Neuctra
          </span>
        </Link>

        {/* Column 2: Desktop Navigation */}
        <div className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="group relative whitespace-nowrap py-2 text-sm font-medium text-secondary transition-colors duration-200 hover:text-foreground"
            >
              {item.name}

              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Column 3: Desktop Actions */}
        <div className="hidden items-center justify-end gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary"
            aria-label="Toggle theme"
          >
            {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center justify-end gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary"
            aria-label="Toggle theme"
          >
            {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>

          <motion.button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Menu */}
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Drawer */}
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed right-0 top-0 z-50 flex h-dvh w-[min(20rem,85vw)] flex-col border-l border-border bg-card lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Drawer Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-border p-5">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <img
                  src="/logo.png"
                  alt="Neuctra Logo"
                  className="h-7 w-7 object-contain"
                />

                <span className="text-base font-bold text-foreground">
                  Neuctra
                </span>
              </Link>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:text-foreground"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 space-y-2 overflow-y-auto overscroll-contain p-4">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.05 }}
                >
                  <Link
                    href={item.path}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-secondary transition-colors duration-200 hover:bg-accent hover:text-foreground"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="shrink-0 space-y-3 border-t border-border p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <Link
                href="/contact"
                className="block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
);

}
