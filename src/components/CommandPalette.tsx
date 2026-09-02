import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Command, ArrowRight, FolderKanban, Sparkles, BookOpen, Volume2, VolumeX, Mail, History, ExternalLink, X } from 'lucide-react';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { insightArticles } from '../data/insights';
import { audioService } from '../utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onOpenHistory: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'PAGES' | 'PROJECTS' | 'SERVICES' | 'INSIGHTS' | 'ACTIONS';
  icon: React.ElementType;
  action: () => void;
}

export function CommandPalette({ isOpen, onClose, onNavigate, onOpenHistory }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSoundOn(audioService.isSoundEnabled());
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    // Focus input on open
    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    setSelectedIndex(0);

    // Global escape key listener to guarantee closing regardless of focus state
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown, { capture: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleGlobalKeyDown, { capture: true });
    };
  }, [isOpen, onClose]);

  // Build items
  const allItems: CommandItem[] = [
    // Pages
    { id: 'page-home', title: 'Home', subtitle: 'Studio overview & hero visual system', category: 'PAGES', icon: Command, action: () => onNavigate('/') },
    { id: 'page-about', title: 'About Agency', subtitle: 'Studio philosophy, team & awards', category: 'PAGES', icon: Sparkles, action: () => onNavigate('/about') },
    { id: 'page-services', title: 'All Services', subtitle: 'Explore our 6 core design & tech disciplines', category: 'PAGES', icon: Sparkles, action: () => onNavigate('/services') },
    { id: 'page-work', title: 'Portfolio / Work', subtitle: 'Case studies, results & client work', category: 'PAGES', icon: FolderKanban, action: () => onNavigate('/work') },
    { id: 'page-insights', title: 'Insights & Editorial', subtitle: 'Essays on brand systems & technology', category: 'PAGES', icon: BookOpen, action: () => onNavigate('/insights') },
    { id: 'page-contact', title: 'Start a Project / Inquiry', subtitle: 'Interactive 7-step project brief builder', category: 'PAGES', icon: ArrowRight, action: () => onNavigate('/contact') },

    // Projects
    ...projects.map(p => ({
      id: `proj-${p.slug}`,
      title: p.title,
      subtitle: `${p.category} · ${p.client} (${p.year})`,
      category: 'PROJECTS' as const,
      icon: FolderKanban,
      action: () => onNavigate(`/work/${p.slug}`)
    })),

    // Services
    ...services.map(s => ({
      id: `srv-${s.slug}`,
      title: `${s.number} — ${s.title}`,
      subtitle: s.shortDescription,
      category: 'SERVICES' as const,
      icon: Sparkles,
      action: () => onNavigate(`/services/${s.slug}`)
    })),

    // Insights
    ...insightArticles.map(a => ({
      id: `art-${a.slug}`,
      title: a.title,
      subtitle: `${a.category} · ${a.readTime}`,
      category: 'INSIGHTS' as const,
      icon: BookOpen,
      action: () => onNavigate(`/insights/${a.slug}`)
    })),

    // Actions
    {
      id: 'act-history',
      title: 'View My Inquiries & Submissions',
      subtitle: 'Check saved project briefs and status in localStorage',
      category: 'ACTIONS',
      icon: History,
      action: () => {
        onClose();
        onOpenHistory();
      }
    },
    {
      id: 'act-sound',
      title: soundOn ? 'Mute Audio Micro-Haptics' : 'Enable Audio Micro-Haptics',
      subtitle: 'Toggle synthesized UI audio feedback',
      category: 'ACTIONS',
      icon: soundOn ? VolumeX : Volume2,
      action: () => {
        const next = audioService.toggleSound();
        setSoundOn(next);
      }
    },
    {
      id: 'act-email',
      title: copied ? 'Email Copied!' : 'Copy Studio Direct Email',
      subtitle: 'partners@horizon-creative.studio',
      category: 'ACTIONS',
      icon: Mail,
      action: () => {
        navigator.clipboard?.writeText('partners@horizon-creative.studio');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  ];

  const filtered = allItems.filter(item => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
      audioService.playHover();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filtered.length) % (filtered.length || 1));
      audioService.playHover();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        audioService.playClick();
        filtered[selectedIndex].action();
        onClose();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 md:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#10121A] border border-white/12 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/8 bg-[#141722]">
              <Search className="w-5 h-5 text-violet-400 mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                id="command-palette-input"
                type="text"
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search projects, services, insights, commands..."
                className="w-full bg-transparent text-white placeholder-gray-500 text-base focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery('');
                    inputRef.current?.focus();
                  }}
                  className="text-gray-400 hover:text-white p-1 mr-1"
                  aria-label="Clear query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                id="command-palette-close-btn"
                onClick={onClose}
                className="flex items-center gap-1.5 ml-2 text-[11px] font-mono text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/10 transition-colors cursor-pointer"
                title="Close Search (Escape)"
              >
                <span>ESC</span>
                <X className="w-3 h-3 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-2 flex-1 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-gray-400">
                  <Search className="w-8 h-8 mx-auto mb-3 opacity-30 text-violet-400" />
                  <p className="text-sm font-medium text-gray-300">No results found for "{query}"</p>
                  <p className="text-xs text-gray-500 mt-1">Try searching for "Nova", "Strategy", "Work", or "Inquiry"</p>
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      id={`cmd-item-${item.id}`}
                      onClick={() => {
                        audioService.playClick();
                        item.action();
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all group ${
                        isSelected
                          ? 'bg-violet-600/20 border border-violet-500/40 text-white'
                          : 'hover:bg-white/5 border border-transparent text-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected ? 'bg-violet-500 text-white' : 'bg-white/5 text-gray-400 group-hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium truncate flex items-center gap-2">
                            <span>{item.title}</span>
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-white/5 text-gray-400 border border-white/5">
                              {item.category}
                            </span>
                          </div>
                          {item.subtitle && (
                            <p className="text-xs text-gray-400 truncate mt-0.5">{item.subtitle}</p>
                          )}
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 flex-shrink-0 ml-2 transition-transform ${
                          isSelected ? 'text-violet-400 translate-x-0.5' : 'text-gray-600 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Bar */}
            <div className="px-4 py-2.5 bg-[#0C0E14] border-t border-white/6 flex items-center justify-between text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300">↓</kbd>
                  to navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300">↵</kbd>
                  to select
                </span>
              </div>
              <span className="text-[11px] text-violet-400/80">HORIZON Engine</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
