import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { faqs } from '../data/faqs';
import { FAQCard } from '../components/cards/FAQCard';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Appointments', 'Emergency Care', 'Departments', 'General Information', 'Billing', 'Patient Services'];

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about appointments, services, emergency care, and hospital policies."
        breadcrumbItems={[{ label: 'FAQ' }]}
      />

      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14 max-w-4xl mx-auto">
        <ScrollReveal animation="fade-up" className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-600'}`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {filteredFAQs.map((faq, index) => (
            <ScrollReveal key={faq.id} animation="pop" delay={index * 50}>
              <FAQCard faq={faq} />
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};
