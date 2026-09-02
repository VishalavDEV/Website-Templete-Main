import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import FloatingNavbar from './components/FloatingNavbar';
import AdmissionModal from './components/AdmissionModal';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Programs from './pages/Programs';
import ProgramDetails from './pages/ProgramDetails';
import Research from './pages/Research';
import Faculty from './pages/Faculty';
import Campus from './pages/Campus';
import Journal from './pages/Journal';
import Admissions from './pages/Admissions';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);

  const handleOpenAdmissions = () => setIsAdmissionsOpen(true);
  const handleCloseAdmissions = () => setIsAdmissionsOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation Dock */}
      <FloatingNavbar onOpenAdmissions={handleOpenAdmissions} />

      {/* Main Page Routes */}
      <Routes>
        <Route path="/" element={<Home onOpenAdmissions={handleOpenAdmissions} />} />
        <Route path="/programs" element={<Programs onOpenAdmissions={handleOpenAdmissions} />} />
        <Route path="/programs/:id" element={<ProgramDetails onOpenAdmissions={handleOpenAdmissions} />} />
        <Route path="/research" element={<Research />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/admissions" element={<Admissions onOpenAdmissions={handleOpenAdmissions} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer onOpenAdmissions={handleOpenAdmissions} />

      {/* Multi-step Admissions Modal Application Wizard */}
      <AdmissionModal isOpen={isAdmissionsOpen} onClose={handleCloseAdmissions} />
    </BrowserRouter>
  );
}
