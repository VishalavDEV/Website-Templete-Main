import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WarmNavbar } from "./components/WarmNavbar";
import { WarmFooter } from "./components/WarmFooter";
import { WarmConsultationModal } from "./components/WarmConsultationModal";
import { ScrollToTop } from "./components/ScrollToTop";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { WorkPage } from "./pages/WorkPage";
import { InsightsPage } from "./pages/InsightsPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Router basename="/templates/cooperate/cooperate-4">
      <ScrollToTop />
      <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-sand)" }}>
        <WarmNavbar onOpenProjectModal={handleOpenModal} />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenProjectModal={handleOpenModal} />} />
            <Route path="/about" element={<AboutPage onOpenContact={handleOpenModal} />} />
            <Route path="/services" element={<ServicesPage onOpenContact={handleOpenModal} />} />
            <Route path="/solutions" element={<SolutionsPage onOpenContact={handleOpenModal} />} />
            <Route path="/industries" element={<IndustriesPage onOpenContact={handleOpenModal} />} />
            <Route path="/work" element={<WorkPage onOpenContact={handleOpenModal} />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <WarmFooter onOpenProjectModal={handleOpenModal} />

        <WarmConsultationModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </Router>
  );
}
