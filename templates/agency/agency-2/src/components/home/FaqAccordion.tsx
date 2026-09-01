import React, { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import faqsData from '../../data/faqs.json';
import { FAQ } from '../../types';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const faqs = faqsData as FAQ[];

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-ink-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>10 — FREQUENT INQUIRIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink-primary uppercase leading-[0.95]">
            EVERYTHING YOU <br />
            <span className="text-stroke-strong">NEED TO KNOW</span>
          </h2>
          <p className="text-sm text-ink-secondary leading-relaxed pt-2">
            Have questions about our sprint cadence, intellectual property transfer, or multi-platform engineering? Here are clear answers.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-accent-coral shadow-glass-subtle bg-warm-white/90' : 'border-ink-border/80 hover:border-ink-primary/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none select-none"
                  data-cursor="LINK"
                >
                  <span className="font-display font-bold text-lg sm:text-xl uppercase text-ink-primary">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-ink-border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-ink-primary text-warm-white' : 'text-ink-secondary'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-ink-secondary leading-relaxed border-t border-ink-border/40 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-paper border border-ink-border text-ink-muted">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
