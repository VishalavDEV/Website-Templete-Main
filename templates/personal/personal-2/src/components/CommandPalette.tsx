import { useState, useEffect } from 'react';
import { Search, FileText, Bot, Mail, Sparkles, Code2, Compass, Layers, Trophy, Sun, Moon } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAskAi: () => void;
  onOpenResume: () => void;
  setAccentTheme: (theme: 'cyan' | 'violet' | 'emerald') => void;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenAskAi,
  onOpenResume,
  setAccentTheme,
  theme,
  toggleTheme,
}: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    {
      id: 'toggle-theme',
      title: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      category: 'Preferences',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-400" />,
      handler: () => { if (toggleTheme) toggleTheme(); onClose(); },
    },
    {
      id: 'ask-ai',
      title: 'Ask Arjun\'s AI Digital Twin',
      category: 'AI Assistant',
      icon: <Bot className="w-4 h-4 text-blue-500" />,
      handler: () => { onOpenAskAi(); onClose(); },
    },
    {
      id: 'view-resume',
      title: 'View / Download Full Resume (CV)',
      category: 'Actions',
      icon: <FileText className="w-4 h-4 text-indigo-500" />,
      handler: () => { onOpenResume(); onClose(); },
    },
    {
      id: 'go-projects',
      title: 'Go to Featured Projects (NeuralDesk, VisionGuard...)',
      category: 'Navigation',
      icon: <Code2 className="w-4 h-4 text-emerald-500" />,
      handler: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'go-ailab',
      title: 'Go to AI Lab (Interactive ML Experiments)',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-blue-500" />,
      handler: () => {
        document.getElementById('ailab')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'go-skills',
      title: 'Go to Technology Universe Graph',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-purple-500" />,
      handler: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'go-journey',
      title: 'Go to Journey & Experience Timeline',
      category: 'Navigation',
      icon: <Compass className="w-4 h-4 text-amber-500" />,
      handler: () => {
        document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'go-achievements',
      title: 'Go to Thoughts & Insights Blog',
      category: 'Navigation',
      icon: <Trophy className="w-4 h-4 text-yellow-500" />,
      handler: () => {
        document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'go-contact',
      title: 'Contact Arjun (Send Transmission)',
      category: 'Contact',
      icon: <Mail className="w-4 h-4 text-blue-500" />,
      handler: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'theme-cyan',
      title: 'Switch Accent Theme: Electric Blue',
      category: 'Preferences',
      icon: <span className="w-3 h-3 rounded-full bg-blue-500" />,
      handler: () => { setAccentTheme('cyan'); onClose(); },
    },
    {
      id: 'theme-violet',
      title: 'Switch Accent Theme: Indigo / Violet',
      category: 'Preferences',
      icon: <span className="w-3 h-3 rounded-full bg-indigo-500" />,
      handler: () => { setAccentTheme('violet'); onClose(); },
    },
    {
      id: 'theme-emerald',
      title: 'Switch Accent Theme: Emerald Green',
      category: 'Preferences',
      icon: <span className="w-3 h-3 rounded-full bg-emerald-500" />,
      handler: () => { setAccentTheme('emerald'); onClose(); },
    },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setSearch('');
          setSelectedIndex(0);
        }
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].handler();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150 font-sans">
      
      <div className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50">
          <Search className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={search}
            onChange={(e) => { setSearch(e.target.value); setSelectedIndex(0); }}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-sans"
          />
          <kbd className="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[10px] font-mono text-slate-600 dark:text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={item.id}
                onClick={item.handler}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                  selectedIndex === idx
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-xs font-sans font-medium">{item.title}</span>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-semibold">
                  {item.category}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>[↑] [↓] Navigate</span>
            <span>[↵] Execute</span>
          </div>
          <span className="font-semibold text-blue-600 dark:text-blue-400">ARJUN MEHTA PORTFOLIO</span>
        </div>

      </div>
    </div>
  );
}
