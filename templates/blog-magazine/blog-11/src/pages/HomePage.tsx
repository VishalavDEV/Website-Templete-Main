import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedGrid } from '../components/home/FeaturedGrid';
import { IntelligentFarm } from '../components/home/IntelligentFarm';
import { AgriStorytelling } from '../components/home/AgriStorytelling';
import { TechnologyLayer } from '../components/home/TechnologyLayer';
import { AiIntelligence } from '../components/home/AiIntelligence';
import { DataToDecision } from '../components/home/DataToDecision';
import { DayIn2035Timeline } from '../components/home/DayIn2035Timeline';
import { MediaSection } from '../components/home/MediaSection';
import { ArchivePreview } from '../components/home/ArchivePreview';
import { Newsletter } from '../components/home/Newsletter';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'AGROTECH AI — Where Agriculture Meets Technology & Artificial Intelligence';
  }, []);

  return (
    <main className="min-h-screen bg-theme-primary">
      <Hero />
      
      <ScrollReveal delay={100}>
        <FeaturedGrid />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <IntelligentFarm />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <AgriStorytelling />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <TechnologyLayer />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <AiIntelligence />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <DataToDecision />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <DayIn2035Timeline />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <MediaSection />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ArchivePreview />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Newsletter />
      </ScrollReveal>
    </main>
  );
};
