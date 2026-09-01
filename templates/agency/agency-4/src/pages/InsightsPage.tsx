import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ArticleCard } from '../components/ui/ArticleCard';
import { INSIGHTS } from '../data/insights';
import { CtaSection } from '../components/sections/CtaSection';

const CATEGORIES = ['All', 'Design Systems', 'Brand Strategy', 'Future Web'];

export const InsightsPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = INSIGHTS.filter((insight) => {
    const matchCat = selectedCat === 'All' || insight.category === selectedCat;
    const matchQuery =
      insight.title.toLowerCase().includes(query.toLowerCase()) ||
      insight.summary.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="pt-32 pb-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="AURELIA Journal"
          title="Insights & Design Perspectives"
          subtitle="Explore our collection of essays, technical deep dives, and strategic frameworks written by studio partners."
        />

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-[#EAE6DF] pb-6">
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCat === cat
                    ? 'bg-[#1A1918] text-white shadow-sm'
                    : 'text-[#6B6863] hover:text-[#1A1918] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-white border border-[#EAE6DF] rounded-full py-2.5 pl-10 pr-4 text-xs text-[#1A1918] placeholder-gray-400 focus:outline-none focus:border-[#D96B43] transition-colors"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          </div>
        </div>

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={selectedCat + query}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            >
              {filtered.map((article, idx) => (
                <ArticleCard key={article.id} article={article} index={idx} />
              ))}
            </motion.div>
          ) : (
            <div className="py-20 text-center bg-white rounded-3xl border border-[#EAE6DF] my-12">
              <p className="text-lg font-bold font-display text-[#1A1918]">No articles found</p>
              <p className="text-xs text-[#6B6863] mt-1">Try resetting search keywords or category filters.</p>
              <button
                onClick={() => {
                  setSelectedCat('All');
                  setQuery('');
                }}
                className="mt-4 px-6 py-2 rounded-full bg-[#D96B43] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>

      <CtaSection />
    </div>
  );
};
