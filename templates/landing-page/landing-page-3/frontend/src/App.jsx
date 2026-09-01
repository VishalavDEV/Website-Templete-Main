import React, { useState } from 'react';
import CinematicIntro from './components/CinematicIntro';
import TopStats from './components/TopStats';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PinnacleSection from './components/PinnacleSection';
import StepCards from './components/StepCards';
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
    <div className="min-h-screen bg-[#070709] text-white flex flex-col selection:bg-[#F2994A] selection:text-black">
      
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

        {/* 5. Secondary Features (Pinnacle mountain drive & Step Cards from reference image) */}
        <div id="details">
          <PinnacleSection onOpenBooking={() => handleOpenBooking()} />
          <StepCards onOpenBooking={() => handleOpenBooking()} />
        </div>
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
