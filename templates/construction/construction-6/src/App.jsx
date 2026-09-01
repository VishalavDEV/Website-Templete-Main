import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import EstimatorSection from './components/EstimatorSection';
import VideoModal from './components/VideoModal';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { fetchHealth, fetchStats, fetchProjects, fetchServices } from './services/api';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('arcstone_theme') || 'dark');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [backendOnline, setBackendOnline] = useState(false);

  // Data from Spring Boot
  const [stats, setStats] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);

  // Theme effect
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('arcstone_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Fetch initial data from Spring Boot API
  useEffect(() => {
    const loadData = async () => {
      const health = await fetchHealth();
      if (health && health.status === 'UP') {
        setBackendOnline(true);
      }

      const [statsData, projectsData, servicesData] = await Promise.all([
        fetchStats(),
        fetchProjects(),
        fetchServices()
      ]);

      if (statsData) setStats(statsData);
      if (projectsData) setProjects(projectsData);
      if (servicesData) setServices(servicesData);
    };

    loadData();
    const interval = setInterval(loadData, 10000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 5000);
  };

  return (
    <div className="arcstone-app">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenModal={() => setIsVideoModalOpen(true)}
        backendOnline={backendOnline}
      />
      
      <main>
        <Hero onOpenVideoModal={() => setIsVideoModalOpen(true)} />
        <StatsBar stats={stats} />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ServicesSection services={services} />
        <EstimatorSection onShowToast={showToast} />
      </main>

      <Footer />

      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />

      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage('')} 
      />
    </div>
  );
}
