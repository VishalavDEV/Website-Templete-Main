import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { SearchCommand } from './components/SearchCommand';
import { NotificationPanel } from './components/NotificationPanel';
import { ConsultationModal } from './components/ConsultationModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SolutionModal } from './components/SolutionModal';
import { ArticleModal } from './components/ArticleModal';
import { FeatureModal } from './components/FeatureModal';
import { OperationsConsoleModal } from './components/OperationsConsoleModal';
import { SettingsModal } from './components/SettingsModal';
import { ToastContainer } from './components/ToastContainer';

import { HeroSection } from './sections/HeroSection';
import { DashboardSection } from './sections/DashboardSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { AiPlatformSection } from './sections/AiPlatformSection';
import { AutomationSection } from './sections/AutomationSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { AboutSection } from './sections/AboutSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { InsightsSection } from './sections/InsightsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#08080A] text-slate-300 selection:bg-indigo-500/30 selection:text-white font-sans antialiased">
        {/* Global Floating Glass Navbar */}
        <Navbar />

        {/* Main Content Layout */}
        <main className="relative">
          <HeroSection />
          <DashboardSection />
          <SolutionsSection />
          <AiPlatformSection />
          <AutomationSection />
          <FeaturesSection />
          <CaseStudiesSection />
          <AboutSection />
          <TestimonialsSection />
          <InsightsSection />
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Modals & Overlays */}
        <SearchCommand />
        <NotificationPanel />
        <ConsultationModal />
        <CaseStudyModal />
        <SolutionModal />
        <ArticleModal />
        <FeatureModal />
        <OperationsConsoleModal />
        <SettingsModal />
        <ToastContainer />
      </div>
    </AppProvider>
  );
}

export default App;
