import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Globe, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  // Landmark direction slides
  const eiffelVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -60, y: -40 },
    show: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } }
  };

  const pyramidVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 60, y: -40 },
    show: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 } }
  };

  const bigBenVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -60, y: 40 },
    show: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 } }
  };

  const libertyVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 60, y: 40 },
    show: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.7 } }
  };

  const travelerVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 } }
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center pt-24 pb-20 overflow-hidden text-white z-10"
    >
      {/* Drifting Diagonal Airplane Graphic */}
      <motion.div
        animate={{ 
          x: [-30, 30, -30], 
          y: [-15, 15, -15],
          rotate: [12, 18, 12]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="absolute top-[15%] right-[10%] opacity-15 pointer-events-none select-none z-1"
      >
        <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
          <path d="M210 50L135 15L145 45L40 38L10 60L40 72L145 65L135 95L210 50Z" />
        </svg>
      </motion.div>

      {/* Decorative gradient blur highlights */}
      <div className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/25 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-400/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading Copy */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 space-y-8 select-none text-left"
          >
            <div className="space-y-3">
              {/* Highlight Badge */}
              <motion.span
                variants={textItemVariants}
                className="inline-block px-4 py-1.5 rounded-full bg-[#FACC15] text-[#0F172A] text-xs font-black uppercase tracking-wider shadow-md"
              >
                🌎 Luxury & Adventure Tour Guide
              </motion.span>
              
              {/* Headline */}
              <div className="space-y-1">
                <motion.h1 
                  variants={textItemVariants}
                  className="font-sans font-light text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-none"
                >
                  Explore The Earth
                </motion.h1>
                
                {/* Script connector line */}
                <motion.div 
                  variants={textItemVariants}
                  className="font-script text-3xl sm:text-4xl text-[#FACC15] py-1 pl-4"
                >
                  For
                </motion.div>

                <motion.h1 
                  variants={textItemVariants}
                  className="font-sans font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase leading-none"
                >
                  Beyond Limits
                </motion.h1>
              </div>
            </div>

            {/* Subtext */}
            <motion.p
              variants={textItemVariants}
              className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-xl font-medium"
            >
              We curate custom travel packages to iconic landmarks and remote natural wonders. Experience expert guides, fully coordinate bookings, and 24/7 service.
            </motion.p>

            {/* Actions */}
            <motion.div 
              variants={textItemVariants} 
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert('Booking panel opened')}
                className="bg-[#FACC15] hover:bg-yellow-400 text-[#0F172A] text-xs font-black uppercase tracking-wider py-4 px-8 rounded-full shadow-lg flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Book Your Adventure</span>
                <ArrowRight className="w-4 h-4 text-[#0F172A]" />
              </motion.button>
              
              {/* Contact line */}
              <div className="space-y-1 text-slate-200">
                <a href="tel:+18005550199" className="flex items-center gap-1.5 text-xs font-semibold hover:text-[#FACC15] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>+1 (800) 555-0199</span>
                </a>
                <a href="https://exploria.com" className="flex items-center gap-1.5 text-[10px] tracking-wide font-medium hover:text-[#FACC15] transition-colors">
                  <Globe className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>WWW.EXPLORIA.COM</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Overlapping Landmark Collage */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[480px] w-full flex items-center justify-center select-none">
            
            {/* 1. Central Lifestyle Traveler Photo */}
            <motion.div
              variants={travelerVariants}
              initial="hidden"
              animate="show"
              className="relative w-[50%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80"
                alt="Traveler taking a selfie with map passport"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 2. Eiffel Tower (Paris) - Top Left */}
            <motion.div
              variants={eiffelVariants}
              initial="hidden"
              animate="show"
              className="absolute top-[5%] left-[5%] w-[26%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 hover:scale-105 transition-transform duration-300 z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80"
                alt="Eiffel Tower Paris"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 3. Pyramids (Giza) - Top Right */}
            <motion.div
              variants={pyramidVariants}
              initial="hidden"
              animate="show"
              className="absolute top-[5%] right-[5%] w-[28%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 hover:scale-105 transition-transform duration-300 z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=300&q=80"
                alt="Pyramids of Egypt"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 4. Big Ben (London) - Bottom Left */}
            <motion.div
              variants={bigBenVariants}
              initial="hidden"
              animate="show"
              className="absolute bottom-[5%] left-[5%] w-[28%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 hover:scale-105 transition-transform duration-300 z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&w=300&q=80"
                alt="Big Ben London"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 5. Statue of Liberty - Bottom Right */}
            <motion.div
              variants={libertyVariants}
              initial="hidden"
              animate="show"
              className="absolute bottom-[5%] right-[5%] w-[26%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 hover:scale-105 transition-transform duration-300 z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80"
                alt="Statue of Liberty New York"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
