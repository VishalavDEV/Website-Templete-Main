import React from 'react';
import { Triangle } from 'lucide-react';
import { PatientLeaderboardItem, ClinicLeaderboardItem } from '../types';

interface LeaderboardsSectionProps {
  userLeaderboard: PatientLeaderboardItem[];
  groupLeaderboard: ClinicLeaderboardItem[];
  onSelectUser?: (user: PatientLeaderboardItem) => void;
  onSelectGroup?: (group: ClinicLeaderboardItem) => void;
}

export function LeaderboardsSection({
  userLeaderboard,
  groupLeaderboard,
  onSelectUser,
  onSelectGroup,
}: LeaderboardsSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-3.5">
      {/* Patient Adherence Leaderboard Card */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-semibold text-gray-500">
            Patient Adherence & Recovery
          </h3>
          <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
            Top Performers
          </span>
        </div>

        <div className="space-y-3.5">
          {userLeaderboard.map((user) => (
            <div
              key={user.id}
              onClick={() => onSelectUser?.(user)}
              className="flex items-center justify-between p-1.5 rounded-xl hover:bg-gray-50/70 transition-colors cursor-pointer group"
            >
              {/* Left: Avatar + Details */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                    {user.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 truncate">
                    {user.points} Points <span className="mx-0.5">·</span> {user.percentage ?? user.adherenceRate}% Adherence ({user.cohort})
                  </p>
                </div>
              </div>

              {/* Right: Rank + Trend */}
              <div className="flex items-center gap-1 shrink-0 pl-2">
                <span className="text-xs font-bold text-gray-700">
                  {user.rank}
                </span>
                {user.trend === 'up' ? (
                  <Triangle className="w-2.5 h-2.5 fill-emerald-500 text-emerald-500" />
                ) : user.trend === 'down' ? (
                  <Triangle className="w-2.5 h-2.5 fill-red-500 text-red-500 rotate-180" />
                ) : (
                  <span className="w-2 h-0.5 bg-gray-300 rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Units Leaderboard Card */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-semibold text-gray-500">
            Clinical Units & Facilities
          </h3>
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
            Care Network
          </span>
        </div>

        <div className="space-y-3.5">
          {groupLeaderboard.map((group) => (
            <div
              key={group.id}
              onClick={() => onSelectGroup?.(group)}
              className="flex items-center justify-between p-1.5 rounded-xl hover:bg-gray-50/70 transition-colors cursor-pointer group"
            >
              {/* Left: Details */}
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                  {group.name}
                </h4>
                <p className="text-[11px] text-gray-400 truncate">
                  {group.pointsPerUser} Points / Patient <span className="mx-0.5">·</span> {group.percentage}% Recovery Rate
                </p>
              </div>

              {/* Right: Rank + Trend */}
              <div className="flex items-center gap-1 shrink-0 pl-2">
                <span className="text-xs font-bold text-gray-700">
                  {group.rank}
                </span>
                {group.trend === 'up' ? (
                  <Triangle className="w-2.5 h-2.5 fill-emerald-500 text-emerald-500" />
                ) : group.trend === 'down' ? (
                  <Triangle className="w-2.5 h-2.5 fill-red-500 text-red-500 rotate-180" />
                ) : (
                  <span className="w-2 h-0.5 bg-gray-300 rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
