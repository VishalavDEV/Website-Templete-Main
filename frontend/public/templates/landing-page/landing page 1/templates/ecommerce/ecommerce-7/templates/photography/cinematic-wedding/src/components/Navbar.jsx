import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/config';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSubpagePath = (path) => {
    return `/templates/photography/cinematic-wedding${path ? '/' + path : ''}`;
  };

  const isActive = (path) => {
    const current = location.pathname.replace(/\/$/, '');
    const target = getSubpagePath(path).replace(/\/$/, '');
    return current === target;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 font-sans ${
          scrolled 
            ? 'bg-black/95 border-b border-white/5 py-4 shadow-lg' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand Name (Left) */}
          <Link 
            to={getSubpagePath("")} 
            className="flex items-center space-x-3 group"
          >
            <span className="text-xl md:text-2xl font-serif tracking-widest text-[#f5f4f1] transition-transform duration-500 group-hover:scale-105">
              {siteConfig.studioName}
            </span>
          </Link>

          {/* Links (Center - Desktop) */}
          <div className="hidden md:flex items-center space-x-12">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.path}
                to={getSubpagePath(link.path)}
                className={`relative text-[10px] uppercase tracking-[0.35em] transition-colors duration-300 ${
                  isActive(link.path) ? 'text-[#c5a880]' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#c5a880]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Contact (Right - Desktop) */}
          <div className="hidden md:block">
            <Link
              to={getSubpagePath("contact")}
              className="px-6 py-2.5 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.2em] text-[#f5f4f1] hover:bg-[#f5f4f1] hover:text-black hover:border-[#f5f4f1] transition-all duration-500"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden flex-col items-end space-y-1.5 z-50 relative group"
            aria-label="Toggle Menu"
          >
            <span className={`h-[1px] w-6 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`h-[1px] w-4 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-[1px] w-5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>

        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-30 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col space-y-8 text-left">
              {siteConfig.navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.path}
                >
                  <Link
                    to={getSubpagePath(link.path)}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl font-serif font-light text-neutral-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-white/10"
              >
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-sans mb-2">Connect</p>
                <a href={`mailto:${siteConfig.socials.email}`} className="text-sm font-sans tracking-wide text-neutral-300 hover:text-[#c5a880]">
                  {siteConfig.socials.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
