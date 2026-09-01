import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Filter } from 'lucide-react';
import { articlesData } from '../../data/articles';
import SectionHeading from '../../components/ui/SectionHeading';

export default function Insights() {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Industry Analysis', 'Technology', 'Procurement', 'Executive Protocol'];

  const filtered = selectedCat === 'All'
    ? articlesData
    : articlesData.filter((a) => a.category === selectedCat);

  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#0A261F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              Thought Leadership & Research
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Aurelia Travel Intelligence.
            </h1>
            <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed font-light">
              Executive insights, airline alliance forecasts, corporate travel AI innovations, and policy procurement frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs & Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-[#D8C3A8]/50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-[#0F382E] text-white shadow-md'
                  : 'bg-white text-[#3E5049] border border-[#D8C3A8]/60 hover:bg-[#F8F5EE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <Link
              key={article.id}
              to={`/insights/${article.slug}`}
              className="group rounded-3xl overflow-hidden bg-white border border-[#D8C3A8]/60 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1412]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F382E] text-white text-[10px] font-bold uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#8FA29A]">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#0E1412] group-hover:text-[#0F382E] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62756D] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-[#D8C3A8]/30 flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-[#0E1412]">{article.author.name}</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F382E] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
