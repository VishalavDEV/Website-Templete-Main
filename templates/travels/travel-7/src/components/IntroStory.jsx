import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function IntroStory() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Framed photo of two people */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Outline box behind the frame */}
            <div className="absolute top-6 left-6 w-[280px] h-[340px] border border-accent/20 rounded-3xl hidden sm:block pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
                alt="Two travelers looking at landscape map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
            </div>

            {/* Float badge */}
            <div className="absolute bottom-8 right-0 sm:right-[-12px] bg-accent text-white py-3 px-5 rounded-full shadow-lg text-xs font-bold uppercase tracking-wider">
              🏞️ Est. 2026 Journal
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <span className="font-display font-extrabold text-[10px] tracking-widest text-slate-400 uppercase">
                Dream Big / Live Big
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight leading-tight uppercase">
                Documenting the wild <br />
                corners of the world
              </h2>
            </div>
            
            <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed max-w-xl font-light">
              Hi, we are Alex and Emma. We quit our desk jobs in 2026 to travel full-time, seeking remote hiking trails, forgotten coastal towns, and authentic cultures. This blog is our digital logbook of stories, advice, and tips for fellow wanderers.
            </p>
            <p className="font-sans text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl font-light">
              Whether you are looking for guides to the Swiss Alps, weekend road trip packing lists, or survival camping checklists, we hope our tales inspire you to explore the wilder parts of this beautiful earth.
            </p>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#FF7F50', color: '#FF7F50' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert('Redirecting to full about page...')}
                className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl text-xs font-extrabold tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer font-display"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
