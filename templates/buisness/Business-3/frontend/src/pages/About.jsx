import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, Target, Shield, Heart } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import { slideUp, staggerContainer, fadeIn } from '../utils/animations';

const About = () => {
  const values = [
    { icon: Shield, title: 'Security First', desc: 'We build with industrial-grade encryption, ensuring your business data and assets are strictly protected.' },
    { icon: Target, title: 'Precision Execution', desc: 'No shortcuts. We write production-ready code with complete coverage, and build high-performance visual layouts.' },
    { icon: Users, title: 'Client Centricity', desc: 'We operate as an expansion of your core team, aligning ourselves fully with your business objectives.' },
    { icon: Heart, title: 'Aesthetic Craft', desc: 'We believe design is more than layout—it represents how you make your user feel, interact, and trust.' }
  ];

  const team = [
    { name: 'Alex Harrison', role: 'CEO & Co-Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250' },
    { name: 'Dr. Evelyn Martinez', role: 'Chief Tech Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250' },
    { name: 'Marcus Chen', role: 'Head of UI/UX', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250' },
    { name: 'Sarah Jenkins', role: 'Principal Engineer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250' }
  ];

  const timeline = [
    { year: '2016', title: 'AuraDigital Founded', desc: 'Launched as a three-person startup in Silicon Valley, focused on creative UI designs.' },
    { year: '2019', title: 'Expansion & Full Stack', desc: 'Integrated backend engineering capabilities, launching our first Spring Boot + React SaaS integrations.' },
    { year: '2022', title: 'Global Operations', desc: 'Expanded operations to serve clients across Europe and Asia, growing our core team to 30 experts.' },
    { year: '2026', title: 'AI Automation Integration', desc: 'Seeded next-generation automated analytics workflows and AI assistant plugins for Enterprise brands.' }
  ];

  return (
    <AnimatedPage>
      <div className="pt-24 pb-20 overflow-hidden">
        {/* HEADER SECTION */}
        <section className="relative max-w-7xl mx-auto px-6 py-12 text-center flex flex-col items-center gap-6">
          <div className="absolute top-[-30%] left-[30%] w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[100px] -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-primaryAccent"
          >
            <Star size={12} className="fill-primaryAccent" />
            <span>Meet AuraDigital</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-primaryText leading-tight max-w-2xl"
          >
            We Engineer Digital Asset Growth for <span className="gradient-text">Modern Brands</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondaryText text-sm sm:text-base max-w-lg leading-relaxed"
          >
            Our mission is simple: to combine premium, interactive user interfaces with enterprise-grade backend infrastructure to deliver scaling business assets.
          </motion.p>
        </section>

        {/* MISSION & VISION split */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-primaryText">Creative Vision. Engineered Execution.</h2>
            <p className="text-secondaryText text-sm sm:text-base leading-relaxed">
              We started AuraDigital with a conviction: software should not just be functional; it should be beautiful, fast, and secure.
            </p>
            <p className="text-secondaryText text-sm sm:text-base leading-relaxed">
              We focus on building long-term digital strategies, combining the modern flexibility of React, Vite, and Tailwind with the robust, secure scaling of Java and Spring Boot.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {['Stateless security with JWT encryption', 'Highly optimized page load times', 'Custom scalable component designs'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-primaryText font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#2E1A47] text-primaryAccent flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#4C1D95] rounded-2xl -rotate-2 opacity-5 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800" 
              alt="Mission illustration" 
              className="rounded-2xl shadow-lg border border-customBorder object-cover max-h-[380px] w-full"
            />
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-[#180A2B] border-y border-customBorder py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center flex flex-col items-center gap-4 mb-16">
              <span className="text-xs font-bold text-primaryAccent tracking-widest uppercase bg-[#2E1A47] px-3.5 py-1 rounded-full">Our Core Values</span>
              <h2 className="text-3xl font-extrabold text-primaryText">The Foundation of Our Craft</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-lightAccent border border-customBorder rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#1E1033] text-primaryAccent flex items-center justify-center mb-5">
                    <v.icon size={20} />
                  </div>
                  <h3 className="font-extrabold text-lg text-primaryText mb-2">{v.title}</h3>
                  <p className="text-secondaryText text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center flex flex-col items-center gap-4 mb-20">
            <span className="text-xs font-bold text-primaryAccent tracking-widest uppercase bg-[#2E1A47] px-3.5 py-1 rounded-full">Our History</span>
            <h2 className="text-3xl font-extrabold text-primaryText">The Journey So Far</h2>
          </div>
          
          <div className="relative border-l border-customBorder max-w-3xl mx-auto pl-8 flex flex-col gap-12">
            {timeline.map((t, idx) => (
              <motion.div 
                key={t.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                <div className="absolute left-[-41px] top-1.5 w-6 h-6 rounded-full bg-[#1E1033] border-4 border-primaryAccent flex items-center justify-center z-10" />
                <span className="text-sm font-bold text-primaryAccent bg-[#2E1A47] px-2.5 py-1 rounded-md">{t.year}</span>
                <h3 className="font-extrabold text-lg text-primaryText mt-2 mb-1">{t.title}</h3>
                <p className="text-secondaryText text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TEAM MEMBERS */}
        <section className="bg-[#180A2B] border-t border-customBorder py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center flex flex-col items-center gap-4 mb-16">
              <span className="text-xs font-bold text-primaryAccent tracking-widest uppercase bg-[#2E1A47] px-3.5 py-1 rounded-full">Our Team</span>
              <h2 className="text-3xl font-extrabold text-primaryText">The Minds Behind the Work</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((m, idx) => (
                <motion.div 
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-lightAccent rounded-2xl border border-customBorder overflow-hidden shadow-sm hover:shadow-md transition-shadow group text-center p-6"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 border border-customBorder">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="font-extrabold text-lg text-primaryText mb-1">{m.name}</h3>
                  <span className="text-secondaryText text-xs font-semibold">{m.role}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default About;
