import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalProjects() {
  const { setCursorState } = useCursor();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const showcasePanels = [
    {
      id: '01',
      title: 'QUANTUM AI DASHBOARD',
      category: 'ENTERPRISE SAAS',
      year: '2026',
      desc: 'Predictive intelligence platform designed for high-frequency trading networks with real-time WebGL charts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: '02',
      title: 'HYPERION CYBERPUNK LABS',
      category: 'IMMERSIVE WEBGL 3D',
      year: '2026',
      desc: '3D interactive product configurator for automotive concept vehicles with custom shader animations.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: '03',
      title: 'SYNTHESIS SOUNDSCAPE',
      category: 'AUDIO EXPERIENCE',
      year: '2025',
      desc: 'Generative ambient sound engine and web studio built for digital creators and electronic producers.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: '04',
      title: 'NEO SPATIAL PORTAL',
      category: 'AR / SPATIAL COMPUTING',
      year: '2026',
      desc: 'WebXR spatial commerce interface allowing users to preview architectural models in augmented reality.',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    let ctx = gsap.context(() => {
      const totalWidth = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: () => -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#05070f] py-16">
      {/* Pinned Header */}
      <div className="px-6 md:px-12 mb-8 flex justify-between items-end max-w-7xl mx-auto">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPERIMENTAL LABS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-white">
            HORIZONTAL SHOWCASE
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>SCROLL DOWN TO EXPLORE</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
        </div>
      </div>

      {/* Horizontal Slider Track Container */}
      <div className="w-full overflow-hidden">
        <div ref={containerRef} className="flex gap-8 px-6 md:px-12 w-max">
          {showcasePanels.map((panel) => (
            <div
              key={panel.id}
              onMouseEnter={() => setCursorState('view', 'EXPLORE')}
              onMouseLeave={() => setCursorState('default')}
              className="w-[85vw] md:w-[65vw] lg:w-[50vw] h-[60vh] md:h-[65vh] glass-panel rounded-3xl p-6 md:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group cursor-pointer shrink-0"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${panel.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-[#05070f]/70 to-transparent" />

              {/* Header Badge */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="text-4xl md:text-5xl font-syne font-extrabold text-white/30 group-hover:text-cyan-400 transition-colors">
                  {panel.id}
                </span>
                <span className="text-xs font-mono tracking-widest text-slate-300 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {panel.category} — {panel.year}
                </span>
              </div>

              {/* Content Description */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl md:text-4xl font-syne font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {panel.title}
                </h3>
                <p className="text-sm md:text-base text-slate-300 font-light max-w-xl line-clamp-2">
                  {panel.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
