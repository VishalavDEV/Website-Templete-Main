import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { industriesData } from "../../data/industries";
import { SectionHeader } from "../common/SectionHeader";
import { Button } from "../common/Button";

export const IndustrySelectorSection: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string>("financial-services");

  const currentIndustry = industriesData.find((i) => i.slug === selectedSlug) || industriesData[0];

  return (
    <section className="py-20 md:py-32 border-b border-[#E6E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          tag="Vertical Expertise"
          title="Engineered for high-consequence industries."
          description="Tailored digital architectures addressing specific regulatory mandates, latency constraints, and operational complexities."
          actionText="All Industry Solutions"
          actionTo="/industries"
        />

        {/* Industry Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Industry Tab Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-1.5 border border-[#E6E2D8] p-2 bg-[#F5F2EB] rounded-xs">
            {industriesData.map((ind, idx) => {
              const isSelected = ind.slug === selectedSlug;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedSlug(ind.slug)}
                  className={`w-full text-left px-4 py-3 rounded-xs font-mono-tech text-xs uppercase tracking-wider flex items-center justify-between transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#0A2E23] text-[#CCF34A] font-bold shadow-xs"
                      : "bg-transparent text-[#5E636E] hover:text-[#121316] hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] opacity-70">0{idx + 1}</span>
                    <span>{ind.name}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-[#CCF34A] translate-x-1" : "text-transparent"}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Animated Content Container (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndustry.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-[#E6E2D8] rounded-xs overflow-hidden"
              >
                {/* Hero visual banner with stats */}
                <div className="relative h-64 sm:h-72 bg-[#121316] overflow-hidden">
                  <img
                    src={currentIndustry.heroImage}
                    alt={currentIndustry.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Top Industry Label */}
                  <div className="absolute top-4 left-4 font-mono-tech text-xs text-[#CCF34A] bg-[#0A2E23] px-2.5 py-1 rounded-xs">
                    INDUSTRY DOMAIN // {currentIndustry.name.toUpperCase()}
                  </div>

                  {/* Overlay Market Stats */}
                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 sm:gap-4">
                    {currentIndustry.marketStats.map((st) => (
                      <div key={st.label} className="p-2.5 bg-[#121316]/80 backdrop-blur-xs border border-white/10 rounded-xs">
                        <div className="font-serif-editorial text-xl sm:text-2xl text-[#CCF34A]">
                          {st.stat}
                        </div>
                        <div className="font-mono-tech text-[10px] uppercase text-[#A1A7B4] truncate">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316]">
                      {currentIndustry.tagline}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#5E636E] leading-relaxed">
                      {currentIndustry.shortDescription}
                    </p>
                  </div>

                  {/* Engineered Solutions Breakdown */}
                  <div className="space-y-3 pt-2">
                    <div className="font-mono-tech text-xs uppercase tracking-wider text-[#0A2E23] font-bold">
                      Engineered Capabilities for {currentIndustry.name}:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentIndustry.engineeredSolutions.map((sol) => (
                        <div key={sol.title} className="p-3.5 bg-[#FAF8F5] border border-[#E6E2D8] rounded-xs space-y-1">
                          <div className="font-mono-tech text-xs font-bold text-[#121316]">
                            {sol.title}
                          </div>
                          <div className="text-xs text-[#7C828D] line-clamp-2">
                            {sol.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-[#E6E2D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-xs text-[#5E636E] italic">
                      "{currentIndustry.clientQuote.quote.slice(0, 110)}..."
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      to={`/industries/${currentIndustry.slug}`}
                      withDiagonalArrow
                      className="shrink-0"
                    >
                      Explore {currentIndustry.name}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
