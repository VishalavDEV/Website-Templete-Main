import React, { useState } from 'react';
import CinematicIntro from './components/CinematicIntro';
import TopStats from './components/TopStats';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PinnacleSection from './components/PinnacleSection';
import StepCards from './components/StepCards';
import FleetShowcase from './components/FleetShowcase';
import SupportSection from './components/SupportSection';
import SecuritySection from './components/SecuritySection';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleOpenBooking = (vehicle = null) => {
    setSelectedVehicle(vehicle);
    setIsBookingOpen(true);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col selection:bg-[#F2994A] selection:text-black scroll-smooth">
      
      {/* 1. Cinematic Automotive Intro Sequence */}
      {showIntro && (
        <CinematicIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* 2. Top Stat Banner (Animated Counters from Spring Boot /api/stats) */}
      <TopStats />

      {/* 3. Glass Navbar ("ExquDrive." + "Try it now" + "Intro") */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onReplayIntro={handleReplayIntro}
      />

      {/* 4. Main Landing Hero (Black luxury car with 3D text, active headlight blinking & wheel turning) */}
      <main className="flex-grow">
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Fleet Showcase */}
        <FleetShowcase onSelectVehicle={handleOpenBooking} />

        {/* 5. Secondary Features (Pinnacle mountain drive & Step Cards from reference image) */}
        <div id="about">
          <PinnacleSection onOpenBooking={() => handleOpenBooking()} />
        </div>
        <div id="services">
          <StepCards onOpenBooking={() => handleOpenBooking()} />
        </div>

        {/* 6. Dedicated Support Section */}
        <SupportSection />

        {/* 7. Dedicated Security Section */}
        <SecuritySection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 6. Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* 7. Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedVehicle={selectedVehicle}
      />
    </div>
  );
}
