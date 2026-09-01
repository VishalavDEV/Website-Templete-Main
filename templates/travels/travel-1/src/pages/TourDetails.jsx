import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Compass, Clock, MapPin, Star, ArrowLeft, Check, Navigation, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import { MOCK_TOURS } from '../data/travelData';

export default function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/api/tours/${id}`)
      .then(res => {
        setTour(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading tour details", err);
        const fallback = MOCK_TOURS.find(t => t.id === parseInt(id));
        setTour(fallback || null);
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

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-slate-500 space-y-4">
        <p>Tour package not found.</p>
        <Link to="/tours" className="text-indigo-400 hover:underline">Back to Tours</Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-28 pb-20 max-w-5xl mx-auto px-6 space-y-10">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate('/tours')}
        className="flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Tours</span>
      </button>

      {/* Tour Main Display */}
      <div className="relative h-[340px] rounded-3xl overflow-hidden border border-slate-900 shadow-xl">
        <img 
          src={tour.image} 
          alt={tour.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="bg-indigo-500/80 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full text-white inline-flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              {tour.destination}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-wide">{tour.name}</h1>
          </div>
          
          <button
            onClick={() => navigate(`/booking?tourId=${tour.id}`)}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold hover:shadow-lg shadow-indigo-500/20 glow-btn self-start md:self-auto"
          >
            Book This Package
          </button>
        </div>
      </div>

      {/* Details layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left column: Itinerary checkpoints */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="glass-panel rounded-2xl p-6 lg:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Navigation className="w-5 h-5 text-indigo-400" />
              <span>Vacation Itinerary Checklist</span>
            </h3>
            
            <div className="relative border-l-2 border-slate-800 pl-6 space-y-8 ml-3">
              {tour.activities.map((act, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[33px] top-1 bg-teal-500 w-4 h-4 rounded-full border-2 border-slate-950" />
                  <div>
                    <h4 className="font-bold text-slate-200 text-sm">Day {idx + 1} — Activity</h4>
                    <p className="text-slate-400 text-xs mt-1">{act}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column: Highlights and telemetry */}
        <div className="space-y-6">
          
          {/* Quick specs */}
          <div className="glass-panel rounded-2xl p-6 space-y-6">
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest border-b border-slate-900 pb-3">Package specs</h4>
            
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Duration</span>
                <span className="text-slate-300 font-bold flex items-center">
                  <Clock className="w-4 h-4 text-indigo-400 mr-1.5" />
                  {tour.duration}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Transit Mode</span>
                <span className="text-slate-300 font-bold uppercase">{tour.travelMode}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Base Price</span>
                <span className="text-teal-400 font-bold text-sm">${tour.price}</span>
              </div>
            </div>
          </div>

          {/* Insurance note */}
          <div className="glass-panel rounded-2xl p-6 flex items-start space-x-4 border border-indigo-500/10">
            <ShieldCheck className="w-8 h-8 text-teal-400 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="font-bold text-white text-xs">Travelverse Guarantee</h4>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Includes full travel protection insurance, premium support lines, and direct coordinates tracking on the interactive map.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
