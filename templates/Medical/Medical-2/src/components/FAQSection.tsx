import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { 
  ChevronDown, Search, HelpCircle, PhoneCall, 
  MessageSquare, Calendar, CheckCircle2, X 
} from 'lucide-react';

interface FAQSectionProps {
  onContactClick: () => void;
  onBookAppointment: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onContactClick,
  onBookAppointment,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>([faqData[0].id]);

  const categories = ['All', 'Appointments', 'Insurance & Billing', 'Patient Care', 'Emergency & Telehealth'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqData.filter((faq) => {
    if (selectedCategory !== 'All' && faq.category !== selectedCategory) {
      return false;
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchQ = faq.question.toLowerCase().includes(q);
      const matchA = faq.answer.toLowerCase().includes(q);
      return matchQ || matchA;
    }
    return true;
  });

  return (
    <section id="faq" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-teal-700 font-black text-[10px] tracking-widest uppercase bg-teal-100/60 border border-teal-200/60 px-3.5 py-1 rounded-full">
            Patient Support & Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Find immediate answers regarding appointment bookings, health insurance plans, clinical preparation, and telehealth procedures.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="faq-search-input"
              placeholder="Search topics (e.g. insurance, cancellation, telehealth)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white shadow-xs"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`faq-cat-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 space-y-2">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <h4 className="font-bold text-slate-800 text-sm">No matching questions found</h4>
              <p className="text-xs text-slate-500">Try refining your search keyword or clearing filters.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedCategory('All');
                }}
                className="text-xs font-bold text-teal-700 hover:underline pt-2 block mx-auto"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                    isOpen ? 'border-teal-400 shadow-sm ring-1 ring-teal-400/20' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    id={`faq-toggle-btn-${faq.id}`}
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-bold text-xs flex items-center justify-center shrink-0">
                        Q
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-teal-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F8FAFC]">
                      <p>{faq.answer}</p>
                      <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                        <span className="font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                          Category: {faq.category}
                        </span>
                        <span>Was this helpful? <strong className="text-teal-700 cursor-pointer hover:underline">Yes</strong> / <strong className="text-slate-600 cursor-pointer hover:underline">No</strong></span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions CTA Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Have a specific medical inquiry?</h3>
            <p className="text-xs text-slate-300">Our patient intake coordinators are on duty 24/7 to assist you.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="faq-contact-btn"
              onClick={onContactClick}
              className="px-4 py-2.5 bg-white text-slate-900 font-bold text-xs rounded-xl shadow-sm hover:bg-slate-100 transition cursor-pointer"
            >
              Contact Support
            </button>
            <button
              id="faq-book-btn"
              onClick={onBookAppointment}
              className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-sm transition cursor-pointer"
            >
              Book Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
