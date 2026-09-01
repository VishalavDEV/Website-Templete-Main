import React from 'react';

export const StatCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-4 w-24 bg-slate-100 rounded"></div>
        <div className="h-10 w-10 bg-slate-100 rounded-xl"></div>
      </div>
      <div className="mt-4">
        <div className="h-8 w-32 bg-slate-100 rounded"></div>
        <div className="mt-2 h-4 w-40 bg-slate-100 rounded"></div>
      </div>
    </div>
  );
};

export const TableSkeleton: React.FC<{ rows?: number; cols?: number }> = ({ rows = 5, cols = 5 }) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100 card-shadow overflow-hidden animate-pulse">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <div className="h-6 w-36 bg-slate-100 rounded"></div>
        <div className="h-9 w-48 bg-slate-100 rounded-lg"></div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              {Array.from({ length: cols }).map((_, i) => (
                <th key={i} className="p-4 text-left">
                  <div className="h-4 w-20 bg-slate-100 rounded"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, i) => (
              <tr key={i} className="border-b border-slate-50">
                {Array.from({ length: cols }).map((_, j) => (
                  <td key={j} className="p-4">
                    <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const ChartSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow animate-pulse">
      <div className="h-5 w-40 bg-slate-100 rounded mb-6"></div>
      <div className="h-64 w-full bg-slate-50/70 rounded-xl flex items-end p-4 gap-4">
        <div className="w-full h-1/3 bg-slate-100 rounded-t"></div>
        <div className="w-full h-2/3 bg-slate-100 rounded-t"></div>
        <div className="w-full h-1/2 bg-slate-100 rounded-t"></div>
        <div className="w-full h-5/6 bg-slate-100 rounded-t"></div>
        <div className="w-full h-2/5 bg-slate-100 rounded-t"></div>
        <div className="w-full h-3/4 bg-slate-100 rounded-t"></div>
      </div>
    </div>
  );
};
