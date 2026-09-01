import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { getDoctors } from '../services/api';
import { DoctorCard } from '../components/cards/DoctorCard';
import { DoctorCardSkeleton } from '../components/skeletons';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Search } from 'lucide-react';
import { Doctor } from '../types';

export const Doctors: React.FC = () => {
  const [doctorsList, setDoctorsList] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    getDoctors().then(data => {
      if (isMounted) {
        setDoctorsList(data);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const specialties = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'General Medicine'];

  const filteredDoctors = doctorsList.filter(doc => {
    const matchesSpecialty = selectedSpecialty === 'All' || doc.departmentName.toLowerCase() === selectedSpecialty.toLowerCase();
    const fullName = `dr. ${doc.firstName} ${doc.lastName} ${doc.specialization}`.toLowerCase();
    const matchesSearch = fullName.includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="Our Doctors" 
        subtitle="Meet the experienced professionals who provide specialized and compassionate care."
        breadcrumbItems={[{ label: 'Doctors' }]}
      />

      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        {/* Search & Filter Bar */}
        <ScrollReveal animation="fade-up" delay={100} className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200/80 mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search doctors by name or specialization..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors shadow-xs"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {specialties.map(spec => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${selectedSpecialty === spec ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'}`}
              >
                {spec}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <DoctorCardSkeleton count={8} />
          </div>
        ) : filteredDoctors.length === 0 ? (
          <div className="text-center py-16 bg-slate-50/70 rounded-2xl border border-slate-200">
            <p className="text-slate-500 font-medium text-lg">No doctors found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredDoctors.map((doctor, index) => (
              <ScrollReveal key={doctor.id} animation="pop" delay={index * 60}>
                <DoctorCard doctor={doctor} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </ScrollReveal>
    </div>
  );
};
