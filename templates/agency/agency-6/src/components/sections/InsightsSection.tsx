import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ARTICLES } from '../../data/mockData';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const InsightsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 sm:py-36 bg-[#090909] text-[#f8f7f4] relative overflow-hidden select-none border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#D1FF00]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] font-black text-[#D1FF00] block mb-2">
                EXECUTIVE BRIEFINGS // KNOWLEDGE
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase text-white tracking-tighter">
                THOUGHT LEADERSHIP
              </h2>
            </div>

            <button
              onClick={() => navigate('/insights')}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#D1FF00] uppercase tracking-widest font-black hover:text-white transition-colors cursor-pointer"
            >
              <span>VIEW ALL BRIEFINGS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {ARTICLES.map((article, idx) => (
            <ScrollReveal key={article.id} animation="fade-up" delay={idx * 150}>
              <div
                onClick={() => navigate(`/insights/${article.id}`)}
                className="group bg-[#111111] border-2 border-white/10 rounded-none overflow-hidden hover:border-[#D1FF00] transition-all duration-300 flex flex-col justify-between cursor-pointer h-full shadow-2xl"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-56 overflow-hidden bg-black">
                    <img
                      src={article.image}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#090909] border border-[#D1FF00]/50 rounded-none font-mono text-[10px] font-black text-[#D1FF00] uppercase tracking-widest">
                      {article.category}
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[10px] font-mono font-bold text-gray-400 uppercase">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#D1FF00]" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-black uppercase tracking-tighter text-white group-hover:text-[#D1FF00] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs font-mono text-gray-400 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Author Footer */}
                <div className="p-6 pt-0 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-none object-cover border border-white/20"
                    />
                    <div>
                      <div className="text-xs font-mono font-black text-white">{article.author.name}</div>
                      <div className="text-[10px] font-mono text-gray-400">{article.author.role}</div>
                    </div>
                  </div>

                  <div className="p-2 bg-[#090909] border border-white/20 rounded-none group-hover:bg-[#D1FF00] group-hover:text-[#090909] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
