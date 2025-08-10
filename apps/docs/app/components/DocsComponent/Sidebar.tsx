"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  subLinks?: { label: string; href: string }[];
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>("Basic");

  const navLinks: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Basic",
      subLinks: [
        { label: "Landing Pages", href: "/templates/landing" },
        { label: "Dashboards", href: "/templates/dashboard" },
        { label: "E-commerce", href: "/templates/ecommerce" },
      ],
    },
    { label: "About", href: "/about" },
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <nav className="fixed w-full flex items-center justify-between z-50 lg:hidden py-4 px-4 rounded-md bg-black text-white">
        <div className=" flex items-center justify-between ">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8" />
            <h2 className="text-lg font-semibold">
              Neuctra<span className="text-primary">Ui</span>
            </h2>
          </Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className=" lg:hidden ">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full bg-black text-white rounded-r-3xl w-64 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="p-4 flex items-center justify-between ">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8" />
            <h2 className="text-lg font-semibold">
              Neuctra<span className="text-primary">Ui</span>
            </h2>
            <span className="text-sm">- Docs</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <nav className="p-4 space-y-2">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div key={link.label}>
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className="flex items-center justify-between w-full text-left hover:text-primary transition"
                >
                  {link.label}
                  {activeDropdown === link.label ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                {activeDropdown === link.label && (
                  <div className="ml-2 mt-2">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block text-sm py-1.5 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href || "#"}
                className="block hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

      
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
