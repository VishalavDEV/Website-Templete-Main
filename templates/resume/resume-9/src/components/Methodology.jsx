import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { methodologyCategories } from '../data/researchData';
import { Layers, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Methodology() {
  const [activeCategory, setActiveCategory] = useState(methodologyCategories[0]);

  return (
    <section id="expertise" className="py-24 bg-white border-b border-[#E6E6E0] relative">
      
      {/* MARGIN ANNOTATION */}
      <div className="hidden lg:block absolute left-8 top-28 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-l border-[#E6E6E0] pl-3">
        SEC 05 &bull; METHODOLOGICAL PRACTICE & RESEARCH FRAMEWORKS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 space-y-2">
          <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
            05 / EXPERTISE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
            Research Practice
          </h2>
          <p className="text-base text-[#6B7280] max-w-xl font-light">
            Methodological frameworks and qualitative synthesis practices applied across behavioral research initiatives. No arbitrary percentage bars; structured methodological competencies.
          </p>
        </div>

        {/* METHODOLOGY CATEGORIES INTERACTIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CATEGORY SELECTOR CARDS */}
          <div className="lg:col-span-5 space-y-4">
            {methodologyCategories.map((cat, idx) => {
              const isSelected = activeCategory.id === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  onMouseEnter={() => setActiveCategory(cat)}
                  className={`w-full text-left p-6 border transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-[#1E1B4B] text-white border-[#1E1B4B] shadow-lg'
                      : 'bg-[#FAFAFA] text-[#1E1B4B] border-[#E6E6E0] hover:bg-white hover:border-[#1E1B4B]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono-tag text-[10px] uppercase tracking-wider ${isSelected ? 'text-[#EEECF8]' : 'text-[#9CA3AF]'}`}>
                      0{idx + 1} &bull; CATEGORY
                    </span>
                    <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-[#EEECF8]' : 'text-[#6B7280]'}`} />
                  </div>

                  <h3 className="font-serif text-xl font-bold">
                    {cat.title}
                  </h3>

                  <p className={`text-xs mt-1 leading-relaxed font-light ${isSelected ? 'text-gray-300' : 'text-[#6B7280]'}`}>
                    {cat.description}
                  </p>

                  {isSelected && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4A6B5D]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT DETAIL CARD: ASSOCIATED METHODS & WORKFLOW */}
          <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#E6E6E0] p-8 sm:p-10 shadow-paper space-y-8 relative">
            
            <div>
              <div className="flex items-center space-x-2 text-[#4A6B5D] mb-1">
                <Layers className="w-4 h-4" />
                <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest">
                  METHODOLOGICAL BREAKDOWN
                </span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#1E1B4B]">
                {activeCategory.title}
              </h3>
              <p className="text-sm text-[#6B7280] mt-1 font-light">
                {activeCategory.description}
              </p>
            </div>

            {/* ASSOCIATED METHODS LIST WITH EXPANDED DETAILS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeCategory.methods.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 border border-[#E6E6E0] space-y-2 hover:border-[#4A6B5D] transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A6B5D]" />
                    <h4 className="font-serif text-base font-bold text-[#1E1B4B]">
                      {method.name}
                    </h4>
                  </div>
                  <p className="text-xs text-[#6B7280] leading-relaxed pl-6">
                    {method.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* PRACTICE NOTE */}
            <div className="p-4 bg-[#F5F3EF] border-l-2 border-[#1E1B4B] flex items-center space-x-3">
              <Sparkles className="w-4 h-4 text-[#2A2F45]" />
              <p className="font-mono-tag text-xs text-[#1E1B4B]">
                Methods are selected dynamically depending on the research question and environmental context.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
