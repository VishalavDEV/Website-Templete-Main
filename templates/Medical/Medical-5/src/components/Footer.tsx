import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  HeartPulse,
  Mail,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Check,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { ActivePage } from '../types';

export const Footer: React.FC = () => {
  const { setActivePage, openBooking, showToast, setFilterSpecialtyId } = useApp();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setIsSubscribed(true);
    showToast('Subscribed to Aura Health monthly clinical journal', 'success');
  };

  const handleSpecialtyClick = (id: string) => {
    setFilterSpecialtyId(id);
    setActivePage('doctors');
  };

  return (
    <footer id="main-footer" className="bg-[#FFFDFC] border-t border-[#3E3445]/8 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Editorial Dispatch Callout */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#E8DDF2]/60 via-[#FFFDFC] to-[#F2D9DF]/40 border border-[#8B6FAE]/15 shadow-[0_8px_30px_rgba(90,70,110,0.04)] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B6FAE]/10 text-[#665080] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#8B6FAE]" />
              <span>Aura Health Dispatch</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3E3445] mb-2">
              Stay connected with thoughtful medicine.
            </h3>
            <p className="text-sm text-[#756B7C] leading-relaxed">
              Curated clinical insights, preventive longevity science, and wellness guides delivered
              monthly. No spam, ever.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {isSubscribed ? (
              <div className="flex items-center gap-3 px-6 py-3.5 bg-[#739B82]/15 border border-[#739B82]/30 rounded-2xl text-[#739B82] font-semibold text-sm">
                <Check className="w-5 h-5" />
                <span>You're subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-stretch gap-2.5 max-w-md w-full"
              >
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#756B7C] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-3 bg-white border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-2xl text-sm text-[#3E3445] placeholder-[#756B7C]/70 focus:outline-none shadow-xs"
                    required
                  />
                </div>
                <button
                  id="footer-newsletter-submit-btn"
                  type="submit"
                  className="px-6 py-3 bg-[#8B6FAE] hover:bg-[#665080] text-white font-semibold text-sm rounded-2xl shadow-[0_4px_14px_rgba(139,111,174,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3E3445]/8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button
              id="footer-brand-logo"
              onClick={() => setActivePage('home')}
              className="flex items-center gap-2.5 group text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#8B6FAE] to-[#665080] flex items-center justify-center text-white shadow-[0_4px_14px_rgba(139,111,174,0.35)]">
                <HeartPulse className="w-5 h-5 text-[#FFFDFC]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#3E3445]">
                  Aura Health
                </span>
                <span className="block text-[10px] tracking-[0.2em] font-bold text-[#8B6FAE] uppercase -mt-1">
                  Lilac Frost Medical Center
                </span>
              </div>
            </button>

            <p className="text-sm text-[#756B7C] leading-relaxed max-w-sm">
              A calm, human-first medical institution designed around unrushed consultations,
              precision biomarker diagnostics, and serene patient recovery environments.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-[#756B7C]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8B6FAE]" />
                <span className="font-medium text-[#3E3445]">+1 (800) 287-2432</span>
                <span className="text-[#756B7C]">(24/7 Clinical Desk)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8B6FAE]" />
                <span>450 Lilac Frost Avenue, Metropolitan Central</span>
              </div>
            </div>
          </div>

          {/* Specialties Column */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#3E3445] mb-4">Specialties</h4>
            <ul className="space-y-2.5 text-sm text-[#756B7C]">
              <li>
                <button
                  id="footer-spec-cardiology"
                  onClick={() => handleSpecialtyClick('cardiology')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Cardiology & Rhythm
                </button>
              </li>
              <li>
                <button
                  id="footer-spec-neurology"
                  onClick={() => handleSpecialtyClick('neurology')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Neurology & Brain
                </button>
              </li>
              <li>
                <button
                  id="footer-spec-dermatology"
                  onClick={() => handleSpecialtyClick('dermatology')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Dermatology & Skin
                </button>
              </li>
              <li>
                <button
                  id="footer-spec-orthopedics"
                  onClick={() => handleSpecialtyClick('orthopedics')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Orthopedics & Spine
                </button>
              </li>
              <li>
                <button
                  id="footer-spec-womens"
                  onClick={() => handleSpecialtyClick('womens-health')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Women's Health
                </button>
              </li>
              <li>
                <button
                  id="footer-spec-all"
                  onClick={() => setActivePage('specialties')}
                  className="text-[#8B6FAE] font-medium hover:underline"
                >
                  View All Specialties →
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Diagnostics Column */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#3E3445] mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-[#756B7C]">
              <li>
                <button
                  id="footer-srv-mri"
                  onClick={() => setActivePage('services')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  3T High-Res MRI
                </button>
              </li>
              <li>
                <button
                  id="footer-srv-preventive"
                  onClick={() => setActivePage('services')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Biomarker Profiling
                </button>
              </li>
              <li>
                <button
                  id="footer-srv-telehealth"
                  onClick={() => setActivePage('services')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Encrypted Telehealth
                </button>
              </li>
              <li>
                <button
                  id="footer-srv-checkup"
                  onClick={() => setActivePage('health-check')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Wellness Health Check
                </button>
              </li>
              <li>
                <button
                  id="footer-srv-emergency"
                  onClick={() => setActivePage('emergency')}
                  className="hover:text-[#C77C83] text-[#C77C83] font-medium hover:underline"
                >
                  Emergency Triage
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Care Links & Patient Hub */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#3E3445] mb-4">Patient Care</h4>
            <ul className="space-y-2.5 text-sm text-[#756B7C]">
              <li>
                <button
                  id="footer-link-portal"
                  onClick={() => setActivePage('portal')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Patient Portal
                </button>
              </li>
              <li>
                <button
                  id="footer-link-doctors"
                  onClick={() => setActivePage('doctors')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Find a Doctor
                </button>
              </li>
              <li>
                <button
                  id="footer-link-library"
                  onClick={() => setActivePage('library')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Health Library & Journal
                </button>
              </li>
              <li>
                <button
                  id="footer-link-locations"
                  onClick={() => setActivePage('locations')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Clinic Locations
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => setActivePage('contact')}
                  className="hover:text-[#665080] hover:translate-x-1 transition-all"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li className="pt-2">
                <button
                  id="footer-book-cta-btn"
                  onClick={() => openBooking()}
                  className="px-4 py-2 text-xs font-semibold bg-[#8B6FAE] hover:bg-[#665080] text-white rounded-full transition-all inline-flex items-center gap-1.5 shadow-xs"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Book Appointment</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Medical Disclaimer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#756B7C]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#739B82]" />
            <span>
              <strong>Demo Medical Template:</strong> All patient records, doctor profiles, and
              measurements are simulated fictional demo data.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              id="footer-privacy-btn"
              onClick={() => showToast('Privacy Policy: Demo HIPAA Compliant Architecture', 'info')}
              className="hover:text-[#3E3445]"
            >
              Privacy Policy
            </button>
            <button
              id="footer-terms-btn"
              onClick={() => showToast('Terms of Care: Educational Healthcare Template', 'info')}
              className="hover:text-[#3E3445]"
            >
              Terms of Care
            </button>
            <button
              id="footer-accessibility-btn"
              onClick={() => showToast('Accessibility: WCAG 2.1 AA Compliant Lilac Frost Palette', 'info')}
              className="hover:text-[#3E3445]"
            >
              Accessibility
            </button>
            <span>© 2026 Aura Health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
