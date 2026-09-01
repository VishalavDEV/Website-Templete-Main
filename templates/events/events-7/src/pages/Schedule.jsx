import React from 'react';
import ScheduleTimeline from '../components/ScheduleTimeline';

export default function Schedule() {
  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px' }}>
      <ScheduleTimeline />
    </div>
  );
}
