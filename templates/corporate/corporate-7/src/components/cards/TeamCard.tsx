import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { TeamMember } from '../../data/team';
import { fadeUp } from '../../utils/animations';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden p-4 shadow-xs hover:shadow-lg transition-all duration-300 text-left text-slate-900"
    >
      {/* Portrait Image */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-slate-100">
        <img
          src={member.avatar}
          alt={member.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Quick detail overlay button */}
        <Link
          to={`/team/${member.slug}`}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-zinc-900 hover:text-white shadow-xs"
          title="View profile"
        >
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 px-1">
        <Link to={`/team/${member.slug}`} className="group-hover:text-zinc-700 transition-colors">
          <h4 className="text-lg font-bold text-slate-900 tracking-tight">
            {member.name}
          </h4>
        </Link>
        
        <p className="text-xs font-medium text-slate-500 mb-3">
          {member.role}
        </p>

        {/* Social / LinkedIn Icon matching design */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 hover:bg-zinc-900 hover:text-white flex items-center justify-center transition shadow-2xs"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 hover:bg-zinc-900 hover:text-white flex items-center justify-center transition shadow-2xs"
                title="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <Link
            to={`/team/${member.slug}`}
            className="text-[11px] text-slate-600 hover:text-slate-900 font-semibold transition"
          >
            Bio &amp; Expertise →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
