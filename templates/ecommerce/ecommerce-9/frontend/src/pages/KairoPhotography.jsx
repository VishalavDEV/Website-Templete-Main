import React from 'react';
import Navbar from '../components/kairo/Navbar';
import Scene3D from '../components/kairo/Scene3D';
import HeroGrid from '../components/kairo/HeroGrid';
import AboutSection from '../components/kairo/AboutSection';
import ServicesSection from '../components/kairo/ServicesSection';
import ContactSection from '../components/kairo/ContactSection';
import Footer from '../components/kairo/Footer';

export default function KairoPhotography() {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      minHeight: '100vh',
      width: '100vw',
      overflowX: 'hidden',
      margin: 0,
      padding: 0,
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Editorial Font Links */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Components */}
      <Navbar />
      <Scene3D />
      <HeroGrid />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
