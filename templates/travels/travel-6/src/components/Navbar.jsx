import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Tours', href: '#tours' },
    { name: 'Shop', href: '#shop' },
    { name: 'Blogs', href: '#blogs' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out py-4 px-6 md:px-12 ${
          isScrolled 
            ? 'bg-near-black/85 backdrop-blur-md shadow-xl border-b border-white/10' 
            : 'bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-script text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-coral to-brand-orange bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
              Explorer
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white/80 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors duration-200 py-2"
                onMouseEnter={() => setHoveredLink(idx)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
                {/* Underline animation */}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-brand-coral to-brand-orange origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredLink === idx ? 1 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#signin" className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200">
              Sign In
            </a>
            <motion.a
              href="#signup"
              className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-brand-coral to-brand-orange shadow-lg hover:shadow-brand-coral/25 flex items-center gap-2 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(242, 84, 91, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-orange p-1 transition-colors duration-200"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-near-black flex flex-col justify-center px-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
          >
            {/* Background Accent Gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-brand-coral/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-6 text-left relative z-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold uppercase tracking-wider text-white hover:text-brand-orange transition-colors"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="h-[1px] bg-white/10 my-4" />

              <div className="flex flex-col gap-4">
                <a
                  href="#signin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white"
                >
                  Sign In
                </a>
                <motion.a
                  href="#signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-coral to-brand-orange shadow-lg flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
