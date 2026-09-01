import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/services', label: 'SERVICES' },
    { path: '/portfolio', label: 'PORTFOLIO' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 px-4 md:px-8 py-4">
        <motion.div
          animate={{
            paddingTop: isScrolled ? '10px' : '16px',
            paddingBottom: isScrolled ? '10px' : '16px',
          }}
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-slate-950/80 backdrop-blur-md border border-slate-800/40 shadow-xl text-white'
              : 'bg-white/95 backdrop-blur-sm border border-indigo-50/50 shadow-sm text-slate-800'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold tracking-tight text-base md:text-lg">
            <Rocket size={18} className="text-purple-600 animate-bounce" />
            <span className={`font-extrabold font-mono uppercase tracking-widest ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
              LUMORA LABS
            </span>
          </Link>

          {/* Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-bold font-mono">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 uppercase tracking-widest relative py-1 ${
                    isActive
                      ? isScrolled ? 'text-purple-400' : 'text-purple-600'
                      : isScrolled ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-purple-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="text-[10px] md:text-xs font-bold tracking-widest bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl transition-all duration-300 uppercase shadow-md shadow-purple-500/20"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 focus:outline-none transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={20} className={isScrolled ? 'text-white' : 'text-slate-800'} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={20} className={isScrolled ? 'text-white' : 'text-slate-800'} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </header>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`fixed inset-x-6 top-24 z-30 md:hidden p-6 rounded-2xl shadow-xl border flex flex-col space-y-4 font-mono font-bold text-xs uppercase ${
              isScrolled
                ? 'bg-slate-950/95 border-slate-800 text-slate-300 backdrop-blur-md'
                : 'bg-white/95 border-slate-100 text-slate-600 backdrop-blur-sm'
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-2 block tracking-widest ${isActive ? 'text-purple-600' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl uppercase tracking-wider block"
            >
              Partner With Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
