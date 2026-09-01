import React, { memo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Search } from 'lucide-react';

export interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = memo(({ isOpen, onClose }) => {
  // Dismiss on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while mega menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuSections = [
    {
      title: 'Editorial Departments',
      links: [
        { name: 'Spatial Computing & XR', count: '14 Articles', hot: true },
        { name: 'Generative Architecture', count: '22 Articles' },
        { name: 'Tactile Typography', count: '18 Articles' },
        { name: 'Acoustic Topologies', count: '09 Articles' },
        { name: 'Synthetic Materials', count: '12 Articles' },
      ],
    },
    {
      title: 'Publications & Audio',
      links: [
        { name: 'Issue 08: Spatial Era (Latest)', count: 'Print + PDF', special: true },
        { name: 'Issue 07: Algorithmic Earth', count: 'Archive' },
        { name: 'Issue 06: Quantum Glass', count: 'Archive' },
        { name: 'Synthesized Audio Podcasts', count: '18 Episodes' },
        { name: 'Curator Dialogues & Essays', count: '34 Essays' },
      ],
    },
    {
      title: 'The Design Mag Collective',
      links: [
        { name: 'Awwwards Jury Editorial', count: 'Insights' },
        { name: 'Design Directory 2026', count: '120 Studios' },
        { name: 'Fellowship & Grants', count: 'Open for Q3' },
        { name: 'Colophon & Type Specimens', count: 'Specs' },
        { name: 'Press & Media Inquiries', count: 'Contact' },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-white/95 backdrop-blur-3xl overflow-y-auto"
        >
          {/* Top Bar of Mega Menu */}
          <div className="border-b border-slate-200/80 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold font-display text-lg sm:text-xl shadow-md shadow-blue-500/20">
                DM
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">
                  DESIGN<span className="text-blue-600 font-serif italic ml-1">MAG</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400 -mt-0.5">
                  Global Directory & Index
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-900 text-xs font-semibold tracking-tight transition-all duration-200 active:scale-95 border border-slate-200 cursor-pointer"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Center: Search & Cascading Nav Stagger */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 py-6 sm:py-10 flex-1 flex flex-col justify-center">
            {/* Quick Filter Search Bar */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.3 }}
              className="mb-8 sm:mb-12 max-w-2xl"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles, architects, spatial issues, essays..."
                  className="w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 rounded-2xl bg-slate-100/80 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-xs sm:text-sm outline-none placeholder:text-slate-400 font-medium"
                />
              </div>
            </motion.div>

            {/* 3-Column Cascading Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 lg:gap-16">
              {menuSections.map((section, sectionIdx) => (
                <motion.div
                  key={section.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.12 + sectionIdx * 0.06,
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  }}
                  className="flex flex-col"
                >
                  <h4 className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-3 sm:mb-5 pb-2 border-b border-slate-200/80">
                    {section.title}
                  </h4>

                  <ul className="flex flex-col gap-2.5 sm:gap-3.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={`#${link.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          onClick={onClose}
                          className="group flex items-center justify-between text-slate-800 hover:text-blue-600 transition-colors py-0.5"
                        >
                          <span className="font-display font-bold text-base sm:text-lg tracking-tight group-hover:translate-x-1.5 transition-transform duration-200">
                            {link.name}
                          </span>
                          <div className="flex items-center gap-2">
                            {link.hot && (
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase bg-rose-50 text-rose-600 border border-rose-200">
                                HOT
                              </span>
                            )}
                            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 group-hover:text-slate-600">
                              {link.count}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Curated Issue 08 Feature Strip */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.3 }}
            className="border-t border-slate-200/80 bg-slate-50/80 py-4 sm:py-5 px-4 sm:px-6 md:px-8 flex-shrink-0"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-slate-600 text-[11px] sm:text-xs">
                  <strong className="text-slate-900">Current Print Edition:</strong> Issue 08 (Smyth-Sewn Binding, 280 pages)
                </span>
              </div>

              <div className="flex items-center gap-4 text-[11px] sm:text-xs text-slate-500 font-mono">
                <a href="#subscribe" onClick={onClose} className="hover:text-blue-600 font-semibold transition-colors">
                  Annual Membership
                </a>
                <span>•</span>
                <a href="#archive" onClick={onClose} className="hover:text-blue-600 transition-colors">
                  Issue Archive
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

MegaMenu.displayName = 'MegaMenu';
