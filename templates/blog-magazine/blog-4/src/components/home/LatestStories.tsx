import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Grid, List as ListIcon } from 'lucide-react';
import { Article } from '../../types';
import { ArticleCard } from '../articles/ArticleCard';

interface LatestStoriesProps {
  articles: Article[];
}

export const LatestStories: React.FC<LatestStoriesProps> = ({ articles }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#E8E2D5] dark:border-[#3A342E]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] mb-1 block">
              Continuous Feed
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
              Latest Dispatches
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center p-1 rounded-xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E]">
              <button
                onClick={() => setViewMode('grid')}
                aria-label="Grid layout"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#1C1917] dark:bg-[#C85A32] text-white'
                    : 'text-[#78716C] dark:text-[#A39C90] hover:text-[#1C1917]'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                aria-label="List layout"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[#1C1917] dark:bg-[#C85A32] text-white'
                    : 'text-[#78716C] dark:text-[#A39C90] hover:text-[#1C1917]'
                }`}
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>

            <Link
              to="/stories"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1C1917] dark:text-[#F7F4EE] hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors"
            >
              <span>Explore Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Stories Listing */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="grid" />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="list" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
