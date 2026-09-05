import React, { useState, useEffect } from 'react';
import { PageView, UserSession } from '../types';
import { Search, Sparkles, User, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  onOpenCommand: () => void;
  onOpenContact: () => void;
  onOpenAuth: () => void;
  onOpenPortal: () => void;
  userSession: UserSession;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenCommand,
  onOpenContact,
  onOpenAuth,
  onOpenPortal,
  userSession
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView; badge?: string }[] = [
    { label: 'Overview', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Work', page: 'work' },
    { label: 'Studio Engine', page: 'studio-engine', badge: 'Interactive' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Insights', page: 'insights' },
  ];

  const handleNavClick = (page: PageView) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#0A0A0B]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-900 p-[1px] shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <span className="font-display text-lg font-black tracking-tighter bg-gradient-to-r from-indigo-200 to-purple-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                    A
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-wider text-white flex items-center gap-1.5">
                  AURA
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </span>
                <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">
                  Digital Atelier
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((item) => {
                const isActive = activePage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 rounded-full shadow-md shadow-indigo-500/25"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                    {item.badge && (
                      <span
                        className={`relative z-10 text-[9px] font-mono px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                          isActive
                            ? 'bg-black/25 text-indigo-100'
                            : 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Actions & Utilities */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Quick Search Shortcut */}
              <button
                onClick={onOpenCommand}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-400 hover:text-slate-200 transition-all focus:outline-none"
                title="Search Command Palette (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Search</span>
                <kbd className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* Client Portal Button / User Avatar */}
              {userSession.isAuthenticated && userSession.user ? (
                <button
                  onClick={onOpenPortal}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-indigo-500/40 text-xs text-slate-200 transition-all group"
                >
                  <img
                    src={userSession.user.avatar}
                    alt={userSession.user.name}
                    className="w-5 h-5 rounded-full object-cover border border-indigo-400/50"
                  />
                  <span className="font-medium text-indigo-200 group-hover:text-white">
                    {userSession.user.company}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </button>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800"
                >
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Client Login</span>
                </button>
              )}

              {/* Primary Book Discovery CTA */}
              <button
                onClick={onOpenContact}
                className="relative group overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
                <span>Book Discovery</span>
              </button>
            </div>

            {/* Mobile & Tablet Actions & Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenCommand}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Search"
                title="Search Command Palette"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-500/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Discovery</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-indigo-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#0A0A0B]/95 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl flex flex-col gap-4 lg:hidden max-h-[calc(100vh-75px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                    activePage === item.page
                      ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span className="font-display text-base">{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              {userSession.isAuthenticated && userSession.user ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortal();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-indigo-500/30 text-sm text-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={userSession.user.avatar}
                      alt={userSession.user.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-slate-100">{userSession.user.name}</div>
                      <div className="text-xs text-slate-400">{userSession.user.company}</div>
                    </div>
                  </div>
                  <span className="text-xs text-indigo-400 font-medium">Open Portal →</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>Client Login</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Book Discovery Consultation</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
