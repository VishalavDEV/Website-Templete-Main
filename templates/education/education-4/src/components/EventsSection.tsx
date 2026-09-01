import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle, UserPlus, Sparkles } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/universityData';
import { UniversityEvent } from '../types';

interface EventsSectionProps {
  onRSVPEvent: (event: UniversityEvent) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRSVPEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [rsvpSuccessId, setRsvpSuccessId] = useState<string | null>(null);

  const categories = ['All', 'Admissions', 'Academic', 'Career'];

  const filteredEvents = UPCOMING_EVENTS.filter((e) => {
    if (selectedCategory === 'All') return true;
    return e.category === selectedCategory;
  });

  const handleQuickRSVP = (event: UniversityEvent) => {
    setRsvpSuccessId(event.id);
    onRSVPEvent(event);
    setTimeout(() => {
      setRsvpSuccessId(null);
    }, 4000);
  };

  return (
    <section id="events" className="py-20 lg:py-24 bg-white border-t border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ffb606] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UPCOMING EVENTS & SEMINARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#132238] tracking-tight leading-tight">
              Join Our Campus & Virtual Events
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#ffb606] text-slate-950 shadow-md font-black'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Event Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132238]/75 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#132238]/90 text-white text-xs font-semibold">
                    {event.category}
                  </div>

                  {/* Date Badge in Gold */}
                  <div className="absolute top-3 right-3 bg-[#ffb606] text-slate-950 p-2.5 text-center shadow-md leading-none">
                    <span className="text-[10px] font-black uppercase block">{event.month}</span>
                    <span className="text-lg font-black block mt-0.5">{event.day}</span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-base font-black text-[#132238] group-hover:text-[#ffb606] transition-colors leading-snug mb-2.5">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-xs text-slate-500 py-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#ffb606]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#ffb606]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                {rsvpSuccessId === event.id ? (
                  <div className="w-full py-3 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center justify-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>RSVP Confirmed & Pass Issued!</span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleQuickRSVP(event)}
                    className="w-full py-3 px-4 bg-[#132238] hover:bg-[#ffb606] hover:text-slate-950 text-white font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>RSVP / Reserve Pass</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
