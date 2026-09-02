import React from 'react';
import { Sparkles, Code2, Cpu, Globe, Compass, Layers } from 'lucide-react';

const MARQUEE_ITEMS = [
  { text: 'SPATIAL USER INTERFACES', icon: <Compass className="w-3.5 h-3.5" /> },
  { text: 'REACT 19 & NEXT.JS', icon: <Code2 className="w-3.5 h-3.5" /> },
  { text: 'CREATIVE 3D WEBGL & SHADERS', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { text: 'ENTERPRISE DESIGN TOKENS', icon: <Layers className="w-3.5 h-3.5" /> },
  { text: 'SUB-SECOND PERFORMANCE', icon: <Cpu className="w-3.5 h-3.5" /> },
  { text: 'HUMAN-COMPUTER INTERACTION', icon: <Globe className="w-3.5 h-3.5" /> },
];

export const MarqueeBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-slate-200 bg-white/70 backdrop-blur-sm select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest text-slate-700 uppercase font-bold"
          >
            <span className="text-blue-600">{item.icon}</span>
            <span>{item.text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 ml-5" />
          </div>
        ))}
      </div>
    </div>
  );
};
