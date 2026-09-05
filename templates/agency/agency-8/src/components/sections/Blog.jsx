import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ArticleModal from '../ui/ArticleModal';
import { ArrowUpRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export default function Blog() {
  const { setCursorState } = useCursor();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      title: 'The Future of Web Design in 2026',
      category: 'DESIGN TRENDS',
      date: 'SEPTEMBER 2026',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'How Animation & Motion Micro-Interactions Drive Conversions',
      category: 'UX RESEARCH',
      date: 'AUGUST 2026',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Building Next-Gen Brands for the Gen-Z Digital Generation',
      category: 'BRAND STRATEGY',
      date: 'AUGUST 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'UI/UX Architectural Patterns Shaping Modern Enterprise Apps',
      category: 'ENGINEERING',
      date: 'JULY 2026',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="blog" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#05070f] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="LATEST THINKING"
          title="INSIGHTS & PERSPECTIVES"
          description="Explorations into digital craft, motion design, web architecture, and strategy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {articles.map((art, idx) => (
            <motion.article
              key={art.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setCursorState('button')}
              onMouseLeave={() => setCursorState('default')}
              onClick={() => setSelectedArticle(art)}
              className="group glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between p-5 sm:p-6 cursor-pointer hover:border-cyan-500/40 transition-all duration-500"
            >
              {/* Thumbnail Container */}
              <div className="relative h-48 sm:h-64 w-full rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${art.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-transparent to-transparent opacity-60" />
                <span className="absolute top-3 sm:top-4 left-3 sm:left-4 text-[10px] sm:text-xs font-mono tracking-widest text-cyan-300 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-cyan-500/30">
                  {art.category}
                </span>
              </div>

              {/* Text Info */}
              <div>
                <span className="text-[10px] sm:text-xs font-mono text-slate-500 block mb-1.5 sm:mb-2">{art.date}</span>
                <h3 className="text-lg sm:text-2xl font-syne font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-3 sm:mb-4">
                  {art.title}
                </h3>
              </div>

              {/* Footer CTA */}
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>READ ARTICLE</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive Article Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={Boolean(selectedArticle)}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
