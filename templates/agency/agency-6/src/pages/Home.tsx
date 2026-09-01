import React from 'react';
import { Hero } from '../components/sections/Hero';
import { AgencyStatement } from '../components/sections/AgencyStatement';
import { InteractiveServices } from '../components/sections/InteractiveServices';
import { FeaturedWork } from '../components/sections/FeaturedWork';
import { StatsSection } from '../components/sections/StatsSection';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { InsightsSection } from '../components/sections/InsightsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CTASection } from '../components/sections/CTASection';
import { Marquee } from '../components/common/Marquee';

interface HomeProps {
  onCursorChange?: (text: string, variant: 'default' | 'hover') => void;
  onReplayIntro?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onCursorChange, onReplayIntro }) => {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <Hero onCursorChange={onCursorChange} onReplayIntro={onReplayIntro} />
      <Marquee />
      <AgencyStatement />
      <InteractiveServices onCursorChange={onCursorChange} />
      <FeaturedWork onCursorChange={onCursorChange} limit={4} />
      <StatsSection />
      <IndustriesSection />
      <ProcessSection />
      <InsightsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};
