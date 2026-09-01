import React, { useState } from 'react';
import { Cpu, Bot, Eye, Zap, HardDrive, Globe, Droplets, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { TECHNOLOGY_CARDS } from '../../data/technologies';
import { TechnologyCardData } from '../../types';

export const TechnologyLayer: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechnologyCardData>(TECHNOLOGY_CARDS[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'Eye': return <Eye className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-theme-primary border-t border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="THE HARDWARE & SOFTWARE MATRIX"
          title="THE TECHNOLOGY LAYER"
          subtitle="Discover the key technological pillars driving modern autonomous farming and field intelligence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TECHNOLOGY_CARDS.map(tech => {
            const isSelected = selectedTech.id === tech.id;
            return (
              <div
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                className={`group cursor-pointer p-5 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 border relative overflow-hidden flex flex-col justify-between h-full ${
                  isSelected
                    ? 'bg-forest-900 text-white border-emerald-500 shadow-2xl scale-[1.01]'
                    : 'bg-theme-surface text-theme-primary border-neutral-200 dark:border-neutral-800 hover:border-emerald-600'
                }`}
              >
                {/* Background Image Ghost Reveal on Hover */}
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none block"
                />

                <div className="relative z-10 space-y-3.5 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl ${isSelected ? 'bg-emerald-600 text-white' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300'}`}>
                      {getIcon(tech.iconName)}
                    </div>
                    <span className={`text-[9px] sm:text-[10px] font-mono-tech uppercase tracking-widest px-2.5 py-1 rounded-full font-bold ${isSelected ? 'bg-emerald-800 text-emerald-200' : 'bg-theme-muted text-theme-secondary'}`}>
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className={`text-lg sm:text-xl font-serif-editorial font-bold ${isSelected ? 'text-white' : 'text-theme-primary'}`}>
                    {tech.title}
                  </h3>

                  <p className={`text-xs font-sans leading-relaxed ${isSelected ? 'text-neutral-200' : 'text-theme-secondary'}`}>
                    {tech.shortDesc}
                  </p>
                </div>

                <div className="relative z-10 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-neutral-200/40 dark:border-neutral-800/40 flex items-center justify-between text-xs font-mono-tech">
                  <span className={isSelected ? 'text-emerald-300 font-bold' : 'text-emerald-700 dark:text-emerald-400 font-bold'}>
                    {tech.stats}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-emerald-300' : 'text-neutral-400 group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
