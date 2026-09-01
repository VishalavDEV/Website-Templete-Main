import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Compass, Home, PlaneTakeoff, Trees } from 'lucide-react';

export default function TravelTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: 'Pack Your Bags', desc: 'Select destinations, gather travel documentation, pack coordinates & gear.', icon: Briefcase },
    { title: 'Reach Airport/Station', desc: 'Arrive early at international hubs. Check-in bags and head to boarding.', icon: PlaneTakeoff },
    { title: 'Start Journey', desc: 'Fly high, sail waves, or ride high-speed rail lines across transit borders.', icon: Compass },
    { title: 'Explore Sights', desc: 'Touch down at your destination, check into resorts, and explore landmarks.', icon: MapPin },
    { title: 'Discover Adventures', desc: 'Deep dive into experiences (scuba, trekking, food tours, safaris).', icon: Trees },
    { title: 'Return Home', desc: 'Board your return flight loaded with souvenirs, photo snaps, and stories.', icon: Home }
  ];

  return (
    <div className="relative w-full py-10 px-4">
      {/* Step description detail card */}
      <div className="max-w-xl mx-auto mb-12 text-center">
        <span className="text-xs font-bold text-[#ffcc00] uppercase tracking-widest">Travel Sequence</span>
        <h2 className="text-3xl font-heading font-extrabold text-white mt-1">
          From Departure to Destination
        </h2>
        <p className="text-sm text-white/50 mt-2">
          Hover or tap any stage along our path to see how we coordinate your premium journey from initial baggage pack to returning home.
        </p>
      </div>

      {/* Desktop Horizontal Timeline Track */}
      <div className="hidden md:block relative max-w-5xl mx-auto h-32 mt-16 px-6">
        
        {/* Track Line */}
        <div className="absolute top-1/2 left-6 right-6 h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
          {/* Active path colored bar */}
          <motion.div
            className="h-full bg-gradient-to-r from-[#ffcc00] via-[#c77dff] to-[#ffd700]"
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>

        {/* Traveling Character Indicator */}
        <motion.div
          className="absolute top-[26px] z-20 -translate-x-1/2 p-2 bg-gradient-to-tr from-[#ffcc00] to-[#ffb700] border border-white rounded-full shadow-[0_0_15px_rgba(255,42,116,0.6)]"
          animate={{
            left: `calc(1.5rem + ${activeStep * (100 / (steps.length - 1))}% - ${activeStep * (48 / (steps.length - 1))}px)`,
            y: [-2, 2, -2]
          }}
          transition={{
            left: { type: 'spring', damping: 18, stiffness: 100 },
            y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' }
          }}
        >
          {/* Small customized traveler emoji/character */}
          <span className="text-base select-none">🚶</span>
        </motion.div>

        {/* Milestone Steps */}
        <div className="absolute inset-0 flex justify-between items-center">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCompleted = idx <= activeStep;
            const isActive = idx === activeStep;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className="flex flex-col items-center cursor-pointer group relative"
                style={{ width: '80px' }}
              >
                {/* Node circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-navy border-[#ffd700] text-[#ffd700] scale-110 shadow-lg'
                      : isCompleted
                      ? 'bg-[#ffcc00] border-[#ffcc00] text-white'
                      : 'bg-[#070b19] border-white/20 text-white/40 group-hover:border-white/60'
                  }`}
                >
                  <Icon size={16} />
                </div>

                {/* Text Title */}
                <span className={`text-[10px] font-heading font-extrabold uppercase mt-3 tracking-wider text-center transition-colors duration-300 ${
                  isActive ? 'text-[#ffd700]' : 'text-white/60 group-hover:text-white'
                }`}>
                  {step.title}
                </span>

                {/* Floating tooltip preview description */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 w-64 glass-panel p-3 border border-white/10 rounded-xl shadow-xl text-center z-30"
                  >
                    <h4 className="text-xs font-bold text-[#ffcc00]">{step.title}</h4>
                    <p className="text-[10px] text-white/70 leading-normal mt-1">{step.desc}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="md:hidden max-w-sm mx-auto flex flex-col gap-6 relative pl-10 mt-10">
        
        {/* Track Line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-1 bg-white/10 rounded-full">
          <motion.div
            className="w-full bg-[#ffcc00] rounded-full"
            style={{ originY: 0 }}
            animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Milestone Steps */}
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStep;

          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`relative flex flex-col p-4 glass-card border transition-all duration-300 ${
                isActive ? 'border-[#ffcc00] bg-[#ffcc00]/5' : 'border-white/5'
              }`}
            >
              {/* Circle Marker */}
              <div
                className={`absolute left-[-32px] top-4 w-6 h-6 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                  isActive
                    ? 'bg-[#ffcc00] border-[#ffcc00] text-white scale-110'
                    : 'bg-navy border-white/20 text-white/50'
                }`}
              >
                <Icon size={10} />
              </div>

              {/* Step info */}
              <h3 className={`text-xs font-heading font-extrabold uppercase ${isActive ? 'text-[#ffcc00]' : 'text-white/80'}`}>
                {step.title}
              </h3>
              <p className="text-[10px] text-white/50 leading-relaxed mt-1">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
