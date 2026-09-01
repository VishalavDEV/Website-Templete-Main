import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Globe, 
  Award, 
  Users, 
  Clock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/common/Button';
import { TeamCard } from '../../components/cards/TeamCard';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { teamData } from '../../data/team';
import { journeyMilestones } from '../../data/stats';
import { fadeUp, staggerContainer } from '../../utils/animations';

export const AboutPage: React.FC = () => {
  const leadershipTeam = teamData.filter((m) => m.featured);

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "120+", label: "Global Clients" },
    { value: "15+", label: "Countries Served" },
    { value: "20+", label: "Technology Experts" },
    { value: "10+", label: "Years of Experience" }
  ];

  const valuesList = [
    "Innovation",
    "Integrity",
    "Collaboration",
    "Excellence",
    "Customer Success"
  ];

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* 1. Header / Hero Section */}
      <section className="relative pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Copy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 flex flex-col items-start text-left"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-5">
                <Building2 className="w-3.5 h-3.5" />
                <span>About Us</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
                About Straventa
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                We are a team of innovators, engineers, and problem solvers passionate about building technology that drives a better future.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button to="#story" variant="primary" size="md" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Our Story
                </Button>
                <Button to="/contact" variant="secondary" size="md">
                  Contact Us
                </Button>
              </div>
            </motion.div>

            {/* Right Photo (Corporate Headquarters Architecture) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Straventa Headquarters"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Global Headquarters</div>
                    <div className="text-xs text-slate-600">Engineering Innovation Labs</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-mono font-semibold">
                    Est. 2014
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {stats.map((item, idx) => (
              <div key={idx} className="p-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Mission, Vision & Values */}
      <section id="our-story" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Our Mission, Vision & Values"
            className="mb-14 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Mission */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and positive impact.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Pioneering purposeful engineering
              </div>
            </motion.div>

            {/* Card 2: Vision */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-zinc-900 text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-slate-900/10 transform md:-translate-y-2"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To be a global leader in digital transformation, recognized for our innovation, integrity, and customer success.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 font-medium">
                Shaping the future of digital ecosystems
              </div>
            </motion.div>

            {/* Card 3: Values Checklist */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Values</h3>
                <ul className="space-y-3">
                  {valuesList.map((val) => (
                    <li key={val} className="flex items-center text-sm font-medium text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center mr-3 shrink-0 border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Non-negotiable cultural standards
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. Our Journey Timeline */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Our Journey"
            subtitle="From our founding in 2014 to a multi-national technology powerhouse."
            className="mb-16 text-center"
          />

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Connecting Track Line */}
            <div className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-slate-300" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {journeyMilestones.map((m, idx) => (
                <motion.div
                  key={m.year}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Timeline Dot with Year */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-900 text-slate-900 font-bold text-xs flex items-center justify-center shadow-md group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 z-10 mb-4">
                    {m.year}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">{m.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Leadership Team Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet the executive visionaries and technology architects guiding Straventa."
            className="mb-14 text-center"
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {leadershipTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-zinc-700 group"
            >
              <span>View Full Team &amp; Advisors</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. CTA Banner */}
      <CtaBanner />

    </div>
  );
};
