import React from 'react';
import { CaseStudy } from '../types';
import { CASE_STUDIES_DATA } from '../data/projects';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Layers, 
  Star, 
  Sparkles,
  Calendar,
  Globe,
  Tag
} from 'lucide-react';

interface CaseStudyDetailViewProps {
  caseStudy: CaseStudy;
  onBack: () => void;
  onViewCaseStudy: (slug: string) => void;
  onOpenInquiry: () => void;
}

export const CaseStudyDetailView: React.FC<CaseStudyDetailViewProps> = ({
  caseStudy,
  onBack,
  onViewCaseStudy,
  onOpenInquiry,
}) => {
  // Related projects (exclude current)
  const relatedProjects = CASE_STUDIES_DATA.filter((p) => p.slug !== caseStudy.slug).slice(0, 2);

  return (
    <div id={`case-study-detail-${caseStudy.slug}`} className="pt-24 pb-20 bg-white">
      {/* 1. Hero Section */}
      <div className="bg-slate-950 text-white pt-14 pb-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4 text-slate-400">
            <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
              {caseStudy.category} Architecture
            </span>
            <span>&bull;</span>
            <span className="text-slate-300">{caseStudy.clientIndustry}</span>
            <span>&bull;</span>
            <span>{caseStudy.clientRegion}</span>
            <span>&bull;</span>
            <span>{caseStudy.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white max-w-4xl leading-tight">
            {caseStudy.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {caseStudy.shortDescription}
          </p>

          {/* Key Metric Highlights in Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-800">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-3xl font-extrabold text-emerald-400 font-display">
                  {metric.value}
                </p>
                <p className="text-xs font-bold text-slate-200 mt-1">{metric.label}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{metric.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Visual Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-video max-h-[480px] bg-slate-900">
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Main Content Blueprint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Challenge, Approach & Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Client Challenge */}
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-50/50 border border-rose-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-rose-700 font-bold">
                01 &bull; The Client Challenge
              </span>
              <h3 className="text-xl font-bold text-slate-950 mt-2 font-display">
                Operational Inefficiencies &amp; Scale Bottlenecks
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-200/60 text-xs font-mono text-rose-800">
              Client: {caseStudy.client}
            </div>
          </div>

          {/* Our Approach */}
          <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
                02 &bull; Research &amp; Strategy
              </span>
              <h3 className="text-xl font-bold text-slate-950 mt-2 font-display">
                First-Principles Architectural Strategy
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-200/60 text-xs font-mono text-blue-800">
              Discovery: 2-Week Architecture RFC
            </div>
          </div>

          {/* Solution */}
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
                03 &bull; Production System
              </span>
              <h3 className="text-xl font-bold text-slate-950 mt-2 font-display">
                Scalable, Turnkey Deployment
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200/60 text-xs font-mono text-emerald-800">
              Outcome: Full Turnkey Rollout
            </div>
          </div>
        </div>

        {/* Design Highlights & UI screenshots */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Ergonomics &amp; Interface Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 font-display">
              Designed for Speed, Cognitive Ease &amp; Precision
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Enterprise software should never feel punishing. We designed customized interfaces prioritizing information density and zero eye fatigue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.designHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/80 border border-slate-750 flex items-start gap-3 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development & Engineering Highlights + Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Engineering Deep-Dive
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
              Architecture &amp; Implementation Details
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Every system we engineer is built with automated regression suites, containerized deployment recipes, and distributed tracing.
            </p>

            <div className="mt-6 space-y-3">
              {caseStudy.developmentHighlights.map((dev, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed">{dev}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Matrix */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Technology Stack
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 font-display">
              Production Stack &amp; Infrastructure
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Zero vendor lock-in standards deployed directly into client cloud accounts.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {caseStudy.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-800 flex items-center gap-1.5"
                >
                  <Cpu className="w-3.5 h-3.5 text-blue-600" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>

            {/* Testimonial Component */}
            {caseStudy.testimonial && (
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xs text-slate-700 italic leading-relaxed">
                  &ldquo;{caseStudy.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={caseStudy.testimonial.avatar}
                    alt={caseStudy.testimonial.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{caseStudy.testimonial.author}</p>
                    <p className="text-[11px] text-slate-500">{caseStudy.testimonial.role}, {caseStudy.testimonial.company}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Projects */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 font-display mb-6">
            Related Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((p) => (
              <div
                key={p.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-blue-600 font-bold uppercase">{p.category} &bull; {p.clientIndustry}</span>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-1">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                    {p.shortDescription}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 font-mono">
                    {p.metrics[0]?.value} {p.metrics[0]?.label}
                  </span>
                  <button
                    onClick={() => onViewCaseStudy(p.slug)}
                    className="text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA: "Have a similar project? Let's talk." */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white text-center flex flex-col items-center justify-center relative overflow-hidden border border-slate-800">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Accelerate Your Product
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 font-display text-white">
              Have a similar project? Let&apos;s talk.
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Our principal engineers can evaluate your technical architecture, review requirements, and deliver a comprehensive implementation roadmap.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-8 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center gap-2"
              >
                <span>Start Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBack}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-medium text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                Explore More Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
