import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Compass, Search, Smile } from 'lucide-react';
import axios from 'axios';
import EnvironmentAnimator from '../components/animations/EnvironmentAnimator';
import { MOCK_EXPERIENCES, MOCK_DESTINATIONS } from '../data/travelData';

export default function Experiences() {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState(MOCK_EXPERIENCES);
  const [selectedExp, setSelectedExp] = useState(MOCK_EXPERIENCES[0]);
  const [matchingDestinations, setMatchingDestinations] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/experiences')
      .then(res => {
        setExperiences(res.data);
        if (res.data.length > 0) {
          setSelectedExp(res.data[0]);
        }
      })
      .catch(err => {
        console.error("Error loading experiences page", err);
        setExperiences(MOCK_EXPERIENCES);
        setSelectedExp(MOCK_EXPERIENCES[0]);
      });
  }, []);

  // Sync matching destinations from chosen theme
  useEffect(() => {
    if (!selectedExp) return;
    axios.get('http://localhost:8080/api/destinations')
      .then(res => {
        // filter destinations matching selected theme keyword
        const key = selectedExp.name.toLowerCase();
        const matches = res.data.filter(d => {
          const desc = d.description.toLowerCase();
          const name = d.name.toLowerCase();
          const atts = d.attractions.map(a => a.toLowerCase()).join(' ');
          return desc.includes(key) || name.includes(key) || atts.includes(key) ||
                 (key === 'adventure' && d.name === 'Switzerland') ||
                 (key === 'beach' && (d.name === 'Maldives' || d.name === 'Goa' || d.name === 'Bali')) ||
                 (key === 'mountains' && d.name === 'Switzerland') ||
                 (key === 'culture' && (d.name === 'Rajasthan' || d.name === 'London' || d.name === 'Tokyo')) ||
                 (key === 'luxury' && (d.name === 'Dubai' || d.name === 'Paris'));
        });
        setMatchingDestinations(matches);
      })
      .catch(err => {
        console.error("Error syncing matching destinations", err);
        const key = selectedExp.name.toLowerCase();
        const matches = MOCK_DESTINATIONS.filter(d => {
          const desc = d.description.toLowerCase();
          const name = d.name.toLowerCase();
          const atts = d.attractions.map(a => a.toLowerCase()).join(' ');
          return desc.includes(key) || name.includes(key) || atts.includes(key) ||
                 (key === 'adventure' && d.name === 'Switzerland') ||
                 (key === 'beach' && (d.name === 'Maldives' || d.name === 'Goa' || d.name === 'Bali')) ||
                 (key === 'mountains' && d.name === 'Switzerland') ||
                 (key === 'culture' && (d.name === 'Rajasthan' || d.name === 'London' || d.name === 'Tokyo')) ||
                 (key === 'luxury' && (d.name === 'Dubai' || d.name === 'Paris'));
        });
        setMatchingDestinations(matches);
      });
  }, [selectedExp]);

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300">Experiences</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Hover over cards to see environmental particles (snow, ocean waves, stars). Select one to reveal themed destinations.
        </p>
      </div>

      {/* Grid of Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {experiences.map(exp => {
          const isSelected = selectedExp && selectedExp.id === exp.id;
          const isHovered = hoveredCard === exp.id;
          return (
            <div
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              onMouseEnter={() => setHoveredCard(exp.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-3xl h-60 border cursor-pointer overflow-hidden flex flex-col justify-end p-5 transition-all duration-300 ${
                isSelected 
                  ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Background cover image */}
              <img
                src={exp.bannerImage}
                alt={exp.name}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Environmental Animator Canvas on Hover */}
              <EnvironmentAnimator 
                type={exp.animationConfig} 
                active={isHovered || isSelected} 
              />

              {/* Copy */}
              <div className="relative z-20 space-y-1">
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r ${exp.themeColor} text-white`}>
                  {exp.name}
                </span>
                <p className="text-[10px] text-slate-400 font-light line-clamp-2">{exp.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expand Theme Destinations section */}
      <AnimatePresence mode="wait">
        {selectedExp && (
          <motion.div
            key={selectedExp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-panel rounded-3xl p-8 space-y-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-900 pb-5">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-white">{selectedExp.name} Packages</h3>
                <p className="text-slate-400 text-xs">Destinations matching this travel category layout.</p>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${selectedExp.themeColor}`}>
                Theme: {selectedExp.name}
              </span>
            </div>

            {/* List Matching Destination Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingDestinations.map(dest => (
                <div
                  key={dest.id}
                  onClick={() => navigate(`/destinations/${dest.id}`)}
                  className="glass-panel-light rounded-2xl overflow-hidden cursor-pointer group border border-slate-800 flex items-center p-3 space-x-4 hover:border-slate-700 transition-colors"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-100 group-hover:text-indigo-400 transition-colors text-sm">{dest.name}</h4>
                    <span className="text-[10px] text-slate-500 flex items-center">
                      <MapPin className="w-3 h-3 mr-0.5 text-teal-400" />
                      {dest.country}
                    </span>
                  </div>
                </div>
              ))}

              {matchingDestinations.length === 0 && (
                <div className="col-span-full text-center py-10 text-slate-500 space-y-2">
                  <Smile className="w-8 h-8 mx-auto" />
                  <p className="text-xs">No matching destinations loaded. Check back later.</p>
                </div>
              )}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
