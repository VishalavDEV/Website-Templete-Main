import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VelocityRibbon from './components/VelocityRibbon';
import TelemetryCalculator from './components/TelemetryCalculator';
import Portfolio from './components/Portfolio';
import ConsultationModal from './components/ConsultationModal';
import Footer from './components/Footer';
import { checkBackendHealth } from './services/api';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backendStatus, setBackendStatus] = useState({ online: false });

  useEffect(() => {
    checkBackendHealth().then(status => setBackendStatus(status));
    const interval = setInterval(() => {
      checkBackendHealth().then(status => setBackendStatus(status));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`buildxApp ${isLightMode ? 'lightMode' : ''}`}>
      <Header
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        onOpenModal={() => setIsModalOpen(true)}
        backendStatus={backendStatus}
      />

      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <VelocityRibbon />
        <TelemetryCalculator />
        <Portfolio />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
