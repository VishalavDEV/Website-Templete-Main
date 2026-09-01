// src/components/Overview.jsx
import { stats } from '../data/resumeData';
import Icons from './Icons';

const iconMap = {
  briefcase: Icons.briefcase,
  code: Icons.code,
  layers: Icons.layers,
  target: Icons.target,
};

export default function Overview() {
  return (
    <section className="t1-overview" aria-label="Professional highlights">
      <div className="t1-overview-inner">
        <div className="t1-container">
          <div className="t1-stats-grid" role="list">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`t1-stat-card t1-fade-in t1-fade-in-delay-${index + 1}`}
                role="listitem"
              >
                <div className="t1-stat-icon" aria-hidden="true">
                  {iconMap[stat.icon] || Icons.star}
                </div>
                <div>
                  <div className="t1-stat-value">{stat.value}</div>
                  <div className="t1-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
