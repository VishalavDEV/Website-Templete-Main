import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INDUSTRIES } from '../../data/mockData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const IndustriesSection: React.FC = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState(INDUSTRIES[0].id);
  const navigate = useNavigate();

  const activeIndustry = INDUSTRIES.find((i) => i.id === selectedIndustryId) || INDUSTRIES[0];

  return (
    <section className="py-28 sm:py-36 bg-[#090909] text-[#f8f7f4] relative overflow-hidden select-none border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#D1FF00]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] font-black text-[#D1FF00] block mb-2">
                DOMAINS // SECTOR EXPERTISE
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tighter text-white">
                INDUSTRIES WE TRANSFORM
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400 font-mono font-bold leading-relaxed">
              Tailored architectural solutions engineered for high-stakes regulated and enterprise markets.
            </p>
          </div>
        </ScrollReveal>

        {/* Industry Tabs & Active Card Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          {/* Industry Selection Column */}
          <div className="lg:col-span-5 space-y-3">
            {INDUSTRIES.map((ind) => {
              const isSelected = ind.id === selectedIndustryId;

              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustryId(ind.id)}
                  className={`w-full text-left p-5 rounded-none border-2 transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#D1FF00] text-[#090909] border-[#D1FF00] font-black shadow-2xl translate-x-2'
                      : 'bg-[#141414] text-white border-white/10 hover:border-[#D1FF00] hover:text-[#D1FF00]'
                  }`}
                >
                  <span className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tighter">
                    {ind.name}
                  </span>
                  <div
                    className={`w-3 h-3 rounded-none ${
                      isSelected ? 'bg-[#090909] animate-pulse' : 'bg-white/20'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Industry Display Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-none border-2 border-white/20 bg-[#111111] p-8 sm:p-12 shadow-2xl min-h-[460px] flex flex-col justify-between">
              {/* Background Image Overlay */}
              <div className="absolute inset-0 z-0 opacity-15">
                <img
                  src={activeIndustry.bgImage}
                  alt={activeIndustry.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#D1FF00] font-black">
                    SECTOR // {activeIndustry.name.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 bg-[#090909] border border-[#D1FF00]/40 rounded-none font-mono text-xs text-[#D1FF00] font-bold">
                    {activeIndustry.metrics}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-serif font-black text-white uppercase leading-tight tracking-tighter">
                  {activeIndustry.headline}
                </h3>

                <p className="text-base font-mono text-gray-300 leading-relaxed max-w-xl">
                  {activeIndustry.description}
                </p>

                <div className="pt-4 space-y-2">
                  <span className="font-mono text-xs text-[#D1FF00] uppercase tracking-widest font-black">
                    REPRESENTATIVE CASE STUDIES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeIndustry.keyProjects.map((proj, idx) => (
                      <button
                        key={idx}
                        onClick={() => navigate(`/work/${proj.toLowerCase()}`)}
                        className="px-4 py-2 bg-[#090909] hover:bg-[#D1FF00] hover:text-[#090909] border border-white/20 rounded-none font-mono text-xs text-white font-black transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{proj}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="relative z-10 pt-8 border-t border-white/10 mt-8 flex justify-end">
                <button
                  onClick={() => navigate('/industries')}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#D1FF00] uppercase tracking-widest font-black hover:text-white transition-colors cursor-pointer"
                >
                  <span>VIEW ALL SECTOR CAPABILITIES</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
