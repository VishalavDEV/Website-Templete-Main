import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Cpu, Disc3, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { audioService } from '../utils/audio';

interface HeroVisualProps {
  onSelectProject?: (slug: string) => void;
}

const previewProjects = [
  {
    ref: 'REF. 0822-X',
    slug: 'aether',
    title: 'Aether Digital Platform',
    category: 'Product',
    industry: 'Fintech',
    desc: 'Next-generation banking experience for Gen Alpha. Seamless, invisible, and human-centric.',
    stats: '1.4M Active',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    ref: 'REF. 0914-N',
    slug: 'nova',
    title: 'Nova Robotics Identity',
    category: 'Branding',
    industry: 'DeepTech',
    desc: 'Kinetic brand system, hardware design language, and design system for next-gen humanoid robotics.',
    stats: 'Red Dot 2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'
  },
  {
    ref: 'REF. 1104-M',
    slug: 'meridian',
    title: 'Meridian Private UI',
    category: 'Digital',
    industry: 'WealthTech',
    desc: 'Calm, high-contrast trading interface for institutional asset managers and private liquidity desks.',
    stats: '99.99% SLA',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop'
  }
];

export function HeroVisual({ onSelectProject }: HeroVisualProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      setMousePos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const project = previewProjects[activeIdx];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] lg:h-[600px] flex items-center justify-center p-4 select-none"
    >
      {/* Blurred glowing ambient lighting backdrops */}
      <div className="absolute top-10 right-4 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-4 w-72 h-72 bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Glass Cards Stack */}
      <div className="relative w-full max-w-[420px] aspect-square">
        {/* Background Card Underlay with subtle rotation */}
        <motion.div
          className="absolute inset-0 border border-white/10 rounded-2xl rotate-3 bg-[#151821]/50 backdrop-blur-md z-0"
          animate={{
            rotate: 3 + mousePos.x * 2,
            x: mousePos.x * -8,
            y: mousePos.y * -8,
          }}
          transition={{ type: 'spring', damping: 20 }}
        />

        {/* Foreground Primary Glass Card */}
        <motion.div
          className="absolute inset-0 border border-white/10 rounded-2xl -rotate-3 bg-[#1D202B]/80 backdrop-blur-xl z-10 flex flex-col p-7 sm:p-8 shadow-2xl justify-between cursor-pointer group hover:border-violet-500/40 transition-colors"
          animate={{
            rotate: -3 + mousePos.x * -2,
            x: mousePos.x * 10,
            y: mousePos.y * 10,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          onClick={() => {
            audioService.playClick();
            onSelectProject?.(project.slug);
          }}
        >
          {/* Card Top Row: Glyph & Ref Code */}
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <div className="w-4 h-4 border-2 border-violet-400 rounded-sm group-hover:bg-violet-400/20 transition-colors" />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-white/40 font-mono tracking-widest">{project.ref}</span>
              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.stats}
              </span>
            </div>
          </div>

          {/* Project Content */}
          <div className="my-auto space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 font-bold">
                Featured Case
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] font-mono text-white/40 uppercase">2026 Archive</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
              {project.desc}
            </p>
          </div>

          {/* Card Bottom Row: Tags & Action */}
          <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider text-white/70 font-mono">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider text-white/70 font-mono">
                {project.industry}
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs font-mono text-violet-400 group-hover:text-white font-bold transition-colors">
              <span>EXPLORE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Switcher Dots */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {previewProjects.map((p, idx) => (
          <button
            key={p.ref}
            onClick={() => {
              audioService.playClick();
              setActiveIdx(idx);
            }}
            className={`transition-all rounded-full ${
              idx === activeIdx
                ? 'w-8 h-1.5 bg-violet-400'
                : 'w-2 h-1.5 bg-white/20 hover:bg-white/40'
            }`}
            title={`View ${p.title}`}
          />
        ))}
      </div>
    </div>
  );
}
