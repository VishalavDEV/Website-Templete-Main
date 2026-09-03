import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import Showcase from '../components/Showcase';
import LiveDemo from '../components/LiveDemo';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import VideoModal from '../components/VideoModal';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <main className="relative min-h-screen">
      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenVideo={() => setIsVideoOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenContact={() => setIsContactOpen(true)}
        onOpenVideo={() => setIsVideoOpen(true)}
      />

      {/* About Section */}
      <About onOpenContact={() => setIsContactOpen(true)} />

      {/* Features Section */}
      <Features onOpenContact={() => setIsContactOpen(true)} />

      {/* Services Section */}
      <Services onOpenContact={() => setIsContactOpen(true)} />

      {/* Showcase Section */}
      <Showcase onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Playground / Live Demo Section */}
      <LiveDemo onOpenContact={() => setIsContactOpen(true)} />

      {/* Process / Roadmap Section */}
      <Process onOpenContact={() => setIsContactOpen(true)} />

      {/* Testimonials Carousel Section */}
      <Testimonials />

      {/* Statistics Section */}
      <Statistics />

      {/* Call to Action Section */}
      <CTA onOpenContact={() => setIsContactOpen(true)} />

      {/* Footer Section */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </main>
  );
}
