import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag, ArrowRight, Filter } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const POPULAR_SEARCHES = [
  'Precision Ag',
  'Robotics',
  'Neural Networks',
  'Hydroponics',
  'Water Tech',
  'Genomics',
  'Vertical Ag',
  'Drones'
];

export const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Search Archival Library — AGROTECH AI';
  }, []);

  const filteredArticles = ARTICLES.filter(article => {
    const matchesQuery = query.trim() === '' ||
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      article.category.toLowerCase().includes(query.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));

    const matchesTag = !selectedTag || article.tags.includes(selectedTag);

    return matchesQuery && matchesTag;
  });

  return (
    <main className="min-h-screen pt-28 pb-20 bg-theme-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Banner */}
        <ScrollReveal direction="down">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 font-mono-tech text-xs uppercase tracking-widest font-bold">
              <Search className="w-3.5 h-3.5" />
              <span>EDITORIAL ARCHIVE SEARCH</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif-editorial font-bold text-theme-primary tracking-tight">
              Search Archival Library
            </h1>

            <p className="text-sm sm:text-base text-theme-secondary font-sans leading-relaxed">
              Explore 25+ peer-reviewed essays, robotics field reports, and artificial intelligence agronomy breakdowns across our digital archives.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Search Input & Tag Filters */}
        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto mb-12 space-y-6">
            <div className="relative">
              <Search className="w-6 h-6 text-emerald-400 absolute left-5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search topics, author names, robotics, genomics..."
                className="w-full pl-14 pr-12 py-4 text-lg font-serif-editorial bg-theme-surface border border-neutral-800 focus:border-emerald-500 rounded-2xl outline-none text-theme-primary placeholder-neutral-500 transition-colors shadow-lg font-bold"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono-tech text-theme-muted hover:text-emerald-400 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono-tech text-theme-muted uppercase tracking-widest mr-2 flex items-center gap-1 font-bold">
                <Tag className="w-3.5 h-3.5" /> QUICK FILTERS:
              </span>
              {POPULAR_SEARCHES.map(tag => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(isActive ? null : tag)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono-tech transition-all font-medium ${
                      isActive
                        ? 'bg-emerald-600 text-white font-bold shadow-md'
                        : 'bg-theme-muted text-theme-secondary hover:bg-neutral-800'
                    }`}
                  >
                    #{tag}
                  </button>
                );
              })}
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="text-xs font-mono-tech text-emerald-400 underline font-bold ml-2"
                >
                  Reset Filter
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Search Results Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs font-mono-tech text-theme-muted">
            <span className="font-bold uppercase tracking-widest text-emerald-400">
              FOUND {filteredArticles.length} INDEXED ESSAYS
            </span>
            <span className="flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> FILTERED SEARCH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art, idx) => (
              <ScrollReveal key={art.id} delay={(idx % 3) * 120}>
                <div className="group cursor-pointer rounded-3xl bg-theme-surface border border-neutral-800 hover:border-emerald-500 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden h-full">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden block">
                      <ImageWithFallback src={art.image} alt={art.title} hoverZoom className="w-full h-full object-cover block" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white font-mono-tech text-[10px] uppercase tracking-widest font-bold">
                        {art.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="text-xs text-theme-muted font-mono-tech flex items-center justify-between">
                        <span>{art.date}</span>
                        <span>{art.readingTime}</span>
                      </div>

                      <Link to={`/article/${art.slug}`}>
                        <h3 className="text-xl font-serif-editorial font-bold text-theme-primary group-hover:text-emerald-400 transition-colors line-clamp-2">
                          {art.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-theme-secondary font-sans line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-neutral-800 flex items-center justify-between text-xs font-mono-tech mt-auto">
                    <span className="text-theme-muted">BY {art.author.name}</span>
                    <Link
                      to={`/article/${art.slug}`}
                      className="font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      READ <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
