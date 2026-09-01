import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 3D Perspective Word Component with 3D Depth, Extrusion, and Holographic Hover Tilt
function ThreeDWord({ word, wordIndex, baseDelay = 0.1, mousePos }) {
  const tiltX = (mousePos.y - 0.5) * -12; // -6 to +6 deg
  const tiltY = (mousePos.x - 0.5) * 16;  // -8 to +8 deg

  return (
    <motion.span
      className="inline-block whitespace-nowrap cursor-pointer group mr-3.5 sm:mr-5 mb-1.5"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      initial={{
        opacity: 0,
        y: 45,
        rotateX: -45,
        rotateY: 15,
        z: -60,
        filter: 'blur(8px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: tiltX,
        rotateY: tiltY,
        z: 0,
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 0.85,
        delay: baseDelay + wordIndex * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.06,
        z: 40,
        rotateX: tiltX * 1.5,
        rotateY: tiltY * 1.5,
        transition: { duration: 0.25 },
      }}
    >
      <span
        className="inline-block transition-all duration-300 font-extrabold"
        style={{
          textShadow: `
            0 1px 0 #d1d1d6,
            0 2px 0 #b0b0b8,
            0 3px 0 #8e8e93,
            0 4px 0 #636366,
            0 5px 2px rgba(0,0,0,0.4),
            0 8px 16px rgba(0,0,0,0.7),
            0 0 30px rgba(242,153,74,0.25)
          `,
          transform: 'translateZ(20px)',
        }}
      >
        {word}
      </span>
    </motion.span>
  );
}

