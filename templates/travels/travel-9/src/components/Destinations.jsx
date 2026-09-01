import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      city: 'Paris, France',
      price: '$850',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
      rating: '4.9'
    },
    {
      id: 2,
      city: 'Cairo, Egypt',
      price: '$620',
      image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80',
      rating: '4.7'
    },
    {
      id: 3,
      city: 'London, UK',
      price: '$790',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&w=600&q=80',
      rating: '4.8'
    },
    {
      id: 4,
      city: 'New York, USA',
      price: '$990',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
      rating: '4.9'
    }
  ];

  return (
    <section id="destinations" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-black text-xs tracking-wider text-[#2563EB] uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-[#2563EB]" />
            Popular Destinations
            <span className="w-8 h-[2px] bg-[#2563EB]" />
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-[#0F172A] tracking-tight uppercase leading-tight">
            Top Visited Cities
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            Discover the world's most iconic city landscapes. Book custom-arranged landmark excursions with fully coordinated flight routes.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between h-full group cursor-pointer"
            >
              {/* Landmark Image */}
              <div className="relative overflow-hidden aspect-[4/3] w-full shrink-0">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                
                {/* Price starting badge */}
                <div className="absolute top-4 right-4 bg-[#FACC15] text-[#0F172A] font-sans font-black text-[10px] uppercase py-1.5 px-3.5 rounded-full shadow-md">
                  {dest.price} <span className="font-medium text-[8px] text-slate-700">Start</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-[#0F172A]">
                    <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span className="font-sans font-bold text-sm tracking-tight">{dest.city}</span>
                  </div>
                  <span className="text-[10px] font-black text-amber-500">⭐ {dest.rating}</span>
                </div>
                
                <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-[#2563EB] uppercase tracking-wider group-hover:text-[#1E3A8A] transition-colors">
                  <span>Explore Landmarks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
