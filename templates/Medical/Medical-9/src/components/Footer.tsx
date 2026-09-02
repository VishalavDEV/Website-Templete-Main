import React, { useState } from 'react';
import { PolicyModal } from './PolicyModal';
import { Phone, Mail, MapPin, Heart, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment, onOpenEmergency }) => {
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'accessibility' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#252326] text-[#FAF8F5] pt-16 pb-12 border-t border-[#E5DDD8]/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#542F3B] text-white flex items-center justify-center font-serif font-bold text-lg shadow-xs border border-[#C97873]/30">
                G
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-[#FAF8F5] block leading-none">GLUVIA</span>
                <span className="text-[9px] tracking-[0.2em] text-[#E8B6A5] font-bold uppercase">DIABETES INSTITUTE</span>
              </div>
            </div>

            <p className="text-sm font-serif italic text-[#E8B6A5]">
              "Better Numbers. Better Living."
            </p>

            <p className="text-xs text-[#FAF8F5]/80 font-normal leading-relaxed max-w-sm">
              Diabetes care designed around your life. Combining board-certified endocrinology, continuous sensor analytics, and empathetic nutrition coaching.
            </p>

            {/* Social Placeholder Links */}
            <div className="flex items-center gap-3 pt-2">
              {['Twitter / X', 'LinkedIn', 'YouTube', 'Instagram'].map((network) => (
                <a
                  key={network}
                  href={`#${network.toLowerCase()}`}
                  onClick={(e) => e.preventDefault()}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#C97873] text-[11px] font-semibold text-[#FAF8F5] transition-colors focus-visible:ring-2 focus-visible:ring-[#C97873]"
                  aria-label={`Visit Gluvia on ${network}`}
                >
                  {network}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Care Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#FAF8F5]">Diabetes Care</h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80 font-normal">
              <li><button onClick={() => scrollToSection('care')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">Type 1 Diabetes</button></li>
              <li><button onClick={() => scrollToSection('care')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">Type 2 Diabetes</button></li>
              <li><button onClick={() => scrollToSection('care')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">Prediabetes Reversal</button></li>
              <li><button onClick={() => scrollToSection('care')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">Gestational Care</button></li>
              <li><button onClick={() => scrollToSection('care')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">Diabetic Foot Health</button></li>
              <li><button onClick={() => scrollToSection('care')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">Retinal Screening</button></li>
            </ul>
          </div>

          {/* Col 3: Resources & Programs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#FAF8F5]">Resources</h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80 font-normal">
              <li><button onClick={() => scrollToSection('resources')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">HbA1c Guide</button></li>
              <li><button onClick={() => scrollToSection('resources')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">Plate Method Meals</button></li>
              <li><button onClick={() => scrollToSection('programs')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">START Program</button></li>
              <li><button onClick={() => scrollToSection('programs')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">BALANCE Program</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-[#E8B6A5] transition-colors text-left focus-visible:ring-1 focus-visible:ring-[#C97873]">Patient FAQs</button></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hospital Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#FAF8F5]">Hospital Contact</h4>
            <div className="space-y-2 text-xs text-[#FAF8F5]/80 font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C97873] shrink-0 mt-0.5" />
                <span>450 Health Sciences Parkway, Suite 100, Medical District</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C97873] shrink-0" />
                <span>Appointments: +1 (800) GLUVIA-CARE</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C97873] shrink-0" />
                <span>General Inquiries: care@gluviainstitute.org</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={onOpenAppointment}
                className="btn-primary min-h-[44px] px-4 py-2 text-xs font-semibold"
              >
                Book Appointment
              </button>
              <button
                onClick={onOpenEmergency}
                className="btn-secondary border-white/20 text-white hover:bg-white/10 min-h-[44px] px-4 py-2 text-xs font-semibold"
              >
                Emergency ER
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/70 font-normal">
          <div>
            © 2026 Gluvia Diabetes Institute. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-[#E8B6A5] underline-offset-4 hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#C97873]"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActivePolicy('terms')}
              className="hover:text-[#E8B6A5] underline-offset-4 hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#C97873]"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setActivePolicy('accessibility')}
              className="hover:text-[#E8B6A5] underline-offset-4 hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#C97873]"
            >
              Accessibility Statement
            </button>
          </div>
        </div>

        {/* Mandatory Medical Disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] text-[#FAF8F5]/70 text-center font-normal">
          <strong>Medical Disclaimer:</strong> Educational content only. This website template does not replace professional medical advice, clinical diagnosis, or treatment. Always seek the advice of your physician or qualified diabetes care provider with any medical questions.
        </div>

      </div>

      {/* Policy Modal */}
      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </footer>
  );
};
