import React from 'react';
import { Clock, LayoutGrid, Settings } from 'lucide-react';

export default function FeatureStrip() {
  return (
    <section id="features" className="w-full bg-[#F3F4F7] border-y border-gray-200/80 py-10 px-6 my-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        
        {/* Column 1: Productivity tool */}
        <div className="py-4 md:py-0 md:px-8 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 shrink-0 mt-0.5">
            <Clock className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-gray-900">
              Productivity tool
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Time management apps, custom busy message, Pomodoro focus timer
            </p>
          </div>
        </div>

        {/* Column 2: Apps and integration */}
        <div className="py-4 md:py-0 md:px-8 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 shrink-0 mt-0.5">
            <LayoutGrid className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-gray-900">
              Apps and integration
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              App Library, connection to 3rd party software, integrations with calendar events and calls
            </p>
          </div>
        </div>

        {/* Column 3: Developer friendly */}
        <div className="py-4 md:py-0 md:px-8 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 shrink-0 mt-0.5">
            <Settings className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-gray-900">
              Developer friendly
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Open HTTP API, open-source SDK, Python / Go / JavaScript libs, MQTT, no vendor lock-in
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
