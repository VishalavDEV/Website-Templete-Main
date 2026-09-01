import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Destination', href: '#destinations' },
    { name: 'Tour', href: '#tours' },
    { name: 'Blog', href: '#blog' },
    { name: 'Hotels', href: '#hotels' },
    { name: 'Pages', href: '#pages' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full bg-white transition-all duration-300 z-40 ${
      isSticky ? 'fixed top-0 left-0 shadow-md py-3' : 'relative py-5 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-[#EBE9FE] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Compass className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
          </div>
          <div>
            <span className="font-sans font-extrabold text-2xl tracking-tight text-slate-800 flex items-center gap-1">
              ROAM<span className="text-primary">IFY</span>
            </span>
            <span className="block text-[9px] font-semibold text-slate-400 tracking-widest uppercase -mt-1">
              YOUR JOURNEY BEGINS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className="relative py-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors font-sans"
            >
              {link.name}
              {activeLink === link.name && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Action Button & Menu Icon */}
        <div className="flex items-center gap-4">
          <button 
            aria-label="Search" 
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 z-50 flex flex-col p-6 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setMobileMenuOpen(false);
              }}
              className={`py-3.5 border-b border-slate-50 text-sm font-bold tracking-wide transition-colors ${
                activeLink === link.name ? 'text-primary' : 'text-slate-600 hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
