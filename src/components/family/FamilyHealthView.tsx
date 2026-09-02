import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Calendar, 
  Pill, 
  Heart, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Baby, 
  UserPlus, 
  Sparkles, 
  X,
  ArrowRight,
  FileText
} from 'lucide-react';
import { FamilyMember, NavigationTab } from '../../types';

interface FamilyHealthViewProps {
  familyMembers: FamilyMember[];
  selectedFamilyId: string;
  onSelectFamilyMember: (id: string) => void;
  onAddFamilyMember: (newMember: FamilyMember) => void;
  onNavigate: (tab: NavigationTab) => void;
}

export const FamilyHealthView: React.FC<FamilyHealthViewProps> = ({
  familyMembers,
  selectedFamilyId,
  onSelectFamilyMember,
  onAddFamilyMember,
  onNavigate,
}) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newRelation, setNewRelation] = useState('Spouse');
  const [newAge, setNewAge] = useState('30');
  const [newBloodType, setNewBloodType] = useState('O+');

  const currentMember = familyMembers.find(m => m.id === selectedFamilyId) || familyMembers[0];

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newMem: FamilyMember = {
      id: `fam-${Date.now()}`,
      name: newName,
      relation: newRelation,
      age: parseInt(newAge) || 30,
      gender: 'Other',
      bloodType: newBloodType,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      allergies: ['None reported'],
      height: 170,
      weight: 65,
      activeMedicationsCount: 0,
      upcomingAppointmentsCount: 0,
    };

    onAddFamilyMember(newMem);
    setNewName('');
    setAddModalOpen(false);
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-xs relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F7F3] border border-[#00A884]/20 text-[#00A884] text-xs font-semibold">
            <Users className="w-3.5 h-3.5 text-[#00A884]" />
            <span>Multi-Profile Care Management</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Family Health & Dependents
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            Manage electronic medical records, pediatric vaccine schedules, and elderly parent care plans from a single consolidated dashboard.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 relative z-10">
          <button
            onClick={() => setAddModalOpen(true)}
            className="px-4 py-2.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all flex items-center space-x-2 cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>Add Family Member</span>
          </button>
        </div>
      </div>

      {/* Family Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {familyMembers.map((member) => {
          const isSelected = member.id === currentMember?.id;
          return (
            <div
              key={member.id}
              onClick={() => onSelectFamilyMember(member.id)}
              className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'bg-[#E6F7F3] border-[#00A884] shadow-xs ring-1 ring-[#00A884]'
                  : 'bg-white border-[#E2E8F0] hover:border-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3.5">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-800">{member.name}</h3>
                  <p className="text-xs text-slate-500">{member.relation} • {member.age} yrs</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-white border border-slate-200 text-slate-700 text-[10px] font-bold rounded-md">
                    Blood: {member.bloodType}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-white/80 p-2 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Meds</span>
                  <span className="font-bold text-slate-800">{member.activeMedicationsCount || 0} active</span>
                </div>
                <div className="bg-white/80 p-2 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Visits</span>
                  <span className="font-bold text-slate-800">{member.upcomingAppointmentsCount || 0} soon</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Member Detail View */}
      {currentMember && (
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-slate-800">
                  {currentMember.name}'s Medical Profile
                </h2>
                <span className="px-2.5 py-0.5 bg-[#E6F7F3] text-[#00A884] text-[10px] font-bold rounded-full">
                  {currentMember.relation}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Allergic Sensitivities: <strong className="text-slate-800">{currentMember.allergies?.join(', ') || 'None reported'}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('appointments')}
                className="px-4 py-2 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Doctor for {currentMember?.name ? currentMember.name.split(' ')[0] : 'Member'}</span>
              </button>
              <button
                onClick={() => onNavigate('reports')}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold border border-slate-200 transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#00A884]" />
                <span>View Lab Reports</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Vitals Summary */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Physical Stats</span>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Height:</span>
                  <span className="font-bold text-slate-800">{currentMember.height || 165} cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Weight:</span>
                  <span className="font-bold text-slate-800">{currentMember.weight || 62} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Blood Group:</span>
                  <span className="font-bold text-slate-800">{currentMember.bloodType}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Prescriptions</span>
              <p className="text-xs text-slate-600">
                {currentMember.activeMedicationsCount || 0} active daily prescriptions scheduled.
              </p>
              <button
                onClick={() => onNavigate('pharmacy')}
                className="text-xs font-bold text-[#00A884] hover:underline flex items-center gap-1 cursor-pointer pt-1"
              >
                Manage Pharmacy Refills →
              </button>
            </div>

            {/* Preventive Schedule */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Preventive Care</span>
              <p className="text-xs text-slate-600">
                Annual comprehensive wellness screening due in 3 months.
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#00A884] hover:underline flex items-center gap-1 cursor-pointer pt-1"
              >
                Schedule Annual Checkup →
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Add Family Member Modal */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <UserPlus className="w-5 h-5 text-[#00A884]" />
                <h3 className="font-bold text-base text-slate-800">Add Dependent or Family Member</h3>
              </div>
              <button
                onClick={() => setAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Rohan Sharma"
                  className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#00A884] outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Relationship
                  </label>
                  <select
                    value={newRelation}
                    onChange={(e) => setNewRelation(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-slate-800 focus:bg-white focus:border-[#00A884] outline-none"
                  >
                    <option>Spouse</option>
                    <option>Child</option>
                    <option>Parent</option>
                    <option>Sibling</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    value={newAge}
                    onChange={(e) => setNewAge(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-slate-800 focus:bg-white focus:border-[#00A884] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Blood Group
                </label>
                <select
                  value={newBloodType}
                  onChange={(e) => setNewBloodType(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-slate-800 focus:bg-white focus:border-[#00A884] outline-none"
                >
                  <option>O+</option>
                  <option>O-</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setAddModalOpen(false)}
                  className="flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                >
                  Add to Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
