import React from 'react';
import { motion } from 'framer-motion';

// 1. Floating Cloud
export function FloatingCloud({ delay = 0, speed = 25, top = '10%', scale = 1 }) {
  return (
    <motion.div
      initial={{ x: '-10%', opacity: 0 }}
      animate={{ x: '110%', opacity: [0, 0.4, 0.4, 0] }}
      transition={{ 
        repeat: Infinity, 
        duration: speed, 
        delay: delay, 
        ease: 'linear' 
      }}
      style={{ top, scale }}
      className="absolute left-0 pointer-events-none z-0"
    >
      <svg className="w-24 h-16 text-slate-700/30 fill-current" viewBox="0 0 100 100">
        <path d="M20,60 C15,60 10,55 10,50 C10,43 16,38 23,38 C26,27 36,20 48,20 C60,20 70,28 73,38 C80,38 85,43 85,50 C85,55 80,60 75,60 Z" />
      </svg>
    </motion.div>
  );
}

// 2. Flying Airplane
export function FloatingAirplane({ top = '20%', speed = 18, delay = 2 }) {
  return (
    <motion.div
      initial={{ x: '-20%', y: 20, rotate: 12, opacity: 0 }}
      animate={{ 
        x: '120%', 
        y: [20, -40, 20], 
        rotate: [12, 0, -12],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: speed, 
        delay: delay, 
        ease: 'easeInOut' 
      }}
      style={{ top }}
      className="absolute left-0 z-10 pointer-events-none"
    >
      <div className="flex flex-col items-center">
        <svg className="w-16 h-16 text-teal-400 drop-shadow-[0_0_12px_rgba(20,184,166,0.6)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
        {/* Small trail effect */}
        <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-teal-400 mt-1 opacity-40 blur-[1px]" />
      </div>
    </motion.div>
  );
}

// 3. Hot Air Balloon
export function FloatingBalloon({ right = '10%', top = '15%' }) {
  return (
    <motion.div
      animate={{ 
        y: [0, -15, 0],
        rotate: [-1, 2, -1]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 6, 
        ease: 'easeInOut' 
      }}
      style={{ right, top }}
      className="absolute z-10 pointer-events-none opacity-60"
    >
      <svg className="w-12 h-16 text-sunset" viewBox="0 0 100 150" fill="currentColor">
        {/* Balloon Body */}
        <path d="M50,10 C20,10 10,35 10,60 C10,90 35,110 50,120 C65,110 90,90 90,60 C90,35 80,10 50,10 Z" fill="#f97316" />
        <path d="M30,30 C40,20 60,20 70,30 C75,45 75,75 70,90 C60,100 40,100 30,90 C25,75 25,45 30,30 Z" fill="#f59e0b" />
        {/* Ropes */}
        <line x1="38" y1="112" x2="44" y2="130" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="62" y1="112" x2="56" y2="130" stroke="#cbd5e1" strokeWidth="2" />
        {/* Basket */}
        <rect x="42" y="130" width="16" height="12" rx="2" fill="#78350f" />
      </svg>
    </motion.div>
  );
}

// 4. Moving Train
export function MovingTrain({ bottom = '32px', speed = 14, delay = 0 }) {
  return (
    <motion.div
      initial={{ x: '-30%' }}
      animate={{ x: '110%' }}
      transition={{ 
        repeat: Infinity, 
        duration: speed, 
        delay: delay, 
        ease: 'linear' 
      }}
      style={{ bottom }}
      className="absolute left-0 z-10 pointer-events-none"
    >
      <div className="flex items-end">
        {/* Locomotive */}
        <div className="w-14 h-8 bg-indigo-600 rounded-t-lg flex items-center justify-around px-2 border-r-4 border-indigo-400">
          <div className="w-3 h-3 bg-indigo-900 rounded-sm" />
          <div className="w-3 h-3 bg-indigo-900 rounded-sm" />
          <div className="w-2 h-4 bg-amber-500 rounded-t-sm self-start mt-[-4px]" /> {/* Chimney */}
        </div>
        {/* Connectors & Cars */}
        <div className="w-1 h-2 bg-slate-400 self-end mb-1" />
        <div className="w-12 h-7 bg-indigo-700 rounded-t-md flex items-center justify-around px-1">
          <div className="w-2 h-2.5 bg-slate-900 rounded-sm" />
          <div className="w-2 h-2.5 bg-slate-900 rounded-sm" />
        </div>
        <div className="w-1 h-2 bg-slate-400 self-end mb-1" />
        <div className="w-12 h-7 bg-indigo-700 rounded-t-md flex items-center justify-around px-1">
          <div className="w-2 h-2.5 bg-slate-900 rounded-sm" />
          <div className="w-2 h-2.5 bg-slate-900 rounded-sm" />
        </div>
      </div>
    </motion.div>
  );
}

