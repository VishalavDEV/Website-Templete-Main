import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sprout, 
  Menu, 
  X, 
  ArrowRight, 
  PhoneCall, 
  Leaf, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { navLinks, siteConfig } from '../data/content';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect & section spy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-forest-900/95 backdrop-blur-md shadow-xl border-b border-forest-700/60 py-3'
            : 'bg-forest-900/85 backdrop-blur-sm border-b border-forest-800/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo (Zero unwanted spacing in TerraNova) */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-wheat-400 rounded-lg shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center border border-forest-500/40 shadow-inner group-hover:scale-105 transition-all duration-300">
              <Sprout className="w-5 h-5 sm:w-6 sm:h-6 text-wheat-400 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-forest-900">
                <Sparkles className="w-2 h-2 text-forest-950" />
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white inline-block">
                Terra<span className="text-wheat-400">Nova</span>
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-widest text-emerald-300/80 uppercase font-semibold -mt-1">
                Sustainable AgTech
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Responsive spacing) */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all duration-200 relative whitespace-nowrap ${
                    isActive
                      ? 'text-wheat-400 font-semibold'
                      : 'text-forest-100/80 hover:text-white hover:bg-forest-800/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-wheat-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-wheat-500 to-wheat-600 hover:from-wheat-400 hover:to-wheat-500 text-forest-950 font-bold px-4.5 xl:px-5 py-2.5 rounded-full shadow-lg hover:shadow-glow-amber transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-xs xl:text-sm tracking-wide whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-forest-950" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-forest-800 text-forest-200 hover:text-white hover:bg-forest-700 transition-colors focus:outline-none focus:ring-2 focus:ring-wheat-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Slide-Out Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-forest-950/80 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-forest-900 border-l border-forest-700 p-6 z-50 flex flex-col justify-between overflow-y-auto lg:hidden shadow-2xl"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-forest-800">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-forest-700 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-wheat-400" />
                    </div>
                    <span className="text-xl font-bold font-display text-white">Terra<span className="text-wheat-400">Nova</span></span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-forest-800 text-forest-300 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav list */}
                <div className="py-6 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-forest-100 hover:text-wheat-300 hover:bg-forest-800/70 transition-all font-medium text-base group"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-forest-500 group-hover:text-wheat-400 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom drawer CTA & Info */}
              <div className="pt-6 border-t border-forest-800 space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-wheat-500 to-wheat-600 text-forest-950 font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-glow-amber transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Free Soil Audit</span>
                </button>

                <div className="text-center text-xs text-forest-400">
                  <p>Call our agronomists directly:</p>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-wheat-400 font-semibold mt-1 inline-block hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
