import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxProps({ mousePos }) {
  const { scrollY } = useScroll();

  const kbX = (mousePos?.x || 0) * -25;
  const kbY = (mousePos?.y || 0) * -20;
  const kbScroll = useTransform(scrollY, [0, 500], [0, 50]);

  const watchX = (mousePos?.x || 0) * 30;
  const watchY = (mousePos?.y || 0) * 25;
  const watchScroll = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
      
      {/* 1. Bottom-Left: Mechanical Keyboard Prop */}
      <motion.div 
        style={{ x: kbX, y: kbY, translateY: kbScroll }}
        className="absolute -bottom-10 -left-16 sm:-left-6 w-[360px] sm:w-[440px] opacity-70 select-none"
      >
        <div className="relative rounded-2xl p-4 bg-[#141722] border border-white/10 shadow-2xl transform rotate-[-8deg] scale-90 sm:scale-100">
          <div className="space-y-1.5 opacity-80">
            <div className="flex gap-1.5">
              {['ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7'].map((k, i) => (
                <div key={i} className={`h-6 rounded bg-[#0D1017] border border-white/5 text-[8px] font-mono flex items-center justify-center text-gray-400 ${i===0 ? 'w-8 text-brand-orange' : 'w-7'}`}>
                  {k}
                </div>
              ))}
            </div>
            <div className="flex gap-1.5">
              {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((k, i) => (
                <div key={i} className="h-7 w-7 rounded bg-[#10131B] border-t border-white/10 border-b border-black text-[9px] font-mono flex items-center justify-center text-gray-300">
                  {k}
                </div>
              ))}
            </div>
            <div className="flex gap-1.5">
              {['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O'].map((k, i) => (
                <div key={i} className={`h-7 rounded bg-[#10131B] border-t border-white/10 border-b border-black text-[9px] font-mono flex items-center justify-center text-gray-300 ${i===0 ? 'w-10' : 'w-7'}`}>
                  {k}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Bottom-Right: Smartwatch + Braided Cable Prop */}
      <motion.div 
        style={{ x: watchX, y: watchY, translateY: watchScroll }}
        className="absolute -bottom-8 -right-12 sm:-right-4 w-[280px] opacity-75 select-none"
      >
        <div className="relative flex items-center justify-center transform rotate-[14deg]">
          
          {/* Braided Orange Cable */}
          <svg className="absolute -top-16 -left-20 w-48 h-48 pointer-events-none opacity-50" viewBox="0 0 150 150">
            <path 
              d="M 10,130 Q 70,60 140,80" 
              fill="none" 
              stroke="#FF5A1F" 
              strokeWidth="4" 
              strokeDasharray="5 3"
              strokeLinecap="round" 
            />
          </svg>

          {/* Watch Body */}
          <div className="relative w-28 h-36 rounded-[28px] p-2 bg-[#141722] border border-white/10 shadow-2xl">
            <div className="w-full h-full rounded-[20px] bg-black p-2.5 flex flex-col justify-between border border-white/5">
              <div className="flex justify-between text-[8px] font-mono text-gray-400">
                <span>09:41</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></span>
              </div>
              <div className="text-center">
                <div className="text-[9px] font-mono text-brand-orange font-bold">BUSY</div>
                <div className="text-[7px] text-gray-400 font-mono">24m left</div>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-brand-orange rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
