import React, { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Search, Compass, Layers, Cpu, Rocket, RefreshCw } from "lucide-react";
import { processStages } from "../../data/process";
import { SectionHeader } from "../common/SectionHeader";

export const ProcessTimelineSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Search": return <Search className="w-5 h-5" />;
      case "Compass": return <Compass className="w-5 h-5" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      case "Cpu": return <Cpu className="w-5 h-5" />;
      case "Rocket": return <Rocket className="w-5 h-5" />;
      case "RefreshCw": return <RefreshCw className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 md:py-32 border-b border-[#E6E2D8] bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <SectionHeader
            number="07"
            tag="Methodology"
            title="The engineering lifecycle."
            description="A disciplined 6-stage delivery methodology designed for zero-downtime execution and continuous enterprise evolution."
            className="mb-0 sm:mb-0"
          />

          {/* Desktop Scroll Arrow Controls */}
          <div className="hidden lg:flex items-center gap-2 mt-4 sm:mt-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="p-3 rounded-xs border border-[#E6E2D8] bg-white hover:bg-[#FAF8F5] text-[#121316] transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="p-3 rounded-xs border border-[#E6E2D8] bg-white hover:bg-[#FAF8F5] text-[#121316] transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Timeline Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {processStages.map((stage, idx) => (
            <div
              key={stage.number}
              className="w-[300px] sm:w-[360px] shrink-0 snap-start bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs flex flex-col justify-between space-y-6 hover:border-[#0A2E23] transition-colors group"
            >
              {/* Top Row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between font-mono-tech text-xs uppercase text-[#0A2E23] pb-4 border-b border-[#E6E2D8]">
                  <span className="font-bold text-lg">{stage.number}</span>
                  <div className="p-2 rounded-xs bg-[#FAF8F5] group-hover:bg-[#0A2E23] group-hover:text-[#CCF34A] text-[#0A2E23] transition-colors">
                    {getIcon(stage.visualIcon)}
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="font-mono-tech text-[10px] uppercase text-[#7C828D]">
                    {stage.duration}
                  </div>
                  <h3 className="font-serif-editorial text-2xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E636E] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-[#E6E2D8]/60 space-y-2">
                <div className="font-mono-tech text-[10px] uppercase text-[#7C828D]">
                  Core Deliverables:
                </div>
                <ul className="space-y-1.5 font-mono-tech text-xs text-[#121316]">
                  {stage.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#0A2E23] mt-1.5 shrink-0" />
                      <span className="text-[11px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
