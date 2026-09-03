import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import BackgroundMesh from './components/BackgroundMesh';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandScroller from './components/BrandScroller';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import InteractiveDemo from './components/InteractiveDemo';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ActionModal from './components/ActionModal';
import { useScrollPosition } from './hooks/useScrollPosition';

export default function App() {
  const { isScrolled } = useScrollPosition();
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '' });
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenModal = (title = 'Launch Neural Cluster') => {
    setModalConfig({ isOpen: true, title });
  };

  const handleCloseModal = () => {
    setModalConfig({ isOpen: false, title: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Background Animated Particle Canvas & Ambient Glowing Orbs */}
      <BackgroundMesh />

      {/* Sticky Navbar with Scroll Progress & Mobile Menu */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Page Layout */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenModal={handleOpenModal} />
        <BrandScroller />
        <About />
        <Features onOpenModal={handleOpenModal} />
        <InteractiveDemo onShowToast={showToast} />
        <Services onOpenModal={handleOpenModal} />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <CTA onOpenModal={handleOpenModal} onShowToast={showToast} />
        <Contact onShowToast={showToast} />
      </main>

      {/* Full Footer */}
      <Footer onShowToast={showToast} />

      {/* Modal Dialog for CTAs */}
      <ActionModal
        isOpen={modalConfig.isOpen}
        onClose={handleCloseModal}
        title={modalConfig.title}
        onShowToast={showToast}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '28px',
              left: '28px',
              zIndex: 999,
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'rgba(15, 18, 30, 0.85)',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              color: 'var(--neon-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 240, 255, 0.25)',
              backdropFilter: 'blur(12px)',
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toast Notification Box */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="toast-container"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="toast-box">
              <Sparkles size={18} color="var(--neon-cyan)" />
              <span>{toastMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
