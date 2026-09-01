import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout Components
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';

// Main Finora Page
import { HomePage } from './pages/HomePage';
import { GetStartedModal } from './components/home/GetStartedModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenGetStarted = () => {
    setModalOpen(true);
  };

  return (
    <Router basename="/templates/cooperate/cooperate-9">
      <div className="min-h-screen bg-white text-[#191919] flex flex-col font-sans selection:bg-[#191919] selection:text-white">
        {/* Navigation Bar matching Screenshot */}
        <Navbar onGetStarted={handleOpenGetStarted} />

        {/* Dynamic Route Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onGetStarted={handleOpenGetStarted} />} />
            {/* Catch-all fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Finora Footer */}
        <Footer />

        {/* Global Get Started Modal */}
        <GetStartedModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </Router>
  );
}
