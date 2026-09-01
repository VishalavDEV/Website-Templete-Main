import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/researchData';
import { MapPin, Building, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#FAFAFA] border-b border-[#E6E6E0] relative">
      
      {/* MARGIN ANNOTATION */}
      <div className="hidden lg:block absolute right-8 top-28 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-r border-[#E6E6E0] pr-3 text-right">
        SEC 04 &bull; CHRONOLOGICAL ACADEMIC & RESEARCH APPOINTMENTS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 space-y-2">
          <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
            04 / EXPERIENCE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
            Professional Journey
          </h2>
          <p className="text-base text-[#6B7280] max-w-xl font-light">
            Research appointments across fictional behavioral inquiry centers, institutes, and academic collectives.
          </p>
        </div>

        {/* RESEARCH-PAPER INSPIRED TIMELINE LAYOUT */}
        <div className="space-y-16 relative">
          
          {/* CENTER DIVISION LINE FOR DESKTOP */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#E6E6E0]" />

          {experienceData.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                
                {/* NODE INDICATOR */}
                <div className="hidden lg:flex absolute left-1/2 top-4 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-[#1E1B4B] items-center justify-center z-10">
                  <span className="w-2 h-2 rounded-full bg-[#4A6B5D]" />
                </div>

                {/* LEFT OR RIGHT COLUMN DEPENDING ON INDEX */}
                <div className={`lg:col-span-6 ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:col-start-7 lg:pl-12'}`}>
                  
                  <div className="bg-white border border-[#E6E6E0] p-8 shadow-paper space-y-6 hover:border-[#1E1B4B] transition-colors relative">
                    
                    {/* TOP DATES & ROLE */}
                    <div>
                      <span className="font-serif text-3xl font-bold text-[#1E1B4B] block mb-1">
                        {exp.period}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#2A2F45]">
                        {exp.role}
                      </h3>
                      <div className={`flex items-center space-x-3 mt-2 text-xs font-mono-tag text-[#4A6B5D] ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className="flex items-center space-x-1">
                          <Building className="w-3.5 h-3.5" />
                          <span>{exp.organization}</span>
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* SUMMARY */}
                    <p className="text-xs text-[#6B7280] leading-relaxed italic bg-[#FAFAFA] p-3 border-l-2 border-[#1E1B4B]">
                      {exp.summary}
                    </p>

                    {/* RESPONSIBILITIES LIST */}
                    <div className="space-y-3 pt-2">
                      <span className={`font-mono-tag text-[10px] text-[#9CA3AF] uppercase tracking-wider block ${isLeft ? 'lg:text-right' : ''}`}>
                        FICTIONAL RESEARCH RESPONSIBILITIES
                      </span>
                      <ul className="space-y-2 text-left">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-[#4B5563]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4A6B5D] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ORGANIZATION TAG */}
                    <div className={`pt-4 border-t border-[#E6E6E0] font-mono-tag text-[10px] text-[#9CA3AF] ${isLeft ? 'lg:text-right' : ''}`}>
                      *{exp.type} (Demonstration Data)
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
