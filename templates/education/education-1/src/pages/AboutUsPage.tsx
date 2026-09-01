import React from 'react';
import { PageId } from '../types';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';
import { GradientText } from '../components/reactbits/GradientText';
import {
  Users,
  Target,
  Globe,
  Sparkles,
} from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate, onOpenAuth }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider border border-indigo-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR MISSION & ACADEMIC VALUES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
            Redefining Modern Higher{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Learning
            </GradientText>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Skillora was founded on a singular conviction: education should awaken conceptual curiosity and adapt to modern technological realities. We empower ambitious learners with individual curriculums, hands-on production code, and direct faculty mentorship.
          </p>
        </div>
      </section>

      {/* Global Impact Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 text-center space-y-1 shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono font-display">500k+</span>
            <p className="text-xs text-slate-500 font-mono font-bold uppercase tracking-wider">Active Students</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-200 text-center space-y-1 shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-indigo-600 font-mono font-display">1,200+</span>
            <p className="text-xs text-slate-500 font-mono font-bold uppercase tracking-wider">Masterclasses</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-200 text-center space-y-1 shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan-600 font-mono font-display">95%</span>
            <p className="text-xs text-slate-500 font-mono font-bold uppercase tracking-wider">Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-200 text-center space-y-1 shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-purple-600 font-mono font-display">140+</span>
            <p className="text-xs text-slate-500 font-mono font-bold uppercase tracking-wider">Countries</p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            The Skillora Learning Philosophy
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            How we ensure every hour you dedicate translates into real-world capability and career impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.08)"
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Outcome-Obsessed
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We replace passive lecturing with hands-on projects, interactive cloud sandboxes, verified code repositories, and actionable case studies.
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(192, 132, 252, 0.08)"
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              High-Touch Mentorship
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never get stuck on theoretical roadblocks or technical hurdles. Connect 1:1 with verified staff engineers, design leads, and academic advisors.
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(56, 189, 248, 0.08)"
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center font-bold">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Accessible to All
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Providing foundation tracks, global community scholarships, and flexible learning schedules for students and working professionals worldwide.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display relative z-10 text-white">
            Ready to Accelerate Your Future?
          </h2>
          <p className="text-xs sm:text-sm text-indigo-200 max-w-xl mx-auto relative z-10">
            Join a global community of ambitious learners, faculty mentors, and industry pioneers at Skillora.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onOpenAuth('register')}
              className="px-8 py-3.5 bg-white text-indigo-900 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              Get Started Free
            </button>
            <button
              onClick={() => onNavigate('courses')}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer border border-white/20"
            >
              Browse Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
