import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 sm:py-36 bg-[#090909] text-[#f8f7f4] relative overflow-hidden text-center border-t border-b border-white/10 select-none">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none z-0">
        <span className="text-[200px] sm:text-[340px] font-black leading-none text-white tracking-tighter uppercase">
          INITIATE
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <ScrollReveal animation="fade-up">
          <span className="font-mono text-xs uppercase tracking-[0.4em] font-black text-[#D1FF00] block mb-4">
            INITIATE CONTACT // PROJECT DISCOVERY
          </span>

          <h2 className="text-4xl sm:text-7xl lg:text-[5.5rem] font-serif font-black uppercase text-white tracking-tighter leading-[0.85]">
            LET'S ARCHITECT YOUR <br />
            <span className="text-[#090909] bg-[#D1FF00] px-4 py-0.5 rounded-none inline-block border-2 border-[#090909]">
              DIGITAL DOMINANCE
            </span>.
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg font-mono text-gray-300 leading-relaxed pt-6">
            Schedule an executive discovery session with our founding team. We will review your technical stack, strategic goals, and timeline within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-10">
            <button
              onClick={() => navigate('/contact')}
              className="flex items-center gap-3 px-9 py-4 bg-[#D1FF00] text-[#090909] font-mono text-xs uppercase tracking-widest font-black rounded-none border-2 border-[#090909] hover:bg-white transition-all duration-300 shadow-2xl transform hover:-translate-y-1 cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="flex items-center gap-3 px-9 py-4 bg-[#141414] hover:bg-[#D1FF00] hover:text-[#090909] border-2 border-white/20 hover:border-[#D1FF00] text-white font-mono text-xs uppercase tracking-widest font-black rounded-none transition-all duration-300 cursor-pointer"
            >
              <span>CONTACT EXECUTIVE BOARD</span>
              <Sparkles className="w-4 h-4 text-[#D1FF00]" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
