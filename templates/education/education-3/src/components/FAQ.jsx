import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/stats';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="py-24 relative bg-slate-950/90 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>FREQUENT INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Questions & Answers.
          </h2>
        </div>

        {/* Large Numbered Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.num}
                onClick={() => toggleIndex(idx)}
                className={`rounded-2xl glass-panel border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen
                    ? 'border-electric-500/50 bg-slate-900/80 shadow-lg shadow-electric-500/10'
                    : 'border-white/10 hover:border-white/20 bg-slate-950/40'
                }`}
              >
                {/* Accordion Header Bar */}
                <div className="p-6 sm:p-8 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-electric-400">
                      {faq.num}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-electric-600 text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Expanding Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 pb-8 sm:px-8 border-t border-white/10 pt-6"
                    >
                      <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed pl-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
