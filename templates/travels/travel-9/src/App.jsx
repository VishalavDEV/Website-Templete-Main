import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden font-sans select-none">
      
      {/* Sticky Main Navigation */}
      <Navbar />

      {/* Royal Blue Gradient Hero with Landmark Collage */}
      <Hero />

      {/* Main page content sections */}
      <div className="relative z-10">
        
        {/* Popular Destination city cards */}
        <Destinations />

        {/* Curated Travel Packages */}
        <Packages />

        {/* Why Choose Us feature counters */}
        <WhyChooseUs />

        {/* Review traveler carousel */}
        <Testimonials />

        {/* Dynamic call to action banner */}
        <CTA />

      </div>

      {/* Dark Navy Footer */}
      <Footer />
    </div>
  );
}
