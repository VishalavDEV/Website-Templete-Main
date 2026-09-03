import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section 
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
    >
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Layered dark gradients for rich contrast & readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        
        {/* Eyebrow Flourish: "— ABOUT ME —" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
        >
          <span className="h-[2px] w-8 sm:w-12 bg-[#e74c3c]" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gray-300 uppercase">
            ABOUT ME
          </span>
          <span className="h-[2px] w-8 sm:w-12 bg-[#e74c3c]" />
        </motion.div>

        {/* Grand Hero Title: "Photographer" */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight select-none"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Photographer
        </motion.h1>

        {/* Short Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          I am a professional visual artist and documentary photographer dedicated to capturing timeless emotion, natural light, and authentic human narratives.
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            id="hero-cta-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase text-white bg-[#e74c3c] hover:bg-[#d63031] shadow-xl shadow-[#e74c3c]/30 hover:shadow-[#e74c3c]/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Explore Portfolio</span>
          </a>

          <a
            href="#story"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>My Story</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase text-white bg-white/5 hover:bg-[#e74c3c] border border-white/10 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#e74c3c] group-hover:text-white" />
            <span>Book Shoot</span>
          </button>
        </motion.div>

      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer text-gray-400 hover:text-white transition-colors group select-none"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById('features');
          if (target && target.offsetHeight > 0) {
            target.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
      >
        <span className="text-[11px] font-semibold tracking-widest uppercase mb-1 text-gray-400 group-hover:text-[#e74c3c] transition-colors">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#e74c3c]" />
        </motion.div>
      </motion.a>
    </section>
  );
}
