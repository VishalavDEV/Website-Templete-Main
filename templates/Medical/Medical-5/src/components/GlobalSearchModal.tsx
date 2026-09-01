import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  X,
  UserCheck,
  Stethoscope,
  BookOpen,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import doctorsData from '../data/doctors.json';
import specialtiesData from '../data/specialties.json';
import servicesData from '../data/services.json';
import articlesData from '../data/articles.json';
import locationsData from '../data/locations.json';
import { Doctor, Article, Specialty, Service, LocationClinic } from '../types';

export const GlobalSearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    openDoctorProfile,
    openArticle,
    setActivePage,
    setFilterSpecialtyId,
  } = useApp();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedDoctors = q
    ? (doctorsData as Doctor[]).filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.specialtyName.toLowerCase().includes(q) ||
          d.bio.toLowerCase().includes(q)
      )
    : [];

  const matchedSpecialties = q
    ? (specialtiesData as Specialty[]).filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.commonConditions.some((c) => c.toLowerCase().includes(q))
      )
    : [];

  const matchedServices = q
    ? (servicesData as Service[]).filter(
        (srv) =>
          srv.title.toLowerCase().includes(q) ||
          srv.description.toLowerCase().includes(q) ||
          srv.category.toLowerCase().includes(q)
      )
    : [];

  const matchedArticles = q
    ? (articlesData as Article[]).filter(
        (art) =>
          art.title.toLowerCase().includes(q) ||
          art.subtitle.toLowerCase().includes(q) ||
          art.category.toLowerCase().includes(q)
      )
    : [];

  const matchedLocations = q
    ? (locationsData as LocationClinic[]).filter(
        (loc) =>
          loc.name.toLowerCase().includes(q) ||
          loc.city.toLowerCase().includes(q) ||
          loc.address.toLowerCase().includes(q)
      )
    : [];

  const totalMatches =
    matchedDoctors.length +
    matchedSpecialties.length +
    matchedServices.length +
    matchedArticles.length +
    matchedLocations.length;

  return (
    <div
      id="global-search-overlay"
      className="fixed inset-0 z-50 bg-[#3E3445]/40 backdrop-blur-xs flex items-start justify-center pt-20 p-4 animate-in fade-in duration-200"
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-[#FFFDFC] rounded-3xl shadow-[0_25px_60px_rgba(90,70,110,0.18)] border border-[#3E3445]/10 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[#3E3445]/8 bg-[#F9F7FB]">
          <Search className="w-5 h-5 text-[#8B6FAE]" />
          <input
            ref={inputRef}
            id="global-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doctors, clinical specialties, tests, articles, clinics..."
            className="w-full bg-transparent text-[#3E3445] text-base placeholder-[#756B7C] focus:outline-none font-medium"
          />
          {query && (
            <button
              id="clear-search-query-btn"
              onClick={() => setQuery('')}
              className="text-[#756B7C] hover:text-[#3E3445] p-1 rounded-full hover:bg-[#E8DDF2]/50"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block text-[11px] bg-[#E8DDF2] text-[#665080] font-mono px-2 py-0.5 rounded font-semibold">
            ESC
          </kbd>
        </div>

        {/* Search Results Area */}
        <div className="p-4 overflow-y-auto space-y-5 flex-1">
          {query.trim() === '' ? (
            <div className="py-8 px-4 text-center">
              <Sparkles className="w-8 h-8 text-[#B9A1D0] mx-auto mb-3" />
              <h4 className="font-serif text-lg font-bold text-[#3E3445] mb-1">
                Quick Search & Clinical Index
              </h4>
              <p className="text-sm text-[#756B7C] max-w-md mx-auto mb-6">
                Type keywords like "Cardiology", "Dr. Raman", "MRI", "Blood Test", or "Insomnia".
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {['Cardiology', 'Neurology', 'Dr. Maya Raman', 'Biomarker Panel', 'Preventive Care', 'Metabolic Health'].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      id={`search-suggest-${suggestion.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={() => setQuery(suggestion)}
                      className="px-3 py-1.5 text-xs font-medium bg-[#E8DDF2]/50 hover:bg-[#E8DDF2] text-[#665080] rounded-full transition-colors"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalMatches === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-[#756B7C]">
                No clinical records or specialists matched "{query}".
              </p>
              <p className="text-xs text-[#756B7C]/70 mt-1">
                Try searching for a broader term or check your spelling.
              </p>
            </div>
          ) : (
            <>
              {/* Doctors Matches */}
              {matchedDoctors.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-[#8B6FAE] uppercase tracking-wider mb-2 px-2 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Specialists ({matchedDoctors.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedDoctors.map((doc) => (
                      <button
                        key={doc.id}
                        id={`search-res-doc-${doc.id}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          openDoctorProfile(doc);
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-[#F9F7FB] border border-[#3E3445]/5 hover:border-[#8B6FAE]/30 text-left transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-10 h-10 rounded-full object-cover border border-[#8B6FAE]/20"
                          />
                          <div>
                            <div className="text-sm font-bold text-[#3E3445] group-hover:text-[#665080] transition-colors">
                              {doc.name}
                            </div>
                            <div className="text-xs text-[#756B7C]">
                              {doc.specialtyName} • {doc.experienceYears} yrs exp • ★ {doc.rating}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8B6FAE] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialties Matches */}
              {matchedSpecialties.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-[#8B6FAE] uppercase tracking-wider mb-2 px-2 flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>Specialties ({matchedSpecialties.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedSpecialties.map((spec) => (
                      <button
                        key={spec.id}
                        id={`search-res-spec-${spec.id}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setFilterSpecialtyId(spec.id);
                          setActivePage('doctors');
                        }}
                        className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-[#F9F7FB] border border-[#3E3445]/5 hover:border-[#8B6FAE]/30 text-left transition-all group"
                      >
                        <div>
                          <div className="text-sm font-bold text-[#3E3445] group-hover:text-[#665080]">
                            {spec.name}
                          </div>
                          <div className="text-xs text-[#756B7C]">
                            {spec.doctorCount} Doctors available
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8B6FAE] opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles Matches */}
              {matchedArticles.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-[#8B6FAE] uppercase tracking-wider mb-2 px-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Health Library Articles ({matchedArticles.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedArticles.map((art) => (
                      <button
                        key={art.id}
                        id={`search-res-art-${art.id}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          openArticle(art);
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-[#F9F7FB] border border-[#3E3445]/5 hover:border-[#8B6FAE]/30 text-left transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={art.image}
                            alt={art.title}
                            className="w-12 h-10 rounded-xl object-cover"
                          />
                          <div>
                            <div className="text-xs font-semibold text-[#8B6FAE]">
                              {art.category} • {art.readingTime}
                            </div>
                            <div className="text-sm font-medium text-[#3E3445] group-hover:text-[#665080] line-clamp-1">
                              {art.title}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8B6FAE] opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Matches */}
              {matchedServices.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-[#8B6FAE] uppercase tracking-wider mb-2 px-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Services & Diagnostics ({matchedServices.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedServices.map((srv) => (
                      <button
                        key={srv.id}
                        id={`search-res-srv-${srv.id}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setActivePage('services');
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-[#F9F7FB] border border-[#3E3445]/5 hover:border-[#8B6FAE]/30 text-left transition-all group"
                      >
                        <div>
                          <div className="text-xs font-semibold text-[#8B6FAE]">
                            {srv.category}
                          </div>
                          <div className="text-sm font-bold text-[#3E3445] group-hover:text-[#665080]">
                            {srv.title}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8B6FAE] opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Location Matches */}
              {matchedLocations.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-[#8B6FAE] uppercase tracking-wider mb-2 px-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Locations ({matchedLocations.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedLocations.map((loc) => (
                      <button
                        key={loc.id}
                        id={`search-res-loc-${loc.id}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setActivePage('locations');
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-[#F9F7FB] border border-[#3E3445]/5 hover:border-[#8B6FAE]/30 text-left transition-all group"
                      >
                        <div>
                          <div className="text-sm font-bold text-[#3E3445] group-hover:text-[#665080]">
                            {loc.name}
                          </div>
                          <div className="text-xs text-[#756B7C]">
                            {loc.address}, {loc.city}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8B6FAE] opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
