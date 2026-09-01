import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorytellerProfile from './components/StorytellerProfile';
import VisualPhilosophy from './components/VisualPhilosophy';
import SelectedStories from './components/SelectedStories';
import HorizontalGallery from './components/HorizontalGallery';
import FieldExperience from './components/FieldExperience';
import ExpeditionMap from './components/ExpeditionMap';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Publications from './components/Publications';
import Recognition from './components/Recognition';
import Values from './components/Values';
import Contact from './components/Contact';
import StoryModal from './components/StoryModal';
import CVModal from './components/CVModal';
import AmbientAudio from './components/AmbientAudio';
import Footer from './components/Footer';

import './styles/main.css';
import './styles/components.css';

export default function App() {
  const [activeChapter, setActiveChapter] = useState('CHAPTER 01');
  const [selectedStory, setSelectedStory] = useState(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  // Scroll Chapter Observer
  useEffect(() => {
    const chapters = [
      { id: 'hero', name: 'OVERVIEW' },
      { id: 'chapter-01', name: 'CHAPTER 01' },
      { id: 'chapter-02', name: 'CHAPTER 02' },
      { id: 'chapter-03', name: 'CHAPTER 03' },
      { id: 'chapter-04', name: 'CHAPTER 04' },
      { id: 'chapter-05', name: 'CHAPTER 05' },
      { id: 'chapter-06', name: 'CHAPTER 06' },
      { id: 'chapter-07', name: 'CHAPTER 07' },
      { id: 'chapter-08', name: 'CHAPTER 08' },
      { id: 'chapter-09', name: 'CHAPTER 09' },
      { id: 'contact', name: 'CONTACT' },
    ];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = chapters.find(c => c.id === entry.target.id);
          if (match) {
            setActiveChapter(match.name);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    chapters.forEach(ch => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="documentary-app">
      {/* Web Audio Ambient Nature Sound generator */}
      <AmbientAudio isMuted={isAudioMuted} />

      {/* Navigation Header */}
      <Navbar 
        activeChapter={activeChapter} 
        onOpenCV={() => setIsCVOpen(true)}
        isMuted={isAudioMuted}
        toggleAudio={() => setIsAudioMuted(!isAudioMuted)}
      />

      {/* Chapter Sections */}
      <main>
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <StorytellerProfile />
        <VisualPhilosophy />
        <SelectedStories onSelectStory={(story) => setSelectedStory(story)} />
        <HorizontalGallery />
        <FieldExperience />
        <ExpeditionMap />
        <Expertise />
        <Education />
        <Publications />
        <Recognition />
        <Values />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <StoryModal 
        story={selectedStory} 
        onClose={() => setSelectedStory(null)} 
      />

      <CVModal 
        isOpen={isCVOpen} 
        onClose={() => setIsCVOpen(false)} 
      />
    </div>
  );
}
