import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { GalleryGrid } from './components/gallery/GalleryGrid';
import { PressBar } from './components/press/PressBar';
import { ServicesSection } from './components/services/ServicesSection';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';

export function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('Editorial & Campaign');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
  };

  const handleOpenBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#c5c6c7] selection:bg-[#66fcf1]/20 selection:text-[#66fcf1]">
      {/* Sticky / Floating Backdrop Blur Navbar */}
      <Navbar onOpenBookingModal={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Fullscreen High-Impact Hero Showcase */}
        <Hero />

        {/* Selected Publications & Editorial Honors */}
        <PressBar />

        {/* Interactive Multi-Column Media Grid & Lightbox */}
        <GalleryGrid />

        {/* Services & Investment Packages */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* About / Artist Profile, Animated Stats & Hardware Checklist */}
        <AboutSection />

        {/* Contact & Commission Booking Section */}
        <ContactSection initialService={selectedServiceForBooking} />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
