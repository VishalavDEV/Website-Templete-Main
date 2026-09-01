import React, { useState, useEffect } from 'react';
import { calculateTelemetryMetrics } from '../services/api';

export default function TelemetryCalculator() {
  const [wallArea, setWallArea] = useState(1200);
  const [metrics, setMetrics] = useState({
    co2Captured: 28.8,
    oxygenProduced: 2160,
    thermalReduction: 3.6,
    noiseDamping: 14
  });

  useEffect(() => {
    let active = true;
    calculateTelemetryMetrics(wallArea).then(res => {
      if (active && res) {
        setMetrics({
          co2Captured: res.co2Captured,
          oxygenProduced: res.oxygenProduced,
          thermalReduction: res.thermalReduction,
          noiseDamping: res.noiseDamping
        });
      }
    });
    return () => { active = false; };
  }, [wallArea]);

  return (
    <section className="sectionWrapper" id="telemetry">
      <div className="sectionHeadingBox">
        <div className="sectionTag">ECOLOGICAL TELEMETRY</div>
        <h2 className="sectionTitle">Living Green Wall Impact Calculator</h2>
        <p style={{ color: 'var(--text-body)', maxWidth: 640, margin: '14px auto 0 auto', fontSize: '0.95rem' }}>
          Adjust the vertical botanical facade footprint to view real-time carbon sequestration and thermal dampening calculations powered by the Spring Boot backend.
        </p>
      </div>

      <div className="telemetryGrid">
        <div className="sliderBox">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Space Grotesk, monospace', fontWeight: 800, fontSize: '0.95rem' }}>
            <span>LIVING FACADE AREA:</span>
            <span style={{ color: 'var(--green-bright)' }}>{wallArea} m²</span>
          </div>

          <input
            type="range"
            min="100"
            max="3500"
            step="50"
            value={wallArea}
            onChange={(e) => setWallArea(Number(e.target.value))}
            className="bioSlider"
          />

          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Engineered with automated drip irrigation, soil microbial sensor arrays, and endemic perennial air-purifying foliage.
          </p>
        </div>

        <div className="metricsDisplayGrid">
          <div className="metricTile">
            <div className="metricValue">{metrics.co2Captured} T</div>
            <div className="metricLabel">CO₂ Sequestered / Year</div>
          </div>

          <div className="metricTile">
            <div className="metricValue">{metrics.oxygenProduced} kg</div>
            <div className="metricLabel">Pure O₂ Generated / Day</div>
          </div>

          <div className="metricTile">
            <div className="metricValue">-{metrics.thermalReduction}°C</div>
            <div className="metricLabel">Microclimate Cooling Effect</div>
          </div>

          <div className="metricTile">
            <div className="metricValue">-{metrics.noiseDamping} dB</div>
            <div className="metricLabel">Acoustic Noise Dampening</div>
          </div>
        </div>
      </div>
    </section>
  );
}
