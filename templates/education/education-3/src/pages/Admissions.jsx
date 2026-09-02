import React from 'react';
import AdmissionJourney from '../components/AdmissionJourney';
import { Sparkles, Calendar, DollarSign, Award, CheckCircle } from 'lucide-react';

export default function Admissions({ onOpenAdmissions }) {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Banner */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-violetAccent-400" />
            <span>ENROLLMENT PORTAL 2026</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
            Admissions & Fellowships.
          </h1>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Aetheria welcomes visionaries, engineers, scientists, and venture builders. Learn about key dates, financial aid grants, and fellowship prerequisites.
          </p>
        </div>

        {/* Embedded Admission Journey Component */}
        <div className="mb-16">
          <AdmissionJourney onOpenAdmissions={onOpenAdmissions} />
        </div>

        {/* Key Dates & Fellowship Grant Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4 bg-slate-950/60">
            <div className="w-12 h-12 rounded-2xl bg-electric-600/20 text-electric-400 flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Key Admission Dates</h3>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-slate-400">Early Decision:</span>
                <span className="text-electric-300 font-bold">Oct 15, 2026</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-slate-400">Regular Fellowship:</span>
                <span className="text-electric-300 font-bold">Dec 01, 2026</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Term Starts:</span>
                <span className="text-emerald-400 font-bold">Jan 20, 2027</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4 bg-slate-950/60">
            <div className="w-12 h-12 rounded-2xl bg-violetAccent-600/20 text-violetAccent-400 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Full Fellowship Grants</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Over 65% of enrolled scholars receive merit-based full tuition stipends backed by industry research partners and philanthropic endowments.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4 bg-slate-950/60">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Global Credentials</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Degrees and certificates are issued with cryptographic verification, recognized by top technology labs, research institutes, and venture funds.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
