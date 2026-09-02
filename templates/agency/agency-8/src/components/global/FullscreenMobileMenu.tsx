import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Sparkles } from 'lucide-react';
import { CursorType } from '../../types';

interface NavItem {
  name: string;
  href: string;
  route: string;
  number: string;
  tagline: string;
}

interface FullscreenMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentRoute: string;
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Work', href: '/work', route: '/work', number: '01', tagline: 'Selected Case Studies & Archive' },
  { name: 'About', href: '/about', route: '/about', number: '02', tagline: 'Studio Ethos & Principles' },
  { name: 'Services', href: '/services', route: '/services', number: '03', tagline: 'Capabilities & Offerings' },
  { name: 'Insights', href: '/insights', route: '/insights', number: '04', tagline: 'Editorial & Design Perspectives' },
  { name: 'Team', href: '/team', route: '/team', number: '05', tagline: 'The Creative Collective' },
  { name: 'Careers', href: '/careers', route: '/careers', number: '06', tagline: 'Residencies & Open Roles' },
  { name: 'Stories', href: '/testimonials', route: '/testimonials', number: '07', tagline: 'Client Partnerships & Trust' },
  { name: 'Contact', href: '/contact', route: '/contact', number: '08', tagline: 'Start a Conversation' },
];

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Behance', href: 'https://behance.net' },
  { name: 'X / Twitter', href: 'https://twitter.com' },
];

export const FullscreenMobileMenu: React.FC<FullscreenMobileMenuProps> = ({
  isOpen,
  onClose,
  currentRoute,
  onNavigate,
  setCursorType,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (route: string) => {
    onClose();
    onNavigate(route);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#080808]/98 backdrop-blur-2xl text-[#FAF9F6] flex flex-col justify-between overflow-y-auto px-6 sm:px-10 py-8"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
                STUDIO DIRECTORY
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              aria-label="Close navigation menu"
              className="p-3 rounded-full bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 text-[#FAF9F6] transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Staggered Navigation Grid */}
          <div className="max-w-7xl mx-auto w-full py-10 sm:py-14 my-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-12">
              {NAV_ITEMS.map((item, idx) => {
                const isActive =
                  currentRoute === item.route ||
                  (item.route !== '/' && currentRoute.startsWith(item.route));

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + idx * 0.04,
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleLinkClick(item.route)}
                      onMouseEnter={() => setCursorType('pointer', 'GOTO ↗')}
                      onMouseLeave={() => setCursorType('default')}
                      className={`group w-full text-left py-3 border-b border-white/5 hover:border-white/20 transition-all flex items-baseline justify-between cursor-pointer ${
                        isActive ? 'text-[#0066FF]' : 'text-[#FAF9F6]'
                      }`}
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="font-mono text-xs text-[#666666] group-hover:text-[#0066FF] transition-colors">
                          [ {item.number} ]
                        </span>
                        <div>
                          <span
                            className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight transition-all duration-300 block ${
                              isActive
                                ? 'text-[#0066FF]'
                                : 'text-[#FAF9F6] group-hover:text-[#0066FF] group-hover:translate-x-2'
                            }`}
                          >
                            {item.name}
                          </span>
                          <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block mt-0.5 hidden sm:block">
                            {item.tagline}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isActive
                            ? 'text-[#0066FF] opacity-100'
                            : 'text-white/30 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`}
                      />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Footer & Social Channels */}
          <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Primary Action Button */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              type="button"
              onClick={() => handleLinkClick('/contact')}
              onMouseEnter={() => setCursorType('button', 'START ↗')}
              onMouseLeave={() => setCursorType('default')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] hover:brightness-110 text-white font-mono text-xs uppercase tracking-widest font-bold border border-[#0066FF]/50 transition-all cursor-pointer shadow-lg shadow-[#0066FF]/20"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>

            {/* Social List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-wrap items-center gap-6 font-mono text-xs text-[#888888]"
            >
              {SOCIAL_LINKS.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setCursorType('link')}
                  onMouseLeave={() => setCursorType('default')}
                  className="hover:text-[#FAF9F6] transition-colors"
                >
                  {soc.name} ↗
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
