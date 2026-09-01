import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Clapperboard, MapPin, Award, Film } from 'lucide-react';
import { directorProfile } from '../data/directorData';

const HeroSection = ({ onOpenCV }) => {
  return (
    <section id="profile" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-white overflow-hidden border-b border-neutral-200">
      {/* Light Leak Background Effect */}
      <div className="light-leak-effect top-10 -right-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Editorial Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2.5 font-mono-meta text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4 border-b border-neutral-300 pb-1">
                <Clapperboard className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                <span>{directorProfile.title}</span>
              </div>

              {/* Large Name Heading */}
              <h1 className="font-serif-title text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-neutral-950 uppercase leading-[0.92] mb-6">
                ELIAS<br />ROWAN
              </h1>

              {/* Large Tagline */}
              <div className="relative pl-4 sm:pl-6 border-l-2 border-neutral-900 my-6">
                <p className="font-serif-title italic text-xl sm:text-2xl lg:text-3xl text-neutral-900 leading-snug">
                  "{directorProfile.tagline}"
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed mb-8 font-light">
                {directorProfile.shortBio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#films"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-neutral-950 text-white font-mono-meta text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-200 shadow-sm group w-full sm:w-auto text-center"
                >
                  <span>View Selected Films</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>

                <button
                  onClick={onOpenCV}
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-transparent text-neutral-900 border border-neutral-900 font-mono-meta text-xs tracking-[0.2em] uppercase hover:bg-neutral-900 hover:text-white transition-all duration-200 w-full sm:w-auto text-center"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>

            {/* Bottom Meta Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
              <div>
                <span className="block font-mono-meta text-[10px] tracking-[0.2em] text-neutral-400 uppercase mb-1">
                  BASED IN
                </span>
                <span className="font-serif-title font-medium text-base sm:text-lg text-neutral-900">
                  {directorProfile.location}
                </span>
              </div>

              <div>
                <span className="block font-mono-meta text-[10px] tracking-[0.2em] text-neutral-400 uppercase mb-1">
                  EXPERIENCE
                </span>
                <span className="font-serif-title font-medium text-base sm:text-lg text-neutral-900">
                  {directorProfile.experienceYears}
                </span>
              </div>

              <div>
                <span className="block font-mono-meta text-[10px] tracking-[0.2em] text-neutral-400 uppercase mb-1">
                  FOCUS
                </span>
                <span className="font-serif-title font-medium text-base sm:text-lg text-neutral-900">
                  Narrative Film
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: AI Director Portrait & Production Metadata Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative group overflow-hidden border border-neutral-200 bg-neutral-100 shadow-md">
              {/* Image Container with Crisp Aspect Ratio */}
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/assets/director_portrait.jpg"
                  alt="Director Elias Rowan Portrait"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-102"
                />
              </div>

              {/* Film Frame Corner Reticles */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/80" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/80" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/80" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/80" />

              {/* HUD Production Metadata Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 bg-neutral-950/90 backdrop-blur-sm text-white font-mono-meta text-[11px] tracking-wider border border-white/15">
                <div className="flex items-center justify-between border-b border-neutral-700/80 pb-2 mb-2">
                  <span className="text-neutral-400">DIRECTOR PROFILE</span>
                  <span className="text-amber-400 font-bold">{directorProfile.idCode}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-300">
                  <div>
                    <span className="text-neutral-500">STATUS / </span>
                    <span className="text-emerald-400">{directorProfile.status}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-neutral-500">FOCUS / </span>
                    <span>{directorProfile.currentFocus}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Caption */}
            <p className="mt-3 font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest text-right">
              FIG 01. — ELIAS ROWAN ON SET (FICTIONAL ARCHIVE)
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
