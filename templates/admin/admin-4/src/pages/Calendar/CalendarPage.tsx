import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Clock } from 'lucide-react';

export const CalendarPage: React.FC = () => {
  const { tasks, milestones, projects } = useApp();

  const [currentView, setCurrentView] = useState<'Month' | 'Week' | 'Day'>('Month');

  // Days of month grid simulation
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Project Calendar & Deadlines</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Synchronized calendar for milestone deliverables, task deadlines, and team demos.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {(['Month', 'Week', 'Day'] as const).map(v => (
            <button
              key={v}
              onClick={() => setCurrentView(v)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                currentView === v
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-app-secondary text-app-secondary border border-app hover:bg-app-hover'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <Card noPadding>
        <div className="p-4 border-b border-app flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-base font-bold text-app-primary">February 2026</h2>
            <div className="flex items-center gap-1">
              <button className="p-1 rounded bg-app-secondary text-app-primary hover:bg-app-hover">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 rounded bg-app-secondary text-app-primary hover:bg-app-hover">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <Badge variant="info">Current Month</Badge>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-app text-center text-xs font-bold text-app-muted py-2 bg-app-secondary/30">
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 divide-x divide-y divide-app bg-app-surface text-xs min-h-[500px]">
          {daysInMonth.map(day => {
            const dayTasks = tasks.filter(t => {
              const d = new Date(t.dueDate);
              return d.getDate() === day;
            });
            const dayMilestones = milestones.filter(m => {
              const d = new Date(m.dueDate);
              return d.getDate() === day;
            });

            return (
              <div key={day} className="p-2 min-h-[90px] flex flex-col justify-between hover:bg-app-hover/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-semibold ${day === 24 ? 'w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center' : 'text-app-muted'}`}>
                    {day}
                  </span>
                </div>

                <div className="space-y-1 my-1">
                  {dayTasks.map(t => (
                    <div key={t.id} className="p-1 rounded bg-blue-500/15 border border-blue-500/30 text-[10px] text-blue-300 font-semibold truncate">
                      {t.title}
                    </div>
                  ))}
                  {dayMilestones.map(m => (
                    <div key={m.id} className="p-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-[10px] text-emerald-300 font-semibold truncate">
                      🚩 {m.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
