import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface DepthCarouselItem {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  image: string;
  url: string;
  date?: string;
  meta?: string;
  tag?: string;
  badge?: string;
}

interface DepthCarouselProps {
  items: DepthCarouselItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
  perspective?: number;
  spread?: number;
  tiltAngle?: number;
  height?: string;
  variant?: 'magazine' | 'story' | 'photo';
}

export const DepthCarousel: React.FC<DepthCarouselProps> = ({
  items,
  autoplay = false,
  autoplayInterval = 6000,
  perspective = 1100,
  spread = 220,
  tiltAngle = 18,
  height = 'h-[460px] sm:h-[540px]',
  variant = 'magazine'
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = items.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isInViewport) return;

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplay, autoplayInterval, isHovered, handleNext, total]);

  // Wheel interaction (debounced)
  const lastWheelTime = useRef(0);
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 450) return;
    if (Math.abs(e.deltaX) > 30 || Math.abs(e.deltaY) > 40) {
      if (e.deltaX > 0 || e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      lastWheelTime.current = now;
    }
  };

  // Drag interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX === null) return;
    const diff = e.clientX - dragStartX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setDragStartX(null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const diff = e.changedTouches[0].clientX - dragStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setDragStartX(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setDragStartX(null);
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      role="region"
      aria-label="Interactive 3D Carousel"
      className="relative w-full select-none outline-none focus:ring-1 focus:ring-[#F27D26]/40 rounded-2xl py-6"
    >
      {/* 3D Perspective Stage */}
      <div
        className={`relative w-full ${height} flex items-center justify-center overflow-visible`}
        style={{ perspective: `${perspective}px` }}
      >
        {items.map((item, index) => {
          // Calculate cyclic offset relative to activeIndex
          let offset = index - activeIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);
          const isVisible = absOffset <= 2.5;

          if (!isVisible) return null;

          // Depth transformation parameters
          const translateX = offset * spread;
          const translateZ = -absOffset * 180;
          const rotateY = -offset * tiltAngle;
          const scale = Math.max(0.72, 1 - absOffset * 0.14);
          const opacity = Math.max(0.2, 1 - absOffset * 0.32);
          const zIndex = 50 - Math.round(absOffset * 10);
          const blur = absOffset === 0 ? 0 : Math.min(absOffset * 2.5, 6);

          return (
            <div
              key={item.id}
              onClick={() => {
                if (!isCenter) {
                  setActiveIndex(index);
                }
              }}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
                filter: `blur(${blur}px)`,
                transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, filter 0.5s ease',
              }}
              className={`absolute cursor-pointer rounded-2xl overflow-hidden transition-shadow duration-500 will-change-transform bg-[#121214] ${
                variant === 'magazine'
                  ? 'w-[260px] sm:w-[320px] md:w-[360px] aspect-[3/4] border border-zinc-800 shadow-2xl shadow-black/90'
                  : variant === 'photo'
                  ? 'w-[290px] sm:w-[420px] md:w-[500px] aspect-[16/10] border border-zinc-800 shadow-2xl shadow-black/90'
                  : 'w-[270px] sm:w-[340px] md:w-[380px] aspect-[4/5] border border-zinc-800 shadow-2xl shadow-black/90'
              } ${isCenter ? 'ring-1 ring-[#F27D26]' : 'hover:opacity-90'}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 brightness-80"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-black/20" />

              {/* Magazine Framing Ribbon */}
              {variant === 'magazine' && (
                <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between border-b border-zinc-800 bg-[#0a0a0a]/80 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
                    <span className="font-mono tracking-[0.3em] text-[10px] text-white font-black uppercase">
                      TERRA.
                    </span>
                  </div>
                  <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase font-bold">
                    {item.meta || 'ISSUE'}
                  </span>
                </div>
              )}

              {/* Badges / Category */}
              {item.badge && (
                <div className="absolute top-4 left-4 z-10 px-2.5 py-0.5 rounded-full bg-[#F27D26] text-black text-[9px] font-black font-mono tracking-widest uppercase">
                  {item.badge}
                </div>
              )}

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col justify-end">
                {item.category && (
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#F27D26] uppercase font-bold mb-1">
                    {item.category}
                  </span>
                )}

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight line-clamp-2 drop-shadow-md">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="text-xs text-zinc-400 line-clamp-2 mt-1.5 leading-relaxed font-light">
                    {item.subtitle}
                  </p>
                )}

                {/* Footer Link Button (Only on center item) */}
                {isCenter && (
                  <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      {item.date || 'DISCOVERY ARCHIVE'}
                    </span>
                    <Link
                      to={item.url}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F27D26] text-black text-[10px] font-black font-mono tracking-wider hover:bg-[#ff9345] transition-colors shadow-lg shadow-[#F27D26]/20"
                    >
                      <span>READ</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel Navigation Arrows & Indicators */}
      <div className="max-w-md mx-auto mt-6 flex items-center justify-between px-4">
        <button
          onClick={handlePrev}
          aria-label="Previous story"
          className="p-2.5 rounded-full bg-[#121214] border border-zinc-800 text-white hover:border-[#F27D26] hover:text-[#F27D26] transition-all transform active:scale-95 shadow-md cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-8 bg-[#F27D26]'
                  : 'w-2 bg-zinc-800 hover:bg-zinc-700'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next story"
          className="p-2.5 rounded-full bg-[#121214] border border-zinc-800 text-white hover:border-[#F27D26] hover:text-[#F27D26] transition-all transform active:scale-95 shadow-md cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
