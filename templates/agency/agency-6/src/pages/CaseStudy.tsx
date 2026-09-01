import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PROJECTS } from '../data/mockData';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { CTASection } from '../components/sections/CTASection';

export const CaseStudy: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const currentIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const project = PROJECTS[currentIndex !== -1 ? currentIndex : 0];

  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-32 pb-20 bg-[#121316] text-[#f8f7f4] min-h-screen">
      {/* Back to Work Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-lime-400 uppercase tracking-wider transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO PORTFOLIO</span>
        </button>
      </div>

      {/* Case Study Title & Meta */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-lime-400 text-black font-mono text-xs font-bold rounded-full uppercase">
              {project.category}
            </span>
            <span className="font-mono text-xs text-lime-400 uppercase tracking-widest font-bold">
              YEAR // {project.year}
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-serif font-black uppercase text-white tracking-tight">
            {project.title}
          </h1>

          <p className="max-w-3xl text-xl sm:text-2xl font-serif text-lime-400 leading-snug pt-4 italic">
            "{project.tagline}"
          </p>
        </ScrollReveal>

        {/* Specs Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-8 border-t border-white/10 font-mono text-xs uppercase text-gray-400">
          <div>
            <div className="text-gray-500 mb-1">CLIENT</div>
            <div className="text-white font-bold text-sm">{project.client}</div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">INDUSTRY</div>
            <div className="text-white font-bold text-sm">{project.industry}</div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">TIMELINE</div>
            <div className="text-white font-bold text-sm">{project.year} COMPLETED</div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">AGENCY ROLE</div>
            <div className="text-lime-400 font-bold text-sm">FULL-STACK & STRATEGY</div>
          </div>
        </div>
      </div>

      {/* Hero Banner Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative h-[480px] sm:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src={project.heroImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Results Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#1a1b1f] border border-white/10 rounded-2xl p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-400 block mb-6 font-bold">
            MEASURABLE IMPACT // RESULTS
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((res, i) => (
              <div key={i} className="border-l border-lime-400/40 pl-6 space-y-1">
                <div className="text-3xl sm:text-5xl font-serif font-bold text-white">{res.value}</div>
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">{res.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deep Narrative: Challenge, Strategy, Execution */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: Challenge & Strategy */}
          <div className="lg:col-span-8 space-y-12">
            <ScrollReveal animation="fade-up">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-lime-400 font-bold">
                  01 // THE CHALLENGE
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold uppercase text-white">
                  OVERCOMING SYSTEM STAGNATION
                </h2>
                <p className="text-base font-sans text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="space-y-4 pt-8 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-lime-400 font-bold">
                  02 // THE STRATEGY
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold uppercase text-white">
                  ARCHITECTURAL INTERVENTION
                </h2>
                <p className="text-base font-sans text-gray-300 leading-relaxed">
                  {project.strategy}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="space-y-4 pt-8 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-lime-400 font-bold">
                  03 // THE EXECUTION
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold uppercase text-white">
                  FULL-STACK IMPLEMENTATION
                </h2>
                <p className="text-base font-sans text-gray-300 leading-relaxed">
                  {project.execution}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Key Metrics Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#1a1b1f] border border-white/10 rounded-2xl p-8 space-y-6 sticky top-32">
              <h3 className="text-xl font-serif font-bold text-white uppercase border-b border-white/10 pb-4">
                PROJECT HIGHLIGHTS
              </h3>

              <ul className="space-y-3 font-mono text-xs text-gray-300">
                {project.metrics.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/contact')}
                className="w-full py-3 bg-lime-400 text-black font-mono text-xs font-bold uppercase rounded-xl hover:bg-white transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>REQUEST SIMILAR ARCHITECTURE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="pt-12 space-y-6 border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-400 block font-bold">
            VISUAL GALLERY // ARCHITECTURE
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-72 rounded-xl overflow-hidden border border-white/10">
                <img
                  src={img}
                  alt={`${project.title} gallery ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next / Prev Project Bar */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => navigate(`/work/${prevProject.id}`)}
            className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl font-mono text-xs uppercase text-white transition-colors cursor-pointer w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 text-lime-400" />
            <div>
              <div className="text-[10px] text-gray-400">PREVIOUS PROJECT</div>
              <div className="font-bold">{prevProject.title}</div>
            </div>
          </button>

          <button
            onClick={() => navigate(`/work/${nextProject.id}`)}
            className="flex items-center justify-end gap-3 p-4 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl font-mono text-xs uppercase text-white transition-colors cursor-pointer w-full sm:w-auto"
          >
            <div className="text-right">
              <div className="text-[10px] text-gray-400">NEXT PROJECT</div>
              <div className="font-bold">{nextProject.title}</div>
            </div>
            <ArrowRight className="w-4 h-4 text-lime-400" />
          </button>
        </div>
      </div>

      <CTASection />
    </div>
  );
};
