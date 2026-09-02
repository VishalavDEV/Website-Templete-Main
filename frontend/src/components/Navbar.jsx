import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/landingData';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-2xl px-4 sm:px-6 py-3'
            : 'glass-pill px-4 sm:px-6 py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl p-[1px] shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--accent-start), var(--accent-mid), var(--accent-end))'
              }}
            >
              <div className="w-full h-full rounded-[11px] flex items-center justify-center"
                style={{ backgroundColor: 'var(--bg-base)' }}
              >
                <motion.div
                  animate={{ rotate: [0, 90, 180, 270, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Layers className="w-5 h-5 transition-colors duration-300"
                    style={{ color: 'var(--accent-mid)' }}
                  />
                </motion.div>
              </div>
              {/* Pulsing micro-sparkle */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: 'var(--accent-mid)' }}
                ></span>
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ backgroundColor: 'var(--accent-mid)' }}
                ></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight flex items-center gap-1.5"
                style={{ color: 'var(--text-main)' }}
              >
                Aether
                <span
                  className="text-xs px-1.5 py-0.5 rounded font-mono font-medium hidden sm:inline-block border"
                  style={{
                    backgroundColor: 'var(--bg-pill)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--accent-start)'
                  }}
                >
                  v2.0
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors relative group"
                style={{ color: 'var(--text-sub)' }}
              >
                {link.name}
                <span
                  className="absolute bottom-1 left-3.5 right-3.5 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"
                  style={{
                    background: 'linear-gradient(to right, var(--accent-start), var(--accent-mid))'
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Actions + Theme Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeSwitcher />

            <button
              onClick={onOpenDemo}
              className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
              style={{ color: 'var(--text-sub)' }}
            >
              Live Demo
            </button>
            <a
              href="#pricing"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              style={{
                background: 'linear-gradient(to right, var(--accent-start), var(--accent-mid))'
              }}
            >
              <span
                className="relative px-4 py-2 transition-all ease-in duration-75 rounded-[10px] flex items-center gap-1.5 text-white font-semibold"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeSwitcher />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg glass-pill"
              style={{ color: 'var(--text-main)' }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-panel p-5 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-medium text-base transition-colors hover:bg-white/10"
                  style={{ color: 'var(--text-main)' }}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-2.5 rounded-xl glass-pill font-medium text-center hover:bg-white/10 transition-colors"
                  style={{ color: 'var(--text-main)' }}
                >
                  Watch Interactive Demo
                </button>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl text-white font-semibold text-center shadow-lg flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(to right, var(--accent-start), var(--accent-mid))'
                  }}
                >
                  Get Started for Free
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
