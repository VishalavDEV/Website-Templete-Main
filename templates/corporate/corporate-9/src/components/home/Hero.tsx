import React from 'react';
import { BoomerangVideoBg } from '../boomerang/BoomerangVideoBg';
import { BottomInfoPanel } from './BottomInfoPanel';

interface HeroProps {
  onOpenDemo?: () => void;
  onSelectFeature?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onSelectFeature }) => {
  const handleCtaClick = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const demoElem = document.querySelector('#book-demo') || document.querySelector('#contact');
      if (demoElem) {
        demoElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-between overflow-hidden min-h-screen w-full select-none pt-24 pb-8 sm:pb-12">
      {/* BOOMERANG SKYLINE VIDEO / CANVAS BACKGROUND */}
      <BoomerangVideoBg />

      {/* CENTERED HERO COPY */}
      <div className="relative z-10 flex flex-col items-center text-center pt-8 sm:pt-14 md:pt-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.04] tracking-[-0.02em] text-[#191919] font-normal whitespace-pre-line">
          {"Build lasting\nrelationships."}
        </h1>

        <p className="max-w-[540px] mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[#191919]/80 leading-relaxed font-sans font-normal">
          Conversational AI platform for modern financial institutions — agents that handle the full borrower lifecycle across email, SMS, and voice.
        </p>

        <button
          onClick={handleCtaClick}
          className="mt-6 sm:mt-8 px-7 py-3.5 bg-[#191919] text-white rounded-lg text-sm font-medium hover:bg-[#191919]/90 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#191919]"
        >
          Book A Demo
        </button>
      </div>

      {/* FLOATING BOTTOM INFORMATION PANEL */}
      <div className="relative z-10 w-full flex justify-center mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6">
        <BottomInfoPanel onSelectCapability={onSelectFeature} />
      </div>
    </section>
  );
};

