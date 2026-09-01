import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ARTICLES } from '../data/mockData';
import { ArrowUpRight, Clock, Search } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { CTASection } from '../components/sections/CTASection';

export const Insights: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const navigate = useNavigate();

  const categories = ['All', 'Trends', 'Reports', 'Articles'];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 bg-[#f8f7f4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-black/10">
        <ScrollReveal animation="fade-up">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-700 font-bold block mb-3">
            INTEL BRIEFINGS // INSIGHTS
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black uppercase text-[#121316] tracking-tight leading-[0.95]">
            THOUGHT LEADERSHIP <br />
            <span className="text-lime-600 italic font-light">&</span> SPATIAL STRATEGY.
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl font-sans text-[#626670] leading-relaxed pt-6">
            Executive briefs, WebGL technical breakdowns, and agentic AI strategy essays authored by VANTA FORM practice leaders.
          </p>
        </ScrollReveal>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-black/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#121316] text-lime-400 font-bold shadow-md'
                    : 'bg-white text-[#121316] hover:bg-black/5 border border-black/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search briefings..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-black/15 rounded-full text-xs font-sans text-[#121316] focus:outline-none focus:border-black"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/insights/${article.id}`)}
              className="bg-[#121316] text-[#f8f7f4] rounded-2xl border border-white/10 overflow-hidden hover:border-lime-400 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full font-mono text-[10px] text-lime-400 uppercase tracking-widest">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-gray-400 uppercase">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-lime-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-serif font-bold text-white group-hover:text-lime-400 transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs font-sans text-gray-400 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xs font-mono font-bold text-white">{article.author.name}</div>
                    <div className="text-[10px] font-mono text-gray-400">{article.author.role}</div>
                  </div>
                </div>

                <div className="p-2 bg-white/5 rounded-full group-hover:bg-lime-400 group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
};
