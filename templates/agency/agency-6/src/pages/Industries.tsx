import React from 'react';
import { useNavigate } from 'react-router-dom';
import { INDUSTRIES } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { CTASection } from '../components/sections/CTASection';

export const IndustriesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 bg-[#f8f7f4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-black/10">
        <ScrollReveal animation="fade-up">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-700 font-bold block mb-3">
            DOMAINS // SECTOR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black uppercase text-[#121316] tracking-tight leading-[0.95]">
            INDUSTRIES WE <br />
            <span className="text-lime-600 italic font-light">TRANSFORM</span> GLOBAL CAPITAL.
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl font-sans text-[#626670] leading-relaxed pt-6">
            Explore our specialized domain architectures designed for regulated capital markets, high-end retail, autonomous mobility, and biotech.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {INDUSTRIES.map((industry) => (
          <ScrollReveal key={industry.id} animation="fade-up">
            <div className="bg-[#121316] text-[#f8f7f4] rounded-2xl border border-white/10 p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs uppercase text-lime-400 font-bold tracking-widest">
                    {industry.name}
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full font-mono text-xs text-white">
                    {industry.metrics}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase text-white leading-tight">
                  {industry.headline}
                </h2>

                <p className="text-sm font-sans text-gray-300 leading-relaxed">
                  {industry.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-gray-400 uppercase">REPRESENTATIVE WORK:</span>
                  <div className="flex gap-2">
                    {industry.keyProjects.map((proj, i) => (
                      <span key={i} className="text-xs font-mono font-bold text-lime-400">{proj}</span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="p-3 bg-lime-400 text-black rounded-full hover:bg-white transition-colors cursor-pointer"
                  aria-label={`Inquire about ${industry.name}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <CTASection />
    </div>
  );
};
