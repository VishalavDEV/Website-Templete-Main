import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles, FolderKanban, BookOpen, UserCheck, MessageSquare, History } from 'lucide-react';
import { audioService } from '../utils/audio';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenCommand: () => void;
  onOpenHistory: () => void;
}

export function Navbar({ currentPath, onNavigate, onOpenCommand, onOpenHistory }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'WORK', path: '/work' },
    { name: 'INSIGHTS', path: '/insights' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    audioService.playClick();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const toggleAudio = () => {
    const state = audioService.toggleSound();
    setSoundActive(state);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3.5 shadow-2xl backdrop-blur-md bg-[#0A0B0F]/90 border-b border-white/10'
            : 'bg-transparent py-5 md:py-6 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo & Gradient Orb */}
          <button
            id="nav-logo"
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
            onMouseEnter={() => audioService.playHover()}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-600/30 group-hover:scale-105 transition-transform" />
            <span className="text-xl font-bold tracking-tighter text-white uppercase group-hover:text-violet-300 transition-colors">
              HORIZON
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path !== '/' && currentPath.startsWith(link.path));

              return (
                <button
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  onClick={() => handleNavClick(link.path)}
                  onMouseEnter={() => audioService.playHover()}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-violet-400 font-bold'
                      : 'text-[#A6ACB8] hover:text-violet-400'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Command Palette Button */}
            <button
              id="nav-search-btn"
              onClick={() => {
                audioService.playClick();
                onOpenCommand();
              }}
              onMouseEnter={() => audioService.playHover()}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-mono transition-all"
              title="Search & Commands (Ctrl+K or /)"
            >
              <Search className="w-3.5 h-3.5 text-violet-400" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="text-[10px] bg-black/40 px-1.5 py-0.5 rounded text-gray-400 border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Audio Toggle */}
            <button
              id="nav-audio-toggle"
              onClick={toggleAudio}
              className={`p-2 rounded-full border transition-all ${
                soundActive
                  ? 'bg-violet-600/20 text-violet-400 border-violet-500/40'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
              }`}
              title={soundActive ? 'Mute audio micro-haptics' : 'Enable audio micro-haptics'}
              aria-label="Toggle Audio"
            >
              {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* History icon */}
            <button
              id="nav-history-btn"
              onClick={() => {
                audioService.playClick();
                onOpenHistory();
              }}
              className="p-2 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:border-violet-500/40 transition-all"
              title="View my inquiry submissions"
              aria-label="Inquiry History"
            >
              <History className="w-4 h-4" />
            </button>

            {/* Start a Project Primary Clean Minimalism CTA */}
            <button
              id="nav-start-project-cta"
              onClick={() => handleNavClick('/contact')}
              onMouseEnter={() => audioService.playHover()}
              className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-violet-500 hover:text-white transition-all shadow-md flex items-center gap-1.5"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                audioService.playClick();
                onOpenCommand();
              }}
              className="p-2 rounded-lg bg-white/5 text-gray-300 border border-white/10"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => {
                audioService.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-white/10 text-white border border-white/10"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Premium Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#08090E]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden"
          >
            {/* Mobile Nav Links */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-violet-400 uppercase">Navigation</span>
              <div className="space-y-2">
                {navLinks.map((link, idx) => {
                  const isActive = currentPath === link.path;
                  return (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleNavClick(link.path)}
                      className={`w-full text-left py-2.5 text-2xl font-bold flex items-center justify-between ${
                        isActive ? 'text-violet-400 pl-2 border-l-2 border-violet-400' : 'text-gray-200 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-40" />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    onOpenHistory();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white"
                >
                  <History className="w-4 h-4 text-violet-400" />
                  <span>My Inquiries</span>
                </button>
                <button
                  onClick={toggleAudio}
                  className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white"
                >
                  {soundActive ? <Volume2 className="w-4 h-4 text-violet-400" /> : <VolumeX className="w-4 h-4" />}
                  <span>{soundActive ? 'Sound On' : 'Sound Muted'}</span>
                </button>
              </div>

              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2"
              >
                <span>Start a Project Brief</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
