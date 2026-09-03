import React, { useState } from 'react';
import { ServiceItem, CaseStudy } from '../types';
import { CASE_STUDIES_DATA } from '../data/projects';
import { DynamicIcon } from './DynamicIcon';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  ExternalLink,
  Zap,
  Clock
} from 'lucide-react';

interface ServiceDetailViewProps {
  service: ServiceItem;
  onBack: () => void;
  onViewCaseStudy: (slug: string) => void;
  onOpenInquiry: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBack,
  onViewCaseStudy,
  onOpenInquiry,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Find relevant projects
  const relevantCaseStudies = CASE_STUDIES_DATA.slice(0, 2);

  return (
    <div id={`service-detail-view-${service.slug}`} className="pt-28 pb-20 bg-white">
      {/* 1. Hero Section */}
      <div className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono mb-4 border border-blue-500/30">
                <DynamicIcon name={service.iconName} className="w-4 h-4" />
                <span>{service.category} Specialization</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                {service.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Initiate Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 9. Results / Metrics Ribbon in Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-800/80">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
                  {metric.value}
                </p>
                <p className="text-xs font-semibold text-slate-300 mt-1">{metric.label}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{metric.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* 2. Service Overview & 4. Our Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Discipline Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
              Engineered for Enterprise Throughput &amp; Zero-Downtime Reliability.
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {service.shortDescription}
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Rather than generic templates or shallow wrappers, our solutions are engineered directly at the protocol, model, and infrastructure layer. Every architecture artifact is delivered with comprehensive documentation, unit and regression test suites, and turnkey cloud templates.
            </p>

            {/* 5. Key Capabilities */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-4">
                Core Capabilities &amp; Specifications:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Architecture Solution Highlights */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Architectural Methodology</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight font-display mb-4">
              How We Solve It: Technical Tenets
            </h3>
            <div className="space-y-4 text-xs text-slate-300">
              {service.architecturePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-750">
                  <span className="font-mono text-blue-400 font-bold text-sm">0{idx + 1}</span>
                  <p className="leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            {/* 6. Technology Stack */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
                Primary Technology Stack:
              </p>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Business Problems Solved */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Business Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
              Critical Bottlenecks We Eliminate
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Real-world operational vulnerabilities transformed into competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.businessProblems.map((bp, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-rose-50 text-rose-600 text-xs font-mono font-bold mb-4">
                    P0{i + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    The Business Problem:
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {bp.problem}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Our Engineered Solution:
                  </h4>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed font-medium">
                    {bp.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Development Process */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Delivery Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
              Phased Implementation &amp; Deliverables
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Predictable milestone gating ensuring code quality and transparent velocity.
            </p>
          </div>

          <div className="space-y-4">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg shrink-0">
                    Phase {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{step.phase}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{step.deliverables}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-600 shrink-0 sm:text-right font-medium">
                  Verified Sign-off
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Relevant Projects */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Proven Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
                Relevant Case Studies
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relevantCaseStudies.map((project) => (
              <div
                key={project.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-mono">{project.clientIndustry}</span>
                    <span className="font-bold text-blue-600">{project.metrics[0]?.value} {project.metrics[0]?.label}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onViewCaseStudy(project.slug)}
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

        {/* 10. FAQ Section */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
              Frequently Asked Questions: {service.title}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200/80 bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 11. High-Impact CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white text-center flex flex-col items-center justify-center relative overflow-hidden border border-slate-800">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Start Building Today
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 font-display text-white">
              Ready to implement {service.title}?
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Book a technical scoping workshop with our systems engineering team. We analyze data readiness, architecture dependencies, and deliver a detailed RFC.
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
                Browse All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
