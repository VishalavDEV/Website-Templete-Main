import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Eye } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'accessibility' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Patient Data & Privacy Statement',
      icon: <ShieldCheck className="w-5 h-5 text-[#E8B6A5]" />,
      body: [
        'Gluvia Diabetes Institute is committed to protecting patient confidentiality and compliance with clinical data protection guidelines.',
        'As a frontend demonstration website template, no actual patient telemetry, blood glucose logs, or form submissions are stored on external public servers.',
        'In a live clinical deployment, all digital telemetry (including CGM data streams, lab results, and patient appointment requests) is encrypted end-to-end using AES-256 standards in full compliance with HIPAA and relevant privacy frameworks.'
      ]
    },
    terms: {
      title: 'Terms of Website Usage & Clinical Disclaimer',
      icon: <FileText className="w-5 h-5 text-[#E8B6A5]" />,
      body: [
        'The content provided on this website template is intended exclusively for general educational and informational demonstration purposes.',
        'This website does not provide medical diagnosis, prescription adjustments, or emergency triage. Always consult with a qualified endocrinologist or physician regarding personal medical conditions.',
        'If you are experiencing severe hypoglycemia, symptoms of ketoacidosis, or acute medical distress, please contact emergency medical services immediately.'
      ]
    },
    accessibility: {
      title: 'Digital Accessibility Statement',
      icon: <Eye className="w-5 h-5 text-[#E8B6A5]" />,
      body: [
        'Gluvia Diabetes Institute is dedicated to providing an accessible, inclusive web experience for patients of all visual, auditory, motor, and cognitive abilities.',
        'This template adheres strictly to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, featuring high contrast text pairings, keyboard navigable focus traps, screen reader aria attributes, and reduced motion overrides.',
        'If you encounter any accessibility barriers while navigating our digital platform, please contact our accessibility coordinator at accessibility@gluviainstitute.org.'
      ]
    }
  };

  const activePolicy = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#252326]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="relative bg-[#FAF8F5] rounded-2xl max-w-xl w-full shadow-2xl border border-[#E5DDD8] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-8"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-[#542F3B] text-white p-6 sm:p-7 relative flex items-center gap-3">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#C97873]"
            aria-label="Close policy modal"
          >
            <X className="w-5 h-5" />
          </button>

          {activePolicy.icon}
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#E8B6A5] block">
              Legal & Institutional Policy
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF8F5]">
              {activePolicy.title}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-7 space-y-4 font-sans text-xs sm:text-sm text-[#252326] max-h-[60vh] overflow-y-auto">
          {activePolicy.body.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="p-4 bg-[#F2ECE9]/70 border-t border-[#E5DDD8] flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary min-h-[44px] px-5 py-2 text-xs font-semibold"
          >
            Close Statement
          </button>
        </div>
      </div>
    </div>
  );
};
