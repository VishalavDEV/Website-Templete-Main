import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin, Award } from 'lucide-react';
import { TeamMember } from '../../types';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-amber-500 text-slate-950 shadow-md">
            {member.department}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="text-xs text-amber-400 font-semibold">{member.yearsExperience}+ Yrs Experience</span>
          <h3 className="text-xl font-bold text-white leading-tight">
            <Link to={`/team/${member.slug}`}>
              {member.name}
            </Link>
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">{member.role}</p>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
            {member.bio}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.credentials.slice(0, 2).map((cred, idx) => (
              <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                {cred}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/team/${member.slug}`}
            className="text-xs font-bold text-slate-900 group-hover:text-amber-600 flex items-center gap-1.5 transition-colors"
          >
            <span>View Full Profile</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${member.email}`}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-600 transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-600 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
