import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Layers, Sparkles } from 'lucide-react';

const FEATURED_EXPERIENCES = [
  {
    id: "ai-lab",
    num: "01",
    title: "AI Laboratory & Agentic Neural Systems",
    tagline: "Autonomous Agent Synthesizers",
    description: "Immerse yourself in real-time transformer architecture labs. Scholars train hyper-parameter models on a dedicated 5-petaflop supercluster while developing alignment safety layers.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    stats: "5 Petaflops • 24/7 Sandbox Access",
    link: "/programs"
  },
  {
    id: "digital-innovation",
    num: "02",
    title: "Digital Innovation & Spatial Computing",
    tagline: "Volumetric Interfaces & Extended Reality",
    description: "Pioneer zero-latency spatial user interfaces and dynamic 3D graphic shaders. Design spatial operating systems for next-generation hardware.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1200&q=80",
    stats: "Spatial Motion Rig • Haptic Neural Gloves",
    link: "/programs"
  },
  {
    id: "global-business",
    num: "03",
    title: "Global Business & Venture Engineering",
    tagline: "Algorithmic Capital Allocation",
    description: "Combine econometrics, tokenized capital markets, and automated platform governance. Build resilient business models backed by empirical simulation.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    stats: "150+ Venture Partners • $15M Seed Pool",
    link: "/programs"
  },
  {
    id: "creative-design",
    num: "04",
    title: "Creative Design & Generative Synthesis",
    tagline: "Human-Machine Aesthetic Symbiosis",
    description: "Explore the bounds of algorithmic typography, bio-synthetic materials, and generative audiovisual compositions with world-renowned design directors.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    stats: "12 Global Design Awards • 100% Studio Immersion",
    link: "/programs"
  },
  {
    id: "future-technologies",
    num: "05",
    title: "Future Technologies & Quantum Physics",
    tagline: "Sub-Atomic Telemetry & Superconductors",
    description: "Synthesize carbon-capture catalysts and optimize quantum error correction codes inside cryogenic research chambers.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    stats: "Cryogenic Optics • 1,000 Qubit Testbed",
    link: "/research"
  }
];

export default function LearningExperience() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = FEATURED_EXPERIENCES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_EXPERIENCES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FEATURED_EXPERIENCES.length) % FEATURED_EXPERIENCES.length);
  };

  return (
    <section className="py-24 relative bg-slate-950/80 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Layers className="w-4 h-4" />
              <span>EDITORIAL FEATURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Featured Learning Experiences.
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="p-3 rounded-full glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-electric-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-400">
              0{currentIndex + 1} / 0{FEATURED_EXPERIENCES.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="p-3 rounded-full glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-electric-400 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Large Editorial Split Layout: Image on Left + Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[480px]">
          
          {/* Left Large Media Container */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden glass-panel border border-white/10 min-h-[320px] lg:min-h-[480px] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Stats badge overlay */}
                <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl glass-panel border border-white/20 text-xs font-mono text-electric-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-electric-400 animate-pulse" />
                  <span>{currentSlide.stats}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Editorial Info Card */}
          <div className="lg:col-span-5 rounded-3xl glass-panel border border-white/10 p-8 sm:p-10 flex flex-col justify-between relative bg-slate-900/60">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-violetAccent-400">
                    {currentSlide.num}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-electric-500/20 text-electric-300 border border-electric-500/30">
                    FEATURED TRACK
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-violetAccent-400">
                    {currentSlide.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                    {currentSlide.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {currentSlide.description}
                </p>

                <div className="pt-6">
                  <button
                    onClick={() => navigate(currentSlide.link)}
                    data-cursor="EXPLORE"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-electric-600 to-violetAccent-600 hover:from-electric-500 hover:to-violetAccent-500 text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-electric-500/20 transition-all transform active:scale-98"
                  >
                    <span>EXPLORE THIS EXPERIENCE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Navigation Thumbnails Below Right Side */}
            <div className="flex items-center gap-2 pt-6 mt-6 border-t border-white/10 overflow-x-auto no-scrollbar">
              {FEATURED_EXPERIENCES.map((exp, idx) => (
                <button
                  key={exp.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all whitespace-nowrap ${
                    currentIndex === idx
                      ? 'bg-electric-500 text-white font-bold'
                      : 'bg-slate-950/60 text-slate-400 hover:text-white'
                  }`}
                >
                  {exp.num} {exp.title.split(' ')[0]}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
