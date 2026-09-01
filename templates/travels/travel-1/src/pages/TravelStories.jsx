import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, X, Play, MapPin, Camera, ChevronRight, ChevronLeft } from 'lucide-react';

export default function TravelStories() {
  const [activeStory, setActiveStory] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const stories = [
    {
      id: 1,
      name: "Sarah Jenkins",
      country: "Switzerland",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      slides: [
        { title: "Scenic Swiss Train", desc: "Boarding the glacier express train towards Zermatt peaks.", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80" },
        { title: "Matterhorn Peak", desc: "Arrived at the snow-capped mountain ridge. Unbelievable crisp weather.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
        { title: "Alpine Resort", desc: "Checking in to the Grand Alps Thermal Resort. Hot outdoor pool ready.", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80" },
        { title: "Hiking the Glaciers", desc: "Trekking through ice tunnels and pine trails.", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" },
        { title: "Classic Photography", desc: "Capturing memories of the Matterhorn silhouette at sunset.", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      country: "Dubai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      slides: [
        { title: "Helicopter Departure", desc: "Gliding high above the futuristic skyscrapers.", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" },
        { title: "Burj Khalifa VIP", desc: "Stunning 148th floor view of the desert oasis skyline.", img: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=800&q=80" },
        { title: "Atlantis The Royal", desc: "Staying at the ultimate resort. Butler service is pristine.", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80" },
        { title: "Desert Dunes Safari", desc: "Bashing red dunes on quads, then fine traditional dining.", img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80" },
        { title: "Yacht Sunset Party", desc: "Sailing next to Palm Jumeirah at golden hour.", img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      id: 3,
      name: "Elena Rostova",
      country: "Maldives",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      slides: [
        { title: "Speedboat Transfer", desc: "Dashing across deep blue waters towards our resort.", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80" },
        { title: "Overwater Bungalow", desc: "Direct slide from bed into the ocean. Pure paradise.", img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80" },
        { title: "Snorkeling reef", desc: "Swimming alongside turtles and manta rays in crystal water.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
        { title: "Island Campfire", desc: "Private bbq campfire on a deserted sandbank under the stars.", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80" },
        { title: "Seaplane Photography", desc: "Snapping aerial grid views of the beautiful coral atolls.", img: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80" }
      ]
    }
  ];

  // Story Autoplay sequence
  useEffect(() => {
    if (activeStory === null) return;
    const currentStory = stories.find(s => s.id === activeStory);
    
    const timer = setTimeout(() => {
      if (slideIndex < currentStory.slides.length - 1) {
        setSlideIndex(prev => prev + 1);
      } else {
        // Story finished, close
        setActiveStory(null);
        setSlideIndex(0);
      }
    }, 4500); // 4.5s slide duration

    return () => clearTimeout(timer);
  }, [activeStory, slideIndex]);

  const handleNextSlide = () => {
    const currentStory = stories.find(s => s.id === activeStory);
    if (slideIndex < currentStory.slides.length - 1) {
      setSlideIndex(prev => prev + 1);
    } else {
      setActiveStory(null);
      setSlideIndex(0);
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(prev => prev - 1);
    }
  };

  const startStory = (id) => {
    setActiveStory(id);
    setSlideIndex(0);
  };

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Traveller <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">Stories</span>
        </h1>
        <p className="text-slate-600 text-sm">
          Click on bubbles to experience the full sequential trip slides matching their vacation routes.
        </p>
      </div>

      {/* Highlights circular grid */}
      <div className="flex justify-center space-x-8 py-6">
        {stories.map(s => (
          <div 
            key={s.id} 
            onClick={() => startStory(s.id)}
            className="flex flex-col items-center space-y-2 cursor-pointer group"
          >
            <div className="w-20 h-20 rounded-full p-1 border-2 border-dashed border-indigo-500 group-hover:rotate-45 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden border border-slate-950">
                <img src={s.avatar} alt={s.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xs font-bold text-slate-700 group-hover:text-indigo-650 transition-colors">{s.name.split(' ')[0]}</h4>
              <span className="text-[9px] text-slate-500 uppercase font-semibold">{s.country}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Story board mockups list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {stories.map(s => (
          <div
            key={s.id}
            onClick={() => startStory(s.id)}
            className="glass-panel rounded-3xl overflow-hidden cursor-pointer group border border-slate-200 flex flex-col justify-between"
          >
            <div className="relative h-48">
              <img src={s.slides[0].img} alt={s.name} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-slate-950/20" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h4 className="font-extrabold text-sm text-slate-800">{s.name}'s Route</h4>
              <p className="text-[10px] text-slate-500">Sequence: Transit → Mountains → Resort → Hike → Photo</p>
            </div>
          </div>
        ))}
      </div>

      {/* INTERACTIVE FULLSCREEN STORY VIEWER MODAL */}
      <AnimatePresence>
        {activeStory !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center p-4 dark-section"
          >
            {/* Background blurred slide */}
            <div className="absolute inset-0 filter blur-xl opacity-35 scale-110 pointer-events-none">
              <img 
                src={stories.find(s => s.id === activeStory).slides[slideIndex].img} 
                alt="blur" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main story box */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-lg h-[80vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between"
            >
              {/* TOP STORY HEADER AND BARS */}
              <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-slate-950/80 to-transparent space-y-3">
                {/* Horizontal progress bar indicators */}
                <div className="flex space-x-1.5">
                  {stories.find(s => s.id === activeStory).slides.map((_, i) => (
                    <div key={i} className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-teal-400"
                        style={{
                          width: slideIndex > i ? '100%' : slideIndex === i ? '100%' : '0%',
                          transition: slideIndex === i ? 'width 4.5s linear' : 'none'
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={stories.find(s => s.id === activeStory).avatar} 
                      alt="avatar" 
                      className="w-8 h-8 rounded-full border border-indigo-400"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white">{stories.find(s => s.id === activeStory).name}</h4>
                      <span className="text-[8px] text-slate-400 uppercase tracking-widest flex items-center">
                        <MapPin className="w-2.5 h-2.5 mr-0.5" />
                        {stories.find(s => s.id === activeStory).country}
                      </span>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setActiveStory(null); setSlideIndex(0); }}
                    className="text-slate-400 hover:text-white p-1 rounded-full bg-slate-950/40"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* SLIDE IMAGE */}
              <div className="relative w-full h-full pointer-events-auto">
                <img 
                  src={stories.find(s => s.id === activeStory).slides[slideIndex].img} 
                  alt="slide" 
                  className="w-full h-full object-cover"
                />
                
                {/* Visual grid dark mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />

                {/* Left/Right Tap Zones for manual clicks */}
                <div className="absolute inset-0 z-20 flex">
                  <div className="w-1/2 h-full cursor-west-resize" onClick={handlePrevSlide} />
                  <div className="w-1/2 h-full cursor-east-resize" onClick={handleNextSlide} />
                </div>

                {/* SLIDE COPY */}
                <div className="absolute bottom-6 left-6 right-6 z-30 space-y-2 pointer-events-none">
                  <span className="bg-indigo-500/80 backdrop-blur-sm text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full text-white inline-flex items-center">
                    <Camera className="w-3 h-3 mr-1" />
                    {stories.find(s => s.id === activeStory).slides[slideIndex].title}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed drop-shadow-md">
                    {stories.find(s => s.id === activeStory).slides[slideIndex].desc}
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
