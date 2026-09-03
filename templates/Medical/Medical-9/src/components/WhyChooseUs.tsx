import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenAppointment: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenAppointment }) => {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#252326] relative overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8B6A5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans block mb-3">
            The Gluvia Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-[#542F3B]">
            Medicine is only part of <br />
            <span className="italic font-normal text-[#C97873]">diabetes care.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#70696C] font-sans font-normal mt-4 leading-relaxed max-w-2xl">
            True metabolic health requires a synchronized circle of care—combining endocrinology science, behavioral empathy, sensor analytics, and nutrition tailored to your daily routine.
          </p>
        </div>

        {/* 6 Editorial Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {WHY_CHOOSE_US_POINTS.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-2xl bg-white border border-[#E5DDD8] hover:border-[#C97873] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Large Editorial Number */}
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#C97873] block mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.num}
                </span>

                <h3 className="font-serif text-xl font-bold text-[#542F3B] mb-3 group-hover:text-[#C97873] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#70696C] font-sans font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2ECE9] flex items-center justify-between text-xs text-[#C97873] font-bold">
                <span className="font-sans">Clinical Standard</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[#542F3B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-white/10">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">Experience the Gluvia Care Standard</h3>
            <p className="text-xs sm:text-sm text-[#E8B6A5] font-sans mt-1">
              Schedule your baseline consultation with our specialist endocrinologists today.
            </p>
          </div>

          <button
            onClick={onOpenAppointment}
            className="btn-primary shrink-0 min-h-[44px] px-6 text-sm font-semibold"
          >
            Book a Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
