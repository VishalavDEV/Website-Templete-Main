import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  ExternalLink,
  Layers,
  Sparkles,
  Shield,
  BookOpen
} from 'lucide-react';
import { NAV_LINKS } from '../data/navigation';
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const { openAuthModal } = useModal();

  // Handle scroll state for navbar glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const getDropdownIcon = (label) => {
    switch (label) {
      case 'Documentation': return <BookOpen size={18} className="text-amber-400" />;
      case 'Changelog': return <Sparkles size={18} className="text-amber-400" />;
      case 'Community': return <Layers size={18} className="text-amber-400" />;
      default: return <Shield size={18} className="text-amber-400" />;
    }
  };

  return (
    <header 
      className={`navbar-wrapper fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between mx-auto px-4 md:px-8">
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          className="brand-logo flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          aria-label="Flowzen Home"
        >
          <div className="logo-icon w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <Zap className="w-5 h-5 text-black fill-black" />
          </div>
          <div className="flex flex-col">
            <span className="brand-name font-bold text-xl tracking-tight text-white flex items-center gap-1">
              Flowzen
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            if (link.hasDropdown) {
              return (
                <div 
                  key={link.label} 
                  className="relative" 
                  ref={dropdownRef}
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className={`nav-link flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                      activeDropdown === link.label ? 'text-amber-400 bg-white/[0.06]' : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                    aria-expanded={activeDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180 text-amber-400' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-[#0e0e12]/95 border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/80 z-50"
                      >
                        {link.dropdownItems.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                              {getDropdownIcon(subItem.label)}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                                {subItem.label}
                              </div>
                              <div className="text-xs text-zinc-400 line-clamp-1">
                                {subItem.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="nav-link px-3.5 py-1.5 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => openAuthModal('growth')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Get Started
            <ArrowRight size={15} />
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden fixed top-[68px] left-0 right-0 bg-[#070709]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-6 py-6 overflow-y-auto max-h-[85vh] z-50"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium text-zinc-200 hover:text-amber-400 hover:bg-white/[0.04] transition-colors"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={16} className="text-zinc-500" />}
                  </a>
                  {link.hasDropdown && (
                    <div className="pl-4 pr-2 pb-2 space-y-1">
                      {link.dropdownItems.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:text-amber-400 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60"></span>
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAuthModal('growth');
                  }}
                  className="w-full py-3 text-center rounded-xl font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  Start Building Free →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
