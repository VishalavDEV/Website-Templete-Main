import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { TrustedClients } from '../components/sections/TrustedClients';
import { AboutPreview } from '../components/sections/AboutPreview';
import { ServicesRows } from '../components/sections/ServicesRows';
import { SelectedWork } from '../components/sections/SelectedWork';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel';
import { PricingPreview } from '../components/sections/PricingPreview';
import { TeamGrid } from '../components/sections/TeamGrid';
import { JournalPreview } from '../components/sections/JournalPreview';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <TrustedClients />
      <AboutPreview />
      <ServicesRows />
      <SelectedWork />
      <ProcessTimeline />
      <TestimonialsCarousel />
      <PricingPreview />
      <TeamGrid />
      <JournalPreview />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};
