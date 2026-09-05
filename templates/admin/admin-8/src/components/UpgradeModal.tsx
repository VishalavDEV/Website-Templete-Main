/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Check, Zap, Crown, ShieldCheck } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan: 'Free' | 'Pro' | 'Enterprise';
  onSelectPlan: (plan: 'Pro' | 'Enterprise') => void;
}

export default function UpgradeModal({
  isOpen,
  onClose,
  currentPlan,
  onSelectPlan,
}: UpgradeModalProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  if (!isOpen) return null;

  const proPrice = billingCycle === 'annual' ? '$24' : '$29';
  const enterprisePrice = billingCycle === 'annual' ? '$79' : '$99';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl border border-[rgba(33,29,26,0.12)] rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff6a3d]/10 text-[#ff6a3d] text-xs font-bold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Upgrade Plan</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#211d1a] tracking-tight">
              Scale Your Analytics with Ember Glow
            </h2>
            <p className="text-xs sm:text-sm text-[#706861] mt-1">
              Unlock unlimited transaction exports, custom date boundaries, and real-time live channels.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#706861] hover:text-[#211d1a] hover:bg-black/[0.05] rounded-xl transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close upgrade modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#faf8f2] p-1 rounded-xl border border-black/[0.06] flex items-center gap-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#211d1a] shadow-xs'
                  : 'text-[#706861] hover:text-[#211d1a]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-[#ff6a3d] text-white shadow-xs'
                  : 'text-[#706861] hover:text-[#211d1a]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full uppercase">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Pro Plan */}
          <div className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
            currentPlan === 'Pro' 
              ? 'bg-[#ff6a3d]/5 border-[#ff6a3d] ring-2 ring-[#ff6a3d]/20' 
              : 'bg-white border-black/[0.08] hover:border-[#ff6a3d]/40'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-extrabold text-[#211d1a]">Pro Plan</span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-[#ff6a3d]/15 text-[#ff6a3d] rounded-full uppercase">Popular</span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-black text-[#211d1a]">{proPrice}</span>
                <span className="text-xs text-[#706861] font-medium">/ month</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[#706861] mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff6a3d] shrink-0" />
                  <span>Unlimited Ledger CSV Exports</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff6a3d] shrink-0" />
                  <span>Real-time Live Sales Channel Sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff6a3d] shrink-0" />
                  <span>Up to 10 Team Members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff6a3d] shrink-0" />
                  <span>Custom Date Range Filtering</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan('Pro')}
              disabled={currentPlan === 'Pro'}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentPlan === 'Pro'
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-200'
                  : 'bg-gradient-to-r from-[#ff6a3d] to-[#ff3d77] text-white hover:brightness-110 shadow-md shadow-[#ff6a3d]/20 active:scale-[0.98]'
              }`}
            >
              {currentPlan === 'Pro' ? 'Current Active Plan' : 'Upgrade to Pro'}
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
            currentPlan === 'Enterprise' 
              ? 'bg-[#ff6a3d]/5 border-[#ff6a3d] ring-2 ring-[#ff6a3d]/20' 
              : 'bg-white border-black/[0.08] hover:border-[#ff6a3d]/40'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-extrabold text-[#211d1a]">Enterprise</span>
                <Crown className="w-4 h-4 text-[#ffc94d]" />
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-black text-[#211d1a]">{enterprisePrice}</span>
                <span className="text-xs text-[#706861] font-medium">/ month</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[#706861] mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ff6a3d] shrink-0" />
                  <span>Everything in Pro Plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ff6a3d] shrink-0" />
                  <span>Dedicated Account Manager & SLA</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ff6a3d] shrink-0" />
                  <span>Unlimited Team & Admin Seats</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ff6a3d] shrink-0" />
                  <span>Custom API & Webhook Integrations</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan('Enterprise')}
              disabled={currentPlan === 'Enterprise'}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentPlan === 'Enterprise'
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-200'
                  : 'bg-[#211d1a] hover:bg-[#322b27] text-white shadow-md active:scale-[0.98]'
              }`}
            >
              {currentPlan === 'Enterprise' ? 'Current Active Plan' : 'Upgrade to Enterprise'}
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 text-center text-[11px] text-[#9b928a]">
          🔒 256-Bit SSL Encrypted • Cancel anytime with 1-click • Instant access
        </div>
      </div>
    </div>
  );
}
