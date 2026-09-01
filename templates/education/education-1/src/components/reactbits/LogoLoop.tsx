import React from 'react';

interface LogoItem {
  name: string;
  badge?: string;
  icon?: string;
}

interface LogoLoopProps {
  items: LogoItem[];
  speed?: number; // seconds for full scroll
  className?: string;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  items,
  speed = 30,
  className = '',
}) => {
  // Duplicate array twice to ensure seamless continuous marquee
  const duplicated = [...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden w-full py-4 group ${className}`}>
      {/* Left/Right Fade Masks for Light Mode */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div
        className="flex gap-8 sm:gap-12 w-max animate-[marquee_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicated.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 hover:bg-white transition-all cursor-default select-none shrink-0 shadow-xs"
          >
            <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center font-black text-xs text-indigo-700 font-display">
              {item.name.charAt(0)}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
                {item.name}
              </span>
              {item.badge && (
                <span className="text-[10px] text-indigo-600 font-semibold font-mono">
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};
