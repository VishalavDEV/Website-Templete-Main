import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Cpu, Sparkles, Server } from "lucide-react";
import { Button } from "../common/Button";
import heroImgSrc from "../../assets/images/hero_enterprise_ai_1787681694058.jpg";

export interface HeroSectionProps {
  onOpenScoping: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenScoping }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#E6E2D8] bg-[#FAF8F5] overflow-hidden">
      {/* Background Architectural Watermark Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Protocol Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-mono-tech text-[11px] uppercase tracking-widest text-[#0A2E23] mb-8"
        >
          <span className="w-2 h-2 rounded-xs bg-[#0A2E23]" />
          <span>Intelligent Enterprise Infrastructure</span>
          <span className="text-[#C4BFB2]">/</span>
          <span className="text-[#5E636E]">Global Systems Architecture</span>
        </motion.div>

        {/* Split Screen Grid: Left 55%, Right 45% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column 55% (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Huge Editorial Headline */}
            <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-light text-[#121316] tracking-tight leading-[1.04]">
              Technology <br />
              <span className="italic font-normal">that moves</span> <br />
              business forward.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#5E636E] font-normal leading-relaxed max-w-xl">
              Vertexa designs and engineers intelligent digital systems for organizations operating at scale.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenScoping}
                withDiagonalArrow
              >
                Start a Project
              </Button>

              <Button
                variant="secondary"
                size="lg"
                to="/work"
                withArrow
              >
                Explore Our Work
              </Button>
            </div>

            {/* Mini Trust Markers */}
            <div className="pt-6 sm:pt-8 border-t border-[#E6E2D8]/80 flex flex-wrap items-center gap-6 text-xs font-mono-tech text-[#5E636E]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0A2E23]" />
                <span>Zero-Downtime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#0A2E23]" />
                <span>Sovereign VPC Deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E23]" />
                <span>Follow-The-Sun SRE</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column 45% (lg:col-span-5) - High Quality Editorial Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-xs border border-[#E6E2D8] bg-white p-2.5 sm:p-3 shadow-sm group overflow-hidden">
              {/* Image Frame Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-[#121316]">
                <img
                  src={heroImgSrc}
                  alt="Vertexa intelligent cloud infrastructure and enterprise AI hardware node architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E23]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Top Status Overlays */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/15 rounded-xs font-mono-tech text-[10px] text-white">
                    <span className="w-2 h-2 rounded-full bg-[#CCF34A] animate-pulse" />
                    <span className="font-semibold tracking-wider">LIVE INFRASTRUCTURE</span>
                  </div>
                  <div className="px-2 py-0.5 bg-[#0A2E23]/80 backdrop-blur-md border border-[#CCF34A]/30 rounded-xs font-mono-tech text-[9px] text-[#CCF34A] font-bold">
                    99.999% SLA
                  </div>
                </div>

                {/* Bottom Context Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/70 backdrop-blur-md border border-white/10 rounded-xs text-white">
                  <div className="flex items-center justify-between font-mono-tech text-[10px] text-[#E6E2D8] mb-1">
                    <span className="flex items-center gap-1.5 text-[#CCF34A] font-bold uppercase tracking-wider">
                      <Server className="w-3 h-3" />
                      SYSTEMS ARCHITECTURE // 01
                    </span>
                    <span className="text-[#C4BFB2]">NVIDIA H100 FABRIC</span>
                  </div>
                  <p className="text-xs text-[#FAF8F5]/90 font-light line-clamp-1">
                    Autonomous cognitive pipelines &amp; low-latency edge acceleration.
                  </p>
                </div>
              </div>

              {/* Precise Architectural Caption Bar */}
              <div className="mt-2.5 pt-2 border-t border-[#E6E2D8]/80 flex items-center justify-between font-mono-tech text-[10px] text-[#5E636E]">
                <div className="flex items-center gap-2">
                  <span className="text-[#0A2E23] font-bold">FIG. 01</span>
                  <span>/</span>
                  <span className="truncate">Sovereign Cluster Node #08</span>
                </div>
                <div className="text-[#0A2E23] font-semibold text-[9px] uppercase tracking-wider">
                  Verified In Production
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
