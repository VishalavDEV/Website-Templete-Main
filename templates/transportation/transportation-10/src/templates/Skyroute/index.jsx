import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Search, Calendar, Users, ArrowRight, ArrowLeft, Check, Compass, Ticket, Award, Star, Info, HelpCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { skyrouteAirports, mockFlights, cabinClasses } from '../../data/skyrouteData';
import { skyrouteImages } from '../../data/skyrouteImages';

export default function Skyroute() {
  const [fromAir, setFromAir] = useState('DEL');
  const [toAir, setToAir] = useState('BOM');
  const [departDate, setDepartDate] = useState('2026-08-27');
  const [pCount, setPCount] = useState(1);
  const [selectedCabin, setSelectedCabin] = useState(cabinClasses[0]);

  // Flights search states
  const [searched, setSearched] = useState(false);
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);

  // Cargo tracking state (NEW integration)
  const [trackingId, setTrackingId] = useState('SR-90182');
  const [trackingResult, setTrackingResult] = useState(null);
  const [trackingLoading, setTrackingLoading] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (fromAir === toAir) {
      alert("Origin and Destination cannot be the same airport.");
      return;
    }
    setSearching(true);
    setSelectedFlight(null);
    setBookingDone(false);

    setTimeout(() => {
      const matches = mockFlights.filter(f => f.fromCode === fromAir && f.toCode === toAir);
      setResults(matches);
      setSearched(true);
      setSearching(false);
    }, 800);
  };

  const handleTrackCargo = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setTrackingLoading(true);
    setTrackingResult(null);

    setTimeout(() => {
      // Mock tracking results
      setTrackingResult({
        id: trackingId.trim(),
        origin: "New Delhi (DEL)",
        dest: "London Heathrow (LHR)",
        status: "In Transit",
        eta: "28 Aug 2026, 06:15 PM",
        checkpoints: [
          { name: "Shipment Received at DEL Cargo Hub", time: "25 Aug, 10:00 AM", done: true },
          { name: "Customs Cleared & Security Checked", time: "25 Aug, 04:30 PM", done: true },
          { name: "In Transit (Flight SR-082)", time: "26 Aug, 09:15 AM", done: true },
          { name: "Arrived at Destination Hub (LHR)", time: "Pending", done: false },
          { name: "Out for Courier Delivery", time: "Pending", done: false }
        ]
      });
      setTrackingLoading(false);
    }, 850);
  };

  const handleBook = () => {
    setBookingDone(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactStatus({ state: 'error', message: 'Please complete all required fields.' });
      return;
    }
    setContactStatus({ state: 'submitting', message: '' });
    setTimeout(() => {
      setContactStatus({
        state: 'success',
        message: `Aviation agent has been notified. Request ticket logged: SKY-${Math.floor(1000 + Math.random() * 9000)}.`
      });
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 1000);
  };

  const faqs = [
    { q: "What is your maximum checked cargo weight per piece?", a: "Standard passenger flights accept up to 32 kg per piece. Scheduled freighters can accommodate heavy-duty pallets of up to 4,500 kg." },
    { q: "How are customs declarations processed?", a: "Skyroute handles end-to-end import/export customs brokerage locally at major hubs like Delhi, Mumbai, and Bengaluru." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* Premium Aviation Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-amber-500/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Plane className="text-amber-400 rotate-45" size={26} />
          <span className="font-outfit font-black tracking-widest text-xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">SKYROUTE</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <a href="#booking" className="hover:text-amber-400 transition-colors">Book Travel</a>
          <a href="#tracking" className="hover:text-amber-400 transition-colors">Cargo Tracking</a>
          <a href="#cabins" className="hover:text-amber-400 transition-colors">Cabins</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/transportation" className="flex items-center gap-1 px-4 py-1.5 rounded border border-amber-500/30 bg-amber-500/5 text-[10px] font-bold tracking-wider text-amber-400 uppercase hover:bg-amber-400 hover:text-slate-950 transition-all">
            <ArrowLeft size={10} /> Templates
          </Link>
        </div>
      </nav>

      {/* Hero Section with Aircraft Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-12">
        <div className="absolute inset-0 z-0">
          <img src={skyrouteImages.hero} alt="Air Travel Cargo Jet" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-widest border border-amber-500/20 mb-6">
              <Star size={12} /> The Gold Standard in Aviation Logistics
            </span>
            <h1 className="text-4xl sm:text-6xl font-outfit font-black tracking-tight uppercase leading-tight mb-6">
              GLOBAL LOGISTICS. <br /> ABOVE EXPECTATIONS.
            </h1>
            <p className="text-slate-450 text-base font-light mb-8 max-w-sm leading-relaxed">
              Experience air transport frameworks supporting cargo carriage, express shipping, and luxury corporate flights.
            </p>
          </div>

          {/* Flight Ticket Search Form */}
          <div id="booking" className="lg:col-span-6">
            <form onSubmit={handleSearch} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <Search size={18} className="text-amber-400" /> Book Flights
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Departure</label>
                  <select 
                    value={fromAir}
                    onChange={(e) => setFromAir(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {skyrouteAirports.map(ap => (
                      <option key={ap.code} value={ap.code}>{ap.city} ({ap.code})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Arrival</label>
                  <select 
                    value={toAir}
                    onChange={(e) => setToAir(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {skyrouteAirports.map(ap => (
                      <option key={ap.code} value={ap.code}>{ap.city} ({ap.code})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Date</label>
                  <input 
                    type="date"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Passengers</label>
                  <input 
                    type="number"
                    min="1"
                    max="9"
                    value={pCount}
                    onChange={(e) => setPCount(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none font-mono"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={searching}
                className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-lg text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-400/10 flex items-center justify-center gap-2"
              >
                {searching ? 'Querying logs...' : 'Search Flights'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Flight search results (retained) */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {searched && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 flex flex-col gap-4">
                {results.map((flight) => (
                  <div key={flight.id} className="p-5 border border-slate-850 rounded-xl bg-slate-900/30 flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-bold text-white text-sm">{flight.flightNumber} • {flight.airline}</h4>
                      <span className="text-slate-500 font-mono text-xxs block mt-0.5">{flight.departure} → {flight.arrival} • {flight.stops}</span>
                    </div>
                    <button 
                      onClick={() => { setSelectedFlight(flight); setBookingDone(false); }}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs rounded border border-slate-700"
                    >
                      Book (₹{flight.price})
                    </button>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4">
                {selectedFlight && (
                  <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg">
                    {!bookingDone ? (
                      <>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Ticket details</h4>
                        <div className="flex flex-col gap-2 mb-4">
                          {['economy', 'premium', 'business'].map((cType) => {
                            const cClass = cabinClasses.find(c => c.id === cType);
                            const price = selectedFlight.classPrices[cType] * pCount;
                            return (
                              <button
                                key={cType}
                                type="button"
                                onClick={() => setSelectedCabin(cClass)}
                                className={`flex justify-between items-center p-2.5 rounded border text-[11px] text-left transition-all ${
                                  selectedCabin.id === cType ? 'border-amber-400 bg-amber-400/5' : 'border-slate-800'
                                }`}
                              >
                                <span>{cClass.name}</span>
                                <span className="font-mono text-amber-400 font-bold">₹{price}</span>
                              </button>
                            );
                          })}
                        </div>
                        <button onClick={handleBook} className="w-full py-2 bg-amber-400 text-slate-950 font-bold text-xs rounded uppercase tracking-wider">
                          Reserve Cabin
                        </button>
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <Check size={24} className="text-amber-400 mx-auto mb-2" />
                        <h4 className="font-bold text-xs text-white uppercase mb-1">Reservation Received</h4>
                        <p className="text-slate-400 text-xxs mb-4">Logged locally.</p>
                        <div className="p-3 bg-slate-950 text-xxs font-mono text-left rounded flex flex-col gap-1">
                          <span>FLIGHT: {selectedFlight.flightNumber}</span>
                          <span>CLASS: {selectedCabin.name}</span>
                          <span className="font-bold text-amber-400">TOTAL: ₹{selectedFlight.classPrices[selectedCabin.id] * pCount}</span>
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

      {/* Cargo Tracking Section (NEW integration) */}
      <section id="tracking" className="py-24 border-t border-slate-900 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">CARGO LOGISTICS</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight text-white uppercase mt-1">AIR FREIGHT SHIPMENT TRACKER</h2>
          </div>

          <form onSubmit={handleTrackCargo} className="flex gap-3 max-w-xl mx-auto p-3 rounded-xl border border-slate-800 bg-slate-900 mb-12 shadow-sm">
            <input 
              type="text" 
              placeholder="Enter Airway Bill / tracking ID (e.g. SR-90182)"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
            />
            <button type="submit" className="px-6 py-2.5 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded">
              Track
            </button>
          </form>

          <AnimatePresence>
            {trackingResult && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto text-xs"
              >
                <div className="grid grid-cols-2 gap-4 border-b border-slate-800 pb-4 mb-6">
                  <div>
                    <span className="text-slate-500 uppercase block font-semibold text-[10px]">Transit Route</span>
                    <span className="text-sm font-bold text-white mt-1 block">{trackingResult.origin} → {trackingResult.dest}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 uppercase block font-semibold text-[10px]">Expected Arrival</span>
                    <span className="text-sm font-bold text-amber-400 mt-1 block">{trackingResult.eta}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 relative pl-6 border-l border-slate-800">
                  {trackingResult.checkpoints.map((cp, idx) => (
                    <div key={idx} className="relative">
                      <div className={`absolute left-[-30px] top-1 h-3 w-3 rounded-full border-2 ${
                        cp.done ? 'bg-amber-400 border-amber-400 shadow shadow-amber-400' : 'bg-slate-950 border-slate-850'
                      }`} />
                      <div className={cp.done ? 'text-white' : 'text-slate-500'}>
                        <span className="font-bold block">{cp.name}</span>
                        <span className="text-xxs text-slate-500 font-mono block mt-0.5">{cp.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Services Grid (Logis style) */}
      <section className="py-24 border-t border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">FREIGHT DOMAINS</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight text-white uppercase mt-1">AVIATION CARGO SOLUTIONS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-850">
              <h4 className="font-bold text-base text-white mb-2">Priority Air Courier</h4>
              <p className="text-slate-450 text-xs leading-relaxed font-light">
                Next-day scheduled flights connecting major manufacturing hubs with minimal customs clearing times.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-850">
              <h4 className="font-bold text-base text-white mb-2">Heavy Cargo Charters</h4>
              <p className="text-slate-450 text-xs leading-relaxed font-light">
                Dedicated dry freighter aircraft deployments for heavy industrial components and oversized machinery.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-850">
              <h4 className="font-bold text-base text-white mb-2">Airport Ramp Ops</h4>
              <p className="text-slate-450 text-xs leading-relaxed font-light">
                Full airport-grade sorting, palletizing, loading, and secure temporary warehousing facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">FAQ</span>
          <h2 className="text-3xl font-outfit font-black tracking-tight text-white uppercase mt-1">AIRLOGIS INSIGHTS</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isExp = expandedFaq === idx;
            return (
              <div key={idx} className="border border-slate-800 bg-slate-900/20 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExp ? null : idx)}
                  className="w-full p-4 text-left font-bold text-slate-200 text-xs sm:text-sm flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronRight size={14} className={`transform transition-transform ${isExp ? 'rotate-90 text-amber-400' : 'text-slate-500'}`} />
                </button>
                <AnimatePresence>
                  {isExp && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-4 pb-4 text-xxs sm:text-xs text-slate-400 border-t border-slate-850 pt-3 leading-relaxed">
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
      <section id="contact" className="py-24 border-t border-slate-900 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">ENQUIRY LINK</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight uppercase text-white mt-1">CONTACT AVIATION DESK</h2>
          </div>

          <form onSubmit={handleContactSubmit} className="p-6 bg-slate-900 border border-slate-850 rounded-2xl flex flex-col gap-4 text-xs text-white">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-slate-500 uppercase block mb-1">Name *</label>
                <input 
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-500 uppercase block mb-1">Email *</label>
                <input 
                  type="email" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-500 uppercase block mb-1">Message *</label>
              <textarea 
                rows="4"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 focus:outline-none focus:border-amber-400 text-xs"
              />
            </div>

            {contactStatus.message && (
              <div className={`p-3 rounded text-xxs font-bold ${
                contactStatus.state === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
              }`}>
                {contactStatus.message}
              </div>
            )}

            <button type="submit" className="py-3 bg-amber-400 text-slate-950 font-bold uppercase tracking-wider rounded">
              Submit Aviation Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 text-center text-xs text-slate-650 bg-slate-950">
        <p>© 2026 Skyroute Airways International. Premium Business & Leisure Air travel.</p>
      </footer>

    </div>
  );
}
