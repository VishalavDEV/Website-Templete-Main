"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-nye-light/95 dark:bg-nye-dark/95 backdrop-blur-md border-b border-nye-dark/10 dark:border-nye-light/10 py-4"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="text-2xl font-black tracking-tighter text-nye-dark dark:text-nye-light flex items-center gap-1 group"
          >
            <span>INTENT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-nye-orange group-hover:translate-x-1 transition-transform"></span>
          </a>

          {/* Center Descriptor (Desktop Only) */}
          <div className="hidden lg:block text-[10px] font-bold tracking-[0.25em] text-nye-dark/50 dark:text-nye-light/50">
            CREATIVE &nbsp;/&nbsp; DIGITAL &nbsp;/&nbsp; STRATEGY
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-wider text-nye-dark/70 dark:text-nye-light/70 hover:text-nye-dark dark:hover:text-nye-light transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nye-orange group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider border border-nye-dark dark:border-nye-light px-5 py-2.5 rounded-full hover:bg-nye-dark hover:text-nye-light dark:hover:bg-nye-light dark:hover:text-nye-dark transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-nye-dark dark:text-nye-light focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-nye-dark text-nye-light flex flex-col justify-between p-8 pt-28"
          >
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-noise pointer-events-none"></div>

            <nav className="flex flex-col gap-6 relative z-10">
              <div className="text-[10px] font-bold tracking-[0.25em] text-nye-light/40 mb-4 uppercase">
                Navigation
              </div>
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-extrabold tracking-tight hover:text-nye-orange transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-6 relative z-10 border-t border-nye-light/10 pt-6"
            >
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between w-full border border-nye-light px-6 py-4 rounded-full text-base font-bold uppercase tracking-wider hover:bg-nye-light hover:text-nye-dark transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <div className="text-xs text-nye-light/50 flex justify-between">
                <span>hello@intentagency.com</span>
                <span>Est. 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
