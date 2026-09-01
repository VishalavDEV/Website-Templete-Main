import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { useLightbox } from '../context/LightboxContext';
import { ArrowLeft, ArrowRight, CheckCircle2, Maximize2, Zap, Layers, Info } from 'lucide-react';

export const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openLightbox } = useLightbox();

  const project = projectsData.find((p) => p.id === id);

  const [activeProtoTab, setActiveProtoTab] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<{ title: string; desc: string } | null>(null);

  if (!project) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-24 text-center space-y-6">
        <h1 className="font-serif text-4xl font-bold">CASE STUDY NOT FOUND</h1>
        <p className="text-neutral-500 font-mono text-sm">The requested project case study could not be located.</p>
        <Link
          to="/work"
          className="inline-flex items-center space-x-2 rounded-full bg-blue-600 text-white px-6 py-3 font-mono text-xs uppercase font-bold"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Work</span>
        </Link>
      </div>
    );
  }

  const nextProject = projectsData.find((p) => p.id === project.nextProjectId) || projectsData[0];
  const currentProto = project.prototype.interactiveTabs[activeProtoTab];

  return (
    <div className="space-y-20 pb-24">
      {/* 1. Case Study Header */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 pt-8 md:pt-16 space-y-8">
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </button>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-600 text-white font-mono text-xs uppercase px-3.5 py-1 font-bold">
              {project.category}
            </span>
            <span className="font-mono text-xs text-neutral-500 font-bold uppercase">
              {project.year} // {project.client}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="max-w-3xl text-lg md:text-2xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-neutral-200 dark:border-neutral-800 py-6 font-mono text-xs">
          <div>
            <span className="block text-neutral-400 font-bold">CLIENT</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-semibold">{project.client}</span>
          </div>
          <div>
            <span className="block text-neutral-400 font-bold">YEAR</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-semibold">{project.year}</span>
          </div>
          <div className="col-span-2">
            <span className="block text-neutral-400 font-bold">SERVICES DELIVERED</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="rounded bg-neutral-200/60 dark:bg-neutral-800/60 px-2.5 py-0.5 text-[11px] text-neutral-800 dark:text-neutral-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Bleed Hero Image */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-2xl cursor-pointer"
          onClick={() => openLightbox({ url: project.heroImage, title: project.title, caption: project.tagline })}
          data-cursor="LIGHTBOX"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white p-2.5 rounded-full hover:bg-blue-600 transition-colors">
            <Maximize2 className="h-5 w-5" />
          </div>
        </div>
      </section>

      {/* 2. Overview & Challenge */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            01 // PROJECT OVERVIEW
          </div>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            The Context & Purpose
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed font-light">
            {project.summary}
          </p>
        </div>

        <div className="lg:col-span-6 space-y-4 bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
          <div className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
            02 // THE CHALLENGE
          </div>
          <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Friction & Obstacles
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed font-light">
            {project.challenge}
          </p>

          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 mt-4">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold">
              THE SOLUTION
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed font-light mt-1">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Research & User Persona */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-8">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            03 // USER RESEARCH & INSIGHTS
          </div>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            {project.research.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 max-w-2xl font-light">
            {project.research.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="font-mono text-xs uppercase font-bold text-neutral-400">
              KEY RESEARCH FINDINGS:
            </div>
            <ul className="space-y-3">
              {project.research.keyInsights.map((insight, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
                  <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">0{idx + 1}</span>
                  <span className="leading-relaxed font-light">{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* User Persona Card */}
          <div className="lg:col-span-5 rounded-2xl border border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/40 p-6 space-y-4 shadow-lg">
            <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              PRIMARY USER PERSONA
            </div>
            <div className="flex items-center space-x-4">
              <img
                src={project.research.userPersona.avatar}
                alt={project.research.userPersona.name}
                className="h-14 w-14 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <div className="font-serif text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {project.research.userPersona.name}
                </div>
                <div className="font-mono text-xs text-neutral-500">
                  {project.research.userPersona.role}
                </div>
              </div>
            </div>
            <blockquote className="font-serif italic text-sm text-neutral-700 dark:text-neutral-300 border-l-2 border-blue-500 pl-4 py-1">
              "{project.research.userPersona.quote}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* 4. Wireframes & Layout Mechanics */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-8">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            04 // WIREFRAMES & SCHEMATICS
          </div>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            {project.wireframes.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 max-w-2xl font-light">
            {project.wireframes.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.wireframes.images.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-950 shadow-lg cursor-pointer"
              onClick={() => openLightbox({ url: img.url, title: img.label, caption: img.caption })}
              data-cursor="INSPECT"
            >
              <img
                src={img.url}
                alt={img.label}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-white font-mono text-[10px] font-bold">
                {img.label}
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md p-3 rounded text-white text-xs font-light">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Visual System & UI Exploration */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-8">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            05 // VISUAL SYSTEM & TOKENS
          </div>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            {project.uiExploration.title}
          </h2>
        </div>

        {/* Color Palette Swatches */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.uiExploration.colorPalette.map((swatch) => (
            <div
              key={swatch.name}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-md"
            >
              <div className="h-20 w-full" style={{ backgroundColor: swatch.hex }} />
              <div className="p-3 bg-white dark:bg-neutral-900 font-mono text-xs">
                <div className="font-bold text-neutral-900 dark:text-neutral-100">{swatch.name}</div>
                <div className="text-neutral-500">{swatch.hex}</div>
              </div>
            </div>
          ))}
        </div>

        {/* UI Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.uiExploration.images.map((ui, idx) => (
            <div
              key={idx}
              className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-xl cursor-pointer"
              onClick={() => openLightbox({ url: ui.url, title: ui.title, caption: ui.caption })}
            >
              <img
                src={ui.url}
                alt={ui.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-lg text-white">
                <div className="font-serif text-base font-bold">{ui.title}</div>
                <div className="text-xs text-neutral-300 font-light mt-1">{ui.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Interactive Simulated Prototype Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-8">
        <div className="rounded-3xl border border-blue-500/30 bg-neutral-950 p-6 md:p-12 text-white shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-blue-400 font-bold flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>INTERACTIVE PROTOTYPE SIMULATOR</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                {project.prototype.title}
              </h2>
              <p className="text-xs text-neutral-400 font-light mt-1">
                {project.prototype.description}
              </p>
            </div>

            {/* Prototype View Tabs */}
            <div className="flex flex-wrap gap-2">
              {project.prototype.interactiveTabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveProtoTab(idx);
                    setActiveHotspot(null);
                  }}
                  className={`rounded-full px-4 py-2 font-mono text-xs uppercase font-bold transition-all ${
                    activeProtoTab === idx
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Screen */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-neutral-800 bg-black">
            <img
              src={currentProto.mockupUrl}
              alt={currentProto.label}
              className="h-full w-full object-cover"
            />

            {/* Interactive Hotspots */}
            {currentProto.hotspots?.map((hs, idx) => (
              <button
                key={idx}
                onClick={() => setActiveHotspot({ title: hs.title, desc: hs.desc })}
                className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600/90 text-white font-mono text-xs font-bold border-2 border-white shadow-xl animate-pulse hover:scale-125 transition-transform"
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                title={hs.title}
              >
                +
              </button>
            ))}

            {/* Hotspot Info Drawer */}
            {activeHotspot && (
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/95 border border-blue-500 p-4 rounded-xl text-white shadow-2xl flex items-start justify-between">
                <div>
                  <div className="font-mono text-xs text-blue-400 font-bold uppercase">
                    HOTSPOT DETAIL // {activeHotspot.title}
                  </div>
                  <div className="text-xs text-neutral-300 font-light mt-1">
                    {activeHotspot.desc}
                  </div>
                </div>
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="font-mono text-xs text-neutral-400 hover:text-white"
                >
                  [CLOSE]
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. Results Metrics */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-8">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold">
            06 // MEASURABLE IMPACT
          </div>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            VERIFIED RESULTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.results.map((res, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg space-y-2"
            >
              <div className="font-serif text-5xl md:text-6xl font-black text-blue-600 dark:text-blue-400">
                {res.metric}
              </div>
              <div className="font-mono text-xs uppercase font-bold text-neutral-900 dark:text-neutral-100">
                {res.label}
              </div>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                {res.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Next Project Navigation */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 border-t border-neutral-200 dark:border-neutral-800 pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase text-neutral-400">NEXT CASE STUDY</div>
            <Link
              to={`/work/${nextProject.id}`}
              className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {nextProject.title} →
            </Link>
          </div>

          <Link
            to={`/work/${nextProject.id}`}
            className="flex items-center space-x-3 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-6 py-3 font-mono text-xs uppercase font-bold hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-all shadow-md"
          >
            <span>Read Case Study</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
