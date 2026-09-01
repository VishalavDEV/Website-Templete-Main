import React from 'react';
import { motion } from 'framer-motion';
import { educationList } from '../data/directorData';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono-meta text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-2">
            ACT VI / EDUCATION
          </span>
          <h2 className="font-serif-title text-4xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight">
            Learning the Language of Film
          </h2>
          <div className="w-16 h-[1.5px] bg-neutral-900 mt-4" />
        </div>

        {/* SCREENPLAY-INSPIRED ACADEMIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 bg-neutral-50/80 border border-neutral-200 hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-4">
                  <span className="font-mono-meta text-xs tracking-widest text-amber-700 font-bold uppercase">
                    {edu.period}
                  </span>
                  <GraduationCap className="w-5 h-5 text-neutral-900" />
                </div>

                <h3 className="font-serif-title text-2xl font-normal text-neutral-950 uppercase mb-2">
                  {edu.degree}
                </h3>

                <p className="font-mono-meta text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                  {edu.institution}
                </p>
                
                <span className="font-mono-meta text-[10px] text-neutral-500 uppercase tracking-widest block mb-4">
                  {edu.institutionType}
                </span>

                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {edu.focus}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200 font-mono-meta text-[9px] text-neutral-400 uppercase tracking-widest text-right">
                ACADEMIC DOSSIER 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
