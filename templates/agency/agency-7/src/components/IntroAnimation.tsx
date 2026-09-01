import React, { useEffect, useState } from 'react';
import { useIntro } from '../context/IntroContext';
import { ArrowRight } from 'lucide-react';

export const IntroAnimation: React.FC = () => {
  const { isPlaying, skipIntro, finishIntro } = useIntro();
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0); // 0: start, 1: 3d tilt rotate, 2: expand, 3: done

  useEffect(() => {
    if (!isPlaying) return;

    // Progress timer over ~3 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Sequence stages
    const t1 = setTimeout(() => setStep(1), 400);
    const t2 = setTimeout(() => setStep(2), 2400);
    const t3 = setTimeout(() => {
      setStep(3);
      finishIntro();
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isPlaying, finishIntro]);

  if (!isPlaying) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] flex flex-col items-center justify-between bg-[#FBF9F5] dark:bg-[#0D0E12] p-6 md:p-12 transition-opacity duration-700 ease-out overflow-hidden ${
        step === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ perspective: '1200px' }}
    >
      {/* Top Bar: Brand & Skip Button */}
      <div className="flex w-full items-center justify-between z-20">
        <div className="font-mono text-xs tracking-widest uppercase font-bold text-neutral-900 dark:text-neutral-100">
          STRATA <span className="text-blue-600 dark:text-blue-400">AGENCY</span>
        </div>
        <button
          onClick={skipIntro}
          className="group flex items-center space-x-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:border-blue-600 dark:hover:border-blue-400 transition-all shadow-xs"
        >
          <span>Skip Intro</span>
          <ArrowRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Central 3D Perspective Experience */}
      <div className="relative flex flex-1 w-full items-center justify-center my-6">
        <div
          className={`relative w-80 md:w-[540px] aspect-[16/10] rounded-xl border border-neutral-300/80 dark:border-neutral-700/80 bg-neutral-900 shadow-2xl transition-all duration-1000 ease-out transform-gpu ${
            step === 0
              ? 'rotate-x-[35deg] rotate-y-[-25deg] rotate-z-[5deg] scale-75 opacity-20'
              : step === 1
              ? 'rotate-x-[12deg] rotate-y-[-8deg] rotate-z-[1deg] scale-100 opacity-100 shadow-blue-500/20'
              : 'rotate-x-0 rotate-y-0 rotate-z-0 scale-110 opacity-90'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Main Showcase Image */}
          <img
            src="/src/assets/images/aether_spatial_ui_1787880779021.jpg"
            alt="3D Studio Intro"
            className="h-full w-full object-cover rounded-xl opacity-90"
          />

          {/* Layered Floating Card 1 */}
          <div
            className={`absolute -top-6 -left-6 md:-top-10 md:-left-10 w-40 md:w-56 p-4 rounded-lg bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-xl transition-transform duration-1000 ${
              step >= 1 ? 'translate-z-12 opacity-100' : 'translate-z-0 opacity-0'
            }`}
          >
            <div className="font-mono text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-widest font-bold">
              EST. 2026 // STUDIO
            </div>
            <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
              Architectural UX Systems
            </div>
          </div>

          {/* Layered Floating Card 2 */}
          <div
            className={`absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-44 md:w-64 p-4 rounded-lg bg-neutral-950/90 text-white backdrop-blur-md border border-blue-500/30 shadow-xl transition-transform duration-1000 ${
              step >= 1 ? 'translate-z-16 opacity-100' : 'translate-z-0 opacity-0'
            }`}
          >
            <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
              TAGLINE
            </div>
            <div className="font-serif italic text-sm text-blue-300 mt-0.5">
              "We design what comes next."
            </div>
          </div>

          {/* Central 3D Text Overlay */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white transition-opacity duration-700 ${
              step >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-white drop-shadow-md">
              STRATA<span className="text-blue-400 font-mono">//</span>AGENCY
            </h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-neutral-300">
              3D Spatial Design Agency
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Coordinates */}
      <div className="w-full max-w-xl flex flex-col items-center space-y-3 z-20">
        <div className="flex w-full items-center justify-between font-mono text-xs text-neutral-600 dark:text-neutral-400">
          <span>INITIALIZING SPATIAL CANVAS...</span>
          <span className="text-blue-600 dark:text-blue-400 font-bold">{progress}%</span>
        </div>

        <div className="h-1 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
          <div
            className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
