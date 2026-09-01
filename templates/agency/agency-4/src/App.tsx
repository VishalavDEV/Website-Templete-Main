import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { BackToTop } from './components/layout/BackToTop';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { WorkDetailPage } from './pages/WorkDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <Router basename="/templates/agency/agency-4">
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF8F5] text-[#1A1918] flex flex-col font-sans selection:bg-[#D96B43] selection:text-white">
        <ScrollProgress />
        <Navbar />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:id" element={<WorkDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:id" element={<InsightDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
