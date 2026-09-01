import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Search, Map, Clock, HelpCircle, ArrowLeft, ArrowRight, Check, Shield, AlertTriangle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { transitStations, transitRoutes, transitSchedule } from '../../data/transitflowData';
import { transitflowImages } from '../../data/transitflowImages';

export default function Transitflow() {
  const [fromStationId, setFromStationId] = useState('s1'); // Majestic
  const [toStationId, setToStationId] = useState('s2'); // Indiranagar
  
  // Route planner outputs
  const [plannerSearched, setPlannerSearched] = useState(false);
  const [plannerLoading, setPlannerLoading] = useState(false);
  const [plannedRoute, setPlannedRoute] = useState(null);

  // Timetable
  const [activeStationId, setActiveStationId] = useState('s1');

  // Timeline tracker
  const [activeRouteId, setActiveRouteId] = useState('r1');
  const [selectedTimelineStation, setSelectedTimelineStation] = useState('Whitefield');

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);

  const activeRoute = transitRoutes.find(r => r.id === activeRouteId) || transitRoutes[0];
  const stationTimetable = transitSchedule[activeStationId] || [];

  const handlePlanRoute = (e) => {
    e.preventDefault();
    if (fromStationId === toStationId) {
      alert("From and To stations cannot be the same.");
      return;
    }
    setPlannerLoading(true);
    setPlannerSearched(false);

    setTimeout(() => {
      const fromSt = transitStations.find(s => s.id === fromStationId);
      const toSt = transitStations.find(s => s.id === toStationId);
      
      const stopsCount = Math.floor(Math.random() * 5 + 3);
      const travelMinutes = stopsCount * 3 + 2;
      const transferCount = fromSt.line !== toSt.line && !fromSt.line.includes("Interchange") && !toSt.line.includes("Interchange") ? 1 : 0;
      
      setPlannedRoute({
        from: fromSt.name,
        to: toSt.name,
        stops: stopsCount,
        duration: `${travelMinutes} mins`,
        transfers: transferCount,
        fare: `₹${stopsCount * 5 + 10}`
      });
      setPlannerSearched(true);
      setPlannerLoading(false);
    }, 600);
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
        message: `Thank you! Your feedback request has been submitted under ID: TRAN-${Math.floor(1000 + Math.random() * 9000)}.`
      });
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 1000);
  };

  const faqs = [
    { q: "How can I purchase a smart transit card?", a: "Transit cards can be purchased at any metro station customer service desk or authorized transit kiosk using card/UPI payments." },
    { q: "What should I do if my train is delayed?", a: "Delay warnings are updated on our live system status board. Transit cards will remain valid, and alternative feeder bus services will activate if delays exceed 20 minutes." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden selection:bg-teal-500 selection:text-white">
      
      {/* Information-Focused Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <Map className="text-teal-400" size={24} />
          <span className="font-outfit font-black tracking-widest text-lg">TRANSITFLOW</span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-teal-400/10 text-teal-400 text-xxs font-mono uppercase tracking-wider border border-teal-400/20">Bengaluru Transit Authority</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <a href="#planner" className="hover:text-teal-400 transition-colors">Route Planner</a>
          <a href="#timetables" className="hover:text-teal-400 transition-colors">Timetables</a>
          <a href="#faq" className="hover:text-teal-400 transition-colors">FAQs</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/transportation" className="flex items-center gap-1.5 px-4 py-2 rounded border border-slate-700 bg-slate-800 text-xs font-semibold text-slate-350 hover:text-white transition-all">
            <ArrowLeft size={12} /> Templates
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src={transitflowImages.hero} alt="Metro Transit Platform" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-400/10 text-teal-400 text-xs font-semibold uppercase tracking-wider border border-teal-400/20 mb-6">
              Official City Planner Platform
            </span>
            <h1 className="text-4xl sm:text-5xl font-outfit font-black tracking-tight uppercase leading-none mb-6">
              YOUR CITY. <br /> YOUR ROUTE.
            </h1>
            <p className="text-slate-450 text-base font-light mb-8 max-w-md leading-relaxed">
              Plan routes across the Bengaluru Namma Metro and public bus systems. Search real-time timetables and system statuses below.
            </p>
          </div>

          {/* Interactive Route Planner (6 columns) */}
          <div id="planner" className="lg:col-span-6">
            <form onSubmit={handlePlanRoute} className="bg-white text-slate-900 rounded-2xl shadow-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Map size={18} className="text-blue-600" /> Metro & Bus Route Planner
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">From Station</label>
                  <select 
                    value={fromStationId}
                    onChange={(e) => setFromStationId(e.target.value)}
                    className="w-full border border-slate-250 rounded-xl p-3 text-sm focus:outline-none focus:border-teal-500 bg-slate-50"
                  >
                    {transitStations.map(s => (
                      <option key={s.id} value={s.id}>{s.name.split(" Metro")[0]}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">To Station</label>
                  <select 
                    value={toStationId}
                    onChange={(e) => setToStationId(e.target.value)}
                    className="w-full border border-slate-250 rounded-xl p-3 text-sm focus:outline-none focus:border-teal-500 bg-slate-50"
                  >
                    {transitStations.map(s => (
                      <option key={s.id} value={s.id}>{s.name.split(" Metro")[0]}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                disabled={plannerLoading}
                className="w-full py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
              >
                {plannerLoading ? 'Structuring nodes...' : 'Plan Journey'}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Planner results visualizer */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {plannerSearched && plannedRoute && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white border border-slate-200 rounded-2xl shadow p-6 max-w-2xl mx-auto"
            >
              <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <Check size={20} className="text-emerald-500" /> Optimal Transit Path Loaded
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4 border-t border-b border-slate-100 mb-6 font-mono">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Transit Stops</span>
                  <span className="text-lg font-bold text-slate-800">{plannedRoute.stops} stops</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Travel Time</span>
                  <span className="text-lg font-bold text-slate-800">{plannedRoute.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Transfers</span>
                  <span className="text-lg font-bold text-slate-800">{plannedRoute.transfers === 0 ? 'Direct Route' : `${plannedRoute.transfers} Swap`}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Est. Fare</span>
                  <span className="text-lg font-bold text-teal-600">{plannedRoute.fare}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl text-xs text-slate-650 font-mono">
                <span className="font-bold text-slate-900">{plannedRoute.from}</span>
                <span className="h-[2px] w-6 bg-slate-300 inline-block" />
                <span className="font-bold text-slate-900">{plannedRoute.to}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Station Timetable departures */}
      <section id="timetables" className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-teal-600 text-xs font-semibold uppercase tracking-wider">DEPOT MONITOR</span>
            <h2 className="text-3xl font-outfit font-black tracking-tight text-slate-950 uppercase mt-2 mb-6">LIVE DEPARTURES BOARD</h2>
            
            <div className="flex flex-col gap-3">
              {transitStations.map((station) => (
                <button
                  key={station.id}
                  onClick={() => setActiveStationId(station.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    activeStationId === station.id 
                      ? 'border-teal-500 bg-teal-500/5' 
                      : 'border-slate-200 bg-slate-50 hover:border-slate-350'
                  }`}
                >
                  <h4 className="font-bold text-sm text-slate-900">{station.name.split(" Metro")[0]}</h4>
                  <span className="text-xxs text-slate-400 block mt-1">{station.line}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900 text-white rounded-2xl shadow-xl p-6 border border-slate-800 font-mono text-xs">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-4 text-[10px] text-slate-500 uppercase font-bold">
              <span>Next Departures</span>
              <span>Departure Time</span>
            </div>

            <div className="flex flex-col gap-4">
              {stationTimetable.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-850 last:border-none">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-teal-400" />
                    <div>
                      <span className="font-bold text-white block text-sm">{row.route}</span>
                      <span className={`text-[10px] uppercase font-bold ${row.status.includes('Delayed') ? 'text-red-400' : 'text-emerald-400'}`}>
                        {row.status}
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-teal-400">{row.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6 border-t border-slate-200">
        <div className="text-center mb-16">
          <span className="text-teal-600 text-xs font-semibold uppercase tracking-wider block font-bold">FAQ</span>
          <h2 className="text-3xl font-outfit font-black text-slate-950 uppercase mt-1">TRANSIT FAQs</h2>
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
                  <ChevronRight size={14} className={`transform transition-transform ${isExp ? 'rotate-90 text-teal-500' : 'text-slate-400'}`} />
                </button>
                <AnimatePresence>
                  {isExp && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-4 pb-4 text-xxs sm:text-xs text-slate-500 border-t border-slate-100 pt-3 leading-relaxed">
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Functional Contact / Feedback Form */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider block font-bold">FEEDBACK SYSTEM</span>
            <h2 className="text-3xl font-outfit font-black uppercase text-white mt-1">CONTACT METRO AGENTS</h2>
          </div>

          <form onSubmit={handleContactSubmit} className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col gap-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-slate-500 block mb-1 uppercase font-semibold">Name *</label>
                <input 
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-850 rounded p-2.5 text-white focus:outline-none focus:border-teal-400"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-500 block mb-1 uppercase font-semibold">Email *</label>
                <input 
                  type="email" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-850 rounded p-2.5 text-white focus:outline-none focus:border-teal-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-500 block mb-1 uppercase font-semibold">Message *</label>
              <textarea 
                rows="4"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-slate-900 border border-slate-850 rounded p-2.5 text-white focus:outline-none focus:border-teal-400 text-xs"
              />
            </div>

            {contactStatus.message && (
              <div className={`p-3 rounded text-xxs font-bold ${
                contactStatus.state === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
              }`}>
                {contactStatus.message}
              </div>
            )}

            <button type="submit" className="py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold uppercase tracking-wider rounded">
              Submit Feedback
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 text-center text-xs text-slate-500 bg-slate-900">
        <p>© 2026 TransitFlow Bengaluru. Public transit monitoring systems.</p>
      </footer>

    </div>
  );
}
