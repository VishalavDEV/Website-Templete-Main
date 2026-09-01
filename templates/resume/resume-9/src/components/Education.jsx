import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/researchData';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white border-b border-[#E6E6E0] relative">
      
      {/* MARGIN ANNOTATION */}
      <div className="hidden lg:block absolute left-8 top-28 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-l border-[#E6E6E0] pl-3">
        SEC 07 &bull; HIGHER EDUCATION & ACADEMIC CREDENTIALS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 space-y-2">
          <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
            07 / EDUCATION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
            Academic Foundation
          </h2>
          <p className="text-base text-[#6B7280] max-w-xl font-light">
            Academic degrees and doctoral inquiry in behavioral science and cognitive studies. All universities and institutes listed are fictional demonstration entities.
          </p>
        </div>

        {/* TIMELINE GRID */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FAFAFA] border border-[#E6E6E0] p-8 shadow-paper hover:border-[#1E1B4B] transition-colors relative group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[#4A6B5D]">
                    <GraduationCap className="w-5 h-5" />
                    <span className="font-mono-tag text-xs font-semibold uppercase">
                      0{idx + 1} &bull; DEGREE PROGRAM
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B4B]">
                    {edu.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 font-mono-tag text-xs text-[#6B7280]">
                    <span className="font-semibold text-[#2A2F45]">
                      {edu.institution}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </span>
                  </div>

                  {/* DISSERTATION / THESIS DETAILS */}
                  {edu.dissertation && (
                    <p className="text-xs text-[#4B5563] bg-white p-3 border-l-2 border-[#1E1B4B] italic">
                      {edu.dissertation}
                    </p>
                  )}

                  {edu.thesis && (
                    <p className="text-xs text-[#4B5563] bg-white p-3 border-l-2 border-[#4A6B5D] italic">
                      {edu.thesis}
                    </p>
                  )}

                  {edu.focus && (
                    <p className="text-xs text-[#6B7280] italic">
                      {edu.focus}
                    </p>
                  )}
                </div>

                {/* DATES & TYPE TAG */}
                <div className="md:text-right shrink-0 space-y-2">
                  <span className="inline-flex items-center space-x-1.5 font-serif text-xl font-bold text-[#1E1B4B] bg-white px-4 py-2 border border-[#E6E6E0]">
                    <Calendar className="w-4 h-4 text-[#4A6B5D]" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="font-mono-tag text-[10px] text-[#9CA3AF] block">
                    *{edu.type}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
