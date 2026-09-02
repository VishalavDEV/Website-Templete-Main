import React, { useState } from 'react';
import { useWellness } from '../context/WellnessContext';
import {
  MapPin,
  Star,
  Clock,
  Heart,
  ExternalLink,
  Compass,
  Sparkles,
} from 'lucide-react';

export const NearbyView: React.FC = () => {
  const { nearbyLocations, toggleSaveLocation, showToast } = useWellness();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Places' },
    { id: 'gym', label: 'Gyms & Sanctuaries' },
    { id: 'yoga', label: 'Yoga Lofts' },
    { id: 'park', label: 'Botanical Parks' },
    { id: 'track', label: 'Running Tracks' },
    { id: 'healthy_food', label: 'Organic Harvest' },
    { id: 'event', label: 'Community Events' },
  ];

  const filteredLocations = nearbyLocations.filter((loc) => {
    const matchCategory = activeCategory === 'all' || loc.category === activeCategory;
    const matchQuery =
      !searchQuery.trim() ||
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchQuery;
  });

  const handleDirections = (name: string) => {
    showToast(`Opening walking directions to ${name}...`);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-[11px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Local Wellness Map & Directory
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Nearby Lifestyle Spaces
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Discover neighborhood outdoor tracks, bamboo yoga lofts, tree-canopied parks, and clean organic cafes.
          </p>
        </div>

        {/* Search input */}
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Filter by keyword (e.g. sauna, trail)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-rose-500 bg-white"
          />
        </div>
      </div>

      {/* Categories Horizontal Bar */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Interactive Map Mockup Strip */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm h-48 sm:h-56">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-200 flex items-center justify-center text-emerald-600 mb-2">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <h4 className="text-sm font-black text-slate-800">Visual Radius: Within 2.5 Miles of Downtown</h4>
          <p className="text-xs text-slate-500 max-w-sm mt-0.5">
            {filteredLocations.length} active wellness destinations plotted within walking and short cycling distance.
          </p>
        </div>

        {/* Decorative location marker pins on map canvas */}
        <div className="absolute top-8 left-12 bg-white px-2.5 py-1 rounded-full shadow-md border border-slate-200 text-[10px] font-bold text-slate-800 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-emerald-600" /> Equinox Sanctuary (0.6 mi)
        </div>
        <div className="absolute bottom-8 right-16 bg-white px-2.5 py-1 rounded-full shadow-md border border-slate-200 text-[10px] font-bold text-slate-800 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-rose-500" /> Botanical Park (1.2 mi)
        </div>
        <div className="hidden sm:flex absolute top-12 right-28 bg-white px-2.5 py-1 rounded-full shadow-md border border-slate-200 text-[10px] font-bold text-slate-800 items-center gap-1">
          <MapPin className="w-3 h-3 text-amber-500" /> Organic Kitchen (0.4 mi)
        </div>
      </div>

      {/* Locations Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLocations.map((loc) => (
          <div
            key={loc.id}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
          >
            {/* Image */}
            <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
              <img
                src={loc.imageUrl}
                alt={loc.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 px-2.5 py-0.5 rounded-full shadow-xs">
                  {loc.distanceMiles} Miles Away
                </span>
              </div>

              <button
                onClick={() => toggleSaveLocation(loc.id)}
                className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  loc.isSaved
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-white/80 text-slate-600 hover:bg-white'
                }`}
                title={loc.isSaved ? 'Saved to favorites' : 'Save location'}
              >
                <Heart className={`w-4 h-4 ${loc.isSaved ? 'fill-white' : ''}`} />
              </button>

              <div className="absolute bottom-3 left-4 flex items-center gap-1 bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-[10px] font-bold">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{loc.rating}</span>
                <span className="text-slate-300">({loc.reviewCount})</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {loc.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mt-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{loc.openHours}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium mt-2">
                  {loc.highlight}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {loc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">{loc.address}</span>
                <button
                  onClick={() => handleDirections(loc.name)}
                  className="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
