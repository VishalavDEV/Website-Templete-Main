import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SortDropdownProps {
  currentSort: string;
  onSortChange: (sortMode: string) => void;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({ currentSort, onSortChange }) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFFFFF', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
      <ArrowUpDown size={14} color="var(--accent-blue)" />
      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)' }}>SORT BY:</span>
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value)}
        style={{
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontSize: '0.82rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          cursor: 'pointer'
        }}
      >
        <option value="FEATURED">FEATURED</option>
        <option value="NEWEST">NEWEST</option>
        <option value="BESTSELLING">BESTSELLING</option>
        <option value="BEST_RATED">BEST RATED</option>
        <option value="PRICE_LOW_HIGH">PRICE: LOW → HIGH</option>
        <option value="PRICE_HIGH_LOW">PRICE: HIGH → LOW</option>
        <option value="BIGGEST_DISCOUNT">BIGGEST DISCOUNT</option>
      </select>
    </div>
  );
};
