import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedTours from './components/FeaturedTours';
import CustomizeCTA from './components/CustomizeCTA';
import Testimonials from './components/Testimonials';
import GalleryStrip from './components/GalleryStrip';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Navigation */}
      <Navbar />

      {/* Main content blocks */}
      <main className="flex-grow">
        
        {/* Split Hero with Masonry */}
        <Hero />

        {/* Category Cards Section */}
        <Categories />

        {/* Featured Tours Grid */}
        <FeaturedTours />

        {/* Trip Customizer CTA Banner */}
        <CustomizeCTA />

        {/* Traveler Reviews Carousel */}
        <Testimonials />

        {/* Instagram Gallery Strip */}
        <GalleryStrip />

        {/* Newsletter band */}
        <Newsletter />

      </main>

      {/* Footer block */}
      <Footer />
    </div>
  );
}

export default App;
