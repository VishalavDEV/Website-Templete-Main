import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import ShowcaseSection from './components/ShowcaseSection';
import PartnersStrip from './components/PartnersStrip';
import EstimatorSection from './components/EstimatorSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import VideoModal from './components/VideoModal';
import Toast from './components/Toast';
import { fetchStats } from './api/client';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('futurix_theme') === 'light';
  });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('futurix_theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('futurix_theme', 'dark');
    }
  }, [isLightMode]);

  useEffect(() => {
    fetchStats().then(data => {
      if (data) setStats(data);
    });

    const interval = setInterval(() => {
      fetchStats().then(data => {
        if (data) setStats(data);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleToggleTheme = () => {
    setIsLightMode(prev => !prev);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="futurix-app-root">
      <TopBar isLightMode={isLightMode} onToggleTheme={handleToggleTheme} />
      <SocialSidebar />
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <HeroSection 
        onOpenVideoModal={() => setIsVideoModalOpen(true)} 
        stats={stats}
      />
      <PillarsSection />
      <ShowcaseSection 
        onOpenVideoModal={() => setIsVideoModalOpen(true)} 
        stats={stats}
      />
      <PartnersStrip />
      <EstimatorSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <ProjectsSection onOpenVideoModal={() => setIsVideoModalOpen(true)} />
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        showToast={showToast}
      />
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />

      {/* Global Toast */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage('')} 
      />
    </div>
  );
}
