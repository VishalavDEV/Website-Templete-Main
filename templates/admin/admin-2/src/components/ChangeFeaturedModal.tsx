import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { X, Star, Search, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ChangeFeaturedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChangeFeaturedModal: React.FC<ChangeFeaturedModalProps> = ({ isOpen, onClose }) => {
  const { stories, setFeaturedStory } = useEditorial();
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredStories = stories.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.author.name.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = async (storyId: string) => {
    await setFeaturedStory(storyId);
    onClose();
  };

  return (
    <div 
      id="change-featured-modal-overlay"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        id="change-featured-modal"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-slate-900 w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col"
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
            <h2 className="font-serif text-lg font-bold text-slate-900">
              Select Lead Masthead Story
            </h2>
          </div>
          <button
            id="close-change-featured-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/40">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="search-masthead-stories-input"
              type="text"
              placeholder="Search by title, category, or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
        </div>

        {/* Story Selector List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              id={`select-featured-item-${story.id}`}
              onClick={() => handleSelect(story.id)}
              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                story.isFeatured
                  ? 'bg-amber-50/80 border-amber-300 ring-2 ring-amber-200 shadow-xs'
                  : 'bg-white hover:bg-sky-50/60 border-slate-200 hover:border-sky-300'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={story.heroImage}
                  alt={story.title}
                  className="w-16 h-12 rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold uppercase text-sky-800 bg-sky-50 px-1.5 py-0.2 rounded border border-sky-100">
                      {story.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {story.status.toUpperCase()}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                    {story.title}
                  </h4>
                  <div className="text-[11px] text-slate-500">
                    By {story.author.name}
                  </div>
                </div>
              </div>

              {story.isFeatured ? (
                <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-lg shrink-0">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-600" />
                  <span>Current Feature</span>
                </span>
              ) : (
                <button
                  id={`make-lead-feature-btn-${story.id}`}
                  className="text-xs font-semibold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg border border-sky-200 shrink-0 transition-colors cursor-pointer"
                >
                  Set as Feature
                </button>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
