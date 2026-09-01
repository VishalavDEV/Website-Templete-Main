import React from 'react';
import { motion } from 'framer-motion';
import Hero3DDevice from './Hero3DDevice';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-6 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center justify-center text-center overflow-visible">
      
      {/* Left Prop: Photographic White Studio Keyboard */}
      <div className="absolute -left-16 top-16 w-[280px] opacity-85 pointer-events-none hidden md:block select-none transform -rotate-12">
        <img 
          src="/desk_keyboard.jpg" 
          alt="Keyboard prop" 
          className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl"
        />
      </div>

      {/* Right Prop: Minimalist Studio Wireframe Glasses */}
      <div className="absolute -right-10 top-20 w-[160px] opacity-70 pointer-events-none hidden md:block select-none transform rotate-12">
        <div className="w-32 h-20 border-2 border-gray-300/80 rounded-[36px] shadow-sm"></div>
      </div>

      {/* Center Device with Animated Hand Reach & BUSY typing */}
      <div className="w-full flex items-center justify-center mb-8">
        <Hero3DDevice />
      </div>

      {/* Hero Description Copy - 100% Matching Reference */}
      <div className="max-w-2xl mx-auto space-y-7">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
          <strong className="font-bold text-gray-950">Busy Status Bar</strong> is a productivity multi-tool device with an LED pixel screen. Displays a personal busy message. Built-in Pomodoro timer and Apps. Fully customizable, open-source, and hacker-friendly.
        </p>

        {/* Orange BUY Button */}
        <div>
          <button
            onClick={() => {
              const el = document.getElementById('productivity');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-14 py-3.5 rounded-xl bg-[#FF5A1F] hover:bg-[#E84D13] text-white font-bold text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            BUY
          </button>
        </div>
      </div>

    </section>
  );
}
