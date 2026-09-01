import React from 'react';
import { CardSwap } from './reactbits/CardSwap';
import { TESTIMONIALS_DATA } from '../data/edupathData';
import { GradientText } from './reactbits/GradientText';
import { MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>ALUMNI OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Trusted By Learners{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Worldwide
            </GradientText>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Read real stories from graduates who leveled up their skills and transformed their careers with Skillora.
          </p>
        </div>

        {/* Card Swap Stack */}
        <CardSwap items={TESTIMONIALS_DATA} />
      </div>
    </section>
  );
};
