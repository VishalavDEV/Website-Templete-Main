import React, { useEffect } from 'react';
import { X, AlertTriangle, PhoneCall, MapPin, ShieldAlert, ArrowRight } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreInfo: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose, onExploreInfo }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252326]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="relative bg-[#FAF8F5] rounded-2xl max-w-lg w-full shadow-2xl border-2 border-[#C97873] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-8"
        role="dialog"
        aria-labelledby="emergency-modal-title"
        aria-modal="true"
      >
        {/* Header Ribbon */}
        <div className="bg-[#542F3B] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#C97873]"
            aria-label="Close emergency modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#C97873]/30 text-[#E8B6A5] text-xs font-bold mb-2">
            <AlertTriangle className="w-3.5 h-3.5" /> Urgent Medical Situation Notice
          </div>
          <h2 id="emergency-modal-title" className="font-serif text-2xl font-bold text-[#FAF8F5]">
            Emergency Medical Protocol
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-5 font-sans text-xs sm:text-sm text-[#252326]">
          
          <div className="p-4 rounded-xl bg-[#FAF0EE] border border-[#C97873]/30 text-[#542F3B] leading-relaxed font-semibold">
            Emergency services should be contacted immediately for acute, life-threatening medical situations.
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-[#542F3B] text-xs uppercase tracking-wider">
              Seek Immediate Emergency Care If Experiencing:
            </h3>
            <ul className="space-y-1.5 text-xs text-[#70696C] font-normal">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C97873] shrink-0" />
                <span>Severe hypoglycemia (&lt; 55 mg/dL) with confusion or unresponsiveness</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C97873] shrink-0" />
                <span>Signs of Diabetic Ketoacidosis (DKA): Rapid breathing, fruity breath, vomiting</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C97873] shrink-0" />
                <span>Sudden severe chest pain, slurred speech, or loss of vision</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href="tel:911"
              className="w-full min-h-[44px] py-3.5 px-4 rounded-xl bg-[#542F3B] hover:bg-[#381F27] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#C97873]"
            >
              <PhoneCall className="w-4 h-4 text-[#E8B6A5]" />
              <span>Call Emergency Services (911 / 112)</span>
            </a>

            <a
              href="tel:18005554588"
              className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-[#F2ECE9] hover:bg-[#E5DDD8] text-[#542F3B] border border-[#E5DDD8] font-bold text-xs flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-[#C97873]"
            >
              <PhoneCall className="w-4 h-4 text-[#C97873]" />
              <span>Call Gluvia ER Hotline: 1-800-GLUVIA-EMERGENCY</span>
            </a>
          </div>

          {/* Address info */}
          <div className="p-4 rounded-xl bg-[#F2ECE9] border border-[#E5DDD8] flex items-start gap-3 text-xs">
            <MapPin className="w-4 h-4 text-[#C97873] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#542F3B] block">Gluvia Emergency Center & ER Bay</span>
              <span className="text-[#70696C] font-normal">450 Health Sciences Parkway, Suite 100 • Open 24 Hours / 365 Days</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-[#F2ECE9]/70 border-t border-[#E5DDD8] flex justify-between items-center">
          <button
            onClick={() => {
              onClose();
              onExploreInfo();
            }}
            className="text-xs font-bold text-[#C97873] hover:underline flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-[#C97873]"
          >
            <span>Continue to Hospital Information</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="btn-secondary min-h-[44px] px-4 py-2 text-xs font-semibold"
          >
            Close Notice
          </button>
        </div>

      </div>
    </div>
  );
};
