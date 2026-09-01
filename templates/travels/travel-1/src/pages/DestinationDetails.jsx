import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MapPin, Star, Clock, DollarSign, ArrowLeft, Check, Compass } from 'lucide-react';
import axios from 'axios';
import { MOCK_DESTINATIONS } from '../data/travelData';

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/api/destinations/${id}`)
      .then(res => {
        setDestination(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading destination details", err);
        const fallback = MOCK_DESTINATIONS.find(d => d.id === parseInt(id));
        setDestination(fallback || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-indigo-400">
        <Compass className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-slate-500 space-y-4">
        <p>Destination not found.</p>
        <Link to="/destinations" className="text-indigo-400 hover:underline">Back to Destinations</Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-28 pb-20 max-w-5xl mx-auto px-6 space-y-10">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate('/destinations')}
        className="flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Destinations</span>
      </button>

      {/* Hero Banner */}
      <div className="relative h-[380px] rounded-3xl overflow-hidden border border-slate-900 shadow-xl">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="bg-indigo-500/80 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full text-white inline-flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              {destination.country}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-wide">{destination.name}</h1>
          </div>
          
          {/* Quick Book */}
          <button
            onClick={() => navigate(`/booking?destId=${destination.id}`)}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold hover:shadow-lg shadow-indigo-500/20 glow-btn self-start md:self-auto"
          >
            Book This Trip
          </button>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Description & Attractions */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-panel rounded-2xl p-6 lg:p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">About the Journey</h3>
            <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{destination.description}</p>
          </div>

          <div className="glass-panel rounded-2xl p-6 lg:p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">Key Attractions & Activities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.attractions.map((att, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-slate-300">
                  <div className="p-1.5 bg-teal-500/10 text-teal-400 rounded-lg">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold">{att}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Telemetry & In-Memory statistics */}
        <div className="space-y-6">
          
          {/* Stat panel */}
          <div className="glass-panel rounded-2xl p-6 space-y-6">
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest border-b border-slate-900 pb-3">Trip telemetry</h4>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs">Global Rating</span>
                <span className="text-amber-400 font-bold flex items-center text-sm">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  {destination.rating} / 5.0
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs">Trip Duration</span>
                <span className="text-slate-300 font-bold text-sm flex items-center">
                  <Clock className="w-4 h-4 text-indigo-400 mr-2" />
                  {destination.duration}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs">Estimated Cost</span>
                <span className="text-slate-300 font-bold text-sm flex items-center">
                  <DollarSign className="w-4 h-4 text-teal-400 mr-1" />
                  ${destination.averagePrice} / person
                </span>
              </div>
            </div>
          </div>

          {/* Map details preview */}
          <div className="glass-panel rounded-2xl p-6 text-center space-y-4">
            <Compass className="w-8 h-8 text-teal-400 mx-auto animate-spin" />
            <h4 className="font-bold text-white text-sm">Interactive SVG Navigation</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Mapped coordinates (X: {destination.mapX}%, Y: {destination.mapY}%) coordinates displayed inside our Home navigation globe. Mapped flight connections are active.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
