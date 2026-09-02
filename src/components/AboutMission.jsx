import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Leaf, 
  Target, 
  Cpu, 
  Globe2,
  Users,
  Sprout
} from 'lucide-react';
import { aboutData } from '../data/content';

export default function AboutMission({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = aboutData.tabs.find(t => t.id === activeTab);

  return (
    <section id="about" className="py-24 bg-[#F4EFE6] relative overflow-hidden scroll-mt-20 md:scroll-mt-28">
      {/* Background organic shape */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Layered Image Collage */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Main Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] z-10">
                <img
                  src={aboutData.images.main}
                  alt="Farmer inspecting soil health with mobile IoT analytics"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-wheat-400 bg-forest-900/80 px-2.5 py-1 rounded-full backdrop-blur-md">
                    Regenerative Field Verification
                  </span>
                  <p className="text-sm font-medium mt-1 text-forest-100">
                    Willamette Valley Organic Pilot Research Facility
                  </p>
                </div>
              </div>

              {/* Offset Secondary Image (Bottom Right) */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <img
                  src={aboutData.images.secondary}
                  alt="Drone aerial telemetry over green agriculture crops"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating 15+ Years Badge (Top Left) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-6 -left-6 z-30 bg-forest-900 text-white p-5 rounded-2xl shadow-xl border border-forest-700/80 flex items-center gap-3.5"
              >
                <div className="w-12 h-12 rounded-xl bg-wheat-500 text-forest-950 flex items-center justify-center font-bold font-display text-2xl shadow-md">
                  15+
                </div>
                <div>
                  <div className="text-xs font-bold text-wheat-400 uppercase tracking-wider">Years of Rigor</div>
                  <div className="text-sm font-semibold text-white">Agronomy Innovation</div>
                </div>
              </motion.div>

              {/* Background decorative square */}
              <div className="absolute -top-8 -left-8 w-72 h-72 border-2 border-forest-300/40 rounded-3xl -z-0 hidden sm:block" />
            </motion.div>
          </div>

          {/* Right Column: Mission Content, Interactive Tabs & Bullet List */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 border border-forest-200 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4">
                <Sprout className="w-3.5 h-3.5 text-forest-700" />
                <span>{aboutData.badge}</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-[1.2] mb-5">
                {aboutData.title}
              </h2>

              {/* Narrative Text */}
              <p className="text-earth-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {aboutData.description}
              </p>

              {/* Interactive Tabs */}
              <div className="mb-6">
                <div className="flex border-b border-earth-100 space-x-4">
                  {aboutData.tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-2.5 text-sm font-bold tracking-wide transition-all relative ${
                        activeTab === tab.id
                          ? 'text-forest-800'
                          : 'text-earth-600 hover:text-forest-900'
                      }`}
                    >
                      {tab.title}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="aboutTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest-700 rounded-full"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-forest-100 mt-3 text-sm text-earth-800 leading-relaxed font-medium"
                  >
                    {tabContent?.content}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Structured Checklist Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {aboutData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-forest-100/60">
                    <CheckCircle2 className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-forest-950">{item.title}</h4>
                      <p className="text-[11px] text-earth-600 mt-0.5 leading-snug">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2.5 bg-forest-800 hover:bg-forest-900 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-glow-green transition-all transform hover:-translate-y-0.5"
                >
                  <span>Book a Field Diagnostic</span>
                  <ArrowRight className="w-4 h-4 text-wheat-400" />
                </button>

                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 text-forest-800 hover:text-forest-600 font-bold text-sm px-4 py-3 rounded-full hover:bg-white/50 transition-colors"
                >
                  <span>Calculate Farm Yield Potential</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
