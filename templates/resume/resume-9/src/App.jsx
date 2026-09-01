import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import ResearchMap from './components/ResearchMap';
import ResearchProjects from './components/ResearchProjects';
import ResearchNotebook from './components/ResearchNotebook';
import Experience from './components/Experience';
import Methodology from './components/Methodology';
import Publications from './components/Publications';
import Education from './components/Education';
import Teaching from './components/Teaching';
import Recognition from './components/Recognition';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import SearchModal from './components/SearchModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1E1B4B] flex flex-col font-sans selection:bg-[#EEECF8] selection:text-[#1E1B4B]">
      
      {/* NAVIGATION */}
      <Navbar
        onOpenCV={() => setIsCVModalOpen(true)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
      />

      {/* MAIN CONTENT SECTIONS */}
      <main className="flex-grow">
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
        <Profile />
        <ResearchMap />
        <ResearchProjects />
        <ResearchNotebook />
        <Experience />
        <Methodology />
        <Publications />
        <Education />
        <Teaching />
        <Recognition />
        <Values />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer onOpenCV={() => setIsCVModalOpen(true)} />

      {/* MODALS */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

    </div>
  );
}
