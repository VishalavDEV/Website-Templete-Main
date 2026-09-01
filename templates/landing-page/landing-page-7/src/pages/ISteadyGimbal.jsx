import React, { useEffect } from 'react';
import Navbar from '../components/isteady/Navbar';
import Scene3D from '../components/isteady/Scene3D';
import PortfolioGrid from '../components/isteady/PortfolioGrid';
import AboutSection from '../components/isteady/AboutSection';
import ServicesSection from '../components/isteady/ServicesSection';
import Testimonials from '../components/isteady/Testimonials';
import ContactSection from '../components/isteady/ContactSection';
import Footer from '../components/isteady/Footer';

export default function ISteadyGimbal() {
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
