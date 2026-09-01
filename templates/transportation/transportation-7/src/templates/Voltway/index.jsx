import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Search, Battery, MapPin, Sliders, ChevronRight, Menu, X, ArrowLeft, Info, HelpCircle, Check, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { voltwayVehicles, chargingStations } from '../../data/voltwayData';
import { voltwayImages } from '../../data/voltwayImages';

export default function Voltway() {
  const [selectedVehicle, setSelectedVehicle] = useState(voltwayVehicles[0]);
  const [searchCity, setSearchCity] = useState('');
  const [stationType, setStationType] = useState('All');
  const [filteredStations, setFilteredStations] = useState(chargingStations);
  
  // Range calculator state
  const [batteryPct, setBatteryPct] = useState(80);
  const [calcVehicleRange, setCalcVehicleRange] = useState(voltwayVehicles[0].range);
  const [calcVehicleName, setCalcVehicleName] = useState(voltwayVehicles[0].name);
  const [estDistance, setEstDistance] = useState(0);

  // Quote form state
  const [quotePickup, setQuotePickup] = useState('Bengaluru Main Port');
  const [quoteDest, setQuoteDest] = useState('Whitefield Eco-Tech Hub');
  const [quoteVehicleType, setQuoteVehicleType] = useState('Voltway Ion');
  const [quoteDistance, setQuoteDistance] = useState(25);
  const [quoteResult, setQuoteResult] = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const dist = Math.round((batteryPct / 100) * calcVehicleRange);
    setEstDistance(dist);
  }, [batteryPct, calcVehicleRange]);

  const handleSearch = () => {
    let stations = chargingStations;
    if (searchCity.trim()) {
      stations = stations.filter(s => s.city.toLowerCase().includes(searchCity.toLowerCase()));
    }
    if (stationType !== 'All') {
      stations = stations.filter(s => s.type.includes(stationType));
    }
    setFilteredStations(stations);
  };

  const handleGetQuote = (e) => {
    e.preventDefault();
    setQuoteLoading(true);
    setQuoteResult(null);
    setTimeout(() => {
      // Simple fare logic
      const selectedEv = voltwayVehicles.find(v => v.name === quoteVehicleType) || voltwayVehicles[0];
      const rate = selectedEv.name.includes("Nexus") ? 18 : selectedEv.name.includes("Ion") ? 14 : 10;
      const base = 250;
      const estimatedCost = base + (quoteDistance * rate);
      
      setQuoteResult({
        cost: Math.round(estimatedCost),
        co2Saved: (quoteDistance * 0.12).toFixed(2)
      });
      setQuoteLoading(false);
    }, 800);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setFormStatus({ state: 'error', message: 'Please fill in all required fields (Name, Email, and Message).' });
      return;
    }
    setFormStatus({ state: 'submitting', message: '' });
    setTimeout(() => {
      setFormStatus({
        state: 'success',
        message: `Thank you, ${contactName}! Your request has been logged under transmission ID: VOLT-${Math.floor(1000 + Math.random() * 9000)}.`
      });
      setContactName('');
      setContactEmail('');
      setContactPhone('');
      setContactCompany('');
      setContactMessage('');
    }, 1000);
  };

  const faqs = [
    { q: "What is the typical DC fast-charging speed for your fleets?", a: "Voltway fleets support DC fast chargers of up to 150kW, allowing vehicles to reach 8% to 80% charge in approximately 30 to 40 minutes, depending on the model." },
    { q: "How are the transportation carbon credit offsets calculated?", a: "Carbon offsets are calculated by comparing the zero-emission profile of our electric vehicles against standard diesel commercial trucks (~0.12 kg carbon saved per km per ton of cargo)." },
    { q: "Do you supply home and warehouse charging integrations?", a: "Yes, our Voltway Infra division provides site planning, grid balancing setups, and smart AC chargers (22kW) for commercial warehouse loading zones." }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans overflow-x-hidden selection:bg-emerald-400 selection:text-black">
      
      {/* Floating Futuristic Navbar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 left-4 right-4 z-50 max-w-6xl mx-auto px-6 py-3 rounded-full border border-neutral-800 bg-neutral-950/70 backdrop-blur-md flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <Zap className="text-emerald-400 fill-emerald-400 animate-pulse" size={24} />
          <span className="font-outfit font-black tracking-widest text-lg text-emerald-400">VOLTWAY</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a>
          <a href="#showcase" className="hover:text-emerald-400 transition-colors">Fleet</a>
          <a href="#finder" className="hover:text-emerald-400 transition-colors">Stations</a>
          <a href="#calculator" className="hover:text-emerald-400 transition-colors">Range Calc</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/transportation" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900 text-xs font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300">
            <ArrowLeft size={12} /> Templates
          </Link>
        </div>

        <button className="md:hidden text-neutral-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-2xl border border-neutral-800 bg-neutral-950 flex flex-col gap-4 text-center md:hidden"
          >
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-400 border-b border-neutral-900">Home</a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-400 border-b border-neutral-900">Fleet</a>
            <a href="#finder" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-400 border-b border-neutral-900">Stations</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-400 border-b border-neutral-900">Range Calc</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-400 border-b border-neutral-900">Contact</a>
            <Link to="/transportation" className="mt-2 py-2 text-emerald-400 flex items-center justify-center gap-1.5 bg-neutral-900 rounded-lg">
              <ArrowLeft size={14} /> Back to Templates
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Split Image + EV Quote Panel */}
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-12 px-6">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero text & image (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-400/20 w-fit">
              ELECTRICAL LOGISTICS NETWORK
            </span>
            <h1 className="text-5xl sm:text-7xl font-outfit font-black tracking-tighter leading-none">
              POWERING THE <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">NEXT JOURNEY</span>.
            </h1>
            <p className="text-neutral-400 text-base font-light max-w-md">
              Smarter electric transportation for a cleaner future. Premium battery efficiency and zero-emission freight logistics combined.
            </p>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-neutral-800">
              <img src={voltwayImages.hero} alt="Voltway Hero Electric Fleet" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Interactive EV Quote Panel (5 columns) */}
          <div className="lg:col-span-5 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap size={18} className="text-emerald-400" /> Calculate Green Quote
            </h3>
            
            <form onSubmit={handleGetQuote} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-neutral-500 block mb-1">Pickup Location</label>
                  <input 
                    type="text" 
                    value={quotePickup}
                    onChange={(e) => setQuotePickup(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-neutral-500 block mb-1">Destination</label>
                  <input 
                    type="text" 
                    value={quoteDest}
                    onChange={(e) => setQuoteDest(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-neutral-500 block mb-1">Vehicle Type</label>
                  <select 
                    value={quoteVehicleType}
                    onChange={(e) => setQuoteVehicleType(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-400"
                  >
                    {voltwayVehicles.map(v => <option key={v.id} value={v.name}>{v.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-neutral-500 block mb-1">Distance (km)</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="1000"
                    value={quoteDistance}
                    onChange={(e) => setQuoteDistance(Number(e.target.value))}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-400 font-mono"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={quoteLoading}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                {quoteLoading ? 'Simulating Dispatch Rates...' : 'Get Instant Quote'}
              </button>
            </form>

            <AnimatePresence>
              {quoteResult && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-neutral-950 border border-neutral-850 rounded-xl text-xs font-mono flex flex-col gap-1.5"
                >
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Est. Transit Fare:</span>
                    <span className="text-emerald-400 font-bold text-sm">₹{quoteResult.cost}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 border-t border-neutral-900 pt-1.5 mt-1.5">
                    <span>Carbon Credits Saved:</span>
                    <span className="text-emerald-400 font-bold">{quoteResult.co2Saved} kg CO₂</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Sustainable Logistics Services */}
      <section className="py-24 border-t border-neutral-900 bg-neutral-950/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider block">ELECTRIC SERVICES</span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-black tracking-tight mt-1 uppercase">SUSTAINABLE SOLUTIONS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
              <Zap size={24} className="text-emerald-400 mb-4" />
              <h4 className="font-bold text-lg mb-2">Zero-Emission FTL</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                Full truckload commercial shipping utilizing our high-capacity battery semi-truck fleets.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
              <Battery size={24} className="text-emerald-400 mb-4" />
              <h4 className="font-bold text-lg mb-2">Eco-Route Logistics</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                AI-optimized dispatching routing packages through coordinates with dense charging nodes.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
              <MapPin size={24} className="text-emerald-400 mb-4" />
              <h4 className="font-bold text-lg mb-2">Grid Smart Charging</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                Real-time smart grid charging balancing battery reserves during low carbon utility rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EV Fleet showcase with hover details */}
      <section id="showcase" className="py-24 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">ECO FLEET</span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-black tracking-tight mt-1 uppercase">VOLTWAY EV SHOWCASE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {voltwayVehicles.map((car) => (
              <motion.div 
                key={car.id}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950 border-b border-neutral-850">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] text-neutral-500 font-bold block uppercase">{car.type}</span>
                  <h4 className="font-bold text-white text-lg mt-1 mb-4">{car.name}</h4>
                  
                  {/* Dynamic specs appearing */}
                  <div className="flex flex-col gap-1.5 border-t border-neutral-850 pt-4 text-xxs font-mono text-neutral-400">
                    <div className="flex justify-between">
                      <span>Max Range:</span>
                      <span className="text-emerald-400 font-bold">{car.range} km</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Charging Speed:</span>
                      <span className="text-white">{car.chargingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Efficiency Profile:</span>
                      <span className="text-slate-300">{car.efficiency}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charging Network Finder */}
      <section id="finder" className="py-24 border-t border-neutral-900 bg-neutral-950/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider block">INFRASTRUCTURE</span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-black tracking-tight mt-1 uppercase">CHARGING STATION FINDER</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-950 mb-8">
            <input 
              type="text" 
              placeholder="Filter by city (e.g. Bengaluru, Mumbai, Pune, Chennai...)" 
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-xs focus:outline-none"
            />
            <select 
              value={stationType}
              onChange={(e) => setStationType(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-xs focus:outline-none"
            >
              <option value="All">All Speeds</option>
              <option value="DC Fast">DC Fast</option>
              <option value="AC Slow">AC Slow</option>
            </select>
            <button onClick={handleSearch} className="px-8 py-3 bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider rounded-lg">Search</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredStations.map(station => (
              <div key={station.id} className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30">
                <span className="text-[10px] text-emerald-400 font-mono font-bold block mb-2">{station.type}</span>
                <h4 className="font-bold text-white text-base mb-1">{station.name}</h4>
                <p className="text-neutral-500 text-xs flex items-center gap-1"><MapPin size={12} /> {station.city}</p>
                <div className="border-t border-neutral-850 pt-3 mt-4 flex justify-between text-xxs font-mono">
                  <span className="text-slate-400">Available: {station.available}/{station.total} Slots</span>
                  <span className="text-emerald-400">{station.costPerMin}/min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Range Calculator */}
      <section id="calculator" className="py-24 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">ECO CONFIGURATOR</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight text-white uppercase mt-1 mb-6">REAL-TIME RANGE ESTIMATES</h2>
            
            <div className="flex flex-col gap-6">
              <div>
                <label className="text-xxs text-neutral-500 uppercase tracking-widest font-bold block mb-2">Select Vehicle</label>
                <select 
                  value={calcVehicleName}
                  onChange={(e) => {
                    const v = voltwayVehicles.find(car => car.name === e.target.value);
                    if (v) {
                      setCalcVehicleName(v.name);
                      setCalcVehicleRange(v.range);
                    }
                  }}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-xs focus:outline-none focus:border-emerald-400"
                >
                  {voltwayVehicles.map(v => <option key={v.id} value={v.name}>{v.name}</option>)}
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 text-xs">
                  <label className="text-neutral-500 uppercase tracking-widest">Battery Charge</label>
                  <span className="text-emerald-400 font-bold">{batteryPct}%</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  value={batteryPct}
                  onChange={(e) => setBatteryPct(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-neutral-850 bg-gradient-to-br from-neutral-900 to-neutral-950 text-center relative overflow-hidden">
            <span className="text-xxs text-neutral-500 uppercase block mb-1">Calculated Range Cap</span>
            <div className="text-7xl font-mono font-black text-emerald-400 my-4 tracking-tighter">
              {estDistance} <span className="text-sm font-sans font-light text-white">km</span>
            </div>
            <span className="text-xxs text-neutral-600 block border-t border-neutral-900 pt-4">Calculations based on standard eco-driving templates.</span>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 border-t border-neutral-900 bg-neutral-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider block">ANSWERS</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight text-white uppercase mt-1">QUESTIONS & FAQS</h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div key={idx} className="border border-neutral-850 rounded-xl bg-neutral-900/30 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-sm text-white focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight size={16} className={`transform transition-transform ${isExpanded ? 'rotate-90 text-emerald-400' : 'text-slate-500'}`} />
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-5 pb-5 text-xs text-neutral-400 font-light leading-relaxed border-t border-neutral-850/60 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Functional Contact Form Section */}
      <section id="contact" className="py-24 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider block">ENQUIRY LINK</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight text-white uppercase mt-1">CONNECT OUR ECO AGENTS</h2>
          </div>

          <form onSubmit={handleContactSubmit} className="p-8 rounded-3xl border border-neutral-850 bg-neutral-900/60 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold block mb-2">Name *</label>
                <input 
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold block mb-2">Email Address *</label>
                <input 
                  type="email" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold block mb-2">Phone</label>
                <input 
                  type="text" 
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold block mb-2">Company Name</label>
                <input 
                  type="text" 
                  value={contactCompany}
                  onChange={(e) => setContactCompany(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold block mb-2">Message *</label>
              <textarea 
                rows="5"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            {formStatus.message && (
              <div className={`p-4 rounded-lg text-xs font-medium border ${
                formStatus.state === 'success' 
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                  : 'bg-red-500/10 border-red-500/20 text-red-400'
              }`}>
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus.state === 'submitting'}
              className="py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
            >
              {formStatus.state === 'submitting' ? 'Submitting secure package...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-12 text-center text-xs text-neutral-600">
        <p>© 2026 Voltway Mobility Private Limited. All rights reserved. Indian Operations.</p>
      </footer>

    </div>
  );
}
