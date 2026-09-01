import React from 'react';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { GradientText } from './reactbits/GradientText';
import {
  GraduationCap,
  Code2,
  Clock,
  Award,
  Briefcase,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const WhyEduvoraSection: React.FC = () => {
  const pillars = [
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      title: 'Expert Instructors',
      description: 'Learn directly from principal engineers, tech leaders, and tenured university professors with decades of collective industry mastery.',
      tag: 'Faculty',
    },
    {
      icon: <Code2 className="w-6 h-6 text-purple-600" />,
      title: 'Practical Projects',
      description: 'Build production-ready codebases, train live neural models, and design real-world Figma systems that impress hiring managers.',
      tag: 'Hands-On',
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-600" />,
      title: 'Flexible Learning',
      description: 'Progress at your own natural rhythm with 24/7 on-demand lectures, downloadable cheat sheets, and lifetime access to curriculum updates.',
      tag: 'Self-Paced',
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      title: 'Verifiable Certifications',
      description: 'Earn cryptographic digital certificates verified by Skillora Academic Guild, ready to share on LinkedIn, GitHub, and resumes.',
      tag: 'Accredited',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-amber-600" />,
      title: 'Career & Mentorship Support',
      description: 'Receive 1:1 portfolio feedback, technical mock interview coaching, and personalized career roadmaps tailored to your targets.',
      tag: 'Placement',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-pink-600" />,
      title: 'Modern Curriculum',
      description: 'Constantly refreshed syllabi incorporating contemporary AI agents, modern TypeScript, distributed cloud patterns, and UX systems.',
      tag: 'Up-to-Date',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE SKILLORA ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Why Choose{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Skillora
            </GradientText>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Engineered for high-performing learners who demand real-world capability over passive lectures.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(79, 70, 229, 0.08)"
              className="p-8 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-indigo-300 hover:bg-white transition-all flex flex-col justify-between group shadow-xs hover:shadow-lg text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-all shadow-xs">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-indigo-700">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-indigo-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Standard across all courses</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
