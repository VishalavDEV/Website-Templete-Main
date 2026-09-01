import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/fineart/Navbar';
import Hero from '../components/fineart/Hero';
import CollectionsGrid from '../components/fineart/CollectionsGrid';
import FeatureBlock from '../components/fineart/FeatureBlock';
import Newsletter from '../components/fineart/Newsletter';
import Footer from '../components/fineart/Footer';
import { siteConfig } from '../data/fineart/config';
import './FineArtTemplate.css';

export default function FineArtTemplate() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalStatus, setModalStatus] = useState('idle'); // idle | loading | success

  // Track mouse coordinates for the custom cursor
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Listen to hover states on dynamic gallery components
  useEffect(() => {
    const handleMouseOver = (e) => {
      const isImg = e.target.closest('a[href*="#collections-"]') || 
                    e.target.closest('.group') || 
                    e.target.closest('[class*="bg-cover"]');
      if (isImg) {
        setIsHoveringImage(true);
      } else {
        setIsHoveringImage(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  const handleCtaClick = (seriesName) => {
    setSelectedSeries(seriesName);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setModalStatus('loading');
    setTimeout(() => {
      setModalStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setModalStatus('idle');
        setName('');
        setEmail('');
        setMessage('');
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fineart-body min-h-screen relative select-none">
      
      {/* Custom Circular Hover Cursor */}
      <AnimatePresence>
        {isHoveringImage && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="fineart-custom-cursor hidden md:flex"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          >
            View
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Collections Grid */}
      <CollectionsGrid />

      {/* 4. Feature Work Blocks (Dynamic alternating layout) */}
      {siteConfig.featureBlocks.map((block, idx) => (
        <FeatureBlock
          key={block.id}
          id={block.id}
          title={block.title}
          label={block.eyebrow}
          description={block.description}
          image={block.image}
          ctaText={block.ctaText}
          reverse={block.reverse}
          theme={block.theme}
          onCtaClick={() => handleCtaClick(block.title)}
        />
      ))}

      {/* 5. Newsletter / Update dispatcher */}
      <Newsletter />

      {/* 6. Footer */}
      <Footer />

      {/* 7. Studio Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-[#121212] border border-white/10 p-8 md:p-10 rounded-2xl w-full max-w-md shadow-2xl relative text-[#f5f4f1]"
            >
              {/* Close button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>

              <h3 className="text-2xl font-serif tracking-wider font-light mb-2">Studio Inquiry</h3>
              <p className="text-xs text-neutral-400 font-sans tracking-wide mb-6">Regarding: <span className="text-[#f5f4f1] font-medium">{selectedSeries}</span></p>

              {modalStatus === 'success' ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-xl">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h4 className="text-lg font-serif font-light text-green-400">Inquiry Sent</h4>
                  <p className="text-xs text-neutral-400 max-w-xs font-sans leading-relaxed">Thank you. The studio director will contact you regarding the print availability shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-5">
                  <div className="relative group">
                    <input 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name" 
                      className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-[#f5f4f1] focus:outline-none focus:border-white transition-colors duration-300 font-sans"
                    />
                  </div>

                  <div className="relative group">
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address" 
                      className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-[#f5f4f1] focus:outline-none focus:border-white transition-colors duration-300 font-sans"
                    />
                  </div>

                  <div className="relative group">
                    <textarea 
                      required 
                      rows="3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Inquiry message details (e.g. edition print sizes, shipping details)..." 
                      className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-[#f5f4f1] focus:outline-none focus:border-white transition-colors duration-300 font-sans resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={modalStatus === 'loading'}
                      className="w-full py-3 rounded-full bg-[#f5f4f1] text-[#0a0a0a] border border-[#f5f4f1] hover:bg-transparent hover:text-[#f5f4f1] text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-500"
                    >
                      {modalStatus === 'loading' ? 'Submitting...' : 'Send Inquiry'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
