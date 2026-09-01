import React, { useState } from 'react';
import './styles/global.css';
import './styles/components.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Collections from './components/Collections';
import Lookbook from './components/Lookbook';
import Process from './components/Process';
import Career from './components/Career';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Projects from './components/Projects';
import Recognition from './components/Recognition';
import Manifesto from './components/Manifesto';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CollectionModal from './components/CollectionModal';
import CvModal from './components/CvModal';

export default function App() {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="app-root">
      <Navbar onOpenCv={() => setIsCvOpen(true)} />
      
      <main>
        <Hero onOpenCv={() => setIsCvOpen(true)} />
        <Philosophy />
        <Collections onSelectCollection={(col) => setSelectedCollection(col)} />
        <Lookbook />
        <Process />
        <Career />
        <Expertise />
        <Education />
        <Projects />
        <Recognition />
        <Manifesto />
        <Contact />
      </main>

      <Footer />

      {/* Modals */}
      <CollectionModal 
        collection={selectedCollection} 
        onClose={() => setSelectedCollection(null)} 
      />

      <CvModal 
        isOpen={isCvOpen} 
        onClose={() => setIsCvOpen(false)} 
      />
    </div>
  );
}
