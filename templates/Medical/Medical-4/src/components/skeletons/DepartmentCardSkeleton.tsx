import React from 'react';

interface DepartmentCardSkeletonProps {
  count?: number;
}

export const DepartmentCardSkeleton: React.FC<DepartmentCardSkeletonProps> = ({ count = 1 }) => {
  const items = Array.from({ length: count });

  return (
    <>
      {items.map((_, i) => (
        <div 
          key={i} 
          className="floating-card bg-white overflow-hidden flex flex-col border border-slate-200/80 shadow-xs"
          aria-hidden="true"
        >
          {/* Department Banner Image Skeleton */}
          <div className="relative h-52 w-full skeleton-box overflow-hidden">
            {/* Department Icon Box Skeleton */}
            <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 shadow-sm flex items-center justify-center p-2.5">
              <div className="w-full h-full rounded-xl skeleton-box"></div>
            </div>
            {/* Wing Pill Skeleton */}
            <div className="absolute bottom-3 right-3 h-5 w-28 rounded-full bg-slate-400/40"></div>
          </div>

          {/* Department Content Skeleton */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              {/* Department Name */}
              <div className="h-6 w-3/5 rounded-lg skeleton-box"></div>
              {/* Department Short Description */}
              <div className="space-y-1.5 pt-1">
                <div className="h-3.5 w-full rounded-md skeleton-box"></div>
                <div className="h-3.5 w-4/5 rounded-md skeleton-box"></div>
              </div>
            </div>

            {/* Bottom Link Skeleton */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="h-4 w-36 rounded-md skeleton-box"></div>
              <div className="w-5 h-5 rounded-full skeleton-box"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
