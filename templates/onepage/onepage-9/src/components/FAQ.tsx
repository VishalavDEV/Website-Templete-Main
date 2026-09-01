import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF9F6] text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-300">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-slate-900">09 /</span>
              <span>EXECUTIVE KNOWLEDGE BASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
              FREQUENTLY ANSWERED BRIEFS
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-600 max-w-xs">
            Direct operational guidance regarding discovery sprints, SLA guarantees, and IP ownership.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-300 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 bg-white hover:bg-slate-50 font-mono text-xs"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald-700 font-bold font-mono text-sm">{faq.number} /</span>
                    <span className="text-slate-400 font-bold uppercase text-[10px] bg-slate-100 px-2 py-0.5 border border-slate-200">{faq.category}</span>
                    <span className="text-base font-bold font-sans text-slate-950 uppercase">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown className={`w-5 h-5 text-slate-700 shrink-0 transform transition-transform ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-700 font-sans leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
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
