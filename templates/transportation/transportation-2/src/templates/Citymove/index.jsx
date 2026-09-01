import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Bike, Info, ArrowLeft, ArrowRight, Check, Zap, Smartphone, Sparkles, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { citymoveVehicles, citymoveStats } from '../../data/citymoveData';
import { citymoveImages } from '../../data/citymoveImages';

export default function Citymove() {
  const [selectedCategory, setSelectedCategory] = useState('Car');
  const [estDistance, setEstDistance] = useState(5); // km
  const [estCost, setEstCost] = useState(0);

  // Search/Find transport state (NEW integration)
  const [pickupCity, setPickupCity] = useState('Koramangala, Bengaluru');
  const [destCity, setDestCity] = useState('Indiranagar, Bengaluru');
  const [passengerCount, setPassengerCount] = useState(1);
  const [findResult, setFindResult] = useState(null);
  const [findLoading, setFindLoading] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);

  const activeVehicle = citymoveVehicles.find(v => v.category === selectedCategory) || citymoveVehicles[0];

  useEffect(() => {
    const cost = activeVehicle.baseFare + (estDistance * activeVehicle.perKmRate);
    setEstCost(cost);
  }, [estDistance, selectedCategory]);

  const handleFindTransport = (e) => {
    e.preventDefault();
    setFindLoading(true);
    setFindResult(null);

    setTimeout(() => {
      // Mock results
      setFindResult({
        pickup: pickupCity,
        dest: destCity,
        eta: "3 mins",
        vehicle: selectedCategory,
        fare: activeVehicle.baseFare + (12 * activeVehicle.perKmRate)
      });
      setFindLoading(false);
    }, 700);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactStatus({ state: 'error', message: 'Please complete Name, Email, and Message.' });
      return;
    }
    setContactStatus({ state: 'submitting', message: '' });
    setTimeout(() => {
      setContactStatus({
        state: 'success',
        message: `Thank you! Your feedback has been registered under urban request ID: CITY-${Math.floor(1000 + Math.random() * 9000)}.`
      });
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 1000);
  };

  const faqs = [
    { q: "How do I unlock an electric scooter using the app?", a: "Download the CityMove App, register, select a nearby scooter on the map, scan its handlebar QR code, and tap 'Unlock' to start riding." },
    { q: "What are the rules for parking dockless bikes?", a: "Park bikes in designated CityMove Zones (marked green on the map) or at public cycle stands. Avoid blocking pedestrian walkways or traffic entrances." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-orange-500 selection:text-white">
      
      {/* Dynamic Urban Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-slate-950 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-orange-600 border-2 border-slate-950 rounded flex items-center justify-center font-black text-white text-lg">C</div>
          <span className="font-outfit font-black tracking-tighter text-xl text-slate-950 uppercase">CITYMOVE</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-wider text-slate-900">
          <a href="#hero" className="hover:text-orange-600 transition-colors">Shared Fleets</a>
          <a href="#estimator" className="hover:text-orange-600 transition-colors">Fare Estimator</a>
          <a href="#faq" className="hover:text-orange-600 transition-colors">FAQs</a>
          <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/transportation" className="flex items-center gap-1.5 px-4 py-2 border-2 border-slate-950 rounded bg-white text-xs font-bold text-slate-950 hover:bg-slate-100 transition-all">
            <ArrowLeft size={12} /> Templates
          </Link>
        </div>
      </nav>

      {/* Hero Section with Split Image + Mobility Finder */}
      <section id="hero" className="relative min-h-[90vh] flex items-center border-b-2 border-slate-950 py-12 px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline & images (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-orange-500/10 text-orange-600 text-xs font-black uppercase border border-orange-500/30 w-fit">
              <Sparkles size={12} /> DOCKLESS URBAN TRANSIT IS LIVE
            </div>
            <h1 className="text-5xl sm:text-6xl font-outfit font-black tracking-tighter leading-none text-slate-950 uppercase">
              MOVING CITIES <br />FORWARD.
            </h1>
            <p className="text-slate-650 text-base font-light max-w-sm">
              Ride hatchbacks, e-scooters, and smart bikes anywhere. Scan and unlock instantly from your phone.
            </p>
            <div className="relative aspect-[16/10] overflow-hidden rounded border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
              <img src={citymoveImages.hero} alt="Urban Shared Vehicles" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Dynamic Transport Selector & Finder (5 columns) */}
          <div className="lg:col-span-5 bg-white border-2 border-slate-950 rounded p-6 shadow-[6px_6px_0px_#000]">
            <h3 className="text-lg font-black text-slate-950 mb-4 uppercase flex items-center gap-2">
              <Zap size={18} className="text-orange-600" /> Find Transport
            </h3>
            
            <form onSubmit={handleFindTransport} className="flex flex-col gap-4 text-xs font-bold">
              <div>
                <label className="text-slate-500 block mb-1">Pickup Location</label>
                <input 
                  type="text" 
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="w-full border-2 border-slate-950 rounded p-2.5 bg-slate-50 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-500 block mb-1">Destination</label>
                <input 
                  type="text" 
                  value={destCity}
                  onChange={(e) => setDestCity(e.target.value)}
                  className="w-full border-2 border-slate-950 rounded p-2.5 bg-slate-50 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-500 block mb-1">Transport Type</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border-2 border-slate-950 rounded p-2.5 bg-slate-50 focus:outline-none"
                  >
                    <option value="Car">Car Share</option>
                    <option value="Scooter">E-Scooter</option>
                    <option value="Bike">Cycle Ride</option>
                    <option value="Bus">City Bus</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-500 block mb-1">Passengers</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="6"
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(Number(e.target.value))}
                    className="w-full border-2 border-slate-950 rounded p-2.5 bg-slate-50 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={findLoading}
                className="w-full py-3 border-2 border-slate-950 bg-slate-950 text-white hover:bg-slate-900 font-bold uppercase tracking-wider rounded"
              >
                {findLoading ? 'Connecting Satellite...' : 'Find Transport'}
              </button>
            </form>

            <AnimatePresence>
              {findResult && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-slate-50 border-2 border-slate-950 rounded font-mono text-xxs flex flex-col gap-1.5"
                >
                  <div className="flex justify-between items-center">
                    <span>Nearest Vehicle:</span>
                    <span className="text-orange-600 font-black uppercase">{findResult.vehicle} ({findResult.eta})</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-200 pt-1.5 mt-1.5">
                    <span>Est. Trip Fare:</span>
                    <span className="text-slate-950 font-black">₹{findResult.fare}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Urban micro-mobility showcase */}
      <section className="py-20 border-b-2 border-slate-950 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-orange-600 text-xs font-black tracking-widest block uppercase">SHARED MOBILITY</span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-black text-slate-950 uppercase">SELECT MOBILE ASSETS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {citymoveVehicles.map(car => (
              <div key={car.id} className="bg-white border-2 border-slate-950 p-4 rounded shadow-[3px_3px_0px_#000] flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/10] overflow-hidden rounded border border-slate-200 mb-4 bg-slate-100">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] text-orange-600 uppercase font-black block">{car.availability}</span>
                  <h4 className="font-black text-slate-950 text-sm mt-1 mb-2 uppercase">{car.name}</h4>
                  <p className="text-slate-500 text-xxs font-light leading-relaxed mb-4">{car.description.slice(0, 70)}...</p>
                </div>
                <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xxs font-mono">
                  <span>Base: ₹{car.baseFare}</span>
                  <span className="text-orange-600 font-bold">₹{car.perKmRate}/km</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fare Estimator (sliding bar) */}
      <section id="estimator" className="py-20 border-b-2 border-slate-950">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-600 text-xs font-black tracking-widest block uppercase">ESTIMATOR TOOL</span>
            <h2 className="text-3xl font-outfit font-black text-slate-950 uppercase mt-1 mb-6">DYNAMIC COMMUTE ESTIMATOR</h2>
            
            <div className="flex flex-col gap-6">
              <div>
                <label className="text-[10px] text-slate-500 uppercase tracking-widest font-black block mb-2">Vehicle Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-950 rounded p-3 text-xs font-bold"
                >
                  <option value="Car">Car Share</option>
                  <option value="Scooter">E-Scooter</option>
                  <option value="Bike">Cycles</option>
                  <option value="Bus">City shuttle</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-500 uppercase tracking-widest">Commute Distance</span>
                  <span className="text-slate-950 font-mono">{estDistance} km</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="40" 
                  value={estDistance}
                  onChange={(e) => setEstDistance(Number(e.target.value))}
                  className="w-full h-1 bg-slate-300 rounded appearance-none cursor-pointer accent-orange-600"
                />
              </div>
            </div>
          </div>

          <div className="p-8 rounded border-2 border-slate-950 bg-slate-950 text-white text-center shadow-[6px_6px_0px_#ea580c]">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-2">Estimated Ride Cost</span>
            <div className="text-6xl font-mono font-black text-orange-500 my-6 tracking-tighter">
              ₹{estCost}
            </div>
            <div className="border-t border-slate-800 pt-6 text-left grid grid-cols-2 gap-4 text-xxs font-mono text-slate-400">
              <div>
                <span>VEHICLE CLASS:</span>
                <span className="font-bold text-white block mt-0.5">{activeVehicle.name}</span>
              </div>
              <div>
                <span>CO2 INDEX:</span>
                <span className="font-bold text-emerald-400 block mt-0.5">{activeVehicle.co2Impact}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-slate-950 text-white border-b-2 border-slate-950">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">
          <div>
            <span className="text-3xl font-black text-orange-500 block mb-1">{citymoveStats.tripsCompleted}</span>
            <span className="text-xxs uppercase tracking-wider text-slate-500 font-bold">Rides Finished</span>
          </div>
          <div>
            <span className="text-3xl font-black text-orange-500 block mb-1">{citymoveStats.activeRiders}</span>
            <span className="text-xxs uppercase tracking-wider text-slate-500 font-bold">Commuters</span>
          </div>
          <div>
            <span className="text-3xl font-black text-orange-500 block mb-1">{citymoveStats.fleetSize}</span>
            <span className="text-xxs uppercase tracking-wider text-slate-500 font-bold">Fleet Size</span>
          </div>
          <div>
            <span className="text-3xl font-black text-emerald-400 block mb-1">{citymoveStats.co2Saved}</span>
            <span className="text-xxs uppercase tracking-wider text-slate-500 font-bold">Carbon Saved</span>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-600 text-xs font-black tracking-widest block uppercase">FAQ</span>
          <h2 className="text-3xl font-outfit font-black text-slate-950 uppercase">COMMUTE GUIDELINES</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isExp = expandedFaq === idx;
            return (
              <div key={idx} className="border-2 border-slate-950 bg-white rounded overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExp ? null : idx)}
                  className="w-full p-4 text-left font-black text-slate-950 text-xs sm:text-sm flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronRight size={16} className={`transform transition-transform ${isExp ? 'rotate-90 text-orange-600' : 'text-slate-400'}`} />
                </button>
                <AnimatePresence>
                  {isExp && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-4 pb-4 text-xxs sm:text-xs text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Functional Contact Form */}
      <section id="contact" className="py-24 border-t-2 border-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-600 text-xs font-black tracking-widest block uppercase">FEEDBACK HUB</span>
            <h2 className="text-3xl font-outfit font-black text-slate-950 uppercase">SEND AGENTS A MESSAGE</h2>
          </div>

          <form onSubmit={handleContactSubmit} className="p-6 border-2 border-slate-950 bg-white rounded flex flex-col gap-4 font-bold text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-slate-500 uppercase block mb-1">Name *</label>
                <input 
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full border-2 border-slate-950 rounded p-2.5 focus:outline-none bg-slate-50"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-500 uppercase block mb-1">Email *</label>
                <input 
                  type="email" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full border-2 border-slate-950 rounded p-2.5 focus:outline-none bg-slate-50"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-500 uppercase block mb-1">Message *</label>
              <textarea 
                rows="4"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full border-2 border-slate-950 rounded p-2.5 focus:outline-none bg-slate-50 text-xs"
              />
            </div>

            {contactStatus.message && (
              <div className={`p-3 border rounded text-xxs font-bold ${
                contactStatus.state === 'success' ? 'bg-emerald-50 border-emerald-550 text-emerald-900' : 'bg-red-50 border-red-200 text-red-900'
              }`}>
                {contactStatus.message}
              </div>
            )}

            <button type="submit" className="py-3 border-2 border-slate-950 bg-slate-950 text-white hover:bg-slate-900 font-bold uppercase tracking-wider rounded">
              Submit Feedback
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 text-center text-xs text-slate-500 bg-slate-900">
        <p className="text-slate-500">© 2026 CityMove shared transit Corp. Clean & Swift urban micro-mobility.</p>
      </footer>

    </div>
  );
}
