import React from "react";
import { companyMetrics } from "../../data/companyInfo";
import { AnimatedCounter } from "../common/AnimatedCounter";

export const MetricsStripSection: React.FC = () => {
  return (
    <section className="border-b border-[#E6E2D8] bg-[#FAF8F5] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Data Strip Container */}
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#E6E2D8] border-y border-[#E6E2D8]">
          {companyMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`py-8 md:py-10 px-4 sm:px-6 flex flex-col justify-between group hover:bg-[#F4F1EA] transition-colors ${
                index === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              {/* Top Monospace Label */}
              <div className="font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-3 flex items-center justify-between">
                <span>{metric.label}</span>
                <span className="text-[#C4BFB2] text-[9px]">0{index + 1}</span>
              </div>

              {/* Animated Counter Display */}
              <div className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#121316] tracking-tight group-hover:text-[#0A2E23] transition-colors">
                <AnimatedCounter
                  value={metric.number}
                  suffix={metric.suffix}
                  duration={1800}
                />
              </div>

              {/* Small Context Description */}
              <p className="mt-3 text-xs text-[#7C828D] leading-normal font-mono-tech">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
