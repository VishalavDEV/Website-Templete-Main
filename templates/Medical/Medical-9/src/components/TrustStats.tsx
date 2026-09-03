import React from 'react';
import { TRUST_STATS } from '../data/mockData';

export const TrustStats: React.FC = () => {
  return (
    <section className="bg-[#F2ECE9] text-[#252326] py-10 lg:py-12 border-y border-[#E5DDD8] relative overflow-hidden">
      
      {/* Subtle overlay accent pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C97873_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans">
            Trusted Multidisciplinary Diabetes Care & Clinical Excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E5DDD8]">
          {TRUST_STATS.map((stat, idx) => (
            <div key={idx} className={`pt-4 sm:pt-0 ${idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''} text-center sm:text-left`}>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#542F3B] tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#C97873] font-sans mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-[#70696C] font-sans font-normal">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
