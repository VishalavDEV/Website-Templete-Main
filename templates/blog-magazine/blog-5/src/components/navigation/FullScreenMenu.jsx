import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useZMag } from '../../context/ZMagContext';
import { X, ArrowUpRight, Sparkles, Globe, Search, BookMarked } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FullScreenMenu() {
  const { isMenuOpen, setIsMenuOpen } = useZMag();
  const shouldReduceMotion = useReducedMotion();

  const [activeHoverImage, setActiveHoverImage] = useState(
    'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop'
  );

  const menuItems = [
    {
      title: 'Z-CULTURE',
      subtitle: 'Post-Digital Philosophy & Art',
      slug: '/category/z-culture',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
      count: '18 Folios',
    },
    {
      title: 'FUTURE TECH',
      subtitle: 'Neural Interfaces & Quantum Light',
      slug: '/category/future-tech',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
      count: '24 Articles',
    },
    {
      title: 'BIO-SPACES',
      subtitle: 'Mycelium & Sustainable Architecture',
      slug: '/category/bio-spaces',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
      count: '14 Monographs',
    },
    {
      title: 'HYPER-STYLE',
      subtitle: 'Avant-Garde Craft & Horology',
      slug: '/category/hyper-style',
      image: 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1000&auto=format&fit=crop',
      count: '19 Stories',
    },
    {
      title: 'AVANT-SOUND',
      subtitle: 'Acoustic Brutalism & Spatial Audio',
      slug: '/category/avant-sound',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
      count: '11 Recordings',
    },
  ];

  const overlayVariants = {
    closed: {
      opacity: 0,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
    open: {
      opacity: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          className="fixed inset-0 z-50 bg-[#FFFFFF] text-[#111827] flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-y-auto"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0055FF] animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055FF]">
                Z MAG &bull; SPATIAL NAVIGATION
              </span>
            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-3 rounded-full bg-[#F3F4F6] hover:bg-[#0055FF] hover:text-white transition-all cursor-pointer group shadow-sm"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-300" />
            </button>
          </div>

          {/* Main Menu Grid: Large Links on Left + Floating Interactive Photo on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-8">
            {/* Left Category Links */}
            <div className="lg:col-span-7 space-y-2 sm:space-y-4">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveHoverImage(item.image)}
                  className="group relative"
                >
                  <Link
                    to={item.slug}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-baseline justify-between py-2 border-b border-[#F3F4F6] group-hover:border-[#0055FF] transition-colors"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-[#9CA3AF] group-hover:text-[#0055FF] transition-colors font-bold">
                        0{idx + 1}
                      </span>
                      <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#111827] group-hover:text-[#0055FF] group-hover:translate-x-3 transition-all duration-300">
                        {item.title}
                      </h2>
                    </div>

                    <div className="hidden sm:flex items-center gap-2">
                      <span className="font-mono text-xs text-[#6B7280] group-hover:text-[#111827]">
                        {item.count}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#0055FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right: Floating Light-Mode Preview Card with Glass Edge */}
            <div className="hidden lg:block lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 p-2 bg-gradient-to-br from-white/90 to-[#EBF4FF]/80 backdrop-blur-xl"
              >
                <img
                  src={activeHoverImage}
                  alt="Z MAG Preview"
                  className="w-full h-full object-cover rounded-xl transition-all duration-700 ease-out"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/80 shadow-md">
                  <span className="font-mono text-[0.65rem] font-bold text-[#0055FF] uppercase tracking-wider block">
                    ✦ Curated Visual Folio
                  </span>
                  <span className="font-heading text-xs font-bold text-[#111827] block">
                    Spatial Photography & Interactive Editorial
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Coordinates & Fast Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E5E7EB] text-xs font-mono text-[#6B7280]">
            <div className="flex items-center gap-6">
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#0055FF] transition-colors font-bold uppercase"
              >
                About & Manifesto
              </Link>
              <Link
                to="/contributors"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#0055FF] transition-colors font-bold uppercase"
              >
                Contributors
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#0055FF] transition-colors font-bold uppercase"
              >
                Direct Wire
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <span>Z MAG &bull; VOL. 2026</span>
              <span>&bull;</span>
              <span>PARIS &bull; TOKYO &bull; NEW YORK</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
