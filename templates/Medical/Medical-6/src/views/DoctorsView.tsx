import React, { useState, useMemo } from 'react';
import type { Doctor } from '../types';
import { dataStore } from '../services/dataStore';
import { DoctorCard } from '../components/DoctorCard';
import { Search, RefreshCw, Stethoscope, SlidersHorizontal } from 'lucide-react';

interface DoctorsViewProps {
  onOpenBooking: (doctor?: Doctor) => void;
  onViewDoctorProfile: (doctor: Doctor) => void;
}

export const DoctorsView: React.FC<DoctorsViewProps> = ({ onOpenBooking, onViewDoctorProfile }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [specialty, setSpecialty] = useState('All');
  const [minExperience, setMinExperience] = useState<number>(0);
  const [availabilityDay, setAvailabilityDay] = useState('All');
  const [gender, setGender] = useState('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'experience' | 'rating' | 'name'>('recommended');

  const filteredDoctors = useMemo(() => {
    return dataStore.filterDoctors({
      searchQuery,
      specialty,
      minExperience,
      availabilityDay,
      gender,
      sortBy
    });
  }, [searchQuery, specialty, minExperience, availabilityDay, gender, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSpecialty('All');
    setMinExperience(0);
    setAvailabilityDay('All');
    setGender('All');
    setSortBy('recommended');
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem 0', background: '#f8fafc' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Doctor Discovery System</span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Find & Book Top Medical Specialists
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.2rem' }}>
            Filter by specialty, years of experience, rating, and real-time open time slots.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="card-elevated" style={{ padding: '1.25rem', marginBottom: '2rem' }}>
          {/* Top Search Bar */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px', display: 'flex', alignItems: 'center', gap: '0.6rem', border: '1.5px solid #cbd5e1', borderRadius: '12px', padding: '0.6rem 1rem', background: '#ffffff' }}>
              <Search size={18} color="#0d9488" />
              <input
                type="text"
                placeholder="Search by doctor name, specialty, or condition..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.92rem' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <SlidersHorizontal size={14} /> Sort By:
              </label>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="input-field select-field"
                style={{ padding: '0.55rem 2rem 0.55rem 0.8rem', fontSize: '0.85rem', fontWeight: 600, width: 'auto' }}
              >
                <option value="recommended">Recommended & Featured</option>
                <option value="rating">Top Rated (5★)</option>
                <option value="experience">Most Experienced</option>
                <option value="name">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Sub-Filters */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9' }}>
            {/* Specialty */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', marginBottom: '0.25rem' }}>
                Specialty
              </label>
              <select
                value={specialty}
                onChange={e => setSpecialty(e.target.value)}
                className="input-field select-field"
                style={{ padding: '0.45rem 2rem 0.45rem 0.6rem', fontSize: '0.82rem' }}
              >
                <option value="All">All Specialties</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Oncology">Oncology</option>
              </select>
            </div>

            {/* Min Experience */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', marginBottom: '0.25rem' }}>
                Min Experience
              </label>
              <select
                value={minExperience}
                onChange={e => setMinExperience(Number(e.target.value))}
                className="input-field select-field"
                style={{ padding: '0.45rem 2rem 0.45rem 0.6rem', fontSize: '0.82rem' }}
              >
                <option value={0}>Any Experience</option>
                <option value={5}>5+ Years</option>
                <option value={10}>10+ Years</option>
                <option value={15}>15+ Years</option>
              </select>
            </div>

            {/* Availability Day */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', marginBottom: '0.25rem' }}>
                Availability Day
              </label>
              <select
                value={availabilityDay}
                onChange={e => setAvailabilityDay(e.target.value)}
                className="input-field select-field"
                style={{ padding: '0.45rem 2rem 0.45rem 0.6rem', fontSize: '0.82rem' }}
              >
                <option value="All">Any Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', marginBottom: '0.25rem' }}>
                Doctor Gender
              </label>
              <select
                value={gender}
                onChange={e => setGender(e.target.value)}
                className="input-field select-field"
                style={{ padding: '0.45rem 2rem 0.45rem 0.6rem', fontSize: '0.82rem' }}
              >
                <option value="All">All Genders</option>
                <option value="Female">Female Doctor</option>
                <option value="Male">Male Doctor</option>
              </select>
            </div>

            {/* Reset Button */}
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button
                onClick={handleResetFilters}
                className="btn-outline"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '0.45rem' }}
              >
                <RefreshCw size={14} /> Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>
            Showing <strong>{filteredDoctors.length}</strong> available doctor(s)
          </span>
        </div>

        {/* Doctor Grid */}
        {filteredDoctors.length === 0 ? (
          <div className="card-elevated" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <Stethoscope size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>No matching doctors found</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Try adjusting your search criteria or resetting filters to view all available board doctors.
            </p>
            <button onClick={handleResetFilters} className="btn-primary">
              <RefreshCw size={16} /> Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {filteredDoctors.map(doc => (
              <DoctorCard
                key={doc.id}
                doctor={doc}
                onViewProfile={onViewDoctorProfile}
                onBookAppointment={onOpenBooking}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
