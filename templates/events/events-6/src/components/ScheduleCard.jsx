import React from 'react';
import { Clock, Music } from 'lucide-react';

export default function ScheduleCard({ item }) {
  return (
    <div className="schedule-card">
      <div className="schedule-time">
        <Clock size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
        {item.time}
      </div>

      <div className="schedule-info">
        <h4 className="schedule-title">{item.title}</h4>
        <div className="schedule-sub">{item.artist ? `Artist: ${item.artist}` : item.description}</div>
      </div>

      <span className="schedule-stage-tag">
        <Music size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
        {item.stage}
      </span>
    </div>
  );
}
