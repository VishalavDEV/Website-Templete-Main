import React from 'react';
import { Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TourPackages() {
  const packages = [
    {
      id: 1,
      title: 'Northern Lights Expedition',
      location: 'Tromsø, Norway',
      image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=800&q=80',
      duration: '6 Days',
      groupSize: 'Max 12 People',
      price: '$1,850',
      rating: '4.9',
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
      rating: '4.8',
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
      rating: '4.9',
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
      rating: '4.7',
      tag: 'Adventure'
    }
  ];

  return (
    <section id="tours" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="font-sans font-bold text-xs tracking-widest text-primary uppercase">
              Special Packages
            </span>
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-slate-800 tracking-tight leading-tight">
              Curated Tour Packages <br />
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
              className="inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark transition-colors"
            >
              <span>View All Tour Packages</span>
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
              whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)' }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100/80 shadow-sm flex flex-col group h-full justify-between"
            >
              {/* Image & Price */}
              <div className="relative overflow-hidden aspect-[4/3] w-full shrink-0">
                <img
                  src={pkg.image}
                  alt={`Cover photo of ${pkg.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                  {pkg.tag}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Card Details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Metadata (Duration, Size) */}
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-accent shrink-0" />
                      {pkg.groupSize}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-400 font-semibold">{pkg.location}</span>
                    <h3 className="font-sans font-extrabold text-lg text-slate-800 leading-snug group-hover:text-primary transition-colors">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Footer Part */}
                <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Price Starts</span>
                    <span className="font-sans font-extrabold text-lg text-primary">{pkg.price}</span>
                  </div>
                  
                  {/* Circular star rating */}
                  <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full font-extrabold text-xs">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                    <span>{pkg.rating}</span>
                  </div>
                </div>

                {/* Book Now Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => alert(`Booking started for: ${pkg.title}`)}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold text-xs py-3 px-4 rounded-xl mt-6 tracking-widest uppercase transition-colors shadow-sm shadow-primary/10 cursor-pointer"
                >
                  Book Tour Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
