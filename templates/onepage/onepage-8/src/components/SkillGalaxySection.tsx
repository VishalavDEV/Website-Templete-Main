import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { SkillGalaxyScene } from '../scenes/SkillGalaxyScene';
import { SKILLS_DATA } from '../data/skills';
import { SkillNode, CursorState } from '../types';
import { Sparkles, Cpu, Layers, GitBranch, Terminal } from 'lucide-react';

interface SkillGalaxySectionProps {
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
  onClickSound: () => void;
  onNeuralSound: () => void;
}

export const SkillGalaxySection: React.FC<SkillGalaxySectionProps> = ({
  setCursorState,
  onHoverSound,
  onClickSound,
  onNeuralSound,
}) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode>(SKILLS_DATA[0]);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        index="03"
        category="KNOWLEDGE GRAPH & ARCHITECTURES"
        title="3D SKILL GALAXY"
        subtitle="An interconnected neural galaxy representing core proficiencies, mathematical frameworks, and systems engineering tools."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 3D WebGL Skill Galaxy */}
        <div className="lg:col-span-8 h-[480px] md:h-[580px] relative">
          <SkillGalaxyScene
            selectedSkill={selectedSkill}
            onSelectSkill={(skill) => {
              setSelectedSkill(skill);
              onClickSound();
            }}
            setCursorState={setCursorState}
            onHoverSound={onHoverSound}
            onNeuralSound={onNeuralSound}
          />
        </div>

        {/* Selected Skill Telemetry & Synaptic Connections */}
        <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-panel-glow border border-cyan-500/30">
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-2">
              <span className="text-cyan-400 font-bold uppercase tracking-wider">
                // NODE INSPECTOR
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-emerald-400">
                ACTIVE
              </span>
            </div>

            <h3 className="font-display text-3xl font-extrabold text-slate-100 mt-2" style={{ color: selectedSkill.color }}>
              {selectedSkill.name}
            </h3>
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300">
              CATEGORY: {selectedSkill.category}
            </span>

            {/* Proficiency Bar */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-400">MASTERY INDEX:</span>
                <span className="font-bold text-cyan-300">{selectedSkill.level}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${selectedSkill.level}%`,
                    backgroundColor: selectedSkill.color,
                    boxShadow: `0 0 10px ${selectedSkill.color}`,
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm text-slate-300 font-body leading-relaxed">
              {selectedSkill.description}
            </p>
          </div>

          {/* Interconnected Neural Nodes */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex items-center space-x-2 font-mono text-xs text-slate-400 mb-3">
              <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
              <span>SYNAPTICALLY LINKED TO:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedSkill.connections.map((connId) => {
                const node = SKILLS_DATA.find((s) => s.id === connId);
                if (!node) return null;
                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      setSelectedSkill(node);
                      onNeuralSound();
                    }}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-slate-200 transition-colors"
                  >
                    {node.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
