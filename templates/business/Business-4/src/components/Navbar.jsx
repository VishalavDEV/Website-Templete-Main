import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Briefcase, Cpu, Palette, BarChart3, Rocket } from 'lucide-react';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'WORK', href: '#work' },
  { name: 'TESTIMONIALS', href: '#testimonials' },
  { name: 'CONTACT', href: '#contact' },
];

const logoIcons = {
  corporate: Briefcase,
  technology: Cpu,
  creative: Palette,
  consulting: BarChart3,
  startup: Rocket,
};

export default function Navbar({ template, onSearchOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const LogoIcon = logoIcons[template.id] || Briefcase;

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      setScrolled(window.scrollY > 50);

      // Track active section for indicator
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.name.toLowerCase());
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(href.substring(1));
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Side: Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="p-2 bg-brand-accent/10 rounded-md text-brand-accent transition-all duration-300"
          >
            <LogoIcon size={20} className="stroke-[2.5]" />
          </motion.div>
          <span className="font-sans font-bold tracking-widest text-lg text-brand-text group-hover:text-brand-accent transition-colors duration-300">
            {template.logoText}
          </span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="flex items-center space-x-2 relative group py-2"
              >
                {/* Custom Dot marker with hover animation */}
                <motion.span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-brand-accent scale-110' : 'bg-brand-muted/30 group-hover:bg-brand-accent group-hover:scale-110'
                  }`}
                  animate={isActive ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <span
                  className={`text-[11px] font-bold tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-brand-text' : 'text-brand-muted group-hover:text-brand-text'
                  }`}
                >
                  {item.name}
                </span>

                {/* Subtle gold line indicator below the active item */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-accent"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Right Side: Search & Mobile Menu Trigger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onSearchOpen}
            className="p-2 text-brand-text hover:text-brand-accent hover:scale-110 transition-all duration-200 focus:outline-none"
            aria-label="Open search"
          >
            <Search size={18} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-text hover:text-brand-accent transition-colors duration-200 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center space-x-3 py-2 text-xs font-bold tracking-widest ${
                      isActive ? 'text-brand-accent' : 'text-brand-text hover:text-brand-accent'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-brand-accent' : 'bg-brand-muted/30'}`} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
