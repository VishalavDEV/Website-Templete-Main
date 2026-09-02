import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Sliders, CheckCircle2, ChevronRight, Gift } from 'lucide-react';

function CountUp({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2.2,
        ease: "easeOut",
        onUpdate: (val) => setDisplayVal(Math.round(val))
      });
      return () => controls.stop();
    }
  }, [inView, to]);

  return <span ref={ref}>{displayVal}</span>;
}

export default function CustomizeCTA() {
  const [difficulty, setDifficulty] = useState('Moderate');
  const [terrain, setTerrain] = useState('Mountain');
  const [duration, setDuration] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="customize" className="py-24 px-6 md:px-12 bg-charcoal text-white overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-primary to-primary-dark rounded-[40px] overflow-hidden shadow-2xl relative border border-white/10">
          
          {/* Decorative background shape */}
          <div className="absolute right-0 top-0 w-[450px] h-[450px] bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Details & Customizer Interactive Form */}
            <div className="lg:col-span-7 p-8 md:p-16 space-y-8">
              
              {/* Badge & Discount */}
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-charcoal/40 border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-accent-yellow inline-flex items-center gap-2">
                  <Gift className="w-4 h-4 text-accent-yellow animate-bounce" />
                  Limited Time Offer
                </span>
                <div className="bg-accent-yellow text-charcoal font-black text-sm uppercase px-4 py-2 rounded-full flex items-center shadow-lg">
                  <CountUp to={25} />% OFF Custom Planning
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">
                  Design Your Perfect <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow to-white">
                    Custom Journey
                  </span>
                </h2>
                <p className="text-white/80 font-light text-sm md:text-base leading-relaxed max-w-lg">
                  Adjust coordinates, difficulties, and lengths. Our smart travel designers will outline a customized itinerary in less than 24 hours.
                </p>
              </div>

              {/* Interactive Customizer Panel */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-charcoal/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Terrain Picker */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-white/50 mb-3">
                        Terrain Preference
                      </label>
                      <div className="flex gap-2">
                        {['Mountain', 'Beach', 'Stars'].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTerrain(t)}
                            className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs uppercase transition-all ${
                              terrain === t 
                                ? 'bg-accent-yellow text-charcoal shadow-md shadow-accent-yellow/20' 
                                : 'bg-white/10 hover:bg-white/15 text-white'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Difficulty Picker */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-white/50 mb-3">
                        Vibe / Difficulty
                      </label>
                      <div className="flex gap-2">
                        {['Easy', 'Moderate', 'Expert'].map((d) => (
                          <button
                            key={d}
                            type="button"
                            onClick={() => setDifficulty(d)}
                            className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs uppercase transition-all ${
                              difficulty === d 
                                ? 'bg-accent-yellow text-charcoal shadow-md shadow-accent-yellow/20' 
                                : 'bg-white/10 hover:bg-white/15 text-white'
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Duration Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                        Trip Duration
                      </label>
                      <span className="text-sm font-extrabold text-accent-yellow">{duration} Days</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="14"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-yellow"
                    />
                  </div>

                  {/* Email & Submit */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="bg-white/10 border border-white/15 rounded-full py-3 px-5 text-sm placeholder-white/50 focus:outline-none focus:border-accent-yellow flex-grow text-white"
                    />
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={submitting}
                      className="bg-accent-yellow text-charcoal font-bold text-xs uppercase tracking-widest py-3 px-8 rounded-full shadow-lg shadow-accent-yellow/20 hover:bg-white transition-all flex items-center justify-center gap-1.5"
                    >
                      {submitting ? 'Planning...' : 'Generate Itinerary'}
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-accent-yellow text-charcoal rounded-full flex items-center justify-center mx-auto shadow-lg shadow-accent-yellow/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-accent-yellow">We Are Building It!</h3>
                  <p className="text-white/80 text-sm font-light max-w-sm mx-auto leading-relaxed">
                    We've registered your preferences: {duration} days of {difficulty} {terrain} adventure. Check your inbox for a draft timeline.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold underline text-white/60 hover:text-white mt-2"
                  >
                    Modify parameters
                  </button>
                </motion.div>
              )}

            </div>

            {/* Right Column: Visual Supporting Image */}
            <div className="lg:col-span-5 h-full min-h-[350px] lg:min-h-[600px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent lg:from-primary lg:via-primary/20 lg:to-transparent z-10 pointer-events-none" />
              <img
                src="./assets/tropical_lagoon.jpg"
                alt="Tropical Custom Adventure"
                className="w-full h-full object-cover absolute inset-0"
              />
              
              {/* Float Floating coordinates bubble */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 right-8 z-20 bg-charcoal/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white text-xs shadow-2xl max-w-[180px] hidden sm:block"
              >
                <div className="text-[10px] font-bold text-accent-yellow tracking-widest uppercase">Target Coordinates</div>
                <div className="font-extrabold text-sm mt-1">20.7984° N</div>
                <div className="font-extrabold text-sm">156.3319° W</div>
                <div className="text-[9px] text-white/50 mt-1 font-light">Custom Beach Retreats</div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
