import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowUpRight, Bookmark, BookmarkCheck, Search, Filter } from 'lucide-react';
import articlesData from '../data/articles.json';
import { Article } from '../types';
import { useSavedArticles } from '../hooks/useSavedArticles';
import { showToast } from '../components/common/Toast';

const CATEGORIES = ['ALL', 'STRATEGY', 'DESIGN', 'TECHNOLOGY', 'CULTURE', 'BRANDING'];

export const InsightsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const navigate = useNavigate();

  const { savedIds, isArticleSaved, toggleSave } = useSavedArticles();
  const allArticles = articlesData as Article[];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArticles = allArticles.filter((a) => {
    const matchesCat = activeCategory === 'ALL' || a.category.toUpperCase() === activeCategory;
    const matchesSaved = !showSavedOnly || savedIds.includes(a.id);
    const matchesSearch =
      !searchQuery.trim() ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSaved && matchesSearch;
  });

  const handleToggleSave = (e: React.MouseEvent, article: Article) => {
    e.stopPropagation();
    const res = toggleSave(article.id);
    if (res.isSaved) {
      showToast('Article Saved', `Saved "${article.title}" to local archive`);
    } else {
      showToast('Article Removed', `Removed from saved articles`, 'info');
    }
  };

  return (
    <div className="relative z-10 pt-32 sm:pt-40 pb-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOURNAL & ESSAYS</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-ink-primary uppercase leading-[0.95]">
          EDITORIAL <br />
          <span className="text-stroke-strong">INSIGHTS</span>
        </h1>
        <p className="max-w-2xl text-base text-ink-secondary leading-relaxed">
          Critical essays on brand systems, spatial ergonomics, creative engineering, and the cultural shifts transforming digital experience.
        </p>
      </div>

      {/* Controls: Categories, Search, Saved Filter */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-ink-border">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] font-mono uppercase text-ink-muted flex items-center gap-1 mr-2">
            <Filter className="w-3 h-3" />
            TOPIC:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono uppercase px-3.5 py-1.5 rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-ink-primary text-warm-white font-bold shadow-sm'
                  : 'bg-warm-white/80 hover:bg-warm-white text-ink-secondary hover:text-ink-primary border border-ink-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Saved Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono border transition-all ${
              showSavedOnly
                ? 'bg-accent-coral text-warm-white border-accent-coral font-bold'
                : 'bg-warm-white border-ink-border text-ink-secondary hover:text-ink-primary'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>SAVED ({savedIds.length})</span>
          </button>

          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays..."
              className="w-full pl-9 pr-3 py-2 rounded-full text-xs font-mono bg-warm-white border border-ink-border text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-accent-coral"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-24 glass-panel rounded-3xl space-y-4">
          <h3 className="font-display text-2xl font-bold uppercase text-ink-primary">NO ARTICLES FOUND</h3>
          <p className="text-xs font-mono text-ink-secondary">
            {showSavedOnly
              ? 'You have not saved any articles yet. Bookmark articles with the ribbon icon to read later.'
              : `No articles matched your criteria "${searchQuery || activeCategory}"`}
          </p>
          <button
            onClick={() => {
              setActiveCategory('ALL');
              setSearchQuery('');
              setShowSavedOnly(false);
            }}
            className="text-xs font-mono uppercase text-accent-coral font-semibold hover:underline"
          >
            RESET ALL FILTERS
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => {
            const isSaved = isArticleSaved(article.id);

            return (
              <article
                key={article.id}
                onClick={() => navigate(`/insights/${article.id}`)}
                className="group glass-panel rounded-3xl p-5 border border-ink-border cursor-pointer hover:border-accent-coral/50 transition-all duration-300 flex flex-col justify-between"
                data-cursor="VIEW"
                data-cursor-text="READ"
              >
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-paper relative">
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => handleToggleSave(e, article)}
                      className="absolute top-3 right-3 p-2 rounded-full glass-panel-strong hover:bg-warm-white text-ink-primary shadow-sm transition-colors"
                      aria-label={isSaved ? 'Remove from saved' : 'Save article'}
                      data-cursor="LINK"
                    >
                      {isSaved ? (
                        <BookmarkCheck className="w-4 h-4 text-accent-coral" />
                      ) : (
                        <Bookmark className="w-4 h-4 text-ink-muted group-hover:text-ink-primary" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted">
                    <span className="uppercase text-accent-coral font-semibold">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl uppercase text-ink-primary group-hover:text-accent-coral transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-secondary line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-ink-border/60 flex items-center justify-between text-xs font-mono text-ink-muted">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>{article.author}</span>
                  </div>
                  <span className="flex items-center gap-1 text-accent-coral font-semibold group-hover:translate-x-1 transition-transform">
                    READ <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
