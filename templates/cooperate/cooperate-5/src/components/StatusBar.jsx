import React from 'react';

export default function StatusBar() {
  return (
    <section className="stats-strip-section">
      <div className="container">
        <div className="stats-horizontal-strip">
          {/* Stat 1 */}
          <div className="stat-cell-item">
            <div className="stat-huge-number">24</div>
            <div className="stat-tiny-label">COUNTRIES / GLOBAL OPERATIONS</div>
          </div>

          {/* Stat 2 */}
          <div className="stat-cell-item">
            <div className="stat-huge-number">86</div>
            <div className="stat-tiny-label">ACTIVE ENTERPRISE PROJECTS</div>
          </div>

          {/* Stat 3 */}
          <div className="stat-cell-item">
            <div className="stat-huge-number">420+</div>
            <div className="stat-tiny-label">ENGINEERING TEAM MEMBERS</div>
          </div>

          {/* Stat 4 */}
          <div className="stat-cell-item">
            <div className="stat-huge-number accent">99.98%</div>
            <div className="stat-tiny-label">PLATFORM AVAILABILITY SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
