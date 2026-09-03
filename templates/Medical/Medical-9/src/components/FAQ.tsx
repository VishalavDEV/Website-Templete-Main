import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Monitoring', 'Diagnostics', 'Prevention', 'Consultation', 'Nutrition'];

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFAQs = FAQ_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#542F3B]">
            Clear answers to your <br />
            <span className="italic font-normal text-[#C97873]">care questions.</span>
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#C97873] ${
                selectedCategory === cat
                  ? 'bg-[#542F3B] text-white shadow-xs'
                  : 'bg-white text-[#542F3B] hover:bg-[#FAF0EE] border border-[#E5DDD8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E5DDD8] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C97873]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-bold text-[#542F3B]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-[#FAF0EE] text-[#C97873] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#542F3B] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 font-sans text-xs sm:text-sm text-[#70696C] font-normal leading-relaxed border-t border-[#F2ECE9] animate-in fade-in duration-200">
                    <p className="mt-4">{faq.answer}</p>
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
