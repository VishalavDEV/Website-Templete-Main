import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectsData from '../../data/projects.json';
import { Project } from '../../types';

gsap.registerPlugin(ScrollTrigger);

export const HorizontalWorkSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const projects = (projectsData as Project[]).slice(0, 6);

  useEffect(() => {
    // Only enable GSAP pinned horizontal scroll on desktop (width >= 1024px)
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop || !containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const totalScrollWidth = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 bg-warm-white py-16 sm:py-24 border-y border-ink-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>02 — FEATURED REEL</span>
        </div>
        <span className="text-xs font-mono uppercase text-ink-muted hidden sm:inline">
          DRAG OR SCROLL HORIZONTALLY →
        </span>
      </div>

      {/* Horizontal Track */}
      <div
        ref={trackRef}
        className="flex gap-8 px-6 sm:px-12 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-6 lg:pb-0"
        data-cursor="DRAG"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => navigate(`/work/${project.id}`)}
            className="flex-shrink-0 w-[82vw] sm:w-[500px] lg:w-[580px] group cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl border border-ink-border aspect-[16/11] bg-paper relative">
              <img
                src={project.heroImage}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-[10px] font-mono uppercase font-semibold text-ink-primary">
                {project.number} / 06
              </div>
              <div className="absolute bottom-4 right-4 glass-panel-strong px-3 py-1 rounded-full text-xs font-mono uppercase text-accent-coral font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>VIEW</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="mt-4 flex items-start justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase text-accent-coral font-medium">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-ink-primary group-hover:text-accent-coral transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-ink-secondary mt-0.5">{project.client}</p>
              </div>
              <span className="text-xs font-mono text-ink-muted">{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
