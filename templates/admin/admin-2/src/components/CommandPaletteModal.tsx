import React, { useState, useEffect, useMemo } from 'react';
import { useEditorial } from '../services/editorialStore';
import { 
  Search, BookOpen, Image, Users, Plus, Upload, 
  Download, ArrowRight, CornerDownLeft, Sparkles, Star 
} from 'lucide-react';
import { motion } from 'motion/react';

export const CommandPaletteModal: React.FC = () => {
  const { 
    isCommandPaletteOpen, 
    setIsCommandPaletteOpen, 
    stories, 
    authors, 
    media, 
    setActiveView, 
    setPreviewStory,
    setIsNewStoryModalOpen,
    setIsUploadMediaModalOpen,
    setIsExportModalOpen
  } = useEditorial();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(!isCommandPaletteOpen);
      }
      if (e.key === 'Escape' && isCommandPaletteOpen) {
        setIsCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setIsCommandPaletteOpen]);

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isCommandPaletteOpen]);

  // Command items
  const results = useMemo(() => {
    const q = query.toLowerCase().trim();

    const quickActions = [
      {
        id: 'act_new_story',
        type: 'action',
        title: 'Create New Science Manuscript',
        subtitle: 'Open the editorial story composer',
        icon: Plus,
        action: () => {
          setIsNewStoryModalOpen(true);
          setIsCommandPaletteOpen(false);
        }
      },
      {
        id: 'act_upload_media',
        type: 'action',
        title: 'Upload Media Asset to Archive',
        subtitle: 'High-res telescope or manuscript scan',
        icon: Upload,
        action: () => {
          setIsUploadMediaModalOpen(true);
          setIsCommandPaletteOpen(false);
        }
      },
      {
        id: 'act_export',
        type: 'action',
        title: 'Export Editorial Data & Performance Report',
        subtitle: 'Download CSV, JSON, or Executive Brief',
        icon: Download,
        action: () => {
          setIsExportModalOpen(true);
          setIsCommandPaletteOpen(false);
        }
      },
      {
        id: 'act_view_archive',
        type: 'action',
        title: 'Jump to Media Archive Gallery',
        subtitle: 'Browse 1,480+ archival plates & photos',
        icon: Image,
        action: () => {
          setActiveView('archive_media');
          setIsCommandPaletteOpen(false);
        }
      },
      {
        id: 'act_view_team',
        type: 'action',
        title: 'Jump to Editorial Roster & Authors',
        subtitle: 'Inspect team workload & active dispatches',
        icon: Users,
        action: () => {
          setActiveView('team_authors');
          setIsCommandPaletteOpen(false);
        }
      }
    ];

    const matchedStories = stories.map((s) => ({
      id: `story_${s.id}`,
      type: 'story',
      title: s.title,
      subtitle: `${s.category} • By ${s.author.name} • ${s.status.toUpperCase()}`,
      icon: BookOpen,
      action: () => {
        setPreviewStory(s);
        setIsCommandPaletteOpen(false);
      }
    }));

    const matchedAuthors = authors.map((a) => ({
      id: `author_${a.id}`,
      type: 'author',
      title: a.name,
      subtitle: `${a.role} • ${a.publishedStories} published • ${a.activeAssignments} tasks`,
      icon: Users,
      action: () => {
        setActiveView('team_authors');
        setIsCommandPaletteOpen(false);
      }
    }));

    const all = [...quickActions, ...matchedStories, ...matchedAuthors];

    if (!q) return all.slice(0, 8);

    return all
      .filter((item) =>
        item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q)
      )
      .slice(0, 10);
  }, [query, stories, authors, setIsNewStoryModalOpen, setIsUploadMediaModalOpen, setIsExportModalOpen, setActiveView, setPreviewStory, setIsCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  return (
    <div 
      id="command-palette-overlay"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-24"
      onClick={() => setIsCommandPaletteOpen(false)}
    >
      <motion.div
        id="command-palette-modal"
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.15 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col"
      >
        {/* Search Header */}
        <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-sky-600 shrink-0" />
          <input
            id="command-palette-input"
            autoFocus
            type="text"
            placeholder="Type a command or search manuscripts, authors, media..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm font-medium bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 text-slate-600 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {results.length === 0 ? (
            <div className="py-10 text-center text-xs text-slate-500 font-serif">
              No matching commands or articles found.
            </div>
          ) : (
            results.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={`command-palette-item-${item.id}`}
                  onClick={item.action}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-sky-50 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-sky-100 text-slate-600 group-hover:text-sky-700 transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-sky-950 truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <CornerDownLeft className="w-3.5 h-3.5 text-slate-300 group-hover:text-sky-600 opacity-0 group-hover:opacity-100 transition-all shrink-0 ml-2" />
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span><strong>↑↓</strong> Navigate</span>
            <span><strong>↵</strong> Select</span>
            <span><strong>ESC</strong> Close</span>
          </div>
          <span className="font-serif italic text-slate-400">Elemental Command Bar</span>
        </div>
      </motion.div>
    </div>
  );
};
