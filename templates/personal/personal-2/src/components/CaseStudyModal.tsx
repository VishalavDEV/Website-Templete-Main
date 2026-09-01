import { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Layers, CheckCircle2, AlertTriangle, Lightbulb, Code, Activity, Sparkles, Copy, Check } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenDemo: (project: Project) => void;
}

export default function CaseStudyModal({ project, onClose, onOpenDemo }: CaseStudyModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'process' | 'code'>('overview');

  if (!project) return null;

  const { caseStudy } = project;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(caseStudy.codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl my-8 rounded-3xl bg-[#080c18] border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
              PROJECT {project.number}
            </span>
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                {project.title} — Case Study
              </h3>
              <p className="font-mono text-xs text-slate-400">
                {project.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDemo(project)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold hover:bg-cyan-500/30 transition-colors"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>LIVE DEMO</span>
            </button>
            <button
              onClick={onClose}
              id="case-study-close-btn"
              aria-label="Close Case Study Modal"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-800/80 bg-[#060a14] overflow-x-auto">
          {[
            { id: 'overview', label: 'THE PROBLEM & IDEA' },
            { id: 'architecture', label: 'SYSTEM ARCHITECTURE & STACK' },
            { id: 'process', label: 'PROCESS & RESULTS' },
            { id: 'code', label: 'CODE SNIPPET & LEARNINGS' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all whitespace-nowrap border ${
                activeTab === tab.id
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300">
          
          {/* Tab 1: Overview (The Problem & The Idea) */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              
              {/* Problem Statement Card */}
              <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-widest font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-slate-200 text-base leading-relaxed font-sans">
                  {caseStudy.problem}
                </p>
              </div>

              {/* The Idea / Solution */}
              <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
                  <Lightbulb className="w-4 h-4" />
                  <span>THE IDEA & SOLUTION ARCHITECTURE</span>
                </div>
                <p className="text-slate-200 text-base leading-relaxed font-sans">
                  {caseStudy.idea}
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  KEY FEATURES
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.keyFeatures.map((feat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
                      <span className="font-heading font-bold text-sm text-cyan-300 block">
                        {feat.title}
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Highlights Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                      {m.label}
                    </span>
                    <span className="font-heading font-extrabold text-2xl text-cyan-400 mt-1 block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* Tab 2: Architecture & Tech Stack */}
          {activeTab === 'architecture' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              
              {/* Architecture Diagram Visualization */}
              <div className="p-6 rounded-2xl bg-[#060a14] border border-cyan-500/30 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>SYSTEM ARCHITECTURE DIAGRAM</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">
                    {caseStudy.architecture.title}
                  </span>
                </div>

                <p className="text-sm text-slate-400">
                  {caseStudy.architecture.description}
                </p>

                {/* Node Flow Diagram */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                  {caseStudy.architecture.nodes.map((node, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-400 uppercase">
                          {node.type}
                        </span>
                        <span className="font-mono text-[10px] text-slate-500">Node #{i + 1}</span>
                      </div>
                      <span className="font-heading font-bold text-sm text-white">
                        {node.name}
                      </span>
                      <p className="text-xs text-slate-400 leading-snug font-sans">
                        {node.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Taxonomy */}
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-lg text-white">
                  TECHNOLOGY STACK
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {caseStudy.techStack.map((stack, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-violet-400 font-bold block">
                        {stack.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {stack.items.map((item, j) => (
                          <span
                            key={j}
                            className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Tab 3: Process & Results */}
          {activeTab === 'process' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              
              {/* Development Process Steps */}
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-lg text-white">
                  DEVELOPMENT PROCESS
                </h4>
                <div className="space-y-3">
                  {caseStudy.developmentProcess.map((step, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results & Metrics */}
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-lg text-white">
                  RESULTS & BENCHMARKS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {caseStudy.results.map((res, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                      <span className="font-heading font-extrabold text-2xl text-emerald-400 block">
                        {res.metric}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {res.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <h4 className="font-heading font-bold text-base text-amber-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  KEY CHALLENGES OVERCOME
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc pl-5 font-sans">
                  {caseStudy.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

            </div>
          )}

          {/* Tab 4: Code & Learnings */}
          {activeTab === 'code' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              
              {/* Code Snippet Box */}
              <div className="rounded-2xl bg-[#050811] border border-slate-800 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-cyan-400" />
                    <span className="text-white font-semibold">{caseStudy.codeSnippet.fileName}</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono text-cyan-200 overflow-x-auto leading-relaxed bg-[#050811]">
                  <code>{caseStudy.codeSnippet.code}</code>
                </pre>
              </div>

              {/* What I Learned */}
              <div className="p-6 rounded-2xl bg-violet-950/20 border border-violet-500/30 space-y-3">
                <h4 className="font-heading font-bold text-base text-violet-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  WHAT I LEARNED
                </h4>
                <div className="space-y-2 text-sm text-slate-300">
                  {caseStudy.whatILearned.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-violet-400 font-mono">&gt;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live URL</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onOpenDemo(project)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-md"
          >
            <Activity className="w-4 h-4" />
            <span>Launch Interactive Simulator</span>
          </button>
        </div>

      </div>
    </div>
  );
}
