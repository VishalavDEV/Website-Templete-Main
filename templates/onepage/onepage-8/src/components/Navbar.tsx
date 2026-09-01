import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal, Sparkles, Activity } from 'lucide-react';
import { CursorState } from '../types';

interface NavbarProps {
  activeSection: string;
  isMuted: boolean;
  onToggleSound: () => void;
  onHoverSound: () => void;
  onClickSound: () => void;
  setCursorState: (state: CursorState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isMuted,
  onToggleSound,
  onHoverSound,
  onClickSound,
  setCursorState,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '01_INTRO', target: 'hero', title: 'INTRO' },
    { label: '02_ABOUT', target: 'about', title: 'ABOUT' },
    { label: '03_SKILLS', target: 'skills', title: 'SKILLS' },
    { label: '04_EXPERIMENTS', target: 'projects', title: 'WORK' },
    { label: '05_THE MACHINE', target: 'machine', title: 'MACHINE' },
    { label: '06_AI LAB', target: 'ailab', title: 'LAB' },
    { label: '07_JOURNEY', target: 'journey', title: 'JOURNEY' },
    { label: '08_CONTACT', target: 'contact', title: 'CONTACT' },
  ];

  const scrollToSection = (id: string) => {
    onClickSound();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between pointer-events-none"
      >
        {/* Brand Logo & System Status */}
        <div className="flex items-center space-x-3 pointer-events-auto">
          <button
            id="brand-logo-btn"
            onClick={() => scrollToSection('hero')}
            onMouseEnter={() => {
              onHoverSound();
              setCursorState({ variant: 'hover', text: 'HOME' });
            }}
            onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#0a0f18]/80 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/60 transition-all group"
          >
            <div className="w-2.5 h-2.5 rounded-sm bg-cyan-400 rotate-45 group-hover:scale-125 transition-transform" />
            <span className="font-mono text-xs font-bold tracking-widest text-slate-100 group-hover:text-cyan-300">
              [ JM // AI ]
            </span>
          </button>

          <div className="hidden lg:flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#0a0f18]/60 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wider">SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#0a0f18]/80 backdrop-blur-xl border border-slate-800 pointer-events-auto shadow-2xl"
        >
          {navLinks.slice(1).map((link) => {
            const isActive = activeSection === link.target;
            return (
              <button
                key={link.target}
                id={`nav-link-${link.target}`}
                onClick={() => scrollToSection(link.target)}
                onMouseEnter={() => {
                  onHoverSound();
                  setCursorState({ variant: 'hover', text: link.title });
                }}
                onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all uppercase whitespace-nowrap ${
                  isActive
                    ? 'text-cyan-300 font-semibold bg-cyan-500/10 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {link.title}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Sound Toggle + Mobile Menu Trigger */}
        <div className="flex items-center space-x-2 pointer-events-auto">
          {/* Sound Synthesizer Toggle */}
          <button
            id="sound-toggle-btn"
            onClick={onToggleSound}
            onMouseEnter={() => {
              onHoverSound();
              setCursorState({ variant: 'hover', text: isMuted ? 'UNMUTE' : 'MUTE' });
            }}
            onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
            title={isMuted ? 'Enable sound synthesis' : 'Mute sound synthesis'}
            className={`p-2.5 rounded-lg backdrop-blur-md border transition-all flex items-center space-x-1.5 text-xs font-mono ${
              !isMuted
                ? 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                : 'bg-[#0a0f18]/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {!isMuted ? (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="hidden sm:inline text-[10px] tracking-wider text-cyan-300">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline text-[10px] tracking-wider">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => {
              onClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle menu"
            className="md:hidden p-2.5 rounded-lg bg-[#0a0f18]/90 backdrop-blur-md border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Animated Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#04060a]/95 backdrop-blur-2xl flex flex-col justify-center px-8 sm:px-12 md:hidden"
        >
          <div className="absolute top-6 left-6 font-mono text-xs text-cyan-400 flex items-center space-x-2">
            <Terminal className="w-4 h-4" />
            <span>NAVIGATION_INDEX // V4.2</span>
          </div>

          <div className="space-y-4 my-auto">
            {navLinks.map((link, idx) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="w-full flex items-center justify-between text-left group py-2 border-b border-slate-800/60"
              >
                <span className="font-mono text-xs text-cyan-500/70 group-hover:text-cyan-400">
                  {link.label.split('_')[0]}
                </span>
                <span className="font-display text-2xl font-bold tracking-tight text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {link.title}
                </span>
                <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">→</span>
              </button>
            ))}
          </div>

          <div className="mt-auto pb-8 pt-4 flex items-center justify-between font-mono text-xs text-slate-500">
            <span>AI // HUMAN // MACHINE</span>
            <span>2026 EDITION</span>
          </div>
        </div>
      )}
    </>
  );
};
