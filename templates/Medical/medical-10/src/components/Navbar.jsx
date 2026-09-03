import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse, Menu, X, Phone, Calendar, ChevronRight } from "lucide-react";

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Doctors", path: "/doctors" },
    { name: "Departments", path: "/departments" },
    { name: "Services", path: "/services" },
    { name: "Diagnostics", path: "/diagnostics" },
    { name: "Packages", path: "/packages" },
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-xl" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform glow-cyan">
              <HeartPulse className="w-6 h-6 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white flex items-center">
                AICARE<span className="text-cyan-400">PLUS</span>
                <span className="ml-1 text-[9px] uppercase px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30">
                  AI
                </span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider font-medium">
                Next-Gen Healthcare
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all relative ${
                    isActive
                      ? "text-cyan-400 bg-white/5"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+18007857322"
              className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 animate-bounce text-red-400" />
              <span className="font-mono">24/7 ER: 911</span>
            </a>

            <button
              onClick={() => onBookClick ? onBookClick() : null}
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-nav border-t border-white/10 overflow-hidden mt-3"
          >
            <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  to="/appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm text-center flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
                </Link>

                <a
                  href="tel:+18007857322"
                  className="w-full py-3 px-4 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 font-mono text-xs font-bold text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Emergency Response: +1 (800) 785-7322</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
