import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const CinematicNavbar = ({ activeSection, onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profile', href: '#profile' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Films', href: '#films' },
    { name: 'Film Strip', href: '#film-strip' },
    { name: 'Process', href: '#process' },
    { name: 'Career', href: '#career' },
    { name: 'Craft', href: '#craft' },
    { name: 'Recognition', href: '#recognition' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-neutral-200 ${
          scrolled ? 'py-3 shadow-xs' : 'py-4'
        }`}
      >
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* LEFT: Branding */}
          <a
            href="#profile"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#profile');
            }}
            className="group flex items-center gap-3 shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 border border-neutral-900 flex items-center justify-center font-serif-title font-bold text-xs sm:text-sm tracking-widest text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-200 shrink-0">
              ER
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-900 leading-none whitespace-nowrap">
                ELIAS ROWAN
              </span>
              <span className="font-mono-meta text-[9px] sm:text-[10px] tracking-[0.14em] text-neutral-500 uppercase mt-0.5 whitespace-nowrap">
                FILM DIRECTOR • VISUAL STORYTELLER
              </span>
            </div>
          </a>

          {/* CENTER: Desktop Nav (Equal spacing, single line guaranteed) */}
          <nav className="hidden xl:flex items-center justify-center gap-5 lg:gap-6 xl:gap-7 flex-1 px-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative text-[11px] xl:text-xs font-mono-meta tracking-[0.16em] uppercase transition-colors duration-200 py-1 whitespace-nowrap shrink-0 ${
                    isActive ? 'text-neutral-950 font-bold' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-neutral-950"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCV}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-[11px] sm:text-xs font-mono-meta tracking-[0.16em] text-neutral-900 uppercase border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Download CV</span>
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-neutral-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE / TABLET CREDITS MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-neutral-950 text-white flex flex-col justify-between p-8 pt-28 overflow-y-auto xl:hidden"
          >
            <div className="text-center font-mono-meta text-xs tracking-[0.3em] text-neutral-500 uppercase mb-8">
              — FILM CREDITS MENU —
            </div>

            <nav className="flex flex-col items-center gap-5 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-serif-title text-2xl tracking-[0.15em] text-neutral-300 hover:text-white uppercase transition-colors whitespace-nowrap"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.05 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-white text-xs font-mono-meta tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Download Director CV</span>
              </motion.button>
            </nav>

            <div className="text-center font-mono-meta text-[10px] tracking-[0.2em] text-neutral-500 uppercase mt-8 border-t border-neutral-800 pt-4">
              ELIAS ROWAN • TORONTO, CANADA • 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CinematicNavbar;
