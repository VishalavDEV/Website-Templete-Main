import React from 'react';
import { useMagazine } from '../../context/MagazineContext';
import { articles } from '../../data/articles';
import { Link } from 'react-router-dom';
import { X, Bookmark, Trash2, BookOpen, Clock, ArrowRight } from 'lucide-react';

export function BookmarkDrawer() {
  const { bookmarks, toggleBookmark, isBookmarkDrawerOpen, setIsBookmarkDrawerOpen } = useMagazine();

  if (!isBookmarkDrawerOpen) return null;

  const savedArticles = articles.filter((a) => bookmarks.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsBookmarkDrawerOpen(false)}
      />

      {/* Drawer Panel */}
      <aside className="relative w-full max-w-md bg-[#FAF9F5] h-full shadow-2xl z-10 flex flex-col justify-between border-l-2 border-[#141413] animate-slide-left">
        {/* Header */}
        <div>
          <div className="p-5 border-b border-[#E8E5DC] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-[#D43825] fill-current" />
              <h3 className="font-serif-headline text-lg font-bold text-[#141413] uppercase tracking-tight">
                Reading List ({savedArticles.length})
              </h3>
            </div>
            <button
              onClick={() => setIsBookmarkDrawerOpen(false)}
              className="p-1 text-[#73736C] hover:text-[#141413] transition-colors"
              aria-label="Close reading list"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-3 bg-[#F4F1EA] border-b border-[#E8E5DC] text-[0.6875rem] text-[#73736C] flex items-center justify-between px-5">
            <span>Saved locally in your browser</span>
            <span>
              {savedArticles.length > 0
                ? `${savedArticles.reduce((acc, a) => acc + parseInt(a.readTime), 0)} min total reading time`
                : 'Empty'}
            </span>
          </div>

          {/* List of Saved Articles */}
          <div className="p-5 overflow-y-auto max-h-[calc(100vh-220px)] divide-y divide-[#E8E5DC]">
            {savedArticles.length === 0 ? (
              <div className="text-center py-16 text-xs text-[#73736C] space-y-3">
                <BookOpen className="w-8 h-8 text-[#D1CDC4] mx-auto" />
                <p className="font-serif-headline text-base font-bold text-[#141413]">
                  Your reading list is empty
                </p>
                <p className="max-w-xs mx-auto">
                  Click the bookmark icon on any essay to save it for unhurried offline reading.
                </p>
              </div>
            ) : (
              savedArticles.map((art) => (
                <div key={art.id} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4 group">
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-16 h-16 object-cover border border-[#E8E5DC] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[0.625rem] font-bold uppercase tracking-wider text-[#D43825] block">
                      {art.category}
                    </span>
                    <Link
                      to={`/article/${art.slug}`}
                      onClick={() => setIsBookmarkDrawerOpen(false)}
                      className="font-serif-headline text-xs font-bold text-[#141413] hover:text-[#D43825] transition-colors leading-snug line-clamp-2 block mt-0.5"
                    >
                      {art.title}
                    </Link>
                    <div className="flex items-center justify-between mt-2 text-[0.6875rem] text-[#73736C]">
                      <span className="font-mono">{art.readTime}</span>
                      <button
                        onClick={() => toggleBookmark(art.id)}
                        className="text-[#73736C] hover:text-[#D43825] transition-colors flex items-center gap-1"
                        title="Remove from list"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        {savedArticles.length > 0 && (
          <div className="p-5 border-t border-[#E8E5DC] bg-white">
            <Link
              to={`/article/${savedArticles[0].slug}`}
              onClick={() => setIsBookmarkDrawerOpen(false)}
              className="w-full py-3 bg-[#141413] text-[#FAF9F5] hover:bg-[#D43825] transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Start Reading First Item</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
