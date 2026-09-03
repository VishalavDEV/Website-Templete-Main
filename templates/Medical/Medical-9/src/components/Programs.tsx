import React from 'react';
import { PROGRAMS } from '../data/mockData';
import { Check, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#F2ECE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans block mb-2">
            Structured Clinical Pathways
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#542F3B]">
            Diabetes programs <br />
            <span className="italic font-normal text-[#C97873]">matched to your stage.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#70696C] font-sans font-normal mt-3 leading-relaxed">
            Whether building your initial routine or protecting multi-organ health, our clinical pathways combine physician visits, sensor tracking, and nutrition coaching into one clear plan.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className={`rounded-2xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                prog.highlight
                  ? 'bg-[#542F3B] text-white shadow-md border-2 border-[#C97873] lg:-translate-y-2'
                  : 'bg-white text-[#252326] border border-[#E5DDD8] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Highlight ribbon */}
              {prog.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C97873] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> {prog.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pt-1">
                  <h3 className={`font-serif text-2xl font-bold ${prog.highlight ? 'text-white' : 'text-[#542F3B]'}`}>
                    {prog.name}
                  </h3>
                  {!prog.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FAF0EE] text-[#C97873]">
                      {prog.badge}
                    </span>
                  )}
                </div>

                <p className={`text-xs font-sans mb-4 leading-relaxed ${prog.highlight ? 'text-[#FAF8F5]/80' : 'text-[#70696C]'}`}>
                  {prog.description}
                </p>

                {/* Duration & Target audience */}
                <div className={`p-3 rounded-xl mb-6 text-xs font-bold font-sans ${prog.highlight ? 'bg-white/10 text-[#E8B6A5]' : 'bg-[#FAF0EE] text-[#C97873]'}`}>
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-90">Duration</div>
                  <div>{prog.duration}</div>
                </div>

                {/* Included features list */}
                <div className="space-y-3 mb-8">
                  <div className={`text-xs font-bold uppercase tracking-wider ${prog.highlight ? 'text-[#E8B6A5]' : 'text-[#542F3B]'}`}>
                    What's Included:
                  </div>
                  {prog.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${prog.highlight ? 'bg-[#C97873] text-white' : 'bg-[#FAF0EE] text-[#C97873]'}`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className={prog.highlight ? 'text-[#FAF8F5]/90 font-normal' : 'text-[#252326] font-normal'}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectProgram(prog.name)}
                  className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-[#C97873] ${
                    prog.highlight
                      ? 'bg-[#C97873] hover:bg-[#b86762] text-white shadow-sm'
                      : 'bg-[#542F3B] hover:bg-[#43252f] text-white'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Enroll in {prog.name}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
