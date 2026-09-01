import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string; // e.g. "180+", "12+", "$4.2B", "99.4%"
  label: string;
  sublabel?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  label,
  sublabel,
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Parse numeric value and prefix/suffix
    const numericMatch = value.match(/([\d.]+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[0]);
    const prefix = value.substring(0, numericMatch.index);
    const suffix = value.substring((numericMatch.index || 0) + numericMatch[0].length);

    let startTime: number | null = null;
    const duration = 1500; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentVal = (progress * targetNum).toFixed(
        numericMatch[0].includes('.') ? 1 : 0
      );

      setDisplayValue(`${prefix}${currentVal}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, value]);

  return (
    <div ref={containerRef} className="p-6 sm:p-8 border-2 border-[#090909] bg-white rounded-none hover:bg-[#090909] hover:text-[#f8f7f4] transition-all duration-300 group shadow-lg">
      <div className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-[#090909] group-hover:text-[#D1FF00] tracking-tighter transition-colors">
        {displayValue}
      </div>
      <div className="mt-3 font-mono text-xs sm:text-sm uppercase tracking-widest text-[#090909] group-hover:text-white font-black transition-colors">
        {label}
      </div>
      {sublabel && (
        <p className="mt-2 text-xs text-gray-600 group-hover:text-gray-400 font-mono transition-colors">{sublabel}</p>
      )}
    </div>
  );
};
