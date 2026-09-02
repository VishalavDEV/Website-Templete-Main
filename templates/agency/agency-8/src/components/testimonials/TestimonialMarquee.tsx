import React from 'react';

export const TestimonialMarquee: React.FC = () => {
  const phrase = [
    'TRUSTED BY AMBITIOUS TEAMS',
    'BUILT FOR BIG IDEAS',
    'MADE TO MATTER',
    'CRAFT WITHOUT COMPROMISE',
    'EMOTIONALLY RESONANT SYSTEMS',
  ];

  return (
    <div className="py-8 sm:py-10 bg-[#080808] border-y border-[#ffffff10] overflow-hidden select-none">
      <div className="flex w-max animate-marquee motion-reduce:animate-none space-x-8">
        {[...Array(4)].map((_, repeatIndex) => (
          <div key={repeatIndex} className="flex items-center space-x-8 shrink-0">
            {phrase.map((text, i) => (
              <div key={i} className="flex items-center space-x-8">
                <span className="font-display font-bold text-sm sm:text-base tracking-[0.25em] text-[#888888] hover:text-[#FAF9F6] transition-colors uppercase whitespace-nowrap">
                  {text}
                </span>
                <span className="text-[#0066FF] text-xs font-mono">/</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
