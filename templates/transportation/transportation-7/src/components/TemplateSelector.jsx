import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Zap, Truck, Compass, Plane, Car, Info, ShieldCheck, Train, Ship, ExternalLink } from 'lucide-react';
import { voltwayImages } from '../data/voltwayImages';
import { roadlineImages } from '../data/roadlineImages';
import { fleetriseImages } from '../data/fleetriseImages';
import { skyrouteImages } from '../data/skyrouteImages';
import { citymoveImages } from '../data/citymoveImages';
import { transitflowImages } from '../data/transitflowImages';
import { cargomaxImages } from '../data/cargomaxImages';
import { rideoraImages } from '../data/rideoraImages';
import { railnovaImages } from '../data/railnovaImages';
import { oceanlinkImages } from '../data/oceanlinkImages';

const templates = [
  {
    id: "voltway",
    name: "VOLTWAY — Electric Mobility Hub",
    category: "Electric Mobility",
    status: "Premium",
    description: "A futuristic electric mobility portal featuring range calculators, charging location indicators, dynamic EV showcases, and high-fidelity scroll reveals.",
    path: "/voltway",
    image: voltwayImages.hero,
    accentColor: "text-blue-600 bg-blue-50/80 border border-blue-100",
    statusColor: "text-amber-700 bg-amber-50/80 border border-amber-100",
    icon: Zap
  },
  {
    id: "roadline",
    name: "ROADLINE — Intercity Travel Coach",
    category: "Intercity Travel",
    status: "Free",
    description: "A comfort-focused road transit booking interface with real-time route query engines, passenger seat map grids, and terminal schedules.",
    path: "/roadline",
    image: roadlineImages.hero,
    accentColor: "text-blue-600 bg-blue-50/80 border border-blue-100",
    statusColor: "text-emerald-700 bg-emerald-50/85 border border-emerald-100",
    icon: Compass
  },
  {
    id: "fleetrise",
    name: "FLEETRISE — Telemetry Control Center",
    category: "Fleet Management",
    status: "Premium",
    description: "A corporate telemetry dashboard with interactive vehicle coordinate maps, status diagnostic drawers, and real-time fleet efficiency counters.",
    path: "/fleetrise",
    image: fleetriseImages.hero,
    accentColor: "text-blue-600 bg-blue-50/80 border border-blue-100",
    statusColor: "text-amber-700 bg-amber-50/80 border border-amber-100",
    icon: Truck
  },
  {
    id: "skyroute",
    name: "SKYROUTE — Global Airlines Portal",
    category: "Air Transportation",
    status: "Premium",
    description: "An elegant, premium air transportation portal supporting cabin class upgrades (First, Business, Economy), mock flight log queries, and boarding schedules.",
    path: "/skyroute",
    image: skyrouteImages.hero,
    accentColor: "text-blue-600 bg-blue-50/80 border border-blue-100",
    statusColor: "text-amber-700 bg-amber-50/80 border border-amber-100",
    icon: Plane
  },
  {
    id: "citymove",
    name: "CITYMOVE — Shared Micro-Mobility",
    category: "Urban Mobility",
    status: "Free",
    description: "A young, neo-brutalist shared ride application including e-scooter QR triggers, smart-bike docks, and dynamic fare calculators.",
    path: "/citymove",
    image: citymoveImages.hero,
    accentColor: "text-blue-600 bg-blue-50/80 border border-blue-100",
    statusColor: "text-emerald-700 bg-emerald-50/85 border border-emerald-100",
    icon: Car
  },
  {
    id: "transitflow",
    name: "TRANSITFLOW — City Route Planner",
    category: "Public Transport",
    status: "Free",
    description: "An accessible city metro and bus timeline planner checking transit lines, schedule countdown signals, and service flags.",
    path: "/transitflow",
    image: transitflowImages.hero,
    accentColor: "text-blue-600 bg-blue-50/80 border border-blue-100",
    statusColor: "text-emerald-700 bg-emerald-50/85 border border-emerald-100",
    icon: Info
  },
  {
    id: "cargomax",
    name: "CARGOMAX — Heavy Freight Logistics",
    category: "Logistics & Freight",
    status: "Premium",
    description: "An industrial cargo shipping tracker showing supply chain checkpoints, freight weight calculation formulas, and operations statistics.",
    path: "/cargomax",
    image: cargomaxImages.hero,
    accentColor: "text-blue-600 bg-blue-50/80 border border-blue-100",
    statusColor: "text-amber-700 bg-amber-50/80 border border-amber-100",
    icon: ShieldCheck
  },
  {
    id: "rideora",
    name: "RIDEORA — Cab Request Engine",
    category: "Ride Booking",
    status: "Free",
    description: "A friendly, mobile-first smartphone simulated ride hailing engine with active driver assignments, boarding OTP details, and category upgrades.",
    path: "/rideora",
    image: rideoraImages.hero,
    accentColor: "text-blue-600 bg-blue-50/80 border border-blue-100",
    statusColor: "text-emerald-700 bg-emerald-50/85 border border-emerald-100",
    icon: Zap
  },
  {
    id: "railnova",
    name: "RAILNOVA — Premium Express Rail",
    category: "Rail Transportation",
    status: "Premium",
    description: "An editorial passenger train selector displaying seat layouts, PNR booking receipts, Vande Bharat schedules, and luxury amenities.",
    path: "/railnova",
    image: railnovaImages.hero,
    accentColor: "text-blue-600 bg-blue-50/80 border border-blue-100",
    statusColor: "text-amber-700 bg-amber-50/80 border border-amber-100",
    icon: Train
  },
  {
    id: "oceanlink",
    name: "OCEANLINK — Ocean Logistics",
    category: "Marine Logistics",
    status: "Premium",
    description: "A cinematic maritime cargo vessel fleet monitor supporting container route checkpoints, harbor ports charts, and cost estimates.",
    path: "/oceanlink",
    image: oceanlinkImages.hero,
    accentColor: "text-blue-600 bg-blue-50/80 border border-blue-100",
    statusColor: "text-amber-700 bg-amber-50/80 border border-amber-100",
    icon: Ship
  }
];

