import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Packages', href: '#packages' },
    { name: 'About', href: '#about' },
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
    <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
      isSticky 
        ? 'bg-white shadow-md py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-2 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
            isSticky ? 'bg-[#2563EB] text-white' : 'bg-white/20 text-[#FACC15]'
          }`}>
            <Compass className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <span className={`font-sans font-black text-xl tracking-tight transition-colors ${
              isSticky ? 'text-[#0F172A]' : 'text-white'
            }`}>
              EXPLORIA<span className="text-[#FACC15]">.</span>
            </span>
            <span className="block text-[8px] font-bold text-slate-400 tracking-wider uppercase -mt-1.5">
              TRAVEL COMPANY
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setActiveLink(link.name);
                handleScrollTo(e, link.href);
              }}
              className={`relative py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                isSticky 
                  ? 'text-slate-600 hover:text-[#2563EB]' 
                  : 'text-slate-100 hover:text-[#FACC15]'
              }`}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.div
                  layoutId="navUnderline6"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FACC15]"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Action Button & Menu Icon */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Booking panel opened')}
            className={`hidden sm:inline-block text-xs font-black uppercase tracking-wider py-3 px-6 rounded-full shadow-md transition-all cursor-pointer ${
              isSticky 
                ? 'bg-[#2563EB] text-white hover:bg-[#1E3A8A]' 
                : 'bg-[#FACC15] text-[#0F172A] hover:bg-yellow-400'
            }`}
          >
            Book Now
          </motion.button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
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
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 z-50 flex flex-col p-6 lg:hidden overflow-hidden"
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
                className={`py-3 border-b border-slate-50 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeLink === link.name ? 'text-[#2563EB]' : 'text-slate-600 hover:text-[#2563EB]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                alert('Booking panel opened');
              }}
              className="mt-4 w-full bg-[#FACC15] text-[#0F172A] text-xs font-black uppercase py-3 rounded-full hover:bg-yellow-400 cursor-pointer"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
