import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Activity, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onOpenPathModal }) {
  const words = "Train for the life you want to live.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden bg-[#F3F0E8]">
      {/* Abstract Background Organic Circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#D8D4C8]/40 blur-3xl pointer-events-none animate-breathing" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#3E5142]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 z-10 flex flex-col items-start">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8D4C8]/50 border border-[#171816]/10 text-xs font-semibold uppercase tracking-widest text-[#171816]/80 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#B56F4D] animate-pulse" />
            PERSONALIZED WELLNESS COACHING
          </motion.div>

          {/* Main Heading with Staggered Word Reveal */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-heading font-extrabold tracking-tight text-[#171816] leading-[1.05] mb-8"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-3">
                {word === "life" ? (
                  <span className="editorial-italic font-normal text-[#B56F4D] px-1">
                    life
                  </span>
                ) : word === "live." ? (
                  <span className="relative">
                    live.
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#3E5142]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-[#171816]/80 max-w-xl font-light leading-relaxed mb-10"
          >
            AURELIS brings movement, nutrition, recovery, and coaching together to help you build strength that lasts beyond the workout.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenPathModal}
              className="px-8 py-4 bg-[#171816] text-[#F3F0E8] rounded-full font-medium tracking-wide uppercase text-xs hover:bg-[#3E5142] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
            >
              <span>Find your path</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="#method"
              className="px-8 py-4 border border-[#171816]/30 text-[#171816] rounded-full font-medium tracking-wide uppercase text-xs hover:bg-[#D8D4C8]/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Compass className="w-4 h-4 text-[#B56F4D] transition-transform duration-300 group-hover:rotate-45" />
              <span>Explore the method</span>
            </a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 pt-8 border-t border-[#D8D4C8]/70 grid grid-cols-3 gap-6 text-xs text-[#171816]/70"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#3E5142]" />
              <span>Sustainable Habits</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#B56F4D]" />
              <span>Biometric Recovery</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#171816]" />
              <span>Human Coaching</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Layered Vertical Kinetic Visual Composition */}
        <div className="lg:col-span-5 relative flex justify-center items-center min-h-[480px] sm:min-h-[580px]">
          {/* Circular SVG Progress Ring Line drawing slowly */}
          <svg className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] pointer-events-none text-[#171816]/10" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="290"
              initial={{ strokeDashoffset: 290 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#B56F4D"
              strokeWidth="1.5"
              strokeDasharray="290"
              initial={{ strokeDashoffset: 290 }}
              animate={{ strokeDashoffset: 200 }}
              transition={{ duration: 3, delay: 1, ease: 'easeOut' }}
            />
          </svg>

          {/* Main Primary Vertical Portrait Card (Outdoor Movement) */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative z-20 w-64 sm:w-72 h-88 sm:h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F3F0E8]"
          >
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
              alt="Outdoor movement habit"
              className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171816]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-[#F3F0E8]">
              <span className="text-[10px] uppercase tracking-widest text-[#B56F4D] font-mono">MOVEMENT MOMENT 01</span>
              <p className="text-sm font-semibold font-heading">Intentional Strength</p>
            </div>
          </motion.div>

          {/* Top-Right Secondary Floating Card (Recovery) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="absolute top-2 sm:top-6 -right-2 sm:right-0 z-30 w-44 sm:w-52 h-56 rounded-2xl overflow-hidden shadow-xl border-2 border-[#F3F0E8] animate-float-slow"
          >
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
              alt="Serene recovery and breathwork"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171816]/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-[#F3F0E8]">
              <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-mono">RECOVERY</span>
              <p className="text-xs font-medium">Parasympathetic Reset</p>
            </div>
          </motion.div>

          {/* Bottom-Left Secondary Floating Card (Nutrition) */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="absolute bottom-0 -left-2 sm:left-2 z-30 w-40 sm:w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-[#F3F0E8]"
          >
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
              alt="Wholesome nutrition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171816]/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-[#F3F0E8]">
              <span className="text-[9px] uppercase tracking-widest text-amber-300 font-mono">FUEL</span>
              <p className="text-xs font-medium">Sustained Vitality</p>
            </div>
          </motion.div>

          {/* Floating Live Badge: Coaching Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute top-1/2 -left-6 z-40 bg-[#171816] text-[#F3F0E8] px-4 py-2.5 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-full bg-[#3E5142] flex items-center justify-center text-xs font-bold text-emerald-300 font-mono">
              94%
            </div>
            <div>
              <p className="text-[10px] uppercase text-[#D8D4C8]/70 tracking-widest font-mono">Weekly Consistency</p>
              <p className="text-xs font-semibold text-[#F3F0E8]">Habits Built to Last</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
