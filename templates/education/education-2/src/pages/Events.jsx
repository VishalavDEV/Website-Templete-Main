import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Ticket, Search, Filter, Grid, List } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import { eventsData, eventCategories } from '../data/events';

export default function Events({ onRegisterEvent }) {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const filteredEvents = useMemo(() => {
    return eventsData.filter((ev) => {
      const matchesCategory =
        selectedCategory === 'All Events' || ev.category === selectedCategory;
      const matchesSearch =
        ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.location.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Live Interactive Gathering"
          title="Upcoming Educational Events &"
          highlight="Global Hackathons"
          subtitle="Join live interactive webinars, technical hackathons, guest keynote summits, and employer career fairs."
        />

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search events by title, speaker, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary-500 font-medium text-slate-900"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                  viewMode === 'grid' ? 'bg-primary-600 text-white border-primary-600' : 'bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                  viewMode === 'list' ? 'bg-primary-600 text-white border-primary-600' : 'bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {eventCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Display Grid or List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} onRegister={onRegisterEvent} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-card-hover transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-700 flex flex-col items-center justify-center flex-shrink-0 font-bold border border-primary-100">
                    <Calendar className="w-5 h-5 mb-1" />
                    <span className="text-[10px] uppercase">Date</span>
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-primary-600 text-white inline-block mb-1">
                      {event.category}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-lg">{event.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-4">
                      <span>Date: {event.date}</span>
                      <span>Time: {event.time}</span>
                      <span>Location: {event.location}</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRegisterEvent && onRegisterEvent(event)}
                  className="px-6 py-3 rounded-xl font-bold bg-slate-900 hover:bg-primary-600 text-white text-xs transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Ticket className="w-4 h-4" />
                  RSVP Seat
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
