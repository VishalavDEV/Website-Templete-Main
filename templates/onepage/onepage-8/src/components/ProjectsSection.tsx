import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Project3DCanvas } from '../scenes/Project3DCanvas';
import { PROJECTS_DATA } from '../data/projects';
import { Project, CursorState } from '../types';
import { Github, ExternalLink, Activity, CheckCircle2, ChevronRight, X, Cpu, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
  onClickSound: () => void;
  onNeuralSound: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  setCursorState,
  onHoverSound,
  onClickSound,
  onNeuralSound,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Interactive Live Demo Sandbox in Modal
  const [demoInputText, setDemoInputText] = useState('Breaking: Autonomous AI breakthrough claims zero-shot reasoning without training data.');
  const [demoResult, setDemoResult] = useState<{ score: number; label: string; details: string } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runDemoAnalysis = () => {
    setIsAnalyzing(true);
    onNeuralSound();
    setTimeout(() => {
      setIsAnalyzing(false);
      setDemoResult({
        score: 0.942,
        label: 'HIGH PROBABILITY MISINFORMATION / UNVERIFIED SPECULATION',
        details: 'Cross-reference check failed against Peer-Reviewed ArXiv indexing. Stylistic markers indicate speculative sensationalism.'
      });
    }, 700);
  };

  const openProjectModal = (proj: Project) => {
    onClickSound();
    setSelectedProject(proj);
    setDemoResult(null);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        index="04"
        category="SELECTED RESEARCH & BUILDS"
        title="EXPERIMENTS"
        subtitle="End-to-end intelligent systems spanning multi-modal transformers, clinical computer vision, geospatial satellite modeling, and edge inference."
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => {
          const isHovered = hoveredProjectId === project.id;
          return (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onMouseEnter={() => {
                setHoveredProjectId(project.id);
                onHoverSound();
                setCursorState({ variant: 'view', text: 'INSPECT' });
              }}
              onMouseLeave={() => {
                setHoveredProjectId(null);
                setCursorState({ variant: 'default', text: '' });
              }}
              onClick={() => openProjectModal(project)}
              className="group relative rounded-2xl glass-panel-glow border border-slate-800 hover:border-cyan-500/50 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-3">
                  <span className="text-cyan-400 font-bold tracking-wider">PROJECT // {project.number}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-[10px] text-emerald-400">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-cyan-400/80 mt-1 mb-4">
                  {project.tagline}
                </p>

                {/* 3D Scene Interactive Preview */}
                <div className="w-full h-44 rounded-xl bg-[#060910] border border-slate-800/60 overflow-hidden my-4 relative">
                  <Project3DCanvas theme={project.visualTheme} isHovered={isHovered} />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#0a0f18]/80 text-[9px] font-mono text-slate-400 border border-slate-800">
                    3D_SIMULATION
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-body leading-relaxed line-clamp-2 mt-2">
                  {project.description}
                </p>
              </div>

              {/* Technologies & Metrics */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-[11px] font-mono text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between font-mono text-xs pt-2">
                  <div className="flex items-center space-x-2 text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE ARCHITECTURE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex space-x-3 text-slate-400">
                    <span className="text-slate-200 font-bold">{project.metrics[0].label}: {project.metrics[0].value}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <div
          id="project-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#030407]/90 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel-glow border border-cyan-500/40 p-6 sm:p-8 md:p-10 text-slate-200 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              onMouseEnter={onHoverSound}
              className="absolute top-6 right-6 p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="font-mono text-xs text-cyan-400 mb-2">
              PROJECT_0{selectedProject.number} // {selectedProject.category}
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-100">
              {selectedProject.title}
            </h3>
            <p className="text-slate-400 font-body text-base mt-2">
              {selectedProject.tagline}
            </p>

            {/* Metrics Showcase */}
            <div className="grid grid-cols-3 gap-3 my-6">
              {selectedProject.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="font-display text-2xl font-bold text-cyan-300">{m.value}</div>
                  <div className="font-mono text-[11px] text-slate-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Description & Neural Pipeline */}
            <div className="space-y-6 text-sm">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
                  // ABSTRACT & MOTIVATION
                </h4>
                <p className="text-slate-300 font-body leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
                  // MODEL ARCHITECTURE & PIPELINE
                </h4>
                <div className="p-4 rounded-xl bg-[#060910] border border-slate-800 space-y-2 font-mono text-xs">
                  <div className="text-slate-300"><span className="text-cyan-400 font-bold">MODEL TYPE:</span> {selectedProject.architectureDetails.modelType}</div>
                  <div className="text-slate-300"><span className="text-cyan-400 font-bold">BENCHMARK DATASET:</span> {selectedProject.architectureDetails.dataset}</div>
                  <div className="text-slate-300"><span className="text-cyan-400 font-bold">LATENCY TARGET:</span> {selectedProject.architectureDetails.latency}</div>
                </div>
              </div>

              {/* Execution Pipeline Steps */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
                  // INFERENCE PIPELINE STAGES
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  {selectedProject.architectureDetails.pipeline.map((step, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px]">
                        {idx + 1}
                      </span>
                      <span className="text-slate-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Demo Sandbox Runner */}
              <div className="p-5 rounded-xl bg-[#080d18] border border-cyan-500/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-cyan-400 font-bold flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>RUN LIVE INFERENCE SIMULATOR</span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={demoInputText}
                    onChange={(e) => setDemoInputText(e.target.value)}
                    placeholder="Enter test telemetry or headline string..."
                    className="flex-1 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 font-mono text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    onClick={runDemoAnalysis}
                    disabled={isAnalyzing}
                    className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-colors whitespace-nowrap"
                  >
                    {isAnalyzing ? 'COMPUTING...' : 'EVALUATE'}
                  </button>
                </div>

                {demoResult && (
                  <div className="mt-4 p-3.5 rounded-lg bg-slate-900/90 border border-cyan-500/40 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-cyan-300 font-bold">
                      <span>CLASSIFICATION: {demoResult.label}</span>
                      <span>CONFIDENCE: {(demoResult.score * 100).toFixed(1)}%</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">{demoResult.details}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => {
                    onHoverSound();
                    setCursorState({ variant: 'open', text: 'GITHUB' });
                  }}
                  onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>SOURCE CODE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
