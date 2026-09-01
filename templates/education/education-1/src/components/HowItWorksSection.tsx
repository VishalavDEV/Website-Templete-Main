import React from 'react';
import { Stepper, StepItem } from './reactbits/Stepper';
import { GradientText } from './reactbits/GradientText';
import { Milestone } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps: StepItem[] = [
    {
      number: '01',
      title: 'Discover Your Path',
      tagline: 'Personalized Exploration',
      description: 'Explore courses, custom learning paths, or consult our curriculum advisor to select the exact roadmap suited to your current experience and career ambitions.',
      details: [
        'Explore 500+ verified courses and paths',
        'Filter by duration, discipline, and skill level',
        'Take prerequisite quizzes to gauge baseline knowledge',
        'Generate a tailored 8-to-16 week study plan',
      ],
    },
    {
      number: '02',
      title: 'Structured Learning',
      tagline: 'World-Class Instruction',
      description: 'Follow organized video lessons, downloadable slide decks, architectural diagrams, and interactive transcripts crafted by world-class professors.',
      details: [
        'High-definition crystal-clear video modules',
        'Interactive chapter navigation & speed controls',
        'Accompanying reading materials & code cheatsheets',
        'Discussion forums with professors and peers',
      ],
    },
    {
      number: '03',
      title: 'Practical Project Execution',
      tagline: 'Hands-on Building',
      description: 'Apply newly gained knowledge by solving hands-on challenges, contributing to open-source style repositories, and building production-grade capstone applications.',
      details: [
        'Browser-based coding & sandbox playgrounds',
        'Rigorous automated test suites & linters',
        '1:1 Code reviews from senior instructors',
        'Real-world datasets and production APIs',
      ],
    },
    {
      number: '04',
      title: 'Achieve & Accelerate',
      tagline: 'Certification & Career',
      description: 'Pass the capstone review to earn an accredited verifiable certificate, add real projects to your public portfolio, and tap into our alumni hiring network.',
      details: [
        'Cryptographically verifiable digital credential',
        'Direct LinkedIn & resume credential exports',
        'Portfolio-ready GitHub repository artifacts',
        'Access to exclusive industry hiring pipelines',
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold">
            <Milestone className="w-3.5 h-3.5" />
            <span>THE LEARNING LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            How Skillora{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Works
            </GradientText>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A frictionless, scientifically validated 4-step framework designed to take you from fundamentals to industry mastery.
          </p>
        </div>

        {/* Stepper Component */}
        <Stepper steps={steps} />
      </div>
    </section>
  );
};
