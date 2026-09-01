import React from 'react';
import { PageId } from '../types';
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Users,
  Award,
  Star,
  CheckCircle2,
  TrendingUp,
  GraduationCap,
} from 'lucide-react';
import { BeamsBackground } from './reactbits/BeamsBackground';
import { GradientText } from './reactbits/GradientText';
import { TiltedCard } from './reactbits/TiltedCard';
import { SpotlightCard } from './reactbits/SpotlightCard';

interface EduHeroProps {
  onNavigate: (page: PageId) => void;
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const EduHero: React.FC<EduHeroProps> = ({
  onNavigate,
  onOpenAuth,
}) => {
  return (
    <BeamsBackground className="pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Gradient, Description, Action Buttons */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left z-10">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping" />
              <span className="text-indigo-600 font-mono uppercase tracking-wider text-[11px] font-bold">
                NEXT-GEN EDUCATION
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">University accredited</span>
            </div>

            {/* Main Headline with Gradient Text */}
            <div className="space-y-2">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[64px] font-extrabold text-slate-900 tracking-tight leading-[1.12] sm:leading-[1.08] font-display">
                Shape Your Future{' '}
                <br className="hidden sm:inline" />
                Through{' '}
                <GradientText
                  colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}
                  animationSpeed={6}
                >
                  Learning
                </GradientText>
              </h1>
            </div>

            {/* Exact Required Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
              Discover practical courses, expert instructors, and career-focused
              learning designed to help you build the future you want.
            </p>

            {/* CTAs matching spec: Explore Courses and Explore Programs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('courses')}
                className="px-8 py-4 min-h-[48px] bg-gradient-to-r from-indigo-600 via-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] text-white font-bold text-base rounded-2xl shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('paths')}
                className="px-7 py-4 min-h-[48px] bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 hover:text-slate-950 font-bold text-base rounded-2xl border border-slate-200 shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Explore Programs</span>
              </button>
            </div>

            {/* Quick Proof Pills + Sample Student ID shortcut */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-slate-600 font-medium">
              <button
                onClick={() => onOpenAuth('login')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200 text-indigo-700 font-bold rounded-xl transition-colors cursor-pointer text-xs"
              >
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>Sample Student ID: <span className="font-mono">SKL-2026-8891</span></span>
              </button>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero fluff, real code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified certification</span>
              </div>
            </div>
          </div>

          {/* Right Column: Female Student Hero Visual with Tilted Card & Floating Live Stat Badges */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <TiltedCard maxTilt={8} scale={1.02} className="max-w-md w-full">
              <SpotlightCard
                spotlightColor="rgba(79, 70, 229, 0.12)"
                borderColor="rgba(79, 70, 229, 0.35)"
                className="p-3 sm:p-4 rounded-[32px] bg-white border border-slate-200/90 shadow-2xl relative"
              >
                {/* Main Hero Photo: High quality, realistic confident female student studying in modern environment */}
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-100 border border-slate-200/60">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                    alt="Confident female student learner with laptop in university space"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Bottom Tag inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-between shadow-lg">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Sarah Lin • AI Scholar
                      </h4>
                      <p className="text-[10px] text-indigo-600 font-mono font-bold">
                        Stanford Research Fellow
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-[11px] font-bold text-amber-700">4.99</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: 10K+ Students (Top Left) */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-3 shadow-xl animate-float">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 font-mono">
                        10,000+
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        Active Students
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2: 500+ Courses (Bottom Right) */}
                <div className="absolute -bottom-4 -right-3 sm:-right-6 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-3 shadow-xl animate-float [animation-delay:2s]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 font-mono">
                        500+ Courses
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        Verified Curricula
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 3: 95% Satisfaction (Center Right) */}
                <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl px-3.5 py-2.5 shadow-xl hidden sm:flex items-center gap-2 animate-float [animation-delay:4s]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-emerald-700 font-mono">
                      95% Success
                    </span>
                    <p className="text-[9px] text-slate-500">Career Placement</p>
                  </div>
                </div>
              </SpotlightCard>
            </TiltedCard>
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
};
