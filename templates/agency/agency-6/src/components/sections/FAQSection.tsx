import React, { useState } from 'react';
import { FAQS } from '../../data/mockData';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-28 sm:py-36 bg-[#f8f7f4] relative overflow-hidden select-none border-b-2 border-[#090909]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#090909] font-black block mb-2">
              FREQUENTLY ASKED QUESTIONS // PROTOCOLS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black uppercase text-[#090909] tracking-tighter">
              ENGAGEMENT DETAILS
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;

            return (
              <ScrollReveal key={faq.id} animation="fade-up" delay={idx * 100}>
                <div
                  onClick={() => toggleFaq(faq.id)}
                  className={`border-2 border-[#090909] rounded-none overflow-hidden transition-all duration-300 cursor-pointer ${
                    isOpen ? 'bg-[#090909] text-[#f8f7f4] shadow-2xl' : 'bg-white hover:bg-[#090909]/5 text-[#090909]'
                  }`}
                >
                  <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                    <h3 className="text-lg sm:text-2xl font-serif font-black uppercase tracking-tighter">
                      {faq.question}
                    </h3>
                    <div
                      className={`p-2 rounded-none border border-[#090909] transition-transform duration-300 ${
                        isOpen ? 'bg-[#D1FF00] text-[#090909] rotate-180' : 'bg-black/5 text-[#090909]'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 stroke-[3]" />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="px-6 pb-8 sm:px-8 pt-0 border-t border-white/10 text-sm sm:text-base font-mono text-gray-300 leading-relaxed animate-in fade-in duration-200">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
