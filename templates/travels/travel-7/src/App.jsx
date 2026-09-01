import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroStory from './components/IntroStory';
import WorldMap from './components/WorldMap';
import BlogGrid from './components/BlogGrid';
import InterestsGrid from './components/InterestsGrid';
import AdventureBanner from './components/AdventureBanner';
import TipsAccordion from './components/TipsAccordion';
import InstagramStrip from './components/InstagramStrip';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden font-sans">
      
      {/* Sticky Main Navigation */}
      <Navbar />
      
      {/* Layered Ghost Text Parallax Hero */}
      <Hero />
      
      {/* Core Body Sections */}
      <div className="relative z-10">
        
        {/* Alex and Emma Intro Story Section */}
        <IntroStory />

        {/* Categories/Interests Selection Grid */}
        <InterestsGrid />
        
        {/* Stylized Interactive Map logs */}
        <WorldMap />
        
        {/* Full-width video post & small blogs */}
        <BlogGrid />
        
        {/* Upcoming Patagonia trip banner with specs */}
        <AdventureBanner />
        
        {/* Collapsible hiking advice FAQ Accordion */}
        <TipsAccordion />
        
        {/* Staggered instagram photo gallery strip */}
        <InstagramStrip />

        {/* Form subscription newsletter section */}
        <Newsletter />
        
      </div>
      
      {/* Dark Navy Footer with repeating directory */}
      <Footer />
    </div>
  );
}
