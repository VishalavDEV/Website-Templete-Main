import React from 'react';
import { useApp } from '../context/AppContext';
import locationsData from '../data/locations.json';
import { LocationClinic } from '../types';
import {
  MapPin,
  Phone,
  Clock,
  Calendar,
  Building,
  CheckCircle2,
  Navigation,
  ShieldCheck,
  Users,
  Sparkles,
} from 'lucide-react';

export const LocationsView: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  const { openBooking, showToast } = useApp();
  const locations = locationsData as LocationClinic[];

  const handleGetDirections = (loc: LocationClinic) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${loc.address}, ${loc.city}`);
    }
    showToast(`Address copied to clipboard: ${loc.address}`, 'info');
  };

  return (
    <section
      id="locations-section"
      className={`py-16 md:py-24 ${isFullPage ? 'pt-32' : 'bg-[#FFFDFC]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>OUR SANCTUARY CLINICS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E3445] tracking-tight">
            Thoughtfully designed medical sanctuaries.
          </h2>
          <p className="text-sm sm:text-base text-[#756B7C] mt-3 leading-relaxed">
            Every Aura Health facility is acoustically softened, filled with natural light, and
            engineered to deliver unhurried clinical precision.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.id}
              id={`location-card-${loc.id}`}
              className="lilac-card lilac-card-hover rounded-3xl overflow-hidden bg-white flex flex-col justify-between group space-y-6"
            >
              <div>
                {/* Photo & Emergency Status Badge */}
                <div className="relative">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-56 object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md bg-white/95 text-[#665080]">
                      {loc.emergencyHours}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E8DDF2] text-[#665080] flex items-center gap-1 shadow-xs">
                      <Users className="w-3 h-3" />
                      <span>{loc.specialistCount} Specialists</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-[#8B6FAE] uppercase tracking-wider mb-1">
                      {loc.city}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#3E3445] group-hover:text-[#665080] transition-colors">
                      {loc.name}
                    </h3>
                  </div>

                  {/* Metadata Row */}
                  <div className="space-y-2 text-xs text-[#756B7C] pt-2 border-t border-[#3E3445]/6">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#8B6FAE] mt-0.5 shrink-0" />
                      <span>
                        {loc.address}, {loc.city}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#8B6FAE] shrink-0" />
                      <a href={`tel:${loc.phone}`} className="hover:text-[#665080]">
                        {loc.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#8B6FAE] shrink-0" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>

                  {/* Departments on Site */}
                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-[#3E3445] mb-2">
                      Onsite Facilities & Labs:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.services.map((srv) => (
                        <span
                          key={srv}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#F9F7FB] text-[#756B7C] border border-[#3E3445]/5"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 space-y-2 border-t border-[#3E3445]/6">
                <div className="grid grid-cols-2 gap-2 pt-3">
                  <button
                    id={`directions-btn-${loc.id}`}
                    onClick={() => handleGetDirections(loc)}
                    className="py-2.5 text-xs font-semibold text-[#665080] bg-[#E8DDF2]/60 hover:bg-[#E8DDF2] rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Directions</span>
                  </button>

                  <button
                    id={`book-clinic-btn-${loc.id}`}
                    onClick={() => openBooking()}
                    className="py-2.5 text-xs font-semibold bg-[#8B6FAE] hover:bg-[#665080] text-white rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Here</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
