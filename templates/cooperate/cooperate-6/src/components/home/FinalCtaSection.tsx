import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Sparkles, Shield } from 'lucide-react';

interface FinalCtaProps {
  onOpenConsultation: () => void;
}

export default function FinalCtaSection({ onOpenConsultation }: FinalCtaProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0E1412] text-white overflow-hidden">
      {/* Large Dramatic Background Travel Image */}
      <img
        src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1600&auto=format&fit=crop"
        alt="Global international metropolitan skyline at dusk"
        className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-75 scale-105"
      />

      {/* Deep luxury gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A261F] via-[#0A261F]/70 to-[#0A261F]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A261F_90%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#165042] border border-[#C29B38]/40 text-[#DFBA58] text-xs font-semibold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5" />
          The Aurelia Distinction
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium text-white leading-[1.08] tracking-tight max-w-4xl mx-auto">
          Where will business take you next?
        </h2>

        <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed max-w-2xl mx-auto">
          Let’s design a smarter travel program for your organization — combining global scale, intelligent cost discipline, and uncompromising executive care.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-talk-to-expert-btn"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0F382E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#165042] active:scale-95 transition-all shadow-xl border border-[#C29B38]/50 cursor-pointer group"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <Link
            to="/corporate-travel"
            id="final-cta-explore-solutions-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/20 active:scale-95 transition-all border border-white/20"
          >
            <span>Explore Solutions</span>
            <ChevronRight className="w-4 h-4 text-[#DFBA58]" />
          </Link>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-[#8FA29A]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]" />
            <span>Dedicated Enterprise Account Director</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]" />
            <span>Custom Travel Policy Integration in 14 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]" />
            <span>Guaranteed 20–30% Cost Benchmark Savings</span>
          </div>
        </div>
      </div>
    </section>
  );
}
