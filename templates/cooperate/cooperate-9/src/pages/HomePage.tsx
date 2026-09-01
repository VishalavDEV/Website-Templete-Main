import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { PlatformSection } from '../components/home/PlatformSection';
import { SolutionsSection } from '../components/home/SolutionsSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { CompanySection } from '../components/home/CompanySection';
import { StatsAndTestimonial } from '../components/home/StatsAndTestimonial';
import { GetStartedModal } from '../components/home/GetStartedModal';

interface HomePageProps {
  onGetStarted?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onGetStarted: externalGetStarted }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (externalGetStarted) {
      externalGetStarted();
    } else {
      setModalOpen(true);
    }
  };

  const handleLearnMore = () => {
    const platformElem = document.querySelector('#platform');
    if (platformElem) {
      platformElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreFeature = (featureName: string) => {
    handleOpenModal();
  };

  return (
    <main className="w-full bg-white">
      {/* 1. HERO VIEWPORT: EXACT REPRODUCTION OF SCREENSHOT */}
      <HeroSection 
        onGetStarted={handleOpenModal} 
        onLearnMore={handleLearnMore} 
      />

      {/* 2. OUR PLATFORM: SMARTPHONE INTERACTIVE SIMULATOR & PILLARS */}
      <PlatformSection 
        onExploreFeature={handleExploreFeature} 
      />

      {/* 3. TAILORED SOLUTIONS: INDIVIDUALS, ADVISORS, FAMILY OFFICES, ENTERPRISE */}
      <SolutionsSection 
        onGetStarted={handleOpenModal} 
      />

      {/* 4. HOW IT WORKS / RESOURCES: 5-STEP CONNECTED TIMELINE */}
      <HowItWorksSection />

      {/* 5. COMPANY: MISSION, FIDUCIARY PILLARS, LEADERSHIP TEAM */}
      <CompanySection 
        onGetStarted={handleOpenModal} 
      />

      {/* 6. STATS MATRIX & CLIENT TESTIMONIAL CAROUSEL */}
      <StatsAndTestimonial />

      {/* GET STARTED INTERACTIVE MODAL */}
      <GetStartedModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </main>
  );
};
