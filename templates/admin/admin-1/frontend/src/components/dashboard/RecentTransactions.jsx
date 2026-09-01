import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { MOCK_TRANSACTIONS } from '../../services/mockData';

export default function RecentTransactions({ transactions = MOCK_TRANSACTIONS }) {
  return (
    <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
          <CreditCard className="w-4 h-4 mr-2 text-neura-purple" />
          <span>Recent Transactions</span>
        </h3>
        <span className="text-xs text-neura-cyan font-mono">Ledger Live</span>
      </div>

      <div className="space-y-2.5">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-xl border ${
                t.positive
                  ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                  : 'bg-rose-500/15 border-rose-500/30 text-rose-400'
              }`}>
                {t.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">{t.title}</h4>
                <span className="text-[10px] text-slate-400 font-mono">{t.date}</span>
              </div>
            </div>
            <span className={`text-xs font-extrabold font-mono ${t.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
              {t.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
