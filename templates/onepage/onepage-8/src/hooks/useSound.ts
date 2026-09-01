import { useState, useEffect, useCallback } from 'react';
import { soundEngine } from '../utils/audio';

export function useSound() {
  const [isMuted, setIsMuted] = useState(soundEngine.getIsMuted());

  useEffect(() => {
    setIsMuted(soundEngine.getIsMuted());
  }, []);

  const toggleSound = useCallback(() => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
  }, []);

  const playClick = useCallback(() => {
    soundEngine.playClick();
  }, []);

  const playHover = useCallback((freq?: number) => {
    soundEngine.playHover(freq);
  }, []);

  const playNeural = useCallback(() => {
    soundEngine.playNeuralPulse();
  }, []);

  const playMachinePhase = useCallback((phase: number) => {
    soundEngine.playMachinePhase(phase);
  }, []);

  return {
    isMuted,
    toggleSound,
    playClick,
    playHover,
    playNeural,
    playMachinePhase,
  };
}
