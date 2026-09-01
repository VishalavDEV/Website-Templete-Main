import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, MapPin, Calendar, Users, Plane, ShieldCheck, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { MOCK_DESTINATIONS } from '../data/travelData';

export default function Booking() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // URL seeds
  const destIdParam = searchParams.get('destId') || '';
  const tourIdParam = searchParams.get('tourId') || '';
  const hotelIdParam = searchParams.get('hotelId') || '';
  const modeParam = searchParams.get('mode') || '';

  // Stepper state
  const [step, setStep] = useState(1);
  const totalSteps = 8;

  // Booking Form State
  const [destinations, setDestinations] = useState(MOCK_DESTINATIONS);
  const [selectedDestId, setSelectedDestId] = useState(destIdParam);
  const [travelDate, setTravelDate] = useState('');
  const [travellerName, setTravellerName] = useState('');
  const [email, setEmail] = useState('');
  const [travellersCount, setTravellersCount] = useState(1);
  const [travelMode, setTravelMode] = useState(modeParam || 'Aeroplane');
  const [hotelCategory, setHotelCategory] = useState(hotelIdParam ? 'Luxury' : 'Resort');
  const [selectedActivities, setSelectedActivities] = useState([]);
  
  // Receipt response
  const [loading, setLoading] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/destinations')
      .then(res => {
        setDestinations(res.data);
        if (!selectedDestId && res.data.length > 0) {
          setSelectedDestId(res.data[0].id.toString());
        }
      })
      .catch(err => {
        console.error("Error loading destinations for booking page", err);
        setDestinations(MOCK_DESTINATIONS);
        if (!selectedDestId && MOCK_DESTINATIONS.length > 0) {
          setSelectedDestId(MOCK_DESTINATIONS[0].id.toString());
        }
      });
  }, [selectedDestId]);

  const selectedDestination = destinations.find(d => d.id.toString() === selectedDestId);

  const handleNextStep = () => {
    if (step === 1 && !selectedDestId) return;
    if (step === 2 && !travelDate) return;
    if (step === 3 && (!travellerName || !email)) return;
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleFinalSubmit = async () => {
    setLoading(true);
    try {
      const payload = {
        destinationId: parseInt(selectedDestId),
        tourId: tourIdParam ? parseInt(tourIdParam) : null,
        hotelId: hotelIdParam ? parseInt(hotelIdParam) : null,
        travellerName,
        email,
        travelDate,
        travellersCount: parseInt(travellersCount),
        travelMode,
        totalPrice: 0.0 // Backend will calculate
      };

      const res = await axios.post('http://localhost:8080/api/bookings', payload);
      setConfirmedBooking(res.data);
      setStep(8); // jump to confirmation success
      setLoading(false);
    } catch (err) {
      console.error("Booking error", err);
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-4xl mx-auto space-y-12">
      
      {/* Step Progress Header */}
      {step < 8 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
            <span>Booking Ticket Stepper</span>
            <span>Step {step} of 7</span>
          </div>
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div 
              style={{ width: `${(step / 7) * 100}%` }}
              className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 transition-all duration-300"
            />
          </div>
        </div>
      )}

      {/* Main Body */}
      <div className="glass-panel rounded-3xl p-6 lg:p-10 border border-slate-800 shadow-xl relative min-h-[380px] flex flex-col justify-between">
        
        <AnimatePresence mode="wait">
          
          {/* STEP 1: SELECT DESTINATION */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white">Select Your Destination</h2>
                <p className="text-slate-400 text-xs">Choose the global landmarks you want to coordinate flight lines to.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destinations.map(d => (
                  <div
                    key={d.id}
                    onClick={() => setSelectedDestId(d.id.toString())}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-center space-x-4 transition-all duration-300 ${
                      selectedDestId === d.id.toString()
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400'
                        : 'bg-slate-900 border-slate-800/80 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <img src={d.image} alt={d.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-100">{d.name}</h4>
                      <span className="text-[10px] text-slate-500">{d.country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: SELECT DATES */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white">Select Travel Dates</h2>
                <p className="text-slate-400 text-xs">Pick your departure dates. Check-in schedules will sync.</p>
              </div>

              <div className="max-w-md mx-auto relative">
                <input
                  type="date"
                  required
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 3: TRAVELLER DETAILS */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white">Traveller Details</h2>
                <p className="text-slate-400 text-xs">Tell us who is boarding. Ticket receipt details will be sent to the email.</p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={travellerName}
                    onChange={(e) => setTravellerName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="abc@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: SELECT TRANSIT */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white">Select Transportation</h2>
                <p className="text-slate-400 text-xs">How do you prefer to arrive at the destination?</p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {['Aeroplane', 'Train', 'Ship', 'Car'].map(mode => (
                  <div
                    key={mode}
                    onClick={() => setTravelMode(mode)}
                    className={`p-5 rounded-2xl border text-center cursor-pointer space-y-2 transition-all duration-300 ${
                      travelMode === mode
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400'
                        : 'bg-slate-900 border-slate-800/80 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold text-sm text-slate-100">{mode}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 5: SELECT HOTEL */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white">Hotel Accommodation</h2>
                <p className="text-slate-400 text-xs">Choose the style of suites you want pre-booked.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {['Luxury', 'Resort', 'Villa', 'Budget'].map(cat => (
                  <div
                    key={cat}
                    onClick={() => setHotelCategory(cat)}
                    className={`p-5 rounded-2xl border text-center cursor-pointer space-y-2 transition-all duration-300 ${
                      hotelCategory === cat
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400'
                        : 'bg-slate-900 border-slate-800/80 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold text-sm text-slate-100">{cat} Accommodation</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 6: SELECT TRAVELLERS COUNT */}
          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white">Number of Seats</h2>
                <p className="text-slate-400 text-xs">Reserve seats for your travel group.</p>
              </div>

              <div className="max-w-xs mx-auto flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl p-4">
                <button
                  type="button"
                  onClick={() => setTravellersCount(Math.max(1, travellersCount - 1))}
                  className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center font-black text-white hover:bg-slate-800"
                >
                  -
                </button>
                <span className="text-lg font-black text-white">{travellersCount}</span>
                <button
                  type="button"
                  onClick={() => setTravellersCount(Math.min(10, travellersCount + 1))}
                  className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center font-black text-white hover:bg-slate-800"
                >
                  +
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 7: REVIEW TRIP */}
          {step === 7 && (
            <motion.div
              key="step7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white">Review Your Journey</h2>
                <p className="text-slate-400 text-xs">Verify your booking specifications before flight departure.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-900 text-xs text-slate-400">
                <div className="space-y-2">
                  <p>Landmark: <strong className="text-white text-sm">{selectedDestination?.name} ({selectedDestination?.country})</strong></p>
                  <p>Departure Date: <strong className="text-white text-sm">{travelDate}</strong></p>
                  <p>Traveller: <strong className="text-white text-sm">{travellerName} ({email})</strong></p>
                </div>
                <div className="space-y-2">
                  <p>Seats Reserved: <strong className="text-white text-sm">{travellersCount} Seat(s)</strong></p>
                  <p>Transit Choice: <strong className="text-white text-sm uppercase">{travelMode}</strong></p>
                  <p>Resort Style: <strong className="text-white text-sm">{hotelCategory}</strong></p>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 8: SUCCESS CONFIRMATION */}
          {step === 8 && confirmedBooking && (
            <motion.div
              key="step8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-6"
            >
              <div className="w-16 h-16 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/20">
                <Check className="w-8 h-8 animate-bounce" />
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300">
                  Your Journey Is Ready!
                </h2>
                <p className="text-slate-400 text-xs">Booking ID: #{confirmedBooking.id} • Status: {confirmedBooking.status}</p>
              </div>

              {/* Animated flight map silhouettes */}
              <div className="relative w-full max-w-sm mx-auto h-40 bg-slate-950 rounded-2xl border border-slate-900 overflow-hidden flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                <Compass className="w-16 h-16 text-indigo-500/35 animate-spin" />
                
                {/* Airplane vector gliding across */}
                <div className="absolute w-full animate-fly-loop">
                  <Plane className="w-6 h-6 text-teal-400 rotate-6" />
                </div>
              </div>

              <div className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
                Your boarding pass, hotel vouchers, and dynamic maps coordinate updates are compiling. Check your registered inbox at <strong>{confirmedBooking.email}</strong> shortly.
              </div>

              <button
                onClick={() => navigate('/')}
                className="py-3 px-8 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold text-xs"
              >
                Back to Home Journey
              </button>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Navigation Buttons footer */}
        {step < 8 && (
          <div className="flex items-center justify-between border-t border-slate-900 pt-6 mt-8">
            {step > 1 ? (
              <button
                onClick={handlePrevStep}
                className="flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 7 ? (
              <button
                onClick={handleNextStep}
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-bold text-white flex items-center space-x-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinalSubmit}
                disabled={loading}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold text-xs flex items-center space-x-2 shadow-lg hover:shadow-indigo-500/10"
              >
                {loading ? 'Confirming Ticket...' : 'Confirm Booking'}
                <Check className="w-4 h-4 ml-1" />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
