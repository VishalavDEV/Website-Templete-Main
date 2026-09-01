import React from 'react';
import { SectionHeader } from './SectionHeader';
import { MachineScene } from '../scenes/MachineScene';
import { CursorState } from '../types';

interface SignatureMachineSectionProps {
  scrollProgress: number;
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
  onMachineSound: (phase: number) => void;
}

export const SignatureMachineSection: React.FC<SignatureMachineSectionProps> = ({
  scrollProgress,
  setCursorState,
  onHoverSound,
  onMachineSound,
}) => {
  return (
    <section id="machine" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        index="05"
        category="SIGNATURE 3D CORE"
        title="THE MACHINE"
        subtitle="A real-time procedural kinetic reactor representing continuous machine learning computation, tensor graph resonance, and intelligent state transitions."
      />

      <MachineScene
        scrollProgress={scrollProgress}
        setCursorState={setCursorState}
        onHoverSound={onHoverSound}
        onMachineSound={onMachineSound}
      />
    </section>
  );
};
