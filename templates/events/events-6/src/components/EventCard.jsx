import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgUrl = event.imageUrl || event.image;

  return (
    <div className="event-card group bg-[#141414] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFC928] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(245,185,0,0.25)] flex flex-col">
      <div className="event-card-img-wrapper relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-neutral-800 animate-pulse flex items-center justify-center">
            <span className="text-xs text-neutral-500 font-mono tracking-wider">LOADING...</span>
          </div>
        )}
        <img
          src={imgUrl}
          alt={event.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`event-card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <span className="event-card-badge absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#F5B900]/50 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#FFC928]">
          {event.genre}
        </span>
      </div>

      <div className="event-card-body p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="event-card-title font-['Syne',sans-serif] text-xl sm:text-2xl font-bold uppercase text-white mb-3">
          {event.title}
        </h3>

        <div className="event-card-details flex flex-col gap-2 text-xs sm:text-sm text-neutral-300 mb-4">
          <div className="event-card-detail flex items-center gap-2">
            <Calendar size={15} className="text-[#FFC928] shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="event-card-detail flex items-center gap-2">
            <Clock size={15} className="text-[#FFC928] shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="event-card-detail flex items-center gap-2">
            <MapPin size={15} className="text-[#FFC928] shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>
        </div>

        <p className="event-card-desc text-xs sm:text-sm text-neutral-400 mb-6 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        <div className="event-card-footer mt-auto pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div className="event-price font-['Syne',sans-serif] text-lg sm:text-xl font-extrabold text-[#FFC928]">
            ₹{event.price} <span className="text-xs text-neutral-400 font-normal">/ PASS</span>
          </div>
          <Link
            to="/tickets"
            className="btn-primary py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F5B900] text-black hover:bg-[#FFC928] transition-all flex items-center gap-1.5"
          >
            <Ticket size={14} /> BOOK PASS
          </Link>
        </div>
      </div>
    </div>
  );
}
