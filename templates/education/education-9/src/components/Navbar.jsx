import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X, User } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/courses', label: 'Courses' },
  { path: '/programs', label: 'Programs' },
  { path: '/instructors', label: 'Instructors' },
  { path: '/resources', label: 'Resources' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/live', label: 'Live' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/75 backdrop-blur-md shadow-md shadow-sky-100/20 border-b border-sky-100/40' 
        : 'py-5 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-sky-200">
            <GraduationCap size={22} className="group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="font-bold text-lg text-education-navy tracking-tight font-outfit">
            Motion<span className="text-sky-500 font-medium">Edu</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1.5 font-outfit">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-200 relative ${
                isActive 
                  ? 'text-sky-600 font-bold' 
                  : 'text-education-navy/70 hover:text-sky-500 hover:bg-sky-50/40'
              }`}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3 font-outfit">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold text-sky-600 bg-sky-50 hover:bg-sky-100 transition-colors"
          >
            <User size={14} />
            Dashboard
          </NavLink>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-xl text-[13px] font-semibold text-white bg-gradient-to-tr from-sky-400 to-cyan-400 hover:shadow-md hover:shadow-sky-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-education-navy/70 hover:text-sky-500 hover:bg-sky-50/50 transition-colors"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-sky-50 bg-white/95 backdrop-blur-md overflow-hidden font-outfit shadow-inner"
          >
            <div className="px-6 py-4 space-y-2 flex flex-col">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive 
                      ? 'text-sky-600 bg-sky-50/50 font-bold' 
                      : 'text-education-navy/70 hover:text-sky-500 hover:bg-sky-50/30'
                  }`}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="h-px bg-sky-50 my-2" />
              <div className="flex gap-4 p-1">
                <Link
                  to="/dashboard"
                  className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold text-sky-600 bg-sky-50 hover:bg-sky-100 transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-tr from-sky-400 to-cyan-400 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
