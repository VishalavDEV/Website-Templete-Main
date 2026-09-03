import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { path: '/work', label: 'WORK', number: '01' },
  { path: '/services', label: 'SERVICES', number: '02' },
  { path: '/about', label: 'ABOUT', number: '03' },
  { path: '/insights', label: 'INSIGHTS', number: '04' },
  { path: '/contact', label: 'CONTACT', number: '05' }
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update live clock for agency hubs
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF7F1]/90 backdrop-blur-md py-4 border-b border-[#CFC7BE]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 text-[#2B2727] hover:text-[#D65F3F] transition-colors"
            data-cursor="link"
          >
            <span className="font-display font-bold text-2xl tracking-tighter uppercase">
              OFFGRID<span className="text-[#D65F3F]">®</span>
            </span>
            <span className="hidden xl:inline-block text-[10px] tracking-widest font-mono text-[#77716D] border-l border-[#CFC7BE] pl-3 py-0.5">
              CHENNAI {currentTime || '06:42:18'} / 13.08° N
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-display text-sm tracking-widest uppercase py-1 transition-colors ${
                    isActive ? 'text-[#D65F3F] font-bold' : 'text-[#2B2727] hover:text-[#D65F3F]'
                  }`}
                  data-cursor="link"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D65F3F]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Start a project CTA Button */}
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center gap-2 bg-[#2B2727] text-[#FAF7F1] hover:bg-[#D65F3F] px-5 py-2.5 font-display text-xs tracking-widest uppercase transition-all duration-300 shadow-sm"
              data-cursor="link"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2B2727] hover:text-[#D65F3F] transition-colors focus:outline-none"
            aria-label="Toggle menu"
            data-cursor="link"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-[#332832] text-[#FAF7F1] pt-28 pb-12 px-8 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            {/* Nav List */}
            <div className="space-y-6">
              <span className="text-[10px] font-mono tracking-widest text-[#B8A8BD] uppercase block mb-4 border-b border-[#FAF7F1]/10 pb-2">
                // NAVIGATION DIRECTORY
              </span>

              {NAV_LINKS.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-baseline justify-between border-b border-[#FAF7F1]/10 pb-4 group ${
                        isActive ? 'text-[#D65F3F]' : 'text-[#FAF7F1] hover:text-[#B8A8BD]'
                      }`}
                    >
                      <span className="font-display font-bold text-4xl tracking-tight uppercase">
                        {link.label}
                      </span>
                      <span className="font-mono text-xs text-[#B8A8BD]">{link.number}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-[#FAF7F1]/10 space-y-6"
            >
              <div className="grid grid-cols-2 gap-4 text-xs text-[#B8A8BD]">
                <div>
                  <p className="font-bold text-[#FAF7F1] uppercase mb-1">OFFICES</p>
                  <p>NEW YORK / LONDON</p>
                  <p>CHENNAI / BERLIN</p>
                </div>
                <div>
                  <p className="font-bold text-[#FAF7F1] uppercase mb-1">CONNECT</p>
                  <a href="mailto:hello@offgrid.studio" className="hover:text-[#D65F3F] underline">
                    hello@offgrid.studio
                  </a>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#D65F3F] text-[#FAF7F1] py-4 font-display font-bold tracking-widest text-sm uppercase"
              >
                <span>INITIATE PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
