import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { Article } from '../types';
import { articleService } from '../services/articleService';
import { useBookmarks } from '../hooks/useBookmarks';
import { ArticleCard } from '../components/articles/ArticleCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EmptyState } from '../components/common/EmptyState';
import { CardSkeleton } from '../components/common/Skeleton';

export const Bookmarks: React.FC = () => {
  const { bookmarkedIds, clearBookmarks } = useBookmarks();
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSaved() {
      setLoading(true);
      try {
        const allRes = await articleService.getArticles({ pageSize: 50 });
        const filtered = allRes.data.filter((art) => bookmarkedIds.includes(art.id));
        setSavedArticles(filtered);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadSaved();
  }, [bookmarkedIds]);

  const handleClearAll = () => {
    if (window.confirm('Remove all saved stories from your reading list?')) {
      clearBookmarks();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      <Breadcrumbs items={[{ label: 'Saved Stories' }]} />

      <div className="py-6 sm:py-8 border-b border-[#E8E2D5] dark:border-[#3A342E] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] mb-2 block">
            Saved Stories
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
            Reading List
          </h1>
          <p className="text-base text-[#44403C] dark:text-[#D7D1C6] mt-2 leading-relaxed font-normal">
            {savedArticles.length} {savedArticles.length === 1 ? 'story' : 'stories'} saved for later reading.
          </p>
        </div>

        {savedArticles.length > 0 && (
          <button
            onClick={handleClearAll}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-xs font-bold hover:bg-red-100 transition-colors self-start sm:self-auto cursor-pointer shadow-xs"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Reading List</span>
          </button>
        )}
      </div>

      <div className="my-10">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} variant="grid" />
            ))}
          </div>
        ) : savedArticles.length === 0 ? (
          <EmptyState
            title="Your Reading List is Empty"
            description="You haven't bookmarked any stories yet. Select the bookmark icon on any dispatch to save it here."
            actionText="Explore Stories"
            actionLink="/stories"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="grid" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
