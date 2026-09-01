import React from 'react';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStyles = (val: string) => {
    const s = val.toUpperCase();
    switch (s) {
      // Order & Payment Statuses
      case 'COMPLETED':
      case 'DELIVERED':
      case 'ACTIVE':
      case 'SUCCESS':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'PENDING':
      case 'CONFIRMED':
      case 'PROCESSING':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'SHIPPED':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'CANCELLED':
      case 'FAILED':
      case 'INACTIVE':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'REFUNDED':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'DRAFT':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'OUT_OF_STOCK':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  const getLabel = (val: string) => {
    return val.replace(/_/g, ' ');
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStyles(
        status
      )} capitalize`}
    >
      {getLabel(status)}
    </span>
  );
};

export default StatusBadge;
