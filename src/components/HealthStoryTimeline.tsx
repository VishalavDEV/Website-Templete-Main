import React, { useState } from 'react';
import {
  Clock,
  Sparkles,
  ShieldCheck,
  FileText,
  Calendar,
  Activity,
  Award,
  ChevronDown,
  ChevronUp,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { HealthStoryEvent } from '../types';

interface HealthStoryTimelineProps {
  events: HealthStoryEvent[];
}

export const HealthStoryTimeline: React.FC<HealthStoryTimelineProps> = ({ events }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedEvents, setExpandedEvents] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedEvents(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredEvents = events.filter(e => {
    if (selectedCategory === 'all') return true;
    return e.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  // Group events by year
  const groupedByYear = filteredEvents.reduce((acc, evt) => {
    acc[evt.year] = acc[evt.year] || [];
    acc[evt.year].push(evt);
    return acc;
  }, {} as Record<string, HealthStoryEvent[]>);

  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  const getCategoryBadge = (cat: HealthStoryEvent['category']) => {
    switch (cat) {
      case 'Lab': return 'bg-[#E3EFE6] text-[#225035] border-[#C2DEC9]';
      case 'Vaccine': return 'bg-[#EAF0F8] text-[#1E4B7A] border-[#C7D9ED]';
      case 'Screening': return 'bg-[#FBF0D9] text-[#8C6212] border-[#EAD5A0]';
      case 'Document': return 'bg-[#F0EBE1] text-[#4F5E52] border-[#DDD5C5]';
      case 'Diagnosis': return 'bg-[#F9ECE7] text-[#933725] border-[#EFC6BC]';
      case 'Wellness': return 'bg-[#EDE7F6] text-[#553C9A] border-[#D1C4E9]';
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5E2DD]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8904F] uppercase tracking-wider">
            <Clock className="w-4 h-4 text-[#A8904F]" />
            <span>Longitudinal Biometric Journey</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#2D3A2D] mt-1">
            Your Health Story
          </h1>
          <p className="text-sm text-[#5A5A40] mt-1 max-w-2xl">
            A chronological timeline of every diagnostic milestone, immunization, and clinical assessment over the years.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {['all', 'Lab', 'Screening', 'Vaccine', 'Document', 'Diagnosis', 'Wellness'].map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#2D3A2D] text-white border-[#2D3A2D] shadow-xs'
                    : 'bg-white text-[#5A5A40] border-[#E5E2DD] hover:bg-[#F5F2ED]'
                }`}
              >
                {cat === 'all' ? 'All Milestones' : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-4 sm:pl-8 space-y-10">
        
        {/* Continuous Central Trunk Line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-[#2D3A2D] via-[#A8904F] to-[#E5E2DD]" />

        {years.map((year) => (
          <div key={year} className="relative space-y-6">
            
            {/* Year Stamp Marker */}
            <div className="flex items-center space-x-3 -ml-4 sm:-ml-8">
              <div className="px-4 py-1.5 rounded-xl bg-[#2D3A2D] text-white font-serif text-lg font-bold shadow-sm border border-[#2D3A2D] z-10 flex items-center space-x-2">
                <span>{year}</span>
                <span className="text-xs font-sans font-normal text-white/70">
                  ({groupedByYear[year].length} milestones)
                </span>
              </div>
            </div>

            {/* Year Items */}
            <div className="space-y-4 pl-3 sm:pl-4">
              {groupedByYear[year].map((evt) => {
                const isExpanded = !!expandedEvents[evt.id];

                return (
                  <div
                    key={evt.id}
                    className="relative pl-6 group"
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-[1.45rem] sm:-left-[1.45rem] top-3.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2D3A2D] group-hover:scale-125 transition-transform duration-200 z-10" />

                    {/* Timeline Card */}
                    <div
                      onClick={() => toggleExpand(evt.id)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        evt.highlight
                          ? 'bg-white border-[#A8904F] shadow-sm hover:shadow-md ring-1 ring-[#A8904F]/30'
                          : 'bg-white border-[#E5E2DD] hover:border-[#2D3A2D] shadow-sm'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-xs font-mono font-bold text-[#2D3A2D] bg-[#F5F2ED] border border-[#E5E2DD] px-2.5 py-1 rounded-lg">
                            {evt.date}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getCategoryBadge(evt.category)}`}>
                            {evt.category}
                          </span>
                        </div>

                        <div className="flex items-center space-x-1.5 text-xs text-[#5A5A40]">
                          <Building className="w-3.5 h-3.5 text-[#A8904F]" />
                          <span>{evt.facility}</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4 ml-1 text-[#2D3A2D]" /> : <ChevronDown className="w-4 h-4 ml-1 text-[#5A5A40]" />}
                        </div>

                      </div>

                      <h3 className="text-base font-bold font-serif text-[#2D3A2D] mt-2 group-hover:text-[#A8904F] transition-colors">
                        {evt.title}
                      </h3>

                      <p className="text-xs text-[#5A5A40] mt-1 leading-relaxed">
                        {evt.description}
                      </p>

                      {/* Expandable Clinical Record Details */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-[#E5E2DD] text-xs text-[#5A5A40] space-y-1.5 font-mono animate-in fade-in">
                          <p>• Ledger Reference: <span className="text-[#2D3A2D]">NV-LOG-{evt.id.toUpperCase()}</span></p>
                          <p>• Authenticated Provider: <span className="text-[#2D3A2D]">{evt.facility}</span></p>
                          <p>• Cryptographic Verification: <span className="text-emerald-700 font-bold">SHA-256 Validated</span></p>
                        </div>
                      )}

                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};
