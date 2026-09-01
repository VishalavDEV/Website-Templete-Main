import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import SignatureWork from './components/SignatureWork';
import IngredientExplorer from './components/IngredientExplorer';
import CareerTimeline from './components/CareerTimeline';
import Expertise from './components/Expertise';
import EducationRecognition from './components/EducationRecognition';
import Collaborations from './components/Collaborations';
import CulinaryStatement from './components/CulinaryStatement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="app-root">
      <Navbar onOpenCV={() => setCvModalOpen(true)} />
      <main>
        <Hero onOpenCV={() => setCvModalOpen(true)} />
        <Philosophy />
        <SignatureWork />
        <IngredientExplorer />
        <CareerTimeline />
        <Expertise />
        <EducationRecognition />
        <Collaborations />
        <CulinaryStatement />
        <Contact />
      </main>
      <Footer />

      <CVModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
      />
    </div>
  );
}
