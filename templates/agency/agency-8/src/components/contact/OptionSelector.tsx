import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { CursorType } from '../../types';

interface OptionSelectorProps {
  options: string[];
  selected: string | string[];
  multiSelect?: boolean;
  onSelect: (option: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({
  options,
  selected,
  multiSelect = false,
  onSelect,
  setCursorType,
}) => {
  const isSelected = (opt: string) => {
    if (multiSelect && Array.isArray(selected)) {
      return selected.includes(opt);
    }
    return selected === opt;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
      {options.map((option, idx) => {
        const active = isSelected(option);

        return (
          <button
            key={option}
            type="button"
            role={multiSelect ? 'checkbox' : 'radio'}
            aria-checked={active}
            onClick={() => onSelect(option)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(option);
              }
            }}
            onMouseEnter={() => setCursorType('project', 'SELECT')}
            onMouseLeave={() => setCursorType('default')}
            className={`group relative text-left p-5 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-between ${
              active
                ? 'bg-white/[0.07] border-[#0066FF] shadow-lg shadow-[#0066FF]/10 text-white'
                : 'bg-white/[0.02] border-[#ffffff12] hover:border-white/25 hover:bg-white/[0.04] text-[#A1A1AA]'
            }`}
          >
            {/* Active Accent Left Line */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 bg-[#0066FF] transition-all duration-300 ${
                active ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
              }`}
            />

            {/* Option Label */}
            <div className="space-y-1 pl-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] block">
                0{idx + 1}
              </span>
              <h4
                className={`font-display text-xl sm:text-2xl font-bold tracking-tight uppercase transition-colors duration-300 ${
                  active
                    ? 'text-white'
                    : 'text-[#FAF9F6] group-hover:text-white'
                }`}
              >
                {option}
              </h4>
            </div>

            {/* Check Indicator Pill */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                active
                  ? 'bg-[#0066FF] border-[#0066FF] text-white scale-105'
                  : 'border-white/15 bg-white/5 text-transparent group-hover:border-white/30'
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${active ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </button>
        );
      })}
    </div>
  );
};
