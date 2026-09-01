import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PlanTripForm from './PlanTripForm';
import TrackBookingForm from './TrackBookingForm';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Create parallax translations for bg and text
  const bgY = useTransform(scrollY, [0, 800], [0, 240]);
  const textY = useTransform(scrollY, [0, 800], [0, 150]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-[750px] md:min-h-[920px] flex items-center justify-center overflow-hidden z-10 pt-24"
    >
      {/* Background Parallax Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80"
          alt="Tropical Beach Palm Trees Resort Landscape"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-slate-50 z-1 pointer-events-none" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full z-2 text-center flex flex-col items-center select-none pt-12">
        <motion.div style={{ y: textY }} className="space-y-6 max-w-3xl mb-16">
          
          {/* Label Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-display text-[10px] tracking-widest font-extrabold uppercase shadow-sm"
          >
            🛡️ Best Price Guarantee
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight text-white uppercase"
          >
            We Provide <br />
            <span className="text-accent">Global Adventures</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="font-sans font-light text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Discover handpicked luxury packages, bespoke group expeditions, and cultural tours configured to create memories that endure.
          </motion.p>
        </motion.div>

        {/* Floating Plan & Track Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 flex flex-col lg:flex-row gap-8 relative z-20 text-left"
        >
          {/* Left half: PlanTripForm */}
          <div className="flex-1">
            <PlanTripForm />
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-slate-100 self-stretch" />

          {/* Right half: TrackBookingForm */}
          <div className="lg:w-[340px]">
            <TrackBookingForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
