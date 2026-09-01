import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import articlesData from '../data/articles.json';
import { Article } from '../types';
import {
  Search,
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Clock,
  ArrowRight,
  Sparkles,
  Calendar,
} from 'lucide-react';

export const HealthLibraryView: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  const { openArticle, savedArticleIds, toggleSaveArticle } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const articles = articlesData as Article[];

  const categories = [
    'all',
    'Cardiovascular Health',
    'Neurology & Cognitive Science',
    'Dermatology & Skin Barrier',
    'Preventive Medicine & Metabolism',
    'Integrative Wellness & Recovery',
    'saved',
  ];

  const filteredArticles = articles.filter((art) => {
    if (selectedCategory === 'saved') {
      if (!savedArticleIds.includes(art.id)) return false;
    } else if (selectedCategory !== 'all' && art.category !== selectedCategory) {
      return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = art.title.toLowerCase().includes(q);
      const matchSub = art.subtitle.toLowerCase().includes(q);
      const matchCat = art.category.toLowerCase().includes(q);
      return matchTitle || matchSub || matchCat;
    }

    return true;
  });

  return (
    <section
      id="health-library-section"
      className={`py-16 md:py-24 ${isFullPage ? 'pt-32' : 'bg-[#F9F7FB]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CLINICAL INSIGHTS & JOURNAL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E3445] tracking-tight">
              Evidence-based longevity & health science.
            </h2>
            <p className="text-sm sm:text-base text-[#756B7C] mt-3 leading-relaxed">
              Curated clinical articles and wellness protocols written directly by Aura Health
              attending physicians and clinical researchers.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8B6FAE] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="library-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search health library..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-[#3E3445]/10 focus:border-[#8B6FAE] rounded-2xl text-xs text-[#3E3445] focus:outline-none shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const label = cat === 'all' ? 'All Publications' : cat === 'saved' ? `Saved (${savedArticleIds.length})` : cat;
            return (
              <button
                key={cat}
                id={`article-cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#8B6FAE] text-white shadow-xs'
                    : 'bg-white hover:bg-[#E8DDF2]/50 text-[#756B7C] border border-[#3E3445]/8'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="lilac-card p-12 text-center max-w-md mx-auto bg-white">
            <BookOpen className="w-10 h-10 text-[#B9A1D0] mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#3E3445] mb-1">
              No publications found
            </h3>
            <p className="text-xs text-[#756B7C]">
              Try adjusting your search keywords or switching category filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => {
              const isSaved = savedArticleIds.includes(art.id);
              return (
                <div
                  key={art.id}
                  id={`article-card-${art.id}`}
                  className="lilac-card lilac-card-hover rounded-3xl overflow-hidden bg-white flex flex-col justify-between group cursor-pointer"
                  onClick={() => openArticle(art)}
                >
                  <div>
                    {/* Article Image & Save Bookmark */}
                    <div className="relative">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-52 object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/95 text-[#665080] backdrop-blur-xs">
                          {art.category}
                        </span>
                      </div>

                      <button
                        id={`bookmark-art-${art.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSaveArticle(art.id);
                        }}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                          isSaved
                            ? 'bg-[#E8DDF2] text-[#665080]'
                            : 'bg-white/80 hover:bg-white text-[#756B7C]'
                        }`}
                        title={isSaved ? 'Saved' : 'Save article'}
                      >
                        {isSaved ? (
                          <BookmarkCheck className="w-4 h-4 text-[#8B6FAE]" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Article Text Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[11px] text-[#756B7C] mb-2">
                        <Clock className="w-3.5 h-3.5 text-[#8B6FAE]" />
                        <span>{art.readingTime}</span>
                        <span>•</span>
                        <span>{art.date}</span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-[#3E3445] group-hover:text-[#665080] transition-colors leading-snug mb-2">
                        {art.title}
                      </h3>
                      <p className="text-xs text-[#756B7C] line-clamp-2 leading-relaxed">
                        {art.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Article Author Footer */}
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-[#3E3445]/6">
                    <div className="flex items-center gap-2.5 pt-3">
                      <img
                        src={art.author.avatar}
                        alt={art.author.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <div className="text-[11px]">
                        <span className="font-semibold text-[#3E3445] block">
                          {art.author.name}
                        </span>
                        <span className="text-[#756B7C]">{art.author.role}</span>
                      </div>
                    </div>

                    <div className="pt-3">
                      <span className="text-xs font-semibold text-[#8B6FAE] group-hover:text-[#665080] flex items-center gap-1">
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
