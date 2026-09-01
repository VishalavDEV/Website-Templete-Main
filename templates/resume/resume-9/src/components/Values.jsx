import React from 'react';
import { motion } from 'framer-motion';
import { valuesData } from '../data/researchData';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';

export default function Values() {
  const iconMap = {
    Compass: Compass,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck
  };

  return (
    <section className="py-24 bg-[#FAFAFA] border-b border-[#E6E6E0] relative">
      
      {/* MARGIN ANNOTATION */}
      <div className="hidden lg:block absolute right-8 top-28 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-r border-[#E6E6E0] pr-3 text-right">
        CORE RESEARCH ETHOS & PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* LARGE ETHOS QUOTE */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
            RESEARCH PHILOSOPHY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold italic text-[#1E1B4B] leading-tight">
            "Good research begins with curiosity and becomes valuable through responsibility."
          </h2>
          <p className="font-mono-tag text-xs text-[#6B7280]">
            &mdash; Dr. Mira Ellison, Research Methodology Brief
          </p>
        </div>

        {/* THREE CORE VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuesData.map((val, idx) => {
            const IconComp = iconMap[val.icon] || Compass;

            return (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white border border-[#E6E6E0] p-8 shadow-paper hover:border-[#1E1B4B] transition-all space-y-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* ICON & NUMBER */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-[#EEECF8] flex items-center justify-center text-[#1E1B4B] group-hover:bg-[#1E1B4B] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="font-mono-tag text-xs text-[#9CA3AF]">
                      VALUE 0{idx + 1}
                    </span>
                  </div>

                  {/* VALUE TITLE */}
                  <h3 className="font-serif text-2xl font-bold text-[#1E1B4B]">
                    {val.title}
                  </h3>

                  {/* TAGLINE */}
                  <p className="font-serif text-lg italic text-[#4A6B5D] font-medium border-l-2 border-[#4A6B5D] pl-3">
                    "{val.tagline}"
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-xs text-[#6B7280] leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>

                {/* ABSTRACT ILLUSTRATION DECORATION */}
                <div className="pt-4 border-t border-[#E6E6E0] flex items-center justify-between">
                  <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase">
                    Non-Clinical Ethos
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#4A6B5D]" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
