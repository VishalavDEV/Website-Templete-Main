import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { NewArrivals } from '@/components/sections/NewArrivals';
import { BestSellers } from '@/components/sections/BestSellers';
import { BestOfWeek } from '@/components/sections/BestOfWeek';
import { SkincareRoutine } from '@/components/sections/SkincareRoutine';
import { CustomerReviews } from '@/components/sections/CustomerReviews';
import { MarqueeTicker } from '@/components/sections/MarqueeTicker';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#FFF9F5] text-[#2D2224] selection:bg-[#F7DDE2] selection:text-[#B76E79]">
      {/* Ticker Announcement Bar */}
      <MarqueeTicker />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Section with Product & Model Soft Gradient Showcase */}
      <HeroSection />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Best Sellers Section */}
      <BestSellers />

      {/* Weekly Highlights Spotlight */}
      <BestOfWeek />

      {/* Interactive 4-Step Skincare Routine & Bundle Builder */}
      <SkincareRoutine />

      {/* Customer Reviews Wall & Glow Stats */}
      <CustomerReviews />

      {/* Footer & Newsletter */}
      <Footer />
    </main>
  );
}
