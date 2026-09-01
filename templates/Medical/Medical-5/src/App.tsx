import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';
import { CustomCursor } from './components/CustomCursor';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { NotificationDrawer } from './components/NotificationDrawer';
import { BookingFlowModal } from './components/BookingFlowModal';
import { DoctorProfileModal } from './components/DoctorProfileModal';
import { RescheduleModal } from './components/RescheduleModal';
import { ReportViewerModal } from './components/ReportViewerModal';
import { ArticleModal } from './components/ArticleModal';

// Content Views
import { HeroSection } from './components/HeroSection';
import { SpecialtyExplorer } from './components/SpecialtyExplorer';
import { DoctorDiscovery } from './components/DoctorDiscovery';
import { ServicesView } from './components/ServicesView';
import { HealthCheckTool } from './components/HealthCheckTool';
import { EmergencySection } from './components/EmergencySection';
import { PatientPortal } from './components/PatientPortal';
import { HealthLibraryView } from './components/HealthLibraryView';
import { LocationsView } from './components/LocationsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';

const MainAppContent: React.FC = () => {
  const { activePage } = useApp();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7FB] text-[#3E3445] font-sans antialiased selection:bg-[#E8DDF2] selection:text-[#665080]">
      {/* Global Interactive Overlays */}
      <CustomCursor />
      <ToastContainer />
      <Navbar />
      <GlobalSearchModal />
      <NotificationDrawer />
      <BookingFlowModal />
      <DoctorProfileModal />
      <RescheduleModal />
      <ReportViewerModal />
      <ArticleModal />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <HeroSection />
            <SpecialtyExplorer />
            <DoctorDiscovery />
            <ServicesView />
            <HealthCheckTool />
            <HealthLibraryView />
            <LocationsView />
            <EmergencySection />
          </>
        )}

        {activePage === 'specialties' && <SpecialtyExplorer isFullPage />}
        {activePage === 'doctors' && <DoctorDiscovery isFullPage />}
        {activePage === 'services' && <ServicesView isFullPage />}
        {activePage === 'health-check' && <HealthCheckTool isFullPage />}
        {activePage === 'emergency' && <EmergencySection isFullPage />}
        {activePage === 'portal' && <PatientPortal />}
        {activePage === 'library' && <HealthLibraryView isFullPage />}
        {activePage === 'locations' && <LocationsView isFullPage />}
        {activePage === 'about' && <AboutView isFullPage />}
        {activePage === 'contact' && <ContactView isFullPage />}
      </main>

      <Footer />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}

export default App;
