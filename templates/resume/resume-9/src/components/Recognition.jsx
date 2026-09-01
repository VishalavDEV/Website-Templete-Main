import React from 'react';
import { motion } from 'framer-motion';
import { recognitionData } from '../data/researchData';
import { Award, Star } from 'lucide-react';

export default function Recognition() {
  return (
    <section id="recognition" className="py-24 bg-white border-b border-[#E6E6E0] relative">
      
      {/* MARGIN ANNOTATION */}
      <div className="hidden lg:block absolute left-8 top-28 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-l border-[#E6E6E0] pl-3">
        SEC 09 &bull; ACADEMIC HONORS & INQUIRY AWARDS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 space-y-2">
          <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
            09 / RECOGNITION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
            Recognition
          </h2>
          <p className="text-base text-[#6B7280] max-w-xl font-light">
            Honors and research communication awards granted by fictional academic assemblies and collectives.
          </p>
        </div>

        {/* MINIMAL ELEGANT LIST */}
        <div className="divide-y divide-[#E6E6E0] border-t border-b border-[#E6E6E0]">
          {recognitionData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAFAFA] transition-colors px-4 group"
            >
              <div className="flex items-start space-x-6">
                <span className="font-mono-tag text-lg font-bold text-[#1E1B4B] bg-[#FAFAFA] px-3 py-1 border border-[#E6E6E0] group-hover:bg-[#1E1B4B] group-hover:text-white transition-colors">
                  {item.year}
                </span>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#1E1B4B]">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2 font-mono-tag text-xs text-[#4A6B5D]">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.organization}</span>
                    <span className="text-[#9CA3AF] text-[10px]">({item.type})</span>
                  </div>
                  <p className="text-xs text-[#6B7280] pt-1 max-w-2xl font-light">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase border border-[#E6E6E0] px-2.5 py-1">
                  HONOR 0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MANDATORY DISCLAIMER NOTE */}
        <div className="mt-8 text-center">
          <p className="font-mono-tag text-xs text-[#9CA3AF] italic">
            *All recognition and organizations displayed are fictional demonstration content.
          </p>
        </div>

      </div>
    </section>
  );
}
