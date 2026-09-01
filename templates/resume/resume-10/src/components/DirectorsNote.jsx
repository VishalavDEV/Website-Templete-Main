import React from 'react';
import { motion } from 'framer-motion';
import { directorsNote } from '../data/directorData';
import { Compass, Eye, Users } from 'lucide-react';

const DirectorsNote = () => {
  const valueIcons = [Compass, Eye, Users];

  return (
    <section className="py-28 bg-white border-b border-neutral-200 relative overflow-hidden">
      {/* Light leak ambient background accent */}
      <div className="light-leak-effect bottom-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-meta text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">
            CREATIVE VALUES
          </span>
          <h2 className="font-serif-title text-4xl sm:text-6xl font-normal text-neutral-950 uppercase tracking-tight">
            {directorsNote.title}
          </h2>
          <div className="w-16 h-[1.5px] bg-neutral-900 mx-auto mt-4" />
        </div>

        {/* Large Central Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 p-8 md:p-12 bg-neutral-50/80 border border-neutral-200"
        >
          <p className="font-serif-title italic text-3xl sm:text-5xl text-neutral-950 leading-tight mb-6">
            "{directorsNote.quote}"
          </p>
          <p className="text-neutral-600 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            {directorsNote.statement}
          </p>
        </motion.div>

        {/* Three Creative Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directorsNote.values.map((val, idx) => {
            const IconComp = valueIcons[idx % valueIcons.length];
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 bg-white border border-neutral-200 hover:border-neutral-900 transition-colors shadow-xs"
              >
                <div className="p-3 bg-neutral-950 text-white w-fit mb-6">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="font-serif-title text-2xl font-normal text-neutral-950 uppercase mb-3">
                  {val.title}
                </h3>

                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DirectorsNote;
