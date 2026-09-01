import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureStrip from './components/FeatureStrip';
import ProductivitySection from './components/ProductivitySection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1D1D1F] antialiased overflow-x-hidden">
      {/* Header / Navbar */}
      <Navbar />

      {/* Main Hero Section */}
      <Hero />

      {/* 3-Column Feature Strip */}
      <FeatureStrip />

      {/* Productivity Multi-Tool 2x2 Layout */}
      <ProductivitySection />

      {/* Simple Clean Footer */}
      <footer className="w-full py-12 px-6 border-t border-gray-200/80 text-center text-xs text-gray-400 font-mono">
        © Busy Status Bar. All rights reserved.
      </footer>
    </div>
  );
}
