import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DailyRhythm from './components/DailyRhythm';
import AurelisMethod from './components/AurelisMethod';
import Programs from './components/Programs';
import CoachingJournal from './components/CoachingJournal';
import ProgressStories from './components/ProgressStories';
import CoachesGallery from './components/CoachesGallery';
import JournalSection from './components/JournalSection';
import CommunityCollage from './components/CommunityCollage';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import PathModal from './components/PathModal';
import Footer from './components/Footer';

export default function App() {
  const [isPathModalOpen, setIsPathModalOpen] = useState(false);

  const handleOpenPathModal = () => {
    setIsPathModalOpen(true);
  };

  const handleClosePathModal = () => {
    setIsPathModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F3F0E8] text-[#171816] font-sans selection:bg-[#B56F4D] selection:text-[#F3F0E8]">
      {/* Sticky Top Navbar */}
      <Navbar onOpenPathModal={handleOpenPathModal} />

      {/* Hero Section */}
      <main>
        <Hero onOpenPathModal={handleOpenPathModal} />

        {/* Signature Interaction: The Daily Rhythm */}
        <DailyRhythm />

        {/* The AURELIS Method (Four Foundations Accordion Stack) */}
        <AurelisMethod />

        {/* Coaching Pathways / Programs Section */}
        <Programs onOpenPathModal={handleOpenPathModal} />

        {/* Coaching Experience Journal View */}
        <CoachingJournal />

        {/* Progress Stories & Abstract Data Story */}
        <ProgressStories />

        {/* Coaches Gallery */}
        <CoachesGallery />

        {/* Journal Essays & Articles Section */}
        <JournalSection />

        {/* Community Parallax Collage */}
        <CommunityCollage />

        {/* Typographic Testimonials */}
        <Testimonials />

        {/* Final Breathing Motion CTA */}
        <FinalCTA onOpenPathModal={handleOpenPathModal} />
      </main>

      {/* Footer */}
      <Footer onOpenPathModal={handleOpenPathModal} />

      {/* Onboarding Assessment Modal */}
      <PathModal isOpen={isPathModalOpen} onClose={handleClosePathModal} />
    </div>
  );
}
