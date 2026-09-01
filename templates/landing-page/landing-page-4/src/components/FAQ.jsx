import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-[#070709] border-t border-white/[0.06]">
      
      {/* Subtle Amber Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Questions,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Answered.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Everything you need to know about setting up Flowzen, billing, data security, and enterprise integrations.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.04] border-amber-500/40 shadow-lg shadow-amber-500/5'
                    : 'bg-white/[0.02] border-white/[0.07] hover:border-white/15'
                }`}
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base md:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </span>

                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-amber-500 text-black rotate-180' : 'bg-white/[0.05] text-zinc-400'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1 text-sm md:text-base text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 text-center">
          <p className="text-sm text-zinc-400">
            Have a custom question or need a personalized demo?{' '}
            <a href="#newsletter" className="text-amber-400 font-semibold underline underline-offset-4 hover:text-amber-300">
              Speak directly with our engineering team →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
