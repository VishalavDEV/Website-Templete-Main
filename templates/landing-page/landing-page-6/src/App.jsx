import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookIntro from './components/BookIntro';
import AboutBook from './components/AboutBook';
import Themes from './components/Themes';
import StorySection from './components/StorySection';
import Timeline from './components/Timeline';
import Author from './components/Author';
import BookPreview from './components/BookPreview';
import Reviews from './components/Reviews';
import BookDetails from './components/BookDetails';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import './App.css';

export default function App() {
  // Initialize Intersection Observer for scroll reveal animations
  useIntersectionObserver('.reveal-on-scroll', { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  return (
    <div className="app-container">
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <BookIntro />
        <AboutBook />
        <Themes />
        <StorySection />
        <Timeline />
        <Author />
        <BookPreview />
        <Reviews />
        <BookDetails />
        <Pricing />
        <FAQ />
        <Newsletter />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
