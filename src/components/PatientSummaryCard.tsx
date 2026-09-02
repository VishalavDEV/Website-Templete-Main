import React, { useState } from 'react';
import { 
  User, 
  Heart, 
  AlertTriangle, 
  ShieldCheck, 
  Phone, 
  Activity, 
  FileText,
  Calendar,
  Sparkles,
  Edit2,
  Check
} from 'lucide-react';
import { Patient } from '../types';

interface PatientSummaryCardProps {
  patient: Patient;
  onUpdateAllergies: (newAllergies: string[]) => void;
}

export const PatientSummaryCard: React.FC<PatientSummaryCardProps> = ({
  patient,
  onUpdateAllergies,
}) => {
  const [isEditingAllergies, setIsEditingAllergies] = useState(false);
  const [allergyInput, setAllergyInput] = useState(patient.allergies.join(', '));

  const handleSaveAllergies = () => {
    const list = allergyInput.split(',').map(s => s.trim()).filter(Boolean);
    onUpdateAllergies(list);
    setIsEditingAllergies(false);
  };

  return (
    <div 
      id="patient-medical-banner-card"
      className="bg-white rounded-3xl border border-slate-100 p-5 sm:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
    >
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5">
        {/* Left: Patient Profile Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative">
            <img
              src={patient.avatarUrl}
              alt={patient.name}
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover ring-4 ring-teal-50 shadow-sm"
            />
            <span className="absolute -bottom-1 -right-1 bg-teal-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
              Active
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 font-['Outfit']">
                {patient.name}
              </h2>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                {patient.age} yrs • {patient.gender}
              </span>
              <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded-md">
                Blood Type: {patient.bloodType}
              </span>
            </div>

            <p className="text-xs text-slate-500 flex items-center gap-2 flex-wrap">
              <span>Patient ID: <strong className="text-slate-800 font-mono">{patient.id}</strong></span>
              <span className="text-slate-300">•</span>
              <span>Insurance: <strong className="text-slate-800">{patient.insuranceId}</strong></span>
              <span className="text-slate-300">•</span>
              <span>PCP: <strong className="text-teal-700">{patient.primaryDoctor}</strong></span>
            </p>
          </div>
        </div>

        {/* Right: Allergies & Emergency Contact */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full xl:w-auto pt-3 xl:pt-0 border-t xl:border-t-0 border-slate-100">
          {/* Allergies Block */}
          <div className="p-3 bg-rose-50/70 rounded-2xl border border-rose-100 flex-1 sm:flex-initial">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[11px] font-bold text-rose-900 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                Medical Allergies ({patient.allergies.length})
              </span>
              <button
                onClick={() => setIsEditingAllergies(!isEditingAllergies)}
                className="text-[10px] text-rose-600 hover:text-rose-800 font-semibold cursor-pointer underline"
              >
                {isEditingAllergies ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {isEditingAllergies ? (
              <div className="flex items-center gap-1.5 mt-1">
                <input
                  type="text"
                  value={allergyInput}
                  onChange={(e) => setAllergyInput(e.target.value)}
                  className="px-2 py-1 bg-white border border-rose-200 rounded-lg text-xs text-slate-800 w-44 focus:outline-none"
                  placeholder="Penicillin, Peanuts..."
                />
                <button
                  onClick={handleSaveAllergies}
                  className="p-1 bg-rose-600 text-white rounded-lg text-xs cursor-pointer"
                >
                  <Check className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 flex-wrap">
                {patient.allergies.map((allergy, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold text-rose-700 bg-white border border-rose-200/80 px-2 py-0.5 rounded-lg shadow-2xs"
                  >
                    {allergy}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Emergency Contact */}
          <div className="p-3 bg-sky-50/70 rounded-2xl border border-sky-100 text-xs flex-1 sm:flex-initial">
            <span className="text-[11px] font-bold text-sky-900 flex items-center gap-1 mb-1">
              <Phone className="w-3 h-3 text-sky-600" />
              Emergency Contact ({patient.emergencyContact.relationship})
            </span>
            <div className="text-[11px] text-slate-700">
              <span className="font-semibold">{patient.emergencyContact.name}</span>
              <span className="text-slate-400 mx-1.5">•</span>
              <span className="font-mono text-sky-800 font-bold">{patient.emergencyContact.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
