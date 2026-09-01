import React from 'react';
import { Clock, BookOpen, Layers, TrendingUp } from 'lucide-react';

interface SignalStripProps {
  queueCount: number;
  reviewCount: number;
  activeDesksCount: number;
  momentumPercentage: string;
  onNavigate: (view: string) => void;
}

export const SignalStrip: React.FC<SignalStripProps> = ({
  queueCount,
  reviewCount,
  activeDesksCount,
  momentumPercentage,
  onNavigate
}) => {
  const signals = [
    {
      label: 'PUBLICATION QUEUE',
      value: String(queueCount).padStart(2, '0'),
      icon: Clock,
      color: 'text-[#183B56]',
      bg: 'bg-[#CDEFF4]/30',
      border: 'border-[#6FAFD4]/40',
      view: 'calendar'
    },
    {
      label: 'REVIEW PRESSURE',
      value: String(reviewCount).padStart(2, '0'),
      icon: BookOpen,
      color: 'text-[#D6A85D]',
      bg: 'bg-[#D6A85D]/10',
      border: 'border-[#D6A85D]/30',
      view: 'reviews'
    },
    {
      label: 'ACTIVE DESKS',
      value: String(activeDesksCount).padStart(2, '0'),
      icon: Layers,
      color: 'text-[#5FAF8A]',
      bg: 'bg-[#5FAF8A]/10',
      border: 'border-[#5FAF8A]/30',
      view: 'constellation'
    },
    {
      label: 'READER MOMENTUM',
      value: momentumPercentage,
      icon: TrendingUp,
      color: 'text-[#183B56]',
      bg: 'bg-[#B9E4F4]/30',
      border: 'border-[#B9E4F4]',
      view: 'readers'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {signals.map((sig, idx) => {
        const Icon = sig.icon;
        return (
          <button
            key={idx}
            onClick={() => onNavigate(sig.view)}
            className={`
              p-4 rounded-2xl bg-white border ${sig.border} shadow-2xs hover:shadow-md
              transition-all duration-200 text-left group flex items-center justify-between cursor-pointer
            `}
          >
            <div>
              <p className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider mb-1">
                {sig.label}
              </p>
              <p className={`text-2xl font-serif font-bold ${sig.color} tracking-tight`}>
                {sig.value}
              </p>
            </div>
            <div className={`w-10 h-10 rounded-xl ${sig.bg} flex items-center justify-center ${sig.color} group-hover:scale-110 transition-transform`}>
              <Icon size={20} />
            </div>
          </button>
        );
      })}
    </div>
  );
};
