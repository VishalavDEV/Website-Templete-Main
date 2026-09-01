import React from 'react';
import { motion as m } from 'framer-motion';
import { Lightbulb, Compass, Award, Users, Rocket, Heart, Star, Target, Shield, Sparkles } from 'lucide-react';

const JOURNEY_STAGES = [
  { id: 1, title: "Idea", description: "Our founding principle: build an educational environment where mathematical formulas, animations, and concepts live in visual motion rather than static text.", icon: Lightbulb, year: "2024" },
  { id: 2, title: "Learning", description: "We developed structured roadmaps connecting concepts chronologically, allowing students to progress logically from foundation to expertise.", icon: Compass, year: "2025" },
  { id: 3, title: "Innovation", description: "Integration of interactive whiteboard modules, live classrooms, and mock AI assistants to guide self-paced learning paths.", icon: Rocket, year: "Early 2026" },
  { id: 4, title: "Community", description: "Crossing 10K+ active students and mentors connecting and maintaining learning streaks in our interactive educational globe.", icon: Users, year: "Mid 2026" },
  { id: 5, title: "Future", description: "Expanding to quantum simulations and virtual reality labs, where student interactions will directly morph 3D models.", icon: Sparkles, year: "Beyond" }
];

export default function About() {
  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 font-outfit">
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Intro Banner */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider animate-pulse-slow"
          >
            Our Philosophy
          </m.div>
          <m.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-education-navy"
          >
            Learning in Motion
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-education-navy/70 leading-relaxed"
          >
            We believe education should react, adapt, and transform. MotionEdu is a digital universe constructed to make complex subjects visually intuitive.
          </m.p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl border border-sky-100 bg-white/50 backdrop-blur-sm space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 shadow-inner">
              <Target size={20} />
            </div>
            <h3 className="font-extrabold text-base text-education-navy">Our Mission</h3>
            <p className="text-xs text-education-navy/75 leading-relaxed">
              To lower the barrier to complex technical education (programming, AI, physics) by designing responsive, animated models that clarify equations and logic visually.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl border border-sky-100 bg-white/50 backdrop-blur-sm space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 shadow-inner">
              <Shield size={20} />
            </div>
            <h3 className="font-extrabold text-base text-education-navy">Our Vision</h3>
            <p className="text-xs text-education-navy/75 leading-relaxed">
              To build a global, decentralized virtual campus where students learn by exploring, manipulating variables in real-time, and verifying mastery via challenges.
            </p>
          </m.div>
        </div>

        {/* 2. SCROLL TIMELINE: Idea -> Learning -> Innovation -> Community -> Future */}
        <div className="space-y-10 pt-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-extrabold text-education-navy">Our Journey Path</h2>
            <p className="text-xs text-education-navy/60">A timeline of our visual education evolution.</p>
          </div>

          <div className="relative border-l border-dashed border-sky-200 pl-8 ml-4 space-y-10 py-4 max-w-2xl mx-auto">
            {JOURNEY_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <m.div
                  key={stage.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="relative group space-y-2"
                >
                  {/* Timeline point node */}
                  <div className="absolute -left-[45px] top-1.5 w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-400 to-cyan-400 text-white flex items-center justify-center shadow-md shadow-sky-100 group-hover:scale-108 transition-transform">
                    <Icon size={16} />
                  </div>

                  {/* Stage Text */}
                  <div className="space-y-1 font-outfit">
                    <span className="text-[10px] text-sky-500 font-extrabold tracking-wider">{stage.year}</span>
                    <h3 className="font-extrabold text-base text-education-navy">{stage.title}</h3>
                    <p className="text-xs text-education-navy/70 leading-relaxed max-w-lg">
                      {stage.description}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
