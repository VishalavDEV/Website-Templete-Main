import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudiesData } from "../../data/caseStudies";
import { SectionHeader } from "../common/SectionHeader";

export const FeaturedWorkSection: React.FC = () => {
  const p1 = caseStudiesData[0]; // AI Risk
  const p2 = caseStudiesData[1]; // Supply Chain
  const p3 = caseStudiesData[2]; // Healthcare

  return (
    <section className="py-20 md:py-32 border-b border-[#E6E2D8] bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          tag="Case Studies"
          title="Architectural breakthroughs with measurable impact."
          description="A selection of high-consequence enterprise platforms engineered for global leaders in finance, manufacturing, and health sciences."
          actionText="View All Case Studies"
          actionTo="/work"
        />

        {/* Asymmetric Magazine Layout */}
        <div className="space-y-12 md:space-y-16">
          {/* Project 1: Large Featured Dominant Article Row */}
          <div className="bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Content (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 font-mono-tech text-xs uppercase tracking-wider text-[#0A2E23]">
                    <span>{p1.industry}</span>
                    <span className="text-[#C4BFB2]">/</span>
                    <span>{p1.capability}</span>
                  </div>

                  <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] leading-tight group-hover:text-[#0A2E23] transition-colors">
                    <Link to={`/work/${p1.slug}`}>
                      {p1.title}
                    </Link>
                  </h3>

                  <p className="text-sm sm:text-base text-[#5E636E] leading-relaxed">
                    {p1.shortDescription}
                  </p>
                </div>

                {/* Big Result Metric */}
                <div className="pt-6 border-t border-[#E6E2D8] space-y-1">
                  <div className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#0A2E23]">
                    {p1.summaryResult}
                  </div>
                  <div className="font-mono-tech text-xs uppercase text-[#7C828D]">
                    {p1.summaryMetricLabel}
                  </div>
                </div>

                <div>
                  <Link
                    to={`/work/${p1.slug}`}
                    className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider font-semibold text-[#0A2E23] group pb-1 border-b border-[#0A2E23]/30 hover:border-[#0A2E23]"
                  >
                    <span>Read Architectural Deep-Dive</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Large Editorial Image (7 cols) */}
              <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[480px] bg-[#121316] overflow-hidden">
                <img
                  src={p1.heroImage}
                  alt={p1.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#121316]/90 text-[#CCF34A] font-mono-tech text-xs rounded-xs">
                  CLIENT: {p1.client}
                </div>
              </div>
            </div>
          </div>

          {/* Projects 2 & 3: Asymmetric Split Columns (Different heights and structures) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Project 2 (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group flex flex-col justify-between">
              <div className="relative h-64 sm:h-80 bg-[#121316] overflow-hidden">
                <img
                  src={p2.heroImage}
                  alt={p2.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#121316]/90 text-[#FAF8F5] text-xs font-mono-tech rounded-xs">
                  {p2.industry}
                </div>
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="font-mono-tech text-xs uppercase text-[#0A2E23]">
                    {p2.capability}
                  </div>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                    <Link to={`/work/${p2.slug}`}>
                      {p2.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#5E636E] leading-relaxed">
                    {p2.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E2D8] flex items-end justify-between">
                  <div>
                    <div className="font-serif-editorial text-3xl text-[#0A2E23]">
                      {p2.summaryResult}
                    </div>
                    <div className="font-mono-tech text-[11px] uppercase text-[#7C828D]">
                      {p2.summaryMetricLabel}
                    </div>
                  </div>

                  <Link
                    to={`/work/${p2.slug}`}
                    className="p-3 rounded-full border border-[#E6E2D8] group-hover:bg-[#0A2E23] group-hover:text-[#CCF34A] transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group flex flex-col justify-between">
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between font-mono-tech text-xs uppercase text-[#0A2E23]">
                  <span>{p3.industry}</span>
                  <span className="text-[#7C828D]">{p3.duration}</span>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                  <Link to={`/work/${p3.slug}`}>
                    {p3.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#5E636E] leading-relaxed">
                  {p3.shortDescription}
                </p>

                <div className="p-4 bg-[#FAF8F5] border border-[#E6E2D8] rounded-xs space-y-1">
                  <div className="font-serif-editorial text-3xl text-[#0A2E23]">
                    {p3.summaryResult}
                  </div>
                  <div className="font-mono-tech text-xs uppercase text-[#7C828D]">
                    {p3.summaryMetricLabel}
                  </div>
                </div>
              </div>

              <div className="relative h-56 bg-[#121316] overflow-hidden border-t border-[#E6E2D8]">
                <img
                  src={p3.heroImage}
                  alt={p3.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#0A2E23]/20" />
                <Link
                  to={`/work/${p3.slug}`}
                  className="absolute bottom-4 right-4 px-3 py-1.5 bg-[#FAF8F5] text-[#121316] hover:text-[#0A2E23] text-xs font-mono-tech font-bold uppercase rounded-xs flex items-center gap-1.5 shadow-sm"
                >
                  <span>Explore Case</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
