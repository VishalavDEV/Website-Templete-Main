import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../data/mockData';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { CTASection } from '../components/sections/CTASection';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 bg-[#f8f7f4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-black/10">
        <ScrollReveal animation="fade-up">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-700 font-bold block mb-3">
            CAPABILITIES // CORE SERVICES
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black uppercase text-[#121316] tracking-tight leading-[0.95]">
            HIGH-IMPACT <br />
            <span className="text-lime-600 italic font-light">DIGITAL</span> CAPABILITIES.
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl font-sans text-[#626670] leading-relaxed pt-6">
            We deliver end-to-end digital transformation for world-class enterprises. Explore our 6 core practice areas.
          </p>
        </ScrollReveal>
      </div>

      {/* Services List Detailed Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {SERVICES.map((service, idx) => (
          <ScrollReveal key={service.id} animation="fade-up">
            <div className="bg-[#121316] text-[#f8f7f4] rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-lime-400 text-black font-mono text-xs uppercase font-bold rounded-full">
                    PRACTICE {service.number}
                  </span>
                  <span className="font-mono text-xs text-lime-400 uppercase tracking-widest font-bold">
                    {service.tagline}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase">
                  {service.title}
                </h2>

                <p className="text-base font-sans text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <span className="font-mono text-xs text-lime-400 uppercase tracking-widest font-bold block mb-2">
                      CORE CAPABILITIES:
                    </span>
                    <ul className="space-y-1 text-xs text-gray-300 font-sans">
                      {service.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-lime-400 uppercase tracking-widest font-bold block mb-2">
                      KEY DELIVERABLES:
                    </span>
                    <ul className="space-y-1 text-xs text-gray-300 font-sans">
                      {service.deliverables.map((del, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="px-6 py-3 bg-lime-400 text-black font-mono text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>EXPLORE PRACTICE DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => navigate('/contact')}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-widest font-bold rounded-full transition-colors cursor-pointer"
                  >
                    <span>INQUIRE ABOUT THIS PRACTICE</span>
                  </button>
                </div>
              </div>

              {/* Right Image Feature */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden h-[360px] border border-white/10 shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <CTASection />
    </div>
  );
};
