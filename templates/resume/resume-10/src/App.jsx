import React, { useState, useEffect } from 'react';
import OpeningSequence from './components/OpeningSequence';
import CinematicNavbar from './components/CinematicNavbar';
import HeroSection from './components/HeroSection';
import CreativePhilosophy from './components/CreativePhilosophy';
import SelectedFilms from './components/SelectedFilms';
import FilmStrip from './components/FilmStrip';
import DirectingProcess from './components/DirectingProcess';
import ProfessionalExperience from './components/ProfessionalExperience';
import ProductionExpertise from './components/ProductionExpertise';
import EducationSection from './components/EducationSection';
import CreativeConversations from './components/CreativeConversations';
import RecognitionSection from './components/RecognitionSection';
import DirectorsNote from './components/DirectorsNote';
import FinalTitleCard from './components/FinalTitleCard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [activeSection, setActiveSection] = useState('profile');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // Section scroll spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['profile', 'philosophy', 'films', 'film-strip', 'process', 'career', 'craft', 'education', 'conversations', 'recognition', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. CINEMATIC OPENING TITLE CARD SEQUENCE */}
      {showOpening && (
        <OpeningSequence onComplete={() => setShowOpening(false)} />
      )}

      {/* 2. STICKY CINEMATIC NAVBAR */}
      <CinematicNavbar
        activeSection={activeSection}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* MAIN CONTENT CONTAINERS */}
      <main>
        {/* HERO SECTION */}
        <HeroSection onOpenCV={() => setIsCVModalOpen(true)} />

        {/* ACT I: CREATIVE PHILOSOPHY */}
        <CreativePhilosophy />

        {/* ACT II: SELECTED FILMS (5 DISTINCT LAYOUTS) */}
        <SelectedFilms />

        {/* INTERACTIVE FILM STRIP Carousel */}
        <FilmStrip />

        {/* ACT III: DIRECTING PROCESS */}
        <DirectingProcess />

        {/* ACT IV: PROFESSIONAL EXPERIENCE */}
        <ProfessionalExperience />

        {/* ACT V: PRODUCTION EXPERTISE */}
        <ProductionExpertise />

        {/* ACT VI: EDUCATION */}
        <EducationSection />

        {/* ACT VII: CREATIVE CONVERSATIONS */}
        <CreativeConversations />

        {/* ACT VIII: RECOGNITION */}
        <RecognitionSection />

        {/* DIRECTOR'S NOTE */}
        <DirectorsNote />

        {/* FINAL TITLE CARD */}
        <FinalTitleCard />

        {/* CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* PRINTABLE / DOWNLOADABLE CV MODAL */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}

export default App;
