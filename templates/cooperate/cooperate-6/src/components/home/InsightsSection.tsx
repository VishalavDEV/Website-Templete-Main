import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { articlesData } from '../../data/articles';
import SectionHeading from '../ui/SectionHeading';

export default function InsightsSection() {
  const featuredArticle = articlesData[0];
  const otherArticles = articlesData.slice(1, 5);

  return (
    <section className="py-20 sm:py-28 bg-[#F8F5EE] border-t border-[#D8C3A8]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            badge="Intelligence & Research"
            title="Strategic Corporate Travel Insights"
            subtitle="Thought leadership, procurement analysis, and technological forecasts from Aurelia's global mobility strategists."
            align="left"
            className="mb-0"
          />

          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#0F382E] hover:text-[#165042] flex-shrink-0 group"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Large Article (5 cols) */}
          <div className="lg:col-span-5">
            <Link
              to={`/insights/${featuredArticle.slug}`}
              className="block group rounded-3xl overflow-hidden bg-white border border-[#D8C3A8]/60 shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1412]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F382E] text-white text-[10px] font-bold uppercase tracking-wider">
                  {featuredArticle.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#8FA29A]">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#0E1412] group-hover:text-[#0F382E] transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#62756D] leading-relaxed line-clamp-3">
                  {featuredArticle.summary}
                </p>

                <div className="pt-4 border-t border-[#D8C3A8]/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-[#0E1412]">{featuredArticle.author.name}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F382E] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* 4 Supporting Article Rows (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                to={`/insights/${article.slug}`}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 rounded-2xl bg-white border border-[#D8C3A8]/50 hover:border-[#0F382E]/40 hover:shadow-sm transition-all group"
              >
                <div className="w-full sm:w-32 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-[#0E1412]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#0F382E]">
                    <span>{article.category}</span>
                    <span className="text-[#8FA29A]">•</span>
                    <span className="text-[#8FA29A]">{article.readTime}</span>
                  </div>

                  <h4 className="font-serif text-lg font-semibold text-[#0E1412] group-hover:text-[#0F382E] transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-[#62756D] line-clamp-1">
                    {article.summary}
                  </p>
                </div>

                <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#F8F5EE] text-[#0F382E] items-center justify-center flex-shrink-0 group-hover:bg-[#0F382E] group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
