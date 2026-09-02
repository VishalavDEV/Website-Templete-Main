import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CursorType, ClientStory } from '../types';
import { CLIENT_STORIES } from '../data/testimonialsData';
import { TestimonialsHero } from '../components/testimonials/TestimonialsHero';
import { TestimonialMarquee } from '../components/testimonials/TestimonialMarquee';
import { FeaturedTestimonial } from '../components/testimonials/FeaturedTestimonial';
import { TestimonialIndex } from '../components/testimonials/TestimonialIndex';
import { TestimonialStory } from '../components/testimonials/TestimonialStory';
import { TestimonialWall } from '../components/testimonials/TestimonialWall';
import { IndustryVoices } from '../components/testimonials/IndustryVoices';
import { MediaTestimonial } from '../components/testimonials/MediaTestimonial';
import { ClientLogos } from '../components/testimonials/ClientLogos';
import { TestimonialStats } from '../components/testimonials/TestimonialStats';
import { TestimonialsCTA } from '../components/testimonials/TestimonialsCTA';

interface TestimonialsPageProps {
  setCursorType: (type: CursorType) => void;
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  setCursorType,
  onNavigate,
}) => {
  const [selectedStory, setSelectedStory] = useState<ClientStory | null>(null);

  const handleOpenStoryById = (id: number) => {
    const story = CLIENT_STORIES.find((s) => s.id === id);
    if (story) {
      setSelectedStory(story);
    }
  };

  const handleScrollToStories = () => {
    const el = document.getElementById('story-index');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#080808] text-[#FAF9F6] min-h-screen"
    >
      {/* 1. Testimonial Hero */}
      <TestimonialsHero
        setCursorType={setCursorType}
        onExploreClick={handleScrollToStories}
      />

      {/* 8. Subtle Marquee Strip */}
      <TestimonialMarquee />

      {/* 2. Featured Dominant Testimonial */}
      <FeaturedTestimonial
        setCursorType={setCursorType}
        onNavigate={onNavigate}
        onOpenStory={handleOpenStoryById}
      />

      {/* 3. Client Story Index */}
      <TestimonialIndex
        setCursorType={setCursorType}
        onSelectStory={(story) => setSelectedStory(story)}
      />

      {/* 5. Testimonial Wall (Varied Typography) */}
      <TestimonialWall setCursorType={setCursorType} />

      {/* 6. Industry Voices (Interactive Sector Testimonials) */}
      <IndustryVoices setCursorType={setCursorType} />

      {/* 7. Video / Media Testimonial */}
      <MediaTestimonial setCursorType={setCursorType} />

      {/* 9. Typographic Client Logos */}
      <ClientLogos setCursorType={setCursorType} />

      {/* 10. Impact Stats & Metrics */}
      <TestimonialStats />

      {/* 11 & 12. Final Closing Quote + Next Story CTA */}
      <TestimonialsCTA
        setCursorType={setCursorType}
        onNavigate={onNavigate}
      />

      {/* 4. Expanded Client Story Overlay Modal */}
      <TestimonialStory
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onNavigate={onNavigate}
        setCursorType={setCursorType}
      />
    </motion.div>
  );
};
