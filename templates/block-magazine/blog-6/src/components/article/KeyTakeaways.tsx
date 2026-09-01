import React, { memo } from 'react';
import { Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

export interface KeyTakeawaysProps {
  takeaways?: string[];
  readingTime?: string;
  theme?: 'blue' | 'violet' | 'coral' | 'lime' | 'amber';
}

export const KeyTakeaways: React.FC<KeyTakeawaysProps> = memo(({
  takeaways = [
    'Photonic crystal coatings allow structural facades to modulate light transmission without mechanical louvers.',
    'Spatial computing demands optical anchor points within physical room topologies for seamless holographic blending.',
    'Weightlessness in design is achieved through balanced contrast, translucent depth gradients, and atmospheric lighting meshes.',
  ],
  readingTime = '9 min read',
}) => {
  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl glass-card-airy bg-white/90 border border-slate-200/80 shadow-md">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <span className="font-display font-bold text-base text-slate-900">
            Key Editorial Takeaways
          </span>
        </div>
        <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
          Summary & Synthesis
        </span>
      </div>

      <ul className="flex flex-col gap-3.5">
        {takeaways.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 leading-relaxed font-sans font-medium">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
});

KeyTakeaways.displayName = 'KeyTakeaways';
