import React from 'react';
import { HealthTopicItem } from '../types';

interface TopicsSectionProps {
  weakestTopics: HealthTopicItem[];
  strongestTopics: HealthTopicItem[];
  onSelectTopic?: (topic: HealthTopicItem) => void;
}

export function TopicsSection({
  weakestTopics,
  strongestTopics,
  onSelectTopic,
}: TopicsSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-3.5">
      {/* Weakest Health Topics / Attention Needed Card */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-semibold text-gray-500">
            Attention Needed (Lowest Adherence)
          </h3>
          <span className="text-[10px] font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
            Action Req.
          </span>
        </div>

        <div className="space-y-4">
          {weakestTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onSelectTopic?.(topic)}
              className="flex items-center gap-3.5 p-1 rounded-xl hover:bg-gray-50/70 transition-colors cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-2xs">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Topic Info & Progress */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-xs font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h4>
                  <span className="text-xs font-semibold text-gray-500 shrink-0">
                    <span className="font-bold text-gray-700">{topic.percentage}%</span> {topic.statusLabel ? topic.statusLabel.split(' ')[1] || 'Target' : 'Target'}
                  </span>
                </div>

                {/* Progress Bar (Warm Red / Coral Gradient) */}
                <div className="w-full h-2.5 bg-[#FEE4E2] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF5C5C] to-[#FF8A65] rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${topic.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strongest Health Topics / Optimal Vitals Card */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-semibold text-gray-500">
            Optimal Health Domains (High Stability)
          </h3>
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
            Optimal
          </span>
        </div>

        <div className="space-y-4">
          {strongestTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onSelectTopic?.(topic)}
              className="flex items-center gap-3.5 p-1 rounded-xl hover:bg-gray-50/70 transition-colors cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-2xs">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Topic Info & Progress */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-xs font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h4>
                  <span className="text-xs font-semibold text-gray-500 shrink-0">
                    <span className="font-bold text-gray-700">{topic.percentage}%</span> {topic.statusLabel ? topic.statusLabel.split(' ')[1] || 'Stable' : 'Stable'}
                  </span>
                </div>

                {/* Progress Bar (Teal / Mint Gradient) */}
                <div className="w-full h-2.5 bg-[#D1FAE5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#10B981] to-[#2DD4BF] rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${topic.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