export default function HeroSection({ onOpenBooking }) {
  const [headlightPhase, setHeadlightPhase] = useState('off');
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Handle subtle 3D mouse parallax tracking
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: clientX / innerWidth,
      y: clientY / innerHeight,
    });
  };

  // Trigger double-blink "wake-up" sequence
  const triggerBlink = () => {
    setHeadlightPhase('blink1');
    setTimeout(() => setHeadlightPhase('off1'), 160);
    setTimeout(() => setHeadlightPhase('blink2'), 320);
    setTimeout(() => setHeadlightPhase('off2'), 480);
    setTimeout(() => setHeadlightPhase('steady'), 640);
  };

  useEffect(() => {
    const t1 = setTimeout(triggerBlink, 900);
    const intervalBlink = setInterval(triggerBlink, 8000);

    return () => {
      clearTimeout(t1);
      clearInterval(intervalBlink);
    };
  }, []);

  const isLightActive = headlightPhase === 'blink1' || headlightPhase === 'blink2' || headlightPhase === 'steady';
  const isHighFlare = headlightPhase === 'blink1' || headlightPhase === 'blink2';

  const line1Words = ["Feel", "The", "Luxury"];
  const line2Words = ["Cars", "We", "Have."];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-[#070709] pt-2 pb-6 flex flex-col justify-between"
      style={{ perspective: '1200px' }}
    >
      
      {/* Background Floating Luxury Typography Layer */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-[#F2994A]/[0.03] rounded-full blur-[160px]"></div>
        
        {/* Ambient floating text behind car */}
        <div className="absolute bottom-[4%] w-[220%] flex whitespace-nowrap opacity-[0.07] text-[11vw] font-display font-black tracking-widest text-white select-none animate-drift-slow">
          <span className="mr-16">ELEGANT &bull; LUXURY &bull; PRESTIGE &bull; EXQUISITE &bull;</span>
          <span className="mr-16">ELEGANT &bull; LUXURY &bull; PRESTIGE &bull; EXQUISITE &bull;</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start pt-2 gap-4">
          
          {/* Main 3D Kinetic Headline */}
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-display font-medium text-white tracking-tight leading-[1.05]">
              {/* Line 1: Feel The Luxury (3D Extruded) */}
              <div className="block">
                {line1Words.map((word, index) => (
                  <ThreeDWord
                    key={index}
                    word={word}
                    wordIndex={index}
                    baseDelay={0.1}
                    mousePos={mousePos}
                  />
                ))}
              </div>

              {/* Line 2: Cars We Have. (3D Extruded) */}
              <div className="block">
                {line2Words.map((word, index) => (
                  <ThreeDWord
                    key={index}
                    word={word}
                    wordIndex={index + line1Words.length}
                    baseDelay={0.1}
                    mousePos={mousePos}
                  />
                ))}
              </div>
            </h1>

            {/* Left Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-xs sm:text-[13px] text-[#8E8E93] max-w-sm leading-relaxed font-normal"
            >
              flawless craftsmanship, sumptuous interiors & cutting-edge technology that
              effortlessly merges with the art of driving.
            </motion.p>
          </div>

          {/* Right Side Copy ("Unleash Your Luxury Experience") */}
          <motion.div
            initial={{ opacity: 0, x: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:text-right pt-2"
          >
            <span className="text-sm sm:text-base lg:text-[17px] font-display font-normal text-white/90 tracking-wide block hover:text-[#F2994A] transition-colors cursor-default">
              Unleash Your
            </span>
            <span className="text-sm sm:text-base lg:text-[17px] font-display font-normal text-white/90 tracking-wide block hover:text-[#F2994A] transition-colors cursor-default">
              Luxury Experience
            </span>
            <div className="mt-2 flex items-center justify-start lg:justify-end gap-2 text-xs font-semibold uppercase tracking-widest text-[#F2994A]">
              <span className="w-5 h-[1.5px] bg-[#F2994A]"></span>
              <span>Flagship Spec</span>
            </div>
          </motion.div>

        </div>

        {/* Hero Car Showcase */}
        <div className="relative w-full max-w-3xl mx-auto -mt-6 sm:-mt-10 lg:-mt-14 flex flex-col items-center justify-center">
          
          {/* Car Image Wrapper */}
          <motion.div
            initial={{ y: 90, opacity: 0, scale: 0.94 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full flex items-center justify-center"
          >
            {/* Main Front-View Car Base */}
            <img
              src="/images/hero_car.jpg"
              alt="ExquDrive Luxury Black Flagship Car"
              className="w-full max-h-[50vh] sm:max-h-[54vh] object-contain rounded-2xl select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
              loading="eager"
            />

            {/* DUAL HALO HEADLIGHT BLINKING OVERLAY */}
            <AnimatePresence>
              {isLightActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isHighFlare ? 1 : 0.88,
                    scale: isHighFlare ? 1.05 : 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="absolute inset-0 pointer-events-none z-20"
                >
                  {/* Left Headlight Halo Glow */}
                  <div className="absolute top-[44%] left-[19.5%] -translate-x-1/2 -translate-y-1/2">
                    <div
                      className={`rounded-full bg-white transition-all duration-100 ${
                        isHighFlare
                          ? 'w-12 h-7 blur-[2px] shadow-[0_0_50px_20px_rgba(255,255,255,1),0_0_90px_40px_rgba(180,225,255,0.85)]'
                          : 'w-9 h-5 blur-[2.5px] shadow-[0_0_30px_10px_rgba(255,255,255,0.8),0_0_60px_25px_rgba(180,225,255,0.5)] animate-pulse'
                      }`}
                    />
                    <div className="absolute -top-10 -left-20 w-44 h-28 bg-gradient-to-r from-transparent via-cyan-100/25 to-transparent rotate-[15deg] blur-xl opacity-60"></div>
                  </div>

                  {/* Right Headlight Halo Glow */}
                  <div className="absolute top-[44%] right-[19.5%] translate-x-1/2 -translate-y-1/2">
                    <div
                      className={`rounded-full bg-white transition-all duration-100 ${
                        isHighFlare
                          ? 'w-12 h-7 blur-[2px] shadow-[0_0_50px_20px_rgba(255,255,255,1),0_0_90px_40px_rgba(180,225,255,0.85)]'
                          : 'w-9 h-5 blur-[2.5px] shadow-[0_0_30px_10px_rgba(255,255,255,0.8),0_0_60px_25px_rgba(180,225,255,0.5)] animate-pulse'
                      }`}
                    />
                    <div className="absolute -top-10 -right-20 w-44 h-28 bg-gradient-to-l from-transparent via-cyan-100/25 to-transparent -rotate-[15deg] blur-xl opacity-60"></div>
                  </div>

                  {/* Bottom Grille Soft Floor Reflection */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/5 h-10 bg-[#F2994A]/15 blur-2xl rounded-full"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* "Scroll Down" Indicator & Circular Mouse Icon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => {
              const el = document.getElementById('details');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute bottom-2 sm:bottom-4 z-20 flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className="text-[11px] sm:text-xs font-normal text-white/80 group-hover:text-white tracking-widest transition-colors">
              Scroll Down
            </span>

            {/* Circular Mouse Outline with Bouncing Dot */}
            <div className="w-10 h-10 rounded-full border border-white/50 group-hover:border-[#F2994A] flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:shadow-[0_0_15px_rgba(242,153,74,0.4)] transition-all">
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                  opacity: [1, 0.4, 1],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-2 rounded-full bg-white group-hover:bg-[#F2994A] transition-colors"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
