import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Tours', href: '#tours' },
    { name: 'Packages', href: '#packages' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
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

  return (
    <nav className={`w-full transition-all duration-300 z-40 ${
      isSticky 
        ? 'fixed top-0 left-0 bg-primary shadow-lg py-3' 
        : 'absolute top-[37px] left-0 bg-transparent py-5 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-md shadow-accent/20 group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-white flex items-center gap-1">
              WAY<span className="text-accent">FARER</span>
            </span>
            <span className="block text-[8px] font-bold text-slate-400 tracking-widest uppercase -mt-1">
              TRAVEL & TOURS AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className="relative py-2 text-xs font-extrabold uppercase tracking-widest text-slate-300 hover:text-white transition-colors font-display"
            >
              {link.name}
              {activeLink === link.name && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.04, backgroundColor: '#D05C12' }}
            whileTap={{ scale: 0.96 }}
            href="#packages"
            className="hidden sm:flex items-center gap-1.5 bg-accent text-white text-xs font-extrabold tracking-widest uppercase py-3 px-6 rounded-full shadow-lg shadow-accent/15 cursor-pointer font-display"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
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
          className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md shadow-xl border-t border-slate-800 z-50 flex flex-col p-6 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setMobileMenuOpen(false);
              }}
              className={`py-3.5 border-b border-slate-800/60 text-xs font-bold tracking-widest uppercase transition-colors font-display ${
                activeLink === link.name ? 'text-accent' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 bg-accent text-white text-center py-4 rounded-xl font-bold tracking-widest uppercase text-xs font-display"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </nav>
  );
}
