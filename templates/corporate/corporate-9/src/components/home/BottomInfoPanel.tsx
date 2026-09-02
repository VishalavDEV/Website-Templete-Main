import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BottomInfoPanelProps {
  onSelectCapability?: (id: string) => void;
}

export const BottomInfoPanel: React.FC<BottomInfoPanelProps> = ({ onSelectCapability }) => {
  const capabilities = [
    { number: '01', label: 'Conversational', targetId: 'conversational' },
    { number: '02', label: 'Connected', targetId: 'connected' },
    { number: '03', label: 'Compliant', targetId: 'compliant' },
  ];

  const handleClick = (targetId: string) => {
    if (onSelectCapability) {
      onSelectCapability(targetId);
    }
    const elem = document.querySelector(`#${targetId}`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-5xl">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-gray-100/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 sm:p-10 md:p-12">
        {/* PANEL TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-14 items-start md:items-center">
          {/* LEFT: Eyebrow + Heading */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-semibold block mb-3">
              WHAT DO WE DO?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal leading-[1.12] tracking-tight text-[#191919] whitespace-pre-line">
              {"Conversations that\nbuild momentum"}
            </h2>
          </div>

          {/* RIGHT: Descriptive Copy */}
          <div className="md:pl-4">
            <p className="text-sm sm:text-base text-[#191919]/75 leading-relaxed font-normal">
              Conversational AI built for regulated financial institutions. Agents that hold a real conversation, plug into the systems you run, and show their work.
            </p>
          </div>
        </div>

        {/* PANEL DIVIDER */}
        <div className="mt-8 sm:mt-10 mb-6 sm:mb-8 h-px bg-gray-200/80 w-full" />

        {/* PANEL BOTTOM ROW: 3 CAPABILITY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {capabilities.map((item) => (
            <button
              key={item.number}
              type="button"
              onClick={() => handleClick(item.targetId)}
              className="bg-[#F5F5F5] hover:bg-[#EBEBEB] active:scale-[0.99] transition-all duration-200 cursor-pointer px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between group rounded-xl text-left border border-transparent hover:border-gray-200/60"
            >
              <div className="flex items-center text-sm sm:text-[15px]">
                <span className="text-[#191919]/40 font-mono text-xs sm:text-sm">{item.number}</span>
                <span className="mx-2.5 text-[#191919]/25 text-xs">/</span>
                <span className="font-medium text-[#191919]">{item.label}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#191919] group-hover:translate-x-1 transition-all duration-200 shrink-0 ml-2" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

