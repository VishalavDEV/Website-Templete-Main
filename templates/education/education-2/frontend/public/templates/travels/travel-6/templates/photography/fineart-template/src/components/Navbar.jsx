import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/config';

export default function App() {
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xs uppercase tracking-[0.2em] text-[#f5f4f1]/80 hover:text-white transition-colors duration-300 font-sans"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger Icon for Mobile (Left side on mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-4 text-[#f5f4f1] focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[1px] w-full bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''
              }`}
            />
            <span
              className={`h-[1px] w-full bg-current transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[1px] w-full bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
              }`}
            />
          </button>

          {/* Center: Brand Logo Wordmark */}
          <a
            href="#"
            className="text-lg font-serif tracking-[0.35em] text-[#f5f4f1] font-light hover:opacity-80 transition-opacity duration-300"
          >
            {siteConfig.studioName}
          </a>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-6">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f4f1]/80 hover:text-[#6b1d2f] transition-colors duration-300"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-sm"></i>
            </a>
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f4f1]/80 hover:text-[#6b1d2f] transition-colors duration-300"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter text-sm"></i>
            </a>
            <a
              href={siteConfig.socials.vimeo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f4f1]/80 hover:text-[#6b1d2f] transition-colors duration-300"
              aria-label="Vimeo"
            >
              <i className="fa-brands fa-vimeo-v text-sm"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center items-center space-y-8"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg uppercase tracking-[0.25em] text-[#f5f4f1] hover:text-[#6b1d2f] transition-colors duration-300 font-sans"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
