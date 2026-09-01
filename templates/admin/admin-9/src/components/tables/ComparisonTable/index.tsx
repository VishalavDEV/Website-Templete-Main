import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '../../ui/Button';

export function ComparisonTable() {
  const plans = [
    { name: 'Developer', price: 'Free', features: { charts: true, users: 1, support: false, api: false } },
    { name: 'Enterprise', price: '$49/mo', features: { charts: true, users: 10, support: true, api: true } },
  ];

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm select-none">
      <table className="min-w-full divide-y divide-border text-xs">
        <thead className="bg-muted/30">
          <tr>
            <th className="px-4 py-3 text-left font-bold text-muted-foreground/80 uppercase">Features</th>
            {plans.map((p) => (
              <th key={p.name} className="px-4 py-3 text-center font-bold text-foreground">
                <p className="text-sm font-extrabold">{p.name}</p>
                <p className="text-muted-foreground/80 font-medium mt-0.5">{p.price}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          <tr>
            <td className="px-4 py-3 text-left font-semibold text-foreground">Interactive Charts</td>
            {plans.map((p) => (
              <td key={p.name} className="px-4 py-3 text-center">
                {p.features.charts ? <Check className="h-4.5 w-4.5 text-success mx-auto" /> : <X className="h-4.5 w-4.5 text-destructive mx-auto" />}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-3 text-left font-semibold text-foreground">Team Member Seats</td>
            {plans.map((p) => (
              <td key={p.name} className="px-4 py-3 text-center font-bold text-foreground/85">
                {p.features.users} seats
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-3 text-left font-semibold text-foreground">24/7 Custom Support</td>
            {plans.map((p) => (
              <td key={p.name} className="px-4 py-3 text-center">
                {p.features.support ? <Check className="h-4.5 w-4.5 text-success mx-auto" /> : <X className="h-4.5 w-4.5 text-destructive mx-auto" />}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-4 py-3 text-left font-semibold text-foreground">API Access Keys</td>
            {plans.map((p) => (
              <td key={p.name} className="px-4 py-3 text-center">
                {p.features.api ? <Check className="h-4.5 w-4.5 text-success mx-auto" /> : <X className="h-4.5 w-4.5 text-destructive mx-auto" />}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