export default function TemplateSelector() {
  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        


        {/* Stack of Cards (1-Column layout matching design) */}
        <div className="flex flex-col gap-8">
          {templates.map((tpl, idx) => {
            return (
              <motion.div
                key={tpl.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col md:grid md:grid-cols-12 gap-8 shadow-sm shadow-slate-100 hover:shadow-md transition-shadow duration-305"
              >
                
                {/* Left Side: Overlapping Multi-Device Preview Container with Dotted Grid Background */}
                <div 
                  className="md:col-span-5 border border-slate-100 rounded-2xl p-6 relative flex items-center justify-center min-h-[220px] overflow-hidden group"
                  style={{
                    backgroundColor: '#f8fafc',
                    backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}
                >
                  
                  {/* Laptop/Tablet Mock Display */}
                  <div className="relative w-[72%] aspect-[16/10] bg-slate-950 border-[3.5px] border-slate-950 rounded-xl shadow-lg overflow-hidden -translate-x-6 -translate-y-2 transition-transform duration-500 group-hover:scale-102">
                    <img 
                      src={tpl.image} 
                      alt={tpl.name} 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                    />
                  </div>

                  {/* Overlapping Medium Phone Mock Display */}
                  <div className="absolute bottom-6 right-16 w-[22%] aspect-[9/18] bg-slate-950 border-[3px] border-slate-950 rounded-xl shadow-lg overflow-hidden translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-1">
                    <img 
                      src={tpl.image} 
                      alt={tpl.name} 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                    />
                  </div>

                  {/* Overlapping Small Phone Mock Display */}
                  <div className="absolute bottom-4 right-6 w-[18%] aspect-[9/18] bg-slate-950 border-[2.5px] border-slate-950 rounded-lg shadow-md overflow-hidden translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-3">
                    <img 
                      src={tpl.image} 
                      alt={tpl.name} 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                    />
                  </div>
                  
                </div>

                {/* Right Side: Text & CTA Button (col-span-7) */}
                <div className="md:col-span-7 flex flex-col justify-between py-1">
                  <div>
                    {/* Tags */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase ${tpl.accentColor}`}>
                        {tpl.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase ${tpl.statusColor}`}>
                        {tpl.status}
                      </span>
                    </div>

                    {/* Title (All-Caps Brand Name) */}
                    <h3 className="text-xl sm:text-2xl font-outfit font-extrabold tracking-tight text-slate-950 mb-1.5 uppercase">
                      {tpl.name}
                    </h3>

                    {/* Clock updated recently */}
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-4 font-mono">
                      <Clock size={12} /> Updated recently
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
                      {tpl.description}
                    </p>
                  </div>

                  {/* Live Demo CTA Button */}
                  <div className="flex justify-start">
                    <Link 
                      to={tpl.path}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] tracking-widest uppercase transition-colors shadow shadow-blue-600/10 w-full sm:w-auto"
                    >
                      LIVE DEMO <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center border-t border-slate-200 pt-8 text-xxs text-slate-400 font-light">
          <p>© 2026 Transportation Templates Hub. Designed exactly as specified.</p>
        </footer>

      </div>
    </div>
  );
}
