import React from 'react';

export default function CountdownTimer({ timeLeft }) {
  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-8">
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center">
            {/* Number Card */}
            <div className="relative w-16 sm:w-20 md:w-24 h-20 sm:h-24 md:h-28 rounded-2xl glass-panel-glow flex items-center justify-center overflow-hidden border border-cyber-red/30 group hover:border-cyber-red transition-all duration-300 shadow-neon-red">
              
              {/* Radial red glow background behind digit */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-red/[0.1] to-transparent pointer-events-none" />
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-10 bg-cyber-red/30 rounded-full blur-xl group-hover:bg-cyber-red/50 transition-all duration-300" />
              
              {/* Digit Display */}
              <span className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                {unit.value}
              </span>

              {/* Bottom Glowing Red Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-red to-transparent group-hover:via-rose-400" />
            </div>

            {/* Label */}
            <span className="mt-2 text-[10px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-rose-300/80">
              {unit.label}
            </span>
          </div>

          {/* Separator Colons */}
          {index < timeUnits.length - 1 && (
            <span className="font-mono text-xl sm:text-2xl text-cyber-red/60 font-bold -mt-5 hidden xs:inline">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
