import React from 'react';
import { ArrowRight, Users, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted, onLearnMore }) => {
  return (
    <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* TWO COLUMN HERO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN: HEADLINE & COPY */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 pr-0 lg:pr-4">
          {/* Eyebrow */}
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#191919]/60 uppercase font-sans">
            Finance Relationship Platform
          </div>

          {/* Editorial Display Serif Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif font-normal text-[#191919] leading-[1.08] tracking-[-0.025em]">
            Stronger<br />
            relationships.<br />
            Better financial<br />
            outcomes.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#191919]/75 font-normal leading-relaxed max-w-lg">
            Connect, engage and grow long-term relationships with individuals and businesses through intelligent financial experiences.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 bg-[#191919] hover:bg-black text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onLearnMore}
              className="text-sm font-medium text-[#191919] hover:text-black underline underline-offset-4 decoration-1 decoration-gray-400 hover:decoration-black transition-colors cursor-pointer py-2"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: ADVISOR IMAGE WITH FLOATING STAT BADGE */}
        <div className="lg:col-span-6 relative mt-4 lg:mt-0">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] shadow-sm bg-[#F5F3EE]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
              alt="Finora Financial Advisor collaborating with client"
              className="w-full h-full object-cover object-top"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Soft inner vignette overlay for photographic depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

            {/* FLOATING CLIENT RELATIONSHIPS CARD */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#191919]">
                  <Users className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#191919]">Client Relationships</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-sm sm:text-base font-bold text-emerald-700 font-sans">+24%</span>
                    <span className="text-[10px] text-emerald-600 font-bold">▲</span>
                  </div>
                  <div className="text-[10px] text-gray-500 font-normal">vs. last quarter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING THREE-FEATURE PILLAR BAR */}
      <div className="mt-12 sm:mt-16 bg-white rounded-2xl border border-gray-200/90 shadow-sm p-5 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-150 gap-6 md:gap-0">
          {/* Item 1 */}
          <div className="flex items-center gap-4 md:px-6 first:pl-0">
            <div className="w-11 h-11 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#191919] shrink-0">
              <Users className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#191919]">Personalized Engagement</div>
              <div className="text-xs text-gray-500 mt-0.5">Right advice, at the right time</div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 md:px-6 pt-5 md:pt-0">
            <div className="w-11 h-11 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#191919] shrink-0">
              <MessageSquare className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#191919]">Conversational Finance</div>
              <div className="text-xs text-gray-500 mt-0.5">AI-powered, human-like interactions</div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 md:px-6 pt-5 md:pt-0">
            <div className="w-11 h-11 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#191919] shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#191919]">Trusted & Secure</div>
              <div className="text-xs text-gray-500 mt-0.5">Bank-grade privacy and compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
