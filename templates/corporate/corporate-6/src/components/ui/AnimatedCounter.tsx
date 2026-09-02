import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: string; // e.g. "120+", "1,500+", "24/7", "98%", "28%"
  label: string;
  sublabel?: string;
  theme?: 'light' | 'dark';
}

export default function AnimatedCounter({ value, label, sublabel, theme = 'light' }: AnimatedCounterProps) {
  return (
    <div className="flex flex-col">
      <div
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-none ${
          theme === 'dark' ? 'text-white' : 'text-[#0E1412]'
        }`}
      >
        <span className="text-[#C29B38] inline-block mr-1">/</span>
        {value}
      </div>
      <div
        className={`mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider ${
          theme === 'dark' ? 'text-[#D8C3A8]' : 'text-[#0F382E]'
        }`}
      >
        {label}
      </div>
      {sublabel && (
        <div
          className={`mt-0.5 text-xs ${
            theme === 'dark' ? 'text-[#8FA29A]' : 'text-[#62756D]'
          }`}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}
