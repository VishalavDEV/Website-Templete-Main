import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Quote, ArrowRight, Building2 } from 'lucide-react';
import { caseStudiesData } from '../../data/caseStudies';

interface CaseStudyDetailProps {
  onOpenConsultation: () => void;
}

export default function CaseStudyDetail({ onOpenConsultation }: CaseStudyDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudiesData.find((s) => s.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#0A261F] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DFBA58] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              {study.industry} • {study.region}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              {study.clientType}
            </h1>

            <p className="text-base sm:text-xl text-[#D8C3A8]/90 font-light">
              How Aurelia engineered a transformed global travel framework delivering {study.results[0].value} {study.results[0].label.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* Main Breakdown */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Results Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-[#D8C3A8]/70 shadow-sm">
          {study.results.map((res, i) => (
            <div key={i} className="text-center p-3">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0F382E]">{res.value}</div>
              <div className="text-xs uppercase font-bold text-[#25332E] mt-1">{res.label}</div>
            </div>
          ))}
        </div>

        {/* Narrative Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#D8C3A8]/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-semibold text-[#0E1412]">The Core Challenge</h3>
              <p className="text-sm sm:text-base text-[#3E5049] leading-relaxed">{study.challenge}</p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#D8C3A8]/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-semibold text-[#0E1412]">The Aurelia Architecture</h3>
              <p className="text-sm sm:text-base text-[#3E5049] leading-relaxed">{study.solution}</p>
            </div>

            {/* Testimonial Box */}
            <div className="p-8 rounded-3xl bg-[#0F382E] text-white space-y-4">
              <Quote className="w-8 h-8 text-[#DFBA58] opacity-80" />
              <blockquote className="font-serif text-lg sm:text-xl text-[#FCFAF6] italic leading-relaxed">
                "{study.quote.text}"
              </blockquote>
              <div className="pt-2 border-t border-[#165042] text-xs">
                <div className="font-semibold text-white">{study.quote.author}</div>
                <div className="text-[#DFBA58]">{study.quote.title} • {study.clientName}</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#F8F5EE] border border-[#D8C3A8]/70 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F382E]">
              Program Overview
            </div>
            <div className="space-y-3 text-xs text-[#3E5049]">
              <div>
                <span className="text-[#8FA29A] block">Organization:</span>
                <span className="font-semibold text-[#0E1412]">{study.clientName}</span>
              </div>
              <div>
                <span className="text-[#8FA29A] block">Travel Scope:</span>
                <span className="font-semibold text-[#0E1412]">{study.travelType}</span>
              </div>
              <div>
                <span className="text-[#8FA29A] block">Primary Geography:</span>
                <span className="font-semibold text-[#0E1412]">{study.region}</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-3.5 rounded-xl bg-[#0F382E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#165042] transition-colors cursor-pointer"
            >
              Request Similar Program Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
