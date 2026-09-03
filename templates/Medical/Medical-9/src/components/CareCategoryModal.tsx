import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, ArrowRight, Shield } from 'lucide-react';
import { CareCategory } from '../types';

interface CareCategoryModalProps {
  category: CareCategory | null;
  onClose: () => void;
  onBookConsultation: (categoryTitle: string) => void;
}

export const CareCategoryModal: React.FC<CareCategoryModalProps> = ({
  category,
  onClose,
  onBookConsultation
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (category) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252326]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="relative bg-[#FAF8F5] rounded-2xl max-w-2xl w-full shadow-2xl border border-[#E5DDD8] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-8"
        role="dialog"
        aria-labelledby="care-modal-title"
        aria-modal="true"
      >
        {/* Header Ribbon */}
        <div className="bg-[#542F3B] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#C97873]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#E8B6A5] mb-1">
            Specialized Care Module
          </span>
          <h2 id="care-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
            {category.title}
          </h2>
          <p className="text-sm text-[#FAF8F5]/80 font-sans mt-1 font-normal">
            {category.subtitle}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto font-sans">
          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C97873] mb-2 flex items-center gap-1.5">
              <Shield className="w-4 h-4" /> Comprehensive Clinical Overview
            </h3>
            <p className="text-sm text-[#252326] leading-relaxed">
              {category.fullDesc}
            </p>
          </div>

          {/* Symptoms */}
          <div className="bg-[#FAF0EE] p-5 rounded-xl border border-[#C97873]/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#542F3B] mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#C97873]" /> Key Indicators & Symptoms
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#252326]">
              {category.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C97873] mt-1.5 shrink-0" />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments & Interventions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#542F3B] mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#C97873]" /> Gluvia Interventions & Treatments
            </h4>
            <div className="space-y-2">
              {category.treatments.map((treatment, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-[#E5DDD8] text-xs font-medium text-[#252326] flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-[#FAF0EE] text-[#C97873] flex items-center justify-center text-[10px] font-bold">
                    {idx + 1}
                  </span>
                  <span>{treatment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Disclaimer */}
          <div className="p-3 bg-[#F2ECE9] rounded-xl text-[11px] text-[#70696C] text-center font-normal border border-[#E5DDD8]">
            Educational content only. This information does not replace professional medical advice or clinical diagnosis.
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#F2ECE9]/60 border-t border-[#E5DDD8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="btn-secondary w-full sm:w-auto px-5 py-2.5 text-xs font-semibold"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onBookConsultation(category.title);
            }}
            className="btn-primary w-full sm:w-auto px-6 py-3 text-xs font-semibold flex items-center justify-center gap-2"
          >
            <span>Book Consultation for {category.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
