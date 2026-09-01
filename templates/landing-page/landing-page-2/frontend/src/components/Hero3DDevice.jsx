import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Standard 5x7 dot-matrix font
const FONT_5X7 = {
  'B': [
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0]
  ],
  'U': [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  'S': [
    [0,1,1,1,1],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  'Y': [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0]
  ],
  ' ': [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ]
};

function getTypedMatrix(visibleCount = 4) {
  const targetChars = ['B', 'U', 'S', 'Y'];
  const rows = Array.from({ length: 7 }, () => []);
  
  targetChars.forEach((char, charIdx) => {
    const isVisible = charIdx < visibleCount;
    const glyph = isVisible ? FONT_5X7[char] : FONT_5X7[' '];
    for (let r = 0; r < 7; r++) {
      rows[r].push(...glyph[r]);
      if (charIdx < targetChars.length - 1) {
        rows[r].push(0);
      }
    }
  });
  return rows;
}

export default function Hero3DDevice() {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [isHandAnimating, setIsHandAnimating] = useState(false);
  const [touchGlow, setTouchGlow] = useState(false);
  const loopTimeoutRef = useRef(null);

  const runAnimationCycle = () => {
    if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);

    setIsHandAnimating(true);
    setVisibleLetters(0);
    setIsTouching(false);

    // 1. Hand reaches down (takes ~750ms)
    setTimeout(() => {
      setIsTouching(true);
      setTouchGlow(true);

      setTimeout(() => setTouchGlow(false), 400);

      // 2. Letter-by-letter typing: B -> U -> S -> Y
      setTimeout(() => setVisibleLetters(1), 120);  // B
      setTimeout(() => setVisibleLetters(2), 260);  // BU
      setTimeout(() => setVisibleLetters(3), 400);  // BUS
      setTimeout(() => {
        setVisibleLetters(4); // BUSY
        setIsTouching(false);
        setIsHandAnimating(false);

        // 3. Hold "BUSY" on screen for 3.5s, then automatically loop again!
        loopTimeoutRef.current = setTimeout(() => {
          runAnimationCycle();
        }, 3500);

      }, 540);

    }, 750);
  };

  // Continuous auto-loop on mount
  useEffect(() => {
    const initialDelay = setTimeout(() => {
      runAnimationCycle();
    }, 400);

    return () => {
      clearTimeout(initialDelay);
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
    };
  }, []);

  const handleClick = () => {
    if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
    runAnimationCycle();
  };

  const matrix = getTypedMatrix(visibleLetters);

  return (
    <div 
      onClick={handleClick}
      className="relative w-full max-w-[620px] mx-auto flex flex-col items-center justify-center cursor-pointer select-none py-6"
    >
      {/* Realistic Soft Ambient Ground Shadow under device */}
      <div className="absolute -bottom-4 w-[520px] h-[55px] bg-black/20 rounded-[100%] blur-2xl pointer-events-none -z-10" />
      <div className="absolute -bottom-1 w-[460px] h-[30px] bg-black/15 rounded-[100%] blur-lg pointer-events-none -z-10" />

      {/* --- PHYSICAL HARDWARE DEVICE RIG --- */}
      <div className="relative w-[480px] sm:w-[540px] flex flex-col items-center">
        
        {/* --- REAL PHOTOGRAPHIC HUMAN HAND REACHING DOWNWARD FROM TOP (CENTERED OVER DEVICE & 1.5X BIGGER) --- */}
        <motion.div
          initial={{ y: -420, opacity: 0 }}
          animate={isHandAnimating ? {
            y: isTouching ? -14 : [ -420, -14 ],
            opacity: [ 0, 1, 1 ]
          } : {
            y: -420,
            opacity: 0
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute -top-[330px] sm:-top-[360px] left-1/2 -translate-x-1/2 z-50 pointer-events-none w-[270px] sm:w-[310px] h-[390px] sm:h-[450px] flex items-center justify-center"
        >
          <img 
            src="/hero_hand.jpg" 
            alt="Touching device" 
            className="w-full h-full object-contain mix-blend-multiply select-none"
            style={{
              maskImage: 'radial-gradient(ellipse 80% 90% at 50% 50%, black 65%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 90% at 50% 50%, black 65%, transparent 100%)'
            }}
          />
        </motion.div>

        {/* Device Top Controls Row (Lever, Start/Pause Button, Rotary Dial) */}
        <div className="relative w-full h-[38px] px-8 flex items-end justify-between z-20">
          
          {/* 1. Left Orange Toggle Lever */}
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-md bg-[#E4E6EA] border border-[#CBD0D8] shadow-sm flex items-center justify-center p-1">
              <div className="w-full h-2 rounded-sm bg-[#FF5A1F] shadow-sm"></div>
            </div>
            <div className="flex flex-col gap-0.5 ml-1">
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
            </div>
          </div>

          {/* 2. Center "Start/Pause" Wide Tactile Touch Bar */}
          <div className="relative -mb-1">
            <div className={`px-10 py-1.5 rounded-t-xl bg-[#F0F2F5] border-t border-x border-[#D5D9E0] shadow-sm text-center transition-all ${
              touchGlow ? 'bg-orange-100 ring-2 ring-[#FF5A1F]' : ''
            }`}>
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-medium text-gray-500 tracking-wider">
                <span className="text-[9px]">✋</span>
                <span>Start/Pause</span>
              </div>
            </div>

            {/* Touch Glow Spark */}
            {touchGlow && (
              <div className="absolute inset-0 bg-[#FF5A1F]/30 blur-md rounded-t-xl animate-ping pointer-events-none" />
            )}
          </div>

          {/* 3. Right Knurled Rotary Dial Knob with Orange Accent */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#E5E8ED] border-2 border-[#CBD0D8] shadow-md flex items-center justify-center relative">
              <div className="w-7 h-7 rounded-full border-2 border-[#FF5A1F] flex items-center justify-center bg-gradient-to-b from-[#F2F4F7] to-[#DCE0E6]">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Device Main Body: Matte Light Anodized Aluminum Chassis */}
        <div className="relative rounded-[28px] p-4 bg-gradient-to-b from-[#E2E5EB] via-[#D5D9E2] to-[#BCC1CD] shadow-2xl border border-white/60">
          
          {/* Inner Recessed LED Screen Bezel */}
          <div className="relative rounded-[20px] p-5 sm:p-7 bg-[#0A0C10] border-2 border-[#1E232E] shadow-inner overflow-hidden">
            
            {/* Screen Glass Texture & Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
            <div className="absolute inset-0 led-overlay pointer-events-none z-10" />

            {/* 7x23 LED Red Pixel Matrix */}
            <div className="relative z-20 flex items-center justify-center py-2">
              <div 
                className="flex flex-col gap-[4.5px] sm:gap-[5.5px]"
                style={{
                  filter: visibleLetters > 0 ? 'drop-shadow(0 0 14px rgba(255, 60, 30, 0.95))' : 'none'
                }}
              >
                {matrix.map((row, rIdx) => (
                  <div key={rIdx} className="flex gap-[4.5px] sm:gap-[5.5px] items-center justify-center">
                    {row.map((pixel, cIdx) => (
                      <div
                        key={cIdx}
                        style={{
                          backgroundColor: pixel ? '#FF3820' : '#191C22',
                          boxShadow: pixel 
                            ? '0 0 6px #FF3820, 0 0 10px rgba(255, 56, 32, 0.8), inset 0 0 2px #FFE5E0' 
                            : 'inset 0 1px 1px rgba(0,0,0,0.8)',
                        }}
                        className={`w-[8px] h-[8px] sm:w-[9.5px] sm:h-[9.5px] rounded-full transition-colors duration-100 ${
                          pixel ? 'scale-100' : 'scale-90 opacity-40'
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
