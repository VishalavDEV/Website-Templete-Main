import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import FeaturedStories from './components/FeaturedStories';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { siteConfig } from './data/config';
import './index.css';

export default function App() {
  const { subpage } = useParams();
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  // Preloader delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on subpage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subpage]);

  // Desktop custom cursor coords
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest('a') || 
                           e.target.closest('button') || 
                           e.target.closest('.cursor-pointer');
      setIsHoveringInteractive(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Subpage filtering dispatcher
  const renderContent = () => {
    switch (subpage) {
      case 'portfolio':
        return (
          <>
            <div className="pt-24 bg-black">
              <Gallery />
            </div>
            <Footer />
          </>
        );
      case 'about':
        return (
          <>
            <div className="pt-24 bg-black">
              <About />
            </div>
            <Footer />
          </>
        );
      case 'contact':
        return (
          <div className="pt-24 bg-black">
            <Footer />
          </div>
        );
      default: // Home / Main landing
        return (
          <>
            <Hero />
            <About />
            <Gallery />
            <FeaturedStories />
            <Services />
            <Testimonials />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="cinematic-body min-h-screen relative overflow-hidden bg-black text-[#f5f4f1]">
      
      {/* 1. Cinematic Custom Cursor */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isHoveringInteractive ? 1.5 : 1, 
              opacity: 1 
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className={`cinematic-custom-cursor hidden md:block ${
              isHoveringInteractive ? 'border-[#c5a880] bg-[#c5a880]/10' : 'border-white'
            }`}
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          />
        )}
      </AnimatePresence>

      {/* 2. Luxury Preloader Intro Curtain */}
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] z-50 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center space-y-4"
            >
              {/* Monogram logo spinner */}
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center relative">
                <span className="text-sm uppercase tracking-widest text-[#c5a880]">{siteConfig.monogram}</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t border-[#c5a880]"
                />
              </div>
              <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-sans mt-4">
                {siteConfig.studioName}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Sticky Navbar */}
      <Navbar />

      {/* 4. Page Subpages with transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={subpage || "home"}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
