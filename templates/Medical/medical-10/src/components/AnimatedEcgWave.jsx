import React from "react";
import { motion } from "framer-motion";

export default function AnimatedEcgWave({ className = "", strokeColor = "#06b6d4" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 800 120"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 60 L 150 60 L 170 50 L 180 70 L 195 60 L 220 60 L 235 15 L 255 105 L 270 45 L 285 75 L 300 60 L 450 60 L 470 50 L 480 70 L 495 60 L 520 60 L 535 15 L 555 105 L 570 45 L 585 75 L 600 60 L 800 60"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M 0 60 L 150 60 L 170 50 L 180 70 L 195 60 L 220 60 L 235 15 L 255 105 L 270 45 L 285 75 L 300 60 L 450 60 L 470 50 L 480 70 L 495 60 L 520 60 L 535 15 L 555 105 L 570 45 L 585 75 L 600 60 L 800 60"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: [0.15, 0.3, 0.15], pathOffset: [0, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
