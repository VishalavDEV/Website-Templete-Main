import React, { useState, useEffect, useRef } from 'react';
import { PageView } from '../types';
import { CASE_STUDIES, SERVICES_DATA } from '../data/mockData';
import { Search, Sparkles, Layers, Cpu, Globe, ArrowRight, CornerDownLeft, X, Bookmark, FileText, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageView) => void;
  onOpenContact: (subject?: string) => void;
  onOpenAuth: () => void;
  onOpenPortal: () => void;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Case Studies' | 'Capabilities' | 'Quick Actions';
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenContact,
  onOpenAuth,
  onOpenPortal
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  // Handle global ⌘K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          inputRef.current?.focus();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const commandItems: CommandItem[] = [
    // Quick Actions
    {
      id: 'action-book',
      category: 'Quick Actions',
      title: 'Initiate Discovery Consultation',
      subtitle: 'Book a 1-on-1 session with a Principal Systems Architect',
      icon: <Sparkles className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onClose();
        onOpenContact();
      }
    },
    {
      id: 'action-engine',
      category: 'Quick Actions',
      title: 'Launch Scope & Pricing Engine',
      subtitle: 'Real-time project sizing, team composition & instant proposal export',
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      action: () => {
        onClose();
        onNavigate('studio-engine');
      }
    },
    {
      id: 'action-portal',
      category: 'Quick Actions',
      title: 'Access Client Portal & Sprints',
      subtitle: 'View active deliverables, milestone burndown & invoices',
      icon: <User className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        onOpenPortal();
      }
    },

    // Navigation
    {
      id: 'nav-home',
      category: 'Navigation',
      title: 'Overview & Capabilities Cockpit',
      subtitle: 'Atelier homepage & live telemetry',
      icon: <Globe className="w-4 h-4 text-slate-400" />,
      action: () => {
        onClose();
        onNavigate('home');
      }
    },
    {
      id: 'nav-services',
      category: 'Navigation',
      title: 'Architectural Capabilities',
      subtitle: 'Autonomous AI, Product Design & Cloud Systems',
      icon: <Cpu className="w-4 h-4 text-slate-400" />,
      action: () => {
        onClose();
        onNavigate('services');
      }
    },
    {
      id: 'nav-work',
      category: 'Navigation',
      title: 'Selected Engagements & Case Studies',
      subtitle: 'Explore production client systems and benchmarks',
      icon: <FileText className="w-4 h-4 text-slate-400" />,
      action: () => {
        onClose();
        onNavigate('work');
      }
    },
    {
      id: 'nav-pricing',
      category: 'Navigation',
      title: 'Transparent Pricing & Retainers',
      subtitle: 'Sprint models, dedicated pods & enterprise SLA',
      icon: <Sparkles className="w-4 h-4 text-slate-400" />,
      action: () => {
        onClose();
        onNavigate('pricing');
      }
    },
    {
      id: 'nav-insights',
      category: 'Navigation',
      title: 'Insights & Technical Whitepapers',
      subtitle: 'Frontier research in AI latency & distributed systems',
      icon: <FileText className="w-4 h-4 text-slate-400" />,
      action: () => {
        onClose();
        onNavigate('insights');
      }
    },

    // Case studies
    ...CASE_STUDIES.map((c) => ({
      id: `case-${c.id}`,
      category: 'Case Studies' as const,
      title: `${c.client} — ${c.title}`,
      subtitle: `${c.category} • ${c.tagline}`,
      icon: <Bookmark className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onClose();
        onNavigate('work');
      }
    })),

    // Services
    ...SERVICES_DATA.map((s) => ({
      id: `serv-${s.id}`,
      category: 'Capabilities' as const,
      title: s.title,
      subtitle: `Starting at ${s.startingPrice} • ${s.timeline}`,
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onClose();
        onNavigate('services');
      }
    }))
  ];

  const filteredItems = commandItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase()))
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-24 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Input Header */}
          <div className="flex items-center px-4 border-b border-slate-800 bg-slate-950">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command, case study, service, or feature..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              className="w-full px-3 py-4 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-slate-500 hover:text-slate-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <kbd className="hidden sm:inline-block font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-400 ml-2">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-2 space-y-1">
            {filteredItems.length === 0 ? (
              <div className="text-center py-10 text-xs text-slate-500">
                No matching results found for "{query}".
              </div>
            ) : (
              filteredItems.map((item, idx) => {
                const isSelected = selectedIndex === idx;

                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full p-3 rounded-xl text-left flex items-center justify-between gap-3 transition-colors ${
                      isSelected
                        ? 'bg-indigo-500/10 border border-indigo-500/30 text-white'
                        : 'text-slate-400 hover:bg-slate-800/60 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                        {item.icon}
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold text-slate-200 truncate">
                          {item.title}
                        </div>
                        {item.subtitle && (
                          <div className="text-[11px] text-slate-500 truncate mt-0.5">
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-500 border border-slate-800">
                        {item.category}
                      </span>
                      {isSelected && <CornerDownLeft className="w-3.5 h-3.5 text-indigo-400" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Navigation Hints */}
          <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>↵ to select</span>
              <span>ESC to close</span>
            </div>
            <span className="text-indigo-400">AURA SPOTLIGHT</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
