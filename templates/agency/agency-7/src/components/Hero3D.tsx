import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Zap } from 'lucide-react';

export const Hero3D: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#FBF9F5] dark:bg-[#0D0E12] transition-colors duration-300">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 space-y-8 z-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/40 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Compass className="h-3.5 w-3.5 animate-spin-slow" />
              <span>SPATIAL DESIGN STUDIO // EST. 2026</span>
            </div>

            {/* Massive Hero Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 leading-[0.95]">
              WE DESIGN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-400 dark:to-indigo-300">
                WHAT COMES
              </span> <br />
              NEXT<span className="text-blue-600 dark:text-blue-400 font-mono">.</span>
            </h1>

            {/* Supporting Text */}
            <p className="max-w-xl text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
              Independent design studio creating identities, interfaces and digital experiences for ambitious brands across the globe.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/work"
                className="group flex items-center space-x-3 rounded-full bg-neutral-900 dark:bg-neutral-100 px-8 py-4 text-xs font-mono uppercase tracking-widest font-bold text-white dark:text-neutral-900 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-all shadow-xl hover:shadow-blue-500/20"
                data-cursor="EXPLORE"
              >
                <span>Explore Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="group flex items-center space-x-3 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 px-8 py-4 text-xs font-mono uppercase tracking-widest font-bold text-neutral-800 dark:text-neutral-200 hover:border-blue-500 transition-all shadow-xs"
                data-cursor="CONTACT"
              >
                <span>Start a Project</span>
                <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </Link>
            </div>

            {/* Live Telemetry Bar */}
            <div className="pt-6 flex items-center space-x-8 text-xs font-mono text-neutral-500 border-t border-neutral-200 dark:border-neutral-800">
              <div>
                <span className="block text-neutral-400 text-[10px]">FOCUS</span>
                <span className="text-neutral-800 dark:text-neutral-200 font-bold">UI/UX & 3D CANVAS</span>
              </div>
              <div>
                <span className="block text-neutral-400 text-[10px]">STATUS</span>
                <span className="text-emerald-500 font-bold flex items-center space-x-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ACCEPTING Q3 PROJECTS</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Composition Panel */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              className="relative w-full aspect-[4/5] max-w-md rounded-2xl p-1 bg-gradient-to-b from-neutral-200 dark:from-neutral-800 to-transparent shadow-2xl transform-gpu transition-transform duration-200 ease-out"
              style={
                !isMobile
                  ? {
                      perspective: '1000px',
                      transform: `rotateX(${mousePos.y * -12}deg) rotateY(${
                        mousePos.x * 12
                      }deg) translateZ(10px)`,
                    }
                  : {}
              }
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-900 border border-neutral-700/60 p-4">
                {/* Background Image Layer */}
                <img
                  src="/src/assets/images/aether_spatial_ui_1787880779021.jpg"
                  alt="Aether 3D Showcase"
                  className="h-full w-full object-cover rounded-lg opacity-85 transition-transform duration-700"
                  style={
                    !isMobile
                      ? {
                          transform: `scale(1.05) translate(${mousePos.x * -10}px, ${
                            mousePos.y * -10
                          }px)`,
                        }
                      : {}
                  }
                />

                {/* Floating Wireframe Cube / Grid Overlay */}
                <div
                  className="absolute inset-4 rounded-lg border border-blue-500/40 pointer-events-none flex flex-col justify-between p-4"
                  style={
                    !isMobile
                      ? {
                          transform: `translateZ(30px) translate(${mousePos.x * 15}px, ${
                            mousePos.y * 15
                          }px)`,
                        }
                      : {}
                  }
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-blue-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-blue-500/30">
                    <span>AETHER LABS // V2.4</span>
                    <span>35.6762° N</span>
                  </div>

                  <div className="self-end bg-neutral-950/80 backdrop-blur-md border border-neutral-700 p-3 rounded-lg text-white max-w-[200px]">
                    <div className="font-mono text-[9px] text-blue-400 uppercase font-bold">
                      FEATURED CASE STUDY
                    </div>
                    <div className="font-serif text-sm font-semibold mt-0.5">Aether Spatial OS</div>
                    <div className="text-[10px] text-neutral-400 mt-1">UX / UI / Product Strategy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
