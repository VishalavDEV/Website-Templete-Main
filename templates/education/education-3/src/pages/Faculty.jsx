import React, { useState } from 'react';
import { FACULTY_MEMBERS } from '../data/faculty';
import { UserCheck, BookOpen, Mail, Award, Search } from 'lucide-react';

export default function Faculty() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaculty = FACULTY_MEMBERS.filter(f =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Banner */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <UserCheck className="w-4 h-4" />
            <span>ACADEMIC FACULTY DIRECTORY</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
            Distinguished Research Chairs.
          </h1>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Our global faculty comprises Nobel laureates, enterprise founders, and principal research scientists who mentor scholars directly in lab symposiums.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12 max-w-xl">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search faculty by name, department, or research topic..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-400"
          />
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFaculty.map((faculty) => (
            <div key={faculty.id} className="rounded-3xl glass-panel border border-white/10 p-8 flex flex-col justify-between space-y-6 bg-slate-950/60 hover:border-electric-500/40 transition-all">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <img
                  src={faculty.avatar}
                  alt={faculty.name}
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-electric-500/30 shrink-0"
                />
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded-md bg-electric-500/20 text-electric-300 text-[10px] font-mono font-bold uppercase">
                    {faculty.department}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display">{faculty.name}</h3>
                  <p className="text-xs text-electric-400 font-medium">{faculty.title}</p>
                  <div className="text-[11px] font-mono text-slate-400 pt-1">
                    {faculty.experience} • h-index: {faculty.hIndex}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {faculty.bio}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Research Areas:</div>
                <div className="flex flex-wrap gap-1.5">
                  {faculty.researchTopics.map((topic, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 text-[10px] font-mono text-cyan-300 border border-white/5">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Citations: {faculty.citationsCount}</span>
                <a href={`mailto:${faculty.email}`} className="text-electric-400 hover:text-electric-300 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" /> Email Mentorship Desk
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
