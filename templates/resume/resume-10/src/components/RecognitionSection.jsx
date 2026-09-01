import React from 'react';
import { motion } from 'framer-motion';
import { awardsList } from '../data/directorData';
import { Award, Trophy, Star } from 'lucide-react';

const RecognitionSection = () => {
  return (
    <section id="recognition" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono-meta text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-2">
            ACT VIII / RECOGNITION
          </span>
          <h2 className="font-serif-title text-4xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight">
            Recognition
          </h2>
          <div className="w-16 h-[1.5px] bg-neutral-900 mt-4" />
        </div>

        {/* CLEAN CINEMATIC AWARDS LIST */}
        <div className="space-y-6 mb-16">
          {awardsList.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-6 md:p-8 bg-neutral-50/70 border border-neutral-200 hover:border-neutral-900 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-950 text-amber-400 shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono-meta text-xs tracking-widest text-amber-700 font-bold uppercase">
                      {award.year}
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="font-mono-meta text-xs text-neutral-500 uppercase tracking-wider">
                      PROJECT / {award.project}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl sm:text-3xl font-normal text-neutral-950 uppercase">
                    {award.award}
                  </h3>

                  <p className="font-mono-meta text-xs text-neutral-600 uppercase tracking-widest mt-1">
                    CONFERRED BY / {award.organization}
                  </p>
                </div>
              </div>

              <div className="font-mono-meta text-xs text-neutral-400 uppercase tracking-widest self-end md:self-center bg-white px-4 py-2 border border-neutral-200">
                HONOR 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center p-4 bg-neutral-50 border border-neutral-200 max-w-2xl mx-auto font-mono-meta text-[11px] text-neutral-500 uppercase tracking-widest">
          All awards and organizations displayed are fictional demonstration content.
        </div>

      </div>
    </section>
  );
};

export default RecognitionSection;
