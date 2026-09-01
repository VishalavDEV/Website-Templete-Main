import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Search, Calculator, Shield, HelpCircle, ArrowLeft, ArrowRight, Check, AlertCircle, Package, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockShipments, freightRates } from '../../data/cargomaxData';
import { cargomaxImages } from '../../data/cargomaxImages';

export default function Cargomax() {
  const [trackId, setTrackId] = useState('CMX-2026-10482');
  const [activeShipment, setActiveShipment] = useState(mockShipments['CMX-2026-10482']);
  
  // Freight Calculator state
  const [weightKg, setWeightKg] = useState(500);
  const [cargoDist, setCargoDist] = useState(350);
  const [serviceClass, setServiceClass] = useState('LTL');
  const [calcCost, setCalcCost] = useState(null);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackId.trim()) return;
    
    const match = mockShipments[trackId.trim()];
    if (match) {
      setActiveShipment(match);
    } else {
      alert("Shipment ID not found. Try: CMX-2026-10482, CMX-2026-90518, or CMX-2026-44023");
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const multiplier = serviceClass === 'LTL' ? freightRates.baseLTL : freightRates.baseFTL;
    let base = weightKg * cargoDist * multiplier;
    if (base < freightRates.minCharge) base = freightRates.minCharge;
    
    setCalcCost(Math.round(base));
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
        message: `Thank you! Your logistics request has been received under ticket: CARGO-${Math.floor(1000 + Math.random() * 9000)}.`
      });
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 1000);
  };

  const faqs = [
    { q: "What does LTL and FTL shipping mean?", a: "LTL (Less-Than-Truckload) consolidates multiple cargo weights into a single carrier. FTL (Full-Truckload) reserves an entire container cargo truck for a single company's route." },
    { q: "What security measures do you take for heavy freight?", a: "Our trucks utilize tamper-evident RFID locks, temperature monitors for reefer transport, and dedicated 24/7 telemetry support." }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans overflow-x-hidden selection:bg-orange-500 selection:text-black">
      
      {/* Industrial Corporate Navbar */}
      <nav className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="text-orange-500" size={24} />
          <span className="font-outfit font-black tracking-wider text-lg text-white">CARGOMAX</span>
          <span className="hidden sm:inline-block bg-orange-500 text-black font-bold font-mono px-2 py-0.5 rounded text-[9px] uppercase tracking-wider">Logistics</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          <a href="#tracking" className="hover:text-orange-500 transition-colors">Track Cargo</a>
          <a href="#calculator" className="hover:text-orange-500 transition-colors">Freight Calc</a>
          <a href="#faq" className="hover:text-orange-500 transition-colors">FAQs</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/transportation" className="flex items-center gap-1.5 px-4 py-2 border border-zinc-850 rounded bg-zinc-900 text-xs font-bold text-zinc-300 hover:border-zinc-700 transition-all">
            <ArrowLeft size={12} /> Templates
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center py-20 px-6 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 z-0">
          <img src={cargomaxImages.hero} alt="Logistics Freight Cargo" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950" />
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-orange-500/10 text-orange-500 text-[10px] font-bold uppercase tracking-widest border border-orange-500/20 mb-6">
              HEAVY CORGO LOGISTICS
            </span>
            <h1 className="text-4xl sm:text-6xl font-outfit font-black tracking-tight leading-none uppercase mb-6">
              MOVE MORE. <br /> DELIVER <span className="text-orange-500">FASTER</span>.
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base font-light mb-8 max-w-sm leading-relaxed">
              Industrial grade cargo shipping, heavy freight road carriage, customs brokerage, and supply chain tracking databases.
            </p>
          </div>

          {/* Shipment tracker container */}
          <div id="tracking" className="lg:col-span-6">
            <form onSubmit={handleTrack} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl">
              <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <Search size={18} className="text-orange-500" /> Track Shipment
              </h3>

              <div className="flex gap-2 mb-4">
                <input 
                  type="text" 
                  placeholder="Enter Shipment ID (e.g. CMX-2026-10482)"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded p-3 text-xs focus:outline-none focus:border-orange-500 text-white font-mono"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded bg-orange-500 hover:bg-orange-400 text-black font-bold text-xs uppercase tracking-wider"
                >
                  Locate
                </button>
              </div>

              <div className="text-[10px] text-zinc-500 flex gap-2">
                <span>Demo IDs:</span>
                <button type="button" onClick={() => { setTrackId('CMX-2026-10482'); setActiveShipment(mockShipments['CMX-2026-10482']); }} className="hover:text-orange-500 underline font-mono">10482</button> • 
                <button type="button" onClick={() => { setTrackId('CMX-2026-90518'); setActiveShipment(mockShipments['CMX-2026-90518']); }} className="hover:text-orange-500 underline font-mono">90518</button> • 
                <button type="button" onClick={() => { setTrackId('CMX-2026-44023'); setActiveShipment(mockShipments['CMX-2026-44023']); }} className="hover:text-orange-500 underline font-mono">44023</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Track and trace display */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {activeShipment && (
            <motion.div 
              key={activeShipment.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-6 rounded-2xl border border-zinc-850 bg-zinc-900/30 grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-8">
                <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                  Tracking Timeline <span className="text-xs text-orange-500 font-mono">ID: {activeShipment.id}</span>
                </h3>

                <div className="flex flex-col gap-6 relative pl-6 border-l border-zinc-800">
                  {activeShipment.history.map((h, i) => {
                    const isCompleted = h.done;
                    return (
                      <div key={i} className="relative">
                        <div className={`absolute left-[-30px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                          isCompleted ? 'bg-orange-500 border-orange-500 shadow shadow-orange-500' : 'bg-zinc-900 border-zinc-800'
                        }`} />
                        <div>
                          <span className={`text-xs font-bold block ${isCompleted ? 'text-white' : 'text-zinc-500'}`}>
                            {h.status}
                          </span>
                          <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                            <span>Location: {h.location}</span>
                            <span>Time: {h.time}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-4 bg-zinc-950 p-6 rounded-xl border border-zinc-850 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">Expected Delivery</h4>
                  <span className="font-bold text-white text-sm">{activeShipment.estDelivery}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-zinc-900 py-4 font-mono text-xxs text-zinc-400">
                  <div>
                    <span className="text-zinc-650 uppercase font-semibold block mb-1">Origin Port</span>
                    <span>{activeShipment.origin}</span>
                  </div>
                  <div>
                    <span className="text-zinc-650 uppercase font-semibold block mb-1">Destination</span>
                    <span>{activeShipment.destination}</span>
                  </div>
                  <div>
                    <span className="text-zinc-650 uppercase font-semibold block mb-1">Weight</span>
                    <span>{activeShipment.weight}</span>
                  </div>
                  <div>
                    <span className="text-zinc-650 uppercase font-semibold block mb-1">Class Type</span>
                    <span>{activeShipment.serviceType}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Freight calculator */}
      <section id="calculator" className="py-24 border-t border-zinc-900 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider block mb-2">FREIGHT QUOTE</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight text-white uppercase mb-6">CARGO ESTIMATOR</h2>

            <form onSubmit={handleCalculate} className="flex flex-col gap-5 text-xs text-zinc-350">
              <div>
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block mb-2">Weight of Cargo (kg)</label>
                <input 
                  type="number" 
                  min="50" 
                  max="10000"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-orange-500 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block mb-2">Distance (km)</label>
                  <input 
                    type="number" 
                    min="10" 
                    max="3000"
                    value={cargoDist}
                    onChange={(e) => setCargoDist(Number(e.target.value))}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-orange-500 font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block mb-2">Logistics Type</label>
                  <select 
                    value={serviceClass}
                    onChange={(e) => setServiceClass(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-orange-500 font-bold"
                  >
                    <option value="LTL">LTL (Less Truckload)</option>
                    <option value="FTL">FTL (Full Truckload)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-xs uppercase tracking-wider rounded">
                Calculate Price
              </button>
            </form>
          </div>

          <div className="lg:col-span-6 p-8 rounded-2xl border border-zinc-800 bg-zinc-905 text-center shadow-lg">
            <span className="text-[10px] text-zinc-500 uppercase block mb-2">Freight Rate Quote</span>
            {calcCost ? (
              <div className="text-6xl font-mono font-black text-orange-500 my-4 tracking-tighter">
                ₹{calcCost.toLocaleString('en-IN')}
              </div>
            ) : (
              <div className="text-xl font-medium text-zinc-700 my-8 font-mono">₹0.00</div>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6 border-t border-zinc-900">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider block font-bold">FAQ</span>
          <h2 className="text-3xl font-outfit font-black text-white uppercase mt-1">LOGISTICS INSIGHTS</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isExp = expandedFaq === idx;
            return (
              <div key={idx} className="border border-zinc-850 bg-zinc-900/20 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExp ? null : idx)}
                  className="w-full p-4 text-left font-bold text-zinc-200 text-xs sm:text-sm flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronRight size={14} className={`transform transition-transform ${isExp ? 'rotate-90 text-orange-500' : 'text-zinc-500'}`} />
                </button>
                <AnimatePresence>
                  {isExp && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-4 pb-4 text-xxs sm:text-xs text-zinc-400 border-t border-zinc-850 pt-3 leading-relaxed">
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
      <section id="contact" className="py-24 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider block font-bold">DISPATCH CONTACT</span>
            <h2 className="text-3xl font-outfit font-black uppercase text-white mt-1">GET IN TOUCH</h2>
          </div>

          <form onSubmit={handleContactSubmit} className="p-6 bg-zinc-900 border border-zinc-850 rounded-2xl flex flex-col gap-4 text-xs text-white">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-zinc-500 uppercase block mb-1">Name *</label>
                <input 
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="text-[10px] text-zinc-500 uppercase block mb-1">Email *</label>
                <input 
                  type="email" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-zinc-500 uppercase block mb-1">Message *</label>
              <textarea 
                rows="4"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-2.5 focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            {contactStatus.message && (
              <div className={`p-3 rounded text-xxs font-bold ${
                contactStatus.state === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
              }`}>
                {contactStatus.message}
              </div>
            )}

            <button type="submit" className="py-3 bg-orange-500 text-black font-bold uppercase tracking-wider rounded">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 text-center text-xs text-zinc-700 bg-zinc-950">
        <p>© 2026 CargoMax Freight Logistics. supply chain safety systems.</p>
      </footer>

    </div>
  );
}
