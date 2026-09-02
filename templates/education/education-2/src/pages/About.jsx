import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, HeartHandshake, Award, Compass, ShieldCheck, 
  Sparkles, Users, BookOpen, GraduationCap, CheckCircle2 
} from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import StatsCounter from '../components/StatsCounter';
import { platformStats } from '../data/testimonials';

export default function About() {
  const historyTimeline = [
    { year: "2020", title: "EduPrime Founded", desc: "Launched by computer science professors and DeepMind researchers with 5 initial courses." },
    { year: "2022", title: "Accreditation Milestone", desc: "Crossed 10,000 active students and achieved global ISO 21001 educational quality accreditation." },
    { year: "2024", title: "Enterprise Partner Network", desc: "Partnered with 350+ Fortune 500 tech companies for direct student recruitment and internship drops." },
    { year: "2026", title: "Global AI & Cyber Labs", desc: "Expanded to 50,000+ global students with interactive cloud GPU sandboxes and real-time labs." }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen space-y-20">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-primary-600" />
              About EduPrime Academic Institute
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pioneering the Future of <span className="gradient-text">Higher Education</span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              EduPrime was founded on a singular premise: world-class education should not be constrained by geographic borders or astronomical tuition costs. We combine elite university rigor with practical enterprise tech skills to prepare students for high-impact global careers.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Global ISO 21001 Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Industry Project Based</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Stanford & MIT Alumni Faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>95% Career Placement Guarantee</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                alt="University Campus & Students"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">Empowering Leaders Worldwide</span>
                <h3 className="text-xl font-bold mt-1">Academic Rigor Meets Practical Mastery</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Institutional Purpose"
            title="Driven By Mission,"
            highlight="Guided By Vision"
            subtitle="Our commitment to transforming online learning into a trusted global degree benchmark."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-600/30">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To empower individuals everywhere with accessible, high-caliber technical and executive education. We bridge the gap between academic fundamentals and modern industry requirements through project-based mastery.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent-cyan text-white flex items-center justify-center shadow-lg shadow-accent-cyan/30">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To become the premier global digital university where motivated learners acquire career-defining skills, build lifetime professional networks, and shape the technological innovations of tomorrow.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Guiding Principles"
          title="The Core Values That"
          highlight="Define EduPrime"
          subtitle="Every curriculum, lab project, and mentor session is built upon these four pillars."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "Academic Integrity", desc: "Rigorous standards, anti-plagiarism protocols, and authentic capstone evaluation." },
            { icon: Compass, title: "Industry Relevance", desc: "Curriculums updated quarterly in consultation with lead engineers at Google, AWS, and Meta." },
            { icon: HeartHandshake, title: "Inclusive Access", desc: "Providing financial aid, flexible payment plans, and global access to all backgrounds." },
            { icon: Award, title: "Student Success", desc: "Dedicated career placement suites, 1-on-1 mentorship, and lifelong community membership." }
          ].map((val, i) => {
            const IconComp = val.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-card-hover transition-all text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mx-auto mb-4 flex items-center justify-center">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-2">{val.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. PLATFORM TIMELINE / HISTORY */}
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Institutional Milestones"
            title="Our Journey of"
            highlight="Growth & Impact"
            subtitle="From a small research initiative to a global education ecosystem serving 50,000+ learners."
            center
            light
          />

          <div className="relative mt-16 space-y-8 before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-800 hidden sm:block">
            {historyTimeline.map((item, idx) => (
              <div key={idx} className={`relative flex items-center justify-between gap-8 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2">
                  <div className="glass-card-dark p-6 rounded-2xl border border-white/10 space-y-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-600 text-white inline-block">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white font-bold text-xs flex items-center justify-center border-4 border-slate-950 z-10">
                  ✓
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatsCounter stats={platformStats} />
      </section>

    </div>
  );
}
