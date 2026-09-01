import React from 'react';
import { Calendar, Clock, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: 'Grand European Landmark Excursion',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
      duration: '7 Days / 6 Nights',
      price: '$1,450',
      rating: '4.9',
      badge: 'Bestseller'
    },
    {
      id: 2,
      title: 'Ancient Wonders of Egypt Expedition',
      image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80',
      duration: '9 Days / 8 Nights',
      price: '$1,280',
      rating: '4.8',
      badge: 'Popular'
    },
    {
      id: 3,
      title: 'UK & London Heritage Sightseeing',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&w=600&q=80',
      duration: '8 Days / 7 Nights',
      price: '$1,390',
      rating: '4.7',
      badge: 'Elite Tour'
    }
  ];

  return (
    <section id="packages" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-black text-xs tracking-wider text-[#2563EB] uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-[#2563EB]" />
            Signature Packages
            <span className="w-8 h-[2px] bg-[#2563EB]" />
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-[#0F172A] tracking-tight uppercase leading-tight">
            Curated Tour Packages
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            Explore our bestselling multi-day travel packages. Every booking includes premium hotels, flights, and professional city guides.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg flex flex-col justify-between h-full group cursor-pointer"
            >
              {/* Image Block */}
              <div className="relative overflow-hidden aspect-[16/10] w-full shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-[#2563EB] text-white text-[9px] font-black uppercase py-1 px-3 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              </div>

              {/* Body Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  
                  {/* Rating + Duration */}
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#2563EB]" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      {pkg.rating}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-black text-lg text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors">
                    {pkg.title}
                  </h3>
                </div>

                {/* Footer details */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Starting from</span>
                    <span className="text-2xl font-black text-[#2563EB] mt-1">{pkg.price}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#2563EB', color: '#ffffff' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => alert(`Showing details for: ${pkg.title}`)}
                    className="border border-[#2563EB] text-[#2563EB] font-sans font-black text-[10px] uppercase py-3 px-5 rounded-full flex items-center gap-1 cursor-pointer transition-colors shadow-sm"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
