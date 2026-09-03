import React, { useState } from 'react';
import {
  X,
  Share2,
  ShieldCheck,
  Building,
  UserCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ArrowLeft,
  Key,
  Copy,
  Clock,
} from 'lucide-react';
import { SharePermission } from '../../types';

interface ShareDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGrantShare: (share: SharePermission) => void;
}

export const ShareDataModal: React.FC<ShareDataModalProps> = ({
  isOpen,
  onClose,
  onGrantShare,
}) => {
  const [step, setStep] = useState<number>(1);
  const [recipientName, setRecipientName] = useState('Dr. Priya Sharma');
  const [organization, setOrganization] = useState('Metro Cardiology Specialists');
  const [role, setRole] = useState('Consulting Physician');
  
  // Scopes
  const [scopes, setScopes] = useState({
    passport: true,
    labReports: true,
    prescriptions: true,
    vaccinations: true,
    records: false,
    insurance: false,
  });

  // Expiration duration
  const [expiryOption, setExpiryOption] = useState<'24h' | '7d' | '30d' | 'custom'>('7d');
  const [generatedToken, setGeneratedToken] = useState<string>('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 3) {
      // Generate token
      const token = `NV-SEC-KEY-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
      setGeneratedToken(token);
      setStep(4);
    } else if (step === 4) {
      // Calculate expiration date string
      let expDate = '7 Days from now';
      if (expiryOption === '24h') expDate = 'Tomorrow (24 hrs)';
      if (expiryOption === '30d') expDate = '30 Days from now';

      const newShare: SharePermission = {
        id: `grant_${Date.now()}`,
        recipientName,
        organization,
        role,
        grantedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        expirationDate: expDate,
        status: 'Active',
        accessScopes: scopes,
        accessCount: 0,
        accessTokenHash: generatedToken,
      };

      onGrantShare(newShare);
      setStep(5);
    } else {
      setStep(step + 1);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://nuvita.health/access/${generatedToken}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-[#E5E2DD] p-6 sm:p-8 shadow-2xl space-y-6 text-[#2D3A2D]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DD]">
          <div className="flex items-center space-x-2">
            <Share2 className="w-5 h-5 text-[#A8904F]" />
            <h2 className="text-xl font-bold font-serif text-[#2D3A2D]">
              Secure Provider Access Wizard
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#F5F2ED] text-[#5A5A40]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Step Indicators */}
        <div className="flex items-center justify-between text-xs px-2 font-semibold text-[#5A5A40]">
          <span className={step >= 1 ? 'text-[#A8904F] font-bold' : ''}>1. Recipient</span>
          <span>→</span>
          <span className={step >= 2 ? 'text-[#A8904F] font-bold' : ''}>2. Scope</span>
          <span>→</span>
          <span className={step >= 3 ? 'text-[#A8904F] font-bold' : ''}>3. Expiry</span>
          <span>→</span>
          <span className={step >= 4 ? 'text-[#A8904F] font-bold' : ''}>4. Confirm</span>
        </div>

        {/* STEP 1: Select Recipient */}
        {step === 1 && (
          <div className="space-y-4 text-xs">
            <p className="text-sm font-serif font-bold text-[#2D3A2D]">
              Step 1: Who are you authorizing?
            </p>

            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Recipient Name / Doctor</label>
              <input
                type="text"
                required
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="e.g. Dr. Priya Sharma"
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Clinic / Hospital Organization</label>
              <input
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. Cedar Grove Integrative Medical"
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Professional Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              >
                <option value="Primary Care Physician">Primary Care Physician</option>
                <option value="Cardiologist / Specialist">Cardiologist / Specialist</option>
                <option value="Pulmonologist">Pulmonologist</option>
                <option value="Dentist / Orthodontist">Dentist / Orthodontist</option>
                <option value="Emergency Responder">Emergency Responder</option>
                <option value="Family Member / Caregiver">Family Member / Caregiver</option>
              </select>
            </div>
          </div>
        )}

        {/* STEP 2: Choose Data Scopes */}
        {step === 2 && (
          <div className="space-y-4 text-xs">
            <p className="text-sm font-serif font-bold text-[#2D3A2D]">
              Step 2: Select Granular Information Scopes
            </p>
            <p className="text-[11px] text-[#5A5A40]">
              Only checked categories will be decrypted and presented to this provider.
            </p>

            <div className="space-y-2.5">
              {[
                { key: 'passport', label: 'Health Passport & Emergency Identifiers', desc: 'Vitals, blood group, allergies, organ donor' },
                { key: 'labReports', label: 'Diagnostic Lab Reports', desc: 'Metabolic panels, blood work, hormone screens' },
                { key: 'prescriptions', label: 'Active Prescriptions', desc: 'Medications, dosages, refills' },
                { key: 'vaccinations', label: 'Vaccination Certificates', desc: 'COVID-19, Influenza, Hepatitis records' },
                { key: 'records', label: 'Clinical & Dental Histories', desc: 'Consultation notes, X-ray imaging summaries' },
                { key: 'insurance', label: 'Health Insurance Policies', desc: 'Policy card numbers and coverage tiers' },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] cursor-pointer hover:bg-[#EAE5DC] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={(scopes as any)[item.key]}
                    onChange={(e) => setScopes({ ...scopes, [item.key]: e.target.checked })}
                    className="w-4 h-4 mt-0.5 accent-[#2D3A2D] rounded-md cursor-pointer"
                  />
                  <div>
                    <p className="font-bold text-[#2D3A2D]">{item.label}</p>
                    <p className="text-[11px] text-[#5A5A40]">{item.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Set Expiration */}
        {step === 3 && (
          <div className="space-y-4 text-xs">
            <p className="text-sm font-serif font-bold text-[#2D3A2D]">
              Step 3: Define Token Validity Duration
            </p>
            <p className="text-[11px] text-[#5A5A40]">
              The secure authorization link will automatically expire at the chosen interval.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[
                { id: '24h', label: '24 Hours', desc: 'Ideal for quick clinic visits' },
                { id: '7d', label: '7 Days', desc: 'Standard specialist review' },
                { id: '30d', label: '30 Days', desc: 'Ongoing treatment plan' },
              ].map((exp) => (
                <button
                  type="button"
                  key={exp.id}
                  onClick={() => setExpiryOption(exp.id as any)}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    expiryOption === exp.id
                      ? 'bg-[#2D3A2D] text-white border-[#2D3A2D] shadow-sm'
                      : 'bg-[#F5F2ED] text-[#2D3A2D] border-[#E5E2DD] hover:bg-[#EAE5DC]'
                  }`}
                >
                  <Clock className="w-5 h-5 mx-auto mb-1 opacity-80" />
                  <p className="font-bold">{exp.label}</p>
                  <p className="text-[10px] opacity-75 mt-0.5">{exp.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Review and Generate */}
        {step === 4 && (
          <div className="space-y-4 text-xs">
            <p className="text-sm font-serif font-bold text-[#2D3A2D]">
              Step 4: Review Encrypted Grant Details
            </p>

            <div className="p-4 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Recipient:</span>
                <strong className="text-[#2D3A2D]">{recipientName} ({role})</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Facility:</span>
                <strong className="text-[#2D3A2D]">{organization}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Expiration:</span>
                <strong className="text-[#2D3A2D]">{expiryOption.toUpperCase()} validity</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">One-Time Cryptographic Token:</span>
                <span className="font-mono text-[#A8904F] font-bold">{generatedToken}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-700" />
              <p className="text-[11px]">
                You can revoke access to this provider at any second directly from your Sharing Center.
              </p>
            </div>
          </div>
        )}

        {/* STEP 5: Success & Share Link */}
        {step === 5 && (
          <div className="text-center space-y-4 py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-serif text-[#2D3A2D]">
              Secure Access Granted!
            </h3>
            <p className="text-xs text-[#5A5A40] max-w-sm mx-auto">
              {recipientName} has been authorized to access your selected health records. Send them this secure encrypted portal link:
            </p>

            <div className="p-3 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex items-center justify-between font-mono text-xs text-[#2D3A2D]">
              <span className="truncate pr-2">https://nuvita.health/access/{generatedToken}</span>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-xl bg-[#2D3A2D] text-white text-xs font-semibold flex items-center space-x-1 shrink-0"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#2D3A2D] text-white text-xs font-bold shadow-sm"
            >
              Done & Return to Sharing Center
            </button>
          </div>
        )}

        {/* Navigation Actions */}
        {step < 5 && (
          <div className="pt-3 border-t border-[#E5E2DD] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#5A5A40] hover:bg-[#F5F2ED] flex items-center space-x-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-white text-xs font-bold shadow-sm flex items-center space-x-1.5"
            >
              <span>{step === 4 ? 'Confirm & Authorize' : 'Continue'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
