import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, BatteryCharging, Box, Sliders, Zap, Shield, Sparkles, Activity } from 'lucide-react';
import { fetchTelemetry } from '../services/api';

export default function DeviceSpecSection() {
  const [telemetry, setTelemetry] = useState(null);

  useEffect(() => {
    fetchTelemetry().then(setTelemetry);
  }, []);

  const specs = [
    {
      category: 'Display & Optics',
      items: [
        { label: 'Screen Type', val: 'Custom 16×7 Discrete LED Dot Matrix' },
        { label: 'Pixel Pitch', val: '2.8mm Ultra-Wide Viewing Angle' },
        { label: 'Max Brightness', val: '800 nits (Automatic Ambient Sensor)' },
        { label: 'Refresh Rate', val: '120Hz Flicker-Free PWM Dimming' }
      ]
    },
    {
      category: 'Connectivity & Silicon',
      items: [
        { label: 'Processor', val: 'Dual-Core Tensilica Xtensa 240MHz' },
        { label: 'Wireless', val: 'Wi-Fi 802.11 b/g/n (2.4GHz) + BLE 5.2' },
        { label: 'Local API', val: 'Zero-Config mDNS REST & WebSocket Server' },
        { label: 'Latency', val: '< 2.4ms Local Subnet Sync' }
      ]
    },
    {
      category: 'Power & Chassis',
      items: [
        { label: 'Chassis Material', val: 'CNC Machined 6000-Series Aluminum' },
        { label: 'Battery Capacity', val: '2,200 mAh Li-Po (Up to 45 Days)' },
        { label: 'Charging Port', val: 'USB-C Power Delivery with Pass-Through' },
        { label: 'Dimensions', val: '142mm × 38mm × 24mm (165g)' }
      ]
    }
  ];

  return (
    <section id="specs" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase mb-2 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>HARDWARE SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Industrial precision in every millimeter
          </h2>
        </div>

        {/* Live Device Telemetry Card */}
        {telemetry && (
          <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#0E1119] border border-white/15 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>BSB-GEN2 [{telemetry.firmwareVersion}]</span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-1.5 text-brand-orange">
              <BatteryCharging className="w-3.5 h-3.5" />
              <span>{telemetry.batteryPercentage}%</span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-1.5 text-blue-400">
              <Wifi className="w-3.5 h-3.5" />
              <span>{telemetry.wifiRssi} dBm</span>
            </div>
          </div>
        )}
      </div>

      {/* 3 Columns Specs Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specs.map((spec, idx) => (
          <motion.div
            key={spec.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-3xl p-7 bg-[#0F121A] border border-white/10 hover:border-brand-orange/30 transition-all shadow-xl space-y-6"
          >
            <div className="text-lg font-display font-bold text-white flex items-center justify-between border-b border-white/10 pb-4">
              <span>{spec.category}</span>
              <span className="text-xs font-mono text-brand-orange">0{idx + 1}</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {spec.items.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 pb-2 border-b border-white/5 last:border-0">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="text-white font-medium">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
