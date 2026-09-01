import React from 'react';
import FeatureCard from './FeatureCard';
import { Cpu, Eye, BatteryCharging, Feather, Wifi, RotateCw, Flame } from 'lucide-react';

const FEATURES = [
  {
    id: 'hinge',
    title: '180° Zero-Gap Hinge',
    description: 'Dual-cam liquid metal mechanism allowing the display to lay completely 180° flat for esports tactical sharing and collaborative review.',
    highlight: '180° Flat Arena Mode',
    icon: RotateCw,
    details: {
      specs: '150,000+ Cycle Tested • Zero Creak Tolerance',
      deepDive: 'Precision engineered dual-cam titanium hinge enables instant transition between standard workstation tilt and complete 180-degree lay-flat collaborative tablet mode.'
    }
  },
  {
    id: 'silicon',
    title: '3nm Neural Gaming Core',
    description: 'Custom hybrid neural GPU core delivering extreme sustained computing throughput while running virtually cool to the touch.',
    highlight: '68 TOPS Gaming AI Engine',
    icon: Cpu,
    details: {
      specs: '16-Core Neural Engine • Sub-15W Power Envelope',
      deepDive: 'Engineered with our proprietary 3nm process node, the TENFIVE Silicon balances ultra-heavy generative computing workloads with unheard-of thermal efficiency.'
    }
  },
  {
    id: 'display',
    title: '240Hz Lumina OLED Matrix',
    description: 'Edge-to-edge borderless quantum matrix with true infinite blacks, 240Hz variable refresh rate, 0.1ms latency, and 100% DCI-P3 color gamut.',
    highlight: '240Hz • 0.1ms Latency',
    icon: Eye,
    details: {
      specs: '3200 x 2000 Native • 0.1ms Response Time',
      deepDive: 'Individually calibrated micro-OLED pixels produce cinematic color accuracy suitable for professional colorists and game developers alike.'
    }
  },
  {
    id: 'cooling',
    title: 'Zero-Decibel Liquid Metal',
    description: 'Dual-phase sintered copper vapor chambers paired with Gallium-Indium liquid metal thermal conductor keeping sustained loads cool.',
    highlight: '< 0.5dB Whisper Fanless',
    icon: Flame,
    details: {
      specs: '65W Sustained Thermal Headroom • Liquid Metal',
      deepDive: 'Superconducting copper heat loops dissipate heavy sustained workloads without high-pitched fan whine.'
    }
  },
  {
    id: 'chassis',
    title: 'Aerospace Titanium Armor',
    description: 'Precision CNC-machined from Grade-5 titanium and recycled magnesium alloy, measuring only 0.89cm at its sleekest contour.',
    highlight: '890 Grams Total',
    icon: Feather,
    details: {
      specs: '0.89cm Profile • Grade-5 Titanium Skeleton',
      deepDive: 'Every curve, chamfer, and vent is laser-milled with sub-micron tolerances for unparalleled structural rigidity and featherlight portability.'
    }
  },
  {
    id: 'connectivity',
    title: 'Dual 80Gbps Thunderbolt 5',
    description: 'Dual Thunderbolt 5 ports pushing 80Gbps bidirectional throughput, integrated Wi-Fi 7, and global eSIM satellite failover.',
    highlight: '80Gbps TB5 Dual-Port',
    icon: Wifi,
    details: {
      specs: 'Wi-Fi 7 Tri-Band • Dual 8K Display Output',
      deepDive: 'Connect multiple 8K external monitors or external eGPU clusters without latency or bandwidth bottlenecks.'
    }
  }
];

export default function FeatureGrid({ onSelectFeature }) {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyber-red/10 border border-cyber-red/30 text-xs font-mono text-rose-300 mb-4 shadow-neon-red">
          <Flame className="w-3.5 h-3.5 text-cyber-red animate-pulse" />
          <span>TENFIVE GAMING PILLARS</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          Architected For Total Dominance
        </h2>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          From the 180° lay-flat hinge to unified 3nm neural graphics, discover the engineering powering the TENFIVE LAPTOP.
        </p>
      </div>

      {/* Grid of 6 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            index={index}
            onSelect={onSelectFeature}
          />
        ))}
      </div>

    </section>
  );
}
