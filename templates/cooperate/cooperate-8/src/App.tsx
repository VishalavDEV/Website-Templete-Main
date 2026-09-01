import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ProjectScopingModal } from "./components/common/ProjectScopingModal";

// Pages
import { HomePage } from "./pages/HomePage";
import { CapabilitiesPage } from "./pages/CapabilitiesPage";
import { CapabilityDetailPage } from "./pages/CapabilityDetailPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { IndustryDetailPage } from "./pages/IndustryDetailPage";
import { WorkPage } from "./pages/WorkPage";
import { WorkDetailPage } from "./pages/WorkDetailPage";
import { InsightsPage } from "./pages/InsightsPage";
import { InsightDetailPage } from "./pages/InsightDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { CareersPage } from "./pages/CareersPage";
import { JobDetailPage } from "./pages/JobDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";

export const App: React.FC = () => {
  const [isScopingModalOpen, setIsScopingModalOpen] = useState(false);

  const handleOpenScoping = () => {
    setIsScopingModalOpen(true);
  };

  const handleCloseScoping = () => {
    setIsScopingModalOpen(false);
  };

  return (
    <BrowserRouter basename="/templates/cooperate/cooperate-8">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#121316] selection:bg-[#CCF34A] selection:text-[#0A2E23]">
        {/* Global Sticky Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage onOpenScoping={handleOpenScoping} />} />

            {/* Capabilities */}
            <Route path="/capabilities" element={<CapabilitiesPage onOpenScoping={handleOpenScoping} />} />
            <Route path="/capabilities/:slug" element={<CapabilityDetailPage onOpenScoping={handleOpenScoping} />} />
            <Route path="/services" element={<Navigate to="/capabilities" replace />} />
            <Route path="/services/:slug" element={<Navigate to="/capabilities" replace />} />

            {/* Industries */}
            <Route path="/industries" element={<IndustriesPage onOpenScoping={handleOpenScoping} />} />
            <Route path="/industries/:slug" element={<IndustryDetailPage onOpenScoping={handleOpenScoping} />} />

            {/* Work & Case Studies */}
            <Route path="/work" element={<WorkPage onOpenScoping={handleOpenScoping} />} />
            <Route path="/work/:slug" element={<WorkDetailPage onOpenScoping={handleOpenScoping} />} />
            <Route path="/case-studies" element={<Navigate to="/work" replace />} />
            <Route path="/case-studies/:slug" element={<Navigate to="/work" replace />} />

            {/* Insights & Publications */}
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<InsightDetailPage />} />
            <Route path="/blog" element={<Navigate to="/insights" replace />} />
            <Route path="/blog/:slug" element={<Navigate to="/insights" replace />} />

            {/* Company & Team */}
            <Route path="/about" element={<AboutPage onOpenScoping={handleOpenScoping} />} />
            <Route path="/team" element={<Navigate to="/about#leadership" replace />} />

            {/* Careers */}
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:slug" element={<JobDetailPage />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Legal */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Editorial Footer */}
        <Footer />

        {/* Global Project Scoping Modal */}
        <ProjectScopingModal
          isOpen={isScopingModalOpen}
          onClose={handleCloseScoping}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
