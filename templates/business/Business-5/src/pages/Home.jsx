import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Layers, Globe, ArrowRight, Quote } from 'lucide-react';
import { lumoraData } from '../lumoraData';
import client from '../api/client';
import AnimatedCounter from '../components/AnimatedCounter';
import TiltCard from '../components/TiltCard';

export default function Home() {
  const { hero, whatWeBuild, numbers } = lumoraData;
  const [testimonials, setTestimonials] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    client.get('/testimonials')
      .then((res) => {
        if (res.data && res.data.success) {
          setTestimonials(res.data.data);
        }
      })
      .catch((err) => {
        console.error('Failed to load testimonials, fallback to local', err);
        setTestimonials(lumoraData.successStories || []);
      });
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-0 bg-white text-slate-800 relative overflow-hidden"
    >
      {/* Decorative Gradient Background Orbs */}
      <div className="absolute top-[-10%] left-[-20%] w-[60%] aspect-square rounded-full bg-purple-200/30 blur-[120px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square rounded-full bg-indigo-200/20 blur-[100px] pointer-events-none z-0" />

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        className="absolute top-44 left-10 w-16 h-16 rounded-full border border-purple-100 bg-purple-50/10 pointer-events-none z-0"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -45, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        className="absolute top-[60%] right-10 w-24 h-24 rounded-2xl border border-indigo-100 bg-indigo-50/10 pointer-events-none z-0"
      />

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-28 text-center flex flex-col items-center">
        {/* Floating SaaS Widget Left */}
        {hero.floatingCards[0] && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="absolute left-[-5%] bottom-[15%] bg-white p-5 border border-purple-100/60 shadow-2xl rounded-2xl max-w-[220px] hidden lg:flex items-start space-x-3 text-left select-none"
          >
            <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600 shrink-0">
              <Globe size={18} />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 leading-tight">{hero.floatingCards[0].title}</h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-none">{hero.floatingCards[0].desc}</p>
              <span className="text-[9px] font-bold text-emerald-600 mt-2.5 block font-mono bg-emerald-50 px-1.5 py-0.5 rounded w-fit">{hero.floatingCards[0].raised}</span>
            </div>
          </motion.div>
        )}

        {/* Floating SaaS Widget Right */}
        {hero.floatingCards[1] && (
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.8 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="absolute right-[-5%] top-[10%] bg-white p-5 border border-purple-100/60 shadow-2xl rounded-2xl max-w-[220px] hidden lg:flex items-start space-x-3 text-left select-none"
          >
            <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 shrink-0">
              <Layers size={18} />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 leading-tight">{hero.floatingCards[1].title}</h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-none">{hero.floatingCards[1].desc}</p>
              <span className="text-[9px] font-bold text-purple-600 mt-2.5 block font-mono bg-purple-50 px-1.5 py-0.5 rounded w-fit">{hero.floatingCards[1].raised}</span>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-[10px] font-extrabold tracking-[0.3em] text-purple-600 bg-purple-50 border border-purple-100/50 px-4.5 py-1.5 rounded-full uppercase font-mono">
            VENTURE BUILDER
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-none mb-8 max-w-4xl font-mono uppercase"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-base md:text-lg text-slate-500 leading-relaxed mb-12 max-w-2xl"
        >
          {hero.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
        >
          <Link
            to="/portfolio"
            className="w-full sm:w-auto px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs tracking-widest rounded-xl transition-all duration-300 uppercase shadow-lg shadow-purple-200"
          >
            {hero.ctaPrimary}
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 border border-slate-200 text-slate-600 font-bold text-xs tracking-widest rounded-xl hover:bg-slate-50 transition-all duration-300 uppercase"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 px-6 text-center">
          {numbers.map((n) => (
            <div key={n.label} className="space-y-2">
              <AnimatedCounter value={n.value} />
              <span className="text-[10px] tracking-widest uppercase opacity-65 font-mono font-bold block">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Preview (Venture Scope) */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-purple-600 uppercase mb-3 block font-mono">
            CATEGORIES
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
            VENTURE SCOPE
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {whatWeBuild.map((item, idx) => {
            const Icon = [Layers, Rocket, Globe][idx] || Layers;
            return (
              <motion.div key={item.title} variants={itemVariants}>
                <TiltCard className="bg-white p-8 border border-slate-100 rounded-2xl flex flex-col justify-between h-[260px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl w-fit group-hover:scale-105 transition-transform duration-300">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Testimonials Carousel */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-purple-50/20 border-y border-purple-50/50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Quote className="mx-auto text-purple-200 mb-6" size={48} />
            <div className="relative min-h-[160px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed italic">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest font-mono">
                    {testimonials[activeTestimonial].author} — <span className="text-purple-600">{testimonials[activeTestimonial].company} Founder</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Dots */}
            {testimonials.length > 1 && (
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      activeTestimonial === idx ? 'bg-purple-600' : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Call to Action Banner */}
      <section className="py-28 px-6 text-center bg-slate-950 text-white rounded-t-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-slate-950 to-slate-950 pointer-events-none z-0" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-8">
          <span className="text-[10px] font-extrabold tracking-[0.3em] text-purple-400 uppercase font-mono">
            VENTURE APPLICATION
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-mono uppercase tracking-tight leading-none">
            READY TO CO-BUILD YOUR CONCEPT?
          </h2>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
            Apply to our next cohort. Let's write clean code, secure seed funding, and launch a massive user pipeline together.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="px-10 py-4 bg-purple-600 hover:bg-white hover:text-slate-950 text-white font-bold text-xs tracking-widest transition-all duration-300 uppercase rounded-xl shadow-md font-mono inline-flex items-center space-x-2"
            >
              <span>Apply to Cohort</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
