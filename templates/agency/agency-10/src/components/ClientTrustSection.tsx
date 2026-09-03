import React from 'react';
import { TRUST_PARTNERS } from '../data/testimonials';
import { ShieldCheck, Award, Lock, CheckCircle } from 'lucide-react';

export const ClientTrustSection: React.FC = () => {
  return (
    <section id="trust-section" className="py-14 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtitle */}
        <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-600 font-semibold mb-8">
          Trusted by Technology Leaders &bull; Built for High-Impact Enterprises
        </p>

        {/* Client Brands Grid / Marquee */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
          {TRUST_PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50/80 border border-slate-150 hover:bg-slate-100/80 hover:border-slate-300 transition-colors group text-center"
            >
              <span className="font-bold text-slate-800 text-xs tracking-tight group-hover:text-blue-700 transition-colors font-display">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-600 font-mono mt-0.5">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications & Compliance Badges */}
        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-700" />
            <span className="font-medium">SOC 2 Type II Ready Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-slate-700" />
            <span className="font-medium">HIPAA &amp; GDPR Data Sovereignty</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-slate-700" />
            <span className="font-medium">ISO 27001 Security Aligned</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-slate-700" />
            <span className="font-medium">AWS &amp; Google Cloud Certified Engineers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
