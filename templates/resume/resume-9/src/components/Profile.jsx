import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/researchData';
import { BookOpen, Activity, Mic, Layers, Shield } from 'lucide-react';

export default function Profile() {
  const iconMap = {
    "11+": BookOpen,
    "32": Activity,
    "18": Mic,
    "14": Layers
  };

  return (
    <section id="profile" className="py-24 bg-[#FAFAFA] border-b border-[#E6E6E0] relative">
      
      {/* MARGIN NOTE */}
      <div className="hidden lg:block absolute left-8 top-28 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-l border-[#E6E6E0] pl-3">
        SEC 01 &bull; PROFESSIONAL BIOGRAPHY & ETHICAL FRAMEWORK
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 space-y-2">
          <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
            01 / PROFILE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
            Researching the Human Side of Complexity
          </h2>
        </div>

        {/* TWO-COLUMN EDITORIAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: PULL QUOTE & HIGHLIGHTS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 border border-[#E6E6E0] shadow-paper relative">
              <span className="absolute -top-3 left-6 bg-[#EEECF8] text-[#1E1B4B] font-mono-tag text-[10px] px-2.5 py-0.5 uppercase tracking-wider font-medium">
                PULL QUOTE
              </span>
              <blockquote className="font-serif text-2xl sm:text-3xl italic text-[#1E1B4B] leading-snug">
                "{profileData.pullQuote}"
              </blockquote>
              <p className="mt-4 font-mono-tag text-xs text-[#6B7280]">
                &mdash; Dr. Mira Ellison, Behavioral Inquiry Notes
              </p>
            </div>

            {/* ETHICAL RESEARCH ETHOS CARD */}
            <div className="p-6 bg-[#F5F3EF] border border-[#E6E6E0] space-y-3">
              <div className="flex items-center space-x-2 text-[#4A6B5D]">
                <Shield className="w-4 h-4" />
                <span className="font-mono-tag text-xs uppercase font-semibold tracking-wider">
                  Ethical Research Ethos
                </span>
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed font-light">
                Every behavioral study strictly respects participant agency, transparent data management, and psychological safety. All research models are subjected to rigorous peer review and ethical alignment checks.
              </p>
            </div>
          </div>

          {/* RIGHT: PROFESSIONAL BIOGRAPHY */}
          <div className="lg:col-span-7 space-y-6 text-[#1E1B4B]">
            {profileData.biography.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed text-[#4B5563] font-light">
                {paragraph}
              </p>
            ))}
          </div>

        </div>

        {/* PROFILE SNAPSHOT METRICS BAR */}
        <div className="mt-20 pt-12 border-t border-[#E6E6E0]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-xl font-bold text-[#1E1B4B]">
              Profile Snapshot & Key Metrics
            </h3>
            <span className="font-mono-tag text-[11px] text-[#6B7280] bg-[#EEECF8] px-3 py-1 rounded-full">
              Fictional Demonstration Metrics
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {profileData.metrics.map((metric, idx) => {
              const IconComp = iconMap[metric.value] || BookOpen;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="bg-white p-6 border border-[#E6E6E0] shadow-paper space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase tracking-wider">
                      0{idx + 1}
                    </span>
                    <IconComp className="w-4 h-4 text-[#4A6B5D] group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
                    {metric.value}
                  </div>

                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#1E1B4B]">
                      {metric.label}
                    </h4>
                    <p className="font-mono-tag text-[11px] text-[#6B7280] mt-0.5">
                      {metric.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* REQUIRED DISCLAIMER NOTE */}
          <div className="mt-6 text-center">
            <p className="font-mono-tag text-xs text-[#9CA3AF] italic">
              *{profileData.disclaimerNote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
