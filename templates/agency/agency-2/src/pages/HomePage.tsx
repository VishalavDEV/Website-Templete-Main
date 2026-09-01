import React from 'react';
import { Hero } from '../components/home/Hero';
import { SelectedWork } from '../components/home/SelectedWork';
import { HorizontalWorkSection } from '../components/home/HorizontalWorkSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { Manifesto } from '../components/home/Manifesto';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { ImpactMetrics } from '../components/home/ImpactMetrics';
import { StudioSection } from '../components/home/StudioSection';
import { TeamSection } from '../components/home/TeamSection';
import { ClientWall } from '../components/home/ClientWall';
import { TestimonialsSlider } from '../components/home/TestimonialsSlider';
import { InsightsSection } from '../components/home/InsightsSection';
import { FaqAccordion } from '../components/home/FaqAccordion';
import { ContactCTA } from '../components/home/ContactCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* 1. Cinematic Scroll Hero */}
      <Hero />

      {/* 2. Scroll Story Spacer */}
      <div className="h-16 sm:h-24 pointer-events-none" aria-hidden="true" />

      {/* 3. Selected Work */}
      <SelectedWork />

      {/* 4. Horizontal Pinned Project Reel */}
      <HorizontalWorkSection />

      {/* 5. Services & Capabilities */}
      <ServicesSection />

      {/* 6. Agency Manifesto */}
      <Manifesto />

      {/* 7. How We Work Process Timeline */}
      <ProcessTimeline />

      {/* 8. Impact & Results Metrics */}
      <ImpactMetrics />

      {/* 9. Studio & Philosophy */}
      <StudioSection />

      {/* 10. Leadership & Team */}
      <TeamSection />

      {/* 11. Client Wall */}
      <ClientWall />

      {/* 12. Editorial Testimonials */}
      <TestimonialsSlider />

      {/* 13. Insights & Journal */}
      <InsightsSection />

      {/* 14. Frequently Asked Questions */}
      <FaqAccordion />

      {/* 15. Final Contact CTA */}
      <ContactCTA />
    </div>
  );
};
