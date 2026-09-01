import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, CheckCircle2, ShieldCheck, Quote } from "lucide-react";
import { industriesData } from "../data/industries";
import { caseStudiesData } from "../data/caseStudies";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button } from "../components/common/Button";
import { ContactForm } from "../components/forms/ContactForm";

export interface IndustryDetailPageProps {
  onOpenScoping: () => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ onOpenScoping }) => {
  const { slug } = useParams<{ slug: string }>();

  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  // Find related case studies for this industry
  const relatedCases = caseStudiesData.filter(
    (cs) => cs.industry.toLowerCase().includes(industry.name.toLowerCase().split(" ")[0]) ||
            (industry.relatedCaseStudySlugs && industry.relatedCaseStudySlugs.includes(cs.slug)) ||
            (industry.featuredCaseStudySlug === cs.slug)
  );

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Industries", to: "/industries" },
            { label: industry.name }
          ]}
        />

        {/* Hero Section */}
        <div className="mb-16 md:mb-20 space-y-6">
          <div className="flex items-center gap-3 font-mono-tech text-xs uppercase text-[#0A2E23]">
            <span className="font-bold border border-[#0A2E23] px-2 py-0.5 rounded-xs">
              INDUSTRY SPECIFICATION
            </span>
            <span>{industry.name.toUpperCase()}</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#121316] tracking-tight leading-[1.05] max-w-4xl">
            {industry.tagline}
          </h1>

          <p className="text-lg sm:text-xl text-[#5E636E] font-normal leading-relaxed max-w-3xl">
            {industry.fullDescription || industry.shortDescription}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" onClick={onOpenScoping} withDiagonalArrow>
              Initiate {industry.name} Scoping
            </Button>
            <Button variant="secondary" size="lg" to="/work" withArrow>
              Browse Industry Portfolio
            </Button>
          </div>
        </div>

        {/* Hero Image & Market Stats Strip */}
        <div className="mb-16 rounded-xs overflow-hidden border border-[#E6E2D8] bg-[#121316]">
          <div className="relative h-72 sm:h-96">
            <img
              src={industry.heroImage}
              alt={industry.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-125 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {industry.marketStats.map((st) => (
                <div key={st.label} className="p-4 bg-[#121316]/85 backdrop-blur-xs border border-white/15 rounded-xs">
                  <div className="font-serif-editorial text-2xl sm:text-3xl text-[#CCF34A]">
                    {st.stat}
                  </div>
                  <div className="font-mono-tech text-xs uppercase text-[#A1A7B4] mt-0.5">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engineered Solutions Grid */}
        <div className="mb-20 space-y-8">
          <div className="border-b border-[#E6E2D8] pb-4">
            <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
              ENGINEERED CAPABILITIES
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] mt-1">
              Mission-Critical Solutions for {industry.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.engineeredSolutions.map((sol, idx) => (
              <div
                key={sol.title}
                className="bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs space-y-4 hover:border-[#0A2E23] transition-colors"
              >
                <div className="flex items-center justify-between font-mono-tech text-xs text-[#0A2E23]">
                  <span className="font-bold text-base">0{idx + 1}</span>
                  <span className="text-[10px] uppercase text-[#7C828D]">SOLUTION ARCHITECTURE</span>
                </div>

                <h3 className="font-serif-editorial text-2xl text-[#121316]">
                  {sol.title}
                </h3>

                <p className="text-sm text-[#5E636E] leading-relaxed">
                  {sol.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sector Testimonial Banner */}
        <div className="mb-20 bg-[#111315] text-[#FAF8F5] p-8 sm:p-12 rounded-xs border border-[#24282F] relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <Quote className="w-10 h-10 text-[#CCF34A] opacity-60" />
            <blockquote className="font-serif-editorial text-2xl sm:text-3xl font-light text-[#FAF8F5] leading-snug">
              "{industry.clientQuote.quote}"
            </blockquote>
            <div className="pt-4 border-t border-[#24282F] font-mono-tech text-xs">
              <div className="text-[#FAF8F5] font-bold">{industry.clientQuote.author}</div>
              <div className="text-[#CCF34A]">{industry.clientQuote.role}</div>
            </div>
          </div>
        </div>

        {/* Related Case Studies */}
        {relatedCases.length > 0 && (
          <div className="mb-20 space-y-8">
            <div className="border-b border-[#E6E2D8] pb-4 flex items-end justify-between">
              <div>
                <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                  DELIVERED WORK
                </div>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] mt-1">
                  Proven Engagements in {industry.name}
                </h2>
              </div>
              <Link to="/work" className="font-mono-tech text-xs uppercase text-[#0A2E23] hover:underline font-bold">
                View Full Library →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCases.slice(0, 2).map((cs) => (
                <div key={cs.id} className="bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group">
                  <div className="h-48 overflow-hidden bg-[#121316]">
                    <img
                      src={cs.heroImage}
                      alt={cs.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="font-mono-tech text-xs text-[#0A2E23]">{cs.capability}</div>
                    <h3 className="font-serif-editorial text-2xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                      <Link to={`/work/${cs.slug}`}>{cs.title}</Link>
                    </h3>
                    <p className="text-xs text-[#5E636E] line-clamp-2">{cs.shortDescription}</p>
                    <div className="pt-3 border-t border-[#E6E2D8] flex items-center justify-between">
                      <span className="font-serif-editorial text-xl text-[#0A2E23] font-bold">{cs.summaryResult}</span>
                      <Link to={`/work/${cs.slug}`} className="p-2 rounded-full border border-[#E6E2D8] group-hover:bg-[#0A2E23] group-hover:text-[#CCF34A]">
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dedicated Scoping Form */}
        <div className="mt-20">
          <ContactForm initialPractice="AI & Intelligent Systems" />
        </div>
      </div>
    </div>
  );
};
