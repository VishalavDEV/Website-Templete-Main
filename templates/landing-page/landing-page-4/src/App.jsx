import React from 'react';
import { ModalProvider } from './context/ModalContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Features from './components/Features';
import ProductDeepDive from './components/ProductDeepDive';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import DemoModal from './components/DemoModal';
import FeatureModal from './components/FeatureModal';
import Toast from './components/Toast';

export default function App() {
  return (
    <ModalProvider>
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-amber-500 selection:text-black">
        {/* Top Fixed Blurred Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content">
          <Hero />
          <TrustSection />
          <Features />
          <ProductDeepDive />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Newsletter />
          <FinalCTA />
        </main>

        {/* Comprehensive Footer */}
        <Footer />

        {/* Interactive Global Modals & Toast System */}
        <AuthModal />
        <DemoModal />
        <FeatureModal />
        <Toast />
      </div>
    </ModalProvider>
  );
}
