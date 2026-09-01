import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Compass, Clock, MapPin, Star, ArrowLeft, Check, Sparkles, BedDouble } from 'lucide-react';
import axios from 'axios';
import { MOCK_HOTELS } from '../data/travelData';

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/api/hotels/${id}`)
      .then(res => {
        setHotel(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading hotel details", err);
        const fallback = MOCK_HOTELS.find(h => h.id === parseInt(id));
        setHotel(fallback || null);
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

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-slate-500 space-y-4">
        <p>Hotel property not found.</p>
        <Link to="/hotels" className="text-indigo-400 hover:underline">Back to Hotels</Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-28 pb-20 max-w-5xl mx-auto px-6 space-y-10">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate('/hotels')}
        className="flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Hotels</span>
      </button>

      {/* Hotel Banner */}
      <div className="relative h-[340px] rounded-3xl overflow-hidden border border-slate-900 shadow-xl">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="bg-indigo-500/80 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full text-white inline-flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              {hotel.location}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-wide">{hotel.name}</h1>
          </div>
          
          <button
            onClick={() => navigate(`/booking?hotelId=${hotel.id}`)}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold hover:shadow-lg shadow-indigo-500/20 glow-btn self-start md:self-auto"
          >
            Reserve Suite
          </button>
        </div>
      </div>

      {/* Details layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Overview */}
          <div className="glass-panel rounded-2xl p-6 lg:p-8 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <BedDouble className="w-5 h-5 text-indigo-400" />
              <span>Property Overview</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{hotel.description}</p>
          </div>

          {/* Amenities checklist */}
          <div className="glass-panel rounded-2xl p-6 lg:p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">World-Class Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hotel.amenities.map((am, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-slate-300">
                  <div className="p-1.5 bg-teal-500/10 text-teal-400 rounded-lg">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold">{am}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column: Highlights and telemetry */}
        <div className="space-y-6">
          
          {/* Quick specs */}
          <div className="glass-panel rounded-2xl p-6 space-y-6">
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest border-b border-slate-900 pb-3">Resort telemetry</h4>
            
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Rating</span>
                <span className="text-amber-400 font-bold flex items-center">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  {hotel.rating} / 5.0
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Base Cost</span>
                <span className="text-teal-400 font-bold text-sm">${hotel.price} <span className="text-[10px] text-slate-500">/ night</span></span>
              </div>
            </div>
          </div>

          {/* Sparkles advice */}
          <div className="glass-panel rounded-2xl p-6 flex items-start space-x-4 border border-indigo-500/10">
            <Sparkles className="w-8 h-8 text-teal-400 flex-shrink-0 animate-pulse" />
            <div className="space-y-1">
              <h4 className="font-bold text-white text-xs">Premium Inclusions</h4>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Bookings through Travelverse automatically include organic breakfast credits, spa vouchers, and airport shuttle coordinates.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
