import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ProjectGallery from './components/ProjectGallery';
import ProjectModal from './components/ProjectModal';
import ExperienceTimeline from './components/ExperienceTimeline';
import ExpertiseGrid from './components/ExpertiseGrid';
import Education from './components/Education';
import Research from './components/Research';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import GridBackground from './components/GridBackground';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-root">
      {/* INITIAL LOAD ARCHITECTURAL GRID DRAWING */}
      <GridBackground />

      {/* STICKY ARCHITECTURAL NAVBAR */}
      <Navbar onOpenCV={() => setIsCVModalOpen(true)} />

      {/* MAIN CONTENT TRAJECTORY */}
      <main className="main-content">
        <Hero 
          onOpenCV={() => setIsCVModalOpen(true)} 
          onExploreProjects={scrollToProjects} 
        />

        <Philosophy />

        <ProjectGallery 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        <ExperienceTimeline />

        <ExpertiseGrid />

        <Education />

        <Research />

        <Recognition />

        <Contact />
      </main>

      {/* ARCHITECTURAL FOOTER */}
      <Footer />

      {/* INTERACTIVE PROJECT DETAIL MODAL */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* FULL PRINTABLE / DOWNLOADABLE CV MODAL */}
      {isCVModalOpen && (
        <CVModal 
          onClose={() => setIsCVModalOpen(false)} 
        />
      )}
    </div>
  );
}
