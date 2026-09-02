import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { TimeframeOption, PeopleOption, TopicOption } from '../types';

interface FilterBarProps {
  timeframe: TimeframeOption;
  onChangeTimeframe: (val: TimeframeOption) => void;
  people: PeopleOption;
  onChangePeople: (val: PeopleOption) => void;
  topic: TopicOption;
  onChangeTopic: (val: TopicOption) => void;
}

export function FilterBar({
  timeframe,
  onChangeTimeframe,
  people,
  onChangePeople,
  topic,
  onChangeTopic,
}: FilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<'timeframe' | 'people' | 'topic' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const timeframeOptions: TimeframeOption[] = [
    'All-time',
    'This Quarter',
    'Last 30 days',
    'Last 7 days',
    'Year to Date',
  ];

  const peopleOptions: PeopleOption[] = [
    'All Patients',
    'Cardiology Cohort',
    'Endocrine & Diabetes',
    'Post-Op Recovery',
    'Preventative Care',
    'Geriatrics Care',
  ];

  const topicOptions: TopicOption[] = [
    'All Health Domains',
    'Cardiovascular Vitals',
    'Medication Adherence',
    'Respiratory & SpO2',
    'Physical Rehab & Mobility',
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
      {/* Timeframe Filter */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpenDropdown(openDropdown === 'timeframe' ? null : 'timeframe')}
          className="w-full bg-white border border-gray-100 hover:border-gray-200 px-4 py-2.5 rounded-xl text-xs flex items-center justify-between shadow-xs transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-1 truncate">
            <span className="text-gray-400 font-medium">Timeframe:</span>
            <span className="text-gray-800 font-bold ml-1">{timeframe}</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 group-hover:text-gray-600 ${
              openDropdown === 'timeframe' ? 'rotate-180 text-gray-600' : ''
            }`}
          />
        </button>

        {openDropdown === 'timeframe' && (
          <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-gray-100 rounded-xl shadow-lg z-30 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            {timeframeOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChangeTimeframe(opt);
                  setOpenDropdown(null);
                }}
                className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-gray-50 transition-colors ${
                  timeframe === opt ? 'font-bold text-blue-600 bg-blue-50/50' : 'text-gray-700'
                }`}
              >
                <span>{opt}</span>
                {timeframe === opt && <Check className="w-3.5 h-3.5 text-blue-600" />}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Cohort / Patients Filter */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpenDropdown(openDropdown === 'people' ? null : 'people')}
          className="w-full bg-white border border-gray-100 hover:border-gray-200 px-4 py-2.5 rounded-xl text-xs flex items-center justify-between shadow-xs transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-1 truncate">
            <span className="text-gray-400 font-medium">Cohort:</span>
            <span className="text-gray-800 font-bold ml-1">{people}</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 group-hover:text-gray-600 ${
              openDropdown === 'people' ? 'rotate-180 text-gray-600' : ''
            }`}
          />
        </button>

        {openDropdown === 'people' && (
          <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-gray-100 rounded-xl shadow-lg z-30 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            {peopleOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChangePeople(opt);
                  setOpenDropdown(null);
                }}
                className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-gray-50 transition-colors ${
                  people === opt ? 'font-bold text-blue-600 bg-blue-50/50' : 'text-gray-700'
                }`}
              >
                <span>{opt}</span>
                {people === opt && <Check className="w-3.5 h-3.5 text-blue-600" />}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Health Domain Filter */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpenDropdown(openDropdown === 'topic' ? null : 'topic')}
          className="w-full bg-white border border-gray-100 hover:border-gray-200 px-4 py-2.5 rounded-xl text-xs flex items-center justify-between shadow-xs transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-1 truncate">
            <span className="text-gray-400 font-medium">Domain:</span>
            <span className="text-gray-800 font-bold ml-1">{topic}</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 group-hover:text-gray-600 ${
              openDropdown === 'topic' ? 'rotate-180 text-gray-600' : ''
            }`}
          />
        </button>

        {openDropdown === 'topic' && (
          <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-gray-100 rounded-xl shadow-lg z-30 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            {topicOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChangeTopic(opt);
                  setOpenDropdown(null);
                }}
                className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-gray-50 transition-colors ${
                  topic === opt ? 'font-bold text-blue-600 bg-blue-50/50' : 'text-gray-700'
                }`}
              >
                <span>{opt}</span>
                {topic === opt && <Check className="w-3.5 h-3.5 text-blue-600" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
