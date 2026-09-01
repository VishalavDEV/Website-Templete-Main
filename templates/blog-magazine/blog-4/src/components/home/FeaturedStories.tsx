import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Article } from '../../types';
import { ArticleCard } from '../articles/ArticleCard';

interface FeaturedStoriesProps {
  articles: Article[];
}

export const FeaturedStories: React.FC<FeaturedStoriesProps> = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-12 border-b border-[#E8E2D5] dark:border-[#3A342E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#E8E2D5] dark:border-[#3A342E]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] mb-1 block">
              Curated Dispatches
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
              Featured Deep Dives
            </h2>
          </div>
          <Link
            to="/stories"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1C1917] dark:text-[#F7F4EE] hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Column Editorial Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  );
};
