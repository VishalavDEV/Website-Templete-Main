import React from 'react';

interface DoctorCardSkeletonProps {
  count?: number;
}

export const DoctorCardSkeleton: React.FC<DoctorCardSkeletonProps> = ({ count = 1 }) => {
  const items = Array.from({ length: count });

  return (
    <>
      {items.map((_, i) => (
        <div 
          key={i} 
          className="floating-card bg-white overflow-hidden flex flex-col border border-slate-200/80 shadow-xs"
          aria-hidden="true"
        >
          {/* Doctor Image Skeleton */}
          <div className="relative h-72 w-full skeleton-box overflow-hidden">
            {/* Pill Badge Skeleton on top right */}
            <div className="absolute top-4 right-4 h-6 w-24 rounded-full bg-slate-300/70"></div>
          </div>

          {/* Doctor Info Body Skeleton */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {/* Doctor Name */}
              <div className="h-6 w-3/4 rounded-lg skeleton-box"></div>
              {/* Specialty */}
              <div className="h-4 w-1/2 rounded-md skeleton-box"></div>
              {/* Qualifications */}
              <div className="h-3.5 w-5/6 rounded-md skeleton-box"></div>
            </div>

            {/* Bottom Action Link Skeleton */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="h-4 w-28 rounded-md skeleton-box"></div>
              <div className="w-5 h-5 rounded-full skeleton-box"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
