import React, { useState } from 'react';
import { NOIRE_EVENTS } from '../data/noireData';
import { NoireEvent } from '../types';

interface EventsCalendarSectionProps {
  onOpenReservation: () => void;
}

export const EventsCalendarSection: React.FC<EventsCalendarSectionProps> = ({ onOpenReservation }) => {
  const [activeEvent, setActiveEvent] = useState<NoireEvent>(NOIRE_EVENTS[0]);

  return (
    <section id="events" className="relative w-full bg-[#171512] text-[#F3EBDD] py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[rgba(243,235,221,0.14)] pb-8">
        <div>
          <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase block mb-2 font-bold">
            07 // EVENT SCHEDULE
          </span>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-6xl text-[#F3EBDD] uppercase">
            CALENDAR & SESSIONS
          </h2>
        </div>
        <div className="font-mono text-xs text-[#B8AA98] tracking-widest uppercase">
          LIMITED SEATING &nbsp;|&nbsp; ADVANCE RESERVATION RECOMMENDED
        </div>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Event List */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {NOIRE_EVENTS.map((evt) => (
            <div
              key={evt.id}
              onMouseEnter={() => setActiveEvent(evt)}
              onClick={onOpenReservation}
              className={`group cursor-pointer p-8 bg-[#211D18] border transition-all duration-300 rounded-sm relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm ${
                activeEvent.id === evt.id
                  ? 'border-[#B87552] bg-[#211D18] translate-x-2'
                  : 'border-[rgba(243,235,221,0.14)] hover:border-[#B87552]/50'
              }`}
            >
              {/* Date Column */}
              <div className="flex flex-col">
                <span className="font-mono text-xs text-[#B87552] uppercase font-bold">{evt.day}</span>
                <span className="font-display font-black text-3xl md:text-4xl text-[#F3EBDD]">
                  {evt.date}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1 md:px-6">
                <h3 className="font-display font-bold text-xl md:text-2xl text-[#F3EBDD] group-hover:text-[#B87552] transition-colors uppercase">
                  {evt.title}
                </h3>
                <p className="font-body text-xs text-[#B8AA98] mt-1">{evt.description}</p>
              </div>

              {/* Time & Action Button */}
              <div className="flex items-center space-x-4">
                <span className="font-mono text-sm text-[#F3EBDD] bg-[#171512] px-3 py-1 border border-[rgba(243,235,221,0.14)] font-bold">
                  {evt.time}
                </span>
                <span className="font-mono text-xs text-[#B87552] font-bold group-hover:translate-x-1 transition-transform">
                  BOOK →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Event Image Hover Preview Frame */}
        <div className="lg:col-span-5 relative h-[420px] md:h-[520px] w-full overflow-hidden border border-[rgba(243,235,221,0.14)] rounded-sm bg-[#211D18] shadow-md">
          <img
            src={activeEvent.image}
            alt={activeEvent.title}
            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] transition-all duration-500"
          />

          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#171512] via-[#171512]/90 to-transparent">
            <span className="font-mono text-xs text-[#B87552] uppercase block mb-1 font-bold">
              [ UPCOMING SESSION ]
            </span>
            <h4 className="font-display font-bold text-2xl text-[#F3EBDD] uppercase">
              {activeEvent.title}
            </h4>
            <p className="font-mono text-xs text-[#B8AA98] mt-1 font-bold">{activeEvent.date} — {activeEvent.time}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
