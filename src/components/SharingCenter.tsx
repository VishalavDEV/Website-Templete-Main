import React, { useState } from 'react';
import {
  Lock,
  ShieldCheck,
  Share2,
  Key,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Plus,
  Trash2,
  Eye,
  RefreshCw,
  Building,
  UserCheck,
  Info,
} from 'lucide-react';
import { SharePermission } from '../types';

interface SharingCenterProps {
  shares: SharePermission[];
  onOpenNewShare: () => void;
  onRevokeShare: (id: string) => void;
}

export const SharingCenter: React.FC<SharingCenterProps> = ({
  shares,
  onOpenNewShare,
  onRevokeShare,
}) => {
  const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'history'>('active');

  const activeShares = shares.filter(s => s.status === 'Active');
  const pendingShares = shares.filter(s => s.status === 'Pending');
  const historyShares = shares.filter(s => s.status === 'Expired' || s.status === 'Revoked');

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5E2DD]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8904F] uppercase tracking-wider">
            <Lock className="w-4 h-4 text-[#A8904F]" />
            <span>Zero-Knowledge Granular Access Control</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#2D3A2D] mt-1">
            You're in Control of Your Health Data
          </h1>
          <p className="text-sm text-[#5A5A40] mt-1 max-w-2xl">
            Grant temporary or scoped access to doctors and specialists. Every token is time-limited, encrypted, and instantly revocable.
          </p>
        </div>

        {/* Action Button */}
        <button
          id="create-new-share-grant-btn"
          onClick={onOpenNewShare}
          className="px-5 py-2.5 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-xs font-semibold text-white flex items-center space-x-2 shadow-sm transition-all shrink-0"
        >
          <Share2 className="w-4 h-4 text-[#A8904F]" />
          <span>New Secure Share</span>
        </button>
      </div>

      {/* Trust & Privacy Guarantee Ribbon */}
      <div className="rounded-2xl bg-[#2D3A2D] text-white p-6 border border-white/10 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#A8904F] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold font-serif text-white">
              Sovereign Patient Encryption
            </h3>
            <p className="text-xs text-white/70 mt-0.5">
              Only providers with your cryptographic key can view authorized documents. No third-party data broker sales.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono text-[#A8904F] shrink-0">
          <span className="px-3 py-1 bg-white/5 rounded-xl border border-white/10 font-bold">
            {activeShares.length} ACTIVE GRANTS
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 border-b border-[#E5E2DD] pb-3">
        {[
          { id: 'active', label: 'Active Shares', count: activeShares.length },
          { id: 'pending', label: 'Pending Requests', count: pendingShares.length },
          { id: 'history', label: 'Sharing History', count: historyShares.length },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 border ${
                isActive
                  ? 'bg-[#2D3A2D] text-white border-[#2D3A2D] shadow-xs'
                  : 'bg-white text-[#5A5A40] border-[#E5E2DD] hover:bg-[#F5F2ED]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                isActive ? 'bg-white/20 text-white' : 'bg-[#F5F2ED] text-[#5A5A40]'
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Permissions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {(activeTab === 'active' ? activeShares : activeTab === 'pending' ? pendingShares : historyShares).map((share) => (
          <div
            key={share.id}
            className="p-6 rounded-2xl bg-white border border-[#E5E2DD] hover:border-[#2D3A2D] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              
              {/* Card Header: Recipient & Expiry */}
              <div className="flex items-start justify-between gap-2 pb-3 border-b border-[#E5E2DD]">
                <div>
                  <div className="flex items-center space-x-1.5">
                    <Building className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span className="text-xs text-[#5A5A40] font-medium">{share.organization}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-[#2D3A2D] mt-0.5">
                    {share.recipientName}
                  </h3>
                  <p className="text-xs text-[#5A5A40]">{share.role}</p>
                </div>

                <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold font-mono tracking-wider ${
                  share.status === 'Active'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : share.status === 'Pending'
                    ? 'bg-amber-50 text-amber-800 border border-amber-200'
                    : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}>
                  {share.status}
                </span>
              </div>

              {/* Scoped Data Permissions Matrix */}
              <div className="mt-4 space-y-2">
                <p className="text-[10px] text-[#5A5A40] uppercase font-mono tracking-wider font-semibold">
                  Granted Data Scopes
                </p>

                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  <div className="flex items-center space-x-1.5">
                    {share.accessScopes.passport ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D3A2D]" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-[#A5A096]" />
                    )}
                    <span className={share.accessScopes.passport ? 'text-[#2D3A2D] font-medium' : 'text-[#8E8B82]'}>
                      Health Passport
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    {share.accessScopes.labReports ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D3A2D]" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-[#A5A096]" />
                    )}
                    <span className={share.accessScopes.labReports ? 'text-[#2D3A2D] font-medium' : 'text-[#8E8B82]'}>
                      Lab Reports
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    {share.accessScopes.prescriptions ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D3A2D]" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-[#A5A096]" />
                    )}
                    <span className={share.accessScopes.prescriptions ? 'text-[#2D3A2D] font-medium' : 'text-[#8E8B82]'}>
                      Prescriptions
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    {share.accessScopes.vaccinations ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D3A2D]" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-[#A5A096]" />
                    )}
                    <span className={share.accessScopes.vaccinations ? 'text-[#2D3A2D] font-medium' : 'text-[#8E8B82]'}>
                      Vaccination Certs
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    {share.accessScopes.records ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D3A2D]" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-[#A5A096]" />
                    )}
                    <span className={share.accessScopes.records ? 'text-[#2D3A2D] font-medium' : 'text-[#8E8B82]'}>
                      Medical Records
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    {share.accessScopes.insurance ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D3A2D]" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-[#A5A096]" />
                    )}
                    <span className={share.accessScopes.insurance ? 'text-[#2D3A2D] font-medium' : 'text-[#8E8B82]'}>
                      Insurance Docs
                    </span>
                  </div>
                </div>
              </div>

              {/* Expiration and Audit Logs */}
              <div className="mt-4 p-3 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] text-xs text-[#5A5A40] space-y-1">
                <div className="flex items-center justify-between">
                  <span>Access Expiration:</span>
                  <strong className="font-mono text-[#2D3A2D]">{share.expirationDate}</strong>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#5A5A40]">
                  <span>Access Count: {share.accessCount} reads</span>
                  <span>Last: {share.lastAccessed || 'N/A'}</span>
                </div>
              </div>

            </div>

            {/* Footer Buttons */}
            <div className="pt-2 border-t border-[#E5E2DD] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#5A5A40]">
                Granted: {share.grantedDate}
              </span>

              {share.status === 'Active' ? (
                <button
                  onClick={() => onRevokeShare(share.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-xs font-semibold text-red-700 border border-red-200 flex items-center space-x-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Revoke Access</span>
                </button>
              ) : (
                <span className="text-xs text-[#8E8B82]">Grant Closed</span>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
