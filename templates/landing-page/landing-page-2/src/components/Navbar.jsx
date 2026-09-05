import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../data/landingData';
import AccentPicker from './AccentPicker';

export default function Navbar({ onOpenContact, onOpenVideo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll Spy for active section
      const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manage body scroll locking when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    document.body.style.overflow = 'auto';
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex justify-center px-3 sm:px-6 py-3 sm:py-4 transition-all duration-300">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-300 rounded-2xl px-3 sm:px-6 py-2.5 sm:py-3 flex-nowrap ${
            isScrolled
              ? 'glass-pill bg-[#0b0f19]/90 border border-white/10 shadow-2xl backdrop-blur-xl py-2 sm:py-2.5'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink-0"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105 shrink-0">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:rotate-180" />
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-40 blur transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5 truncate">
                {BRAND.name}
                <span className="hidden sm:inline-flex text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {BRAND.badge}
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-full glass-panel-subtle">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <AccentPicker />

            <button
              onClick={onOpenContact}
              className="hidden md:inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl btn-primary text-[11px] sm:text-xs font-semibold shadow-lg transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl glass-panel-subtle text-slate-200 hover:text-white border border-white/10 shrink-0 z-50 flex items-center justify-center cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile & Tablet Glass Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-x-3 sm:inset-x-6 md:inset-x-auto md:w-[680px] md:left-1/2 md:-translate-x-1/2 top-[72px] sm:top-20 z-50 lg:hidden rounded-2xl glass-panel bg-[#0b0f19]/98 border border-white/15 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl max-h-[calc(100vh-5.5rem)] overflow-y-auto"
          >
            {/* Drawer Top Header Row */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Navigation Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Links Grid (1 col on mobile, 2 cols on tablet) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 sm:mb-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-purple-600/25 text-white font-semibold border border-purple-500/40 shadow-lg shadow-purple-500/10'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id ? (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Bottom Primary Action CTA */}
            <div className="flex flex-col gap-3 pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  document.body.style.overflow = 'auto';
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl btn-primary text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-500/20"
              >
                <span>Get Started with AETHERIA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
