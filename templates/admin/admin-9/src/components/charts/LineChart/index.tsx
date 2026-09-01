import React from 'react';

export function LineChart({ data = [20, 50, 30, 80, 45, 90, 60], labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], title = 'Line Trend' }) {
  const height = 140;
  const width = 500;
  const padding = 30;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const maxVal = Math.max(...data, 100);
  const points = data.map((val, i) => {
    const x = padding + (i * (chartWidth / (data.length - 1)));
    const y = padding + chartHeight - (val / maxVal * chartHeight);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full bg-card border border-border p-4 rounded-xl shadow-sm space-y-3 select-none">
      <div className="flex justify-between items-center"><h4 className="text-xs font-bold text-muted-foreground uppercase">{title}</h4></div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto text-primary">
        {/* Grid lines */}
        <line x1={padding} y1={padding} x2={width-padding} y2={padding} stroke="currentColor" strokeOpacity="0.1" strokeDasharray="3" />
        <line x1={padding} y1={padding + chartHeight/2} x2={width-padding} y2={padding + chartHeight/2} stroke="currentColor" strokeOpacity="0.1" strokeDasharray="3" />
        <line x1={padding} y1={padding + chartHeight} x2={width-padding} y2={padding + chartHeight} stroke="currentColor" strokeOpacity="0.2" />
        
        {/* Trend Path */}
        <polyline fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={points} />
        
        {/* Dots */}
        {data.map((val, i) => {
          const x = padding + (i * (chartWidth / (data.length - 1)));
          const y = padding + chartHeight - (val / maxVal * chartHeight);
          return <circle key={i} cx={x} cy={y} r="4" className="fill-card stroke-primary stroke-2" />;
        })}
      </svg>
    </div>
  );
}
