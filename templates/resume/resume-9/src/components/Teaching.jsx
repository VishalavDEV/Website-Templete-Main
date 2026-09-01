import React from 'react';
import { motion } from 'framer-motion';
import { teachingData } from '../data/researchData';
import { Mic, MapPin, Calendar, Sparkles } from 'lucide-react';

export default function Teaching() {
  return (
    <section id="teaching" className="py-24 bg-[#FAFAFA] border-b border-[#E6E6E0] relative">
      
      {/* MARGIN ANNOTATION */}
      <div className="hidden lg:block absolute right-8 top-28 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-r border-[#E6E6E0] pr-3 text-right">
        SEC 08 &bull; KEYNOTE PRESENTATIONS & METHODOLOGY WORKSHOPS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
              08 / TEACHING
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
              Sharing Ideas
            </h2>
          </div>
          <p className="text-sm text-[#6B7280] max-w-md font-light">
            Keynote presentations, academic lectures, and methodology workshops across international research assemblies.
          </p>
        </div>

        {/* EDITORIAL GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachingData.map((talk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#E6E6E0] p-8 shadow-paper hover:border-[#1E1B4B] transition-colors space-y-4 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs font-bold text-[#1E1B4B] bg-[#EEECF8] px-3 py-1">
                  {talk.year}
                </span>
                <span className="font-mono-tag text-[10px] text-[#4A6B5D] uppercase font-semibold">
                  {talk.type}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1E1B4B] group-hover:text-[#2A2F45]">
                "{talk.title}"
              </h3>

              <div className="flex items-center space-x-3 font-mono-tag text-xs text-[#6B7280]">
                <span className="font-semibold text-[#1E1B4B]">{talk.event}</span>
                <span>&bull;</span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#4A6B5D]" />
                  <span>{talk.location}</span>
                </span>
              </div>

              <p className="text-xs text-[#4B5563] leading-relaxed font-light pt-2 border-t border-[#E6E6E0]">
                {talk.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* MANDATORY DISCLAIMER NOTE */}
        <div className="mt-8 text-center">
          <p className="font-mono-tag text-xs text-[#9CA3AF] italic">
            *All talks and events are fictional demonstration content.
          </p>
        </div>

      </div>
    </section>
  );
}
