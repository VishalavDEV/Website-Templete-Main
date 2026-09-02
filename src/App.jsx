import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AnatomyExplorer from './components/AnatomyExplorer';
import Specialties from './components/Specialties';
import DoctorDirectory from './components/DoctorDirectory';
import VisitingCardModal from './components/VisitingCardModal';
import AppointmentWizard from './components/AppointmentWizard';
import ClinicalTimeline from './components/ClinicalTimeline';
import FacilityGallery from './components/FacilityGallery';
import EmergencyBar from './components/EmergencyBar';
import SearchModal from './components/SearchModal';
import SymptomCheckerModal from './components/SymptomCheckerModal';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('anatomy');

  // Modal Controllers
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingInitialSpecialty, setBookingInitialSpecialty] = useState(null);
  const [bookingInitialDoctor, setBookingInitialDoctor] = useState(null);

  const [activeVisitingDoctor, setActiveVisitingDoctor] = useState(null);
  const [symptomCheckerOpen, setSymptomCheckerOpen] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(true);

  // Helper Triggers
  const handleOpenBooking = (specialtyId = null, doctorId = null) => {
    setBookingInitialSpecialty(specialtyId);
    setBookingInitialDoctor(doctorId);
    setBookingOpen(true);
  };

  const handleScrollToAnatomy = () => {
    setActiveSection('anatomy');
    const el = document.getElementById('anatomy');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Arctic Frost Aura Floating Background */}
      <div className="arctic-aura-bg">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-2" />
        <div className="aura-orb aura-orb-3" />
      </div>

      {/* Interactive Medical Radar Cursor Follower */}
      <CustomCursor enabled={cursorEnabled} />

      {/* Glass Header Navigation */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBooking={handleOpenBooking}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenSymptomChecker={() => setSymptomCheckerOpen(true)}
      />

      {/* Main Content Area */}
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onScrollToAnatomy={handleScrollToAnatomy}
          onOpenSymptomChecker={() => setSymptomCheckerOpen(true)}
        />

        {/* Human Anatomy — Reimagined Interactive Body Explorer */}
        <AnatomyExplorer
          onOpenBooking={handleOpenBooking}
          onViewDoctorCard={(doc) => setActiveVisitingDoctor(doc)}
        />

        {/* Specialties & Clinical Care Centers */}
        <Specialties
          onOpenBooking={handleOpenBooking}
          onViewDoctorCard={(doc) => setActiveVisitingDoctor(doc)}
        />

        {/* World-Class Doctors Directory & Visiting Card Launcher */}
        <DoctorDirectory
          onOpenBooking={handleOpenBooking}
          onViewDoctorCard={(doc) => setActiveVisitingDoctor(doc)}
        />

        {/* Clinical Case Outcomes & Recovery Timeline */}
        <ClinicalTimeline />

        {/* Facilities & Lightbox Gallery */}
        <FacilityGallery />

        {/* 24/7 ER Emergency Hotline Bar */}
        <EmergencyBar />
      </main>

      {/* Footer & Patient FAQs */}
      <Footer
        cursorEnabled={cursorEnabled}
        onToggleCursor={() => setCursorEnabled(!cursorEnabled)}
      />

      {/* Interactive 3D Doctor Visiting Card Modal */}
      {activeVisitingDoctor && (
        <VisitingCardModal
          doctor={activeVisitingDoctor}
          onClose={() => setActiveVisitingDoctor(null)}
          onOpenBooking={handleOpenBooking}
        />
      )}

      {/* Multi-Step Appointment Booking Wizard */}
      {bookingOpen && (
        <AppointmentWizard
          initialSpecialtyId={bookingInitialSpecialty}
          initialDoctorId={bookingInitialDoctor}
          onClose={() => setBookingOpen(false)}
        />
      )}

      {/* Global Ctrl+K Instant Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectDoctor={(doc) => setActiveVisitingDoctor(doc)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Symptom Checker Modal */}
      <SymptomCheckerModal
        isOpen={symptomCheckerOpen}
        onClose={() => setSymptomCheckerOpen(false)}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
