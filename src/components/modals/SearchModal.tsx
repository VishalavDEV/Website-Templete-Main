import React, { useState } from 'react';
import { Search, X, FileText, CalendarDays, MapPin, BookOpen, ChevronRight } from 'lucide-react';
import { MedicalDocument, PreventiveItem, HealthFacility, SymptomLog } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  documents: MedicalDocument[];
  preventionItems: PreventiveItem[];
  facilities: HealthFacility[];
  symptomLogs: SymptomLog[];
  onNavigate: (tab: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  documents,
  preventionItems,
  facilities,
  symptomLogs,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedDocs = documents.filter(d =>
    d.title.toLowerCase().includes(query.toLowerCase()) ||
    d.facility.toLowerCase().includes(query.toLowerCase()) ||
    d.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const matchedPrevention = preventionItems.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  const matchedFacilities = facilities.filter(f =>
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.services.some(s => s.toLowerCase().includes(query.toLowerCase()))
  );

  const matchedSymptoms = symptomLogs.filter(s =>
    s.symptom.toLowerCase().includes(query.toLowerCase()) ||
    (s.trigger && s.trigger.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#E5E2DD] p-6 shadow-2xl space-y-4 text-[#2D3A2D]">
        
        {/* Search Input Bar */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#5A5A40]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documents, vaccines, clinics, symptoms..."
            className="w-full pl-12 pr-10 py-3.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-sm text-[#2D3A2D] placeholder-[#5A5A40] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-xl hover:bg-[#F5F2ED] text-[#5A5A40]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto space-y-4 pr-1 text-xs">
          
          {query.trim() === '' ? (
            <div className="p-6 text-center text-[#5A5A40] space-y-1">
              <p className="font-semibold font-serif text-[#2D3A2D]">Universal Health Search</p>
              <p className="text-[11px]">Type keywords like "Lipid", "Dental", "Cardio", "Headache", "Emergency"</p>
            </div>
          ) : (
            <>
              {/* Documents */}
              {matchedDocs.length > 0 && (
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#A8904F] uppercase font-bold px-2">
                    <FileText className="w-3.5 h-3.5 text-[#A8904F]" />
                    <span>Medical Documents ({matchedDocs.length})</span>
                  </div>
                  {matchedDocs.map(doc => (
                    <div
                      key={doc.id}
                      onClick={() => { onNavigate('documents'); onClose(); }}
                      className="p-3 rounded-xl bg-[#F5F2ED] hover:bg-[#EAE5DC] border border-[#E5E2DD] cursor-pointer flex items-center justify-between transition-colors"
                    >
                      <div>
                        <p className="font-bold text-[#2D3A2D]">{doc.title}</p>
                        <p className="text-[11px] text-[#5A5A40]">{doc.facility} • {doc.date}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#A8904F]" />
                    </div>
                  ))}
                </div>
              )}

              {/* Prevention Items */}
              {matchedPrevention.length > 0 && (
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#A8904F] uppercase font-bold px-2">
                    <CalendarDays className="w-3.5 h-3.5 text-[#A8904F]" />
                    <span>Preventive Care ({matchedPrevention.length})</span>
                  </div>
                  {matchedPrevention.map(prev => (
                    <div
                      key={prev.id}
                      onClick={() => { onNavigate('prevention'); onClose(); }}
                      className="p-3 rounded-xl bg-[#F5F2ED] hover:bg-[#EAE5DC] border border-[#E5E2DD] cursor-pointer flex items-center justify-between transition-colors"
                    >
                      <div>
                        <p className="font-bold text-[#2D3A2D]">{prev.title}</p>
                        <p className="text-[11px] text-[#5A5A40]">Target: {prev.targetDate} • {prev.category}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#A8904F]" />
                    </div>
                  ))}
                </div>
              )}

              {/* Facilities */}
              {matchedFacilities.length > 0 && (
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#A8904F] uppercase font-bold px-2">
                    <MapPin className="w-3.5 h-3.5 text-[#A8904F]" />
                    <span>Care Facilities ({matchedFacilities.length})</span>
                  </div>
                  {matchedFacilities.map(fac => (
                    <div
                      key={fac.id}
                      onClick={() => { onNavigate('nearby'); onClose(); }}
                      className="p-3 rounded-xl bg-[#F5F2ED] hover:bg-[#EAE5DC] border border-[#E5E2DD] cursor-pointer flex items-center justify-between transition-colors"
                    >
                      <div>
                        <p className="font-bold text-[#2D3A2D]">{fac.name}</p>
                        <p className="text-[11px] text-[#5A5A40]">{fac.address} • {fac.distance}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#A8904F]" />
                    </div>
                  ))}
                </div>
              )}

              {/* Symptoms */}
              {matchedSymptoms.length > 0 && (
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#A8904F] uppercase font-bold px-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#A8904F]" />
                    <span>Symptom Logs ({matchedSymptoms.length})</span>
                  </div>
                  {matchedSymptoms.map(sym => (
                    <div
                      key={sym.id}
                      onClick={() => { onNavigate('journal'); onClose(); }}
                      className="p-3 rounded-xl bg-[#F5F2ED] hover:bg-[#EAE5DC] border border-[#E5E2DD] cursor-pointer flex items-center justify-between transition-colors"
                    >
                      <div>
                        <p className="font-bold text-[#2D3A2D]">{sym.symptom}</p>
                        <p className="text-[11px] text-[#5A5A40]">{sym.date} • Trigger: {sym.trigger || 'N/A'}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#A8904F]" />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
};
