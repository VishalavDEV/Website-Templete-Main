import React from 'react';
import { Accordion } from './reactbits/Accordion';
import { FAQ_DATA } from '../data/edupathData';
import { GradientText } from './reactbits/GradientText';
import { HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Frequently Asked{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Questions
            </GradientText>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about enrollment, certificates, learning formats, and faculty mentorship.
          </p>
        </div>

        {/* Accordion List */}
        <Accordion items={FAQ_DATA} />
      </div>
    </section>
  );
};
