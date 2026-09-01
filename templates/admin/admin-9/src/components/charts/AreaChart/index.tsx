import React from 'react';

export function AreaChart({ data = [30, 70, 50, 95, 60, 85, 110], labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], title = 'Area Performance' }) {
  const height = 140;
  const width = 500;
  const padding = 30;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const maxVal = Math.max(...data, 120);

  const linePoints = data.map((val, i) => {
    const x = padding + (i * (chartWidth / (data.length - 1)));
    const y = padding + chartHeight - (val / maxVal * chartHeight);
    return `${x},${y}`;
  });

  const pathPoints = [
    `${padding},${padding + chartHeight}`,
    ...linePoints,
    `${padding + chartWidth},${padding + chartHeight}`
  ].join(' ');

  return (
    <div className="w-full bg-card border border-border p-4 rounded-xl shadow-sm space-y-3 select-none">
      <div className="flex justify-between items-center"><h4 className="text-xs font-bold text-muted-foreground uppercase">{title}</h4></div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto text-primary">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        <line x1={padding} y1={padding} x2={width-padding} y2={padding} stroke="currentColor" strokeOpacity="0.1" strokeDasharray="3" />
        <line x1={padding} y1={padding + chartHeight} x2={width-padding} y2={padding + chartHeight} stroke="currentColor" strokeOpacity="0.2" />
        
        {/* Area fill */}
        <polygon points={pathPoints} fill="url(#areaGrad)" />
        {/* Area line boundary */}
        <polyline fill="none" stroke="currentColor" strokeWidth="2.5" points={linePoints.join(' ')} />
      </svg>
    </div>
  );
}
