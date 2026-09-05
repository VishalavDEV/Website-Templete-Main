import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useCursor } from '../../context/CursorContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursorState } = useCursor();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[90] transition-all duration-500 ${
          scrolled ? 'py-3 bg-[#05070f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-4 sm:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            onMouseEnter={() => setCursorState('button')}
            onMouseLeave={() => setCursorState('default')}
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shrink-0">
              <div className="w-full h-full bg-[#05070f] rounded-[10.5px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <span className="text-base sm:text-xl md:text-2xl font-extrabold font-syne tracking-tight text-white whitespace-nowrap">
              STUDIO COLLECTIVE<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 glass-panel px-6 py-2.5 rounded-full border border-white/10 shadow-lg">
            {navLinks.map((link) => (
              <MagneticButton key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setCursorState('button')}
                  onMouseLeave={() => setCursorState('default')}
                  className="relative px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium text-slate-300 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-4/5 rounded-full" />
                </a>
              </MagneticButton>
            ))}
          </nav>

          {/* Start Project CTA & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4">
            <MagneticButton>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                onMouseEnter={() => setCursorState('button')}
                onMouseLeave={() => setCursorState('default')}
                className="hidden sm:inline-flex relative items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all duration-300 hover:scale-105"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-[#05070f]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center px-8 pt-24 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-4 max-w-sm mx-auto w-full">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-2xl font-syne font-bold text-slate-200 hover:text-cyan-400 transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                </motion.a>
              ))}

              <div className="mt-8 pt-4 border-t border-white/10 flex flex-col gap-4 text-center">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold tracking-wider uppercase text-sm shadow-lg"
                >
                  Start a Project
                </a>
                <span className="text-xs text-slate-500 uppercase font-mono">hello@loop.agency</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
