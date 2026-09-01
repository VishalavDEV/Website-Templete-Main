/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode, MaterialConfig } from './types';
import { HeaderNav } from './components/HeaderNav';
import { LiveWebsite } from './components/LiveWebsite';
import { PRDViewer } from './components/PRDViewer';
import { audioEngine } from './utils/audioEngine';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('website');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Default PRD-Compliant 3D Material & Physics Configuration
  const [materialConfig, setMaterialConfig] = useState<MaterialConfig>({
    roughness: 0.12,
    metalness: 0.1,
    transmission: 0.92,
    ior: 1.52,
    thickness: 1.4,
    chromaticAberration: 0.04,
    distortion: 0.28,
    wireframe: false,
    colorScheme: 'obsidian',
    speed: 1.0,
    audioReactivity: 1.0,
  });

  const handleToggleAudio = () => {
    const playing = audioEngine.toggle();
    setIsAudioPlaying(playing);
    setMaterialConfig(prev => ({
      ...prev,
      audioReactivity: playing ? 2.2 : 1.0,
      speed: playing ? 1.4 : 1.0,
    }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0f0f0] antialiased font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* Floating Top Nav Mode Switcher */}
      <HeaderNav
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Content Areas based on ViewMode */}
      {viewMode === 'website' && (
        <main className="w-full">
          <LiveWebsite
            onOpenPRD={() => setViewMode('prd')}
            materialConfig={materialConfig}
            onMaterialChange={setMaterialConfig}
          />
        </main>
      )}

      {viewMode === 'prd' && (
        <main className="min-h-screen pt-20 pb-20 bg-[#050505]">
          <PRDViewer />
        </main>
      )}

      {viewMode === 'split' && (
        <main className="min-h-screen pt-16 flex flex-col lg:flex-row h-screen overflow-hidden">
          {/* Left: Interactive 3D Website Canvas */}
          <div className="flex-1 h-full overflow-y-auto border-r border-white/10 bg-[#050505]">
            <LiveWebsite
              onOpenPRD={() => setViewMode('prd')}
              materialConfig={materialConfig}
              onMaterialChange={setMaterialConfig}
            />
          </div>

          {/* Right: PRD Specification Document */}
          <div className="flex-1 h-full overflow-y-auto bg-[#050505] p-4 lg:p-6 border-l border-white/10">
            <PRDViewer />
          </div>
        </main>
      )}
    </div>
  );
}
