import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GEAR_INVENTORY } from '../../data/portfolioData';
import { Camera, Disc, Sun, Film } from 'lucide-react';

type GearCategory = 'All' | 'Cameras' | 'Optics' | 'Lighting' | 'Analog';

export const GearChecklist: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<GearCategory>('All');

  const categories: GearCategory[] = ['All', 'Cameras', 'Optics', 'Lighting', 'Analog'];

  const filteredGear = selectedCat === 'All'
    ? GEAR_INVENTORY
    : GEAR_INVENTORY.filter((item) => item.category === selectedCat);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cameras':
        return <Camera className="w-4 h-4 text-[#66fcf1]" />;
      case 'Optics':
        return <Disc className="w-4 h-4 text-[#45a29e]" />;
      case 'Lighting':
        return <Sun className="w-4 h-4 text-amber-400" />;
      case 'Analog':
      default:
        return <Film className="w-4 h-4 text-[#c5c6c7]" />;
    }
  };

  return (
    <div className="mt-16 pt-16 border-t border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Camera className="w-4 h-4 text-[#66fcf1]" />
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#66fcf1]">
              Technical Arsenal
            </span>
          </div>
          <h3 className="text-2xl font-bold font-['Syne'] text-white">
            HARDWARE & OPTICS CHECKLIST
          </h3>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors ${
                selectedCat === cat
                  ? 'bg-[#66fcf1] text-[#0b0c10] font-bold shadow-[0_0_10px_rgba(102,252,241,0.3)]'
                  : 'bg-white/5 text-[#c5c6c7]/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gear Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredGear.map((item, idx) => (
            <motion.div
              layout
              key={item.model}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-4 bg-[#12161f] border border-white/5 hover:border-[#66fcf1]/30 rounded-sm flex flex-col justify-between group transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-white/5 group-hover:bg-[#66fcf1]/10 transition-colors">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-[11px] font-mono text-[#c5c6c7]/50 uppercase">
                    {item.category}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-[#66fcf1] px-2 py-0.5 bg-[#66fcf1]/10 rounded border border-[#66fcf1]/20">
                  {item.badge}
                </span>
              </div>

              <h4 className="font-semibold text-white font-['Syne'] text-sm mb-1 group-hover:text-[#66fcf1] transition-colors">
                {item.model}
              </h4>

              <p className="text-xs text-[#c5c6c7]/70 font-light leading-relaxed">
                {item.specs}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
