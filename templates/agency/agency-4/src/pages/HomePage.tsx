import React, { useEffect } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { StudioGallery } from '../components/ui/StudioGallery';
import { ServicesSection } from '../components/sections/ServicesSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CtaSection } from '../components/sections/CtaSection';
import { InsightsSection } from '../components/sections/InsightsSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <StudioGallery />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
      <InsightsSection />
      <ContactSection />
    </main>
  );
};
