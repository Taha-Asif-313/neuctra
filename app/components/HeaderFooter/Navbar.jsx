"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Rocket } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
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
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5 max-w-7xl mx-auto">
          {/* LEFT SIDE: Logo + Nav */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Neuctra Logo"
                className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-gray-300">
                Neuctra
              </span>
            </Link>

            {/* Desktop Menu (moved LEFT) */}
            <div className="hidden md:flex items-center gap-8">
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
            </div>
          </div>

          {/* RIGHT SIDE: Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* CTA */}
            <Link
              href="/contact"
              className="px-5 py-1.5 bg-primary font-semibold rounded-full text-[13px] relative overflow-hidden group"
            >
              <span className="relative z-10">Get in touch</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Link>

            {/* Space Button */}
            <motion.button
              onClick={() => router.push("/space")}
              whileHover={{
                boxShadow: "0 0 25px rgba(0, 194, 20,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              className="relative px-6 py-1.5 rounded-full text-white font-medium tracking-wide overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 194, 20,0.12), rgba(0, 194, 20,0.35))",
              }}
            >
              {/* glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(0, 194, 20,0.25), transparent 60%)",
                }}
              />

              {/* shimmer */}
              <motion.div
                className="absolute inset-0"
                animate={{ x: ["-120%", "120%"] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0, 194, 20,0.2), transparent)",
                }}
              />

              <span className="relative z-10 flex items-center gap-2 text-[13px]">
                Go to Neuctra Space <Rocket size={16} />
              </span>
            </motion.button>
          </div>

          {/* Mobile */}
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
              <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
                {/* Logo */}
                <Link href="/" className="relative group flex items-center">
                  <div className="flex items-center gap-2">
                    {/* Logo Image */}
                    <img
                      src="/logo.png"
                      alt="Neuctra Logo"
                      className="w-6 h-6 object-contain transition-transform duration-300"
                    />

                    {/* Brand Text */}
                    <span
                      className=" text-lg font-bold tracking-tight 
      bg-clip-text text-transparent 
      bg-linear-to-r from-white to-gray-300"
                    >
                      Neuctra
                    </span>
                  </div>
                </Link>
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
                className="shrink-0 p-6 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="block w-full text-center px-0 py-3.5 bg-linear-to-r from-primary to-primary/80 font-semibold rounded-xl relative overflow-hidden group"
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
