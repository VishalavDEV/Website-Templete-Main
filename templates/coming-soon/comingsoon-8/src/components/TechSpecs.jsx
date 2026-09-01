import React from 'react';
import { Zap, Gauge, Wind, ShieldCheck, Fuel, Cpu } from 'lucide-react';

export default function TechSpecs() {
  const specs = [
    {
      icon: <Zap className="spec-card-icon" />,
      title: '349cc High-Output LC4 Engine',
      value: '42 PS (31 kW) @ 8,750 RPM',
      desc: 'Single-cylinder 4-stroke DOHC engine with forged lightweight piston and ride-by-wire electronic throttle response.'
    },
    {
      icon: <Gauge className="spec-card-icon" />,
      title: 'Dynamic Quickshifter+ & Torque',
      value: '36 Nm Torque @ 6,800 RPM',
      desc: 'Instant power band delivery with clutchless up/down gear changes and aggressive street acceleration.'
    },
    {
      icon: <Wind className="spec-card-icon" />,
      title: '43mm Inverted USD Suspension',
      value: 'Adjustable Preload & Damping',
      desc: 'High-rigidity inverted front forks and offset rear monoshock calibrated for tight corner agility.'
    },
    {
      icon: <ShieldCheck className="spec-card-icon" />,
      title: '320mm Radial Caliper Disc',
      value: '4-Piston Caliper + Supermoto ABS',
      desc: 'Cornering dual-channel ABS with switchable rear wheel lock mode for aggressive slides.'
    },
    {
      icon: <Cpu className="spec-card-icon" />,
      title: '5-inch Bonded Glass TFT Cockpit',
      value: 'Bluetooth & Turn-by-Turn Navigation',
      desc: 'Customizable track layout, telemetry ride logs, and incoming call/music management.'
    },
    {
      icon: <Fuel className="spec-card-icon" />,
      title: '14.5L Sculpted Tank & Trellis Frame',
      value: 'Steel Trellis + Die-Cast Subframe',
      desc: 'Laser-welded trellis chassis offering maximum road feedback and precision turn-in balance.'
    }
  ];

  return (
    <section id="telemetry" className="section-telemetry">
      <div className="section-header-block">
        <div className="section-badge">NEXT-GEN ENGINEERING // SPECIFICATIONS</div>
        <h2 className="section-heading">HTM 350 DUDE TELEMETRY</h2>
        <p className="section-desc">
          Engineered for raw naked attitude. The all-new HTM 350 DUDE dominates city streets with razor-sharp chassis geometry and pure class-leading power.
        </p>
      </div>

      <div className="specs-grid">
        {specs.map((item, index) => (
          <div key={index} className="spec-card">
            <div className="card-shine" />
            <div className="card-top-row">
              <div className="card-icon-wrap">{item.icon}</div>
              <span className="card-number">0{index + 1}</span>
            </div>
            <h3 className="card-title">{item.title}</h3>
            <div className="card-highlight-value">{item.value}</div>
            <p className="card-description">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
