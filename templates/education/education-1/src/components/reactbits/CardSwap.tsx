import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  courseCompleted: string;
}

interface CardSwapProps {
  items: TestimonialItem[];
  className?: string;
}

export const CardSwap: React.FC<CardSwapProps> = ({
  items,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`relative max-w-3xl mx-auto ${className}`}>
      {/* Visual stacked layers behind current card */}
      <div className="relative min-h-[360px] sm:min-h-[320px] flex items-center justify-center">
        {/* Layer 2 (Backmost) */}
        <div className="absolute inset-x-8 top-8 bottom-0 bg-slate-100/70 rounded-3xl border border-slate-200/60 transform scale-90 translate-y-4 blur-[1px] pointer-events-none" />

        {/* Layer 1 (Middle) */}
        <div className="absolute inset-x-4 top-4 bottom-0 bg-slate-50 rounded-3xl border border-slate-200/80 transform scale-95 translate-y-2 pointer-events-none" />

        {/* Active Top Card */}
        <div className="relative w-full rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl space-y-6 transition-all duration-300 z-10 text-left">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <img
                src={items[activeIndex].avatar}
                alt={items[activeIndex].name}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-indigo-100 shadow-sm"
              />
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  {items[activeIndex].name}
                </h4>
                <p className="text-xs text-indigo-600 font-semibold">
                  {items[activeIndex].role} • {items[activeIndex].company}
                </p>
                <span className="text-[11px] text-slate-500 font-mono">
                  Alum: {items[activeIndex].courseCompleted}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200/60">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-amber-600">
                {items[activeIndex].rating.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-indigo-500/10 pointer-events-none" />
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic pl-3 border-l-2 border-indigo-500">
              "{items[activeIndex].content}"
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex gap-1.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === i ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-200'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer border border-slate-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer shadow-md shadow-indigo-600/20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
