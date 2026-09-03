import React from 'react';
import Navbar from './components/Navbar';
import Scene3D from './components/Scene3D';
import HeroGrid from './components/HeroGrid';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
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
