import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Aging / Damaged Substrate',
  afterLabel = 'Aurox Certified System',
  aspectRatio = 'aspect-[16/10]',
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-2xl border border-slate-700/60 shadow-2xl cursor-ew-resize group ${aspectRatio} ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* AFTER (Bottom layer) */}
      <img
        src={afterImage}
        alt="After restoration"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-lg flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          {afterLabel}
        </span>
      </div>

      {/* BEFORE (Top clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage}
          alt="Before restoration"
          className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-95"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-900/90 text-slate-200 border border-slate-700 shadow-lg flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-red-400" />
            {beforeLabel}
          </span>
        </div>
      </div>

      {/* Divider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none transform -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 border-2 border-white shadow-xl flex items-center justify-center text-slate-950 font-bold text-xs">
          <span className="flex items-center gap-0.5 tracking-tighter">
            ◀▶
          </span>
        </div>
      </div>
    </div>
  );
};
