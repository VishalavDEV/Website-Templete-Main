import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VelocityRibbon from './components/VelocityRibbon';
import TelemetryHUD from './components/TelemetryHUD';
import BrutalistPhilosophy from './components/BrutalistPhilosophy';
import ProjectGallery from './components/ProjectGallery';
import ProjectModal from './components/ProjectModal';
import ConcreteEstimator from './components/ConcreteEstimator';
import RfqSection from './components/RfqSection';
import Footer from './components/Footer';
import IntroScene from './components/IntroScene';
import WeatherAtmosphere from './components/WeatherAtmosphere';
import { fetchHealth } from './services/api';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [stormActive, setStormActive] = useState(true);
  const [backendStatus, setBackendStatus] = useState('CHECKING');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    async function check() {
      const health = await fetchHealth();
      setBackendStatus(health.status);
    }
    check();
    const interval = setInterval(check, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Intro Scene Sequence */}
      {showIntro && (
        <IntroScene onComplete={() => setShowIntro(false)} />
      )}

      {/* Atmospheric Rain & Lightning Storm Canvas Overlay */}
      {stormActive && (
        <WeatherAtmosphere stormActive={stormActive} intensity="heavy" />
      )}

      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        backendStatus={backendStatus}
        onReplayIntro={() => setShowIntro(true)}
        stormActive={stormActive}
        setStormActive={setStormActive}
      />

      <main style={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
        <Hero />
        <VelocityRibbon />
        <TelemetryHUD />
        <BrutalistPhilosophy />
        <ProjectGallery onSelectProject={(p) => setSelectedProject(p)} />
        <ConcreteEstimator />
        <RfqSection />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
