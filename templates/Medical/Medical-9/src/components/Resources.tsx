import React, { useState } from 'react';
import { RESOURCE_ARTICLES } from '../data/mockData';
import { ResourceArticle } from '../types';
import { ResourceModal } from './ResourceModal';
import { Search, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface ResourcesProps {
  onBookmark: (title: string) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ onBookmark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);

  const categories = ['All', 'Diabetes Basics', 'Nutrition', 'Exercise', 'Medication', 'Foot Health', 'Prevention'];

  const filteredArticles = RESOURCE_ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="resources" className="py-20 lg:py-28 bg-[#F2ECE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans block mb-2">
              Patient Knowledge Center
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#542F3B]">
              Evidence-based <br />
              <span className="italic font-normal text-[#C97873]">health guidance.</span>
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#70696C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search health guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E5DDD8] text-xs text-[#252326] placeholder-[#70696C]/60 focus:outline-none focus:ring-2 focus:ring-[#C97873]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#C97873] ${
                selectedCategory === cat
                  ? 'bg-[#542F3B] text-white shadow-xs'
                  : 'bg-white text-[#542F3B] hover:bg-[#FAF8F5] border border-[#E5DDD8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E5DDD8]">
            <BookOpen className="w-10 h-10 text-[#C97873] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl font-bold text-[#542F3B]">No articles found</h3>
            <p className="text-xs text-[#70696C] font-sans mt-1">Try adjusting your category filter or search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5DDD8] hover:border-[#C97873] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#F2ECE9]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#C97873] uppercase tracking-wider">
                      {art.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-[#70696C] font-sans mb-2">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-[#C97873]" /> {art.readTime}
                      </span>
                      <span>•</span>
                      <span>{art.author}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#542F3B] group-hover:text-[#C97873] transition-colors leading-snug mb-2">
                      {art.title}
                    </h3>

                    <p className="text-xs text-[#70696C] font-sans font-normal line-clamp-2 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Read CTA */}
                <div className="px-6 pb-6 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#542F3B] group-hover:text-[#C97873] transition-colors pt-4 border-t border-[#F2ECE9]">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Article Modal */}
      <ResourceModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onBookmark={onBookmark}
      />
    </section>
  );
};
