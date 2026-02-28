"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 md:px-12 py-2 max-w-7xl mx-auto">
          {/* Logo with modern animation */}
          <Link href="/" className="relative group">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Neuctra"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover relative z-10"
                />
              </div>
              <span className="hidden sm:block text-lg font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Neuctra
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.path} className="relative group">
                <span className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm tracking-wide">
                  {item.name}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            ))}

            <Link href="/contact"
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
            className="md:hidden text-white relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
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
              className="fixed top-0 right-0 h-full w-72 bg-linear-to-b from-gray-900 to-black border-l border-white/10 shadow-2xl z-50 md:hidden overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Header with close button */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <motion.h2
                  className="text-2xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Neuctra
                </motion.h2>
                <motion.button
                  className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col p-6 space-y-4">
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
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                className="absolute bottom-8 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="/contact"
                  className="w-full px-6 py-3.5 bg-linear-to-r from-primary to-primary/80 font-semibold rounded-xl relative overflow-hidden group"
               
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
