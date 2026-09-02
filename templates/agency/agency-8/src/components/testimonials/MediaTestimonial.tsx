import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Volume2, Maximize2, Sparkles, Pause } from 'lucide-react';
import { CursorType } from '../../types';

interface MediaTestimonialProps {
  setCursorType: (type: CursorType) => void;
}

export const MediaTestimonial: React.FC<MediaTestimonialProps> = ({ setCursorType }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoModalOpen) {
        setIsVideoModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoModalOpen]);

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#060608] border-b border-[#ffffff10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#ffffff10]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
                05 / CINEMATIC TESTIMONIAL
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#FAF9F6] uppercase tracking-tight">
              HEAR IT<br />FROM THEM.
            </h2>
          </div>

          <p className="text-sm text-[#888888] font-mono max-w-sm">
            IN CONVERSATION WITH LEADERS RESHAPING SPATIAL COMPUTING & GLOBAL FINTECH.
          </p>
        </div>

        {/* Cinematic Media Card Placeholder */}
        <div className="relative group overflow-hidden bg-[#0e0e11] border border-white/15 aspect-[16/9] sm:aspect-[21/9] max-h-[600px] w-full flex items-center justify-center">
          {/* Background Cinematic Still */}
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=85"
            alt="Client story interview preview"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-black/40 to-transparent" />

          {/* Corner frame markers */}
          <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-widest text-white/60">
            [ REC / 4K LOG ]
          </div>
          <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest text-[#0066FF] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>03:42 DOC</span>
          </div>

          {/* Center Play Button Overlay */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            onMouseEnter={() => setCursorType('pointer')}
            onMouseLeave={() => setCursorType('default')}
            className="relative z-10 flex flex-col items-center gap-4 group/btn cursor-pointer outline-none"
            aria-label="Play client documentary video"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover/btn:scale-110 group-hover/btn:bg-[#0066FF] group-hover/btn:text-white transition-all duration-300">
              <Play className="w-8 h-8 ml-1 fill-current" />
            </div>

            <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 font-mono text-xs uppercase tracking-[0.25em] text-white">
              PLAY STORY ↗
            </div>
          </button>

          {/* Bottom Video Metadata */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-white/80">
            <div className="space-y-0.5">
              <p className="font-display font-bold text-sm text-white uppercase">
                MAYA RICHARDSON & ALEX MORGAN
              </p>
              <p className="text-[11px] text-[#888888]">
                CMO / AURA & CEO / NORTH — THE CRAFT OF TRANSFORMATION
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-[11px] text-[#888888]">
              <span>SOUND: 48kHz STEREO</span>
              <span>·</span>
              <span>DIRECTOR'S CUT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player Dialog */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#09090c] border border-white/20 p-6 sm:p-8 shadow-2xl z-10 text-[#FAF9F6] my-auto"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase">
                    IN CONVERSATION: CLIENT PERSPECTIVES
                  </h3>
                  <p className="font-mono text-xs text-[#888888]">
                    MAYA RICHARDSON (CMO, AURA) · ALEX MORGAN (CEO, NORTH)
                  </p>
                </div>

                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  onMouseEnter={() => setCursorType('pointer')}
                  onMouseLeave={() => setCursorType('default')}
                  className="px-3 py-1.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 font-mono text-xs uppercase tracking-widest text-[#888888] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>CLOSE</span>
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Simulated Cinematic Player Interface */}
              <div className="relative aspect-[16/9] w-full bg-black border border-white/10 overflow-hidden flex flex-col justify-between p-6">
                {/* Background Stills with Atmospheric Lighting */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=85"
                  alt="Client interview active frame"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale contrast-125"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Subtitle / Quote Overlay */}
                <div className="relative z-10 max-w-xl self-center text-center my-auto">
                  <blockquote className="font-editorial italic text-2xl sm:text-3xl text-white leading-relaxed">
                    "When you work with Studio, there is no compromise between engineering capability and emotional beauty."
                  </blockquote>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#0066FF] pt-4">
                    — MAYA RICHARDSON, CMO / AURA
                  </p>
                </div>

                {/* Video Controls Bar */}
                <div className="relative z-10 pt-4 border-t border-white/15 flex flex-col gap-3">
                  {/* Progress Scrubber */}
                  <div className="w-full h-1 bg-white/20 relative rounded-full overflow-hidden">
                    <div className="h-full bg-[#0066FF] w-[45%]" />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#888888]">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-white hover:text-[#0066FF] transition-colors cursor-pointer"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <span className="text-white">01:42 / 03:42</span>
                      <div className="hidden sm:flex items-center gap-1">
                        <Volume2 className="w-3.5 h-3.5 text-white/70" />
                        <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-[80%] h-full bg-white" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-white/10 text-white rounded text-[10px]">
                        1080P HD
                      </span>
                      <Maximize2 className="w-4 h-4 text-white/70 hover:text-white cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
