import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star, ArrowRight, X, ShieldAlert, Award, Sparkles } from 'lucide-react';

export default function FeaturedTours() {
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    {
      id: 1,
      title: 'Wild Patagonia Summit Trek',
      description: 'Journey to the edge of the world. Traverse massive blue ice glaciers, hike past towering granite spires, and pitch camp beneath a canopy of southern hemisphere stars.',
      longDescription: 'Our Patagonia Expedition is designed for the bold. You will be guided by certified mountain professionals through rugged terrains. Highlights include hiking the famous W-Trek, standing at the base of the majestic Torres del Paine, and experiencing the incredible wind and wilderness of pristine South America. All camping gear, cooking logistics, and high-energy gourmet meals are included.',
      image: '/assets/mountain_hiking.jpg',
      duration: '7 Days',
      price: '$1,299',
      rating: 4.9,
      reviewsCount: 124,
      difficulty: 'Challenging',
      badge: 'Best Seller',
      badgeColor: 'bg-primary text-white',
      highlights: ['Certified Guides', 'All Gear Included', 'Pristine Wilderness'],
    },
    {
      id: 2,
      title: 'Maui Tube Riding & Surf School',
      description: 'Catch the ride of your life. Learn from professional tube riders, relax in a luxury seaside surf lodge, and experience the ultimate Hawaiian beach lifestyle.',
      longDescription: 'Surf under the Hawaiian sun with personal feedback from local champions. This tour is perfect for intermediate surfers looking to step up their game, or beginners looking for a rock-solid foundation. Includes daily coaching sessions, ocean photography of your rides, a sunset catamaran cruise, and traditional wood-fire beach luaus every evening.',
      image: '/assets/beach_surfing.jpg',
      duration: '5 Days',
      price: '$980',
      rating: 4.8,
      reviewsCount: 86,
      difficulty: 'Moderate',
      badge: 'Top Action',
      badgeColor: 'bg-secondary text-white',
      highlights: ['Local Pro Coaches', 'Video Analysis', 'Catamaran Cruise'],
    },
    {
      id: 3,
      title: 'Milky Way Wilderness Camping',
      description: 'Immerse in absolute silence. Camp at high altitudes under unpolluted night skies, capture the Milky Way, and gather around a crackling pine campfire.',
      longDescription: 'Escape light pollution completely. Guided by professional astronomers, we hike into dark-sky preserves. Learn deep-sky astrophotography, identify constellations with high-powered green lasers, and sleep in cozy, thermal-insulated alpine tents. Enjoy hot alpine cider and organic mountain-grown food prepared fresh over the coals.',
      image: '/assets/camping_stars.jpg',
      duration: '4 Days',
      price: '$650',
      rating: 5.0,
      reviewsCount: 42,
      difficulty: 'Easy to Moderate',
      badge: 'Stargazer Choice',
      badgeColor: 'bg-accent-yellow text-charcoal',
      highlights: ['Astro Equipment', 'Photography Lesson', 'Gourmet Campfire meals'],
    },
  ];

  // Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 18 },
    },
  };

  return (
    <>
      <section id="tours" className="py-24 px-6 md:px-12 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-3">
            Choose your thrill
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-charcoal">
            Featured Tour Packages
          </h2>
          <p className="text-gray-500 font-light mt-4">
            Curated adventure trails led by local experts. No hidden fees, maximum satisfaction guaranteed.
          </p>
        </div>

        {/* Tours Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 flex flex-col justify-between"
            >
              {/* Card Image header */}
              <div className="relative h-[240px] overflow-hidden group">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md ${tour.badgeColor}`}>
                    {tour.badge}
                  </span>
                </div>

                {/* Price Tag Overlay */}
                <div className="absolute bottom-4 right-4 bg-charcoal/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-white font-extrabold text-lg">
                  {tour.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Meta (Duration & Star Rating) */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-accent-yellow">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-charcoal font-bold text-xs">{tour.rating}</span>
                      <span className="text-gray-400 text-[10px]">({tour.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-xl text-charcoal uppercase leading-tight mb-3 hover:text-primary transition-colors duration-200">
                    {tour.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                    {tour.description}
                  </p>
                </div>

                {/* Details Button */}
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Level: {tour.difficulty}
                  </span>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTour(tour)}
                    className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary hover:text-primary-dark transition-colors"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </section>

      {/* Tour details Modal Overlay */}
      <AnimatePresence>
        {selectedTour && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTour(null)}
              className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 border border-gray-100 max-h-[90vh] flex flex-col"
            >
              {/* Header Image */}
              <div className="relative h-[250px] flex-shrink-0">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTour(null)}
                  className="absolute top-4 right-4 bg-black/55 backdrop-blur-md hover:bg-black/85 text-white p-2 rounded-full transition-colors border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Title & Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${selectedTour.badgeColor} mb-2 inline-block`}>
                    {selectedTour.badge}
                  </span>
                  <h3 className="font-extrabold text-2xl md:text-3xl uppercase tracking-tight">
                    {selectedTour.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                
                {/* Meta details */}
                <div className="flex flex-wrap gap-6 items-center border-b border-gray-100 pb-4 text-sm font-semibold">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Duration: {selectedTour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-accent-yellow">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-charcoal font-extrabold">{selectedTour.rating}</span>
                    <span className="text-gray-400 text-xs">({selectedTour.reviewsCount} verified reviews)</span>
                  </div>
                  <div className="text-gray-500">
                    Difficulty: <span className="text-primary font-bold">{selectedTour.difficulty}</span>
                  </div>
                </div>

                {/* Long description */}
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-800 uppercase tracking-wider text-xs">Adventure Overview</h4>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {selectedTour.longDescription}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-800 uppercase tracking-wider text-xs flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-accent-yellow" /> Experience Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedTour.highlights.map((highlight, idx) => (
                      <div key={idx} className="bg-gray-50 border border-gray-100 p-3 rounded-2xl flex items-center gap-2 text-xs font-semibold text-charcoal">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Booking bar */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-widest block">Total Price</span>
                    <span className="text-3xl font-extrabold text-primary">{selectedTour.price}</span>
                    <span className="text-[10px] text-gray-400 block font-light">Includes taxes and activities</span>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#customize"
                    onClick={() => setSelectedTour(null)}
                    className="bg-primary hover:bg-primary-dark text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full text-center shadow-lg shadow-primary/30"
                  >
                    Lock in Date
                  </motion.a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
