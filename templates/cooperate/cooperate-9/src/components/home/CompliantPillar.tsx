import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2, AlertCircle, Scale, Eye } from 'lucide-react';

export const CompliantPillar: React.FC = () => {
  const complianceGuarantees = [
    {
      title: 'CFPB & Fair Lending Guardrails',
      desc: 'Rigorous deterministic rule evaluation prevents non-compliant rate commitments, discriminatory steering, or unvetted disclosures.',
      badge: 'Reg B / Reg Z Compliant',
    },
    {
      title: 'TCPA Consent & Quiet-Hour Enforcement',
      desc: 'Automatic timezone detection and opt-in token validation guarantee calls and SMS are only sent within legal operating windows.',
      badge: 'Zero TCPA Violations',
    },
    {
      title: 'GLBA & Bank-Grade Data Protection',
      desc: 'Borrower PII, financial statements, and account numbers are encrypted at rest with AES-256 and in transit with TLS 1.3.',
      badge: 'SOC 2 Type II Certified',
    },
    {
      title: 'Full Audit Trail & Human Oversight',
      desc: 'Every single agent thought, API call, and borrower conversation is logged with millisecond timestamps for regulatory examiners.',
      badge: '100% Explainable Logs',
    },
  ];

  return (
    <section id="compliant" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: PILLAR OVERVIEW */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-[#191919]/50 text-xs font-mono">
            <span>03</span>
            <span>/</span>
            <span className="uppercase tracking-widest font-semibold">COMPLIANT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#191919] leading-tight">
            Engineered from day one for heavily regulated institutions
          </h2>

          <p className="text-base text-[#191919]/75 font-normal leading-relaxed">
            Financial institutions cannot afford generative AI hallucinations. Boomerang’s dual-engine architecture combines conversational fluency with strict deterministic compliance gates.
          </p>

          <div className="p-5 bg-[#F8F9FA] rounded-2xl border border-gray-200/80 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#191919]">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Institutional Security Standards
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-gray-600">
              <span className="bg-white p-2 rounded border border-gray-200">✓ SOC 2 Type II</span>
              <span className="bg-white p-2 rounded border border-gray-200">✓ ISO 27001</span>
              <span className="bg-white p-2 rounded border border-gray-200">✓ GLBA Safeguards</span>
              <span className="bg-white p-2 rounded border border-gray-200">✓ Zero Model Training on Client Data</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 4 COMPLIANCE TILES */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {complianceGuarantees.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="inline-block text-[10px] font-mono uppercase px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                  {item.badge}
                </span>
                <h3 className="font-medium text-base text-[#191919]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#191919]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
