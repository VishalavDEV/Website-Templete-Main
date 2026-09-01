import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, MapPin, Calendar, Users, DollarSign, Check, ChevronRight, RefreshCw, Star } from 'lucide-react';
import axios from 'axios';

export default function TripPlanner() {
  // Form input states
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('Dubai');
  const [travelDate, setTravelDate] = useState('');
  const [travellers, setTravellers] = useState(1);
  const [budget, setBudget] = useState(1500);
  const [transportation, setTransportation] = useState('Aeroplane');
  const [hotelCategory, setHotelCategory] = useState('Luxury');
  const [selectedActivities, setSelectedActivities] = useState([]);
  
  // App state
  const [loading, setLoading] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  
  // Activities multiselect choices
  const activitiesList = ['Sightseeing', 'Scuba Diving', 'Desert Safari', 'Mountain Skiing', 'Shopping', 'Fine Dining', 'Temples visit', 'Skydiving'];

  const toggleActivity = (act) => {
    if (selectedActivities.includes(act)) {
      setSelectedActivities(selectedActivities.filter(a => a !== act));
    } else {
      setSelectedActivities([...selectedActivities, act]);
    }
  };

  const handleGeneratePlan = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        origin,
        destination,
        travelDate,
        travellers: parseInt(travellers),
        budget: parseFloat(budget),
        hotelCategory,
        activities: selectedActivities,
        timeline: [transportation] // Send selected transit as the timeline seed
      };

      const res = await axios.post('http://localhost:8080/api/trips', payload);
      setGeneratedPlan(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error generating trip plan", err);
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-6xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          AI Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300">Journey Planner</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Outline your ideal coordinates to generate a cinematic, step-by-step visual travel timeline.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Column: Form Questionnaire */}
        <div className="glass-panel rounded-3xl p-6 lg:p-8 border border-slate-800">
          <form onSubmit={handleGeneratePlan} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Origin */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Departing From</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chennai, India"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Flying To</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  {['Paris', 'Dubai', 'Maldives', 'Switzerland', 'Tokyo', 'London', 'Bali', 'Goa', 'Rajasthan', 'Kerala'].map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Travel Date */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Departure Date</label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                  <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Travellers count */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Travellers</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    required
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                  <Users className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Max Budget ($)</label>
                <div className="relative">
                  <input
                    type="number"
                    min="100"
                    required
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                  <DollarSign className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Transport preference */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Preferred Transport</label>
                <select
                  value={transportation}
                  onChange={(e) => setTransportation(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Aeroplane">Flight (Aeroplane)</option>
                  <option value="Train">Scenic Train</option>
                  <option value="Ship">Ocean Cruise Liner</option>
                  <option value="Car">Road Trip (Self-Drive Car)</option>
                </select>
              </div>

              {/* Hotel preference */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Hotel Category</label>
                <select
                  value={hotelCategory}
                  onChange={(e) => setHotelCategory(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Luxury">5-Star Luxury Hotel</option>
                  <option value="Resort">Beach Resort</option>
                  <option value="Villa">Private Villa</option>
                  <option value="Budget">Cozy Budget Hotel</option>
                </select>
              </div>
            </div>

            {/* Activities select */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Select Travel Activities</label>
              <div className="flex flex-wrap gap-2">
                {activitiesList.map(act => {
                  const isSelected = selectedActivities.includes(act);
                  return (
                    <button
                      key={act}
                      type="button"
                      onClick={() => toggleActivity(act)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors flex items-center space-x-1.5 ${
                        isSelected 
                          ? 'bg-teal-500/10 border-teal-500 text-teal-400' 
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                      <span>{act}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Calculating Transit Routes...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Generate Journey Plan</span>
                </>
              )}
            </button>

          </form>
        </div>

        {/* Right Column: Visual Journey Timeline Output */}
        <div className="h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {generatedPlan ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-panel rounded-3xl p-6 lg:p-8 space-y-8 border border-teal-500/20"
              >
                <div className="border-b border-slate-900 pb-4">
                  <h3 className="text-2xl font-black text-white flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
                    <span>Your Visual Journey Timeline</span>
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">Timeline generated dynamically by Spring Boot</p>
                </div>

                {/* Animated Chronological Timeline */}
                <div className="relative border-l border-slate-800 pl-6 space-y-6 ml-3">
                  {generatedPlan.timeline.map((step, idx) => {
                    const isLast = idx === generatedPlan.timeline.length - 1;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15, duration: 0.4 }}
                        className="relative"
                      >
                        {/* Node circle */}
                        <div className={`absolute -left-[30px] top-1 w-3 h-3 rounded-full border-2 border-slate-950 ${isLast ? 'bg-teal-400 animate-ping' : 'bg-indigo-500'}`} />
                        
                        <div className="space-y-1">
                          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                            Stage {idx + 1}
                          </span>
                          <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                            <span>{step}</span>
                            {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-600" />}
                          </h4>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Summary panel */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-900 space-y-3">
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Plan Highlights</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-500 block">Depart Date</span>
                      <span className="text-slate-300 font-bold">{generatedPlan.travelDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Travellers count</span>
                      <span className="text-slate-300 font-bold">{generatedPlan.travellers} Person</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/booking')}
                  className="w-full py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900 text-xs font-bold text-slate-200 transition-colors"
                >
                  Proceed to Seat Reservation
                </button>
              </motion.div>
            ) : (
              <div className="glass-panel rounded-3xl p-8 text-center border border-slate-900 space-y-4">
                <Compass className="w-12 h-12 text-slate-700 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-slate-300">Plan is Empty</h3>
                <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                  Fill out the parameters on the left and click "Generate Journey Plan" to compile your visual travel timeline route.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
