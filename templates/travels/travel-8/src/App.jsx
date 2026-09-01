import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import FeaturedTrip from './components/FeaturedTrip';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0E14] overflow-x-hidden font-sans select-none">
      {/* Sticky Main Navigation */}
      <Navbar />

      {/* Parallax Ken Burns Luxury Hero */}
      <Hero />

      {/* Main content body wrapper */}
      <div className="relative z-10">
        
        {/* Curated destination experiences grid */}
        <Destinations />

        {/* Selected signature trip featured layout */}
        <FeaturedTrip />

        {/* Guest testimonials quote sliders */}
        <Testimonials />

        {/* Rotated photo cards Instagram gallery strip */}
        <Gallery />

        {/* Form subscription newsletter dispatch */}
        <Newsletter />

      </div>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
