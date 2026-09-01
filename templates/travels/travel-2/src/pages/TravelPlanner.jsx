import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Calendar, Users, Sparkles, Info, DollarSign, Compass, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { submitPlannerRequest, fetchDestinations } from '../services/api';

export default function TravelPlanner() {
  const [searchParams] = useSearchParams();
  const [destination, setDestination] = useState('kerala');
  const [days, setDays] = useState(5);
  const [style, setStyle] = useState('adventure');
  const [budget, setBudget] = useState('premium');
  const [travelers, setTravelers] = useState(2);

  const [loading, setLoading] = useState(false);
  const [itineraryResult, setItineraryResult] = useState(null);

  const [fullDestinations, setFullDestinations] = useState([]);
  const [destinationsList, setDestinationsList] = useState([
    { id: 'kerala', name: 'Kerala, India' },
    { id: 'goa', name: 'Goa, India' },
    { id: 'rajasthan', name: 'Rajasthan, India' },
    { id: 'bali', name: 'Bali, Indonesia' },
    { id: 'tokyo', name: 'Tokyo, Japan' },
    { id: 'paris', name: 'Paris, France' },
    { id: 'switzerland', name: 'Switzerland' },
    { id: 'dubai', name: 'Dubai, UAE' },
    { id: 'newyork', name: 'New York, USA' },
    { id: 'iceland', name: 'Iceland' }
  ]);

  useEffect(() => {
    async function loadDestinations() {
      const data = await fetchDestinations();
      setFullDestinations(data);
      const list = data.map(d => ({ id: d.id, name: `${d.name}, ${d.country}` }));
      if (list.length > 0) {
        setDestinationsList(list);
      }
    }
    loadDestinations();
  }, []);

  // Sync destination query parameter if navigating from a details page
  useEffect(() => {
    const destParam = searchParams.get('dest');
    if (destParam && destinationsList.length > 0) {
      const matched = destinationsList.find(
        d => d.id === destParam.toLowerCase() || d.name.toLowerCase().includes(destParam.toLowerCase())
      );
      if (matched) {
        setDestination(matched.id);
      }
    }
  }, [searchParams, destinationsList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!destination.trim()) return;

    setLoading(true);
    setItineraryResult(null);

    // Call the API service
    const result = await submitPlannerRequest({
      destination,
      days: Number(days),
      style,
      budget,
      travelers: Number(travelers)
    });

    setTimeout(() => {
      setItineraryResult(result);
      setLoading(false);
    }, 1200); // Cinematic builder delay
  };

  const stylesList = [
    { id: 'adventure', label: '🥾 Adventure' },
    { id: 'luxury', label: '👑 Luxury' },
    { id: 'relaxation', label: '🌴 Relaxation' },
    { id: 'backpack', label: '🎒 Backpacking' },
    { id: 'family', label: '👨‍👩‍👧 Family' },
    { id: 'romantic', label: '❤️ Romantic' },
    { id: 'cultural', label: '🕌 Cultural' }
  ];

  const budgetList = [
    { id: 'economy', label: 'Economy ($)' },
    { id: 'premium', label: 'Premium ($$)' },
    { id: 'luxury', label: 'Luxury ($$$)' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-800 pt-28 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Planner Setup Form */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="max-w-md mb-8">
            <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest font-heading">AI Route Builder</span>
            <h1 className="text-3xl sm:text-4xl font-heading font-black text-stone-850 mt-1">
              Build Your Perfect Trip.
            </h1>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed font-medium">
              Configure your travelers, destination and style. Wanderly's compiler will dynamically draw a detailed day-by-day itinerary.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-stone-200 p-6 rounded-3xl flex flex-col gap-4 shadow-sm">
            
            {/* Destination Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Select Destination</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full glass-input text-xs border-stone-200 py-2.5 px-3 cursor-pointer"
              >
                {destinationsList.map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>

              {/* Real-time destination preview card */}
              <div className="relative h-28 w-full rounded-2xl overflow-hidden mt-3 border border-stone-200 shadow-inner">
                <img
                  src={
                    fullDestinations.find(d => d.id === destination)?.image ||
                    'https://images.unsplash.com/photo-1504893524553-ac55fce69cbf?auto=format&fit=crop&w=400&q=80'
                  }
                  alt="Selected destination preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <span className="text-white text-[10px] font-heading font-extrabold tracking-widest uppercase">
                    Preview: {destinationsList.find(d => d.id === destination)?.name || destination}
                  </span>
                </div>
              </div>
            </div>

            {/* Total Days Slider */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <label className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Duration (Days)</label>
                <span className="text-xs font-bold text-stone-700">{days} Days</span>
              </div>
              <input
                type="range"
                min="3"
                max="10"
                step="1"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-[#ff2a74] cursor-pointer"
              />
            </div>

            {/* Travel Style Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Travel Style</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full glass-input text-xs border-stone-200 py-2.5 px-3 cursor-pointer"
              >
                {stylesList.map(s => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </div>

            {/* Budget & Travelers */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Budget Tier</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full glass-input text-xs border-stone-200 py-2.5 px-3 cursor-pointer"
                >
                  {budgetList.map(b => (
                    <option key={b.id} value={b.id}>{b.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Travelers</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full glass-input text-xs border-stone-200 py-2 px-3"
                />
              </div>
            </div>

            {/* Action Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-[#ff2a74] to-[#0066ff] hover:opacity-95 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-md mt-2 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Compile Itinerary</span>
            </button>
          </form>
        </div>

        {/* Right Side: Compiled Itinerary Output Display */}
        <div className="lg:col-span-8 flex flex-col justify-start">
          <AnimatePresence mode="wait">
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="bg-white border border-stone-200 rounded-3xl p-12 text-center shadow-sm flex flex-col items-center justify-center min-h-[420px]"
              >
                <Compass className="animate-spin text-[#ff2a74] mb-4" size={44} />
                <h3 className="font-heading font-extrabold text-stone-850 text-lg">Compiling Schedule...</h3>
                <p className="text-xs text-stone-500 max-w-xs mt-1 leading-relaxed">
                  Mapping transits, formatting local sights, and matching day itineraries.
                </p>
              </motion.div>
            )}

            {!loading && !itineraryResult && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/70 border border-stone-200 border-dashed rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[420px]"
              >
                <div className="w-16 h-16 rounded-full bg-stone-50 border border-stone-150 flex items-center justify-center text-stone-400 mb-4 text-2xl">
                  📝
                </div>
                <h3 className="font-heading font-extrabold text-stone-800 text-lg">Itinerary Solver Ready</h3>
                <p className="text-xs text-stone-500 max-w-sm mt-1.5 leading-relaxed font-medium">
                  Configure the schedule parameters on the left and click Compile. Your detailed custom itinerary will appear here.
                </p>
              </motion.div>
            )}

            {!loading && itineraryResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
              >
                {/* Result Header Panel */}
                <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-stone-800 bg-[#ff2a74]/10 border border-[#ff2a74]/15 px-2.5 py-0.5 rounded-md capitalize">
                        {itineraryResult.style}
                      </span>
                      <span className="text-xs font-bold text-stone-800 bg-[#0066ff]/10 border border-[#0066ff]/15 px-2.5 py-0.5 rounded-md">
                        {itineraryResult.totalDays} Days
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-heading font-black text-stone-850 capitalize mt-2">
                      Custom {itineraryResult.destination} Schedule
                    </h2>
                  </div>

                  <div className="text-left sm:text-right border-t sm:border-t-0 border-stone-100 pt-3 sm:pt-0 w-full sm:w-auto">
                    <span className="text-[9px] text-stone-400 font-bold block uppercase tracking-wider">Estimated Cost</span>
                    <span className="text-2xl font-heading font-black text-stone-850">
                      ${itineraryResult.estimatedCost.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Day schedules cards sequence */}
                <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2">
                  {itineraryResult.schedule && itineraryResult.schedule.map((dayPlan) => (
                    <div
                      key={dayPlan.day}
                      className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:border-[#ff2a74]/40 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-stone-100 pb-3 mb-3">
                        <h4 className="font-heading font-extrabold text-stone-800 text-sm flex items-center gap-2">
                          <span className="py-1 px-2.5 bg-[#ff2a74] text-white text-[10px] font-black rounded-lg uppercase tracking-wide">
                            Day {dayPlan.day < 10 ? `0${dayPlan.day}` : dayPlan.day}
                          </span>
                          <span>{dayPlan.title}</span>
                        </h4>
                        
                        <span className="text-[10px] font-bold text-stone-500 bg-stone-50 border border-stone-150 px-2 py-0.5 rounded-md">
                          {dayPlan.meals}
                        </span>
                      </div>

                      <p className="text-stone-500 text-xs leading-relaxed font-medium">
                        {dayPlan.description}
                      </p>

                      {/* Activities tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {dayPlan.activities && dayPlan.activities.map((act, aIdx) => (
                          <span
                            key={aIdx}
                            className="inline-flex items-center gap-1 py-1 px-2.5 bg-stone-50 border border-stone-150 rounded-lg text-[9px] font-bold text-stone-600 select-none"
                          >
                            <CheckCircle size={9} className="text-[#ff2a74]" />
                            <span>{act}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Small disclaimer */}
                <div className="flex gap-2.5 p-4 bg-white/60 border border-stone-200 rounded-2xl text-[10px] text-stone-500 leading-relaxed font-semibold">
                  <Info className="text-[#ff2a74] shrink-0" size={14} />
                  <span>
                    Wanderly itinerary maps are generated dynamically. Costs may shift based on seasonal local airline updates. Limousine and baggage clearances apply to premium packages.
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
