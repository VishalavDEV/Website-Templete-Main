import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JOURNAL_ARTICLES } from '../data/journal';
import { ArrowRight, BookOpen, Clock, X, Share2 } from 'lucide-react';

export default function JournalSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="journal" className="py-24 md:py-36 bg-[#F3F0E8] text-[#171816] relative overflow-hidden border-t border-[#D8D4C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B56F4D] font-mono font-bold block mb-3">
              EDITORIAL ESSAYS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
              For the days <span className="editorial-italic font-normal text-[#3E5142]">between the workouts.</span>
            </h2>
          </div>
          <p className="text-base text-[#171816]/75 max-w-md font-light leading-relaxed">
            Thoughtful essays on physiology, habit mechanics, and long-term vitality written by the AURELIS coaching team.
          </p>
        </div>

        {/* Magazine-Inspired Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Featured Article (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedArticle(JOURNAL_ARTICLES[0])}
            className="lg:col-span-7 bg-[#ECE8DE] rounded-3xl overflow-hidden border border-[#171816]/15 flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all duration-500"
          >
            <div className="relative h-72 sm:h-96 overflow-hidden">
              <img
                src={JOURNAL_ARTICLES[0].image}
                alt={JOURNAL_ARTICLES[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#171816] text-[#F3F0E8] px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest">
                {JOURNAL_ARTICLES[0].category}
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-4">
              <div className="flex items-center gap-4 text-xs font-mono text-[#171816]/60">
                <span>{JOURNAL_ARTICLES[0].date}</span>
                <span>•</span>
                <span>{JOURNAL_ARTICLES[0].readTime}</span>
                <span>•</span>
                <span>By {JOURNAL_ARTICLES[0].author}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#171816] group-hover:text-[#B56F4D] transition-colors leading-tight">
                {JOURNAL_ARTICLES[0].title}
              </h3>

              <p className="editorial-italic text-base text-[#171816]/80">
                "{JOURNAL_ARTICLES[0].subtitle}"
              </p>

              <div className="pt-4 border-t border-[#171816]/10 flex items-center gap-2 text-xs font-semibold text-[#171816] uppercase tracking-wider">
                <span>Read Full Essay</span>
                <ArrowRight className="w-4 h-4 text-[#B56F4D] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Secondary Articles Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {JOURNAL_ARTICLES.slice(1).map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                onClick={() => setSelectedArticle(article)}
                className="bg-[#ECE8DE] rounded-3xl p-6 sm:p-8 border border-[#171816]/15 flex flex-col justify-between group cursor-pointer hover:shadow-lg transition-all duration-500"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#171816]/60">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#171816]/10 text-[#171816]">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-[#171816] group-hover:text-[#B56F4D] transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="editorial-italic text-sm text-[#171816]/75">
                    "{article.subtitle}"
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#171816]/10 flex items-center justify-between text-xs font-medium text-[#171816]">
                  <span>By {article.author}</span>
                  <ArrowRight className="w-4 h-4 text-[#B56F4D] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#F3F0E8] text-[#171816] w-full max-w-3xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl border border-[#171816]/20"
            >
              {/* Modal Top Bar */}
              <div className="p-6 bg-[#171816] text-[#F3F0E8] flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-[#B56F4D] uppercase font-bold text-white">
                    {selectedArticle.category}
                  </span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Modal Content Scroll Area */}
              <div className="p-8 sm:p-12 overflow-y-auto space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-mono text-[#B56F4D] uppercase tracking-wider">
                    Published on {selectedArticle.date} • By {selectedArticle.author}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#171816]">
                    {selectedArticle.title}
                  </h3>
                  <p className="editorial-italic text-lg text-[#3E5142]">
                    "{selectedArticle.subtitle}"
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden h-64 sm:h-80">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose prose-stone max-w-none text-base font-light leading-relaxed space-y-4 whitespace-pre-line text-[#171816]/90">
                  {selectedArticle.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
