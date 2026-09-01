import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-x-hidden font-sans">
      {/* Top utility utility details */}
      <TopBar />

      {/* Main sticky navigation */}
      <Navbar />

      {/* Parallax hero banner with overlapping forms */}
      <Hero />

      {/* Main body content section wrapper */}
      <div className="relative z-10">
        
        {/* Featured Destinations Section */}
        <Destinations />

        {/* Popular Tour Packages Section */}
        <Packages />

        {/* Why Choose Us statistics count-ups */}
        <WhyChooseUs />

        {/* Client reviews slider */}
        <Testimonials />

        {/* Custom CTA/Newsletter highlight band */}
        <Newsletter />

      </div>

      {/* Dark Footer */}
      <Footer />
    </div>
  );
}
