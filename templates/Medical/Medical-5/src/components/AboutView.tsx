import React from 'react';
import { useApp } from '../context/AppContext';
import {
  HeartPulse,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  Building,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const AboutView: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  const { openBooking, setActivePage } = useApp();

  return (
    <section
      id="about-us-section"
      className={`py-16 md:py-24 ${isFullPage ? 'pt-32' : 'bg-[#FFFDFC]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold uppercase tracking-wider">
              <span>OUR PHILOSOPHY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E3445] leading-[1.18]">
              Where clinical excellence meets human serenity.
            </h2>

            <p className="text-base text-[#756B7C] leading-relaxed">
              Aura Health was founded on a simple realization: medicine shouldn't feel like a factory.
              When care environments are calming, consultations are unrushed, and diagnostic tools are
              state-of-the-art, patients make better decisions and heal faster.
            </p>

            <p className="text-sm text-[#756B7C] leading-relaxed">
              Our clinical model eliminates standard 7-minute visits in favor of comprehensive
              45-minute multi-system consultations. We integrate non-invasive imaging, genetic biomarker
              profiling, and empathetic guidance under one tranquil roof.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                id="about-schedule-visit-btn"
                onClick={() => openBooking()}
                className="px-7 py-3.5 bg-[#8B6FAE] hover:bg-[#665080] text-white font-semibold text-xs rounded-full shadow-[0_6px_20px_rgba(139,111,174,0.3)] transition-all"
              >
                Experience Aura Care
              </button>

              <button
                id="about-meet-doctors-btn"
                onClick={() => setActivePage('doctors')}
                className="px-6 py-3.5 bg-white text-[#3E3445] border border-[#3E3445]/15 hover:border-[#8B6FAE] font-semibold text-xs rounded-full transition-all"
              >
                Meet Our Faculty
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-[2.5rem] overflow-hidden border-2 border-white shadow-2xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
                alt="Aura Health Medical Pavilion Serene Interior"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3E3445]">
              The Four Pillars of Aura Medicine
            </h3>
            <p className="text-xs sm:text-sm text-[#756B7C] mt-2">
              How our practice architecture transforms patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lilac-card p-6 rounded-3xl bg-white space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8DDF2] text-[#665080] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#8B6FAE]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#3E3445]">
                45-Min Consultations
              </h4>
              <p className="text-xs text-[#756B7C] leading-relaxed">
                Enough time to listen to your full medical narrative, review biomarker baselines, and
                co-design an actionable health trajectory.
              </p>
            </div>

            <div className="lilac-card p-6 rounded-3xl bg-white space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F2D9DF] text-[#D98B9C] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#D98B9C]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#3E3445]">
                Acoustic Serenity
              </h4>
              <p className="text-xs text-[#756B7C] leading-relaxed">
                Sound-dampened private suites, biophilic daylight, and soft Lilac Frost interiors
                designed to lower patient blood pressure and cortisol upon entry.
              </p>
            </div>

            <div className="lilac-card p-6 rounded-3xl bg-white space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8DDF2] text-[#665080] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#8B6FAE]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#3E3445]">
                Non-Invasive Diagnostics
              </h4>
              <p className="text-xs text-[#756B7C] leading-relaxed">
                Ultra-high-field 3T MRI, molecular biomarker arrays, and continuous non-invasive
                cardiac rhythm mapping.
              </p>
            </div>

            <div className="lilac-card p-6 rounded-3xl bg-white space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F2D9DF] text-[#D98B9C] flex items-center justify-center">
                <Award className="w-6 h-6 text-[#D98B9C]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#3E3445]">
                Integrated Panel Review
              </h4>
              <p className="text-xs text-[#756B7C] leading-relaxed">
                Complex patient cases are evaluated weekly by a multi-disciplinary council of
                cardiologists, neurologists, and longevity physicians.
              </p>
            </div>
          </div>
        </div>

        {/* Accreditations & Trust Badges */}
        <div className="p-8 rounded-3xl bg-[#F9F7FB] border border-[#3E3445]/8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B6FAE] block mb-4">
            Institutional Accreditations & Standards
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-semibold text-[#3E3445]">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#739B82]" />
              <span>Joint Commission Gold Seal</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#739B82]" />
              <span>HIPAA Compliant Cloud</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#739B82]" />
              <span>American College of Cardiology</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#739B82]" />
              <span>WHO Clean Clinic Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
