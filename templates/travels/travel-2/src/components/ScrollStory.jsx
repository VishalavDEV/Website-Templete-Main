import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollStory() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transformations for background scaling and text slides
  const scaleImage1 = useTransform(scrollYProgress, [0.1, 0.3], [1.1, 1]);
  const opacityText1 = useTransform(scrollYProgress, [0.1, 0.25, 0.3], [0, 1, 0]);
  const blurImage1 = useTransform(scrollYProgress, [0.25, 0.35], ["blur(0px)", "blur(10px)"]);

  const scaleImage2 = useTransform(scrollYProgress, [0.3, 0.55], [1.1, 1]);
  const opacityText2 = useTransform(scrollYProgress, [0.35, 0.48, 0.53], [0, 1, 0]);
  const blurImage2 = useTransform(scrollYProgress, [0.48, 0.58], ["blur(0px)", "blur(10px)"]);

  const scaleImage3 = useTransform(scrollYProgress, [0.55, 0.75], [1.1, 1]);
  const opacityText3 = useTransform(scrollYProgress, [0.58, 0.7, 0.75], [0, 1, 0]);
  const blurImage3 = useTransform(scrollYProgress, [0.7, 0.8], ["blur(0px)", "blur(10px)"]);

  const scaleImage4 = useTransform(scrollYProgress, [0.75, 0.95], [1.1, 1]);
  const opacityText4 = useTransform(scrollYProgress, [0.78, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full py-16">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest">Visual Storytelling</span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-stone-800 mt-1 tracking-tight">
          Travel Is More Than A Destination.
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#ff2a74] to-[#0066ff] mx-auto mt-4 rounded-full" />
      </div>

      {/* Sticky/Scroll Container */}
      <div className="relative h-[400vh] w-full">
        {/* Layer 1: Wake up somewhere beautiful */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ 
              scale: scaleImage1,
              filter: blurImage1
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80" 
              alt="Wake up somewhere beautiful"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
          </motion.div>
          
          <motion.div 
            className="relative z-10 text-center px-6 max-w-3xl"
            style={{ opacity: opacityText1 }}
          >
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight drop-shadow-md">
              "Wake up somewhere beautiful."
            </h3>
            <p className="text-white/80 text-sm md:text-lg mt-4 font-medium max-w-xl mx-auto">
              Open your eyes to misty alpine valleys and quiet seaside sunrises that make mornings magical.
            </p>
          </motion.div>
        </div>

        {/* Layer 2: Meet people you've never known */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center -mt-[100vh]">
          <motion.div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ 
              scale: scaleImage2,
              filter: blurImage2
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80" 
              alt="Meet people you've never known"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
          
          <motion.div 
            className="relative z-10 text-center px-6 max-w-3xl"
            style={{ opacity: opacityText2 }}
          >
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight drop-shadow-md">
              "Meet people you've never known."
            </h3>
            <p className="text-white/80 text-sm md:text-lg mt-4 font-medium max-w-xl mx-auto">
              Share tea with local shepherds, trade stories around camp bonfires, and make friendships that defy borders.
            </p>
          </motion.div>
        </div>

        {/* Layer 3: Try something you've never done */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center -mt-[100vh]">
          <motion.div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ 
              scale: scaleImage3,
              filter: blurImage3
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80" 
              alt="Try something you've never done"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
          </motion.div>
          
          <motion.div 
            className="relative z-10 text-center px-6 max-w-3xl"
            style={{ opacity: opacityText3 }}
          >
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight drop-shadow-md">
              "Try something you've never done."
            </h3>
            <p className="text-white/80 text-sm md:text-lg mt-4 font-medium max-w-xl mx-auto">
              Dive deep into coral reefs, trek active volcanic paths, or learn recipes from generational home kitchens.
            </p>
          </motion.div>
        </div>

        {/* Layer 4: Come home with a story */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center -mt-[100vh]">
          <motion.div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ scale: scaleImage4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80" 
              alt="Come home with a story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>
          
          <motion.div 
            className="relative z-10 text-center px-6 max-w-3xl"
            style={{ opacity: opacityText4 }}
          >
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight drop-shadow-md">
              "Come home with a story."
            </h3>
            <p className="text-white/80 text-sm md:text-lg mt-4 font-medium max-w-xl mx-auto">
              Pack your camera journals, carry back golden hours, and return as a traveler ready to inspire others.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
