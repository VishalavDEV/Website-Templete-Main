import React, { useState } from 'react';
import { FAQ } from '../../types';
import { ChevronDown } from 'lucide-react';

interface FAQCardProps {
  faq: FAQ;
}

export const FAQCard: React.FC<FAQCardProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-card bg-white overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50/70 transition-colors"
      >
        <span className="font-bold text-slate-900 text-base sm:text-lg">{faq.question}</span>
        <div className={`w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-blue-600 border-blue-600 text-white shadow-sm' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      {isOpen && (
        <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1">
          <p className="pt-3.5">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};
