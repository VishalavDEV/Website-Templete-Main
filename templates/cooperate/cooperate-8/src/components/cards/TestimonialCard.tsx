import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  theme?: 'light' | 'dark';
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`rounded-md p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300 ${
        isDark
          ? 'bg-slate-900 border-slate-800 text-white shadow-xs'
          : 'bg-white border-slate-200 text-slate-900 shadow-xs hover:border-indigo-500/50'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          {/* Star rating */}
          <div className="flex items-center gap-1 text-indigo-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
            ))}
          </div>

          <span
            className={`text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-sm ${
              isDark
                ? 'bg-slate-800 text-indigo-300 border border-slate-700'
                : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
            }`}
          >
            {testimonial.projectType}
          </span>
        </div>

        <p
          className={`text-sm leading-relaxed italic ${
            isDark ? 'text-slate-200' : 'text-slate-700'
          }`}
        >
          "{testimonial.content}"
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-10 h-10 rounded-full object-cover border border-indigo-500/40 shrink-0"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className={`font-bold text-sm leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {testimonial.author}
            </h4>
            {testimonial.verified && (
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" title="Verified Enterprise Client" />
            )}
          </div>
          <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {testimonial.role}, <span className="font-semibold text-indigo-400">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
