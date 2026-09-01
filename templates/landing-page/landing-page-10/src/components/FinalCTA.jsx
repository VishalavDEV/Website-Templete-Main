import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

export default function FinalCTA({ onOpenPathModal }) {
  return (
    <section className="py-28 md:py-40 bg-[#171816] text-[#F3F0E8] relative overflow-hidden text-center flex items-center justify-center">
      {/* Slow-moving abstract breathing shapes inspired by calm recovery */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#3E5142]/20 blur-3xl animate-breathing pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[#B56F4D]/15 blur-2xl animate-breathing pointer-events-none" style={{ animationDelay: '-3s' }} />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold uppercase tracking-widest text-[#B56F4D]">
          <Sparkles className="w-3.5 h-3.5" />
          TAKE THE FIRST STEP
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-[#F3F0E8] leading-tight">
          Start where <span className="editorial-italic font-normal text-[#D8D4C8]">you are.</span>
        </h2>

        <p className="text-lg sm:text-xl text-[#D8D4C8]/80 max-w-xl mx-auto font-light leading-relaxed">
          You do not need a perfect plan. You need a better place to begin.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenPathModal}
            className="w-full sm:w-auto px-10 py-5 bg-[#B56F4D] text-[#F3F0E8] rounded-full font-medium tracking-wide uppercase text-xs hover:bg-[#3E5142] transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group"
          >
            <span>Find your path</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
