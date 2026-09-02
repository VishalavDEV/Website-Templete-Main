import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoModal from './components/VideoModal';
import CorePillars from './components/CorePillars';
import AboutMission from './components/AboutMission';
import ServicesGrid from './components/ServicesGrid';
import ServiceModal from './components/ServiceModal';
import ImpactMetrics from './components/ImpactMetrics';
import FarmRoiCalculator from './components/FarmRoiCalculator';
import GalleryPortfolio from './components/GalleryPortfolio';
import LightboxModal from './components/LightboxModal';
import Testimonials from './components/Testimonials';
import PartnersCertifications from './components/PartnersCertifications';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import { galleryItems } from './data/content';

export default function App() {
  // Modal states
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleOpenLightbox = (item, index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-forest-950">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Sticky Navbar with Mobile Slide-Out Drawer */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Landing Page Flow */}
      <main className="flex-grow">
        {/* 3. Hero Section with Floating Badges & Video Modal */}
        <Hero 
          onOpenVideo={() => setIsVideoOpen(true)} 
          onOpenContact={() => setIsContactOpen(true)} 
        />

        {/* 4. Core Pillars / Tri-Framework (3-Column Interactive Grid) */}
        <CorePillars onSelectService={(service) => setSelectedService(service)} />

        {/* 5. Trust & Standard Certifications Ribbon */}
        <PartnersCertifications />

        {/* 6. About Us & Mission with Layered Image Collage */}
        <AboutMission onOpenContact={() => setIsContactOpen(true)} />

        {/* 7. Comprehensive Services & Solutions Grid with Modal Deep Dives */}
        <ServicesGrid 
          onSelectService={(service) => setSelectedService(service)} 
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 8. Interactive Impact & Real-time Metrics Counters */}
        <ImpactMetrics />

        {/* 9. Interactive Farm Yield & Carbon ROI Calculator */}
        <FarmRoiCalculator onOpenContact={() => setIsContactOpen(true)} />

        {/* 10. Visual Gallery & Field Portfolio */}
        <GalleryPortfolio onOpenLightbox={handleOpenLightbox} />

        {/* 11. Testimonials & Farmer Stories */}
        <Testimonials />

        {/* 12. Frequently Asked Questions Accordion */}
        <FaqSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 13. Call-to-Action Banner */}
        <CtaBanner onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* 14. Multi-column Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Global Modals */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={() => {
          setSelectedService(null);
          setIsContactOpen(true);
        }}
      />

      <LightboxModal
        item={currentLightboxItem}
        isOpen={lightboxIndex !== null}
        onClose={handleCloseLightbox}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
