import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Plus, Sparkles, Building2, User } from 'lucide-react';
import { ClientStory, CursorType } from '../../types';
import { CLIENT_STORIES } from '../../data/testimonialsData';

interface TestimonialIndexProps {
  setCursorType: (type: CursorType) => void;
  onSelectStory: (story: ClientStory) => void;
}

export const TestimonialIndex: React.FC<TestimonialIndexProps> = ({
  setCursorType,
  onSelectStory,
}) => {
  const [hoveredStory, setHoveredStory] = useState<ClientStory | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse movement for floating editorial preview
  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      setTargetPos({ x: relativeX, y: relativeY });
    };

    const smoothMotion = () => {
      setMousePos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(smoothMotion);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(smoothMotion);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetPos]);

  return (
    <section 
      id="story-index" 
      ref={containerRef}
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#080808] border-b border-[#ffffff10] relative select-none"
    >
      {/* Floating Hover Portrait on Desktop */}
      <AnimatePresence>
        {hoveredStory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="hidden lg:block pointer-events-none absolute z-30 w-64 h-80 overflow-hidden shadow-2xl bg-[#111113] border border-white/20"
            style={{
              left: `${mousePos.x + 30}px`,
              top: `${mousePos.y - 140}px`,
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            <div className="relative w-full h-full">
              <img
                src={hoveredStory.image}
                alt={hoveredStory.person}
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-[#0066FF]">
                  {hoveredStory.industry}
                </p>
                <p className="font-display font-bold text-sm text-white uppercase tracking-wide">
                  {hoveredStory.person}
                </p>
                <p className="font-mono text-[10px] text-[#888888]">
                  {hoveredStory.role} / {hoveredStory.client}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#ffffff10]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
                02 / DIRECTORY OF PERSPECTIVES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#FAF9F6] uppercase tracking-tight">
              CLIENT STORY INDEX
            </h2>
          </div>

          <div className="font-mono text-xs text-[#888888] space-y-1">
            <p className="flex items-center gap-2">
              <span className="text-[#0066FF]">●</span>
              <span>SELECT TO EXPAND PERSPECTIVE</span>
            </p>
            <p className="text-[11px] text-[#666666]">
              CONFIDENTIAL PARTNERSHIP REVIEWS 2024–2026
            </p>
          </div>
        </div>

        {/* Editorial Index Rows */}
        <div className="divide-y divide-[#ffffff10] border-y border-[#ffffff10]">
          {CLIENT_STORIES.map((story, index) => {
            const isHovered = hoveredStory?.id === story.id;
            const isAnyHovered = hoveredStory !== null;
            const isMuted = isAnyHovered && !isHovered;
            const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;

            return (
              <div
                key={story.id}
                tabIndex={0}
                role="button"
                aria-label={`Read story from ${story.person} at ${story.client}`}
                onClick={() => onSelectStory(story)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectStory(story);
                  }
                }}
                onMouseEnter={() => {
                  setHoveredStory(story);
                  setCursorType('pointer');
                }}
                onMouseLeave={() => {
                  setHoveredStory(null);
                  setCursorType('default');
                }}
                onFocus={() => setHoveredStory(story)}
                onBlur={() => setHoveredStory(null)}
                className={`group relative py-8 sm:py-10 px-4 sm:px-6 transition-all duration-300 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#0066FF] ${
                  isHovered ? 'bg-white/[0.02]' : ''
                } ${isMuted ? 'opacity-35' : 'opacity-100'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
                  {/* Number & Client */}
                  <div className="md:col-span-4 flex items-baseline gap-6">
                    <span className="font-mono text-xs text-[#888888] group-hover:text-[#0066FF] transition-colors">
                      {formattedIndex}
                    </span>
                    <span className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#FAF9F6] group-hover:text-white uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {story.client}
                    </span>
                  </div>

                  {/* Person & Role */}
                  <div className="md:col-span-4 flex flex-col justify-center">
                    <span className="text-base sm:text-lg font-medium text-[#FAF9F6] tracking-wide">
                      {story.person}
                    </span>
                    <span className="font-mono text-xs text-[#888888] uppercase tracking-wider">
                      {story.role}
                    </span>
                  </div>

                  {/* Category / Industry */}
                  <div className="md:col-span-3">
                    <span className="inline-block px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-[#888888] group-hover:text-[#FAF9F6] bg-white/[0.02] border border-white/5 group-hover:border-white/15 transition-all">
                      {story.industry}
                    </span>
                  </div>

                  {/* Arrow & Action */}
                  <div className="md:col-span-1 flex items-center justify-end">
                    <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#0066FF] group-hover:bg-[#0066FF] flex items-center justify-center text-white/50 group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Subtle active highlight bar on left */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#0066FF] transition-transform duration-300 origin-center ${
                    isHovered ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
