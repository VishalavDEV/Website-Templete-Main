import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { industriesData } from "../data/industries";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button } from "../components/common/Button";

export interface IndustriesPageProps {
  onOpenScoping: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenScoping }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Industries" }]} />

        {/* Hero Header */}
        <div className="mb-16 md:mb-20 max-w-4xl space-y-6">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0A2E23] flex items-center gap-2">
            <span className="w-2 h-2 rounded-xs bg-[#0A2E23]" />
            <span>VERTICAL SECTORS & REGULATORY SPECIALIZATION</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#121316] tracking-tight leading-[1.05]">
            Engineered for high-consequence industries.
          </h1>

          <p className="text-base sm:text-xl text-[#5E636E] font-normal leading-relaxed max-w-2xl">
            From sub-millisecond trading systems to HIPAA-compliant clinical data lakehouses, our solutions respect the exacting regulatory and throughput realities of mission-critical sectors.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" onClick={onOpenScoping} withDiagonalArrow>
              Discuss Sector Requirements
            </Button>
          </div>
        </div>

        {/* 8 Industries Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesData.map((ind, idx) => (
            <div
              key={ind.id}
              className="bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group flex flex-col justify-between hover:border-[#0A2E23] transition-colors"
            >
              {/* Image & Stats Bar */}
              <div className="relative h-60 sm:h-64 bg-[#121316] overflow-hidden">
                <img
                  src={ind.heroImage}
                  alt={ind.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#0A2E23] text-[#CCF34A] font-mono-tech text-xs uppercase font-bold rounded-xs">
                  SECTOR 0{idx + 1} // {ind.name}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono-tech text-xs text-white">
                  <span className="text-[#CCF34A] font-bold">{ind.marketStats[0].stat} {ind.marketStats[0].label}</span>
                  <span className="text-[10px] text-[#A1A7B4]">VERIFIED</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                    <Link to={`/industries/${ind.slug}`}>
                      {ind.name}
                    </Link>
                  </h2>
                  <p className="font-mono-tech text-xs text-[#0A2E23] font-semibold">
                    {ind.tagline}
                  </p>
                  <p className="text-sm text-[#5E636E] leading-relaxed">
                    {ind.shortDescription}
                  </p>
                </div>

                {/* Solutions Summary */}
                <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between">
                  <span className="font-mono-tech text-xs text-[#7C828D]">
                    {ind.engineeredSolutions.length} Specialized Architectures
                  </span>

                  <Link
                    to={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1 font-mono-tech text-xs uppercase font-bold text-[#0A2E23] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Solutions</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
