import React, { useState } from 'react';
import IntroCurtain from './components/IntroCurtain';
import CustomCursor from './components/CustomCursor';
import PillNav from './components/PillNav';
import FixedFrame from './components/FixedFrame';
import FullscreenNav from './components/FullscreenNav';
import HeroSection from './components/HeroSection';
import HouseSection from './components/HouseSection';
import IngredientsSection from './components/IngredientsSection';
import EditorialMenuSection from './components/EditorialMenuSection';
import SignatureSection from './components/SignatureSection';
import GardenSection from './components/GardenSection';
import ChefSection from './components/ChefSection';
import ExperienceSection from './components/ExperienceSection';
import JournalSection from './components/JournalSection';
import TestimonialSection from './components/TestimonialSection';
import ReservationSection from './components/ReservationSection';
import LocationSection from './components/LocationSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* 00. INTRO CURTAIN LOADER */}
      <IntroCurtain />

      {/* 00. CUSTOM SPRING CURSOR */}
      <CustomCursor />

      {/* 00. FLOATING PILL NAVIGATION */}
      <PillNav onOpenNav={() => setIsNavOpen(true)} />

      {/* 00. LEGACY FIXED FRAME */}
      <FixedFrame />

      {/* 00. ORGANIC FULLSCREEN MENU OVERLAY */}
      <FullscreenNav isOpen={isNavOpen} onCloseNav={() => setIsNavOpen(false)} />

      {/* MAIN SECTIONS */}
      <main>
        <HeroSection />
        <HouseSection />
        <IngredientsSection />
        <EditorialMenuSection />
        <SignatureSection />
        <GardenSection />
        <ChefSection />
        <ExperienceSection />
        <JournalSection />
        <TestimonialSection />
        <ReservationSection />
        <LocationSection />
      </main>

      {/* FOOTER */}
      <FooterSection />
    </>
  );
}
