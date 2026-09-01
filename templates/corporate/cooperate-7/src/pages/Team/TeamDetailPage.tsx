import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Award, 
  Briefcase, 
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { teamData } from '../../data/team';
import { Button } from '../../components/common/Button';

export const TeamDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const member = teamData.find((m) => m.id === id);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link to="/" className="hover:text-slate-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/about" className="hover:text-slate-800">About</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/team" className="hover:text-slate-800">Team</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">{member.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Avatar & Social Card */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm text-center">
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square max-w-[280px] mx-auto border border-slate-200">
              <img
                src={member.avatar}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h1>
            <p className="text-sm font-semibold text-slate-700 mb-2">{member.role}</p>
            <p className="text-xs text-slate-500 mb-6 font-mono">{member.department}</p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-200">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition shadow-sm"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition shadow-sm"
                  title="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition shadow-sm"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Bio & Details */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Executive Bio */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Biography</h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {member.fullBio || member.bio}
              </p>
            </div>

            {/* Prior Experience & Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500 mb-2">
                  <Briefcase className="w-4 h-4 text-slate-700" />
                  Practice Group
                </div>
                <div className="text-sm font-semibold text-slate-900">{member.department}</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500 mb-2">
                  <GraduationCap className="w-4 h-4 text-slate-700" />
                  Alma Mater
                </div>
                <div className="text-sm font-semibold text-slate-900">{member.education}</div>
              </div>
            </div>

            {/* Technical Expertise Badges */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-slate-700" />
                Core Focus &amp; Domains
              </h2>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="px-3.5 py-1.5 bg-slate-100 border border-slate-200 text-slate-800 rounded-xl text-xs font-medium"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button to="/contact" variant="primary" size="md">
                Connect with {member.name.split(' ')[0]}
              </Button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
