import React from 'react';
import { Sparkles, Layers, Image as ImageIcon, UserPlus, Calendar, PlusCircle } from 'lucide-react';

interface CreationDockProps {
  onOpenCreate: (type: string) => void;
}

export const CreationDock: React.FC<CreationDockProps> = ({ onOpenCreate }) => {
  const actions = [
    { type: 'story', label: '+ STORY', icon: Sparkles, color: 'hover:bg-[#183B56] hover:text-white' },
    { type: 'collection', label: '+ COLLECTION', icon: Layers, color: 'hover:bg-[#6FAFD4] hover:text-white' },
    { type: 'media', label: '+ MEDIA', icon: ImageIcon, color: 'hover:bg-[#5FAF8A] hover:text-white' },
    { type: 'author', label: '+ AUTHOR', icon: UserPlus, color: 'hover:bg-[#D6A85D] hover:text-white' },
    { type: 'assignment', label: '+ ASSIGNMENT', icon: PlusCircle, color: 'hover:bg-[#183B56] hover:text-white' },
    { type: 'event', label: '+ EVENT', icon: Calendar, color: 'hover:bg-[#64748B] hover:text-white' }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-1.5 p-2 bg-white/90 backdrop-blur-md border border-[#DCE7EC] rounded-2xl shadow-xl">
      {actions.map((act) => {
        const Icon = act.icon;
        return (
          <button
            key={act.type}
            onClick={() => onOpenCreate(act.type)}
            className={`
              flex items-center gap-1.5 px-3.5 py-2 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl
              text-xs font-mono font-bold text-[#203040] transition-all cursor-pointer ${act.color}
            `}
          >
            <Icon size={14} />
            <span>{act.label}</span>
          </button>
        );
      })}
    </div>
  );
};
