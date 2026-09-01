import React from 'react';
import { Story } from '../types';
import { Compass, FileText, CheckCircle2, Clock, Shield } from 'lucide-react';

interface EditorialConstellationProps {
  stories: Story[];
  onFilterStatus: (status: string) => void;
}

export const EditorialConstellation: React.FC<EditorialConstellationProps> = ({ stories, onFilterStatus }) => {
  const stages = [
    { name: 'Draft', icon: FileText, color: 'text-[#64748B]', bg: 'bg-[#64748B]/10', border: 'border-[#64748B]/30' },
    { name: 'Review', icon: Compass, color: 'text-[#D6A85D]', bg: 'bg-[#D6A85D]/10', border: 'border-[#D6A85D]/30' },
    { name: 'Approved', icon: CheckCircle2, color: 'text-[#6FAFD4]', bg: 'bg-[#6FAFD4]/10', border: 'border-[#6FAFD4]/30' },
    { name: 'Scheduled', icon: Clock, color: 'text-[#183B56]', bg: 'bg-[#183B56]/10', border: 'border-[#183B56]/30' },
    { name: 'Published', icon: Shield, color: 'text-[#5FAF8A]', bg: 'bg-[#5FAF8A]/10', border: 'border-[#5FAF8A]/30' }
  ];

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-5 shadow-2xs space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Publishing Ecosystem</span>
          <h3 className="font-serif font-bold text-[#183B56] text-base">Editorial Constellation</h3>
        </div>
        <span className="text-xs text-[#718096] bg-[#F5F9FB] px-2.5 py-1 rounded-lg border border-[#DCE7EC] font-mono">
          Networked Nodes
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {stages.map((stage) => {
          const count = stories.filter(s => s.status === stage.name).length;
          const latest = stories.find(s => s.status === stage.name);
          const Icon = stage.icon;

          return (
            <button
              key={stage.name}
              onClick={() => onFilterStatus(stage.name)}
              className={`
                p-4 bg-[#F5F9FB] hover:bg-[#CDEFF4]/20 border ${stage.border} rounded-xl text-left
                transition-all group cursor-pointer relative space-y-2
              `}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#203040]">{stage.name}</span>
                <div className={`w-8 h-8 rounded-lg ${stage.bg} flex items-center justify-center ${stage.color}`}>
                  <Icon size={16} />
                </div>
              </div>

              <div>
                <p className="text-2xl font-serif font-bold text-[#183B56] tracking-tight">{count}</p>
                <p className="text-[10px] font-mono text-[#718096] truncate mt-1">
                  {latest ? latest.title : 'No active stories'}
                </p>
              </div>

              <div className="pt-2 border-t border-[#DCE7EC]/60 flex items-center justify-between text-[10px] font-mono text-[#718096]">
                <span>Status Active</span>
                <span className="text-[#6FAFD4] group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
