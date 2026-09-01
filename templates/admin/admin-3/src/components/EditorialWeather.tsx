import React from 'react';
import { Sun, AlertCircle, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

interface EditorialWeatherProps {
  onNavigate: (view: string) => void;
}

export const EditorialWeather: React.FC<EditorialWeatherProps> = ({ onNavigate }) => {
  const conditions = [
    { label: 'Publishing', status: 'CLEAR', value: 85, icon: Sun, color: 'text-[#5FAF8A]', bg: 'bg-[#5FAF8A]', view: 'calendar' },
    { label: 'Reviews', status: 'BUSY', value: 72, icon: AlertCircle, color: 'text-[#D6A85D]', bg: 'bg-[#D6A85D]', view: 'reviews' },
    { label: 'Assignments', status: 'ACTIVE', value: 64, icon: Zap, color: 'text-[#6FAFD4]', bg: 'bg-[#6FAFD4]', view: 'constellation' },
    { label: 'Audience', status: 'RISING', value: 92, icon: TrendingUp, color: 'text-[#5FAF8A]', bg: 'bg-[#5FAF8A]', view: 'readers' },
    { label: 'Archive', status: 'STABLE', value: 98, icon: ShieldCheck, color: 'text-[#183B56]', bg: 'bg-[#183B56]', view: 'collections' }
  ];

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-5 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Newsroom Forecast</span>
          <h3 className="font-serif font-bold text-[#183B56] text-base">Editorial Weather</h3>
        </div>
        <span className="text-xs text-[#718096] bg-[#F5F9FB] px-2.5 py-1 rounded-lg border border-[#DCE7EC] font-mono">
          Barometer: Optimal
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {conditions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => onNavigate(item.view)}
              className="p-3 bg-[#F5F9FB] hover:bg-[#CDEFF4]/20 border border-[#DCE7EC] hover:border-[#6FAFD4] rounded-xl text-left transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#203040]">{item.label}</span>
                <Icon size={15} className={item.color} />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-bold ${item.color}`}>{item.status}</span>
                <span className="text-[11px] font-mono text-[#718096]">{item.value}%</span>
              </div>
              {/* Progress Rail */}
              <div className="w-full h-1.5 bg-[#DCE7EC] rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.bg} rounded-full transition-all duration-500`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
