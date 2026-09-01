import React from 'react';
import { DollarSign, ShieldCheck, ShieldAlert, Award, Compass, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Best Price Guarantee',
      description: 'We offer competitive and transparent pricing on all tour packages with no hidden booking fees.',
      icon: DollarSign,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      id: 2,
      title: 'Expert Professional Guides',
      description: 'Our handpicked local expert guides bring history and culture to life with passion and knowledge.',
      icon: Compass,
      color: 'bg-[#EBE9FE] text-primary border-[#DCD9FE]',
    },
    {
      id: 3,
      title: '24/7 Premium Support',
      description: 'We are with you every step of the journey, offering round-the-clock safety and itinerary support.',
      icon: ShieldCheck,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 overflow-hidden relative">
      {/* Background shape */}
      <div className="absolute right-[-100px] top-[10%] w-[350px] h-[350px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-150px] bottom-[10%] w-[450px] h-[450px] rounded-full bg-accent/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Text & Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="font-sans font-bold text-xs tracking-widest text-primary uppercase">
              Why Choose Us
            </span>
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-slate-800 tracking-tight leading-tight">
              We Make Your Travel <br />
              Simple & Memorable
            </h2>
            <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
              With over 12 years of designing bespoke travel experiences, we understand what makes a vacation truly magical. Let us handle the details while you make the memories.
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200/60">
              <div className="space-y-1">
                <span className="block font-sans font-extrabold text-3xl text-primary">12+</span>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">Years Experience</span>
              </div>
              <div className="space-y-1">
                <span className="block font-sans font-extrabold text-3xl text-accent">99.8%</span>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">Customer Satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Blocks */}
          <div className="lg:col-span-7 space-y-6">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start transition-all"
                >
                  {/* Icon Wrapper with floating rotation animation on scroll/view */}
                  <motion.div 
                    initial={{ rotate: -15, scale: 0.8 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: 'spring', stiffness: 120 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${feat.color}`}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-lg text-slate-800">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-slate-500 text-xs md:text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
