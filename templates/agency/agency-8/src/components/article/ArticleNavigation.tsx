import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ListFilter, ChevronDown, Check } from 'lucide-react';
import { CursorType } from '../../types';

export interface TocItem {
  id: string;
  number: string;
  title: string;
}

interface ArticleNavigationProps {
  items: TocItem[];
  activeId: string;
  onItemClick: (id: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ArticleNavigation: React.FC<ArticleNavigationProps> = ({
  items,
  activeId,
  onItemClick,
  setCursorType,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeItem = items.find((i) => i.id === activeId) || items[0];

  return (
    <>
      {/* Desktop Sticky Table of Contents */}
      <nav aria-label="Table of contents" className="hidden lg:block sticky top-32 space-y-6">
        <div className="flex items-center gap-2 pb-4 border-b border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF9F6] font-semibold">
            IN THIS ARTICLE
          </span>
        </div>

        <ul className="space-y-4">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onItemClick(item.id)}
                  onMouseEnter={() => setCursorType('pointer')}
                  onMouseLeave={() => setCursorType('default')}
                  className={`group flex items-start gap-4 text-left w-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-[#0066FF] translate-x-1.5'
                      : 'text-[#666666] hover:text-[#FAF9F6]'
                  }`}
                >
                  <span
                    className={`font-mono text-xs transition-colors duration-300 font-bold ${
                      isActive ? 'text-[#0066FF]' : 'text-white/30 group-hover:text-white/60'
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`font-mono text-xs uppercase tracking-wider font-medium leading-tight ${
                      isActive
                        ? 'text-[#0066FF] font-bold'
                        : 'text-[#888888] group-hover:text-[#FAF9F6]'
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Quiet scroll progress indicator hint */}
        <div className="pt-8 border-t border-white/10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#555555] block mb-2">
            INDEX NAVIGATION
          </span>
          <p className="font-body text-xs text-[#777777] font-light leading-relaxed">
            Jump across critical theorems and visual essays.
          </p>
        </div>
      </nav>

      {/* Mobile Compact Sticky Bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-[#080808]/95 backdrop-blur-md border-y border-white/10 px-4 py-3 -mx-4 sm:-mx-6 mb-8">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-3 text-left w-full text-xs font-mono text-[#FAF9F6] justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="text-[#0066FF] font-bold">{activeItem?.number}</span>
              <span className="truncate uppercase text-[#FAF9F6] tracking-wider">
                {activeItem?.title}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#888888] shrink-0 pl-2">
              <span className="text-[10px] uppercase tracking-widest">TOC</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-180 text-[#0066FF]' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden pt-4 pb-2 border-t border-white/10 mt-3"
            >
              <ul className="space-y-3">
                {items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => {
                          onItemClick(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between w-full py-1 text-xs font-mono uppercase tracking-wider text-left ${
                          isActive ? 'text-[#0066FF] font-bold' : 'text-[#888888]'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={isActive ? 'text-[#0066FF]' : 'text-white/30'}>
                            {item.number}
                          </span>
                          <span>{item.title}</span>
                        </span>
                        {isActive && <Check className="w-3.5 h-3.5 text-[#0066FF]" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
