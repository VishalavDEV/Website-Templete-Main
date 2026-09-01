import React from 'react';
import { SpotlightCard } from './SpotlightCard';

export interface BentoCardItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: string; // e.g., 'md:col-span-2'
  tag?: string;
  accentColor?: string;
  onClick?: () => void;
}

interface MagicBentoProps {
  items: BentoCardItem[];
  className?: string;
}

export const MagicBento: React.FC<MagicBentoProps> = ({
  items,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 ${className}`}>
      {items.map((item) => (
        <SpotlightCard
          key={item.id}
          className={`${item.colSpan || 'md:col-span-1'} p-6 sm:p-8 flex flex-col justify-between group hover:border-indigo-500/50 transition-all cursor-pointer`}
          spotlightColor="rgba(99, 102, 241, 0.15)"
          onClick={item.onClick}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                {item.icon}
              </div>
              {item.tag && (
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                  {item.tag}
                </span>
              )}
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white font-display group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-xs text-indigo-400 font-mono mt-0.5">
                  {item.subtitle}
                </p>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-indigo-300">
            <span>Explore track</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
};
