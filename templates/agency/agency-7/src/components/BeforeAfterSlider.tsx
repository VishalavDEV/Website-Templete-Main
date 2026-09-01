import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Layers } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    };
    const handleGlobalUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('touchmove', handleGlobalTouchMove);
      window.addEventListener('mouseup', handleGlobalUp);
      window.addEventListener('touchend', handleGlobalUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-500">
        <span className="flex items-center space-x-2">
          <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span>INTERACTIVE COMPARISON SLIDER</span>
        </span>
        <span className="text-blue-600 dark:text-blue-400 font-bold">DRAG DIVIDER</span>
      </div>

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-800 select-none cursor-ew-resize shadow-2xl"
        data-cursor="DRAG"
      >
        {/* AFTER IMAGE (Final UI) - FULL BACKGROUND */}
        <img
          src="/src/assets/images/service_ui_ux_design_1787881454335.jpg"
          alt="Final UI Render"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute top-4 right-4 z-10 font-mono text-xs uppercase bg-blue-600 text-white px-3 py-1 rounded font-bold shadow-md">
          FINAL PRODUCTION UI
        </div>

        {/* BEFORE IMAGE (Wireframe) - CLIPPED TOP LAYER */}
        <div
          className="absolute inset-0 overflow-hidden border-r-2 border-white shadow-2xl"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="/src/assets/images/service_design_system_1787881469264.jpg"
            alt="Wireframe Layout"
            className="absolute inset-0 h-full w-full object-cover max-w-none"
            style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%' }}
          />
          <div className="absolute top-4 left-4 z-10 font-mono text-xs uppercase bg-neutral-900 text-white px-3 py-1 rounded font-bold shadow-md">
            LOW-FIDELITY WIREFRAME
          </div>
        </div>

        {/* DRAGGABLE DIVIDER HANDLE */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-2xl"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-white border-2 border-white shadow-xl hover:scale-110 transition-transform">
            <span className="font-mono text-[10px] font-bold">◄ ►</span>
          </div>
        </div>
      </div>
    </div>
  );
};
