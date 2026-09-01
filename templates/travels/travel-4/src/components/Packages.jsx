import React from 'react';
import { Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: 'Northern Lights Expedition',
      location: 'Tromsø, Norway',
      image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=800&q=80',
      duration: '6 Days',
      groupSize: 'Max 12 People',
      price: '$1,850',
      rating: 5,
      tag: 'Best Seller'
    },
    {
      id: 2,
      title: 'Mediterranean Cruise & Island Hopping',
      location: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
      duration: '8 Days',
      groupSize: 'Max 15 People',
      price: '$2,299',
      rating: 5,
      tag: 'Cruises'
    },
    {
      id: 3,
      title: 'Bali Sanctuary & Temple Tour',
      location: 'Ubud, Indonesia',
      image: 'https://images.unsplash.com/photo-1537953773315-2213cdc686fc?auto=format&fit=crop&w=800&q=80',
      duration: '10 Days',
      groupSize: 'Max 10 People',
      price: '$1,450',
      rating: 5,
      tag: 'Wellness'
    },
    {
      id: 4,
      title: 'Inca Trail Mountain Trek',
      location: 'Cusco, Peru',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80',
      duration: '7 Days',
      groupSize: 'Max 8 People',
      price: '$1,699',
      rating: 4,
      tag: 'Adventure'
    }
  ];

  return (
    <section id="packages" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="font-display font-extrabold text-[10px] tracking-widest text-accent uppercase flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent" />
              Special Packages
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary tracking-tight leading-tight uppercase">
              Popular Tour Packages <br />
              For Every Traveler
            </h2>
          </div>
          <div>
            <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed max-w-sm mb-4">
              Carefully planned itineraries, handpicked local hotels, and dedicated expert guides.
            </p>
            <motion.a
              whileHover={{ x: 6 }}
              href="#destinations"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-accent hover:text-accent-hover transition-colors font-display uppercase tracking-wider text-xs"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(13, 27, 42, 0.05), 0 10px 10px -5px rgba(13, 27, 42, 0.02)' }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100/80 shadow-sm flex flex-col group h-full justify-between"
            >
              {/* Image & Price */}
              <div className="relative overflow-hidden aspect-[4/3] w-full shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-accent text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                  {pkg.tag}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Card Details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-primary shrink-0" />
                      {pkg.groupSize}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 font-semibold">{pkg.location}</span>
                    <h3 className="font-display font-extrabold text-base text-primary leading-snug group-hover:text-accent transition-colors">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < pkg.rating ? 'fill-current text-amber-500' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>

                {/* Footer Part */}
                <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Price Starts</span>
                    <span className="font-display font-extrabold text-lg text-accent">{pkg.price}</span>
                  </div>
                  
                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => alert(`View details for: ${pkg.title}`)}
                    className="bg-primary hover:bg-primary-light text-white font-display font-bold text-[10px] py-2.5 px-4 rounded-xl uppercase tracking-wider cursor-pointer shadow-sm transition-colors"
                  >
                    View Details
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
