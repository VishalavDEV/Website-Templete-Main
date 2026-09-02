import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Activity, ShieldCheck, Heart } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: () => void;
  onExploreCare: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onExploreCare }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-[#FAF8F5]">
      
      {/* Background subtle organic gradient shapes */}
      <div className="absolute top-4 right-10 w-[380px] sm:w-[520px] h-[500px] sm:h-[620px] bg-[#E8B6A5]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F2ECE9] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Headline & Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 lg:space-y-8">
            
            {/* Tag / Category Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2ECE9] border border-[#C97873]/25 text-[#542F3B] text-xs font-bold uppercase tracking-[0.18em] font-sans">
              <ShieldCheck className="w-4 h-4 text-[#C97873]" />
              <span>Specialized Diabetes Hospital & Research Center</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] leading-[1.02] text-[#542F3B] tracking-tight">
              Diabetes care, <br />
              <span className="italic font-normal text-[#C97873]">designed around</span> <br />
              your life.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#70696C] max-w-2xl leading-relaxed font-sans font-normal">
              From your first screening to long-term management, our specialists combine medical expertise, modern sensor technology, and everyday dietary support to help you live confidently with diabetes.
            </p>

            {/* Hero Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenAppointment}
                className="btn-primary min-h-[48px] px-7 text-sm font-semibold flex items-center justify-center gap-2.5 group"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCare}
                className="btn-secondary min-h-[48px] px-7 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>Explore Care Protocol</span>
              </button>
            </div>

            {/* Quick Feature Bullet Points */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#E5DDD8] w-full max-w-xl text-xs sm:text-sm text-[#252326]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#C97873] shrink-0" />
                <span className="font-semibold text-[#542F3B]">Continuous CGM Care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#C97873] shrink-0" />
                <span className="font-semibold text-[#542F3B]">On-site Retinal Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#C97873] shrink-0" />
                <span className="font-semibold text-[#542F3B]">Customized Nutrition</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Medical Visual Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end pt-6 lg:pt-0">
            
            {/* Background shape */}
            <div className="absolute -top-4 -right-4 w-[320px] sm:w-[400px] h-[420px] sm:h-[500px] bg-[#E8B6A5]/30 rounded-3xl -rotate-3 pointer-events-none" />

            {/* Main Visual Composition Container */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              
              {/* Main Warm Doctor Consultation Image Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-8 border-white bg-[#F2ECE9]">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                  alt="Doctor discussing continuous glucose monitoring report with patient at Gluvia Institute"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#542F3B]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Metric 1: Glucose Stability (Top Left) */}
              <div className="absolute -top-3 -left-3 sm:-left-6 bg-white p-4 rounded-2xl shadow-md border border-[#E5DDD8] w-48">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#C97873] font-bold">Glucose Stability</span>
                  <div className="w-2 h-2 rounded-full bg-[#C97873]" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#542F3B] my-0.5">92%</div>
                <div className="flex gap-1 h-1.5 w-full bg-[#F2ECE9] rounded-full overflow-hidden mt-2">
                  <div className="bg-[#C97873] w-[92%] h-full rounded-full" />
                </div>
              </div>

              {/* Floating Metric 2: Today's Reading (Right Side) */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 bg-[#542F3B] text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-white/10 w-52 sm:w-60">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#E8B6A5] font-bold">Today's Sensor</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#FAF8F5] my-1">
                  108 <span className="text-xs font-sans font-normal text-[#E8B6A5]">mg/dL</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#FAF8F5]/80 pt-2 border-t border-white/10 mt-2">
                  <span>Target: 70–140</span>
                  <span className="text-emerald-300 font-semibold">Optimal</span>
                </div>
              </div>

              {/* Floating Metric 3: Care Plan Status (Bottom Left) */}
              <div className="absolute -bottom-4 left-4 sm:left-6 bg-white p-4 rounded-2xl shadow-md border border-[#E5DDD8] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#542F3B] flex items-center justify-center text-white shrink-0">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#C97873] tracking-wider">Holistic Care Protocol</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#542F3B]">Physician + Nutritionist Active</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
