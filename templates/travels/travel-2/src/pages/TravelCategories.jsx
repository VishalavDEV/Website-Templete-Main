import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, Compass, ArrowLeft } from 'lucide-react';
import { fetchDestinations } from '../services/api';

export default function TravelCategories() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchDestinations();
      setDestinations(data);
    }
    loadData();
  }, []);

  useEffect(() => {
    if (!name || destinations.length === 0) return;
    const result = destinations.filter(
      (d) => Array.isArray(d.category)
        ? d.category.some(cat => cat.toLowerCase() === name.toLowerCase())
        : d.category.toLowerCase() === name.toLowerCase()
    );
    setFiltered(result);
  }, [name, destinations]);

  const getThemeText = (catName) => {
    switch (catName.toLowerCase()) {
      case 'beach': return 'Sun, warm sand, and crystal blue ocean lagoons.';
      case 'mountains': return 'Snow-capped alpine ridges and silent mountain valleys.';
      case 'adventure': return 'Extreme mountain trails, active volcano treks and desert dunes.';
      case 'cities': return 'Cobblestone streets, skyscrapers, and neon skyline views.';
      case 'luxury': return 'Premium private yacht charters and VIP resorts.';
      default: return 'Explore hand-selected coordinates from our catalog.';
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-850 pt-28 pb-20 px-6">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation back */}
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-[#ff2a74] mb-6 transition-colors font-bold uppercase tracking-wider">
          <ArrowLeft size={12} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest font-heading">Categories Catalog</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-stone-850 mt-1 capitalize">
            {name} Journeys.
          </h1>
          <p className="text-sm text-stone-500 mt-3 leading-relaxed font-medium">
            {getThemeText(name || '')} Browse through our curated travel listings matching this catalog category.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.length > 0 ? (
            filtered.map((dest) => (
              <div
                key={dest.id}
                className="group bg-white rounded-3xl border border-stone-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => navigate(`/destinations/${dest.id}`)}
                data-cursor="pin"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent z-10" />
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[9px] font-extrabold text-[#ff2a74] uppercase tracking-wider">
                      <MapPin size={9} />
                      <span>{dest.country}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-stone-800 text-base mt-1 group-hover:text-[#ff2a74] transition-colors">
                      {dest.name}
                    </h3>
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-stone-100">
                    <div className="flex items-center gap-1 text-[#ff2a74]">
                      <Star size={12} className="fill-current" />
                      <span className="text-[11px] font-bold text-stone-700">{dest.rating}</span>
                    </div>
                    <span className="text-sm font-heading font-black text-stone-850">
                      ${dest.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white border border-stone-200 rounded-3xl shadow-sm">
              <Compass size={28} className="text-[#ff2a74] animate-spin mx-auto mb-3" style={{ animationDuration: '8s' }} />
              <p className="text-xs text-stone-500 font-medium">No destinations loaded in this category yet. Explore other categories.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
