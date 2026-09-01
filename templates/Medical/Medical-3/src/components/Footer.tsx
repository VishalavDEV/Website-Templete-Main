import React from 'react';
import { 
  HeartPulse, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  ArrowRight,
  ExternalLink,
  Activity
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setActiveTab, openBooking } = useApp();

  return (
    <footer id="main-footer" className="bg-[#0A1128] text-white border-t border-[#1A535C]/40">
      
      {/* Top Pre-Footer Bento Callouts */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Bento Callout 1 */}
            <div className="flex items-center gap-4 p-5 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-[#1A535C] border border-[#4ECDC4]/30 flex items-center justify-center text-[#4ECDC4] shrink-0 shadow-lg">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#4ECDC4] block">24/7 Clinical Hotline</span>
                <a href="tel:+18002273911" className="text-base sm:text-lg font-mono font-bold hover:text-[#4ECDC4] transition-colors text-white">
                  +1 (800) 227-3911
                </a>
              </div>
            </div>

            {/* Bento Callout 2 */}
            <div className="flex items-center gap-4 p-5 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-[#1A535C] border border-[#4ECDC4]/30 flex items-center justify-center text-[#4ECDC4] shrink-0 shadow-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#4ECDC4] block">Main Medical Campus</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  450 Innovation Parkway, Aurevia District
                </span>
              </div>
            </div>

            {/* Bento Callout 3 */}
            <div className="flex items-center gap-4 p-5 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-[#1A535C] border border-[#4ECDC4]/30 flex items-center justify-center text-[#4ECDC4] shrink-0 shadow-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#4ECDC4] block">Quality & Safety</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  JCI Gold Seal & Magnet Recognized
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Bento Multi-Column Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Overview (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-tr from-[#0A1128] to-[#1A535C] rounded-xl flex items-center justify-center border border-[#4ECDC4]/40 shadow-md">
                <div className="w-3.5 h-3.5 bg-[#4ECDC4] rounded-full shadow-[0_0_8px_rgba(78,205,196,0.9)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white font-['Manrope']">
                  Aure<span className="text-[#4ECDC4]">via</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold -mt-0.5">
                  Clinical Ecosystem
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Aurevia Health is an internationally accredited academic healthcare network combining precision surgical robotics, genomic medicine, and encrypted telehealth for superior clinical outcomes.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-bold text-[#4ECDC4] uppercase tracking-[0.2em] block mb-2">
                Need urgent care?
              </span>
              <button
                onClick={() => openBooking()}
                className="px-6 py-2.5 rounded-full bg-[#4ECDC4] hover:bg-[#3DB8AF] text-[#0A1128] text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Book Appointment Online
              </button>
            </div>
          </div>

          {/* Col 2: Clinical Centers */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-4">
              Clinical Centers
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => setActiveTab('departments')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Cardiology & Vascular
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('departments')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Neurology & Spine
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('departments')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Precision Oncology
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('departments')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Orthopedics & Joint
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('departments')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Pediatrics & Fetal
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('departments')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Robotic Surgery Suite
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Patient Portals */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-4">
              Patient Portals
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => setActiveTab('patient_dashboard')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Patient Health Records
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('patient_dashboard')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Lab & Pathology Results
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('patient_dashboard')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Prescription Refills
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('emergency')} className="hover:text-rose-400 font-semibold transition-colors cursor-pointer">
                  Emergency ER Live Wait
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('doctor_dashboard')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Physician EHR Portal
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('admin_dashboard')} className="hover:text-[#4ECDC4] transition-colors cursor-pointer">
                  Operations Console
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quality & Compliance */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-4">
              Accreditation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Joint Commission Gold</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4ECDC4]" />
                <span>HIPAA & SOC2 Vault</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#4ECDC4]" />
                <span>Magnet Nursing Award</span>
              </li>
              <li className="text-[11px] text-slate-400 pt-2 leading-normal">
                Clinical trials registered with NIH and FDA Institutional Review Board (IRB).
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar with Operational System Status indicator */}
        <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">All Clinical Systems Operational</span>
          </div>
          <p>© {new Date().getFullYear()} Aurevia Health System Inc. All clinical and intellectual rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
