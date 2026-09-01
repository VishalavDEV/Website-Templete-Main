import React, { useState } from 'react';
import { journalArticles } from '../data/journal';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock } from 'lucide-react';

export const Journal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = journalArticles.filter((art) => {
    if (!searchQuery) return true;
    return (
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
          JOURNAL // INSIGHTS & ESSAYS
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          DESIGN DISPATCH
        </h1>
        <p className="max-w-xl text-base text-neutral-600 dark:text-neutral-400 font-light">
          Thoughtful explorations on ergonomics, typographic rhythm, 3D spatial canvas, and micro-interaction choreography.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles & essays..."
          className="w-full rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 pl-10 pr-4 py-2.5 font-mono text-xs text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none focus:border-blue-600"
        />
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((art) => (
          <Link
            key={art.id}
            to={`/journal/${art.id}`}
            className="group flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-md hover:border-blue-500 transition-all"
          >
            <div className="space-y-4">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-neutral-950 relative">
                <img
                  src={art.coverImage}
                  alt={art.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-blue-400 font-mono text-[10px] font-bold uppercase">
                  {art.category}
                </div>
              </div>

              <div className="flex items-center space-x-3 font-mono text-xs text-neutral-500">
                <span className="flex items-center space-x-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{art.readTime}</span>
                </span>
                <span>•</span>
                <span>{art.date}</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {art.title}
              </h3>

              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed line-clamp-3">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src={art.author.avatar}
                  alt={art.author.name}
                  className="h-7 w-7 rounded-full object-cover"
                />
                <span className="font-mono text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                  {art.author.name}
                </span>
              </div>

              <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold group-hover:translate-x-1 transition-transform">
                READ →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
