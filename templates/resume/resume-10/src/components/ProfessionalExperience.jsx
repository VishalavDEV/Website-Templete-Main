import React from 'react';
import { motion } from 'framer-motion';
import { careerExperience } from '../data/directorData';
import { Building2, Calendar, MapPin, Film } from 'lucide-react';

const ProfessionalExperience = () => {
  return (
    <section id="career" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono-meta text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-2">
            ACT IV / CAREER
          </span>
          <h2 className="font-serif-title text-4xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight">
            Professional Journey
          </h2>
          <div className="w-16 h-[1.5px] bg-neutral-900 mt-4" />
        </div>

        {/* FILM-CREDIT STYLE VERTICAL TIMELINE */}
        <div className="relative border-l border-neutral-300 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-16">
          {careerExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 bg-white border-2 border-neutral-900 group-hover:bg-neutral-900 transition-colors" />

              <div className="p-8 bg-neutral-50/70 border border-neutral-200 hover:border-neutral-900 transition-colors duration-300">
                {/* Header Credits Block */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-6 mb-6">
                  <div>
                    <span className="font-mono-meta text-xs tracking-[0.25em] text-amber-700 font-bold uppercase block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="font-serif-title text-2xl sm:text-4xl font-normal text-neutral-950 uppercase">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="md:text-right font-mono-meta text-xs text-neutral-600">
                    <div className="font-bold text-neutral-900 uppercase flex items-center md:justify-end gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="text-[10px] text-neutral-500 uppercase mt-0.5">
                      {exp.companyType} • {exp.location}
                    </div>
                  </div>
                </div>

                {/* Key Contributions as Film Credits */}
                <div>
                  <div className="font-mono-meta text-xs tracking-widest text-neutral-400 uppercase mb-3">
                    DIRECTORIAL CONTRIBUTIONS:
                  </div>
                  <ul className="space-y-2.5">
                    {exp.contributions.map((contribution, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-3 text-sm text-neutral-700 font-light">
                        <span className="font-mono-meta text-xs text-neutral-400 mt-0.5">•</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProfessionalExperience;
