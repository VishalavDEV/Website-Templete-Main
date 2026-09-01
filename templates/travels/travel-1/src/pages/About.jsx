import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Award, Heart, Sparkles, Smile } from 'lucide-react';

export default function About() {
  const cards = [
    { title: "Safe Travels", desc: "Full comprehensive coordinate mapping and certified local transport check-ins.", icon: ShieldCheck, color: "text-teal-400" },
    { title: "Elite Service", desc: "Pre-booked 5-star suites, private guides, and fast airport transfers.", icon: Award, color: "text-indigo-400" },
    { title: "Tailored Plans", desc: "Calculated in-memory timelines tailored directly to budgets and passenger seats.", icon: Sparkles, color: "text-amber-400" }
  ];

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300">Mission</span>
        </h1>
        <p className="text-slate-400 text-sm">
          We build interactive digital travelverse environments connecting travellers to global landscapes.
        </p>
      </div>

      {/* Main details with floating compass */}
      <div className="glass-panel rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 border border-slate-800">
        <div className="space-y-4 md:w-2/3">
          <h2 className="text-3xl font-extrabold text-white">Who We Are</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Founded in 2026, Travelverse was built to solve a major issue in tourism: boring static templates. We believe booking a trip should feel like a cinematic travel adventure itself.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            By combining high-fidelity graphics, animated flight paths, and a robust Java Spring Boot backend service, we construct seamless visual journeys from departure to destination arrival.
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <motion.div
            animate={{ 
              rotate: 360,
              y: [0, -10, 0]
            }}
            transition={{ 
              rotate: { repeat: Infinity, duration: 25, ease: 'linear' },
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
            }}
            className="w-40 h-40 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shadow-2xl"
          >
            <Compass className="w-20 h-20" />
          </motion.div>
        </div>
      </div>

      {/* 3D-styled cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ 
                rotateY: 8,
                rotateX: -4,
                y: -6 
              }}
              className="glass-panel rounded-3xl p-6 border border-slate-800 shadow-lg flex flex-col justify-between h-56 transition-transform duration-300"
            >
              <div className={`p-3 rounded-2xl bg-slate-950 w-12 h-12 flex items-center justify-center ${c.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-100 text-base">{c.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
