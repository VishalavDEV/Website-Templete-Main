import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const TrustStatementSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 border-b border-[#E6E2D8] bg-[#F5F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Monospace section marker */}
        <div className="flex items-center gap-3 font-mono-tech text-[11px] uppercase tracking-widest text-[#0A2E23] mb-8">
          <span className="font-bold border border-[#0A2E23] px-1.5 py-0.5 rounded-xs">02</span>
          <span>Core Philosophy & Thesis</span>
        </div>

        {/* Oversized Typographic Statement */}
        <div className="space-y-8">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#121316] leading-[1.08] tracking-tight">
            We don't just build software. <br />
            <span className="italic font-normal text-[#0A2E23]">
              We build systems that make organizations better.
            </span>
          </h2>

          {/* Asymmetric layout with supporting paragraph and principles */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#E6E2D8]">
            <div className="lg:col-span-6">
              <p className="text-base sm:text-lg text-[#5E636E] leading-relaxed font-normal">
                Enterprise technology shouldn't merely digitize existing bureaucracy—it should fundamentally elevate institutional velocity, eliminate manual entropy, and unlock compounding operational leverage.
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1 font-mono-tech text-xs text-[#5E636E]">
                <div className="text-[#121316] font-bold uppercase">Mathematical Guarantees</div>
                <div>Sub-second response budgets across every touchpoint.</div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 font-mono-tech text-xs uppercase tracking-wider font-semibold text-[#0A2E23] group pb-0.5 border-b border-[#0A2E23]/30 hover:border-[#0A2E23]"
              >
                <span>Read Our Institutional Manifesto</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
