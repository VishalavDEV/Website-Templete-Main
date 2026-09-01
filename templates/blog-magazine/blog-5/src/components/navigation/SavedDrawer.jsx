import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useZMag } from '../../context/ZMagContext';
import { mockArticles } from '../../data/mockArticles';
import { X, Bookmark, Trash2, ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SavedDrawer() {
  const { isSavedOpen, setIsSavedOpen, bookmarks, toggleBookmark, clearBookmarks } = useZMag();
  const shouldReduceMotion = useReducedMotion();

  const savedArticlesList = mockArticles.filter((art) => bookmarks.includes(art.id));

  // Compute total reading time
  const totalMinutes = savedArticlesList.reduce((acc, curr) => {
    const mins = parseInt(curr.readTime) || 10;
    return acc + mins;
  }, 0);

  return (
    <AnimatePresence>
      {isSavedOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsSavedOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              damping: 28,
              stiffness: 260,
            }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-white text-[#111827] shadow-2xl flex flex-col justify-between z-10 border-l border-[#E5E7EB]"
          >
            {/* Top Drawer Header */}
            <div className="p-6 border-b border-[#E5E7EB] flex items-center justify-between bg-white/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#EBF4FF] text-[#0055FF] flex items-center justify-center">
                  <Bookmark className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base uppercase tracking-tight text-[#111827]">
                    Saved Collection
                  </h3>
                  <span className="font-mono text-[0.6875rem] text-[#6B7280]">
                    {savedArticlesList.length} Monograph{savedArticlesList.length === 1 ? '' : 's'} &bull; ~{totalMinutes} min total
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsSavedOpen(false)}
                className="p-2 rounded-full bg-[#F3F4F6] hover:bg-[#0055FF] hover:text-white transition-colors cursor-pointer"
                aria-label="Close saved drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Middle Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {savedArticlesList.length === 0 ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#F3F4F6] text-[#9CA3AF] flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#111827]">
                    Your reading list is empty
                  </h4>
                  <p className="text-xs text-[#6B7280] max-w-xs mx-auto leading-relaxed">
                    Bookmark essays and monographs across Z MAG to build your curated offline architectural archive.
                  </p>
                  <button
                    onClick={() => {
                      setIsSavedOpen(false);
                    }}
                    className="mt-4 px-5 py-2 rounded-full bg-[#0055FF] text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#0040C7] transition-all cursor-pointer shadow-sm"
                  >
                    Explore Monographs
                  </button>
                </div>
              ) : (
                savedArticlesList.map((art) => (
                  <motion.div
                    key={art.id}
                    layout={!shouldReduceMotion}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#BFDBFE] transition-all group relative space-y-3"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#E5E7EB]">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className="font-mono text-[0.625rem] font-bold text-[#0055FF] uppercase tracking-wider block">
                          {art.category} &bull; {art.readTime}
                        </span>
                        <Link
                          to={`/article/${art.id}`}
                          onClick={() => setIsSavedOpen(false)}
                          className="font-heading font-bold text-sm text-[#111827] hover:text-[#0055FF] transition-colors line-clamp-2 leading-snug"
                        >
                          {art.title}
                        </Link>
                        <span className="text-[0.6875rem] font-mono text-[#6B7280] block mt-0.5">
                          By {art.author}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E5E7EB] text-xs">
                      <Link
                        to={`/article/${art.id}`}
                        onClick={() => setIsSavedOpen(false)}
                        className="inline-flex items-center gap-1 font-heading text-[0.6875rem] font-bold text-[#0055FF] hover:translate-x-0.5 transition-transform"
                      >
                        <span>Read Monograph</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      <button
                        onClick={() => toggleBookmark(art.id)}
                        className="p-1 rounded-md text-[#9CA3AF] hover:text-[#EF4444] hover:bg-[#FEE2E2] transition-colors cursor-pointer"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Bottom Drawer Footer */}
            {savedArticlesList.length > 0 && (
              <div className="p-6 border-t border-[#E5E7EB] bg-[#F8F9FA] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#6B7280]">
                  <span>Archived locally on your device</span>
                  <button
                    onClick={clearBookmarks}
                    className="text-[#EF4444] hover:underline cursor-pointer font-bold"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
