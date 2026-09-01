import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ProblemSolution from './components/ProblemSolution';
import CoreFeatures from './components/CoreFeatures';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import AIAssistant from './components/AIAssistant';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <ProblemSolution />
        <CoreFeatures />
        <ProductShowcase />
        <HowItWorks />
        <AIAssistant />
        <Statistics />
        <Testimonials />
        <Integrations />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
