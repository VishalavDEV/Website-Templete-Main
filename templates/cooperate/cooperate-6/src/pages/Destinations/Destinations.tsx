import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Building2, Sparkles, Filter } from 'lucide-react';
import { destinationsData } from '../../data/destinations';
import SectionHeading from '../../components/ui/SectionHeading';

export default function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'Asia Pacific', 'Europe', 'North America', 'Middle East'];

  const filtered = selectedRegion === 'All'
    ? destinationsData
    : destinationsData.filter(d => d.region === selectedRegion);

  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#0A261F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              Global Metropolises
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              The World's Strategic Commercial Hubs.
            </h1>
            <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed font-light">
              Explore curated intelligence for the cities where international enterprise, governance, and capital converge.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#D8C3A8]/50">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#0F382E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E1412]">Filter by Region:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-[#0F382E] text-white shadow-md'
                    : 'bg-white text-[#3E5049] border border-[#D8C3A8]/60 hover:bg-[#F8F5EE]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <Link
              key={dest.id}
              to={`/destinations/${dest.slug}`}
              className="group rounded-3xl overflow-hidden bg-white border border-[#D8C3A8]/60 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1412]">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1412]/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F382E]/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {dest.region}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#DFBA58] font-semibold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.country}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold">{dest.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs sm:text-sm text-[#3E5049] line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {dest.bestFor.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-full bg-[#F8F5EE] border border-[#D8C3A8]/50 text-[11px] text-[#25332E]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#D8C3A8]/30 flex items-center justify-between mt-4">
                <span className="text-xs font-semibold text-[#8FA29A]">{dest.recommendedHotels.length} Partner Hotels</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F382E] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Hub <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
