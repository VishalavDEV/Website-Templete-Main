import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, UserCheck, Building2, Cpu, Calendar, ShieldAlert, ArrowRight, X, Clock, Stethoscope } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Doctor, Department, MedicalService } from '../types';

export const CommandPalette: React.FC = () => {
  const {
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    doctors,
    departments,
    services,
    openDoctorProfile,
    openBooking,
    setActiveTab,
    setSelectedSpecialtyFilter
  } = useApp();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isCommandPaletteOpen]);

  // Filter items
  const cleanQ = query.toLowerCase().trim();

  const matchedDoctors = doctors.filter(
    (d) =>
      d.name.toLowerCase().includes(cleanQ) ||
      d.specialty.toLowerCase().includes(cleanQ) ||
      d.departmentName.toLowerCase().includes(cleanQ) ||
      d.featuredTreatments.some((t) => t.toLowerCase().includes(cleanQ))
  ).slice(0, 4);

  const matchedDepartments = departments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(cleanQ) ||
      dept.shortDescription.toLowerCase().includes(cleanQ) ||
      dept.keyProcedures.some((p) => p.toLowerCase().includes(cleanQ))
  ).slice(0, 3);

  const matchedServices = services.filter(
    (s) =>
      s.name.toLowerCase().includes(cleanQ) ||
      s.category.toLowerCase().includes(cleanQ) ||
      s.shortDesc.toLowerCase().includes(cleanQ)
  ).slice(0, 3);

  interface SearchItem {
    id: string;
    type: 'doctor' | 'department' | 'service' | 'action';
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    action: () => void;
  }

  const allItems: SearchItem[] = [
    ...matchedDoctors.map((doc) => ({
      id: `doc-${doc.id}`,
      type: 'doctor' as const,
      title: `${doc.name}, ${doc.title}`,
      subtitle: `${doc.specialty} • ${doc.departmentName}`,
      icon: <UserCheck className="w-4 h-4 text-[#1A535C]" />,
      action: () => {
        setIsCommandPaletteOpen(false);
        openDoctorProfile(doc);
      }
    })),
    ...matchedDepartments.map((dept) => ({
      id: `dept-${dept.id}`,
      type: 'department' as const,
      title: dept.name,
      subtitle: `${dept.specialistCount} Specialists • ${dept.headOfDepartment}`,
      icon: <Building2 className="w-4 h-4 text-[#1A535C]" />,
      action: () => {
        setIsCommandPaletteOpen(false);
        setSelectedSpecialtyFilter(dept.name.split(' ')[0]);
        setActiveTab('doctors');
      }
    })),
    ...matchedServices.map((svc) => ({
      id: `svc-${svc.id}`,
      type: 'service' as const,
      title: svc.name,
      subtitle: `${svc.category} • ${svc.turnaroundTime}`,
      icon: <Cpu className="w-4 h-4 text-[#1A535C]" />,
      action: () => {
        setIsCommandPaletteOpen(false);
        setActiveTab('services');
      }
    }))
  ];

  // Default quick actions if query is empty
  if (cleanQ.length === 0) {
    allItems.push(
      {
        id: 'action-book',
        type: 'action',
        title: 'Book a New Clinical Consultation',
        subtitle: 'Schedule in-person clinic or telehealth HD appointment',
        icon: <Calendar className="w-4 h-4 text-[#1A535C]" />,
        action: () => {
          setIsCommandPaletteOpen(false);
          openBooking();
        }
      },
      {
        id: 'action-emergency',
        type: 'action',
        title: 'Emergency Care & Campus Wait Times',
        subtitle: '24/7 Level 1 Trauma Center direct dispatch & directions',
        icon: <ShieldAlert className="w-4 h-4 text-rose-600" />,
        action: () => {
          setIsCommandPaletteOpen(false);
          setActiveTab('emergency');
        }
      },
      {
        id: 'action-patient-dash',
        type: 'action',
        title: 'Open Patient Health Records & Portal',
        subtitle: 'View upcoming appointments, vitals, and lab results',
        icon: <Stethoscope className="w-4 h-4 text-[#1A535C]" />,
        action: () => {
          setIsCommandPaletteOpen(false);
          setActiveTab('patient_dashboard');
        }
      }
    );
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(allItems.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + allItems.length) % Math.max(allItems.length, 1));
    } else if (e.key === 'Enter' && allItems[selectedIndex]) {
      e.preventDefault();
      allItems[selectedIndex].action();
    } else if (e.key === 'Escape') {
      setIsCommandPaletteOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isCommandPaletteOpen && (
        <div
          id="command-palette-backdrop"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-[#0A1128]/80 backdrop-blur-md"
          onClick={() => setIsCommandPaletteOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            id="command-palette-modal"
            className="w-full max-w-2xl bg-white rounded-[28px] shadow-2xl border border-gray-200 overflow-hidden text-[#0A1128]"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-5 py-4 border-b border-gray-100 bg-[#FAF9F6]">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search specialists, treatments, departments, services, or procedures..."
                className="w-full bg-transparent text-sm sm:text-base text-[#0A1128] placeholder-slate-400 focus:outline-hidden"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-slate-400 hover:text-[#0A1128] rounded-md mr-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2.5 py-1 text-[10px] font-bold text-[#4A5568] bg-gray-200/80 rounded-full border border-gray-300">
                ESC
              </kbd>
            </div>

            {/* Results list */}
            <div className="max-h-96 overflow-y-auto p-3 divide-y divide-gray-100">
              {allItems.length === 0 ? (
                <div className="py-12 text-center text-[#4A5568]">
                  <p className="text-sm font-bold text-[#0A1128] mb-1">No healthcare results found</p>
                  <p className="text-xs text-[#4A5568]">Try searching for &quot;Cardiology&quot;, &quot;Dr. Sarah Lin&quot;, &quot;MRI&quot;, or &quot;Telehealth&quot;</p>
                </div>
              ) : (
                <div className="space-y-1.5">
                  {allItems.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        id={`command-item-${idx}`}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1A535C]/10 border border-[#1A535C]/30 text-[#0A1128]'
                            : 'hover:bg-[#FAF9F6] border border-transparent text-[#0A1128]'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div
                            className={`p-2.5 rounded-xl ${
                              isSelected ? 'bg-white shadow-xs text-[#1A535C]' : 'bg-[#FAF9F6] text-[#4A5568]'
                            }`}
                          >
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-[#0A1128] truncate">
                              {item.title}
                            </p>
                            <p className="text-xs text-[#4A5568] truncate">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected ? 'text-[#1A535C] translate-x-0.5' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer helper */}
            <div className="px-5 py-3 bg-[#FAF9F6] border-t border-gray-100 flex items-center justify-between text-[10px] text-[#4A5568]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 font-mono">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded-md">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded-md">↓</kbd>
                  to navigate
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded-md">↵</kbd>
                  to select
                </span>
              </div>
              <span className="text-[#1A535C] font-bold flex items-center gap-1">
                <Clock className="w-3 h-3" /> Aurevia Instant Spotlight
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
