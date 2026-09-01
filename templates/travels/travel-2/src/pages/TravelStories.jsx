import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Clock, MapPin, ArrowUpRight, X } from 'lucide-react';
import { fetchStories } from '../services/api';

export default function TravelStories() {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchStories();
      setStories(data);
    }
    loadData();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-800 pt-28 pb-20 px-6">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest font-heading">Editorial Columns</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-stone-850 mt-1">
            Stories From The Road.
          </h1>
          <p className="text-sm text-stone-500 mt-3 leading-relaxed font-medium">
            Explore authentic logs, journals, and photographic records penned by travelers exploring coordinates around the globe.
          </p>
        </div>

        {/* Magazine Editorial Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {stories.length > 0 && (
            <>
              {/* Left Column: Highlight Featured Story (Large overlapping card) */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setSelectedStory(stories[0])}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-[420px] w-full overflow-hidden">
                    <img
                      src={stories[0].image}
                      alt={stories[0].title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <span className="absolute top-6 left-6 py-1.5 px-3.5 bg-[#ff2a74] text-white text-[9px] font-heading font-extrabold tracking-widest uppercase rounded-full shadow-sm">
                      Featured Journal
                    </span>
                  </div>

                  {/* Overlapping Content Box */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 text-[9px] font-extrabold text-stone-400 uppercase tracking-widest">
                        <MapPin size={9} className="text-[#ff2a74]" />
                        <span>{stories[0].location}</span>
                        <span>•</span>
                        <Clock size={9} className="text-[#0066ff]" />
                        <span>{stories[0].readTime}</span>
                      </div>
                      
                      <h2 className="font-heading font-black text-stone-850 text-2xl md:text-3xl mt-3 group-hover:text-[#ff2a74] transition-colors leading-tight">
                        {stories[0].title}
                      </h2>
                      
                      <p className="text-stone-500 text-xs md:text-sm mt-3 leading-relaxed font-medium">
                        {stories[0].excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-[#ff2a74] mt-6 tracking-wider uppercase group-hover:underline">
                      <span>Read Story</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Other Stories Vertical Sequence */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {stories.slice(1).map((story, sIdx) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: sIdx * 0.1 }}
                    onClick={() => setSelectedStory(story)}
                    className="group flex gap-4 p-4 bg-white hover:bg-stone-50/50 border border-stone-200/80 rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden rounded-xl border border-stone-100 shadow-sm relative">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex flex-col justify-between py-1 flex-1">
                      <div>
                        <div className="flex items-center gap-1.5 text-[8px] font-extrabold text-stone-400 uppercase tracking-widest">
                          <MapPin size={8} />
                          <span>{story.location}</span>
                          <span>•</span>
                          <span>{story.readTime}</span>
                        </div>
                        
                        <h3 className="font-heading font-extrabold text-stone-800 text-sm md:text-base group-hover:text-[#ff2a74] transition-colors leading-snug mt-1.5">
                          {story.title}
                        </h3>
                        
                        <p className="text-stone-500 text-[11px] leading-relaxed line-clamp-2 mt-1">
                          {story.excerpt}
                        </p>
                      </div>

                      <div className="text-[9px] font-extrabold text-[#ff2a74] uppercase tracking-wider flex items-center gap-0.5 mt-2 group-hover:underline">
                        <span>Read</span>
                        <ArrowUpRight size={10} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Floating Reader Lightbox Overlay Modal */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl relative border border-stone-200"
              >
                {/* Header Cover Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-[#ff2a74] hover:text-white text-stone-700 rounded-full shadow-md cursor-pointer border border-stone-200 transition-colors"
                  >
                    <X size={16} />
                  </button>

                  <span className="absolute bottom-4 left-6 py-1 px-3.5 bg-[#ff2a74] text-white text-[9px] font-heading font-extrabold tracking-widest uppercase rounded-full shadow-sm">
                    {selectedStory.category}
                  </span>
                </div>

                {/* Article body */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-[9px] font-extrabold text-stone-400 uppercase tracking-widest">
                    <MapPin size={9} className="text-[#ff2a74]" />
                    <span>{selectedStory.location}</span>
                    <span>•</span>
                    <Clock size={9} className="text-[#0066ff]" />
                    <span>{selectedStory.readTime}</span>
                    <span>•</span>
                    <span>By {selectedStory.author}</span>
                  </div>

                  <h2 className="font-heading font-black text-stone-850 text-2xl md:text-3xl mt-4 leading-tight">
                    {selectedStory.title}
                  </h2>

                  <p className="text-[#ff2a74] font-medium text-xs md:text-sm italic mt-3 border-l-2 border-[#ff2a74] pl-3">
                    {selectedStory.excerpt}
                  </p>

                  <p className="text-stone-600 text-xs md:text-sm mt-6 leading-relaxed font-medium whitespace-pre-line">
                    {selectedStory.content}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
