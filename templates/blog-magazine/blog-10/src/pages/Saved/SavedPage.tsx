import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Sparkles, Trash2, ArrowRight, BookOpen } from 'lucide-react';
import { useAppContext } from '../../store/AppContext';
import { mockApi } from '../../services/mockApi';
import { Article } from '../../types';
import { StoryCard } from '../../components/StoryCard/StoryCard';

export const SavedPage: React.FC = () => {
  const { bookmarks, toggleBookmark, clearBookmarks, showToast } = useAppContext();
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>([]);
  const [recommendedArticles, setRecommendedArticles] = useState<Article[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let isMounted = true;

    const loadSavedArticles = async () => {
      const all = await mockApi.getArticles();
      if (isMounted) {
        const matched = all.filter((art) => bookmarks.includes(art.slug));
        setBookmarkedArticles(matched);
        setRecommendedArticles(all.slice(0, 3));
      }
    };

    loadSavedArticles();
    return () => {
      isMounted = false;
    };
  }, [bookmarks]);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 select-none space-y-16">
      
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c98a3e]/15 border border-[#c98a3e]/30 text-[#e0a358] text-[10px] font-mono tracking-widest uppercase mb-2">
              <Bookmark className="w-3.5 h-3.5" />
              <span>SAVED READING DOSSIER</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
              YOUR SAVED DISPATCHES
            </h1>
            <p className="font-sans text-sm text-[#a8a49c] mt-1">
              {bookmarkedArticles.length} stories marked for offline study and long-form reading.
            </p>
          </div>

          {bookmarkedArticles.length > 0 && (
            <button
              onClick={() => {
                clearBookmarks();
                showToast('All saved bookmarks cleared.', 'info');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#181a1e] border border-white/15 text-xs font-mono text-[#f87171] hover:bg-white/5 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>CLEAR DOSSIER</span>
            </button>
          )}
        </div>
      </section>

      {/* Bookmarked Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {bookmarkedArticles.length === 0 ? (
          <div className="py-20 rounded-3xl bg-[#141619] border border-white/10 text-center space-y-4 max-w-2xl mx-auto px-6">
            <Bookmark className="w-12 h-12 text-[#c98a3e] mx-auto opacity-40" />
            <h2 className="font-serif text-2xl font-bold text-white">
              No saved dispatches yet.
            </h2>
            <p className="font-sans text-sm text-[#a8a49c]">
              Click the bookmark icon on any story, investigation, or field note to save it to your personal TERRA reading list.
            </p>
            <div className="pt-2">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c98a3e] text-black font-bold text-xs font-mono tracking-wider"
              >
                <span>EXPLORE DISPATCHES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkedArticles.map((art) => (
              <StoryCard key={art.id} article={art} variant="secondary" />
            ))}
          </div>
        )}
      </section>

      {/* Recommended Dispatches */}
      {recommendedArticles.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-12 border-t border-white/10">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#e0a358] uppercase block mb-1">
              RECOMMENDED EXPLORATION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Essential Dispatches to Discover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedArticles.map((art) => (
              <StoryCard key={art.id} article={art} variant="secondary" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
