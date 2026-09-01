import React from 'react';
import { TeamMember } from '../types';
import { Linkedin, Twitter, Dribbble } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg transition-all duration-300 hover:border-blue-500">
      <div className="aspect-[3/4] overflow-hidden bg-neutral-900 relative">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

        <div className="absolute top-4 left-4">
          <span className="font-mono text-[10px] uppercase font-bold bg-blue-600 text-white px-3 py-1 rounded-full shadow-md">
            {member.specialty}
          </span>
        </div>

        {/* Hover Bio Card Overlay */}
        <div className="absolute inset-x-4 bottom-4 text-white space-y-2">
          <h3 className="font-serif text-2xl font-bold tracking-tight">{member.name}</h3>
          <div className="font-mono text-xs text-blue-400 uppercase font-semibold">
            {member.role}
          </div>
          <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
            {member.bio}
          </p>

          <div className="flex items-center space-x-3 pt-2 text-neutral-400">
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {member.social.dribbble && (
              <a
                href={member.social.dribbble}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Dribbble className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
