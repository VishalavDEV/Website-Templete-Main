import React, { useState } from 'react';
import { 
  X, 
  HelpCircle, 
  ChevronDown, 
  Search, 
  BookOpen, 
  Phone, 
  Mail, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { UNIVERSITY_INFO } from '../data/universityData';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissions: () => void;
}

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose, onOpenAdmissions }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState('');

  if (!isOpen) return null;

  const faqs = [
    {
      q: 'How do I apply for the Fall 2026 Semester?',
      a: 'You can submit your online application by clicking "Book Now" or "Apply" anywhere across the portal. We offer Early Action (Nov 15 deadline) and Regular Decision (Jan 15 deadline) with 100% need-blind admissions.'
    },
    {
      q: 'Are StudyPress degrees and course certificates accredited?',
      a: 'Yes, all StudyPress academic diplomas and professional certifications are accredited by international educational boards including AACSB, ABET, and the Higher Learning Commission.'
    },
    {
      q: 'Can international students apply for financial aid & scholarships?',
      a: 'Absolutely. Our $45M international scholarship endowment covers full and partial tuition waivers based on merit and financial need for domestic and international students.'
    },
    {
      q: 'How does the online course enrollment and cart checkout work?',
      a: 'Browse through our Popular Courses catalog, click "Enroll" or add courses to your cart. Once enrolled, you will receive instant LMS student portal access with live seminar links, lecture recordings, and interactive labs.'
    },
    {
      q: 'Can I transfer college credits from another institution?',
      a: 'Yes, up to 60 semester credits from accredited universities or certified diploma colleges can be evaluated and transferred toward your degree program.'
    }
  ];

  const filteredFaqs = faqs.filter(
    (f) => f.q.toLowerCase().includes(faqSearch.toLowerCase()) || f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative text-slate-900 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-[#1e2738] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#ec1c4e] flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base">StudyPress Help Desk & FAQ</h3>
              <p className="text-xs text-slate-400">Frequently asked questions & student support</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-5 bg-slate-50 border-b border-slate-200">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search help questions, scholarships, transfer credits..."
              className="w-full pl-9 pr-4 py-2.5 bg-white text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-[#ec1c4e]"
            />
          </div>
        </div>

        {/* FAQs List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 hover:text-[#ec1c4e] flex items-center justify-between gap-3"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    activeFaq === idx ? 'rotate-180 text-[#ec1c4e]' : ''
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Support Contacts */}
        <div className="p-5 bg-slate-100 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-semibold text-slate-800">
              <Phone className="w-3.5 h-3.5 text-[#ec1c4e]" />
              {UNIVERSITY_INFO.phone}
            </span>
            <span className="flex items-center gap-1 font-semibold text-slate-800">
              <Mail className="w-3.5 h-3.5 text-[#ec1c4e]" />
              {UNIVERSITY_INFO.admissionsEmail}
            </span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenAdmissions();
            }}
            className="px-4 py-2 bg-[#ec1c4e] hover:bg-[#d81544] text-white font-bold rounded-lg transition-colors text-xs"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
