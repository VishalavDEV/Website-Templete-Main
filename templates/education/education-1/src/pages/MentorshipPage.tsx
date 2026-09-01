import React, { useState } from 'react';
import { PageId, Mentor } from '../types';
import { MENTORS_DATA } from '../data/edupathData';
import { MentorBookingModal } from '../components/MentorBookingModal';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';
import { GradientText } from '../components/reactbits/GradientText';
import {
  Users,
  Star,
  Search,
} from 'lucide-react';

interface MentorshipPageProps {
  onNavigate: (page: PageId) => void;
}

export const MentorshipPage: React.FC<MentorshipPageProps> = ({ onNavigate }) => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');

  const specialties = [
    'All',
    'System Design',
    'Next.js & TypeScript',
    'Figma Design Systems',
    'LLM Agent Architectures',
    'Growth Funnel Analytics',
  ];

  const filteredMentors = MENTORS_DATA.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchFilter.toLowerCase()) ||
      mentor.specialties.some((s) =>
        s.toLowerCase().includes(searchFilter.toLowerCase())
      );

    const matchesSpecialty =
      specialtyFilter === 'All' ||
      mentor.specialties.some((s) => s.includes(specialtyFilter));

    return matchesSearch && matchesSpecialty;
  });

  const handleOpenBooking = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-mono font-bold uppercase tracking-wider border border-cyan-200">
            <Users className="w-3.5 h-3.5" />
            <span>1-ON-1 FACULTY & RESEARCH MENTORSHIP</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
            Learn With Elite{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#0284C7', '#4F46E5']}>
              Mentors
            </GradientText>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Schedule personalized 1:1 advisory sessions for architecture reviews, portfolio feedback, technical mock challenges, and career advancement guidance.
          </p>
        </div>
      </section>

      {/* Filter and Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Search & Specialty Pills */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-80">
            <div className="relative">
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search by mentor name, company, skill..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-xs font-medium focus:border-indigo-500 focus:outline-hidden placeholder:text-slate-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSpecialtyFilter(spec)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  specialtyFilter === spec
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMentors.map((mentor) => (
            <SpotlightCard
              key={mentor.id}
              spotlightColor="rgba(99, 102, 241, 0.08)"
              className="rounded-3xl p-6 bg-white border border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-5 text-left"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-xs"
                  />
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {mentor.name}
                    </h3>
                    <p className="text-xs text-indigo-600 font-mono font-medium">{mentor.role}</p>
                    <span className="text-[10px] font-mono font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-md inline-block mt-1">
                      {mentor.company}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono text-[11px]">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{mentor.rating.toFixed(1)}</span>
                    <span className="text-slate-400">({mentor.reviewsCount})</span>
                  </div>
                  <span>•</span>
                  <span>{mentor.experienceYears}y Exp</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {mentor.bio}
                </p>

                {/* Specialties tags */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                    Core Specialties
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {mentor.specialties.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-mono rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block font-mono">Honorarium</span>
                    <strong className="text-sm text-slate-900 font-mono">
                      ${mentor.hourlyRate} / 45-min
                    </strong>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
                    {mentor.nextAvailable.split(' ')[0]} Available
                  </span>
                </div>

                <button
                  onClick={() => handleOpenBooking(mentor)}
                  className="w-full py-2.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer text-center block"
                >
                  Book 1:1 Advisory Call
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      <MentorBookingModal
        mentor={selectedMentor}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
};
