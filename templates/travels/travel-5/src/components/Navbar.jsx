import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, Globe } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Featured Tours', href: '#tours' },
    { name: 'Customize Trip', href: '#customize' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-secondary/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-primary p-2 rounded-full text-white shadow-md shadow-primary/20"
            >
              <Compass className="w-6 h-6" />
            </motion.div>
            <span className="font-extrabold text-2xl tracking-tight text-white flex items-center">
              Roam<span className="text-accent-yellow font-light italic">&</span>Wild
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-accent-yellow font-medium text-sm tracking-wider uppercase transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#customize"
              className="bg-primary text-white font-semibold text-sm uppercase tracking-wider py-3 px-6 rounded-full shadow-lg shadow-primary/30 hover:bg-primary-dark transition-colors inline-block"
            >
              Book Adventure
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent-yellow p-1 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-secondary flex flex-col justify-center px-8 py-20 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-accent-yellow font-bold text-2xl tracking-wider uppercase transition-colors py-2"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.95 }}
                href="#customize"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white font-bold text-lg uppercase tracking-wider py-4 px-8 rounded-full shadow-lg shadow-primary/30 mt-6 inline-block"
              >
                Book Adventure
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
