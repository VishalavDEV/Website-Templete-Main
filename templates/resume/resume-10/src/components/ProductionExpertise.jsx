import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { productionToolkit } from '../data/directorData';
import { Clapperboard, BookOpen, Video, Layers, Scissors, Star } from 'lucide-react';

const ProductionExpertise = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const categoryIcons = [BookOpen, Video, Layers, Scissors];

  return (
    <section id="craft" className="py-24 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono-meta text-xs tracking-[0.3em] text-amber-400 uppercase block mb-2">
            ACT V / CRAFT
          </span>
          <h2 className="font-serif-title text-4xl sm:text-5xl font-normal text-white uppercase tracking-tight">
            The Director's Toolkit
          </h2>
          <p className="text-neutral-400 text-base font-light mt-2 max-w-xl">
            Interactive production board outlining directorial competencies and technical mastery.
          </p>
          <div className="w-16 h-[1.5px] bg-amber-400 mt-4" />
        </div>

        {/* SLATE-BOARD CATEGORY SELECTOR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {productionToolkit.map((toolkit, idx) => {
            const IconComp = categoryIcons[idx % categoryIcons.length];
            const isSelected = selectedCategoryIndex === idx;
            return (
              <button
                key={toolkit.category}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`p-6 text-left border transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'bg-white text-neutral-950 border-white shadow-xl'
                    : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Clapperboard Slate Top Bar Accent */}
                <div className={`h-1.5 w-full absolute top-0 left-0 ${isSelected ? 'bg-neutral-950' : 'bg-neutral-800'}`} />

                <div className="flex items-center justify-between mb-4 mt-1">
                  <IconComp className={`w-6 h-6 ${isSelected ? 'text-neutral-950' : 'text-amber-400'}`} />
                  <span className="font-mono-meta text-[10px] tracking-widest opacity-60">
                    SLATE 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif-title text-xl font-normal uppercase tracking-wider mb-1">
                  {toolkit.category}
                </h3>
                <span className="font-mono-meta text-[10px] tracking-widest opacity-70 block uppercase">
                  {toolkit.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE SLATE-BOARD EXPERTISE REVEAL */}
        {(() => {
          const currentToolkit = productionToolkit[selectedCategoryIndex];
          return (
            <motion.div
              key={currentToolkit.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-neutral-950 border border-neutral-800 p-8 md:p-12"
            >
              <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-8">
                <div>
                  <span className="font-mono-meta text-xs tracking-widest text-amber-400 uppercase block mb-1">
                    SELECTED CATEGORY
                  </span>
                  <h4 className="font-serif-title text-3xl font-normal text-white uppercase">
                    {currentToolkit.category} — {currentToolkit.label}
                  </h4>
                </div>
                <span className="font-mono-meta text-xs text-neutral-500 uppercase tracking-widest">
                  {currentToolkit.skills.length} COMPETENCIES
                </span>
              </div>

              {/* Skills Grid - No percentage bars, clean film badge layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentToolkit.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 bg-neutral-900 border border-neutral-800 hover:border-amber-400/50 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <h5 className="font-serif-title text-lg font-medium text-white mb-1">
                        {skill.name}
                      </h5>
                      <span className="font-mono-meta text-[10px] tracking-widest text-neutral-400 uppercase">
                        LEVEL / {skill.level}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })()}

      </div>
    </section>
  );
};

export default ProductionExpertise;
