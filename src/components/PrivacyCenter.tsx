import React, { useState } from 'react';
import {
  Lock,
  ShieldCheck,
  Key,
  Download,
  Trash2,
  Eye,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
  HardDrive,
  RefreshCw,
  Sliders,
  ShieldAlert,
} from 'lucide-react';
import { UserProfile, SecurityLog, SharePermission } from '../types';

interface PrivacyCenterProps {
  user: UserProfile;
  shares: SharePermission[];
  securityLogs: SecurityLog[];
  onRevokeAllShares: () => void;
}

export const PrivacyCenter: React.FC<PrivacyCenterProps> = ({
  user,
  shares,
  securityLogs,
  onRevokeAllShares,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [zeroKnowledge, setZeroKnowledge] = useState(true);
  const [emergencyBypass, setEmergencyBypass] = useState(true);
  const [analyticsSharing, setAnalyticsSharing] = useState(false);
  const [biometricLock, setBiometricLock] = useState(true);

  const activeCount = shares.filter(s => s.status === 'Active').length;

  const handleDownloadAllData = () => {
    const fullExport = {
      archiveGeneratedAt: new Date().toISOString(),
      patientId: user.passportId,
      profile: user,
      activeSharePermissions: shares,
      securityAuditTrail: securityLogs,
      complianceStandard: 'GDPR / HIPAA / ISO 27701 Sovereign Patient Control',
    };

    const blob = new Blob([JSON.stringify(fullExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Nuvita_Complete_Health_Archive_${user.fullName.replace(/\s+/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5E2DD]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8904F] uppercase tracking-wider">
            <Lock className="w-4 h-4 text-[#A8904F]" />
            <span>Privacy by Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#2D3A2D] mt-1">
            Privacy & Security Vault
          </h1>
          <p className="text-sm text-[#5A5A40] mt-1 max-w-2xl">
            Your health information is private by design. Nuvita employs client-side cryptographic encryption, meaning nobody can access your data without your consent.
          </p>
        </div>

        {/* Download Data Button */}
        <button
          id="download-complete-health-archive-btn"
          onClick={handleDownloadAllData}
          className="px-5 py-2.5 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-xs font-semibold text-white flex items-center space-x-2 shadow-sm transition-all shrink-0"
        >
          {downloadSuccess ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4 text-[#A8904F]" />}
          <span>{downloadSuccess ? 'Archive Downloaded' : 'Download Complete Health Archive'}</span>
        </button>
      </div>

      {/* 3 Signature Pillars: Your Data • Your Control • Your Permissions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* 1. Your Data */}
        <div className="p-6 rounded-2xl bg-white border border-[#E5E2DD] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex items-center justify-center text-[#2D3A2D]">
            <HardDrive className="w-5 h-5 text-[#A8904F]" />
          </div>
          <h3 className="text-lg font-bold font-serif text-[#2D3A2D]">Your Data</h3>
          <p className="text-xs text-[#5A5A40] leading-relaxed">
            All stored documents, lab trends, and passport vitals reside in an AES-GCM 256-bit encrypted partition. You own 100% of your data sovereignty.
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#2D3A2D] font-semibold">
            Status: Fully Encrypted (Local-First)
          </div>
        </div>

        {/* 2. Your Control */}
        <div className="p-6 rounded-2xl bg-white border border-[#E5E2DD] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex items-center justify-center text-[#A8904F]">
            <Key className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-serif text-[#2D3A2D]">Your Control</h3>
          <p className="text-xs text-[#5A5A40] leading-relaxed">
            Instantly revoke provider tokens, wipe offline cache, or export your complete clinical timeline into standard FHIR/JSON formats anytime.
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#A8904F] font-semibold">
            Master Key: User Controlled
          </div>
        </div>

        {/* 3. Your Permissions */}
        <div className="p-6 rounded-2xl bg-white border border-[#E5E2DD] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex items-center justify-center text-[#2D3A2D]">
            <ShieldCheck className="w-5 h-5 text-[#A8904F]" />
          </div>
          <h3 className="text-lg font-bold font-serif text-[#2D3A2D]">Your Permissions</h3>
          <p className="text-xs text-[#5A5A40] leading-relaxed">
            {activeCount} active authorized provider grants. Every share token strictly expires automatically after its allocated validity period.
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#2D3A2D] font-semibold">
            {activeCount} Active Access Grants
          </div>
        </div>

      </div>

      {/* Privacy & Cryptographic Toggles */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E2DD] shadow-xs space-y-6">
        <h3 className="text-base font-bold font-serif text-[#2D3A2D] pb-3 border-b border-[#E5E2DD]">
          Security & Access Safeguards
        </h3>

        <div className="space-y-4">
          
          <div className="flex items-center justify-between gap-4 p-3.5 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD]">
            <div>
              <p className="text-xs font-bold text-[#2D3A2D]">Zero-Knowledge End-to-End Vault</p>
              <p className="text-[11px] text-[#5A5A40]">Encrypts clinical records before writing to storage.</p>
            </div>
            <input
              type="checkbox"
              checked={zeroKnowledge}
              onChange={(e) => setZeroKnowledge(e.target.checked)}
              className="w-5 h-5 accent-[#2D3A2D] rounded-md cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between gap-4 p-3.5 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD]">
            <div>
              <p className="text-xs font-bold text-[#2D3A2D]">Emergency Responder Fast-Bypass</p>
              <p className="text-[11px] text-[#5A5A40]">Allows scanning of Emergency Health Card QR during acute triage without passkey prompt.</p>
            </div>
            <input
              type="checkbox"
              checked={emergencyBypass}
              onChange={(e) => setEmergencyBypass(e.target.checked)}
              className="w-5 h-5 accent-[#2D3A2D] rounded-md cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between gap-4 p-3.5 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD]">
            <div>
              <p className="text-xs font-bold text-[#2D3A2D]">Biometric Fingerprint / Face ID Re-Authentication</p>
              <p className="text-[11px] text-[#5A5A40]">Prompts device authentication when accessing sensitive lab records or prescriptions.</p>
            </div>
            <input
              type="checkbox"
              checked={biometricLock}
              onChange={(e) => setBiometricLock(e.target.checked)}
              className="w-5 h-5 accent-[#2D3A2D] rounded-md cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between gap-4 p-3.5 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD]">
            <div>
              <p className="text-xs font-bold text-[#2D3A2D]">Anonymized Research & Epidemic Telemetry</p>
              <p className="text-[11px] text-[#5A5A40]">Opt-in to sharing de-identified symptom signals with public health researchers.</p>
            </div>
            <input
              type="checkbox"
              checked={analyticsSharing}
              onChange={(e) => setAnalyticsSharing(e.target.checked)}
              className="w-5 h-5 accent-[#2D3A2D] rounded-md cursor-pointer"
            />
          </div>

        </div>

        {/* Emergency Kill-Switch for all shares */}
        <div className="pt-4 border-t border-[#E5E2DD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs text-[#5A5A40]">
            Need to instantly cut off all external provider access?
          </div>
          <button
            onClick={onRevokeAllShares}
            className="px-4 py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-xs transition-colors shrink-0"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Revoke All Active Shares Immediately</span>
          </button>
        </div>
      </div>

      {/* Real-time Security Access Audit Log */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E2DD] shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DD]">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#A8904F]" />
            <h3 className="text-base font-bold font-serif text-[#2D3A2D]">
              Data Access Audit Trail
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[#5A5A40]">
            Tamper-Evident Ledger
          </span>
        </div>

        <div className="divide-y divide-[#E5E2DD]">
          {securityLogs.map((log) => (
            <div key={log.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div>
                <p className="font-bold text-[#2D3A2D]">{log.action}</p>
                <p className="text-[11px] text-[#5A5A40]">
                  Initiated by <strong className="text-[#2D3A2D]">{log.actor}</strong> • {log.device}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#F5F2ED] text-[#2D3A2D] border border-[#E5E2DD]">
                  {log.status}
                </span>
                <p className="text-[10px] text-[#5A5A40] font-mono mt-0.5">{log.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
