import React from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';

export interface StatCardProps {
  title: string;
  value: string;
  change: string;
  type?: 'success' | 'danger' | 'neutral';
}

export function StatCard({ title, value, change, type = 'neutral' }: StatCardProps) {
  const badgeVariants = {
    success: 'success' as const,
    danger: 'destructive' as const,
    neutral: 'secondary' as const,
  };
  return (
    <Card title={title}>
      <div className="flex items-end justify-between mt-2 select-none">
        <div className="text-2xl font-extrabold text-foreground">{value}</div>
        <Badge variant={badgeVariants[type]}>{change}</Badge>
      </div>
    </Card>
  );
}
