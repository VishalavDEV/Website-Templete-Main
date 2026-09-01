import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TEAM } from '../data/mockData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { ArrowUpRight, Award, Compass, Globe, Shield, Sparkles } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';
import fluidHero from '../assets/images/abstract_fluid_hero_1787848081692.jpg';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 bg-[#f8f7f4] min-h-screen select-none">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b-2 border-[#090909]">
        <ScrollReveal animation="fade-up">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#090909] font-black block mb-4">
            ABOUT VANTA FORM // AGENCY ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black uppercase text-[#090909] tracking-tighter leading-[0.85]">
            STRATEGY • CREATIVITY <br />
            <span className="text-[#090909] bg-[#D1FF00] px-3 py-0.5 rounded-none border-2 border-[#090909] inline-block mt-2">
              HIGH TECHNOLOGY
            </span>.
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl font-mono text-[#3a3d45] leading-relaxed pt-8 font-bold">
            Founded in 2026, VANTA FORM is an independent executive agency bridging the gap between strategic business consulting, spatial 3D web platforms, and agentic AI systems.
          </p>
        </ScrollReveal>
      </div>

      {/* Story & Vision Image Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-2 border-[#090909]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#090909] font-black">
              OUR ORIGIN STORY // ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase text-[#090909] leading-tight tracking-tighter">
              RE-ENGINEERING DIGITAL EXCELLENCE FOR CATEGORY LEADERS
            </h2>
            <p className="text-base font-mono text-[#3a3d45] leading-relaxed">
              Most digital agencies force companies to choose between beautiful visual design and technical scalability. VANTA FORM was established to eliminate this compromise.
            </p>
            <p className="text-base font-mono text-[#3a3d45] leading-relaxed">
              We operate as a compact, elite strike team of creative directors, WebGL engineers, and AI strategists. We work directly with CEOs, CTOs, and Chief Marketing Officers to deliver transformational digital platforms that increase EBITDA and market valuation.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-4 border-t-2 border-[#090909] font-mono text-xs">
              <div className="p-4 bg-white border-2 border-[#090909]">
                <div className="text-3xl font-serif font-black text-[#090909]">100%</div>
                <div className="text-[#090909] uppercase font-bold mt-1">IN-HOUSE ENGINEERING</div>
              </div>
              <div className="p-4 bg-white border-2 border-[#090909]">
                <div className="text-3xl font-serif font-black text-[#090909]">0%</div>
                <div className="text-[#090909] uppercase font-bold mt-1">TEMPLATED DESIGNS</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-none overflow-hidden shadow-2xl border-2 border-[#090909] bg-[#090909]">
              <img
                src={fluidHero}
                alt="VANTA FORM Studio Architecture"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] object-cover opacity-90"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#090909] border border-[#D1FF00]/60 rounded-none text-white font-mono text-xs flex justify-between items-center font-bold">
                <span>NEW YORK // EXECUTIVE STUDIO</span>
                <span className="text-[#D1FF00]">GLOBAL OPERATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div id="leadership" className="bg-[#090909] text-[#f8f7f4] py-28 sm:py-36 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#D1FF00]">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-black text-[#D1FF00] block mb-2">
                  EXECUTIVE BOARD // DIRECTORS
                </span>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tighter text-white">
                  LEADERSHIP TEAM
                </h2>
              </div>
              <p className="max-w-md text-sm text-gray-400 font-mono font-bold leading-relaxed">
                Industry veterans with proven track records in architectural design, AI engineering, and venture scaling.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            {TEAM.map((member, idx) => (
              <ScrollReveal key={member.id} animation="fade-up" delay={idx * 150}>
                <div className="bg-[#111111] border-2 border-white/10 rounded-none overflow-hidden p-6 space-y-4 hover:border-[#D1FF00] transition-colors shadow-2xl">
                  <div className="relative h-64 rounded-none overflow-hidden bg-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-black text-white uppercase tracking-tighter">{member.name}</h3>
                    <p className="text-xs font-mono text-[#D1FF00] uppercase tracking-widest mt-0.5 font-bold">{member.role}</p>
                  </div>
                  <p className="text-xs font-mono text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence & Capabilities Grid */}
      <div id="capabilities" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-[#090909]">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#090909] font-black block mb-2">
              ENGINEERING & ARTISTRY // PILLARS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black uppercase text-[#090909] tracking-tighter">
              OPERATIONAL PILLARS
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border-2 border-[#090909] rounded-none space-y-4 hover:bg-[#090909] hover:text-[#f8f7f4] transition-colors group shadow-xl">
            <div className="w-12 h-12 bg-[#090909] text-[#D1FF00] group-hover:bg-[#D1FF00] group-hover:text-[#090909] rounded-none flex items-center justify-center font-bold border-2 border-[#090909]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-black uppercase tracking-tighter text-[#090909] group-hover:text-white">STRATEGY</h3>
            <p className="text-sm font-mono text-[#626670] group-hover:text-gray-300 leading-relaxed">
              Comprehensive brand positioning, EBITDA modeling, and category creation designed to command market dominance.
            </p>
          </div>

          <div className="p-8 bg-white border-2 border-[#090909] rounded-none space-y-4 hover:bg-[#090909] hover:text-[#f8f7f4] transition-colors group shadow-xl">
            <div className="w-12 h-12 bg-[#090909] text-[#D1FF00] group-hover:bg-[#D1FF00] group-hover:text-[#090909] rounded-none flex items-center justify-center font-bold border-2 border-[#090909]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-black uppercase tracking-tighter text-[#090909] group-hover:text-white">3D & WEBGL</h3>
            <p className="text-sm font-mono text-[#626670] group-hover:text-gray-300 leading-relaxed">
              Hardware-accelerated WebGL graphics, spatial audio pipelines, and Swiss typographic systems.
            </p>
          </div>

          <div className="p-8 bg-white border-2 border-[#090909] rounded-none space-y-4 hover:bg-[#090909] hover:text-[#f8f7f4] transition-colors group shadow-xl">
            <div className="w-12 h-12 bg-[#090909] text-[#D1FF00] group-hover:bg-[#D1FF00] group-hover:text-[#090909] rounded-none flex items-center justify-center font-bold border-2 border-[#090909]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-black uppercase tracking-tighter text-[#090909] group-hover:text-white">AI AGENTS</h3>
            <p className="text-sm font-mono text-[#626670] group-hover:text-gray-300 leading-relaxed">
              Predictive intelligence dashboards, custom multi-agent orchestration, and natural language interfaces.
            </p>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};
