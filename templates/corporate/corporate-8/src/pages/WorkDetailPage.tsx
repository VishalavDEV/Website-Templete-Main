import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, CheckCircle2, ShieldCheck, Quote, Clock, Users, Globe } from "lucide-react";
import { caseStudiesData } from "../data/caseStudies";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button } from "../components/common/Button";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";

export interface WorkDetailPageProps {
  onOpenScoping: () => void;
}

export const WorkDetailPage: React.FC<WorkDetailPageProps> = ({ onOpenScoping }) => {
  const { slug } = useParams<{ slug: string }>();

  const caseIndex = caseStudiesData.findIndex((c) => c.slug === slug);
  const cs = caseStudiesData[caseIndex];

  if (!cs) {
    return <Navigate to="/work" replace />;
  }

  const nextCase = caseStudiesData[(caseIndex + 1) % caseStudiesData.length];

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Work", to: "/work" },
            { label: cs.title }
          ]}
        />

        {/* Case Study Metadata Header */}
        <div className="mb-12 md:mb-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs uppercase text-[#0A2E23]">
            <span className="font-bold border border-[#0A2E23] px-2 py-0.5 rounded-xs">
              {cs.industry}
            </span>
            <span>{cs.capability}</span>
            <span className="text-[#C4BFB2]">/</span>
            <span className="text-[#5E636E]">CLIENT: {cs.client}</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#121316] tracking-tight leading-[1.05] max-w-5xl">
            {cs.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#5E636E] font-normal leading-relaxed max-w-3xl">
            {cs.shortDescription}
          </p>

          {/* Quick Stats Strip */}
          <div className="pt-4 flex flex-wrap items-center gap-8 font-mono-tech text-xs text-[#5E636E] border-t border-[#E6E2D8]/80">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0A2E23]" />
              <span>TIMELINE: <strong className="text-[#121316]">{cs.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#0A2E23]" />
              <span>DELIVERY CREW: <strong className="text-[#121316]">14 Senior Engineers</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0A2E23]" />
              <span>AVAILABILITY: <strong className="text-[#121316]">99.999% SLA</strong></span>
            </div>
          </div>
        </div>

        {/* Big Hero Image Banner */}
        <div className="relative h-80 sm:h-[480px] rounded-xs overflow-hidden border border-[#E6E2D8] mb-16 bg-[#121316]">
          <img
            src={cs.heroImage}
            alt={cs.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale contrast-125 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-mono-tech text-xs">
            <span>SYSTEM BLUEPRINT // PRODUCTION ACTIVE</span>
            <span className="text-[#CCF34A]">VERIFIED AUDIT</span>
          </div>
        </div>

        {/* Quantifiable Impact Metrics Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {(cs.businessImpact || []).map((m) => (
            <div key={m.label} className="bg-white border border-[#E6E2D8] p-8 rounded-xs space-y-2">
              <div className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#0A2E23]">
                {m.metric}
              </div>
              <div className="font-mono-tech text-xs uppercase text-[#7C828D]">
                {m.label}
              </div>
              {m.detail && (
                <div className="text-[11px] text-[#5E636E] pt-1">
                  {m.detail}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Deep Narrative Grid: Challenge & Architectural Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Main Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Challenge */}
            <div className="space-y-4">
              <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                THE ARCHITECTURAL BOTTLENECK
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316]">
                The Problem
              </h2>
              <p className="text-base sm:text-lg text-[#5E636E] leading-relaxed">
                {typeof cs.challenge === "string" ? cs.challenge : cs.challenge.overview}
              </p>
              {typeof cs.challenge !== "string" && cs.challenge.keyPoints && (
                <ul className="space-y-2 font-mono-tech text-xs text-[#5E636E] pt-2">
                  {cs.challenge.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E23] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* The Solution */}
            <div className="space-y-4 pt-8 border-t border-[#E6E2D8]">
              <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                ENGINEERED BLUEPRINT
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316]">
                The Solution & System Architecture
              </h2>
              <p className="text-base sm:text-lg text-[#5E636E] leading-relaxed">
                {typeof cs.solution === "string" ? cs.solution : (cs.solution.architectureOverview || cs.solution.overview)}
              </p>
            </div>

            {/* Architecture Highlights */}
            {((typeof cs.solution !== "string" && cs.solution.keyFeatures) || (typeof cs.strategy !== "string" && cs.strategy?.principles)) && (
              <div className="space-y-3 pt-6">
                <div className="font-mono-tech text-xs uppercase text-[#121316] font-bold">
                  Key Architectural Enforcements:
                </div>
                <div className="space-y-2 font-mono-tech text-xs text-[#5E636E]">
                  {(typeof cs.solution !== "string" ? cs.solution.keyFeatures : []).map((hl) => (
                    <div key={hl} className="flex items-start gap-2 bg-[#FAF8F5] p-3 border border-[#E6E2D8] rounded-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#0A2E23] shrink-0 mt-0.5" />
                      <span className="text-[#121316]">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Client Testimonial Quote */}
            {cs.clientTestimonial && (
              <div className="bg-[#111315] text-[#FAF8F5] p-8 sm:p-10 rounded-xs border border-[#24282F] space-y-4">
                <Quote className="w-8 h-8 text-[#CCF34A] opacity-80" />
                <blockquote className="font-serif-editorial text-xl sm:text-2xl font-light leading-snug">
                  "{cs.clientTestimonial.quote}"
                </blockquote>
                <div className="pt-4 border-t border-[#24282F] font-mono-tech text-xs">
                  <div className="font-bold text-[#FAF8F5]">{cs.clientTestimonial.author}</div>
                  <div className="text-[#CCF34A]">{cs.clientTestimonial.role} — {cs.clientTestimonial.company}</div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Info (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tech Stack Matrix */}
            <div className="bg-white border border-[#E6E2D8] p-6 rounded-xs space-y-4">
              <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                Technologies Utilized
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(cs.technologyStack || []).map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E6E2D8] font-mono-tech text-xs text-[#121316] rounded-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Scoping CTA Widget */}
            <div className="bg-[#F5F2EB] border border-[#E6E2D8] p-6 rounded-xs space-y-4">
              <div className="font-serif-editorial text-2xl text-[#121316]">
                Facing similar throughput constraints?
              </div>
              <p className="text-xs text-[#5E636E] leading-relaxed">
                Connect with our Principal Architects to conduct an architectural discovery session.
              </p>
              <Button variant="primary" size="md" onClick={onOpenScoping} withDiagonalArrow className="w-full">
                Initiate Scoping
              </Button>
            </div>
          </div>
        </div>

        {/* Next Case Study Bar */}
        <div className="pt-12 border-t border-[#E6E2D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase text-[#5E636E] hover:text-[#121316] font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Case Studies</span>
          </Link>

          <Link
            to={`/work/${nextCase.slug}`}
            className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase text-[#0A2E23] hover:underline font-bold"
          >
            <span>Next Case Study: {nextCase.title}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
