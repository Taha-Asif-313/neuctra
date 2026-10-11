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
    { name: "Products", path: "/#products" },
    { name: "Solutions", path: "/#solutions" },
    { name: "Contact Us", path: "/#contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled ? "border-border/80 bg-background/80 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="group flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Neuctra Logo"
                className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <span className="text-base font-semibold tracking-tight text-foreground">
                Neuctra
              </span>
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="relative text-sm font-medium text-secondary transition-colors duration-200 hover:text-foreground"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary"
              aria-label="Toggle theme"
            >
              {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>

            <Link
              href="/contact"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
            >
              Get in touch
            </Link>

            <Link
              href="/space"
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary"
            >
              <span>Go to Neuctra Space</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>

            <motion.button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-background/80 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-border bg-card md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-border p-5">
                <Link href="/" className="flex items-center gap-2">
                  <img src="/logo.png" alt="Neuctra Logo" className="h-6 w-6 object-contain" />
                  <span className="text-base font-semibold text-foreground">Neuctra</span>
                </Link>

                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 space-y-2 overflow-y-auto p-4">
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

              <div className="space-y-3 border-t border-border p-4">
                <Link
                  href="/contact"
                  className="block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  Get in touch
                </Link>

                <Link
                  href="/space"
                  className="block rounded-full border border-border bg-background px-4 py-3 text-center text-sm font-semibold text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  Go to Neuctra Space
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
