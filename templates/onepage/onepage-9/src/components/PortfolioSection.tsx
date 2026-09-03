import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { Search, Bookmark, ArrowUpRight, Sparkles, Filter, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface PortfolioSectionProps {
  onOpenContact: (subject?: string) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  onShowToast: (title: string, description?: string, type?: 'success' | 'info') => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenContact,
  bookmarks,
  onToggleBookmark,
  onShowToast
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalCaseStudy, setActiveModalCaseStudy] = useState<CaseStudy | null>(null);
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);

  const categories = ['All', 'AI Systems', 'Luxury & Commerce', 'Enterprise Cloud', 'Spatial & Creative'];

  const filteredStudies = CASE_STUDIES.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesBookmarks = !showOnlyBookmarks || bookmarks.includes(item.id);
    return matchesCategory && matchesSearch && matchesBookmarks;
  });

  const handleShare = (title: string) => {
    navigator.clipboard?.writeText?.(window.location.href);
    onShowToast('Link Copied to Clipboard', `Direct link to "${title}" copied.`, 'success');
  };

  return (
    <section id="work-section" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 uppercase tracking-wider mb-4">
              Selected Engagements
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Production systems built for scale, elegance, and enterprise moats.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
                showOnlyBookmarks
                  ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${showOnlyBookmarks ? 'fill-indigo-300' : ''}`} />
              <span>Saved ({bookmarks.length})</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md mb-10">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by client, stack, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        {filteredStudies.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800/60">
            <Filter className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <h4 className="font-display text-lg font-semibold text-slate-300">
              No matching case studies found
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your filter or search keywords to view other production systems.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setShowOnlyBookmarks(false);
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => {
              const isSaved = bookmarks.includes(study.id);

              return (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
                >
                  <div>
                    {/* Media Preview Container */}
                    <div className="relative h-64 overflow-hidden bg-slate-950">
                      <img
                        src={study.heroImage}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-indigo-300">
                          {study.category}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleBookmark(study.id);
                          }}
                          className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                            isSaved
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-950/70 text-slate-300 hover:text-white border border-slate-700/60'
                          }`}
                          title="Bookmark this project"
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                        </button>
                      </div>

                      {/* Client Name Label */}
                      <div className="absolute bottom-4 left-4">
                        <span className="font-mono text-xs text-slate-400 tracking-wider uppercase">
                          {study.client} • {study.year}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {study.title}
                      </h3>

                      <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {study.tagline}
                      </p>

                      {/* Highlight Metric */}
                      {study.impactMetrics[0] && (
                        <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                          <span className="text-xs text-slate-400">
                            {study.impactMetrics[0].label}
                          </span>
                          <span className="font-mono text-sm font-bold text-emerald-400">
                            {study.impactMetrics[0].value}
                          </span>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {study.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] font-mono border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-6 pb-6 pt-2">
                    <button
                      onClick={() => setActiveModalCaseStudy(study)}
                      className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 hover:text-white text-xs font-bold text-slate-200 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Explore Technical Deep-Dive</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Case Study Full Modal */}
      <CaseStudyModal
        caseStudy={activeModalCaseStudy}
        isOpen={!!activeModalCaseStudy}
        onClose={() => setActiveModalCaseStudy(null)}
        isBookmarked={activeModalCaseStudy ? bookmarks.includes(activeModalCaseStudy.id) : false}
        onToggleBookmark={onToggleBookmark}
        onShare={handleShare}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
