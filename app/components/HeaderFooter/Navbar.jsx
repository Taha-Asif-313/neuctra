"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/#products" },
    { name: "Solutions", path: "/#solutions" },
    { name: "Contact Us", path: "/#contact" },
  ];

  return (
    <nav className="h-full top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl">
      {/* Top Bar */}
      <motion.div
        className="flex items-center justify-between px-6 md:px-10 py-4"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-white text-xl">
          <img src="/logo.png" alt="Neuctra" className="w-12 h-12 object-contain" />
          <span className="hidden sm:block tracking-tight">Neuctra</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}

          <motion.button
            className="px-5 py-2 bg-primary font-semibold rounded-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(0, 255, 136, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-4/5 sm:w-2/5 bg-black/95 border-l border-primary/20 flex flex-col items-start p-6 space-y-6 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            {/* Header */}
            <div className="flex w-full justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Neuctra</h2>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <X size={26} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col space-y-5 w-full">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <Link
                    href={item.path}
                    className="text-lg text-gray-300 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              className="mt-auto w-full px-6 py-3 bg-primary text-black font-semibold rounded-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 255, 136, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 md:hidden bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
