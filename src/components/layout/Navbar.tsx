import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowUpRight, Download, Volume2, VolumeX } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { soundFx } from '../../utils/audio';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const { soundEnabled, toggleSound } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundFx.playClick();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-8 py-3.5',
          isScrolled
            ? 'glass-panel border-b border-slate-200/80 shadow-sm bg-white/85'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Availability Status */}
          <div className="flex items-center gap-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              onMouseEnter={() => soundFx.playHover()}
              className="group flex items-center gap-2.5 outline-none"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/15 transition-transform group-hover:scale-105 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600">
                <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors">
                  ALEX RIVERA
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase -mt-0.5">
                  Portfolio & CV
                </span>
              </div>
            </a>

            {/* Availability Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-slate-200/80 text-[11px] font-mono text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-medium text-slate-700">Available for Hire</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full glass-card border border-slate-200/80 bg-white/90 shadow-sm">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={cn(
                    'relative px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors duration-200 outline-none',
                    isActive
                      ? 'text-blue-700 font-bold'
                      : 'text-slate-600 hover:text-slate-950'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavbarIndicator"
                      className="absolute inset-0 rounded-full bg-blue-50 border border-blue-200/80 -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Audio Toggle, CV Download & Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
              className="p-2.5 rounded-full glass-card border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-blue-600" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Download Resume / Print */}
            <button
              onClick={() => {
                soundFx.playClick();
                window.print();
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold rounded-full glass-card border border-slate-200 hover:border-blue-500/40 text-slate-700 hover:text-blue-600 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>Resume (PDF)</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              onMouseEnter={() => soundFx.playHover()}
              className="group flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-slate-900 text-white hover:bg-blue-600 shadow-md transition-all"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl glass-card border border-slate-200 text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Off-Canvas Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-slate-900/40 backdrop-blur-md flex flex-col justify-end"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-full bg-white border-t border-slate-200 rounded-t-3xl p-6 shadow-2xl flex flex-col max-h-[85vh] overflow-y-auto text-slate-900"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white bg-gradient-to-tr from-blue-600 to-indigo-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-display font-bold text-slate-900">
                    Alex Rivera
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-slate-500 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 py-6">
                {NAV_LINKS.map((link, idx) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        'flex items-center justify-between p-3.5 rounded-xl text-base font-medium transition-colors',
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200/60'
                          : 'text-slate-700 hover:bg-slate-50'
                      )}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.print();
                  }}
                  className="w-full py-3 rounded-xl glass-card border border-slate-200 text-sm font-semibold text-center flex items-center justify-center gap-2 text-slate-800"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>Download Full Resume (PDF)</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3.5 rounded-xl text-white bg-slate-900 font-semibold text-center shadow-lg flex items-center justify-center gap-2 hover:bg-blue-600"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
                  {SOCIAL_LINKS.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors font-medium"
                    >
                      {soc.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
