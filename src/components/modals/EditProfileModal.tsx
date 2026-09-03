import React, { useState } from 'react';
import { X, Save, User, ShieldCheck, Heart, AlertCircle, Phone, Info } from 'lucide-react';
import { UserProfile, BloodGroup } from '../../types';

interface EditProfileModalProps {
  user: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: UserProfile) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  user,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<UserProfile>({ ...user });
  const [allergyInput, setAllergyInput] = useState(user.allergies.join(', '));
  const [conditionInput, setConditionInput] = useState(user.chronicConditions.join(', '));

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: UserProfile = {
      ...formData,
      allergies: allergyInput.split(',').map(s => s.trim()).filter(Boolean),
      chronicConditions: conditionInput.split(',').map(s => s.trim()).filter(Boolean),
      lastUpdated: 'Just now',
    };
    onSave(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#E5E2DD] p-6 sm:p-8 shadow-2xl space-y-6 text-[#2D3A2D]">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DD]">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-[#A8904F]" />
            <h2 className="text-xl font-bold font-serif text-[#2D3A2D]">
              Edit Health Passport Profile
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#F5F2ED] text-[#5A5A40]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Full Legal Name</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Date of Birth</label>
              <input
                type="date"
                required
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Blood Group</label>
              <select
                value={formData.bloodGroup}
                onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value as BloodGroup })}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              >
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-3 pt-6">
              <input
                type="checkbox"
                id="organDonorCheck"
                checked={formData.organDonor}
                onChange={(e) => setFormData({ ...formData, organDonor: e.target.checked })}
                className="w-4 h-4 accent-[#2D3A2D] rounded-md cursor-pointer"
              />
              <label htmlFor="organDonorCheck" className="font-semibold text-[#2D3A2D] cursor-pointer">
                Registered Organ Donor
              </label>
            </div>

          </div>

          <div>
            <label className="block font-semibold text-[#2D3A2D] mb-1">
              Documented Allergies (comma-separated)
            </label>
            <input
              type="text"
              value={allergyInput}
              onChange={(e) => setAllergyInput(e.target.value)}
              placeholder="e.g. Penicillin, Dust Mites, Peanuts"
              className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#2D3A2D] mb-1">
              Chronic Conditions / Notes (comma-separated)
            </label>
            <input
              type="text"
              value={conditionInput}
              onChange={(e) => setConditionInput(e.target.value)}
              placeholder="e.g. Mild Allergic Asthma, Hypertension"
              className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
            />
          </div>

          {/* Emergency Contact */}
          <div className="p-3.5 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] space-y-3">
            <p className="font-bold text-[#2D3A2D] text-xs">Primary Emergency Contact</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Name (e.g. Aarav Sharma)"
                value={formData.emergencyContacts[0]?.name || ''}
                onChange={(e) => {
                  const updated = [...formData.emergencyContacts];
                  updated[0] = { ...updated[0], name: e.target.value };
                  setFormData({ ...formData, emergencyContacts: updated });
                }}
                className="px-3 py-2 bg-white border border-[#E5E2DD] rounded-xl text-[#2D3A2D]"
              />
              <input
                type="text"
                placeholder="Relationship (e.g. Spouse)"
                value={formData.emergencyContacts[0]?.relationship || ''}
                onChange={(e) => {
                  const updated = [...formData.emergencyContacts];
                  updated[0] = { ...updated[0], relationship: e.target.value };
                  setFormData({ ...formData, emergencyContacts: updated });
                }}
                className="px-3 py-2 bg-white border border-[#E5E2DD] rounded-xl text-[#2D3A2D]"
              />
              <input
                type="text"
                placeholder="Phone (e.g. +91 98450 12345)"
                value={formData.emergencyContacts[0]?.phone || ''}
                onChange={(e) => {
                  const updated = [...formData.emergencyContacts];
                  updated[0] = { ...updated[0], phone: e.target.value };
                  setFormData({ ...formData, emergencyContacts: updated });
                }}
                className="px-3 py-2 bg-white border border-[#E5E2DD] rounded-xl font-mono text-[#2D3A2D]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#2D3A2D] mb-1">
              Important Clinical Guidance / Rescue Protocols
            </label>
            <textarea
              rows={2}
              value={formData.importantNotes}
              onChange={(e) => setFormData({ ...formData, importantNotes: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
            />
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-[#E5E2DD] flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[#5A5A40] hover:bg-[#F5F2ED]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-white text-xs font-bold shadow-sm flex items-center space-x-1.5"
            >
              <Save className="w-3.5 h-3.5 text-[#A8904F]" />
              <span>Save Changes</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
