import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import Destinations from './components/Destinations';
import PhotoStrip from './components/PhotoStrip';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-charcoal antialiased selection:bg-brand-coral selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header Section */}
      <Hero />

      {/* Dark Stats Band Section */}
      <StatsBand />

      {/* Main content Sections */}
      <main>
        {/* Choose Destination Grid */}
        <Destinations />

        {/* Visual photo strip break */}
        <PhotoStrip />

        {/* Reviews & Testimonials Carousel */}
        <Testimonials />

        {/* Newsletter CTA Block */}
        <Newsletter />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
