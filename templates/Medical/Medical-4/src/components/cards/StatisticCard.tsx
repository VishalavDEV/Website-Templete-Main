import React from 'react';
import { Tilt3DCard } from '../common/Tilt3DCard';

interface StatisticCardProps {
  value: string;
  label: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({ value, label }) => {
  return (
    <Tilt3DCard maxTilt={10} perspective={1000} className="h-full">
      <div 
        className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 hover:border-blue-400/60 hover:bg-white/15 transition-colors duration-300 text-center text-white group shadow-xl h-full flex flex-col justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight text-white group-hover:text-blue-300 transition-colors"
          style={{ transform: 'translateZ(26px)' }}
        >
          {value}
        </div>
        <div 
          className="text-blue-100 text-sm md:text-base font-bold leading-snug"
          style={{ transform: 'translateZ(16px)' }}
        >
          {label}
        </div>
      </div>
    </Tilt3DCard>
  );
};
