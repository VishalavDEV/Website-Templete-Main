import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, ShieldCheck, MapPin, Activity, ShieldAlert, BarChart3, ArrowLeft, Fuel, Gauge, User, ClipboardList, Info, ChevronRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fleetVehicles, fleetStats } from '../../data/fleetriseData';
import { fleetriseImages } from '../../data/fleetriseImages';

export default function Fleetrise() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedVehicle, setSelectedVehicle] = useState(fleetVehicles[0]);

  // Support Request state
  const [supportCategory, setSupportCategory] = useState('GPS Calibration');
  const [supportDesc, setSupportDesc] = useState('');
  const [supportStatus, setSupportStatus] = useState({ state: 'idle', message: '' });

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);

  const filteredVehicles = activeFilter === 'All' 
    ? fleetVehicles 
    : fleetVehicles.filter(v => v.status === activeFilter);

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    if (!supportDesc.trim()) {
      setSupportStatus({ state: 'error', message: 'Please specify the diagnostic/support details.' });
      return;
    }
    setSupportStatus({ state: 'submitting', message: '' });
    setTimeout(() => {
      setSupportStatus({
        state: 'success',
        message: `Telemetry ticket generated: SUP-${Math.floor(1000 + Math.random() * 9000)}. Diagnostics sent.`
      });
      setSupportDesc('');
    }, 1000);
  };

  const faqs = [
    { q: "What is the GPS polling interval on this control board?", a: "Telemetry boxes transmit coordinates every 3.5 seconds using national cellular networks, with satellite fallbacks for remote highway paths." },
    { q: "Can I remotely lock/disable a vehicle in an alert state?", a: "Yes, our Level-4 security modules support remote engine immobilizers, triggerable only by verified administrators." }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* Dashboard Header */}
      <header className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-900">
            <Truck size={20} />
          </div>
          <div>
            <h1 className="font-outfit font-black tracking-wider text-lg">FLEETRISE</h1>
            <span className="text-xxs text-cyan-400 font-mono tracking-widest block uppercase">Telemetry Control Center</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/transportation" className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-800 bg-slate-900 text-xs font-semibold text-slate-350 hover:text-white transition-all">
            <ArrowLeft size={12} /> Templates
          </Link>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Statistics Widgets */}
        <section className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xxs text-slate-500 uppercase font-bold tracking-wider">Active Fleets</span>
              <span className="text-2xl font-mono font-black text-white block mt-1">{fleetStats.active}</span>
            </div>
            <Activity className="text-emerald-400" size={24} />
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xxs text-slate-500 uppercase font-bold tracking-wider">Total Distance</span>
              <span className="text-2xl font-mono font-black text-white block mt-1">{fleetStats.totalDistance}</span>
            </div>
            <BarChart3 className="text-cyan-400" size={24} />
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xxs text-slate-500 uppercase font-bold tracking-wider">Avg Efficiency</span>
              <span className="text-2xl font-mono font-black text-white block mt-1">{fleetStats.avgFuelEfficiency}</span>
            </div>
            <Fuel className="text-blue-400" size={24} />
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xxs text-slate-500 uppercase font-bold tracking-wider">Maintenance Alerts</span>
              <span className="text-2xl font-mono font-black text-red-400 block mt-1">{fleetStats.maintenance}</span>
            </div>
            <ShieldAlert className="text-red-400 animate-pulse" size={24} />
          </div>
        </section>

        {/* Dashboard Title & Hero Details */}
        <section className="lg:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-slate-950 to-slate-900 p-6 rounded-2xl border border-slate-800">
          <div>
            <h2 className="text-3xl font-outfit font-black uppercase tracking-tight">ONE FLEET. COMPLETE CONTROL.</h2>
            <p className="text-slate-400 text-sm font-light mt-1">Real-time GPS tracking, speed diagnostics, fuel stats and driver telemetry analysis.</p>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-mono uppercase tracking-widest border border-cyan-400/20">
            Live Stream Connected
          </span>
        </section>

        {/* Filters and Vehicle List (5 Columns) */}
        <section className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar">
            {['All', 'Active', 'Idle', 'Maintenance', 'Offline'].map((status) => (
              <button
                key={status}
                onClick={() => setActiveFilter(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeFilter === status 
                    ? 'bg-cyan-500 text-slate-950' 
                    : 'bg-slate-950 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 overflow-y-auto max-h-[460px] pr-2 no-scrollbar">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedVehicle.id === vehicle.id 
                    ? 'border-cyan-500 bg-slate-800/80 shadow' 
                    : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white">{vehicle.id}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    vehicle.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' :
                    vehicle.status === 'Idle' ? 'bg-yellow-500/10 text-yellow-400' :
                    vehicle.status === 'Maintenance' ? 'bg-red-500/10 text-red-400' :
                    'bg-slate-500/10 text-slate-400'
                  }`}>
                    {vehicle.status}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-light">
                  <span>Driver: {vehicle.driver}</span>
                  <span className="font-mono text-cyan-400">{vehicle.speed}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Map Visual & Details Panel (7 Columns) */}
        <section className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Mock Map Component */}
          <div className="relative aspect-[16/9] bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_60%)] animate-pulse" />

            {/* Render Vehicle Positions */}
            {fleetVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle)}
                style={{ left: `${vehicle.coordinates.x}%`, top: `${vehicle.coordinates.y}%` }}
                className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 group"
                whileHover={{ scale: 1.3 }}
              >
                <div className={`h-4.5 w-4.5 rounded-full flex items-center justify-center border-2 border-slate-950 shadow-lg ${
                  vehicle.id === selectedVehicle.id ? 'bg-cyan-400 scale-125' :
                  vehicle.status === 'Active' ? 'bg-emerald-500' :
                  vehicle.status === 'Idle' ? 'bg-yellow-500' :
                  vehicle.status === 'Maintenance' ? 'bg-red-500' : 'bg-slate-500'
                }`}>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20" />
                </div>
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-950 text-[9px] font-mono font-bold rounded border border-slate-800 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                  {vehicle.id} ({vehicle.speed})
                </span>
              </motion.div>
            ))}

            <span className="absolute top-4 left-6 text-[10px] font-mono text-slate-500 uppercase font-bold">Interactive Telemetry GPS Map Grid</span>
          </div>

          {/* Detailed drawer panel */}
          <AnimatePresence mode="wait">
            {selectedVehicle && (
              <motion.div
                key={selectedVehicle.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 backdrop-blur-md"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Truck size={20} className="text-cyan-400" /> {selectedVehicle.id}
                    </h3>
                    <span className="text-xs text-slate-400 block mt-1">{selectedVehicle.type}</span>
                  </div>
                  <span className={`px-3 py-1 rounded text-xs font-bold ${
                    selectedVehicle.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' :
                    selectedVehicle.status === 'Idle' ? 'bg-yellow-500/10 text-yellow-400' :
                    selectedVehicle.status === 'Maintenance' ? 'bg-red-500/10 text-red-400' :
                    'bg-slate-500/10 text-slate-400'
                  }`}>
                    {selectedVehicle.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-slate-800/60 pb-6 mb-6">
                  <div className="flex flex-col gap-4 text-xs">
                    <div className="flex items-center gap-2.5">
                      <User size={16} className="text-slate-500" />
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-semibold">Assigned Driver</span>
                        <span className="font-semibold text-slate-200">{selectedVehicle.driver}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin size={16} className="text-slate-500" />
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-semibold">Last GPS Position</span>
                        <span className="font-semibold text-slate-250 leading-tight block">{selectedVehicle.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 text-xs">
                    <div className="flex items-center gap-2.5">
                      <ClipboardList size={16} className="text-slate-500" />
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-semibold">VIN Registry</span>
                        <span className="font-mono text-slate-200">{selectedVehicle.vin}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Info size={16} className="text-slate-500" />
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-semibold">Maintenance Schedule</span>
                        <span className="font-semibold text-slate-200">{selectedVehicle.maintenanceDue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-xs">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/40">
                    <span className="text-[10px] text-slate-500 block mb-1">SPEED</span>
                    <span className="font-mono text-base font-bold text-cyan-400">{selectedVehicle.speed}</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/40">
                    <span className="text-[10px] text-slate-500 block mb-1">FUEL LEVEL</span>
                    <span className="font-mono text-base font-bold text-white">{selectedVehicle.fuel}</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/40">
                    <span className="text-[10px] text-slate-500 block mb-1">EFFICIENCY</span>
                    <span className="font-mono text-base font-bold text-slate-300">{selectedVehicle.efficiency}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* FAQs Accordion */}
        <section className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-850">
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
            <Info size={18} className="text-cyan-400" /> Control FAQs
          </h3>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isExp = expandedFaq === idx;
              return (
                <div key={idx} className="border border-slate-800 rounded bg-slate-900/40 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(isExp ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs text-slate-200 flex justify-between items-center focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight size={14} className={`transform transition-transform ${isExp ? 'rotate-90 text-cyan-400' : 'text-slate-500'}`} />
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

        {/* Diagnostic/Support request Form */}
        <section className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-850">
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
            <ShieldAlert size={18} className="text-red-400" /> Telemetry Support Link
          </h3>
          <form onSubmit={handleSupportSubmit} className="flex flex-col gap-4 text-xs">
            <div>
              <label className="text-[10px] text-slate-500 uppercase block mb-1">Diagnostic Category</label>
              <select 
                value={supportCategory} 
                onChange={(e) => setSupportCategory(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded p-2.5 text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="GPS Calibration">GPS Calibration Failure</option>
                <option value="Fuel Sensor Drift">Fuel Sensor Drift</option>
                <option value="Driver Log mismatch">Driver Log Mismatch</option>
                <option value="Immobilizer override">Immobilizer Override</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] text-slate-500 uppercase block mb-1">Diagnostic Report / Support request *</label>
              <textarea 
                rows="3"
                value={supportDesc}
                onChange={(e) => setSupportDesc(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded p-2.5 text-white focus:outline-none focus:border-cyan-500"
                placeholder="Specify telemetry warning logs or vehicle IDs..."
              />
            </div>

            {supportStatus.message && (
              <div className={`p-3 rounded text-[11px] font-bold ${
                supportStatus.state === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
              }`}>
                {supportStatus.message}
              </div>
            )}

            <button type="submit" className="py-2.5 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold uppercase tracking-wider rounded">
              Launch Diagnostic Ticket
            </button>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-850 py-12 text-center text-xs text-slate-600 bg-slate-950">
        <p>© 2026 Fleetrise Corporate Telemetry. Secure data link with Indian National Grid.</p>
      </footer>

    </div>
  );
}
