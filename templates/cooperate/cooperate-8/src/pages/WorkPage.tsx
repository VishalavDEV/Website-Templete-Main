import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search, Filter } from "lucide-react";
import { caseStudiesData } from "../data/caseStudies";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button } from "../components/common/Button";

export interface WorkPageProps {
  onOpenScoping: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onOpenScoping }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [selectedCapability, setSelectedCapability] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const industriesList = ["All", "Financial Services", "Manufacturing", "Healthcare", "Retail & Commerce", "Energy & Utilities", "Logistics & Supply Chain"];
  const capabilitiesList = ["All", "AI & Intelligent Systems", "Digital Products", "Cloud & Infrastructure", "Data & Analytics", "Cybersecurity"];

  const filteredStudies = caseStudiesData.filter((cs) => {
    const matchesIndustry = selectedIndustry === "All" || cs.industry.toLowerCase().includes(selectedIndustry.toLowerCase().split(" ")[0]);
    const matchesCap = selectedCapability === "All" || cs.capability.toLowerCase().includes(selectedCapability.toLowerCase().split(" ")[0]);
    const matchesSearch = searchQuery === "" ||
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.client.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesIndustry && matchesCap && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Work & Case Studies" }]} />

        {/* Hero Header */}
        <div className="mb-12 md:mb-16 max-w-4xl space-y-6">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0A2E23] flex items-center gap-2">
            <span className="w-2 h-2 rounded-xs bg-[#0A2E23]" />
            <span>SELECTED CLIENT DELIVERIES & PRODUCTION SYSTEMS</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#121316] tracking-tight leading-[1.05]">
            Architectural case studies.
          </h1>

          <p className="text-base sm:text-xl text-[#5E636E] font-normal leading-relaxed max-w-2xl">
            A comprehensive catalog of mission-critical systems, AI infrastructure, and multi-cloud transformations engineered by Vertexa.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white border border-[#E6E2D8] p-6 rounded-xs mb-12 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#7C828D] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case studies, clients, technologies..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-xs text-[#121316] rounded-xs font-mono-tech"
              />
            </div>

            {/* Total Results Counter */}
            <div className="font-mono-tech text-xs text-[#5E636E]">
              SHOWING <strong className="text-[#121316]">{filteredStudies.length}</strong> CASE STUDIES
            </div>
          </div>

          {/* Industry Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-[#E6E2D8]/60">
            <span className="font-mono-tech text-[11px] uppercase text-[#7C828D] mr-2">
              Industry:
            </span>
            {industriesList.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3 py-1 font-mono-tech text-xs rounded-xs border transition-colors cursor-pointer ${
                  selectedIndustry === ind
                    ? "bg-[#0A2E23] text-[#CCF34A] border-[#0A2E23] font-bold"
                    : "bg-[#FAF8F5] text-[#5E636E] border-[#E6E2D8] hover:border-[#121316]/40"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        {filteredStudies.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-white border border-[#E6E2D8] rounded-xs">
            <div className="font-serif-editorial text-2xl text-[#121316]">
              No case studies match your filter criteria
            </div>
            <p className="text-sm text-[#5E636E]">
              Try adjusting your industry filter or search query.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedIndustry("All");
                setSelectedCapability("All");
                setSearchQuery("");
              }}
              className="font-mono-tech text-xs text-[#0A2E23] uppercase font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group flex flex-col justify-between hover:border-[#0A2E23] transition-colors"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#121316]">
                  <img
                    src={cs.heroImage}
                    alt={cs.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#0A2E23] text-[#CCF34A] text-[11px] font-mono-tech uppercase font-bold rounded-xs">
                    {cs.industry}
                  </div>
                  <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-[#121316]/90 text-[#FAF8F5] text-xs font-mono-tech rounded-xs">
                    {cs.client}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="font-mono-tech text-xs uppercase text-[#0A2E23]">
                      {cs.capability}
                    </div>

                    <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                      <Link to={`/work/${cs.slug}`}>
                        {cs.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-[#5E636E] leading-relaxed">
                      {cs.shortDescription}
                    </p>
                  </div>

                  {/* Impact Metric & Link */}
                  <div className="pt-6 border-t border-[#E6E2D8] flex items-end justify-between">
                    <div>
                      <div className="font-serif-editorial text-3xl text-[#0A2E23] font-bold">
                        {cs.summaryResult}
                      </div>
                      <div className="font-mono-tech text-[10px] uppercase text-[#7C828D]">
                        {cs.summaryMetricLabel}
                      </div>
                    </div>

                    <Link
                      to={`/work/${cs.slug}`}
                      className="p-3 rounded-full border border-[#E6E2D8] group-hover:bg-[#0A2E23] group-hover:text-[#CCF34A] transition-colors"
                      aria-label={`View ${cs.title} case study`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
