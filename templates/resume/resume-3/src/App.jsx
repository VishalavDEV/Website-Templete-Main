import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import MissionGallery from './components/MissionGallery';
import MissionOrbit from './components/MissionOrbit';
import ExperienceModules from './components/ExperienceModules';
import SystemsDiagram from './components/SystemsDiagram';
import Research from './components/Research';
import Education from './components/Education';
import Recognition from './components/Recognition';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Main Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Section 01: Professional Profile */}
        <Profile />

        {/* Section 02: Featured Missions */}
        <MissionGallery />

        {/* Interactive Mission Orbit */}
        <MissionOrbit />

        {/* Section 03: Professional Experience */}
        <ExperienceModules />

        {/* Section 04: Systems & Technical Expertise */}
        <SystemsDiagram />

        {/* Section 05: Research & Innovation */}
        <Research />

        {/* Section 06: Education */}
        <Education />

        {/* Section 07: Professional Recognition */}
        <Recognition />

        {/* Engineering Philosophy */}
        <Philosophy />

        {/* Section 08: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
