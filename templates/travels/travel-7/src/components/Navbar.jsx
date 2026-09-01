import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Compass, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Start Here', href: '#start-here' },
    { name: 'Destinations', href: '#map' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Store', href: '#' },
    { name: 'Contacts', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className={`w-full transition-all duration-300 z-50 ${
      isSticky 
        ? 'fixed top-0 left-0 bg-white shadow-sm py-3' 
        : 'absolute top-0 left-0 bg-transparent py-6 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
            isSticky ? 'bg-accent/10 text-accent' : 'bg-white/10 text-white'
          }`}>
            <Compass className="w-5.5 h-5.5 text-accent" />
          </div>
          <div>
            <span className={`font-display font-extrabold text-xl tracking-tight flex items-center gap-1 transition-colors ${
              isSticky ? 'text-charcoal' : 'text-white'
            }`}>
              TALES<span className="text-accent">.</span>
            </span>
            <span className="block text-[8px] font-bold text-slate-400 tracking-widest uppercase -mt-1.5">
              WANDERLUST JOURNAL
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setActiveLink(link.name);
                handleScrollTo(e, link.href);
              }}
              className={`relative py-1 text-[11px] font-extrabold uppercase tracking-widest transition-colors font-display ${
                isSticky 
                  ? 'text-slate-600 hover:text-accent' 
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Action Button & Menu Icon */}
        <div className="flex items-center gap-4">
          <button 
            aria-label="Search"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isSticky 
                ? 'text-slate-600 hover:text-accent hover:bg-slate-100' 
                : 'text-slate-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <Search className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isSticky 
                ? 'text-slate-600 hover:bg-slate-100' 
                : 'text-slate-200 hover:bg-white/10'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 z-50 flex flex-col p-6 xl:hidden overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                  handleScrollTo(e, link.href);
                }}
                className={`py-3 border-b border-slate-50 text-[11px] font-extrabold uppercase tracking-widest transition-colors font-display ${
                  activeLink === link.name ? 'text-accent' : 'text-slate-600 hover:text-accent'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
