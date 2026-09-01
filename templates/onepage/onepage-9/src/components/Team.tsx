import React from 'react';
import { TEAM_MEMBERS } from '../data/content';
import { Linkedin, Twitter, Mail, Award, Check } from 'lucide-react';

interface TeamProps {
  onSocialClick: (platform: string, name: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onSocialClick }) => {
  return (
    <section id="team" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-300">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-slate-900">07 /</span>
              <span>LEADERSHIP BOARD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
              EXECUTIVE STRATEGY &amp; ADVISORY BOARD
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-600 max-w-md">
            Senior architects, strategy partners, and former cloud infrastructure executives leading every client pod.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAF9F6] border border-slate-300 hover:border-slate-900 transition-colors duration-200 flex flex-col justify-between group shadow-xs hover:shadow-lg"
            >
              <div>
                {/* Image Stack */}
                <div className="relative h-72 overflow-hidden border-b border-slate-300">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Number Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-slate-900 text-emerald-400 font-mono text-xs font-bold px-2.5 py-1">
                    {member.number} / EXEC
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 right-3 bg-white text-slate-950 font-mono text-[10px] font-extrabold px-2.5 py-1 border border-slate-300 shadow-sm">
                    {member.experienceYears}
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold font-sans text-slate-950 uppercase group-hover:text-emerald-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono font-bold text-emerald-700 uppercase mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="pt-2 border-t border-slate-200 space-y-1.5 font-mono text-[10px]">
                    <span className="text-slate-400 font-bold uppercase block">CORE DOMAINS:</span>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((exp, idx) => (
                        <span key={idx} className="bg-white px-2 py-0.5 border border-slate-200 text-slate-700 font-bold">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Communication Actions */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-200 mt-4 font-mono text-[11px]">
                <button
                  onClick={() => onSocialClick('LinkedIn', member.name)}
                  className="text-slate-600 hover:text-slate-950 font-bold uppercase underline underline-offset-2"
                >
                  LINKEDIN
                </button>
                <button
                  onClick={() => onSocialClick('Email', member.name)}
                  className="text-emerald-700 hover:text-emerald-800 font-bold uppercase underline underline-offset-2"
                >
                  DIRECT BRIEF
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
