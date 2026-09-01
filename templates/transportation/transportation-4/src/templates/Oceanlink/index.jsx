import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, Search, Calculator, Shield, HelpCircle, ArrowLeft, ArrowRight, Check, Info, Anchor, Compass, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { marinePorts, mockContainers, marineRates } from '../../data/oceanlinkData';
import { oceanlinkImages } from '../../data/oceanlinkImages';

export default function Oceanlink() {
  const [originPort, setOriginPort] = useState('Port of Chennai (MAA)');
  const [destPort, setDestPort] = useState('Port of Singapore (SIN)');
  const [containerType, setContainerType] = useState('Standard 20ft');
  const [cargoWeightVal, setCargoWeightVal] = useState(15000); // kg
  
  // Rate Quote state
  const [quoteCost, setQuoteCost] = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(false);

  // Vessel tracking states
  const [vesselId, setVesselId] = useState('OL-99120');
  const [trackResult, setTrackResult] = useState(mockContainers['OL-99120']);

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
      const base = 25000;
      const weightMultiplier = 0.8;
      const typeMultiplier = containerType.includes('Reefer') ? 1.5 : containerType.includes('40ft') ? 1.3 : 1.0;
      const total = (base + (cargoWeightVal * weightMultiplier)) * typeMultiplier;
      
      setQuoteCost(Math.round(total));
      setQuoteLoading(false);
    }, 800);
  };

  const handleTrackVessel = (e) => {
    e.preventDefault();
    if (!vesselId.trim()) return;
    const match = mockContainers[vesselId.trim()];
    if (match) {
      setTrackResult(match);
    } else {
      alert("Vessel tracking log not found. Try: OL-99120, OL-45210, or OL-78930");
    }
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
        message: `Thank you! Your shipping inquiry has been received under ticket: OCEAN-${Math.floor(1000 + Math.random() * 9000)}.`
      });
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 1000);
  };

  const faqs = [
    { q: "What is the transit time between Chennai and Singapore?", a: "Standard container freight lines typically have a transit time of 4 to 5 days, depending on weather and harbor queues." },
    { q: "Do you supply customs clearance support at dropping ports?", a: "Yes, our OceanLink Customs Brokerage division offers end-to-end clearing documentation services locally at both departure and landing ports." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* Premium Maritime Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 border-b border-blue-900/40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Anchor className="text-blue-500" size={26} />
          <span className="font-outfit font-black tracking-widest text-xl text-white">OCEANLINK</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <a href="#booking" className="hover:text-blue-400 transition-colors">Shipping Quote</a>
          <a href="#tracking" className="hover:text-blue-400 transition-colors">Fleet Tracking</a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">FAQs</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/transportation" className="flex items-center gap-1.5 px-4 py-2 border border-slate-905 bg-slate-900 text-xs font-bold text-slate-350 hover:border-blue-900/50 hover:text-white transition-all">
            <ArrowLeft size={12} /> Templates
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 z-0">
          <img src={oceanlinkImages.hero} alt="Container Vessel Sea" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20 mb-6">
              GLOBAL MARINE NETWORKS
            </span>
            <h1 className="text-4xl sm:text-6xl font-outfit font-black tracking-tight leading-none uppercase mb-6 text-white">
              CONNECTING GLOBAL COMMERCE.
            </h1>
            <p className="text-slate-400 text-sm sm:text-base font-light mb-8 max-w-sm leading-relaxed">
              Cinematic maritime shipping networks, route coordination trackers, container logistics pricing metrics, and harbor port brokers.
            </p>
          </div>

          {/* Shipping Quote Estimator */}
          <div id="booking" className="lg:col-span-6">
            <form onSubmit={handleCalculateQuote} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
              <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <Calculator size={18} className="text-blue-500" /> Shipping Quote
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Origin Port</label>
                  <select 
                    value={originPort}
                    onChange={(e) => setOriginPort(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    {marinePorts.map(p => (
                      <option key={p.code} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Destination Port</label>
                  <select 
                    value={destPort}
                    onChange={(e) => setDestPort(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    {marinePorts.map(p => (
                      <option key={p.code} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Container Class</label>
                  <select
                    value={containerType}
                    onChange={(e) => setContainerType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Standard 20ft">Standard 20ft Dry</option>
                    <option value="Standard 40ft">Standard 40ft Dry</option>
                    <option value="Reefer 20ft">Reefer (Climate-Control)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Weight of Cargo (kg)</label>
                  <input 
                    type="number"
                    min="100"
                    max="30000"
                    value={cargoWeightVal}
                    onChange={(e) => setCargoWeightVal(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-850 rounded p-2.5 text-xs text-white focus:outline-none font-mono"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={quoteLoading}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-1.5"
              >
                {quoteLoading ? 'Calculating Sea Rates...' : 'Get Shipping Quote'}
              </button>

              <AnimatePresence>
                {quoteCost && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-slate-950 border border-slate-850 rounded text-xs font-mono text-center"
                  >
                    <span className="text-slate-500 block mb-1">Est. Port-to-Port Rate</span>
                    <span className="text-xl font-bold text-blue-500">₹{quoteCost.toLocaleString('en-IN')}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* Shipping tracking timeline section */}
      <section id="tracking" className="py-24 border-t border-slate-900 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-500 text-xs font-semibold uppercase tracking-wider block">VESSEL LOCATOR</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight text-white uppercase mt-1">FLEET TRACKER</h2>
          </div>

          <form onSubmit={handleTrackVessel} className="flex gap-3 max-w-xl mx-auto p-3 rounded-xl border border-slate-800 bg-slate-900 mb-12 shadow-sm">
            <input 
              type="text" 
              placeholder="Enter Vessel Code (e.g. OL-99120, OL-45210, or OL-78930)"
              value={vesselId}
              onChange={(e) => setVesselId(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
            />
            <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded">
              Locate
            </button>
          </form>

          <AnimatePresence>
            {trackResult && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 bg-slate-900 border border-slate-850 rounded-2xl max-w-2xl mx-auto text-xs"
              >
                <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
                  <div>
                    <span className="text-slate-500 block uppercase font-bold text-[10px]">Vessel Name</span>
                    <span className="text-sm font-bold text-white mt-1 block">{trackResult.vessel}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block uppercase font-bold text-[10px]">Status</span>
                    <span className="text-sm font-bold text-blue-500 mt-1 block uppercase">{trackResult.status}</span>
                  </div>
                </div>

                {/* Animated path checker */}
                <div className="flex justify-between items-center text-center font-mono text-[9px] text-slate-400 py-4 mb-6">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-white block">PORT</span>
                    <span className="text-slate-500 mt-1">{trackResult.origin}</span>
                  </div>
                  <div className="h-[2px] flex-1 bg-slate-800 relative mx-2">
                    <motion.div 
                      className="absolute top-[-4px] h-2 w-2 rounded-full bg-blue-500 shadow shadow-blue-500"
                      animate={{ left: trackResult.status === 'In Transit' ? '50%' : '100%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-white block">DESTINATION</span>
                    <span className="text-slate-500 mt-1">{trackResult.destination}</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 border border-slate-850 rounded text-xxs font-mono flex flex-col gap-1.5 text-left">
                  <span>CARGO WEIGHT: {trackResult.weight}</span>
                  <span>CARGO TYPE: {trackResult.cargoType}</span>
                  <span>LAT/LONG POSITION: {trackResult.latLong}</span>
                  <span>EXPECTED HARBOR ARRIVAL: {trackResult.eta}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6 border-t border-slate-900">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-xs font-semibold uppercase tracking-wider block">FAQ</span>
          <h2 className="text-3xl font-outfit font-black text-white uppercase mt-1">SHIPPING GUIDELINES</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isExp = expandedFaq === idx;
            return (
              <div key={idx} className="border border-slate-850 bg-slate-900/20 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExp ? null : idx)}
                  className="w-full p-4 text-left font-bold text-slate-205 text-xs sm:text-sm flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronRight size={14} className={`transform transition-transform ${isExp ? 'rotate-90 text-blue-500' : 'text-slate-500'}`} />
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

      {/* Contact form */}
      <section id="contact" className="py-24 border-t border-slate-900 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-500 text-xs font-semibold uppercase tracking-wider block font-bold">PORT SUPPORT</span>
            <h2 className="text-3xl font-outfit font-black uppercase text-white mt-1">CONTACT HARBOR DESK</h2>
          </div>

          <form onSubmit={handleContactSubmit} className="p-6 bg-slate-900 border border-slate-850 rounded-2xl flex flex-col gap-4 text-xs text-white">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-slate-500 uppercase block mb-1">Name *</label>
                <input 
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 rounded p-2.5 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-500 uppercase block mb-1">Email *</label>
                <input 
                  type="email" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 rounded p-2.5 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-500 uppercase block mb-1">Message *</label>
              <textarea 
                rows="4"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-850 rounded p-2.5 focus:outline-none focus:border-blue-500 text-xs"
              />
            </div>

            {contactStatus.message && (
              <div className={`p-3 rounded text-xxs font-bold ${
                contactStatus.state === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
              }`}>
                {contactStatus.message}
              </div>
            )}

            <button type="submit" className="py-3 bg-blue-600 text-white font-bold uppercase tracking-wider rounded">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 text-center text-xs text-slate-700 bg-slate-950">
        <p>© 2026 OceanLink Logistics Corp. Global Container Shipping Network.</p>
      </footer>

    </div>
  );
}
