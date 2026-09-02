import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Mail, 
  KeyRound, 
  ShieldCheck, 
  UserCheck, 
  Heart, 
  Plus, 
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';
import { FamilyMember } from '../../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (userData: { name: string; avatar: string; email: string; relation: string; id?: string }) => void;
  familyMembers: FamilyMember[];
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  familyMembers,
}) => {
  const [email, setEmail] = useState('ananya.sharma@healthplus.live');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPresetId, setSelectedPresetId] = useState<string>(familyMembers[0]?.id || 'fam-1');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const matched = familyMembers.find(m => m.id === selectedPresetId) || familyMembers[0];
    onLogin({
      name: matched?.name || 'Ananya Sharma',
      avatar: matched?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
      email: email || `${matched?.name.toLowerCase().replace(/\s+/g, '.')}@healthplus.live`,
      relation: matched?.relation || 'Self',
      id: matched?.id || 'fam-1',
    });
  };

  const handleSelectPreset = (member: FamilyMember) => {
    setSelectedPresetId(member.id);
    setEmail(`${member.name.toLowerCase().replace(/\s+/g, '.')}@healthplus.live`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        id="login-modal-dialog"
      >
        {/* Header with HealthPlus Brand */}
        <div className="bg-[#00A884] px-6 py-5 text-white flex items-center justify-between relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

          <div className="flex items-center space-x-3 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white shadow-xs">
              <div className="relative flex items-center justify-center">
                <Heart className="w-5 h-5 fill-white/20 text-white" />
                <Plus className="w-3 h-3 text-white absolute font-extrabold stroke-[3]" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Outfit',sans-serif]">Log In to HealthPlus</h3>
              <p className="text-xs text-white/80">Access your private health records & doctors</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-white cursor-pointer transition-colors"
            aria-label="Close login dialog"
            id="close-login-modal-btn"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* 1-Click Quick Select Profile */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Select Health Member Account
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {familyMembers.slice(0, 4).map((member) => {
                const isSelected = selectedPresetId === member.id;
                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => handleSelectPreset(member)}
                    className={`flex items-center space-x-2.5 p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#00A884] bg-[#E6F7F3] ring-2 ring-[#00A884]/20 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-9 h-9 rounded-full object-cover border border-white shadow-xs flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-800 truncate">{member.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{member.relation} • {member.age} yrs</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Email or Health ID Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Email or Health ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                id="login-email-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A884]/30 focus:border-[#00A884] transition-all"
                placeholder="name@healthplus.live"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-slate-700">
                Security Password
              </label>
              <button
                type="button"
                onClick={() => alert('Password reset link sent to registered phone number.')}
                className="text-[11px] text-[#00A884] hover:underline font-medium cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                id="login-password-input"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A884]/30 focus:border-[#00A884] transition-all"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Security Features Note */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center space-x-2.5 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-[#00A884] flex-shrink-0" />
            <span className="text-[11px]">256-bit biometric authentication with real-time EHR synchronization.</span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="w-1/3 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              id="confirm-login-btn"
              type="submit"
              className="w-2/3 py-2.5 px-4 rounded-xl bg-[#00A884] hover:bg-[#009272] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#00A884]/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Log In to Site</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
