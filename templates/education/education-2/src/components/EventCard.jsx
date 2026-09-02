import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Ticket, Video } from 'lucide-react';

export default function EventCard({ event, onRegister }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col h-full group"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
        
        {/* Category Pill */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-primary-600 text-white shadow">
          {event.category}
        </span>

        {/* Location Tag */}
        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/80 backdrop-blur-md text-white flex items-center gap-1">
          {event.isOnline ? <Video className="w-3.5 h-3.5 text-emerald-400" /> : <MapPin className="w-3.5 h-3.5 text-sky-400" />}
          {event.location}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Date & Time */}
          <div className="flex items-center gap-4 text-xs font-semibold text-primary-600 mb-3">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 font-normal">
              <Clock className="w-3.5 h-3.5" />
              <span>{event.time}</span>
            </div>
          </div>

          <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-primary-600 transition-colors leading-snug">
            {event.title}
          </h3>

          <p className="text-slate-500 text-xs line-clamp-2 mb-4 leading-relaxed">
            {event.shortDescription}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between py-3 border-t border-slate-100 text-xs mb-4">
            <span className="text-slate-500 font-medium">Speaker:</span>
            <span className="font-bold text-slate-800 truncate max-w-[180px]">{event.speaker}</span>
          </div>

          <button
            onClick={() => onRegister && onRegister(event)}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-900 hover:bg-primary-600 text-white transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Ticket className="w-4 h-4" />
            Reserve Seat / View Event
          </button>
        </div>
      </div>
    </motion.div>
  );
}
