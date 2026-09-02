import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, GraduationCap, ChevronRight, Search } from 'lucide-react';

export default function FloatingNavbar({ onOpenAdmissions }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/journal' },
    { name: 'Programs', path: '/programs' },
    { name: 'Research', path: '/research' },
    { name: 'Campus', path: '/campus' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      {/* Floating Navbar Dock */}
      <header className="fixed top-0 inset-x-0 z-40 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto transition-all duration-300 rounded-full glass-panel border border-white/10 shadow-2xl flex items-center justify-between ${
            isScrolled
              ? 'py-2.5 px-5 w-full max-w-5xl bg-slate-950/80 backdrop-blur-xl border-electric-500/20 shadow-electric-500/5'
              : 'py-3.5 px-7 w-full max-w-6xl bg-slate-950/60 backdrop-blur-lg'
          }`}
        >
          {/* Institution Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-electric-600 via-violetAccent-500 to-cyan-400 p-0.5 shadow-lg shadow-electric-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-electric-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm md:text-base tracking-widest text-white flex items-center gap-1">
                AETHERIA <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse"></span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 -mt-1 font-mono">
                INSTITUTE
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Items */}
          <ul className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path} className="relative">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-4 py-1.5 text-xs font-medium tracking-wider transition-colors duration-200 block z-10 ${
                        isActive
                          ? 'text-white font-semibold'
                          : 'text-slate-300 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-electric-600 to-violetAccent-600 rounded-full -z-0 shadow-md shadow-electric-500/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate('/programs')}
              aria-label="Search Programs"
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAdmissions}
              data-cursor="APPLY"
              className="relative group px-5 py-2 rounded-full text-xs font-bold tracking-wider text-white overflow-hidden bg-gradient-to-r from-electric-600 via-violetAccent-600 to-electric-500 hover:shadow-lg hover:shadow-electric-500/30 transition-all duration-300 transform active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 group-hover:rotate-45 transition-transform" />
                ADMISSIONS '26
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAdmissions}
              className="px-3 py-1.5 text-[11px] font-bold rounded-full bg-electric-600 text-white"
            >
              APPLY
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-200 hover:bg-white/10 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Animated Overlay Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-slate-950/90 backdrop-blur-2xl flex flex-col justify-between pt-24 px-6 pb-8 md:hidden"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mb-2">
                Navigation Menu
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between text-lg font-display font-semibold py-3 border-b border-white/5 transition-colors ${
                        isActive ? 'text-electric-400 pl-2' : 'text-slate-200 hover:text-white'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-electric-600 to-violetAccent-600 font-bold text-sm tracking-wider text-white shadow-lg shadow-electric-500/20"
              >
                START ADMISSION APPLICATION
              </button>
              <div className="text-center text-[10px] font-mono text-slate-500 tracking-widest">
                AETHERIA UNIVERSITY © 2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
