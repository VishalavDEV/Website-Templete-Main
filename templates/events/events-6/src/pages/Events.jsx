import React from 'react';
import EventCard from '../components/EventCard';
import { concertExperiences } from '../data/festivalData';

export default function Events() {
  return (
    <div className="w-full max-w-full overflow-x-hidden pt-24 sm:pt-28 md:pt-32 relative z-10 min-h-screen">
      {/* Header Banner */}
      <section className="py-12 sm:py-16 md:py-20 text-center relative bg-[radial-gradient(ellipse_at_top,_#261c04_0%,_#050505_75%)] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle inline-block text-xs sm:text-sm font-extrabold tracking-[4px] text-[#F5B900] uppercase mb-3">
            CURATED MUSIC EXPERIENCES
          </span>
          <h1 className="font-['Syne',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
            CONCERT EXPERIENCES
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Discover the 5 unique sound atmospheres comprising Midnight Echo 2026 across 3 stages.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {concertExperiences.map(exp => (
              <EventCard key={exp.id} event={exp} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
