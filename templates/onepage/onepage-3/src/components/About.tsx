"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-nye-light text-nye-dark dark:bg-nye-dark dark:text-nye-light overflow-hidden border-b border-nye-dark/10 dark:border-nye-light/10">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Block: Content */}
          <div className="lg:col-span-6">
            <span className="text-xs font-black tracking-widest text-nye-orange uppercase block mb-3">07 / BELIEF</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase mb-8">
              WE LIKE <br />
              DIFFICULT BRIEFS.
            </h2>
            
            <p className="text-lg md:text-xl font-bold leading-relaxed text-nye-dark dark:text-nye-light mb-6">
              &quot;We combine strategy, design and technology to build brands and digital experiences that have a reason to exist.&quot;
            </p>

            <div className="flex flex-col gap-4 text-sm text-nye-dark/70 dark:text-nye-light/70 leading-relaxed font-medium">
              <p>
                We do our best work when the challenge is complex and the stakes are high. We help clients navigate shifting markets, legacy system rebuilds, and brand resets.
              </p>
              <p>
                We believe that premium aesthetics without technical integrity is a failure of design. Our codebases are written with the same extreme diligence as our visual guidelines.
              </p>
            </div>
          </div>

          {/* Right Block: Image Collage */}
          <div className="lg:col-span-6 relative w-full h-[450px] md:h-[500px]">
            
            {/* Image 1: Main Studio Image (large, center-left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute top-0 left-0 w-[65%] aspect-[4/5] rounded-2xl overflow-hidden bg-nye-teal shadow-xl border border-nye-dark/10 z-20 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
                alt="Studio setup" 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
            </motion.div>

            {/* Image 2: Team workspace (smaller, top-right) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20, rotate: 4 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute top-10 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden bg-nye-orange shadow-xl border border-nye-dark/10 z-30 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop"
                alt="Team working" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Graphic Accent Card (bottom-right) */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute bottom-4 right-8 w-[40%] aspect-[4/3] bg-nye-purple rounded-2xl shadow-xl z-30 flex flex-col justify-between p-6 text-nye-light border border-nye-light/10"
            >
              <div className="text-[9px] font-mono tracking-widest text-nye-mauve">CRAFTED / 26</div>
              <div>
                <div className="text-xl font-black tracking-tight leading-none uppercase mb-1">INTENT AGENCY</div>
                <div className="text-[8px] font-bold tracking-widest text-nye-orange uppercase">MADE WITH INTENT.</div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
