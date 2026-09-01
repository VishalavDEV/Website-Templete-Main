import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Train, Search, Calendar, Users, ArrowLeft, ArrowRight, Check, Compass, Ticket, Award, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { railnovaRoutes, mockTrains, seatClasses } from '../../data/railnovaData';
import { railnovaImages } from '../../data/railnovaImages';

export default function Railnova() {
  const [fromSt, setFromSt] = useState('Bengaluru (SBC)');
  const [toSt, setToSt] = useState('Chennai Central (MAS)');
  const [journeyDate, setJourneyDate] = useState('2026-08-27');
  const [pCount, setPCount] = useState(1);

  // Search states
  const [searched, setSearched] = useState(false);
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);

  // Seating states
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingDone, setBookingDone] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (fromSt === toSt) {
      alert("Origin and Destination cannot be the same station.");
      return;
    }
    setSearching(true);
    setSearched(false);
    setSelectedTrain(null);
    setSelectedClass(null);
    setSelectedSeats([]);
    setBookingDone(false);

    setTimeout(() => {
      const matches = mockTrains.filter(t => t.from === fromSt && t.to === toSt);
      setResults(matches);
      setSearched(true);
      setSearching(false);
    }, 800);
  };

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      if (selectedSeats.length >= pCount) {
        setSelectedSeats([...selectedSeats.slice(1), seatId]);
      } else {
        setSelectedSeats([...selectedSeats, seatId]);
      }
    }
  };

  const executeBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    setBookingDone(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactStatus({ state: 'error', message: 'All required fields are mandatory.' });
      return;
    }
    setContactStatus({ state: 'submitting', message: '' });
    setTimeout(() => {
      setContactStatus({
        state: 'success',
        message: `Your rail ticket message has been logged under enquiry ID: RAIL-${Math.floor(1000 + Math.random() * 9000)}.`
      });
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 1000);
  };

  const faqs = [
    { q: "Is catering included in Shatabdi and Vande Bharat classes?", a: "Yes, standard executive classes include multi-cuisine hot meals and refreshments served directly to your seat PNR cabin." },
    { q: "What is the PNR cancellation policy?", a: "Cancellations made 24 hours prior to departure receive a 75% refund processed locally to your source payments profile." }
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans overflow-x-hidden selection:bg-rose-700 selection:text-white">
      
      {/* Classic Railway Navigation */}
      <nav className="sticky top-0 z-50 bg-stone-950 border-b border-rose-900/40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Train className="text-rose-600" size={26} />
          <span className="font-outfit font-black tracking-widest text-xl text-rose-500">RAILNOVA</span>
          <span className="hidden sm:inline-block bg-rose-900/30 text-rose-300 border border-rose-900/50 font-bold font-mono px-2 py-0.5 rounded text-[9px] uppercase tracking-wider">National Express</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-400">
          <a href="#booking" className="hover:text-rose-500 transition-colors">Find Trains</a>
          <a href="#faq" className="hover:text-rose-500 transition-colors">FAQs</a>
          <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/transportation" className="flex items-center gap-1.5 px-4 py-2 border border-stone-850 rounded bg-stone-900 text-xs font-bold text-stone-300 hover:border-rose-900/50 hover:text-white transition-all">
            <ArrowLeft size={12} /> Templates
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-6 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950">
        <div className="absolute inset-0 z-0">
          <img src={railnovaImages.hero} alt="Vande Bharat Train Sunset" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/80 to-stone-950" />
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-rose-500/10 text-rose-400 text-[10px] font-bold uppercase tracking-widest border border-rose-500/20 mb-6">
              PREMIUM ARCHITECTURAL TRANSIT
            </span>
            <h1 className="text-4xl sm:text-6xl font-outfit font-black tracking-tight leading-none uppercase mb-6 text-white">
              A BETTER WAY TO MOVE.
            </h1>
            <p className="text-stone-400 text-sm sm:text-base font-light mb-8 max-w-sm leading-relaxed">
              Architectural luxury on steel wheels. Connecting major Indian rail junctions with unprecedented speed and premium lounges.
            </p>
          </div>

          {/* Train Finder form */}
          <div id="booking" className="lg:col-span-6">
            <form onSubmit={handleSearch} className="p-6 rounded-2xl border border-stone-800 bg-stone-900/60 backdrop-blur-xl">
              <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <Search size={18} className="text-rose-500" /> Train Search
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest block mb-1">From Junction</label>
                  <select 
                    value={fromSt}
                    onChange={(e) => {
                      setFromSt(e.target.value);
                      if (e.target.value === 'Bengaluru (SBC)') setToSt('Chennai Central (MAS)');
                      if (e.target.value === 'Delhi (NDLS)') setToSt('Mumbai Central (BCT)');
                      if (e.target.value === 'Hyderabad (SC)') setToSt('Bengaluru (SBC)');
                    }}
                    className="w-full bg-stone-950 border border-stone-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="Bengaluru (SBC)">Bengaluru (SBC)</option>
                    <option value="Delhi (NDLS)">Delhi (NDLS)</option>
                    <option value="Hyderabad (SC)">Hyderabad (SC)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest block mb-1">To Junction</label>
                  <select 
                    value={toSt}
                    onChange={(e) => setToSt(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    {fromSt === 'Bengaluru (SBC)' && <option value="Chennai Central (MAS)">Chennai Central (MAS)</option>}
                    {fromSt === 'Delhi (NDLS)' && <option value="Mumbai Central (BCT)">Mumbai Central (BCT)</option>}
                    {fromSt === 'Hyderabad (SC)' && <option value="Bengaluru (SBC)">Bengaluru (SBC)</option>}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest block mb-1">Date of Journey</label>
                  <input 
                    type="date"
                    value={journeyDate}
                    onChange={(e) => setJourneyDate(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-850 rounded p-2.5 text-xs text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest block mb-1">Passengers</label>
                  <input 
                    type="number"
                    min="1"
                    max="6"
                    value={pCount}
                    onChange={(e) => setPCount(Number(e.target.value))}
                    className="w-full bg-stone-950 border border-stone-850 rounded p-2.5 text-xs text-white focus:outline-none font-mono"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={searching}
                className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-1.5"
              >
                {searching ? 'Querying Railway Logs...' : 'Search Trains'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Booking Layout Area */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {searched && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 flex flex-col gap-6">
                <h2 className="text-xl font-bold uppercase tracking-wider text-stone-400">
                  Select Train: {fromSt} → {toSt}
                </h2>

                {results.map((train) => (
                  <div key={train.id} className="p-5 rounded-2xl border border-stone-850 bg-stone-900/30 flex flex-col justify-between text-xs font-mono">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-sm text-white font-sans">{train.name}</h4>
                        <span className="text-[10px] text-stone-500">Train Code: {train.id} • {train.departure} → {train.arrival}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {train.classes.map((cls) => (
                        <button
                          key={cls.code}
                          onClick={() => {
                            setSelectedTrain(train);
                            setSelectedClass(cls);
                            setSelectedSeats([]);
                            setBookingDone(false);
                          }}
                          className={`p-3 rounded border text-left flex flex-col gap-1 transition-all ${
                            selectedClass?.code === cls.code ? 'border-rose-600 bg-rose-600/10' : 'border-stone-850'
                          }`}
                        >
                          <span className="font-bold text-white text-xs">{cls.code} (₹{cls.price})</span>
                          <span className="text-[9px] text-stone-500">{cls.seatsAvailable} seats available</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4">
                {selectedTrain && selectedClass && (
                  <div className="p-5 rounded-2xl border border-stone-800 bg-stone-950 shadow-lg">
                    {!bookingDone ? (
                      <>
                        <h3 className="font-bold text-xs text-white uppercase tracking-wider mb-4">Select Cabin Seat</h3>
                        <div className="mb-4 bg-stone-905 p-3 rounded border border-stone-850 max-w-[150px] mx-auto">
                          <div className="grid grid-cols-4 gap-2">
                            {[...Array(16).keys()].map((idx) => {
                              const seatId = `Seat-${idx + 1}`;
                              const isSelected = selectedSeats.includes(seatId);
                              return (
                                <button
                                  key={seatId}
                                  type="button"
                                  onClick={() => handleSeatClick(seatId)}
                                  className={`w-7 h-7 rounded text-[9px] font-bold transition-all ${
                                    isSelected ? 'bg-rose-600 text-white' : 'bg-stone-950 border border-stone-800 text-stone-400'
                                  }`}
                                >
                                  {idx + 1}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        <button onClick={executeBooking} className="w-full py-2 bg-rose-600 text-white font-bold text-xs uppercase tracking-wider rounded">
                          Reserve Seat
                        </button>
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <Check size={24} className="text-rose-500 mx-auto mb-2" />
                        <h4 className="font-bold text-xs text-white uppercase mb-1">Ticket Reserved</h4>
                        <div className="p-3 bg-stone-900 border border-stone-800 text-xxs text-left font-mono rounded flex flex-col gap-1 mt-3">
                          <span>TRAIN: {selectedTrain.name}</span>
                          <span>SEATS: {selectedSeats.map(s => s.split("-")[1]).join(', ')}</span>
                          <span className="font-bold text-rose-500">FARE: ₹{selectedSeats.length * selectedClass.price}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6 border-t border-stone-800">
        <div className="text-center mb-16">
          <span className="text-rose-500 text-xs font-semibold uppercase tracking-wider block">FAQ</span>
          <h2 className="text-3xl font-outfit font-black text-white uppercase mt-1">QUESTIONS & CONCERNS</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isExp = expandedFaq === idx;
            return (
              <div key={idx} className="border border-stone-800 bg-stone-950/40 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExp ? null : idx)}
                  className="w-full p-4 text-left font-bold text-slate-200 text-xs sm:text-sm flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronRight size={14} className={`transform transition-transform ${isExp ? 'rotate-90 text-rose-500' : 'text-stone-500'}`} />
                </button>
                <AnimatePresence>
                  {isExp && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-4 pb-4 text-xxs sm:text-xs text-stone-400 border-t border-stone-850/60 pt-3 leading-relaxed">
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
      <section id="contact" className="py-24 border-t border-stone-800 bg-stone-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rose-500 text-xs font-semibold uppercase tracking-wider block">ENQUIRY LINK</span>
            <h2 className="text-3xl font-outfit font-black uppercase text-white mt-1">CONTACT RAILWAY AGENTS</h2>
          </div>

          <form onSubmit={handleContactSubmit} className="p-6 bg-stone-900 border border-stone-850 rounded-2xl flex flex-col gap-4 text-xs text-white">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-stone-550 uppercase block mb-1">Name *</label>
                <input 
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded p-2.5 focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="text-[10px] text-stone-550 uppercase block mb-1">Email *</label>
                <input 
                  type="email" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded p-2.5 focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-stone-550 uppercase block mb-1">Message *</label>
              <textarea 
                rows="4"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded p-2.5 focus:outline-none focus:border-rose-500 text-xs"
              />
            </div>

            {contactStatus.message && (
              <div className={`p-3 rounded text-xxs font-bold ${
                contactStatus.state === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
              }`}>
                {contactStatus.message}
              </div>
            )}

            <button type="submit" className="py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold uppercase tracking-wider rounded">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-850 py-12 text-center text-xs text-stone-750 bg-stone-950">
        <p>© 2026 RailNova Indian Railways Corp. Premium Express Services.</p>
      </footer>

    </div>
  );
}
