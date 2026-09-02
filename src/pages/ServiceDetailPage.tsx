import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, ArrowRight, CheckCircle2, Clock, Layers, ArrowUpRight, FolderKanban } from 'lucide-react';
import { Service, Project } from '../types';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { audioService } from '../utils/audio';

interface ServiceDetailPageProps {
  service: Service;
  onNavigate: (path: string) => void;
  onSelectProject: (slug: string) => void;
  onStartProject: () => void;
}

export function ServiceDetailPage({
  service,
  onNavigate,
  onSelectProject,
  onStartProject
}: ServiceDetailPageProps) {
  const featuredProject = projects.find(p => p.slug === service.featuredProjectSlug) || projects[0];

  // Find next service in sequence
  const currentIndex = services.findIndex(s => s.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <div className="pt-32 pb-24 w-full">
      {/* Back Button & Eyebrow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => {
            audioService.playClick();
            onNavigate('/services');
          }}
          className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Disciplines</span>
        </button>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/40">
              <span>DISCIPLINE {service.number}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-serif">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/8 text-xs font-mono text-gray-300">
                <Clock className="w-4 h-4 text-violet-400" />
                <span>Sprint Duration: {service.timeline}</span>
              </div>
              <button
                onClick={() => {
                  audioService.playClick();
                  onStartProject();
                }}
                className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs uppercase font-semibold tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-violet-600/30"
              >
                <span>Engage for {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Deliverables Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Capabilities */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#11131E] border border-white/8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center border border-violet-500/30">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white">Full Scope Capabilities</h3>
            </div>

            <ul className="space-y-3 font-mono text-xs sm:text-sm text-gray-300">
              {service.capabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#11131E] border border-white/8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white">Tangible Deliverables</h3>
            </div>

            <ul className="space-y-3 font-mono text-xs sm:text-sm text-gray-300">
              {service.deliverables.map((deliv, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-cyan-400 font-bold">›</span>
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/6 font-mono text-xs text-gray-400">
              <span className="text-white font-semibold block mb-1">Ideal Client Profile</span>
              <p>{service.idealFor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Sprint Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#131624] to-[#0D0F18] border border-white/10 shadow-2xl space-y-8">
          <div>
            <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block mb-2">
              Execution Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Sprint Roadmap for {service.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processHighlights.map((ph, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-black/30 border border-white/6 space-y-2">
                <span className="font-mono text-xs font-bold text-violet-400">STAGE 0{idx + 1}</span>
                <h4 className="text-sm font-semibold text-white">{ph.phase}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{ph.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Featured Case Study */}
      {featuredProject && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>Representative Case Study</span>
            </div>
          </div>

          <div
            onClick={() => {
              audioService.playClick();
              onSelectProject(featuredProject.slug);
            }}
            className="p-6 sm:p-8 rounded-3xl bg-[#11131E] border border-white/8 hover:border-violet-500/40 transition-all cursor-pointer group flex flex-col md:flex-row items-center gap-8 shadow-xl"
          >
            <div className="w-full md:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <img
                src={featuredProject.heroImage}
                alt={featuredProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
                <span>{featuredProject.client}</span>
                <span>•</span>
                <span>{featuredProject.year}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-violet-300 transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {featuredProject.summary}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 font-semibold pt-2">
                <span>View Complete Case Study</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Next Service Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-gray-500 uppercase">NEXT DISCIPLINE</span>
          <button
            onClick={() => {
              audioService.playClick();
              onNavigate(`/services/${nextService.slug}`);
            }}
            className="flex items-center gap-3 group text-right"
          >
            <div>
              <span className="text-xs font-mono text-violet-400 block">DISCIPLINE {nextService.number}</span>
              <span className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                {nextService.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-violet-600 text-white flex items-center justify-center transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
