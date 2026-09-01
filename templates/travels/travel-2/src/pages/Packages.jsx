import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Clock, Compass } from 'lucide-react';
import { fetchPackages } from '../services/api';

export default function Packages() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchPackages();
      setPackages(data);
    }
    loadData();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-850 pt-28 pb-20 px-6">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest font-heading">Pre-bundled Packages</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-stone-850 mt-1">
            Travel Packages.
          </h1>
          <p className="text-sm text-stone-500 mt-3 leading-relaxed font-medium">
            Take the hassle out of itinerary coordination. Select one of our premium, pre-bundled packages featuring guided walks, resort stays, and fast transits.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Header Banner */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-[10px] font-bold text-stone-800 bg-white/95 px-2.5 py-1 rounded-lg border border-stone-100 shadow-sm flex items-center gap-1">
                    <Clock size={10} className="text-[#ff2a74]" />
                    <span>{pkg.duration}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 z-20 text-white">
                  <span className="text-[9px] font-heading font-extrabold uppercase tracking-widest block text-[#ffcbd5]">{pkg.type}</span>
                  <h3 className="text-xl sm:text-2xl font-heading font-black mt-0.5">{pkg.title}</h3>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-stone-500 leading-relaxed font-medium mb-6">
                    {pkg.description}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff2a74] mb-3">Inclusions</h4>
                  
                  {/* Inclusions checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-stone-600">
                    {pkg.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="p-0.5 bg-emerald-50 border border-emerald-200 rounded text-emerald-600">
                          <Check size={10} className="stroke-[3]" />
                        </div>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing and Action Footer */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-stone-100">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Estimated Cost</span>
                    <span className="text-2xl font-heading font-black text-stone-850 mt-0.5 block">
                      ${pkg.price}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => navigate(`/planner?dest=${pkg.destinations.join(',')}`)}
                    className="btn-primary py-3 px-6 shadow-md"
                  >
                    Configure Custom Trip
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
