import React from 'react';
import { ChallengeItem } from '../types';

interface ActiveChallengeCardProps {
  challenge: ChallengeItem;
  onSeeAll: () => void;
  onOpenChallenge: () => void;
}

export const ActiveChallengeCard: React.FC<ActiveChallengeCardProps> = ({
  challenge,
  onSeeAll,
  onOpenChallenge,
}) => {
  return (
    <div
      id="active-challenge-card"
      className="bg-white rounded-2xl p-6 border border-[#EAEFE9] shadow-xs flex flex-col justify-between"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-[#111827]">Active Challenge</h3>
        <button
          id="see-all-challenges-btn"
          type="button"
          onClick={onSeeAll}
          className="text-[12px] font-semibold text-[#10B981] hover:text-[#059669] transition-colors"
        >
          See All
        </button>
      </div>

      {/* Hero Visual Card */}
      <div
        id="challenge-hero-banner"
        onClick={onOpenChallenge}
        className="relative rounded-2xl overflow-hidden h-[180px] cursor-pointer group shadow-sm flex flex-col justify-between p-5 text-white"
      >
        {/* Background Image with Overlay */}
        <img
          src={challenge.image}
          alt={challenge.title}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        {/* Top: Challenge Day Badge & Title */}
        <div className="relative z-10">
          <h4 className="text-[17px] font-extrabold tracking-tight leading-snug mb-1 text-white group-hover:text-[#E8F8EE] transition-colors">
            {challenge.title}
          </h4>
          <span className="text-[12px] font-medium text-white/80">
            Day {challenge.currentDay} of {challenge.totalDays}
          </span>
        </div>

        {/* Bottom: Participants & Progress */}
        <div className="relative z-10 space-y-3">
          {/* Avatars + Count */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              {challenge.participantsAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="participant"
                  className="inline-block h-6 w-6 rounded-full ring-1.5 ring-white/80 object-cover"
                />
              ))}
            </div>
            <span className="text-[11px] font-medium text-white/90">
              +{challenge.participantsCount >= 1000 ? `${(challenge.participantsCount / 1000).toFixed(1)}k` : challenge.participantsCount} participants
            </span>
          </div>

          {/* Progress Bar & Percent */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-black/40 backdrop-blur-xs rounded-full overflow-hidden">
              <div
                className="h-full bg-[#10B981] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${challenge.progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] font-bold text-white/95 shrink-0">
              {challenge.progressPercent}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
