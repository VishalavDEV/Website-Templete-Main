import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Search, Calendar, MapPin, Star, Shield, ArrowRight, ArrowLeft, Check, Ticket, Award, Info, HelpCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { roadlineRoutes, mockBuses, boardingPoints, droppingPoints } from '../../data/roadlineData';
import { roadlineImages } from '../../data/roadlineImages';

export default function Roadline() {
  // Quote form state
  const [quoteFrom, setQuoteFrom] = useState('Bengaluru');
  const [quoteTo, setQuoteTo] = useState('Chennai');
  const [quoteWeight, setQuoteWeight] = useState(500); // kg
  const [quoteCargoType, setQuoteCargoType] = useState('General Goods');
  const [quoteDistance, setQuoteDistance] = useState(350); // km
  const [quoteCost, setQuoteCost] = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(false);

  // Search state for Bus Tickets (retains previous interactive feature)
  const [busSearchFrom, setBusSearchFrom] = useState('Bengaluru');
  const [busSearchTo, setBusSearchTo] = useState('Chennai');
  const [searched, setSearched] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  
  // Selection states
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedBoarding, setSelectedBoarding] = useState('');
  const [selectedDropping, setSelectedDropping] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleCalculateQuote = (e) => {
    e.preventDefault();
    setQuoteLoading(true);
    setQuoteCost(null);
    setTimeout(() => {
      // Mock calculation: base charge 400 + (dist * weight * 0.05)
      const base = 400;
      const rate = 0.05;
      const total = base + (quoteDistance * quoteWeight * rate);
      setQuoteCost(Math.round(total));
      setQuoteLoading(false);
    }, 800);
  };

  const handleBusSearch = (e) => {
    e.preventDefault();
    setSearching(true);
    setSelectedBus(null);
    setSelectedSeats([]);
    setBookingSuccess(false);

    setTimeout(() => {
      const matches = mockBuses.filter(bus => 
        bus.from.toLowerCase() === busSearchFrom.toLowerCase() && 
        bus.to.toLowerCase() === busSearchTo.toLowerCase()
      );
      setSearchResults(matches);
      setSearched(true);
      setSearching(false);
    }, 800);
  };

  const handleSeatClick = (seatNo) => {
    if (selectedSeats.includes(seatNo)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNo));
    } else {
      if (selectedSeats.length >= 4) {
        setSelectedSeats([...selectedSeats.slice(1), seatNo]);
      } else {
        setSelectedSeats([...selectedSeats, seatNo]);
      }
    }
  };

  const executeBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    setBookingSuccess(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactStatus({ state: 'error', message: 'All required fields must be completed.' });
      return;
    }
    setContactStatus({ state: 'submitting', message: '' });
    setTimeout(() => {
      setContactStatus({
        state: 'success',
        message: `Thank you! Your dispatch inquiry has been successfully registered under ticket ID: ROAD-${Math.floor(1000 + Math.random() * 9000)}.`
      });
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 1000);
  };

  const faqs = [
    { q: "What is your coverage network for FTL (Full Truckload)?", a: "Roadline operates across all major commercial corridors in India, linking hubs like Mumbai, Pune, Delhi, NCR, Bengaluru, Hyderabad, and Chennai with premium road logistics services." },
    { q: "Do you offer climate-controlled vehicles?", a: "Yes, we have a specialized fleet of refrigerated containers and luxury Volvo coaches designed for sensitive cargo and passenger comfort." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-600 selection:text-white">
      
      {/* Dynamic Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Compass className="text-orange-500 animate-spin-slow" size={26} />
          <span className="font-outfit font-black tracking-wider text-xl text-slate-900">ROADLINE</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-600">
          <a href="#hero" className="hover:text-orange-500 transition-colors">Freight Quote</a>
          <a href="#tickets" className="hover:text-orange-500 transition-colors">Book Buses</a>
          <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/transportation" className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-all">
            <ArrowLeft size={12} /> Templates
          </Link>
        </div>
      </nav>

      {/* Hero Section with Truck on Highway Background */}
      <section id="hero" className="relative bg-gradient-to-r from-slate-950 to-slate-900 text-white py-24 px-6 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={roadlineImages.backgrounds.highway} alt="Highway Truck Cargo" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Headline (7 columns) */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Award size={14} /> National Freight Carriage
            </span>
            <h1 className="text-5xl sm:text-6xl font-outfit font-black tracking-tight leading-none mb-6">
              DELIVERING <br />
              <span className="text-orange-500">EVERY MILE</span>.
            </h1>
            <p className="text-slate-350 text-base font-light max-w-sm leading-relaxed mb-6">
              Strong road-logistics frameworks connecting industrial zones and passengers across all state highways.
            </p>
          </div>

          {/* Interactive Quote Calculator (5 columns) */}
          <div className="lg:col-span-5">
            <form onSubmit={handleCalculateQuote} className="bg-white rounded-2xl shadow-2xl p-6 text-slate-800 border border-slate-100">
              <h3 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                <Search size={18} className="text-orange-500" /> Freight Calculator
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                <div>
                  <label className="text-slate-400 block mb-1">From Junction</label>
                  <select 
                    value={quoteFrom} 
                    onChange={(e) => setQuoteFrom(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg p-2.5 bg-slate-50 focus:outline-none focus:border-orange-500"
                  >
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">To Junction</label>
                  <select 
                    value={quoteTo} 
                    onChange={(e) => setQuoteTo(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg p-2.5 bg-slate-50 focus:outline-none focus:border-orange-500"
                  >
                    <option value="Chennai">Chennai</option>
                    <option value="Pune">Pune</option>
                    <option value="Jaipur">Jaipur</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div>
                  <label className="text-slate-400 block mb-1">Weight of Cargo (kg)</label>
                  <input 
                    type="number" 
                    min="10" 
                    max="10000"
                    value={quoteWeight}
                    onChange={(e) => setQuoteWeight(Number(e.target.value))}
                    className="w-full border border-slate-200 rounded-lg p-2.5 bg-slate-50 focus:outline-none focus:border-orange-500 font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Distance (km)</label>
                  <input 
                    type="number" 
                    min="10" 
                    max="3000"
                    value={quoteDistance}
                    onChange={(e) => setQuoteDistance(Number(e.target.value))}
                    className="w-full border border-slate-200 rounded-lg p-2.5 bg-slate-50 focus:outline-none focus:border-orange-500 font-mono"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={quoteLoading}
                className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                {quoteLoading ? 'Estimating Rates...' : 'Calculate Route Cost'}
              </button>

              <AnimatePresence>
                {quoteCost && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-slate-50 border border-slate-150 rounded-lg text-xs font-mono text-center"
                  >
                    <span className="text-slate-500 uppercase block mb-1">Est. Transit Cost</span>
                    <span className="text-xl font-bold text-orange-600">₹{quoteCost.toLocaleString('en-IN')}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* Booking Bus Tickets section (retained from interactive step) */}
      <section id="tickets" className="py-24 max-w-6xl mx-auto px-6 border-b border-slate-200">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-wider block">PASSENGER SECTIONS</span>
          <h2 className="text-3xl font-outfit font-black tracking-tight text-slate-900 uppercase">INTERCITY BUS RESERVATION</h2>
        </div>

        <form onSubmit={handleBusSearch} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 p-4 rounded-xl border border-slate-200 bg-white mb-12 shadow-sm">
          <div className="flex-1 grid grid-cols-2 gap-2 text-xs">
            <select value={busSearchFrom} onChange={(e) => setBusSearchFrom(e.target.value)} className="w-full border border-slate-100 bg-slate-50 p-2.5 rounded focus:outline-none">
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </select>
            <select value={busSearchTo} onChange={(e) => setBusSearchTo(e.target.value)} className="w-full border border-slate-100 bg-slate-50 p-2.5 rounded focus:outline-none">
              <option value="Chennai">Chennai</option>
              <option value="Pune">Pune</option>
              <option value="Jaipur">Jaipur</option>
            </select>
          </div>
          <button type="submit" disabled={searching} className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded">
            {searching ? 'Querying...' : 'Find Bus'}
          </button>
        </form>

        <AnimatePresence>
          {searched && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 flex flex-col gap-4">
                {searchResults.map(bus => (
                  <div key={bus.id} className="p-5 border border-slate-200 rounded-xl bg-white flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{bus.name}</h4>
                      <span className="text-slate-400 font-mono text-xxs block mt-0.5">{bus.type} • {bus.departure} → {bus.arrival}</span>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => { setSelectedBus(bus); setSelectedSeats([]); setBookingSuccess(false); }}
                      className="px-4 py-2 border border-slate-200 rounded hover:border-orange-500 font-bold hover:text-orange-500 transition-colors"
                    >
                      Book (₹{bus.price})
                    </button>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4">
                {selectedBus && (
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow">
                    {!bookingSuccess ? (
                      <>
                        <h4 className="font-bold text-sm text-slate-900 mb-4 uppercase">Select Seat</h4>
                        <div className="grid grid-cols-4 gap-2 bg-slate-50 p-3 rounded border border-slate-100 max-w-[160px] mx-auto mb-4">
                          {[...Array(12).keys()].map(idx => {
                            const seat = `Seat-${idx + 1}`;
                            const isSel = selectedSeats.includes(seat);
                            return (
                              <button 
                                key={seat}
                                type="button"
                                onClick={() => handleSeatClick(seat)}
                                className={`w-7 h-7 rounded text-[10px] font-bold transition-all ${
                                  isSel ? 'bg-orange-500 text-white' : 'bg-white border border-slate-200 text-slate-700'
                                }`}
                              >
                                {idx + 1}
                              </button>
                            );
                          })}
                        </div>
                        <div className="flex justify-between text-xxs font-mono border-t border-slate-100 pt-3 mb-4">
                          <span>Total Fare:</span>
                          <span className="font-bold text-orange-600">₹{selectedSeats.length * selectedBus.price}</span>
                        </div>
                        <button onClick={executeBooking} className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded">
                          Reserve Seat
                        </button>
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <Check size={28} className="text-emerald-500 mx-auto mb-2" />
                        <h4 className="font-bold text-sm text-slate-950 mb-1">Seats Reserved!</h4>
                        <p className="text-slate-500 text-xxs mb-4">Reservation logged locally.</p>
                        <div className="bg-slate-50 p-3 border border-slate-100 rounded text-xxs font-mono text-left mb-4">
                          <span>BUS: {selectedBus.name}</span>
                          <span className="block">SEATS: {selectedSeats.map(s => s.split("-")[1]).join(', ')}</span>
                          <span className="block font-bold">TOTAL: ₹{selectedSeats.length * selectedBus.price}</span>
                        </div>
                        <button onClick={() => setBookingSuccess(false)} className="w-full py-2 border border-slate-350 bg-white text-slate-700 text-xxs font-bold rounded">
                          Modify Selections
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Services Grid (Logis style) */}
      <section id="services" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider block">FREIGHT DOMAINS</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight text-slate-900 uppercase">LOGIS ROAD CARRIAGE SERVICES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-slate-150 rounded-xl bg-slate-50/50">
              <h4 className="font-bold text-base text-slate-900 mb-2">Road Freight Forwarding</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Securing custom clearances and routing multi-axle freight lines through highways.
              </p>
            </div>
            <div className="p-6 border border-slate-150 rounded-xl bg-slate-50/50">
              <h4 className="font-bold text-base text-slate-900 mb-2">Express Heavy Haulage</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Accelerated trucking for oversized, heavy-duty cargo containers with real-time GPS tracking.
              </p>
            </div>
            <div className="p-6 border border-slate-150 rounded-xl bg-slate-50/50">
              <h4 className="font-bold text-base text-slate-900 mb-2">Full Truckload FTL</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Dedicated truck deployments ensuring direct, single-point dispatching schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-wider block">FAQ</span>
          <h2 className="text-3xl font-outfit font-black tracking-tight text-slate-900 uppercase">FREIGHT INFO DEPOT</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isExp = expandedFaq === idx;
            return (
              <div key={idx} className="border border-slate-200 bg-white rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExp ? null : idx)}
                  className="w-full p-4 text-left font-bold text-slate-900 text-xs sm:text-sm flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronRight size={14} className={`transform transition-transform ${isExp ? 'rotate-90 text-orange-500' : 'text-slate-400'}`} />
                </button>
                <AnimatePresence>
                  {isExp && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-4 pb-4 text-xxs sm:text-xs text-slate-500 border-t border-slate-100 pt-3">
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section Form */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider block">CONNECT DISPATCH</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight uppercase text-white">CONTACT HIGHWAY AGENTS</h2>
          </div>

          <form onSubmit={handleContactSubmit} className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-[10px] text-slate-500 uppercase block mb-1">Name *</label>
                <input 
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-850 rounded p-2.5 text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-500 uppercase block mb-1">Email *</label>
                <input 
                  type="email" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-850 rounded p-2.5 text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-500 uppercase block mb-1">Message *</label>
              <textarea 
                rows="4"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-slate-900 border border-slate-850 rounded p-2.5 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            {contactStatus.message && (
              <div className={`p-3 rounded text-xxs font-bold ${
                contactStatus.state === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
              }`}>
                {contactStatus.message}
              </div>
            )}

            <button type="submit" className="py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded">
              Send Dispatch Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 text-center text-xs text-slate-450 bg-slate-950">
        <p>© 2026 Roadline Express Coach India. Safe Travels & Reliable Journeys.</p>
      </footer>

    </div>
  );
}
