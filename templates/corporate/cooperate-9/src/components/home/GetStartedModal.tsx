import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, UserCheck, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { Logo } from '../common/Logo';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accountType: 'Individual Wealth & Growth',
    primaryGoal: 'Accelerated Savings & Real Estate',
    portfolioRange: '$250,000 - $1,000,000',
    preferredAdvisorStyle: 'Collaborative AI + Dedicated Human Advisor',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-lg w-full p-6 sm:p-9 relative max-h-[90vh] overflow-y-auto">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Logo />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#191919] font-normal leading-tight">
                Begin your Finora experience
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Connect your financial universe with personalized AI guidance and dedicated relationship management.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Ava Montgomery"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F5F0] border border-[#EBE8E1] rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="ava@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F5F0] border border-[#EBE8E1] rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Account Relationship Type</label>
                <select
                  value={formData.accountType}
                  onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F5F0] border border-[#EBE8E1] rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                >
                  <option>Individual Wealth & Growth</option>
                  <option>Family Office & Generational Trust</option>
                  <option>Business Enterprise & Commercial</option>
                  <option>Executive Equity & Tax Planning</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Primary Financial Goal</label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F5F0] border border-[#EBE8E1] rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                >
                  <option>Accelerated Savings & Real Estate</option>
                  <option>Portfolio Optimization & Alpha</option>
                  <option>Tax Loss Harvesting & Preservation</option>
                  <option>Retirement & Financial Independence</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Estimated Investable Assets</label>
                <select
                  value={formData.portfolioRange}
                  onChange={(e) => setFormData({ ...formData, portfolioRange: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F5F0] border border-[#EBE8E1] rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                >
                  <option>$50,000 - $250,000</option>
                  <option>$250,000 - $1,000,000</option>
                  <option>$1,000,000 - $5,000,000</option>
                  <option>$5,000,000+</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#191919] hover:bg-black text-white text-sm font-medium rounded-full transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Connect with Advisor & Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] font-sans text-gray-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Bank-grade 256-bit encryption
                </span>
                <span>•</span>
                <span>Fiduciary Standard</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#191919] font-normal">
              Welcome to Finora
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name || 'Ava'}</strong>. We have matched you with Senior Relationship Advisor <strong>Marcus Vance</strong>. Your personalized onboarding link has been sent to <strong>{formData.email || 'your email'}</strong>.
            </p>
            <div className="p-4 bg-[#F7F5F0] rounded-2xl border border-[#EBE8E1] max-w-xs mx-auto text-left space-y-1.5 text-xs text-gray-700">
              <div className="font-semibold text-[#191919]">Your Setup Summary:</div>
              <div>• Relationship: {formData.accountType}</div>
              <div>• Goal: {formData.primaryGoal}</div>
              <div className="text-emerald-700 font-medium">✓ AI Goal Acceleration: Active</div>
            </div>
            <button
              onClick={handleReset}
              className="mt-2 px-8 py-3 bg-[#191919] text-white text-xs font-medium rounded-full hover:bg-black transition cursor-pointer"
            >
              Enter Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
