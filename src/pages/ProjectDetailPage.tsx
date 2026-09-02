import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, Eye, Quote, ExternalLink, Code2 } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data/projects';
import { audioService } from '../utils/audio';

interface ProjectDetailPageProps {
  project: Project;
  onNavigate: (path: string) => void;
  onSelectProject: (slug: string) => void;
  onOpenLightbox: (imageUrl: string, caption?: string) => void;
  onStartProject: () => void;
}

export function ProjectDetailPage({
  project,
  onNavigate,
  onSelectProject,
  onOpenLightbox,
  onStartProject
}: ProjectDetailPageProps) {
  const nextProject = projects.find(p => p.slug === project.nextProjectSlug) || projects[0];

  return (
    <div className="pt-32 pb-24 w-full">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => {
            audioService.playClick();
            onNavigate('/work');
          }}
          className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </button>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-violet-950/60 text-violet-300 border border-violet-800/40 font-bold uppercase">
              {project.category}
            </span>
            <span className="text-gray-400">{project.client}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-serif">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Main Full-Width Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl cursor-pointer group"
          onClick={() => {
            audioService.playClick();
            onOpenLightbox(project.heroImage, `${project.title} — Main Launch Visual`);
          }}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-60" />
          <button
            className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10 text-xs font-mono flex items-center gap-2 group-hover:bg-violet-600 transition-all"
            aria-label="View Fullscreen"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Open Lightbox</span>
          </button>
        </div>
      </section>

      {/* Key Metrics / Results Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.results.map((res, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#11131E] border border-white/8 space-y-2"
            >
              <span className="text-3xl sm:text-4xl font-mono font-black text-emerald-400">
                {res.value}
              </span>
              <h4 className="text-sm font-semibold text-white">{res.label}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{res.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Narrative: Challenge, Strategy, Solution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Challenge */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block">
                01 // The Strategic Challenge
              </span>
              <h3 className="text-2xl font-bold text-white">The Friction & Context</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Strategy */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block">
                02 // The Creative Hypothesis
              </span>
              <h3 className="text-2xl font-bold text-white">System Architecture & Narrative</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                {project.strategy}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block">
                03 // Execution & Engineering
              </span>
              <h3 className="text-2xl font-bold text-white">Shipped Product & Tokens</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Sidebar Metadata (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Services Provided */}
            <div className="p-6 rounded-2xl bg-[#11131E] border border-white/8 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400">
                Disciplines Engaged
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.servicesProvided.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="p-6 rounded-2xl bg-[#11131E] border border-white/8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400">
                <Code2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Technologies & Tools</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-violet-950/40 text-violet-300 border border-violet-800/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Testimonial if present */}
            {project.testimonial && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#151828] to-[#0E101A] border border-white/10 space-y-4">
                <Quote className="w-6 h-6 text-violet-400 opacity-60" />
                <p className="text-xs sm:text-sm text-gray-200 italic leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div className="pt-2 border-t border-white/6">
                  <span className="text-xs font-bold text-white block">{project.testimonial.author}</span>
                  <span className="text-[10px] font-mono text-gray-400">{project.testimonial.role}, {project.testimonial.company}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Visual Gallery Grid with Lightbox Triggers */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="mb-8">
            <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block mb-1">
              Visual Documentation
            </span>
            <h3 className="text-2xl font-bold text-white">Selected Artifacts & Keyframes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  audioService.playClick();
                  onOpenLightbox(img.url, `${project.title} — ${img.caption}`);
                }}
                className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/8 hover:border-violet-500/40 transition-all cursor-pointer group shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-[#11131E] border-t border-white/6 flex items-center justify-between">
                  <p className="text-xs font-mono text-gray-400 truncate max-w-[80%]">{img.caption}</p>
                  <Eye className="w-4 h-4 text-violet-400 opacity-60 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Footer Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#121522] via-[#0E1018] to-[#121522] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-gray-500 uppercase block mb-1">Next Case Study</span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">{nextProject.title}</h4>
            <p className="text-xs text-gray-400 font-mono mt-0.5">{nextProject.client} ({nextProject.year})</p>
          </div>

          <button
            onClick={() => {
              audioService.playClick();
              onSelectProject(nextProject.slug);
            }}
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-violet-600/30 flex-shrink-0"
          >
            <span>Explore {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
