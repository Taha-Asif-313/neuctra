"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-2 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="relative group">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="/logo.png"
                alt="Neuctra"
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
              />
              <span className="hidden sm:block ml-2 text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-300">
                Neuctra
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative group text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-linear-to-r from-primary to-primary/80 font-semibold rounded-full text-sm tracking-wide relative overflow-hidden group"
            >
              <span className="relative z-10">Get in touch</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <motion.button
            className="md:hidden text-white w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-linear-to-b from-zinc-950 to-black border-l border-white/10 shadow-2xl z-50 md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="Neuctra" className="w-10 h-10" />
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-300">
                    Neuctra
                  </h2>
                </div>
                <motion.button
                  className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      className="group flex items-center justify-between text-gray-300 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight
                        className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
                        size={16}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

          {/* CTA Button pinned at bottom */}
<motion.div
  className="flex-shrink-0 p-6 w-full"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  <Link
    href="/contact"
    className="block w-full text-center px-0 py-3.5 bg-gradient-to-r from-primary to-primary/80 font-semibold rounded-xl relative overflow-hidden group"
    onClick={() => setMenuOpen(false)}
  >
    <span className="relative z-10">Get in touch</span>
    <motion.div
      className="absolute inset-0 bg-white/20"
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.5 }}
    />
  </Link>
</motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
