import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import TechnologyPage from './pages/TechnologyPage';
import IndustriesPage from './pages/IndustriesPage';
import WorkPage from './pages/WorkPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
