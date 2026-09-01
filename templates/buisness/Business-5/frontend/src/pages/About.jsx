import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Twitter, Github, Users } from 'lucide-react';
import { lumoraData } from '../lumoraData';
import client from '../api/client';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const milestoneRefs = useRef([]);
  const [team, setTeam] = useState([]);

  const milestones = [
    { year: '2023', title: 'Studio Inception', desc: 'Lumora Labs founded by Sylvia Cole and Ethan Vance in San Francisco, introducing the 30-day MVP cohort model.' },
    { year: '2024', title: 'First 5 Cohorts', desc: 'Successfully co-built and launched 5 SaaS products, achieving profitability and building the internal financial SDK.' },
    { year: '2025', title: '$50M Raised', desc: 'Cumulative capital raised by portfolio companies crosses $50M, with Solas App raising a record $3.5M Seed.' },
    { year: '2026', title: 'Global Platform', desc: 'Expanded studio ops worldwide, supporting fractional scaling models and real-time ledger applications.' }
  ];

  useEffect(() => {
    // 1. Fetch team members from backend
    client.get('/team')
      .then((res) => {
        if (res.data && res.data.success) {
          setTeam(res.data.data);
        }
      })
      .catch((err) => {
        console.error('Failed to load team, fallback to local', err);
        setTeam(lumoraData.team || []);
      });

    // 2. Timeline GSAP ScrollTrigger Line Drawing
    const ctx = gsap.context(() => {
      // Animate the line height on scroll
      gsap.fromTo(
        lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true,
          }
        }
      );

      // Fade-in each milestone node on scroll
      milestoneRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert(); // clean up GSAP animations
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 pb-20 bg-white text-slate-800 relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[50%] aspect-square rounded-full bg-purple-100/40 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-15%] w-[50%] aspect-square rounded-full bg-indigo-100/30 blur-[100px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Header */}
        <section className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-purple-600 uppercase mb-3 block font-mono">
            STUDIO INTRO
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-mono uppercase mb-6">
            WE ARE LUMORA LABS
          </h1>
          <p className="text-slate-500 leading-relaxed text-sm md:text-base">
            We are venture architects, engineers, and growth designers. Instead of writing passive advice, we write core product code and co-found next-generation networks.
          </p>
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="py-12 max-w-4xl mx-auto relative mb-28">
          <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[3px] bg-slate-100 -translate-x-1/2 z-0" />
          <div
            ref={lineRef}
            className="absolute top-0 left-[20px] md:left-1/2 w-[3px] bg-gradient-to-b from-purple-500 to-indigo-600 -translate-x-1/2 z-0 origin-top"
          />

          <div className="space-y-16">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.year}
                  ref={(el) => (milestoneRefs.current[idx] = el)}
                  className={`flex flex-col md:flex-row items-start relative z-10 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle Indicator on the line */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-[3px] border-white shadow-md -translate-x-1/2 top-2 z-20" />

                  {/* Empty space helper for desktop alignment */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Timeline Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-slate-50 border border-slate-100 hover:border-purple-200 p-6.5 rounded-2xl shadow-sm transition-all duration-300">
                      <span className="font-mono text-xs font-bold text-purple-600 tracking-wider">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-extrabold text-slate-900 mt-1.5 mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="pt-12">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-purple-600 uppercase mb-3 block font-mono">
              VENTURE COLLABORATORS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-mono">
              THE CORE SQUAD
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -6 }}
                className="flex flex-col sm:flex-row items-center gap-6 p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-200 border-2 border-purple-100 shadow-md shrink-0 transition-transform group-hover:scale-105 duration-300">
                  <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
                </div>
                <div className="text-center sm:text-left flex-1 space-y-2">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 leading-none">{member.name}</h3>
                    <span className="text-[10px] font-mono tracking-widest text-purple-600 uppercase mt-1.5 block font-bold">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    Directing validation metrics, sprint engineering setups, and early scaling models.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center sm:justify-start space-x-3 pt-1">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="text-slate-400 hover:text-purple-600 transition-colors">
                        <Linkedin size={14} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="text-slate-400 hover:text-purple-600 transition-colors">
                        <Twitter size={14} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="text-slate-400 hover:text-purple-600 transition-colors">
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}
