import React, { useRef, useEffect, useState } from 'react';
import { ShieldCheck, Compass, Award, Globe } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

function Counter({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (isNaN(end) || start === end) return;

      const stepTime = 30; // Milliseconds per update
      const steps = Math.ceil((duration * 1000) / stepTime);
      const increment = end / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.round(increment * currentStep));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function WhyChooseUs() {
  const listItems = [
    {
      title: 'Full Travel Protection',
      description: 'We insure and guarantee all tour itineraries, securing your trip deposits and travel assets.',
      icon: ShieldCheck
    },
    {
      title: 'Expert Professional Guides',
      description: 'Our certified local guides bring cultural destinations to life with deep local knowledge.',
      icon: Compass
    },
    {
      title: 'Award-Winning Operations',
      description: 'Recognized for excellence in private tours and custom travel design across 6 continents.',
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Travel Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Beautiful sunset beach travel location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent pointer-events-none" />
            </div>
            
            {/* Float badge */}
            <div className="absolute bottom-8 right-[-16px] md:right-[-24px] bg-accent text-white p-6 rounded-2xl shadow-xl max-w-xs space-y-1">
              <span className="block text-2xl font-display font-extrabold uppercase">100% Insured</span>
              <span className="block text-xs font-semibold text-white/80">Complete trip cancellation protection on all packages.</span>
            </div>
          </motion.div>

          {/* Right Column: Text & Checklist */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-display font-extrabold text-[10px] tracking-widest text-accent uppercase flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent" />
                Why Choose Us
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary tracking-tight leading-tight uppercase">
                We Create Unforgettable <br />
                Travel Memories
              </h2>
              <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
                LogiLink Travel designs bespoke vacation experiences tailored to your travel aspirations. From flight bookings to luxury hotel stays, we handle all details.
              </p>
            </div>

            {/* List */}
            <div className="space-y-6">
              {listItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-extrabold text-base text-primary">{item.title}</h3>
                      <p className="font-sans text-slate-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Row with count-ups */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="space-y-1">
                <span className="block font-display font-extrabold text-3xl md:text-4xl text-primary">
                  <Counter value="50" />k+
                </span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Happy Travelers</span>
              </div>
              <div className="space-y-1">
                <span className="block font-display font-extrabold text-3xl md:text-4xl text-primary">
                  <Counter value="120" />+
                </span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Destinations</span>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="block font-display font-extrabold text-3xl md:text-4xl text-primary">
                  <Counter value="15" />+
                </span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Years Excellence</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
