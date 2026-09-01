import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoryDiscovery } from '../components/home/CategoryDiscovery';
import { NewArrivalsRail } from '../components/home/NewArrivalsRail';
import { FeaturedEdit } from '../components/home/FeaturedEdit';
import { MoodSelector } from '../components/home/MoodSelector';
import { JournalNewsletter } from '../components/home/JournalNewsletter';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
      <CategoryDiscovery />
      <NewArrivalsRail />
      <FeaturedEdit />
      <MoodSelector />
      <JournalNewsletter />
    </main>
  );
};
