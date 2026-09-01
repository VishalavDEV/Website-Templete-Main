import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="faq"
      className="relative py-28 bg-[#050505] text-[#E5E5E5] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] mb-4 font-mono">
            <HelpCircle size={13} />
            <span>12 / FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.05]">
            Clarity & <span className="font-serif italic font-normal text-[#D4AF37]">Collaboration</span> Terms.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-xl font-light">
            Everything you need to know regarding codebase IP ownership, sprint velocity, timezones, and guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/30 transition-all overflow-hidden shadow-xl backdrop-blur-xl"
              >
                <button
                  type="button"
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-[#D4AF37] border border-white/10 shrink-0 font-bold uppercase">
                      {faq.category}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-neutral-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/10 font-sans font-light"
                    >
                      {faq.answer}
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
};
