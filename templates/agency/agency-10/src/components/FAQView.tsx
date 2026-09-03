import React, { useState } from 'react';
import { FAQ_ITEMS_DATA } from '../data/faq';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQViewProps {
  onOpenInquiry: () => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const categories = ['All', 'General', 'Pricing & Engagement', 'Development & Technology', 'AI & Machine Learning', 'Support & Maintenance'];

  const filteredFaqs = FAQ_ITEMS_DATA.filter((faq) => {
    if (selectedCategory !== 'All' && faq.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  const toggleFaq = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div id="faq-page" className="pt-24 pb-20 bg-white">
      {/* Header */}
      <div className="bg-slate-950 text-white pt-14 pb-16 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs border border-blue-500/30">
            Direct Answers
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white mt-4 max-w-3xl leading-tight">
            Frequently Asked Questions.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Everything you need to know about our engineering standards, IP ownership, model deployment, pricing models, and security guarantees.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        {/* Search & Category Pills */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all technical & engagement questions..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-bold">
                      {faq.category.split(' ')[0]}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered question box */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <h3 className="text-base font-bold text-slate-900 font-display">
            Have a specific architecture question not listed here?
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Our principal solutions architects answer technical inquiries directly. Schedule a 30-minute discovery call.
          </p>
          <button
            onClick={onOpenInquiry}
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs cursor-pointer"
          >
            <span>Ask Our Systems Architects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
