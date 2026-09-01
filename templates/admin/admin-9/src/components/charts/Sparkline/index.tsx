import React from 'react';

export function Sparkline({ data = [10, 40, 20, 90, 30, 80], type = 'success', width = 100, height = 30 }) {
  const maxVal = Math.max(...data, 100);
  const minVal = Math.min(...data, 0);
  const range = maxVal - minVal;

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - minVal) / range) * height;
    return `${x},dots${y}`;
  }).join(' ');

  const strokeColor = type === 'success' ? 'text-success' : 'text-destructive';

  return (
    <svg width={width} height={height} className={`overflow-visible ${strokeColor}`}>
      <polyline fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" points={points} />
    </svg>
  );
}
