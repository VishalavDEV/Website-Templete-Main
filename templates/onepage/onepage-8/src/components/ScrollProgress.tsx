import React from 'react';

interface ScrollProgressProps {
  progress: number;
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  progress,
  activeSection,
  onSectionClick,
}) => {
  const sections = [
    { id: 'hero', name: 'INTRO' },
    { id: 'about', name: 'ABOUT' },
    { id: 'skills', name: 'SKILLS' },
    { id: 'projects', name: 'WORK' },
    { id: 'machine', name: 'MACHINE' },
    { id: 'ailab', name: 'AI LAB' },
    { id: 'journey', name: 'JOURNEY' },
    { id: 'contact', name: 'CONTACT' },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center space-y-4 pointer-events-auto">
      {/* Percentage telemetry */}
      <span className="font-mono text-[10px] text-cyan-400/80 tracking-widest rotate-90 mb-4 select-none">
        {Math.round(progress * 100).toString().padStart(2, '0')}%
      </span>

      {/* Progress track */}
      <div className="relative w-0.5 h-48 bg-slate-800/80 rounded-full flex flex-col justify-between items-center py-1">
        {/* Fill indicator */}
        <div
          className="absolute top-0 w-full bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-150"
          style={{ height: `${progress * 100}%` }}
        />

        {/* Section anchor nodes */}
        {sections.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSectionClick(s.id)}
              title={s.name}
              className={`relative z-10 w-2.5 h-2.5 rounded-full transition-all duration-300 group flex items-center justify-center ${
                isActive
                  ? 'bg-cyan-400 scale-125 shadow-[0_0_10px_rgba(6,182,212,0.9)]'
                  : 'bg-slate-700 hover:bg-slate-400 hover:scale-110'
              }`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-6 px-2 py-0.5 rounded bg-[#0b101b] border border-slate-700 text-[9px] font-mono text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {s.name}
              </span>
            </button>
          );
        })}
      </div>

      <span className="font-mono text-[9px] text-slate-600 tracking-tighter uppercase select-none">
        Z-INDEX
      </span>
    </div>
  );
};
