import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, CheckCircle2, ChevronDown, ShieldCheck, Cpu, Code, Layers } from "lucide-react";
import { capabilitiesData } from "../data/capabilities";
import { caseStudiesData } from "../data/caseStudies";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button } from "../components/common/Button";
import { ContactForm } from "../components/forms/ContactForm";

export interface CapabilityDetailPageProps {
  onOpenScoping: () => void;
}

export const CapabilityDetailPage: React.FC<CapabilityDetailPageProps> = ({ onOpenScoping }) => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const capability = capabilitiesData.find((c) => c.slug === slug);

  if (!capability) {
    return <Navigate to="/capabilities" replace />;
  }

  // Find related case studies
  const relatedCases = caseStudiesData.filter(
    (cs) => cs.capability.toLowerCase().includes(capability.title.toLowerCase().split(" ")[0]) ||
            (capability.relatedCaseStudies && capability.relatedCaseStudies.includes(cs.id)) ||
            (capability.featuredCaseStudySlug === cs.slug)
  );

  const faqsList = capability.faqs || capability.faq || [];

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Capabilities", to: "/capabilities" },
            { label: capability.title }
          ]}
        />

        {/* Practice Hero */}
        <div className="mb-16 md:mb-20 space-y-6">
          <div className="flex items-center gap-3 font-mono-tech text-xs uppercase text-[#0A2E23]">
            <span className="font-bold border border-[#0A2E23] px-2 py-0.5 rounded-xs">
              PRACTICE {capability.number}
            </span>
            <span>DISCIPLINE SPECIFICATION</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#121316] tracking-tight leading-[1.05] max-w-4xl">
            {capability.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#5E636E] font-normal leading-relaxed max-w-3xl">
            {capability.shortDescription || capability.fullOverview}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" onClick={onOpenScoping} withDiagonalArrow>
              Scope a {capability.title} Project
            </Button>
            <Button variant="secondary" size="lg" to="/work" withArrow>
              View Related Work
            </Button>
          </div>
        </div>

        {/* Big Editorial Hero Visual Banner */}
        <div className="relative h-72 sm:h-96 rounded-xs overflow-hidden border border-[#E6E2D8] mb-16 bg-[#121316]">
          <img
            src={capability.image}
            alt={capability.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale contrast-125 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <div className="font-mono-tech text-xs uppercase text-[#CCF34A]">Architectural Domain</div>
              <div className="font-serif-editorial text-2xl sm:text-3xl">{capability.shortDescription}</div>
            </div>
            <div className="px-3 py-1 bg-[#121316]/90 border border-white/20 text-xs font-mono-tech rounded-xs">
              SPEC // 2026-v4
            </div>
          </div>
        </div>

        {/* Practice Offerings Grid */}
        <div className="mb-20 space-y-8">
          <div className="border-b border-[#E6E2D8] pb-4">
            <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
              ENGAGEMENT SPECIALIZATIONS
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] mt-1">
              Core Practice Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capability.offerings.map((offering, idx) => (
              <div
                key={offering.title}
                className="bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs space-y-4 hover:border-[#0A2E23] transition-colors"
              >
                <div className="flex items-center justify-between font-mono-tech text-xs text-[#0A2E23]">
                  <span className="font-bold text-base">0{idx + 1}</span>
                  <span className="text-[10px] uppercase text-[#7C828D]">ENGINEERING MODULE</span>
                </div>

                <h3 className="font-serif-editorial text-2xl text-[#121316]">
                  {offering.title}
                </h3>

                <p className="text-sm text-[#5E636E] leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Matrix */}
        <div className="mb-20 bg-[#F5F2EB] border border-[#E6E2D8] p-8 sm:p-12 rounded-xs space-y-6">
          <div className="border-b border-[#E6E2D8] pb-4">
            <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
              TECHNOLOGY MATRIX
            </div>
            <h2 className="font-serif-editorial text-3xl text-[#121316] mt-1">
              Supported Stack & Toolchains
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {capability.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 bg-white border border-[#E6E2D8] font-mono-tech text-xs uppercase text-[#121316] rounded-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Related Case Studies */}
        {relatedCases.length > 0 && (
          <div className="mb-20 space-y-8">
            <div className="border-b border-[#E6E2D8] pb-4 flex items-end justify-between">
              <div>
                <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                  PROVEN DELIVERIES
                </div>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] mt-1">
                  Related Case Studies
                </h2>
              </div>
              <Link to="/work" className="font-mono-tech text-xs uppercase text-[#0A2E23] hover:underline font-bold">
                View All Work →
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
                    <div className="font-mono-tech text-xs text-[#0A2E23]">{cs.industry}</div>
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

        {/* Practice FAQ Accordion */}
        <div className="mb-20 space-y-6">
          <div className="border-b border-[#E6E2D8] pb-4">
            <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
              TECHNICAL SCOPING FAQ
            </div>
            <h2 className="font-serif-editorial text-3xl text-[#121316] mt-1">
              Frequently Addressed Inquiries
            </h2>
          </div>

          <div className="divide-y divide-[#E6E2D8] border border-[#E6E2D8] bg-white rounded-xs">
            {faqsList.map((item, idx) => {
              const question = (item as any).question || (item as any).q || "";
              const answer = (item as any).answer || (item as any).a || "";
              const isOpen = openFaqIdx === idx;
              return (
                <div key={question || idx} className="p-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-serif-editorial text-xl text-[#121316] cursor-pointer"
                  >
                    <span>{question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180 text-[#0A2E23]" : "text-[#7C828D]"}`} />
                  </button>

                  {isOpen && (
                    <p className="mt-4 text-sm text-[#5E636E] leading-relaxed pt-3 border-t border-[#E6E2D8]/60">
                      {answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Dedicated Scoping Form */}
        <div className="mt-20">
          <ContactForm initialPractice={capability.title} />
        </div>
      </div>
    </div>
  );
};
