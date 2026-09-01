import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { AboutScene } from '../scenes/AboutScene';
import { Terminal, Brain, Code2, Cpu, Eye, Database, Sparkles, ArrowUpRight } from 'lucide-react';
import { CursorState } from '../types';

interface AboutSectionProps {
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
  onClickSound: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  setCursorState,
  onHoverSound,
  onClickSound,
}) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      icon: Brain,
      title: 'ARTIFICIAL INTELLIGENCE & ML',
      tag: 'RESEARCH & MODELING',
      desc: 'Specializing in deep learning architectures, multi-modal foundation models, and distributed training optimizations.',
      skills: ['PyTorch', 'TensorRT', 'Transformers', 'LoRA / Fine-tuning', 'Diffusion']
    },
    {
      icon: Eye,
      title: 'COMPUTER VISION & GEOSPATIAL',
      tag: 'SPATIAL INTELLIGENCE',
      desc: 'Extracting semantic understanding from high-resolution satellite imagery, 3D anatomical scans, and sub-millisecond edge pose graphs.',
      skills: ['DenseNet', 'U-Net', 'MediaPipe', 'OpenCV', 'Sentinel-2']
    },
    {
      icon: Cpu,
      title: 'HIGH-PERFORMANCE SYSTEMS',
      tag: 'ENGINEERING & DEPLOYMENT',
      desc: 'Building asynchronous inference microservices, WebGL real-time shaders, and containerized MLOps pipelines.',
      skills: ['FastAPI', 'Three.js / WebGL', 'Docker', 'CUDA', 'TypeScript']
    },
    {
      icon: Database,
      title: 'VECTOR EMBEDDINGS & DATA',
      tag: 'STORAGE & RETRIEVAL',
      desc: 'Designing high-dimensional vector retrieval indexes, relational schemas, and data pipelines for zero-loss reproducibility.',
      skills: ['pgvector', 'PostgreSQL', 'Pandas', 'NumPy', 'DVC']
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        index="02"
        category="PHILOSOPHY & FOUNDATIONS"
        title="WHO IS BEHIND THE SYSTEM?"
        subtitle="Computer Science Engineer dedicated to translating theoretical mathematical models into robust, production-grade intelligence."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Interactive 3D Data Crystals */}
        <div className="lg:col-span-5 relative rounded-2xl glass-panel-glow border border-cyan-500/20 overflow-hidden h-[380px] lg:h-[480px] flex items-center justify-center">
          <AboutScene />
          <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan-400">
            // 3D HOLOGRAPHIC TIMELINE
          </div>
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#060a12]/80 backdrop-blur-md border border-slate-800 font-mono text-xs">
            <span className="text-slate-400">CORE PRINCIPLE:</span>
            <p className="text-slate-200 mt-1 font-sans text-xs leading-relaxed">
              "Code is the medium; intelligence is the artifact."
            </p>
          </div>
        </div>

        {/* Right Pillars List */}
        <div className="lg:col-span-7 space-y-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;
            return (
              <div
                key={pillar.title}
                id={`about-pillar-${idx}`}
                onClick={() => {
                  onClickSound();
                  setActivePillar(idx);
                }}
                onMouseEnter={() => {
                  onHoverSound();
                  setCursorState({ variant: 'interact', text: 'INSPECT' });
                }}
                onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
                className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'glass-panel-glow border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.15)] translate-x-2'
                    : 'glass-panel border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2.5 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                        {pillar.tag}
                      </span>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-slate-100 mt-0.5">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-body mt-3 leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/60">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded bg-slate-900/90 text-[11px] font-mono text-cyan-300/90 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
