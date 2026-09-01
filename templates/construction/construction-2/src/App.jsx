import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BimVisualizer from './components/BimVisualizer';
import ServicesStrip from './components/ServicesStrip';
import ProjectsSection from './components/ProjectsSection';
import CostCalculator from './components/CostCalculator';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import VideoPlayerModal from './components/VideoPlayerModal';
import ProjectModal from './components/ProjectModal';
import QuoteModal from './components/QuoteModal';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('buildhub_theme');
    if (saved === 'light') {
      setTheme('light');
      document.body.classList.add('light-mode');
    } else {
      setTheme('dark');
      document.body.classList.remove('light-mode');
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('buildhub_theme', nextTheme);
    if (nextTheme === 'light') {
      document.body.classList.add('light-mode');
      addToast('Switched to Light Mode');
    } else {
      document.body.classList.remove('light-mode');
      addToast('Switched to Dark Mode');
    }
  };

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToastState => {
      setToasts(prev => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 4000);
    };
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  return (
    <div className="buildhub-app">
      {/* Toast Notifications */}
      <Toast toasts={toasts} />

      {/* Top Navbar */}
      <Navbar 
        onOpenQuote={() => setQuoteModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Hero Section */}
      <Hero onOpenVideo={() => setVideoModalOpen(true)} />

      {/* 3D Interactive BIM Section */}
      <BimVisualizer addToast={addToast} />

      {/* Core Services Strip */}
      <ServicesStrip />

      {/* Projects Portfolio */}
      <ProjectsSection 
        onOpenProjectModal={(p) => setSelectedProject(p)}
        onOpenVideo={() => setVideoModalOpen(true)}
        addToast={addToast}
      />

      {/* Cost Estimator */}
      <CostCalculator 
        onOpenQuote={() => setQuoteModalOpen(true)} 
      />

      {/* About & Trust Section */}
      <AboutSection 
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenVideo={() => setVideoModalOpen(true)}
      />

      {/* Footer */}
      <Footer addToast={addToast} />

      {/* Floating Quick Action */}
      <div className="floating-actions">
        <button 
          className="floating-quote-btn" 
          onClick={() => setQuoteModalOpen(true)}
        >
          <span>⚡ FREE ESTIMATE</span>
        </button>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          className="back-to-top-btn visible" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      {/* Modals */}
      <VideoPlayerModal 
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenQuote={() => setQuoteModalOpen(true)}
        addToast={addToast}
      />

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => setQuoteModalOpen(true)}
        addToast={addToast}
      />

      <QuoteModal 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        addToast={addToast}
      />
    </div>
  );
}
