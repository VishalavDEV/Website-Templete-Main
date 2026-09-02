import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { AboutHero } from '../components/about/AboutHero';
import { AboutIntro } from '../components/about/AboutIntro';
import { StudioStory } from '../components/about/StudioStory';
import { JourneyTimeline } from '../components/about/JourneyTimeline';
import { Values } from '../components/about/Values';
import { Capabilities } from '../components/about/Capabilities';
import { AboutStats } from '../components/about/AboutStats';
import { CultureSection } from '../components/about/CultureSection';
import { Manifesto } from '../components/about/Manifesto';
import { AboutTestimonial } from '../components/about/AboutTestimonial';
import { AboutCTA } from '../components/about/AboutCTA';
import { CursorType } from '../types';

interface AboutPageProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenProjectModal,
  setCursorType,
  onNavigate,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {/* 1. ABOUT HERO */}
      <AboutHero setCursorType={setCursorType} />

      {/* 2. LARGE INTRODUCTION */}
      <AboutIntro />

      {/* 3. STUDIO STORY */}
      <StudioStory setCursorType={setCursorType} />

      {/* 4. OUR EVOLUTION (Interactive Timeline) */}
      <JourneyTimeline setCursorType={setCursorType} />

      {/* 5. VALUES */}
      <Values setCursorType={setCursorType} />

      {/* 6. CAPABILITIES */}
      <Capabilities setCursorType={setCursorType} />

      {/* 7. STUDIO STATISTICS */}
      <AboutStats />

      {/* 8. CULTURE / PEOPLE */}
      <CultureSection
        setCursorType={setCursorType}
        onNavigateTeam={() => {
          onNavigate('/team');
        }}
      />

      {/* 9. MANIFESTO */}
      <Manifesto />

      {/* 10. FEATURED TESTIMONIAL */}
      <AboutTestimonial />

      {/* 11. CTA */}
      <AboutCTA
        onOpenProjectModal={onOpenProjectModal}
        setCursorType={setCursorType}
      />
    </motion.div>
  );
};
