import React from 'react';
import { Laptop, Tablet, Smartphone, Maximize2, RotateCcw } from 'lucide-react';

const DEVICES = [
  { id: 'laptop', name: 'Laptop', width: 'w-full', icon: Laptop, label: '100% Desktop' },
  { id: 'tablet', name: 'Tablet', width: 'max-w-[768px]', icon: Tablet, label: '768px Tablet' },
  { id: 'phone', name: 'Phone', width: 'max-w-[390px]', icon: Smartphone, label: '390px Mobile' },
];

export default function DeviceViewSwitcher({ activeDevice, onSelectDevice, playClick }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <div className="glass-panel-glow rounded-2xl p-1.5 flex items-center space-x-1 border border-cyber-red/40 shadow-neon-red backdrop-blur-xl">
        
        {/* Device Mode Buttons */}
        {DEVICES.map((device) => {
          const Icon = device.icon;
          const isActive = activeDevice === device.id;
          return (
            <button
              key={device.id}
              onClick={() => {
                playClick?.();
                onSelectDevice(device.id);
              }}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-cyber-red to-cyber-crimson text-white font-bold shadow-neon-red scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
              title={`Switch to ${device.name} Viewport (${device.label})`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{device.name}</span>
            </button>
          );
        })}

        {/* Reset to Fullscreen Laptop if not in laptop mode */}
        {activeDevice !== 'laptop' && (
          <button
            onClick={() => {
              playClick?.();
              onSelectDevice('laptop');
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1 border-l border-white/10"
            title="Reset to Full Desktop View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}

      </div>
    </div>
  );
}