// 5. Sailing Ship
export function SailingShip({ bottom = '12%', speed = 22, delay = 4 }) {
  return (
    <motion.div
      initial={{ x: '-20%', rotate: -1 }}
      animate={{ 
        x: '110%',
        y: [0, -4, 0, -4, 0],
        rotate: [-1, 2, -1, 2, -1]
      }}
      transition={{ 
        x: { repeat: Infinity, duration: speed, delay: delay, ease: 'linear' },
        y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
        rotate: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
      }}
      style={{ bottom }}
      className="absolute left-0 z-10 pointer-events-none"
    >
      <svg className="w-20 h-16 text-slate-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" viewBox="0 0 100 80" fill="currentColor">
        {/* Sails */}
        <path d="M35,10 L50,45 L20,45 Z" fill="#ffffff" />
        <path d="M55,18 L68,45 L48,45 Z" fill="#f1f5f9" />
        {/* Hull */}
        <path d="M15,45 L85,45 L75,60 L25,60 Z" fill="#0d9488" />
        {/* Flag */}
        <path d="M50,5 L50,10 L44,7 Z" fill="#ef4444" />
      </svg>
    </motion.div>
  );
}

// 6. Walking Traveller Character
export function WalkingTraveller({ startX = -100, endX = 1200, duration = 25, delay = 0, bottom = '24px' }) {
  return (
    <motion.div
      initial={{ x: startX, opacity: 0 }}
      animate={{ 
        x: endX, 
        opacity: [0, 1, 1, 0] 
      }}
      transition={{ 
        repeat: Infinity, 
        duration: duration, 
        delay: delay, 
        ease: 'linear' 
      }}
      style={{ bottom }}
      className="absolute z-10 pointer-events-none"
    >
      <svg className="w-12 h-16 text-indigo-400" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="18" r="8" />
        <path d="M45,28 L55,28 L52,60 L48,60 Z" />
        {/* Suitcase */}
        <rect x="25" y="38" width="14" height="10" rx="1.5" className="fill-amber-500 animate-bounce" />
        <path d="M29,38 L29,34 L35,34 L35,38" stroke="#f59e0b" strokeWidth="2" fill="none" />
        {/* Swing legs */}
        <motion.path
          d="M48,60 L38,88"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ d: ["M48,60 L38,88", "M48,60 L50,88", "M48,60 L38,88"] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M52,60 L62,88"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ d: ["M52,60 L62,88", "M52,60 L48,88", "M52,60 L62,88"] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}

// 7. Driving Car
export function DrivingCar({ bottom = '12px', speed = 10, delay = 3 }) {
  return (
    <motion.div
      initial={{ x: '-15%', rotate: 0 }}
      animate={{ 
        x: '110%',
        y: [0, -1, 0, -1, 0] // slight road bounce
      }}
      transition={{ 
        x: { repeat: Infinity, duration: speed, delay: delay, ease: 'linear' },
        y: { repeat: Infinity, duration: 0.25, ease: 'easeInOut' }
      }}
      style={{ bottom }}
      className="absolute left-0 z-20 pointer-events-none"
    >
      <div className="flex flex-col items-center">
        <svg className="w-16 h-8 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" viewBox="0 0 100 50" fill="currentColor">
          {/* Car Body */}
          <path d="M15,35 L10,35 Q10,25 25,20 L40,20 Q45,10 65,10 L80,20 Q95,22 95,35 Z" />
          {/* Windows */}
          <path d="M42,22 L60,22 L58,14 L45,14 Z" fill="#cbd5e1" />
          <path d="M64,22 L76,22 L72,14 L66,14 Z" fill="#cbd5e1" />
          {/* Wheels */}
          <circle cx="28" cy="36" r="8" fill="#1e293b" />
          <circle cx="28" cy="36" r="4" fill="#94a3b8" />
          <circle cx="72" cy="36" r="8" fill="#1e293b" />
          <circle cx="72" cy="36" r="4" fill="#94a3b8" />
        </svg>
      </div>
    </motion.div>
  );
}
