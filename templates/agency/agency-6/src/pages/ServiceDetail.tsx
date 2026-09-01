import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES, PROJECTS } from '../data/mockData';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { CTASection } from '../components/sections/CTASection';

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
  const featuredProject = PROJECTS.find((p) => p.id === service.featuredCaseStudyId) || PROJECTS[0];

  return (
    <div className="pt-32 pb-20 bg-[#f8f7f4] min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-2 font-mono text-xs text-[#626670] hover:text-[#121316] uppercase tracking-wider transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL SERVICES</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-black/10">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-black text-lime-400 font-mono text-xs font-bold rounded-full">
              PRACTICE AREA {service.number}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-lime-700 font-bold">
              {service.tagline}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black uppercase text-[#121316] tracking-tight">
            {service.title}
          </h1>

          <p className="max-w-3xl text-lg sm:text-xl font-sans text-[#626670] leading-relaxed pt-6">
            {service.description}
          </p>
        </ScrollReveal>
      </div>

      {/* Main Image & Capabilities Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-10">
            {/* Capabilities Box */}
            <div className="bg-[#121316] text-[#f8f7f4] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-xl space-y-6">
              <h2 className="text-2xl font-serif font-bold text-white uppercase border-b border-white/10 pb-4">
                TECHNICAL & STRATEGIC CAPABILITIES
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-sans text-gray-200">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Box */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-black/10 shadow-sm space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#121316] uppercase border-b border-black/10 pb-4">
                EXECUTIVE DELIVERABLES
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((del, idx) => (
                  <div key={idx} className="p-4 bg-[#f3f2ed] rounded-xl border border-black/5 font-mono text-xs font-bold text-[#121316]">
                    ✓ {del}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Featured Case Study Banner */}
          <div className="lg:col-span-5 space-y-8 sticky top-32">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-[#121316] text-white">
              <div className="relative h-[300px]">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 space-y-4">
                <span className="font-mono text-xs text-lime-400 uppercase tracking-widest font-bold block">
                  FEATURED CASE STUDY FOR THIS PRACTICE
                </span>
                <h3 className="text-3xl font-serif font-bold text-white uppercase">
                  PROJECT {featuredProject.title}
                </h3>
                <p className="text-xs font-sans text-gray-300 leading-relaxed">
                  {featuredProject.description}
                </p>

                <button
                  onClick={() => navigate(`/work/${featuredProject.id}`)}
                  className="w-full py-3 bg-lime-400 text-black font-mono text-xs font-bold uppercase rounded-xl hover:bg-white transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};
