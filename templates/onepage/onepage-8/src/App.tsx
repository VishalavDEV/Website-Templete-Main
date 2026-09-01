import React, { useState, useEffect } from 'react';
import { useMousePosition } from './hooks/useMousePosition';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useSound } from './hooks/useSound';
import { useReducedMotion } from './hooks/useReducedMotion';
import { CursorState } from './types';

// UI Components
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillGalaxySection } from './components/SkillGalaxySection';
import { ProjectsSection } from './components/ProjectsSection';
import { SignatureMachineSection } from './components/SignatureMachineSection';
import { AILab } from './components/AILab';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorState, setCursorState] = useState<CursorState>({
    variant: 'default',
    text: '',
  });

  const mousePosition = useMousePosition();
  const { scrollProgress, activeSection } = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();
  const {
    isMuted,
    toggleSound,
    playClick,
    playHover,
    playNeural,
    playMachinePhase,
  } = useSound();

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#040507] text-[#e2e8f0] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Loading Sequence */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Interactive Lagging Custom Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Floating HUD Navigation */}
      <Navbar
        activeSection={activeSection}
        isMuted={isMuted}
        onToggleSound={toggleSound}
        onHoverSound={playHover}
        onClickSound={playClick}
        setCursorState={setCursorState}
      />

      {/* Right Vertical Telemetry Tracker */}
      <ScrollProgress
        progress={scrollProgress}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Main Continuous Single-Page Experience Flow */}
      <main id="main-content" className="relative z-10 w-full overflow-hidden">
        {/* 01 // INTRO */}
        <HeroSection
          mouseX={mousePosition.normalizedX}
          mouseY={mousePosition.normalizedY}
          setCursorState={setCursorState}
          onHoverSound={playHover}
          onClickSound={playClick}
        />

        {/* Dynamic Section Divider with Monospace Data Stream */}
        <div className="w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between border-t border-slate-900 font-mono text-[10px] text-slate-600">
          <span>LATENT_SPACE_TRANSITION // 0x0A</span>
          <span className="hidden sm:inline">DATA_STREAM: CONTINUOUS</span>
          <span>TENSOR_BATCH: READY</span>
        </div>

        {/* 02 // ABOUT */}
        <AboutSection
          setCursorState={setCursorState}
          onHoverSound={playHover}
          onClickSound={playClick}
        />

        {/* 03 // SKILLS GALAXY */}
        <SkillGalaxySection
          setCursorState={setCursorState}
          onHoverSound={playHover}
          onClickSound={playClick}
          onNeuralSound={playNeural}
        />

        {/* 04 // EXPERIMENTS */}
        <ProjectsSection
          setCursorState={setCursorState}
          onHoverSound={playHover}
          onClickSound={playClick}
          onNeuralSound={playNeural}
        />

        {/* 05 // THE MACHINE (SIGNATURE 3D CORE) */}
        <SignatureMachineSection
          scrollProgress={scrollProgress}
          setCursorState={setCursorState}
          onHoverSound={playHover}
          onMachineSound={playMachinePhase}
        />

        {/* 06 // AI LAB (INTERACTIVE EXPERIMENTS) */}
        <AILab
          setCursorState={setCursorState}
          onHoverSound={playHover}
          onClickSound={playClick}
          onNeuralSound={playNeural}
        />

        {/* 07 // JOURNEY (3D VERTICAL MILESTONES) */}
        <JourneySection
          setCursorState={setCursorState}
          onHoverSound={playHover}
          onClickSound={playClick}
        />

        {/* 08 // CONTACT (GATEWAY & PACKET DISPATCHER) */}
        <ContactSection
          setCursorState={setCursorState}
          onHoverSound={playHover}
          onClickSound={playClick}
          onNeuralSound={playNeural}
        />
      </main>
    </div>
  );
}
