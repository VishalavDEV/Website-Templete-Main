import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Award, Star, Users, SlidersHorizontal } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import InstructorCard from '../components/InstructorCard';
import { instructorsData } from '../data/instructors';

export default function Instructors({ onViewProfile }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specializations');

  const specialties = [
    'All Specializations',
    'Artificial Intelligence',
    'Web Development',
    'Data Science',
    'Cybersecurity',
    'UI/UX Design',
    'Cloud Computing',
    'Digital Marketing',
    'Business'
  ];

  const filteredInstructors = useMemo(() => {
    return instructorsData.filter((inst) => {
      const matchesSearch =
        inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.institution.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSpecialty =
        selectedSpecialty === 'All Specializations' ||
        inst.expertise.some((exp) => exp.toLowerCase().includes(selectedSpecialty.toLowerCase()));

      return matchesSearch && matchesSpecialty;
    });
  }, [searchQuery, selectedSpecialty]);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Distinguished Faculty"
          title="World-Class Instructors &"
          highlight="Industry Fellows"
          subtitle="Learn directly from senior researchers, principal engineers, and corporate executives with decades of field experience."
        />

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search faculty by name, title, or institution..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium text-slate-900"
              />
            </div>

            <div className="md:col-span-4">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-primary-500 cursor-pointer"
              >
                {specialties.map((sp) => (
                  <option key={sp} value={sp}>
                    {sp}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredInstructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
              onViewProfile={onViewProfile}
            />
          ))}
        </div>

        {filteredInstructors.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 max-w-md mx-auto my-12">
            <Award className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">No Instructors Found</h3>
            <p className="text-xs text-slate-500 mb-4">Try clearing search parameters to see all faculty members.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedSpecialty('All Specializations'); }}
              className="px-6 py-2 bg-primary-600 text-white font-bold text-xs rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
