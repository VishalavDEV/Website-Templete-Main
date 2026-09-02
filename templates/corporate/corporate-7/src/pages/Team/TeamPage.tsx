import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Users, Sparkles, Award } from 'lucide-react';
import { teamData } from '../../data/team';
import { TeamCard } from '../../components/cards/TeamCard';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { staggerContainer, fadeUp } from '../../utils/animations';

export const TeamPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState('all');

  const departments = ['all', 'Executive', 'Technology & Architecture', 'Engineering Leadership', 'Product & Design'];

  const filteredTeam = selectedDept === 'all'
    ? teamData
    : teamData.filter((m) => m.department === selectedDept);

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Header Banner */}
      <section className="pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/about" className="hover:text-slate-800">About</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">Team</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Leadership &amp; Technical Architects
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Meet the industry pioneers, software engineers, and domain researchers building enterprise-grade digital systems.
            </p>
          </div>

        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedDept === dept
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {dept === 'all' ? 'All Leaders & Engineers' : dept}
              </button>
            ))}
          </div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {filteredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </motion.div>

        </div>
      </section>

      <CtaBanner />

    </div>
  );
};
