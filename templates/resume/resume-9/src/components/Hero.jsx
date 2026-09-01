import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPin, Award, Compass } from 'lucide-react';
import { profileData } from '../data/researchData';

export default function Hero({ onOpenCV }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FFFFFF] border-b border-[#E6E6E0] overflow-hidden">
      
      {/* BACKGROUND ABSTRACT GEOMETRIC LINES */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#E6E6E0" strokeDasharray="4 4" strokeWidth="1" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#E6E6E0" strokeDasharray="4 4" strokeWidth="1" />
          <circle cx="85%" cy="30%" r="240" stroke="#EEECF8" strokeWidth="1" fill="none" />
          <circle cx="85%" cy="30%" r="360" stroke="#E8EFEB" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT EDITORIAL COLUMN */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* TOP LABEL */}
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#4A6B5D]" />
              <span className="font-mono-tag text-xs tracking-widest text-[#6B7280] uppercase">
                BEHAVIORAL RESEARCHER &bull; HUMAN BEHAVIOR & DECISION STUDIES
              </span>
            </motion.div>

            {/* MAIN HEADLINE */}
            <motion.div variants={itemVariants}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1E1B4B] leading-[1.05]">
                MIRA <br />
                <span className="font-italic font-normal italic text-[#2A2F45]">ELLISON</span>
              </h1>
            </motion.div>

            {/* TAGLINE */}
            <motion.div variants={itemVariants} className="pl-4 border-l-2 border-[#1E1B4B]">
              <p className="font-serif text-xl sm:text-2xl italic text-[#1E1B4B]/90 font-medium">
                "{profileData.taglineShort}"
              </p>
            </motion.div>

            {/* SHORT INTRODUCTION */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-xl font-light">
                {profileData.introduction}
              </p>
            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#research"
                className="inline-flex items-center space-x-3 bg-[#1E1B4B] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2F45] transition-all duration-200 shadow-sm group"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center space-x-2 border border-[#E6E6E0] bg-[#FAFAFA] hover:bg-white text-[#1E1B4B] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider hover:border-[#1E1B4B] transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-[#6B7280]" />
                <span>Download CV</span>
              </button>
            </motion.div>

            {/* METADATA STRIP BELOW */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-[#E6E6E0] grid grid-cols-3 gap-4 max-w-xl"
            >
              <div>
                <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase block mb-1">
                  LOCATION
                </span>
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#1E1B4B]">
                  <MapPin className="w-3.5 h-3.5 text-[#4A6B5D]" />
                  <span>{profileData.location}</span>
                </div>
              </div>

              <div>
                <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase block mb-1">
                  EXPERIENCE
                </span>
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#1E1B4B]">
                  <Award className="w-3.5 h-3.5 text-[#2A2F45]" />
                  <span>{profileData.experienceYears} Years</span>
                </div>
              </div>

              <div>
                <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase block mb-1">
                  FOCUS
                </span>
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#1E1B4B]">
                  <Compass className="w-3.5 h-3.5 text-[#4A6B5D]" />
                  <span>Behavior & Decision</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT EDITORIAL PORTRAIT COLUMN */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* ABSTRACT CIRCULAR & FINE LINE ELEMENTS */}
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border border-[#EEECF8] pointer-events-none" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border border-[#E8EFEB] pointer-events-none" />
              
              {/* MAIN PORTRAIT CONTAINER */}
              <div className="relative bg-[#F5F3EF] p-3 sm:p-4 rounded-sm border border-[#E6E6E0] shadow-paper">
                <div className="overflow-hidden aspect-[4/5] bg-[#E6E6E0] relative group">
                  <img
                    src={profileData.portraitUrl}
                    alt="Dr. Mira Ellison - Fictional Behavioral Researcher"
                    className="w-full h-full object-cover object-center filter grayscale-[10%] contrast-[102%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/30 via-transparent to-transparent opacity-60" />
                  
                  {/* FLOATING MARGIN NOTE ON PORTRAIT */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 border border-[#E6E6E0] shadow-sm">
                    <span className="font-mono-tag text-[9px] text-[#6B7280] uppercase tracking-wider block">
                      FIG 0.1 &bull; RESEARCHER PROFILE
                    </span>
                    <p className="font-serif text-xs italic text-[#1E1B4B] mt-0.5">
                      Fictional AI-generated researcher portrait &bull; Amsterdam Studio
                    </p>
                  </div>
                </div>
              </div>

              {/* CORNER DECORATION METADATA */}
              <div className="absolute -bottom-4 right-6 bg-[#1E1B4B] text-white px-3 py-1.5 text-[10px] font-mono-tag tracking-wider shadow-md">
                DEMONSTRATION PROFILE
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
