import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Navigation, MapPin, Star, User, ArrowLeft, ArrowRight, Check, ShieldAlert, Award, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { rideCategories, mockDrivers } from '../../data/rideoraData';
import { rideoraImages } from '../../data/rideoraImages';

export default function Rideora() {
  const [pickup, setPickup] = useState('Koramangala, Bengaluru');
  const [destination, setDestination] = useState('Indiranagar, Bengaluru');
  
  // Search / reservation states
  const [calculating, setCalculating] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(rideCategories[0]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [assignedDriver, setAssignedDriver] = useState(null);

  // Estimates variables
  const [estDist, setEstDist] = useState(0);
  const [estTime, setEstTime] = useState('');

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleRequestEstimate = (e) => {
    e.preventDefault();
    if (!pickup.trim() || !destination.trim()) {
      alert("Please specify pickup and destination locations.");
      return;
    }
    setCalculating(true);
    setCalculated(false);
    setBookingConfirmed(false);
    setAssignedDriver(null);

    setTimeout(() => {
      const distance = Math.round(Math.random() * 8 + 4);
      const timeMinutes = Math.round(distance * 3 + 4);
      
      setEstDist(distance);
      setEstTime(`${timeMinutes} mins`);
      setCalculated(true);
      setCalculating(false);
    }, 600);
  };

  const handleBookCab = () => {
    const driver = mockDrivers[Math.floor(Math.random() * mockDrivers.length)];
    setAssignedDriver(driver);
    setBookingConfirmed(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactStatus({ state: 'error', message: 'Name, Email and Message are mandatory.' });
      return;
    }
    setContactStatus({ state: 'submitting', message: '' });
    setTimeout(() => {
      setContactStatus({
        state: 'success',
        message: `Message submitted. Request ID: CAB-${Math.floor(1000 + Math.random() * 9000)}.`
      });
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 1000);
  };

  const faqs = [
    { q: "Is Rideora available 24/7 in Bengaluru?", a: "Yes, our digital cab networks operate 24 hours a day, 7 days a week, across all suburbs and airport routes." },
    { q: "How are driver safety records audited?", a: "All drivers go through mandatory background verifications, document checks, and defensive driving audits prior to activation." }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-slate-100 font-sans flex flex-col justify-between selection:bg-yellow-400 selection:text-black">
      
      {/* Header */}
      <header className="bg-neutral-950 border-b border-neutral-850 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black font-outfit text-base">
            <Zap size={16} className="fill-black" />
          </div>
          <span className="font-outfit font-black tracking-widest text-lg text-white">RIDEORA</span>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/transportation" className="flex items-center gap-1 px-3 py-1.5 rounded border border-neutral-800 bg-neutral-900 text-xs font-bold text-slate-300 hover:text-white transition-all">
            <ArrowLeft size={12} /> Templates
          </Link>
        </div>
      </header>

      {/* Main Grid Wrapper with Mobile Simulator layout */}
      <main className="flex-1 flex flex-col items-center gap-12 p-6">
        
        {/* Smartphone Wrapper Shell Frame */}
        <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[700px] relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-32 bg-black rounded-full z-50 pointer-events-none" />

          <div className="flex-1 overflow-y-auto no-scrollbar pt-6 flex flex-col justify-between pb-6">
            <div className="px-6 flex flex-col gap-6">
              
              <div className="text-center mt-6">
                <span className="text-yellow-400 text-[10px] font-bold tracking-widest uppercase block mb-1">RIDE HAILING SERVICE</span>
                <h2 className="text-2xl font-outfit font-black uppercase text-white">YOUR RIDE IS JUST A TAP AWAY.</h2>
                <p className="text-neutral-500 text-[11px] font-light leading-normal max-w-xs mx-auto mt-1">
                  Swift pick-up rates and professional drivers in Bengaluru metropolitan areas.
                </p>
              </div>

              {!bookingConfirmed && (
                <form onSubmit={handleRequestEstimate} className="p-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs">
                      <MapPin size={14} className="text-emerald-400" />
                      <input 
                        type="text" 
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="bg-transparent border-none text-white focus:outline-none w-full font-medium"
                      />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs">
                      <Navigation size={14} className="text-yellow-400" />
                      <input 
                        type="text" 
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="bg-transparent border-none text-white focus:outline-none w-full font-medium"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                  >
                    {calculating ? 'Locating Cabs...' : 'Find Cab Estimate'}
                  </button>
                </form>
              )}

              <AnimatePresence>
                {calculated && !bookingConfirmed && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-xxs font-mono text-neutral-500 border-b border-neutral-900 pb-2">
                      <span>EST. DISTANCE: {estDist} km</span>
                      <span>DURATION: {estTime}</span>
                    </div>

                    <div className="flex flex-col gap-2 overflow-y-auto max-h-[180px] pr-1 no-scrollbar">
                      {rideCategories.map((cat) => {
                        const isSelected = selectedCategory.id === cat.id;
                        const price = cat.baseFare + (estDist * cat.ratePerKm);
                        return (
                          <div
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat)}
                            className={`flex justify-between items-center p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? 'border-yellow-400 bg-yellow-400/5' : 'border-neutral-850 bg-neutral-900/30'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="text-xs">
                                <span className="font-bold text-white block">{cat.name}</span>
                                <span className="text-[9px] text-neutral-500 font-light block">{cat.etaMinutes} mins away • {cat.capacity} seats</span>
                              </div>
                            </div>
                            <span className="font-mono font-bold text-yellow-400 text-sm">₹{price}</span>
                          </div>
                        );
                      })}
                    </div>

                    <button onClick={handleBookCab} className="w-full py-3 bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl">
                      Confirm Booking
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {bookingConfirmed && assignedDriver && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-2xl border border-neutral-800 bg-neutral-900 flex flex-col gap-4 text-center">
                    <Check size={24} className="text-emerald-400 mx-auto" />
                    <h4 className="font-bold text-sm text-white uppercase">Your Ride is Confirmed</h4>
                    
                    <div className="p-3 bg-neutral-950 border border-neutral-850 rounded text-left text-xxs font-mono">
                      <span>DRIVER: {assignedDriver.name} ({assignedDriver.rating} ★)</span>
                      <span className="block">VEHICLE: {assignedDriver.vehicle}</span>
                      <span className="block font-bold text-yellow-400">FARE: ₹{selectedCategory.baseFare + (estDist * selectedCategory.ratePerKm)}</span>
                    </div>

                    <button onClick={() => setBookingConfirmed(false)} className="w-full py-2 border border-neutral-800 text-xs font-semibold rounded text-neutral-400">
                      Cancel Ride
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* FAQs Panel for corporate passenger audit */}
        <section className="w-full max-w-lg bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
            <Info size={16} className="text-yellow-400" /> Rideora FAQs
          </h3>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isExp = expandedFaq === idx;
              return (
                <div key={idx} className="border border-neutral-850 bg-neutral-900/20 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isExp ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs text-slate-200 flex justify-between items-center focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight size={14} className={`transform transition-transform ${isExp ? 'rotate-90 text-yellow-400' : 'text-slate-500'}`} />
                  </button>
                  <AnimatePresence>
                    {isExp && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-4 pb-4 text-[11px] text-slate-400 border-t border-slate-850 pt-3 leading-relaxed">
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full max-w-lg bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
            <User size={16} className="text-yellow-400" /> Support Desk
          </h3>
          
          <form onSubmit={handleContactSubmit} className="flex flex-col gap-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-neutral-500 uppercase block mb-1">Name *</label>
                <input 
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-805 rounded p-2 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="text-[10px] text-neutral-500 uppercase block mb-1">Email *</label>
                <input 
                  type="email" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-805 rounded p-2 focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-neutral-500 uppercase block mb-1">Message *</label>
              <textarea 
                rows="3"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-805 rounded p-2 focus:outline-none focus:border-yellow-400"
              />
            </div>

            {contactStatus.message && (
              <div className={`p-2.5 rounded text-[11px] font-bold ${
                contactStatus.state === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
              }`}>
                {contactStatus.message}
              </div>
            )}

            <button type="submit" className="py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-bold uppercase tracking-wider rounded-xl">
              Submit Message
            </button>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-850 py-12 text-center text-xs text-neutral-750 bg-neutral-950">
        <p>© 2026 Rideora Technologies Private Limited. All rights reserved.</p>
      </footer>

    </div>
  );
}
