import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Scene3D from './components/Scene3D';
import PortfolioGrid from './components/PortfolioGrid';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  // Update document title for SEO
  useEffect(() => {
    document.title = "Lume Studio — Fashion & Editorial Photography";
  }, []);

  return (
    <div style={{
      backgroundColor: '#000000',
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      position: 'relative'
    }}>
      {/* 1. Fixed header Navbar */}
      <Navbar />

      {/* 2. Repurposed full-bleed Hero Section */}
      <Scene3D />

      {/* 3. Portfolio Gallery Grid */}
      <PortfolioGrid />

      {/* 4. Two-column About Section */}
      <AboutSection />

      {/* 5. Services and Expertise Section */}
      <ServicesSection />

      {/* 6. Testimonials client feedback */}
      <Testimonials />

      {/* 7. Contact / CTA Form Section */}
      <ContactSection />

      {/* 8. Footer Section */}
      <Footer />
    </div>
  );
}
