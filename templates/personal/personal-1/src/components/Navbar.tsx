import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  FileDown,
  Sun,
  Moon,
  Sparkles,
  Volume2,
  VolumeX,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light' | 'cinema';
  onToggleTheme: (theme: 'dark' | 'light' | 'cinema') => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenResumeModal?: () => void;
}

const DESKTOP_NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Journal', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const ALL_NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Awards', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Journal', href: '#blog' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  onOpenResumeModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy
      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'services',
        'projects',
        'resume',
        'achievements',
        'gallery',
        'blog',
        'pricing',
        'contact',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (soundEnabled) {
      try {
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.06);
      } catch {}
    }
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cycleTheme = () => {
    const nextTheme: 'dark' | 'light' | 'cinema' =
      theme === 'dark' ? 'light' : theme === 'light' ? 'cinema' : 'dark';
    onToggleTheme(nextTheme);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        {/* Full-width container utilizing full space */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-3">
          
          {/* Brand Logo & Live Status */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            id="brand-logo-button"
            className="group flex items-center gap-3 focus:outline-none shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-amber-500 to-amber-700 p-[1px] shadow-lg shadow-[#D4AF37]/20 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#050505] rounded-[11px] flex items-center justify-center font-serif font-black text-base sm:text-lg tracking-tighter text-[#D4AF37]">
                JR<span className="text-white">.</span>
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37] border-2 border-black"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                JR<span className="text-[#D4AF37]">.</span>STUDIO
              </span>
              <span className="text-[8px] sm:text-[9px] text-neutral-400 tracking-[0.25em] uppercase font-semibold">
                Principal Technologist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Centered & Spacious */}
          <nav
            id="desktop-nav-menu"
            className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-xl shrink-0"
          >
            {DESKTOP_NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  id={`nav-link-${link.href.replace('#', '')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3 py-1.5 rounded-full text-[10px] xl:text-[11px] uppercase font-bold tracking-[0.18em] whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-black font-extrabold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#D4AF37] rounded-full shadow-md shadow-[#D4AF37]/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Utilities: Theme, Sound, Resume & Inquire CTA */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 shrink-0">
            {/* Audio Toggle */}
            <button
              type="button"
              id="audio-sound-toggle-btn"
              onClick={onToggleSound}
              title={soundEnabled ? 'Mute Sound Effects' : 'Enable Audio Feedback'}
              className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors shrink-0"
            >
              {soundEnabled ? <Volume2 size={15} className="text-[#D4AF37]" /> : <VolumeX size={15} />}
            </button>

            {/* Theme Toggle Button */}
            <button
              type="button"
              id="theme-mode-toggle-btn"
              onClick={cycleTheme}
              title={`Active Theme: ${theme.toUpperCase()} (Click to change)`}
              className="px-2.5 sm:px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-200 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all flex items-center gap-1.5 text-xs font-mono group shrink-0"
            >
              {theme === 'dark' && <Moon size={14} className="text-[#D4AF37] group-hover:rotate-12 transition-transform" />}
              {theme === 'light' && <Sun size={14} className="text-amber-500 group-hover:rotate-45 transition-transform" />}
              {theme === 'cinema' && <Sparkles size={14} className="text-purple-400 group-hover:scale-110 transition-transform" />}
              <span className="uppercase text-[10px] font-bold tracking-[0.2em] font-mono">
                {theme}
              </span>
            </button>

            {/* Resume Button */}
            <button
              type="button"
              id="header-view-resume-btn"
              onClick={() => {
                if (onOpenResumeModal) {
                  onOpenResumeModal();
                } else {
                  handleNavClick('#resume');
                }
              }}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/15 text-[11px] font-bold uppercase tracking-wider text-neutral-200 hover:text-white transition-all shadow-sm group whitespace-nowrap shrink-0"
            >
              <FileDown size={13} className="text-[#D4AF37] group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </button>

            {/* Inquire / Let's Talk CTA */}
            <a
              href="#contact"
              id="header-contact-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-full bg-[#D4AF37] text-black font-extrabold text-[11px] uppercase tracking-[0.16em] shadow-lg shadow-[#D4AF37]/20 hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>Inquire</span>
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              id="mobile-theme-toggle-btn"
              onClick={cycleTheme}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-neutral-200"
            >
              {theme === 'dark' ? <Moon size={16} className="text-[#D4AF37]" /> : theme === 'cinema' ? <Sparkles size={16} className="text-purple-400" /> : <Sun size={16} className="text-amber-500" />}
            </button>
            <button
              type="button"
              id="mobile-nav-toggle-btn"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-neutral-200 hover:text-[#D4AF37]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            id="mobile-drawer-menu"
            className="fixed inset-x-0 top-[65px] z-40 bg-[#050505]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl flex flex-col gap-4 sm:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-2.5">
              {ALL_NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={13} className="opacity-40" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenResumeModal) {
                    onOpenResumeModal();
                  } else {
                    handleNavClick('#resume');
                  }
                }}
                className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-wider text-neutral-100 flex items-center justify-center gap-2"
              >
                <FileDown size={16} className="text-[#D4AF37]" />
                <span>View Full Resume / CV</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full py-3 rounded-xl bg-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-widest text-center shadow-lg shadow-[#D4AF37]/20"
              >
                Let's Build Something Great
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
