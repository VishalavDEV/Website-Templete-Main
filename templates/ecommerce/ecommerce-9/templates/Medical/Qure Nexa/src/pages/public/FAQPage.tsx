import React, { useState } from 'react';
import { Search, HelpCircle, Phone, Calendar } from 'lucide-react';
import { INITIAL_FAQS } from '../../data/seedData';
import { Accordion } from '../../components/common/Accordion';
import { Button } from '../../components/common/Button';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';

export const FAQPage: React.FC<{ onOpenBooking: () => void; onNavigate: (view: string) => void }> = ({
  onOpenBooking,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Appointments', 'Billing & Insurance', 'Medical Records', 'Emergency & Visiting'];

  const filteredFaqs = INITIAL_FAQS.filter(faq => {
    if (selectedCategory !== 'All' && faq.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  const accordionItems = filteredFaqs.map(f => ({
    id: f.id,
    title: f.question,
    content: (
      <div className="space-y-2">
        <p className="leading-relaxed">{f.answer}</p>
        <span className="inline-block text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
          Category: {f.category}
        </span>
      </div>
    )
  }));

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 shadow-md">
        <ScrollReveal direction="3d">
          <div className="max-w-5xl mx-auto text-center space-y-3 relative z-10">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest bg-teal-500/20 px-3.5 py-1.5 rounded-full border border-teal-400/30">
              Patient Help Center
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-teal-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Find immediate answers regarding appointment booking, insurance claims, inpatient visiting policies, and medical records.
            </p>
          </div>
        </ScrollReveal>
        <div className="absolute right-[-60px] top-[-60px] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-[30%] bottom-[-60px] w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      {/* Main FAQ Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search and Category Filters */}
        <ScrollReveal direction="down">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Type your question or keyword (e.g., insurance, parking, reports)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Accordion Questions */}
        <ScrollReveal direction="up">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
            {accordionItems.length === 0 ? (
              <div className="text-center py-10">
                <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-800">No questions matched your search query.</p>
                <p className="text-xs text-slate-500 mt-1">Please try different keywords or contact our 24/7 helpline.</p>
              </div>
            ) : (
              <Accordion items={accordionItems} />
            )}
          </div>
        </ScrollReveal>

        {/* Still Have Questions Card */}
        <ScrollReveal direction="3d">
          <ThreeDCard intensity={10}>
            <div className="bg-gradient-to-r from-teal-50 to-sky-50 rounded-3xl p-8 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Still have questions?</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Our 24/7 care coordination desk is available to assist you with customized clinical inquiries.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Button
                  variant="outline"
                  size="md"
                  leftIcon={<Phone className="w-4 h-4" />}
                  onClick={() => onNavigate('contact')}
                >
                  Contact Desk
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  leftIcon={<Calendar className="w-4 h-4" />}
                  onClick={onOpenBooking}
                >
                  Book Visit
                </Button>
              </div>
            </div>
          </ThreeDCard>
        </ScrollReveal>
      </div>
    </div>
  );
};
