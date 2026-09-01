import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Award, Heart, Globe, Plane } from 'lucide-react';

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-800 pt-28 pb-20 px-6">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Header Hero */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest font-heading">Our Philosophy</span>
          <h1 className="text-4xl sm:text-6xl font-heading font-black text-stone-850 mt-2 leading-tight">
            We don't just help you travel.<br />
            <span className="bg-gradient-to-r from-[#ff2a74] to-[#0066ff] bg-clip-text text-transparent">We help you experience the world.</span>
          </h1>
          <p className="text-sm sm:text-base text-stone-500 mt-6 leading-relaxed font-medium">
            Founded with a vision to replace boring, traditional booking lists with interactive visual travel journals. Wanderly coordinates flights, high-speed rail lines, and curated local walks into single-click day schedules.
          </p>
        </div>

        {/* 2. Visual Story Map Card */}
        <div className="bg-white border border-stone-200 p-8 rounded-3xl mb-16 relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-[10px] font-bold text-[#ff2a74] uppercase tracking-widest">Global Network</span>
              <h2 className="text-2xl font-heading font-extrabold text-stone-800 mt-1">Our Journey So Far</h2>
              <p className="text-xs text-stone-500 leading-relaxed font-medium mt-4">
                What started as a small local route builder in Chennai has grown into a world-class travel planner covering over 48 countries. Our route-solvers compile transit transfers automatically, pairing you with local guides for hikes, tea tastings, or sunset catamaran excursions.
              </p>
              
              <div className="flex gap-4 mt-6">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-150 shadow-sm">
                  <span className="text-xl font-heading font-black text-stone-800 block">12+</span>
                  <span className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Years of service</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-150 shadow-sm">
                  <span className="text-xl font-heading font-black text-[#ff2a74] block">48K+</span>
                  <span className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Happy Travelers</span>
                </div>
              </div>
            </div>

            {/* Travel Path Animation Visual */}
            <div className="relative h-48 bg-stone-50/50 border border-stone-200 rounded-2xl flex items-center justify-center p-6 shadow-inner">
              
              {/* Curve dotted flight path */}
              <div className="w-full h-px border-t border-dashed border-stone-300 relative flex justify-between px-6">
                
                {/* Traveler character emoji */}
                <motion.div
                  className="absolute top-[-10px] z-25 text-base"
                  animate={{
                    left: ['10%', '90%', '10%'],
                    y: [-1, 2, -1]
                  }}
                  transition={{
                    left: { repeat: Infinity, duration: 10, ease: 'easeInOut' },
                    y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' }
                  }}
                >
                  🚶
                </motion.div>

                {/* Nodes */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff2a74] border border-white -mt-1.5 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#0066ff] border border-white -mt-1.5 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-purple-500 border border-white -mt-1.5 shadow-sm" />
              </div>
              
              <div className="absolute bottom-4 text-[9px] text-stone-400 tracking-wider font-bold uppercase">Active Corridors Map</div>
            </div>
          </div>
        </div>

        {/* 3. Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Trusted Security', icon: ShieldCheck, color: 'text-emerald-500', desc: 'Secure encryption, medical transits, and verified resort lodgings.' },
            { title: 'Awarded Itineraries', icon: Award, color: 'text-[#ff2a74]', desc: 'Curated package routes recognized by global adventure travel registries.' },
            { title: 'Passionate Guides', icon: Heart, color: 'text-[#0066ff]', desc: 'Local advisors pointing out secret pathways, cafe tables, and scenic vistas.' }
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="p-6 bg-white rounded-3xl border border-stone-200 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className={`p-3 bg-stone-50 rounded-xl border border-stone-150 ${val.color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-stone-850">{val.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">{val.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
