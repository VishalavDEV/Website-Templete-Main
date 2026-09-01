import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Database, Cloud, Terminal, RefreshCw } from "lucide-react";
import { capabilitiesData } from "../data/capabilities";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button } from "../components/common/Button";

export interface CapabilitiesPageProps {
  onOpenScoping: () => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onOpenScoping }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Capabilities" }]} />

        {/* Hero Header */}
        <div className="mb-16 md:mb-20 max-w-4xl space-y-6">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0A2E23] flex items-center gap-2">
            <span className="w-2 h-2 rounded-xs bg-[#0A2E23]" />
            <span>ENGINEERING PRACTICES & DISCIPLINES</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#121316] tracking-tight leading-[1.05]">
            Engineering practices designed for extreme scale.
          </h1>

          <p className="text-base sm:text-xl text-[#5E636E] font-normal leading-relaxed max-w-2xl">
            We operate across six specialized disciplines, pairing deep algorithmic and mathematical foundations with resilient enterprise systems engineering.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" onClick={onOpenScoping} withDiagonalArrow>
              Initiate Practice Scoping
            </Button>
          </div>
        </div>

        {/* 6 Practices Deep Directory */}
        <div className="space-y-16">
          {capabilitiesData.map((cap, idx) => (
            <div
              key={cap.id}
              className="bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group shadow-2xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Visual & Tag (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] bg-[#121316] overflow-hidden">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125 opacity-85 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0A2E23]/25" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A2E23] text-[#CCF34A] font-mono-tech text-xs uppercase font-bold rounded-xs">
                    PRACTICE {cap.number}
                  </div>
                </div>

                {/* Right Details (7 cols) */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                      <Link to={`/capabilities/${cap.slug}`}>
                        {cap.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-[#5E636E] leading-relaxed">
                      {cap.shortDescription || cap.fullOverview}
                    </p>

                    {/* Offerings Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                      {cap.offerings.map((offering) => (
                        <div key={offering.title} className="p-3 bg-[#FAF8F5] border border-[#E6E2D8] rounded-xs space-y-1">
                          <div className="font-mono-tech text-xs font-bold text-[#121316]">
                            {offering.title}
                          </div>
                          <div className="text-[11px] text-[#7C828D]">
                            {offering.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack & Action Link */}
                  <div className="pt-6 border-t border-[#E6E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cap.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="font-mono-tech text-[10px] uppercase px-2 py-0.5 bg-[#FAF8F5] border border-[#E6E2D8] text-[#5E636E] rounded-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/capabilities/${cap.slug}`}
                      className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase font-bold text-[#0A2E23] group-hover:translate-x-1 transition-transform self-start sm:self-center shrink-0 pb-1 border-b border-[#0A2E23]/30 hover:border-[#0A2E23]"
                    >
                      <span>Explore Full Practice</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
