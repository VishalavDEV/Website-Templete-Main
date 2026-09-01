import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import TourPackages from './components/TourPackages';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-x-hidden font-sans">
      {/* Utility Bar above Nav */}
      <TopBar />
      
      {/* Sticky Main Navigation */}
      <Navbar />
      
      {/* Immersive Parallax Hero Section */}
      <Hero />
      
      {/* Core Body Sections */}
      <div className="relative z-10">
        
        {/* Featured Destinations Section */}
        <Destinations />
        
        {/* Curated Tour Packages Section */}
        <TourPackages />
        
        {/* Why Choose Us features strip */}
        <Features />
        
        {/* Customer Testimonials carousel */}
        <Testimonials />
        
        {/* Newsletter subscription band */}
        <Newsletter />
        
      </div>
      
      {/* Dark Footer */}
      <Footer />
    </div>
  );
}
