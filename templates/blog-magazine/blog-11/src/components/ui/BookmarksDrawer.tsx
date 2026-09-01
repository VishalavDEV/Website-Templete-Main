import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bookmark, X, Trash2, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ARTICLES } from '../../data/articles';

export const BookmarksDrawer: React.FC = () => {
  const { bookmarks, toggleBookmark, isBookmarksOpen, setIsBookmarksOpen } = useApp();
  const navigate = useNavigate();

  if (!isBookmarksOpen) return null;

  const bookmarkedArticles = ARTICLES.filter(art => bookmarks.includes(art.slug));

  const handleRead = (slug: string) => {
    setIsBookmarksOpen(false);
    navigate(`/article/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsBookmarksOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
      />

      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-paper-surface dark:bg-neutral-900 shadow-2xl flex flex-col border-l border-neutral-200 dark:border-neutral-800 animate-slide-left">
        {/* Header */}
        <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Bookmark className="w-5 h-5 text-emerald-700 dark:text-emerald-400 fill-emerald-700 dark:fill-emerald-400" />
            <h3 className="font-serif-editorial text-xl font-bold">Saved Reading List</h3>
            <span className="text-xs font-mono-tech px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
              {bookmarkedArticles.length}
            </span>
          </div>
          <button
            onClick={() => setIsBookmarksOpen(false)}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {bookmarkedArticles.length === 0 ? (
            <div className="py-20 text-center text-neutral-500">
              <Bookmark className="w-12 h-12 mx-auto mb-3 opacity-30 stroke-1" />
              <p className="font-serif-editorial text-lg mb-1">Your reading list is empty.</p>
              <p className="text-xs">Click the bookmark icon on any article to save it for offline reading.</p>
            </div>
          ) : (
            bookmarkedArticles.map(art => (
              <div
                key={art.id}
                className="group relative p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-paper-light dark:bg-neutral-950 hover:border-emerald-700 dark:hover:border-emerald-500 transition-all flex gap-3"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-16 h-16 object-cover rounded-lg shrink-0 cursor-pointer"
                  onClick={() => handleRead(art.slug)}
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono-tech uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                    {art.category}
                  </span>
                  <h4
                    onClick={() => handleRead(art.slug)}
                    className="text-sm font-serif-editorial font-bold line-clamp-2 hover:text-emerald-700 dark:hover:text-emerald-400 cursor-pointer transition-colors"
                  >
                    {art.title}
                  </h4>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-200/50 dark:border-neutral-800">
                    <span className="text-[11px] text-neutral-500">{art.readingTime}</span>
                    <button
                      onClick={() => toggleBookmark(art.slug)}
                      className="text-neutral-400 hover:text-rose-600 transition-colors p-1"
                      title="Remove from list"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {bookmarkedArticles.length > 0 && (
          <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
            <button
              onClick={() => {
                setIsBookmarksOpen(false);
                navigate('/stories');
              }}
              className="w-full py-3 px-4 rounded-xl bg-forest-900 dark:bg-emerald-600 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-forest-800 dark:hover:bg-emerald-500 transition-all shadow-md"
            >
              Explore More Stories <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
