import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroFlythrough from './components/HeroFlythrough';
import ProjectGallery from './components/ProjectGallery';
import WindTunnelStreamlines from './components/WindTunnelStreamlines';
import KineticFacadeSimulator from './components/KineticFacadeSimulator';
import AerodynamicEstimator from './components/AerodynamicEstimator';
import RfqSection from './components/RfqSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { fetchHealth, fetchProjects } from './services/api';

export default function App() {
  // Set default theme as 'light'
  const [theme, setTheme] = useState(() => localStorage.getItem('aero_theme') || 'light');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqInitialData, setRfqInitialData] = useState(null);
  const [systemHealth, setSystemHealth] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aero_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const initData = async () => {
      const health = await fetchHealth();
      setSystemHealth(health);

      const projs = await fetchProjects();
      setProjects(projs);
    };
    initData();
  }, []);

  const handleOpenRfqWithEstimate = (params, estimate) => {
    setRfqInitialData({
      grossFloorAreaSqm: estimate?.grossFloorAreaSqm,
      estimatedStructuralBudgetMln: estimate?.estimatedStructuralBudgetMln,
      projectBrief: `Project Concept: ${params.targetHeightMeters}m Height, ${params.totalFloors} Storeys, ${params.aerodynamicProfile} Profile with ${params.facadeType}.`
    });
    setRfqModalOpen(true);
  };

  const handleCommissionProject = (project) => {
    setRfqInitialData({
      grossFloorAreaSqm: 120000,
      projectBrief: `Inquiry regarding architectural design inspired by "${project.title}" (${project.category}).`
    });
    setRfqModalOpen(true);
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Header
        currentTheme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenRfq={() => {
          setRfqInitialData(null);
          setRfqModalOpen(true);
        }}
        systemHealth={systemHealth}
      />

      {/* Main Content */}
      <main style={{ flexGrow: 1 }}>
        <HeroFlythrough
          currentTheme={theme}
          onExploreProjects={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenRfq={() => {
            setRfqInitialData(null);
            setRfqModalOpen(true);
          }}
        />

        {/* Selected Architectural Works */}
        <ProjectGallery
          projects={projects}
          onSelectProject={(p) => setSelectedProject(p)}
        />

        {/* Aerodynamic Simulation Studio */}
        <WindTunnelStreamlines currentTheme={theme} />

        {/* Responsive Kinetic Envelope */}
        <KineticFacadeSimulator />

        {/* Feasibility & Cost Estimator */}
        <AerodynamicEstimator
          onOpenRfqWithEstimate={handleOpenRfqWithEstimate}
        />

        {/* Studio Inquiry & Contact */}
        <RfqSection />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onCommission={handleCommissionProject}
        />
      )}

      {/* Inquiry Modal */}
      {rfqModalOpen && (
        <RfqSection
          isModal={true}
          initialData={rfqInitialData}
          onClose={() => setRfqModalOpen(false)}
        />
      )}
    </div>
  );
}
