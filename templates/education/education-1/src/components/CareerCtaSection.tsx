import React from 'react';
import { PageId } from '../types';
import { GradientText } from './reactbits/GradientText';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CareerCtaSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const CareerCtaSection: React.FC<CareerCtaSectionProps> = ({
  onNavigate,
  onOpenAuth,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] relative border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 border border-indigo-500/30 p-8 sm:p-14 lg:p-20 text-center overflow-hidden shadow-2xl">
          {/* Luminous Glow Beams */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-mono font-bold">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>COMMENCE YOUR JOURNEY TODAY</span>
            </div>

            {/* Exact Required Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
              Turn Learning Into{' '}
              <GradientText colors={['#A5B4FC', '#E9D5FF', '#67E8F9', '#A5B4FC']}>
                Opportunity
              </GradientText>
            </h2>

            {/* Exact Required Description */}
            <p className="text-base sm:text-lg md:text-xl text-indigo-100/90 font-normal leading-relaxed max-w-2xl mx-auto">
              Build practical skills, complete meaningful projects, earn certificates, and prepare for your next opportunity.
            </p>

            {/* CTA Button: Start Learning */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => (onOpenAuth ? onOpenAuth('register') : onNavigate('courses'))}
                className="w-full sm:w-auto px-10 py-4 min-h-[50px] bg-white hover:bg-slate-50 active:scale-[0.98] text-indigo-900 font-bold text-base rounded-2xl shadow-xl shadow-black/20 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 text-indigo-700" />
              </button>

              <button
                onClick={() => onNavigate('courses')}
                className="w-full sm:w-auto px-8 py-4 min-h-[50px] bg-white/10 hover:bg-white/15 text-white font-bold text-base rounded-2xl border border-white/20 transition-all cursor-pointer flex items-center justify-center backdrop-blur-md"
              >
                Browse Catalog
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-indigo-200 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No credit card required for free tracks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
