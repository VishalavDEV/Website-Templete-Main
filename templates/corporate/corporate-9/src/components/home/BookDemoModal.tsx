import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, ShieldCheck, Building2 } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    role: '',
    lendingVertical: 'Mortgage & Refinance',
    monthlyLoanVolume: '1,000 - 5,000 loans/mo',
    preferredChannel: 'Omnichannel (Voice, SMS, Email)',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-2xl max-w-xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-1">
                INSTITUTIONAL WALKTHROUGH
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#191919] font-normal">
                Book a live Boomerang demo
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                See how Boomerang conversational AI agents integrate with your LOS and handle borrower interactions with 100% compliance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Sarah Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F9F9] border border-gray-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="smiller@meridianbank.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F9F9] border border-gray-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Financial Institution</label>
                  <input
                    required
                    type="text"
                    placeholder="Meridian Capital Bank"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F9F9] border border-gray-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Your Role / Title</label>
                  <input
                    required
                    type="text"
                    placeholder="Head of Lending Technology"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F9F9] border border-gray-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Primary Lending Sector</label>
                  <select
                    value={formData.lendingVertical}
                    onChange={(e) => setFormData({ ...formData, lendingVertical: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F9F9] border border-gray-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                  >
                    <option>Mortgage & Refinance</option>
                    <option>Auto Lending & Leasing</option>
                    <option>Commercial & SMB Banking</option>
                    <option>Consumer / Personal Loans</option>
                    <option>Wealth & Private Banking</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Monthly Loan Volume</label>
                  <select
                    value={formData.monthlyLoanVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyLoanVolume: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F9F9] border border-gray-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                  >
                    <option>Under 500 loans/mo</option>
                    <option>500 - 1,000 loans/mo</option>
                    <option>1,000 - 5,000 loans/mo</option>
                    <option>5,000 - 25,000 loans/mo</option>
                    <option>25,000+ loans/mo</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#191919] hover:bg-black text-white text-sm font-medium rounded-xl transition cursor-pointer shadow-sm"
                >
                  Schedule Priority Demo
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-gray-400 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> SOC 2 Type II
                </span>
                <span>•</span>
                <span>NDA & Confidentiality Protected</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif text-[#191919]">
              Demo Request Confirmed
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. A senior solutions architect from Boomerang will email you at <strong>{formData.workEmail}</strong> with calendar invite options tailored for {formData.company}.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#191919] text-white text-xs font-medium rounded-xl hover:bg-black transition cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
