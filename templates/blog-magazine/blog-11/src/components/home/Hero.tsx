import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-24 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden bg-[#080D0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
          {/* Label Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-700 text-emerald-300 font-mono-tech text-xs uppercase tracking-widest font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE FUTURE OF FOOD</span>
          </div>

          {/* Main Huge Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-editorial font-extrabold text-white tracking-tight leading-[1.05] sm:leading-[0.98]">
            Where Farms, <span className="italic font-normal text-emerald-400">Technology</span> &amp; Intelligence Meet.
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-sans max-w-xl leading-relaxed font-normal">
            AGROTECH AI is the premier digital editorial magazine exploring the convergence of precision agriculture, agricultural robotics, satellite telemetry, and artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#featured-stories"
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Stories <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/archive"
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-bold text-sm flex items-center justify-center gap-2.5 hover:border-emerald-400 transition-all shadow-xs"
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Discover Issues</span>
            </Link>
          </div>

          {/* Floating Editorial Metadata */}
          <div className="pt-6 sm:pt-8 border-t border-neutral-800 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono-tech text-neutral-400">
            <div>
              <span className="block text-[10px] text-neutral-500 uppercase font-bold">EDITION</span>
              <span className="font-bold text-white">ISSUE 08</span>
            </div>
            <div className="hidden sm:block h-6 w-[1px] bg-neutral-800" />
            <div>
              <span className="block text-[10px] text-neutral-500 uppercase font-bold">DATE</span>
              <span className="font-bold text-white">AUGUST 2026</span>
            </div>
            <div className="hidden sm:block h-6 w-[1px] bg-neutral-800" />
            <div>
              <span className="block text-[10px] text-neutral-500 uppercase font-bold">LOCATION</span>
              <span className="font-bold text-white">GLOBAL AGROTECH</span>
            </div>
          </div>
        </div>

        {/* Right Column: Layered Parallax Visual */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="relative w-full max-w-md sm:max-w-lg mx-auto aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-neutral-900 block">
            {/* Parallax AI Image */}
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0) scale(1.05)`,
              }}
            >
              <ImageWithFallback
                src="/images/ai_futuristic_farm.jpg"
                alt="AI Generated Intelligent Farmland Sunrise"
                priority
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Futuristic AI Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0B1710]/95 via-transparent to-transparent pointer-events-none transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`,
              }}
            >
              {/* Floating Data Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 text-white font-mono-tech text-xs space-y-1.5 sm:space-y-2 shadow-2xl">
                <div className="flex items-center justify-between text-emerald-400 font-bold text-[10px] sm:text-xs">
                  <span>AI VISION TELEMETRY</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    99.8% ACCURACY
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-neutral-200 line-clamp-1 font-medium">
                  Generative Vision Field Matrix | Volumetric Moisture: 42.8% VWC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
